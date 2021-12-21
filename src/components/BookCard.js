import React from "react";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  return (
    <div className="card">
      <div className="card__body">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/41UHen-IwaL._SX327_BO1,204,203,200_.jpg"
          className="card__image"
          alt="book cover"
        />
        <h2 className="card__title">{book.title}</h2>
        <p className="card__description">{book.authors.first_name}</p>
        <p className="card__description">{book.authors.last_name}</p>
      </div>
      <Link to={`/book/${book.id}`} className="card__btn">
        More details
      </Link>
    </div>
  );
};

export default BookCard;
