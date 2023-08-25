import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {

  // const checkMessages = {
  //   origin: "Invalid message",
  //   checked: "Valid message"
  // };
  const alertMessages = {
    origin: "Invalid message",
    checked: "Valid message"
  }

  // const [checkMessage, setCheckMessage] = React.useState(checkMessages.origin); 
  const [alertMessage, setAlertMessage] = React.useState(alertMessages.origin);

  const checkHandler = (event) => {
    if (event.target.value.trim().length >= 3) {
      setAlertMessage(alertMessages.checked);
    } else {
      setAlertMessage(alertMessages.origin);
    }
  };

    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={checkHandler}></input>
            <p>{alertMessage}</p>
        </form>
    );
}