import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";

import "./App.css";

function App() {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filteredItems = (category) => {
    if (category === "all") {
      return setMenuItems(items);
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Our menu today</h1>
      </div>
      <Categories categories={categories} filteredItems={filteredItems} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
