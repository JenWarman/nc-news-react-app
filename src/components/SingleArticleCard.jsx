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

  return (
    <>
      <h2>{articleById.title}</h2>
      <img src={articleById.article_img_url} />
      <p>author: {articleById.author}</p>
      <p>date: {articleById.created_at}</p>
      <p>{articleById.body}</p>
      <p>{articleById.topic}</p>
    </>
  );
}
