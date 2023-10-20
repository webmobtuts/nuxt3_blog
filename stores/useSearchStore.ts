import {defineStore} from "pinia";
import {FetchContext, FetchResponse} from "ofetch";

export const useSearchStore = defineStore('search', () => {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;

    const posts = ref([]);
    const loading = ref(false);

    const page = ref(1);
    const limit = ref(5);
    const totalFound = ref(0);
    const searchQuery = ref('');

    const getQueryParams = () => {
        const query = {
            _page: page.value,
            _limit: limit.value,
            _sort: 'id',
            _order: 'desc'
        }

        if(searchQuery.value) {
            query.title_like = searchQuery.value;
        }

        return query;
    }

    const fetchPosts = async (opts = {}, callback = null) => {

        posts.value = [];
        loading.value = true;

        const {data, pending, error, refresh} = await useFetch(`${apiBase}/posts`, {
            query: getQueryParams(),
            onResponse: ({response}) => {
                totalFound.value = parseInt(response.headers.get('X-Total-Count'));
            },
            ...opts
        });

        loading.value = false;

        if(data && !pending.value && !error.value) {
            posts.value = data.value;
        }
    }

    const getPostsCount = () => {
        $fetch(`${apiBase}/posts`, {
            query: getQueryParams(),
            onResponse: ({response}) => {
                totalFound.value = parseInt(response.headers.get('X-Total-Count'));
            },
        })
    }

    const setPage = (pagenum) => {
        page.value = pagenum;

        fetchPosts({server: false, lazy: true}).then();
    }

    return {
        posts,
        page,
        fetchPosts,
        getPostsCount,
        setPage,
        loading,
        limit,
        totalFound,
        searchQuery
    }
});