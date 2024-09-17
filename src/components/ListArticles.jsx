import ArticleCard from "./ArticleCards";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleArticleCard from "./SingleArticleCard";
import { useParams } from "react-router-dom";

export default function ListArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    axios
      .get("https://nc-news-53nl.onrender.com/api/articles")
      .then((response) => {
        return response.data;
      })
      .then((articleData) => {
        setIsLoading(false);
        setIsError(false);
        setArticles(articleData.articles);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className="card-container">
      {!isLoading ? (
        articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })
      ) : (
        <p>articles here...</p>
      )}
      <SingleArticleCard />
    </div>
  );
}
