import React from "react";

import "./styles.css";
// don't change the Component name "App"
function App() {
  const printText = () => {
    console.log('Stored!');
  }

  return <button onClick={printText}>Bookmark</button>;
}

export default App;