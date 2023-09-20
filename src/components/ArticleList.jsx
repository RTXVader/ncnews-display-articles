import React, { useState, useEffect } from 'react';
import Card from './ArticleCard';
import { getArticles } from '../../Api-util';
import { useParams } from 'react-router-dom';

// const CardList = () => {
//   const [articles, setArticles] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch('https://nc-news-m2x4.onrender.com/api/articles')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArticles(data.items); // Assuming the API response contains an array of articles in the "items" property
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching articles:', error);
  //       setIsLoading(false);
  //     });
  // }, []);
  const CardList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams
    useEffect(() => {
      getArticles(article_id)
        .then((itemData) => {
          // console.log('Data received:', itemData); // Add this log to check the received data
          setArticles(itemData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching articles:', error);
          setIsLoading(false);
        });
    }, [articles, article_id]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="Item-Container">
        <Card articles={articles} />
      </div>
    );
  };
  
  export default CardList;