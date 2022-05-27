import React from "react";

function Categories({ filteredItems }) {
  const { category } = filteredItems;
  return (
    <div>
      <button onClick={() => filteredItems("all")}>All</button>
      <button onClick={() => filteredItems("breakfast")}>Breakfast</button>
    </div>
  );
}

export default Categories;
