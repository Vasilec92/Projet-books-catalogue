import React, { useState } from "react";

const ModifyBook = ({ book }) => {
  const [bookModify, setBookModify] = useState(book);
  const handleChange = (event) => {
    const values = { ...bookModify };
    values[event.target.name] = event.target.value;
    setBookModify(values);
  };

  return (
    <div className="input">
      <label htmlFor="title" className="input__visually">
        Title
      </label>
      <input
        className="input__field"
        type="text"
        placeholder="Title"
        id="title"
        name="title"
        value={bookModify.title}
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
        //value={book.edition}
      />
      <label htmlFor="img" className="input__visually">
        Path to the image
      </label>
      <input
        type="text"
        name="img"
        id="img"
        placeholder="Path to the image"
        className="input__field"
      />
      <label htmlFor="author" className="input__visually">
        Choose an author:
      </label>
      <select id="author" className="input__field">
        <option value="">--Please choose an author--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      <label htmlFor="language" className="input__visually">
        Choose an language:
      </label>
      <select id="language" className="input__field">
        <option value="">--Please choose an language--</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <button className="input__btn">Submit</button>
    </div>
  );
};

export default ModifyBook;
