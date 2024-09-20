import ArticleCards from "./ArticleCards";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { fetchArticles } from "../api";

export default function ListArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchArticles()
      .then((articles) => {
        setIsLoading(false);
        setIsError(false);
        setArticles(articles);
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
          return <ArticleCards key={article.article_id} article={article} />;
        })
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}
