import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";
import {useState, useEffect} from 'react';
import Nav from "./Nav";
import ArticleCards from "./ArticleCards";

export default function TopicPage() {
const [articlesByTopic, setArticlesByTopic] = useState([]);
const [currentArticles, setCurrentArticles] = useState([])

const {topic} = useParams();
useEffect(() => {
    setArticlesByTopic(topic);
    fetchArticles()
    .then((articles)=> {
        // articles.map((article) => {
        //     console.log(article.topic)
        // })
        // console.log(articles)
    setCurrentArticles(articles)
    })
    .catch((error) => {
        console.log(error, '<--error in topic page')
    })
}, [])

// console.log(topic)
//  if (!topic) {
//     return (
//         <p>no articles for this topic</p>
//     )
//  }
    return (
        <>
       <p>topics</p>
        </>
    )
}
