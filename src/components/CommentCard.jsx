import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ({ comment }) {
  const [votes, setVotes] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const { article_id } = useParams();

  const handleClick = (event) => {
    setVotes((currentVotes) => currentVotes + 1);
    setButtonClicked(true);
  };

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
            <Card.Text
              id="likes"
              onClick={handleClick}
              disabled={buttonClicked}
            >
              <i className="fa-solid fa-heart"></i>
              {votes + comment.votes}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
