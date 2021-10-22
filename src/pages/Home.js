import React from "react";
import BooksList from "../components/BooksList.js";
import Search from "../components/Search.js";

const Home = ({ data }) => {
  return (
    <div>
      <Search />
      <BooksList data={data} />
    </div>
  );
};

export default Home;
