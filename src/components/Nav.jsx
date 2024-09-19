import { useState } from "react";
import { Link } from "react-router-dom";
import TopicPage from "./TopicPage";

export default function Nav() {
  const [topic, setTopic] = useState([]);

  const handleClick = (event) => {
    console.log(event.target.value);
    setTopic(event.target.value);
    // return (
    //   <TopicPage topic={topic}/>
    // )
  };
 
  return (
    <>
    <div className="search-container">
      <Link to="article/cooking">
      <button className="topic-button" onClick={handleClick} value="cooking">
        Cooking</button></Link>
      <Link to="article/coding">
      <button className="topic-button" onClick={handleClick} value="coding">
        Coding</button></Link>
        <Link to="article/football">
      <button className="topic-button" onClick={handleClick} value="football">
        Football</button></Link>
    </div>
    
    </>
  );
}
