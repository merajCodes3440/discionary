// // import React, { useState } from "react";
// // import axios from "axios";

// // const Home = () => {
// //   const [query, setQuery] = useState("");
// //   const [data, setData] = useState([]);

// //   function btnAction() {
// //     // setData([...data, query]);
// //     // console.log(data);
// //     let url =`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
// //     axios.get("url")
// //     .then((res)=>console.log(res.word))
// //     .catch((error)=>console.log(error))

// //   }
// //   return (
// //     <div className="home-container">
// //       <div className="search">
// //         <input
// //           type="text"
// //           placeholder="search..."
// //           onChange={(e) => setQuery(e.target.value)}
// //         />
// //         <button onClick={btnAction}>Search</button>
// //       </div>
// //       <div>
// //         {data.map((e) => (
// //           <li>{e}</li>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// // export default Home;

// import React, { useState } from "react";
// import axios from "axios";

// const Home = () => {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);
//   const [history, setHistory] = useState([]);

//   function btnAction() {
//     let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;

//     axios
//       .get(url) // Use the `url` variable here, not a string "url"
//       .then((res) => {
//         // Assuming the response data is an array
//         const responseData = res.data;
//         // Store the response data in the `data` state
//         setData(responseData);
//         setHistory([...responseData, data]);
//         // set word in local storage and access from the page of History
//         let wordlist = [history];
//         localStorage.setItem("word", JSON.stringify([wordlist]));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   return (
//     <div className="home-container">
//       <div className="search">
//         <input
//           type="text"
//           placeholder="search..."
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button onClick={btnAction}>Search</button>
//       </div>
//       <div>
//         <ul>
//           {data.map((item, index) => (
//             <div key={index}>
//               {item.word}{" "}
//               {item.meanings.map((meaning, mIndex) => (
//                 <div key={mIndex}>
//                   <strong>Part of Speech:</strong> {meaning.partOfSpeech}
//                   <br />
//                   <strong>Definitions:</strong>
//                   <ul>
//                     {meaning.definitions.map((definition, dIndex) => (
//                       <li key={dIndex}>{definition.definition}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    // Load search history from local storage when the component mounts
    const savedSearchHistory = localStorage.getItem("searchHistory");
    if (savedSearchHistory) {
      setSearchHistory(JSON.parse(savedSearchHistory));
    }
  }, []);

  useEffect(() => {
    // Save updated search history in local storage when it changes
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]); // Listen for changes to searchHistory

  function btnAction() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;

    axios
      .get(url)
      .then((res) => {
        const responseData = res.data;
        setData(responseData);

        // Update search history with the new query
        setSearchHistory([...searchHistory, query]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="home-container">
      <div className="search">
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={btnAction}>Search</button>
      </div>
      <div>
        <ul>
          {data.map((item, index) => (
            <div key={index}>
              {item.word}{" "}
              {item.meanings.map((meaning, mIndex) => (
                <div key={mIndex}>
                  <strong>Part of Speech:</strong> {meaning.partOfSpeech}
                  <br />
                  <strong>Definitions:</strong>
                  <ul>
                    {meaning.definitions.map((definition, dIndex) => (
                      <li key={dIndex}>{definition.definition}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
