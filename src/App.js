import "./App.scss";
import NavBar from "./components/NavBar.js";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Admin from "./pages/Admin.js";
import InfoBook from "./components/InfoBook.js";
const data = [
  { id: "1", title: "Boris Godounov", description: "cool", author: "Pushkin" },
  {
    id: "2",
    title: "La Steppe rouge",
    description: "cool",
    author: "Joseph Kessel",
  },
  {
    id: "3",
    title: "Pour l'honneur",
    description: "cool",
    author: "Joseph Kessel",
  },
  { id: "4", title: "La Roussalka ", description: "cool", author: "Pushkin" },
  {
    id: "5",
    title: "Le Chevalier avare",
    description: "cool",
    author: "Pushkin",
  },
  { id: "6", title: "Start", description: "cool", author: "Pushkin" },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Home data={data} />
        </Route>
        <Route path="/admin">
          <Admin data={data} />
        </Route>
        <Route path="/book/:id">
          <InfoBook data={data} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
