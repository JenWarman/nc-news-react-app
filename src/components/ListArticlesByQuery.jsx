import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesBySortBy } from "../api";
import ArticleCards from "./ArticleCards";

export default function ListArticlesByQuery() {
const [currentQuery, setCurrentQuery] = useState([]);
const {sort_by} = useParams();

useEffect(()=> {
    fetchArticlesBySortBy('votes')
    .then((articles) => {
        setCurrentQuery(articles)
    })
    .catch((error)=> {
        console.log(error, '<---error in list articles by query')
    })
}, [sort_by])

console.log(currentQuery)
    return (
        <div>
           {currentQuery ? (
            currentQuery.map((article)=> {
                return <ArticleCards key={article.article_id} article={article} />;
            })
           ) : <p>There are no articles</p>}
        </div>
    )
}