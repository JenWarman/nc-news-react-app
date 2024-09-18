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
  <h3 id="comments-header">Comments</h3>
    {comments.length >= 1 ?comments.map((comment, index) => {
        return <CommentCard key={index} comment={comment} />
    }): (<p>There are not comments for this post yet.</p>)}
  </>
  )
}
