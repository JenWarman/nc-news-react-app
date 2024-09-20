import Card from "react-bootstrap/Card";
import { useState } from "react";
import { deleteCommentByCommentId } from "../api";

export default function ({ comment }) {
  const [votes, setVotes] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleClick = (event) => {
    setVotes((currentVotes) => currentVotes + 1);
    setButtonClicked(true);
  };

  const handleDelete = (event) => {
    setIsDeleting(true);
    deleteCommentByCommentId(comment.comment_id)
    .then((response) => {
      setDeleted(true);
      setIsDeleting(false);
    })
    .catch((error) => {
      setDeleted(false);
      setIsDeleting(false);
    })
  }

  if (deleted) {
    return <p>Your comment has been deleted.</p>
  }

  const user = 'grumpy19';

  const readableDate = new Date(comment.created_at);
  const formatDate = readableDate.toDateString();

  return (
    <div className="individual-comment-card">
      <Card>
        <Card.Header>
          {comment.author}
          <Card.Text id="comment-date">{formatDate}</Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Text>{comment.body}</Card.Text>
          <div className="author-and-date">
            <Card.Text id="likes" onClick={handleClick} disabled={buttonClicked}>
              <i className="fa-solid fa-heart"></i>
              {votes + comment.votes}</Card.Text>
            {comment.author === user ? <Card.Text id="trash" onClick={handleDelete}>
              <i className="fa-solid fa-trash-can"></i></Card.Text> : null}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
