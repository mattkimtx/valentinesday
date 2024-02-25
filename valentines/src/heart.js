import React from 'react';
import './heart.css';

const Heart = ({ size, marginLeft }) => {
     return (
          <div className="heart" style={{ width: size, marginLeft: marginLeft }}></div>
     );
};

const Heart2 = ({ size, marginLeft }) => {
     return (
          <div className="heart2" style={{ width: size, marginLeft: marginLeft }}></div>
     );
};

export { Heart, Heart2 };