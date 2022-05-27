import React from "react";

function Menu({ items }) {
  return (
    <div>
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              marginBottom: "3rem",
            }}
          >
            <img
              src={img}
              alt={title}
              style={{
                height: "10rem",
                width: "20rem",
                objectFit: "cover",
                border: "3px solid orange",
              }}
            />
            <div
              className="info"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h3>{title}</h3>
              <p>${price}</p>
            </div>
            <p style={{ textAlign: "start" }}>{desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
