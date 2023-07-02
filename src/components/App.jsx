import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");
  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function handleClick() {
    setList([...list, newItem]);
    setNewItem("");
  }

  function createItem(item) {
    return <li key={item}>{item}</li>;
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newItem} />
        {/* This value = newItem is used so as whenever the button gets clicke,
        the text-field of the input box is cleared. what is actually does is the value of the input is equal to newItem
        which is set to ""; */}
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          {list.map(createItem)}
        </ul>
      </div>
    </div>
  );
}

export default App;
