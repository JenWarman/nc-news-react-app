import { useState } from "react";

export default function Nav() {
const [topic, setTopic] =useState([])

const handleClick = (event) => {
  console.log(event.target.value)
  setTopic(event.target.value)
}

  return (
    <div className="search-container">
      <button className="topic-button" onClick={handleClick} value="cooking">Cooking</button>
     <button className="topic-button" onClick={handleClick} value="coding">Coding</button>
      <button className="topic-button" onClick={handleClick} value="football">Football</button>
    </div>
  );
}
