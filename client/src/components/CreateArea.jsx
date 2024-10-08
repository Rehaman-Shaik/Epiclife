import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const [isEmpty, setIsEmpty] = useState(false)
  const [shouldExpand, setShouldExpand] = useState(false)

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
        <input onClick={() => { setShouldExpand(true) }} name="title" placeholder="Title" onChange={handleChange} value={note.title} />
        {shouldExpand && <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />}
        {shouldExpand && <button onClick={handleAddClick}> <AddIcon />  </button>}
      </form>
      {isEmpty && (
        <p className="error-message" style={{ textAlign: 'center', color: 'red', margin: '10px 0' }}>
          Please enter text in the input fields
        </p>
      )}

    </div>
  );
}

export default CreateArea;
