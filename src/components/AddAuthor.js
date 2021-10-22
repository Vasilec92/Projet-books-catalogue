import React, { useState } from "react";

const AddAuthor = () => {
  const [author, setAuthor] = useState({
    first_name: "",
    last_name: "",
  });
  const handleChange = (event) => {
    const values = { ...author };
    values[event.target.name] = event.target.value;
    setAuthor(values);
  };
  console.log(author);
  return (
    <div className="input">
      <h2 className="input__title">Add author</h2>
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
    </div>
  );
};

export default AddAuthor;
