import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  let wordlist = JSON.parse(localStorage.getItem("searchHistory"));

  // Function to handle when a word is clicked
  // const handleWordClick = (word) => {
  //   // You can add your logic here to display the meanings of the clicked word
  //   console.log(`Clicked word: ${word}`);
  // };

  return (
    <div className="home-container">
      <h1>History page</h1>
      {/* <ul>
        {wordlist.map((item, index) => (
          <li key={index}>
            {/* Render a clickable link for each word 
            <a href="#" onClick={() => handleWordClick(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul> */}
      <ul>
        {wordlist.map((item, index) => (
          <li key={index}>
            {/* Use Link to navigate to WordDetails */}
            <Link to={`/word/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
