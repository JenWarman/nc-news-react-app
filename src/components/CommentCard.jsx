import Card from 'react-bootstrap/Card';

export default function({comment}) {
    const readableDate = new Date(comment.created_at);
    const formatDate = readableDate.toDateString();
    return (
        <>
    <Card>
      <Card.Header>{comment.author}</Card.Header>
      <Card.Body>
        <Card.Text>{comment.body}</Card.Text>
        <div className="author-and-date">
        <Card.Text>{formatDate}</Card.Text>
        <Card.Text id="likes"><i className="fa-solid fa-heart"></i>{comment.votes}</Card.Text>
        </div>
      </Card.Body>
    </Card>
    </>
    )
}