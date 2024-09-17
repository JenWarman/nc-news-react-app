import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ArticleCards({ article }) {
  return (
    <>
      <div className="article-card">
        <Card className="item-card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={article.article_img_url} />
          <Card.Body>
            <Link to={'/article/'+article.article_id}>
              <Card.Title>{article.title}</Card.Title>
            </Link>
            <section className="votes-and-likes">
              <Card.Text id="votes">
                <i className="fa-solid fa-heart"></i>
                {article.votes}
              </Card.Text>
              <Card.Text id="comments">
                comments: {article.comment_count}
              </Card.Text>
            </section>
            <Card.Text>{article.topic}</Card.Text>
            <Card.Text>{article.created_at}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
