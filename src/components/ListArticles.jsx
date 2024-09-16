import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";

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
        // console.log(response.data, '<---response in list articles')
        return response.data;
      })
      .then((articleData) => {
        setIsLoading(false);
        setIsError(false);
        // console.log(articleData, '<---articles in list articles')
        setArticles(articleData.articles);
        console.log(articleData);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error, "<---error in list articles");
      });
  }, []);

  console.log(isLoading);
  return (
    <div className="card-container">
      <ul className="article-list-item">
        {!isLoading ? (
          articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })
        ) : (
          <p>articles here...</p>
        )}
      </ul>
    </div>
  );
}
