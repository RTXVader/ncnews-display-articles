import React, { useEffect, useState } from 'react';
import { getArticlesByIdsComments } from '../../Api-util';
import { useParams } from 'react-router-dom';

const ArticleComments = ({ article_id }) => {
  
    const [comment, setComment] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // const { article_id } = useParams();
  
  
    useEffect(() => {
    getArticlesByIdsComments(article_id).then((itemData) => {
        setComment(itemData);
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

  if (!comment) {
    return <div>Article not found.</div>;
  }
  
  
    return (
    <div className="comments-container">
      <h2>Comments:</h2>
      {comment.map((comment) => (
        <div className="comment-card" key={comment.id}>
          <p>{comment.author}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleComments;
