import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";
import '../../public/styles.css'

function KeeperApp() {
  const [items, setItems] = useState([{ title: "Note title", content: "Note content" }])

  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id
      })
    })
  }

  function addItem(enteredText) {
    console.log(items);
    setItems(prevItems => {
      console.log(prevItems)
      return [...prevItems, enteredText];
    });
  }


  function createNote(item, index) {
    return <Note
      key={index}
      id={index}
      title={item.title}
      content={item.content}
      para1={deleteItem} />
  }

  return (
    <div>
      <Header />
      <CreateArea para1={addItem} />
      {items.map(createNote)}
      <Footer />
    </div>
  );
}

export default KeeperApp;
