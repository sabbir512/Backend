import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        console.log(res);
        setJokes(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h1>Jokes of the Year</h1>
      <p>Joke: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2> {joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))}
      
    </>
  );
}

export default App;
