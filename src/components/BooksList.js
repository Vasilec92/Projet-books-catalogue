import React, { useState, useEffect } from "react";
import BookCard from "./BookCard.js";

const BooksList = ({ data }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(data);
  }, [data]);

  return (
    <div className="wrapper">
      {books?.map((el, idx) => (
        <BookCard key={idx} book={el} />
      ))}
    </div>
  );
};

export default BooksList;
