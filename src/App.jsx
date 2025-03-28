import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from  "./components/SearchBar"
import NewsList from "./components/NewsList";
import "./components/style.css"

const API_KEY = "1ae7f1347b974ef4acb086ec24bc6861";
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(API_URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div className="app-container">
      <h2>News Aggregator</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewsList articles={articles} searchTerm={searchTerm} />
    </div>
  );
};


export default App;
