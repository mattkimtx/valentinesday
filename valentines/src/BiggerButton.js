import React, { useState } from 'react';

const BiggerButton = () => {
     const [width, setWidth] = useState(100); // Initial width of the button
     const [height, setHeight] = useState(50); // Initial height of the button
     const [fontSize, setFontSize] = useState(16); // Initial font size of the text
     const [clickCount, setClickCount] = useState(0); // Initial click count
     const [words, setWords] = useState("No..."); // Initial words

     const increaseSize = () => {
     setWidth(width + 10); // Increase width by 10px each time the button is clicked
     setHeight(height + 5); // Increase height by 5px each time the button is clicked
     setFontSize(fontSize + 1); // Increase font size by 1px each time the button is clicked
     setClickCount(clickCount + 1); // Increase click count by 1 each time the button is clicked
     if (clickCount % 3 === 0) {
          switch (clickCount % 1000) {
               case 0:
                    setWords("wow...");
                    break;
               case 3:
                    setWords("ur stinky");
                    break;
               case 6:
                    setWords("no love me");
                    break;
               case 9:
                    setWords("why u do dis");
                    break;
               case 12:
                    setWords("bye forever ;(");
                    break;
               case 15:
                    setWords("Really????");
               case 18:
                    setWords("Come on....");
               case 21:
                    setWords("K...");
          }
     }

     };

     return (
          <button style={{ width: `${width}px`, height: `${height}px` }} onClick={increaseSize}>
               <p style={{ fontSize: `${fontSize}px` }} onClick={increaseSize}>{ words }</p>
          </button>
     );
};

export { BiggerButton };
