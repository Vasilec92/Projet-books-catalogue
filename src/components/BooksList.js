import React, { useState } from "react";
import BookCard from "./BookCard.js";

const BooksList = ({ data }) => {
  const [books, setBooks] = useState(data);

  return (
    <div className="wrapper">
      {books?.map((el, idx) => (
        <BookCard title={el.title} author={el.author} id={el.id} key={idx} />
      ))}
    </div>
  );
};

export default BooksList;
