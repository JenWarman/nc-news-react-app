import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesBySortBy } from "../api";
import ArticleCards from "./ArticleCards";
import { useNavigate } from "react-router-dom";

export default function ListArticlesByQuery() {
  const [currentQuery, setCurrentQuery] = useState([]);
  const { sort_by } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticlesBySortBy("votes")
      .then((articles) => {
        setCurrentQuery(articles);
      })
      .catch((error) => {
        return navigate(`/${error.status}`);
      });
  }, [sort_by]);

  return (
    <div className="card-container">
      {currentQuery ? (
        currentQuery.map((article) => {
          return <ArticleCards key={article.article_id} article={article} />;
        })
      ) : (
        <p>There are no articles</p>
      )}
    </div>
  );
}
