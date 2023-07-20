import { useState, useEffect } from "react";
import "./assets/css/theme.css";
import Nav from "./components/Nav";

const mappedGarage = [];

function App() {
  const [header, setHeader] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/profile`);
      const data = await res.json();
      console.log(data);
      setHeader(data.info);
      setIsLoading(false);
    }
    getMovieDetails();
  }, []);

  return (
    <main className="main" id="top">
      <Nav />
    </main>
  );
}

export default App;
