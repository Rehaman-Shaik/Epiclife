import React from "react";


function Note(props) {
  function handleClick(id){
    props.para1(id)
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{
        handleClick(props.id)
      }}>DEL</button>
    </div>
  );
}

export default Note;
