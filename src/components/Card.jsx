import React from "react";

const Card = ({ name, image }) => {
  return (
    <article>
      <p>{name}</p>
      <img src={image} alt={name} />
    </article>
  );
};

export default Card;
