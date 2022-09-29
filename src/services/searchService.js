import * as request from '~/utils/request';
const fetchAPI = async () => {
    try {
        const res = await request.get('users/search', {
            params: {
                q: debounced,
                type: 'less',
            },
        });

        setSearchResults(res.data);
        setLoading(false);
    } catch (error) {}
};

fetchAPI();
