import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })


  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  }

  function handleAddClick(event) {
    event.preventDefault();
    props.para1(note);
    setNote({
      title: "",
      content: ""
    });
  }


  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
        <button onClick={handleAddClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;