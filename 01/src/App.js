import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {

  const counts = {
    init: 0
  };

  const [count, setCount] = React.useState(counts.init);

  const countHander = () => {
    setCount((prevState) => prevState + 1);
  };

    return (
      <div>
        <p id="counter">{count}</p>
        <button onClick={countHander}>Increment</button>
      </div>
    );
}