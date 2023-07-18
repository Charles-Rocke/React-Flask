import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const mappedGarage = [];

function App() {
  const [garage, setGarage] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/profile`);
      const data = await res.json();
      console.log(data);
      setGarage(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <div>
        {isLoading && "loading..."}
        {!isLoading &&
          garage.map((car, i) => (
            <ul>
              <li>
                {" "}
                key={i}>{car}
              </li>
            </ul>
          ))}
      </div> */}
    </>
  );
}

export default App;
