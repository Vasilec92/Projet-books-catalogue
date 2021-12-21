import React, { useState } from "react";
import axios from "axios";
import URL from "../utile/url.js";

const AddAuthor = () => {
  const [author, setAuthor] = useState({
    first_name: "",
    last_name: "",
  });
  async function newAuthor() {
    try {
      const response = await axios.post(`${URL}/authors/new`, { ...author });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event) => {
    const values = { ...author };
    values[event.target.name] = event.target.value;
    setAuthor(values);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    newAuthor();
  };

  return (
    <div>
      <h2 className="input__title">Add author</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="input">
        <label htmlFor="first_name" className="input__visually">
          First name
        </label>
        <input
          className="input__field"
          type="text"
          placeholder="First name"
          id="first_name"
          name="first_name"
          value={author.first_name}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="last_name" className="input__visually">
          Last name
        </label>
        <input
          className="input__field"
          type="text"
          placeholder="Last name"
          id="last_name"
          name="last_name"
          value={author.last_name}
          onChange={(event) => handleChange(event)}
        />
        <button className="input__btn">Submit</button>
      </form>
    </div>
  );
};

export default AddAuthor;
