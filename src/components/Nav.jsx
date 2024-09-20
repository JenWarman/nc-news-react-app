import { useState } from "react";
import { Link } from "react-router-dom";
import TopicPage from "./TopicPage";
import axios from "axios";

export default function Nav() {
  const [topic, setTopic] = useState([]);
  const [sortBy, setSortBy] = useState('')

  const handleClick = (event) => {
    setTopic(event.target.value);
  };

  const handleQueryClick = (event) => {
    setSortBy(event.target.value);
  }
 
  return (
    <div className="search-container">
      <Link to='/'>
      <button className="topic-button" onClick={handleClick} value="home">
        Home</button>
      </Link>
      <Link to="/topic/cooking">
      <button className="topic-button" onClick={handleClick} value="cooking">
        Cooking</button></Link>
      <Link to="/topic/coding">
      <button className="topic-button" onClick={handleClick} value="coding">
        Coding</button></Link>
        <Link to="/topic/football">
      <button className="topic-button" onClick={handleClick} value="football">
        Football</button></Link>
        <Link to='/sort_by/highest_rated'>
        <button className="topic-button" onClick={handleQueryClick} value="highest_rated">
        Highest Rated</button></Link>
    </div>
  );
}
