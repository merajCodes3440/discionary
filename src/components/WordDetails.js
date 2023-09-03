// WordDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const WordDetails = ({ word }) => {
  const [meanings, setMeanings] = useState([]);

  useEffect(() => {
    // Fetch meanings for the word from your API
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        const responseData = res.data;
        setMeanings(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [word]);

  return (
    <div>
      <h2>Meanings of "{word}"</h2>
      <ul>
        {meanings?.map((meaning, index) => (
          <li key={index}>
            <strong>Part of Speech:</strong> {meaning.partOfSpeech}
            <br />
            <strong>Definitions:</strong>
            <ul>
              {meaning.definitions?.map((definition, dIndex) => (
                <li key={dIndex}>{definition.definition}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordDetails;
