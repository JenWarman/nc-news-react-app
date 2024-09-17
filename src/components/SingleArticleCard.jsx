import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListComments from "./ListComments";
import { Link } from "react-router-dom";

export default function SingleArticleCard() {
  const [articleById, setArticleById] = useState([]);
  const [votes, setVotes] = useState(0);
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

  const handleClick = (event) => {
    console.log(event)
    event.preventDefault();
    setVotes(votes => votes +1);
  }
  
  const handlSubmit = (event) => {
    console.log(event)
  }
  

  return (
    <>
    <div id="back-arrow">
    <Link to={'/'}><i className="fa-sharp fa-solid fa-arrow-left"></i></Link>
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
          <div id="article-votes-container">
          <p>{votes}</p>
          <div onSubmit={handlSubmit}> 
         <button onClick={handleClick}><i className="fa-solid fa-heart"></i></button>
          </div>
          </div>
        </div>
      </div>
      <ListComments article_id={article_id}/>
    </>
  );
}
