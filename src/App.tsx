import React, {useEffect, useState} from 'react';
import './App.scss';
import { TodoContext } from "./contexts/TodoContext";
import { TodoItem } from "./model/TodoItem";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const storedItems = JSON.parse(localStorage.getItem("todo-items") || "[]") || [];

  const [items, setItems] = useState<Map<number, TodoItem>>(
      new Map<number, TodoItem>(storedItems.map((item: TodoItem) => [item.id, new TodoItem(item.text, item.priority, item.id)]))
  );

  const [addingItem, setAddingItem] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify([...items].map(item => item[1])));
  }, [items, setItems]);

  const addItem = (item: TodoItem) => {
    item.id = items.size;
    const mapCopy = new Map(items);
    mapCopy.set(item.id, item);
    setItems(mapCopy);
    return item.id;
  };

  const removeItem = (item: TodoItem) => {
    if (!item.id && item.id !== 0 || !items.has(item.id)) return false;

    const mapCopy = new Map(items);
    mapCopy.delete(item.id);
    setItems(mapCopy);

    return true;
  };

  return (
      <div id={"app"}>
        <TodoContext.Provider value={{
          items, addItem, removeItem, addingItem, setAddingItem
        }}>
          <Header/>
          <TodoList/>
        </TodoContext.Provider>
      </div>
  );
}

export default App;
