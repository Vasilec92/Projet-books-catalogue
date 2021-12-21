import React, { useState, useEffect } from "react";
import "./App.scss";
import NavBar from "./components/NavBar.js";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Admin from "./pages/Admin.js";
import InfoBook from "./components/InfoBook.js";
import axios from "axios";
import URL from "./utile/url.js";

function App() {
  const [books, setBooks] = useState([]);
  async function getBooks() {
    try {
      const response = await axios.get(`${URL}/books`);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Home data={books} />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/book/:id">
          <InfoBook data={books} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
