import React, { useState } from "react";

function Counter(props) {
  const [sayac, setSayac] = useState(0);

  const { selam } = props;

  const arttir = () => {
    return setSayac(sayac + 1);
  };

  const eksilt = () => {
    return setSayac(sayac - 1);
  };

  const reset = () => {
    return setSayac(0);
  };
  return (
    <div className="counter-card">
      <h2>Counter Componenti</h2>
      <h1>{selam}</h1>
      <hr />
      <div className="counter">{sayac}</div>
      <div className="controls">
        <button onClick={eksilt}>-</button>
        <button onClick={arttir}>+</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default Counter;
