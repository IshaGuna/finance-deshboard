import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({ articles, searchTerm }) => {
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="news-list">
      {filteredArticles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
