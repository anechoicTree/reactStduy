import React from 'react';
import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App(props) {
  const prices = {
    origin: 100,
    disRate: 0.75
  };

  const buttonTexts = {
    origin: "할인 적용하기",
    changed: "할인 적용 되돌리기"
  };

  const [price, setPrice] = React.useState(prices.origin);
  const [buttonText, setButtonText] = React.useState(buttonTexts.origin);

  const clickHandler = () => {
    if (price === prices.origin) {
      setPrice(prices.origin*prices.disRate);
      setButtonText(buttonTexts.changed);
    } else {
      setPrice(prices.origin);
      setButtonText(buttonTexts.origin);
    }
  };

    return (
        <div>
            <p>${price}</p>
            <button onClick={clickHandler}>{buttonText}</button>
        </div>
    );
}