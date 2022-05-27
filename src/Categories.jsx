import React from "react";

function Categories({ categories, filteredItems }) {
  return (
    <div>
      {categories.map((category) => (
        <button onClick={() => filteredItems(category)}>{category}</button>
      ))}
    </div>
  );
}

export default Categories;
