import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const [isEmpty, setIsEmpty] = useState(false)

  function handleChange(event) {
    setIsEmpty(false)
    const { name, value } = event.target;
    setNote(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  }

  function handleAddClick(event) {
    event.preventDefault();
    if (note.title !== '' && note.content !== '') {
      props.para1(note);
      setNote({
        title: "",
        content: ""
      });
    } else {
      setIsEmpty(true)
    }
  }


  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
        <button onClick={handleAddClick}>Add</button>
      </form>
      {isEmpty && <p style={{ marginLeft: '35%', fontSize: 20, color: "red" }}>Please enter text in the input fields</p>}
    </div>
  );
}

export default CreateArea;
