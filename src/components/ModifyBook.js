import React, { useEffect, useState } from "react";
import axios from "axios";
import URL from "../utile/url.js";
const ModifyBook = ({ setBooks, book }) => {
  const [bookModify, setBookModify] = useState(book);
  const [listAuthors, setListAuthors] = useState([]);
  const [listGenres, setListGenres] = useState([]);
  const [listLanguage, setListLanguage] = useState([]);
  const handleChange = (event) => {
    const values = { ...bookModify };
    values[event.target.name] = event.target.value;
    setBookModify(values);
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

  async function modifBook() {
    try {
      const response = await axios.put(`${URL}/books/modifBook`, {
        ...bookModify,
      });
      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getAuthors();
    getGenres();
    getLanguages();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();

    modifBook();
  };

  console.log(bookModify);
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
          value={bookModify.title}
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
          value={bookModify.editor}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="img" className="input__visually">
          Path to the image
        </label>
        <input
          type="text"
          name="img"
          id="img"
          value={bookModify.img}
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
          value={bookModify.description}
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
          value={bookModify.id_author}
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
          value={bookModify.id_genre}
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
          value={bookModify.id_language}
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

export default ModifyBook;
