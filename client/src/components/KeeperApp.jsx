import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState, useEffect } from "react";
import '../../public/styles.css'

function KeeperApp() {

  useEffect(() => {
    document.title = 'Keeper App';
  }, []);

  const [items, setItems] = useState([{ title: "Note title", content: "Note content" }])
  const [shouldClean, setShoulClean] = useState(true)

  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id
      })
    })
  }

  function addItem(enteredText) {
    console.log(items);
    if ( shouldClean){
        setItems([])
    }
    setShoulClean(false)
    setItems(prevItems => {
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
