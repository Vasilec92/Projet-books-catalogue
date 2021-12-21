import React, { useEffect, useState } from "react";
import axios from "axios";
import URL from "../utile/url.js";
const AddBook = ({ books, setBooks }) => {
  const [book, setBook] = useState({
    title: "",
    id_author: "",
    id_genre: "",
    editor: "",
    img: "",
    description: "",
    id_language: "",
  });
  const [listAuthors, setListAuthors] = useState([]);
  const [listGenres, setListGenres] = useState([]);
  const [listLanguage, setListLanguage] = useState([]);

  const handleChange = (event) => {
    const values = { ...book };
    values[event.target.name] = event.target.value;
    setBook(values);
  };
  async function getAuthors() {
    try {
      const response = await axios.get(`${URL}/authors`);
      setListAuthors(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function getGenres() {
    try {
      const response = await axios.get(`${URL}/genres`);
      setListGenres(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function getLanguages() {
    try {
      const response = await axios.get(`${URL}/languages`);
      setListLanguage(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function newBook() {
    try {
      const response = await axios.post(`${URL}/books/new`, { ...book });
      console.log(response);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    newBook();
  };
  useEffect(() => {
    getAuthors();
    getGenres();
    getLanguages();
  }, []);
  console.log(book);
  return (
    <div className="input">
      <form className="input" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title" className="input__visually">
          Title
        </label>
        <input
          className="input__field"
          type="text"
          placeholder="Title"
          id="title"
          value={book.title}
          name="title"
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="edition" className="input__visually">
          Edition
        </label>
        <input
          className="input__field"
          type="text"
          placeholder="Edition"
          id="edition"
          name="editor"
          value={book.editor}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="img" className="input__visually">
          Path to the image
        </label>
        <input
          type="text"
          name="img"
          id="img"
          value={book.img}
          placeholder="Path to the image"
          className="input__field"
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="description" className="input__visually">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={book.description}
          placeholder="Description"
          className="input__field"
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="author" className="input__visually">
          Choose an author:
        </label>
        <select
          id="author"
          name="id_author"
          className="input__field"
          value={book.id_author}
          onChange={(event) => handleChange(event)}
        >
          <option value="">--Please choose an author--</option>
          {listAuthors?.map((el, idx) => (
            <option
              key={idx}
              value={el.id}
            >{`${el.first_name}  ${el.last_name}`}</option>
          ))}
        </select>
        <label htmlFor="genre" className="input__visually">
          Choose a genre:
        </label>
        <select
          id="genre"
          name="id_genre"
          value={book.id_genre}
          className="input__field"
          onChange={(event) => handleChange(event)}
        >
          <option value="">--Please choose a genre--</option>
          {listGenres?.map((el, idx) => (
            <option key={idx} value={el.id}>
              {el.name}
            </option>
          ))}
        </select>
        <label htmlFor="language" className="input__visually">
          Choose an language:
        </label>
        <select
          id="language"
          name="id_language"
          value={book.id_language}
          className="input__field"
          onChange={(event) => handleChange(event)}
        >
          <option value="">--Please choose an language--</option>
          {listLanguage?.map((el, idx) => (
            <option key={idx} value={el.id}>
              {el.name}
            </option>
          ))}
        </select>
        <button className="input__btn">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
