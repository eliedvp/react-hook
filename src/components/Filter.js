import React from "react";

const Filter = ({ setTitleFilter, setRatingFilter }) => {
  return (
    <div className="toolbar">
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filtrer par note min"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
        min="0"
        max="5"
      />
    </div>
  );
};

export default Filter;
