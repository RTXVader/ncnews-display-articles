import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesByIds } from '../../Api-util';

import ArticleComments from './Comments';


const FullCard = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    // Implement getArticlesById or a similar function to fetch the article by ID
    // Replace 'getArticlesById' with the actual function name
    getArticlesByIds(article_id)
      .then((itemData) => {
        setArticle(itemData);
        setIsLoading(false);
      })
    
      .catch((error) => {
        console.error('Error fetching article:', error);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="article-card" key={article.id}>
      <h2>{article.title}</h2>
      <p>{article.topic}</p>
      <img src={article.article_img_url} alt={article.title} />
      <p>{article.author}</p>
      <p>{article.date}</p>
      <p>{article.body}</p>
      <p>{article.created_at}</p>
      <p>{article.votes}</p>
      <ArticleComments article_id={article_id} />
    </div>
  );
};

export default FullCard;
