import React, { useState, useEffect } from 'react';
import './Home.css';  // Import your CSS file

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the backend
    fetch('http://localhost:5000/api/articles')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the fetched data
        setArticles(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Career Development Articles</h1>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div className="article-card" key={index}>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.summary}</p>
          </div>
        ))
      ) : (
        <p>No articles available.</p>
      )}
    </div>
  );
};

export default Home;
