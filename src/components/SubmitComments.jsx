import axios from "axios";
import { useState, useEffect } from "react";

export default function SubmitComments({ article_id }) {
  const [newComment, setNewComment] = useState([{ username: "", body: "" }]);
  

// useEffect(() => {
//     axios.get(
//         `https://nc-news-53nl.onrender.com/api/articles/${article_id}/comments`)
//       .then((response) => {
//           return response.data
//         }).catch((error) => {
//             console.log(error)
//         })
// }, [newComment])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value)
    setNewComment((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewComment(newComment);
    axios
      .post(
        `https://nc-news-53nl.onrender.com/api/articles/${article_id}/comments`,
        newComment
      )
      .then((response) => {
        setNewComment('')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          name="username"
          value={newComment.author}
          onChange={handleChange}
          className="submit-comment"
          placeholder="username"
        ></input>
        <input
          name="body"
          value={newComment.body}
          onChange={handleChange}
          className="submit-comment"
          placeholder="add a comment..."
        ></input>
        <button className="submit-comment" id="submit-comment-button">
          Submit
        </button>
      </form>
    </div>
  );
}
