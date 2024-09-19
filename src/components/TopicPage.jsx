import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../api";
import {useState, useEffect} from 'react';
import Nav from "./Nav";
import ArticleCards from "./ArticleCards";

export default function TopicPage() {
const [articlesByTopic, setArticlesByTopic] = useState([]);
const [currentArticles, setCurrentArticles] = useState([])

const {topic} = useParams();
useEffect(() => {
    setArticlesByTopic(topic);
    fetchArticlesByTopic(topic)
    .then((articles)=> {
        setCurrentArticles(articles)
    })
    .catch((error) => {
        console.log(error, '<--error in topic page')
    })
}, [topic])

 if (!topic) {
    return (
        <p>no articles for this topic</p>
    )
 }
    return (
        <div className="card-container">
        {currentArticles ? (
          currentArticles.map((article) => {
            return <ArticleCards key={article.article_id} article={article} />;
          })
        ) : (
          <p>articles here...</p>
        )}
      </div>
    )
}
