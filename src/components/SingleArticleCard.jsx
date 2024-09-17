import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleArticleCard() {
  const [articleById, setArticleById] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    axios
      .get("https://nc-news-53nl.onrender.com/api/articles/" + article_id)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setIsLoading(false);
        setIsError(false);
        console.log(data[0]);
        setArticleById(data[0]);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const readableDate = new Date(articleById.created_at);
  const formatDate = readableDate.toDateString();

  return (
    <>
      <div className="article-container">
        <div className="article">
          <h2>{articleById.title}</h2>
          <img id="article-img" src={articleById.article_img_url} alt={articleById.title}/>
          <div className="author-and-date">
            <p className="author-or-date">author: {articleById.author}</p>
            <p className="author-or-date">{formatDate}</p>
          </div>
          <p id="article-body">{articleById.body}</p>
          <p id="topic">{articleById.topic}</p>
        </div>
      </div>
    </>
  );
}
