// Topic.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../../Api-util';


const Topic = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    
    getArticles()
      .then((articlesData) => {
        const filteredArticles = articlesData.filter((article) => article.topic === topic);
      setArticles(filteredArticles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
        setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{topic} articles</h1>
      {articles.map((article) => (
        <div key={article.article_id}>
          <h2>{article.title}</h2>
    <img src={article.article_img_url}/>
    <p>{article.author}</p>
          <p>{article.date}</p>
         <form action={`https://reliable-conkies-efec20.netlify.app/articles/${article.article_id}`}>
    <input type="submit" value="Read More" />
    </form>
         </div>
      ))}
    </div>
//     {articles.map((article) => (
        
//         <div className="article-card" key={article.id}>
//          <h2>{article.title}</h2>
//          <img src={article.article_img_url}/>
//           <p>{article.author}</p>
//           <p>{article.date}</p>
//           {/* <button>Read More</button> */}
//           <form action={`http://localhost:5173/articles/${article.article_id}`}>
//     <input type="submit" value="Read More" />
// </form>
//         </div>
//       ))}
  );
};

export default Topic;
