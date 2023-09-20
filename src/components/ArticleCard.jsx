import React from 'react';

const Card = ({ articles }) => {


  return (
    <>
      {articles.map((article) => (
        
        <div className="article-card" key={article.article_id}>
         <h2>{article.title}</h2>
         <img src={article.article_img_url}/>
          <p>{article.author}</p>
          <p>{article.date}</p>
          {/* <button>Read More</button> */}
          <form action={`http://localhost:5173/articles/${article.article_id}`}>
    <input type="submit" value="Read More" />
</form>
        </div>
      ))}
    </>
  );
};

export default Card;
