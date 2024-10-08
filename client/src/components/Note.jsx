import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleClick(id) {
    props.para1(id)
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button style={{backgroundColor:"white"}} onClick={() => {
        handleClick(props.id)
      }}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
