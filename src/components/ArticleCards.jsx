import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ArticleCards({ article }) {
  const readableDate = new Date(article.created_at);
  const formatDate = readableDate.toDateString();

  return (
    <div className="article-card">
      <Card
        className="item-card"
        style={{ width: "18rem", color: "black", borderColor: "red" }}
      >
        <Card.Img
          variant="top"
          src={article.article_img_url}
          alt={article.title}
        />
        <Card.Body>
          <Link
            to={"/article/" + article.article_id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Title id="card-title">{article.title}</Card.Title>
          </Link>
          <div className="topic-and-date">
            <Link
              to={"/topic/" + article.topic}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card.Text className="topic">{article.topic}</Card.Text>
            </Link>
            <Card.Text>{formatDate}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
