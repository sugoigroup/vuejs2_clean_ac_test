let BASE_URL = 'https://jsonplaceholder.typicode.com';

if (process.env.NODE_ENV !== 'production') {
    // BASE_URL = "http://localhost:8081";
}

// API 관련 정의
export default Object.freeze({

    // BASE_URL 
    BASE_URL: "https://jsonplaceholder.typicode.com",

    // Posts List 
    ARTICLES: BASE_URL + "/posts",

    COMMENTS: BASE_URL + "/comments",

    DETAIL: BASE_URL + "/posts/",

    // Register
    POST: BASE_URL + "/posts",

    

})