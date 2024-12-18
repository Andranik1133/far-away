import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import State from "./State";

export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleCleareList() {
    if (window.confirm("Are you sure you want to delete all items?")) {
      setItems([]);
    }
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handelAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onCleareList={handleCleareList}
      />
      <State items={items} />
    </div>
  );
}
