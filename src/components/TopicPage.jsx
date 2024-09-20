import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../api";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import ArticleCards from "./ArticleCards";
import { useNavigate } from "react-router-dom";

export default function TopicPage() {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  const navigate = useNavigate();
  const { topic } = useParams();

  useEffect(() => {
    setArticlesByTopic(topic);
    fetchArticlesByTopic(topic)
      .then((articles) => {
        setCurrentArticles(articles);
      })
      .catch((error) => {
        return navigate(`/${error.status}`);
      });
  }, [topic]);

  if (!topic) {
    return <p>no articles for this topic</p>;
  }
  return (
    <div className="card-container">
      {currentArticles ? (
        currentArticles.map((article) => {
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
