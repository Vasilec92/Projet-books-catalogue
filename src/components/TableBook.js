import React, { useState } from "react";
import AddBook from "../components/AddBook.js";
import ModifyBook from "../components/ModifyBook.js";
import AddAuthor from "../components/AddAuthor.js";
const TableBook = ({ data }) => {
  const [modifier, setModifier] = useState([]);
  const [addBook, setAddBook] = useState(false);
  const [addAuthor, setAddAuthor] = useState(false);
  const [books, setBooks] = useState(data);
  const getModif = (idx) => {
    const value = [...modifier];
    value[idx] ? (value[idx] = false) : (value[idx] = true);
    setModifier(value);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="table__th">N°</th>
            <th className="table__th">Author</th>
            <th className="table__th">Title</th>
            <th className="table__th">Edition</th>
            <th className="table__th">language</th>
            <th className="table__th">Cover</th>
            <th className="table__th">Language</th>
            <th className="table__th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <td className="table__td">{idx + 1}</td>
                <td className="table__td">{book.author}</td>
                <td className="table__td">{book.title}</td>
                <td className="table__td">January</td>
                <td className="table__td">$100</td>
                <td className="table__td">
                  <img
                    className="table__image"
                    src="https://images-na.ssl-images-amazon.com/images/I/41UHen-IwaL._SX327_BO1,204,203,200_.jpg"
                    alt="cover"
                  />
                </td>
                <td className="table__td">$100</td>
                <td className="table__td">
                  <div className="table__btns">
                    <button className="table__btn">supprimer</button>
                    <button
                      className="table__btn"
                      onClick={() => getModif(idx)}
                    >
                      modifier
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                {modifier[idx] && (
                  <td className="table__td" colSpan="8">
                    <ModifyBook book={book} />
                  </td>
                )}
              </tr>
            </React.Fragment>
          ))}
          <tr>
            <td className="table__td" colSpan="8">
              <div className="groupBtns">
                <button
                  className="groupBtns__btn"
                  onClick={() => setAddAuthor(!addAuthor)}
                >
                  Add author
                </button>
                <button
                  className="groupBtns__btn"
                  onClick={() => setAddBook(!addBook)}
                >
                  Add book
                </button>
              </div>
            </td>
          </tr>
          <tr>
            {addAuthor && (
              <td className="table__td" colSpan="8">
                <AddAuthor />
              </td>
            )}
          </tr>
          <tr>
            {addBook && (
              <td className="table__td" colSpan="8">
                <AddBook />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableBook;
