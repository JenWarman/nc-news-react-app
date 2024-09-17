import { useEffect, useState } from "react";
import axios from "axios";
import CommentCard from "./CommentCard";

export default function ListComments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    axios.get(
      `https://nc-news-53nl.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data
      })
      .then((data) => {
        setIsLoading(false);
        setIsError(false);
        setComments(data.comments)
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      })
  }, []);

  return (
  <>
  <div>
  <h3>Comments</h3>
    {comments.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} />
    })}
  </div>
  </>
  )
}
