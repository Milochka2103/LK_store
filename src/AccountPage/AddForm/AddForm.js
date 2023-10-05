import React, { useState } from 'react';
import "./AddForm.css"

export const AddForm = ({ setShowAddForm, blazers }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCreateBlazer = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/blazer", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        price: price,
        isLiked: false,
        isInCart: false,
      }),
    })
      .then((response) => response.json())
      .then((blazer) => blazers.push(blazer[0]));
    setShowAddForm(false);
  };

  return (
    <>
      <form className="addPostForm" onSubmit={handleCreateBlazer}>
        <button className="hideBtn" onClick={() => setShowAddForm(false)}>
          Close
        </button>
        <h2>Add new blazer</h2>

        <div>
          <input
            className="addFormInput"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <input
            className="addFormInput"
            name="postDescription"
            placeholder="Price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <div>
          <button className="addGrayBtn" type="submit">
            Add blazer
          </button>
        </div>
      </form>
      <div onClick={() => setShowAddForm(false)} className="overlay"></div>
    </>
  );
};
