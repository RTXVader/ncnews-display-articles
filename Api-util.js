import axios from 'axios'
const articleApi = axios.create({
    baseURL: "https://nc-news-m2x4.onrender.com/api",
  });

  export const getArticles =() => {
    return articleApi.get('/articles').then((res) => {
        // console.log(res, 'res')
        // console.log(res.data)
        // console.log(res.data.items, 'res data items');
        // console.log(res.data)
        // console.log(res.data.articles)
        return res.data.articles;
      });
  }
  export const getArticlesByIds = (article_id) => {
    return articleApi.get(`/articles/${article_id}`).then((res) => {
        
        return res.data.article
    })
  }
export const getArticlesByIdsComments = (article_id) => {
    return articleApi.get(`/articles/${article_id}/comments`).then((res) => {
        // console.log(res.data)
        return res.data.comments
    })
}
export const getTopics = () => {
    return articleApi.get(`/articles`).then((res) => {
        // console.log(res)
        // console.log(res.data)
        return res.data.topics
    })
  }

  