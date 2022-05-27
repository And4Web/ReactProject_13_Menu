import React from "react";

function Menu({ items }) {
  return (
    <div>
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <div>
            <img src={img} alt={title} />
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
