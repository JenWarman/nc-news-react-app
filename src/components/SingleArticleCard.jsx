import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListComments from "./ListComments";
import { Link } from "react-router-dom";

export default function SingleArticleCard() {
  const [articleById, setArticleById] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    axios
      .get("https://nc-news-53nl.onrender.com/api/articles/" + article_id)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setArticleById(data[0]);
      })
      .catch((error) => {
      });
  }, []);

  const readableDate = new Date(articleById.created_at);
  const formatDate = readableDate.toDateString();

  return (
    <>
    <div id="back-arrow">
    <Link to={'/'}><i class="fa-sharp fa-solid fa-arrow-left"></i></Link>
    </div>
      <div className="article-container">
        <div className="article">
          <h2>{articleById.title}</h2>
          <img id="article-img" src={articleById.article_img_url} alt={articleById.title}/>
          <div className="author-and-date">
            <p className="author-or-date">author: {articleById.author}</p>
            <p className="author-or-date">{formatDate}</p>
          </div>
          <p id="article-body">{articleById.body}</p>
          <p className="topic">{articleById.topic}</p>
        </div>
      </div>
      <ListComments article_id={article_id}/>
    </>
  );
}
