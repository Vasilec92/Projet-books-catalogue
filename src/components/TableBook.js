import React, { useState, useEffect } from "react";
import AddBook from "../components/AddBook.js";
import ModifyBook from "../components/ModifyBook.js";
import AddAuthor from "../components/AddAuthor.js";
import axios from "axios";
import URL from "../utile/url.js";
const TableBook = () => {
  const [modifier, setModifier] = useState([]);
  const [addBook, setAddBook] = useState(false);
  const [addAuthor, setAddAuthor] = useState(false);
  const [books, setBooks] = useState([]);
  const getModif = (idx) => {
    const value = [...modifier];
    value[idx] ? (value[idx] = false) : (value[idx] = true);
    setModifier(value);
  };
  const delateBook = async (id) => {
    try {
      const response = await axios.post(`${URL}/books/delateBook`, {
        id: id,
      });
      console.log(response);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
  console.log(books);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="table__th">N°</th>
            <th className="table__th">Author</th>
            <th className="table__th">Title</th>
            <th className="table__th">Edition</th>
            <th className="table__th">Language</th>
            <th className="table__th">Cover</th>
            <th className="table__th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <td className="table__td">{idx + 1}</td>
                <td className="table__td">{`${book.authors?.first_name} ${book.authors?.last_name} `}</td>
                <td className="table__td">{book.title}</td>
                <td className="table__td">{book.editor}</td>
                <td className="table__td">{book.languages?.name}</td>
                <td className="table__td">
                  <img className="table__image" src={book.img} alt="cover" />
                </td>
                <td className="table__td">
                  <div className="table__btns">
                    <button
                      className="table__btn"
                      onClick={() => delateBook(book.id)}
                    >
                      delate
                    </button>
                    <button
                      className="table__btn"
                      onClick={() => getModif(idx)}
                    >
                      modify
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                {modifier[idx] && (
                  <td className="table__td" colSpan="8">
                    <ModifyBook book={book} setBooks={setBooks} />
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
                <AddBook books={books} setBooks={setBooks} />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableBook;
