import React from "react";
import { useParams } from "react-router-dom";

const InfoBook = ({ data }) => {
  const { id } = useParams();

  return (
    <div className="info">
      {data
        .filter((el) => el.id === id)
        .map((book, idx) => (
          <div key={idx} className="info">
            <div className="info__image">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41UHen-IwaL._SX327_BO1,204,203,200_.jpg"
                alt="place"
              />
            </div>
            <div className="info__description">
              <h2 className="info_title">{book.title}</h2>
              <h3>Description: </h3>
              <p>{book.description}</p>
              <h3>Edition: </h3>
              <h3>Language:</h3>
              <p>Russian</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default InfoBook;
