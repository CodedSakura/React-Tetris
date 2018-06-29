import React from "react";
import Tile from "./Tile";

function Grid() {
  const gRow = [];
  for (let i = 0; i < 10; i++) gRow.push(<Tile key={i}/>);
  const grid = [];
  for (let i = 0; i < 20; i++) grid.push(<div className="g-row" key={i}>{gRow}</div>);
  return (
    <div className="grid">{grid}</div>
  );
}

export default Grid;