const callPostApi = async(urlParams) => {
    return fetch(`https://dummyapi.io/data/v1/${urlParams}`, {
        headers: { 'app-id': '623dbe22f199bb7e61ad675e' },
    }).then((result) => result.json());
}

export async function getPostsData() {
    return callPostApi('post?limit=10');
}

export async function getAllPostIds() {
    const posts = await callPostApi('post?limit=10');

    return posts.data.map(d => {
        return {
            params: {
                id: d.id
            }
        }
    })
}

export async function getPostData(id) {
    return callPostApi(`post/${id}`);
}