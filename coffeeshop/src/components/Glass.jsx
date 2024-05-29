import React from 'react';
import './Glass.css'

function Glass ({ water, coffee, milk }) {
  const total = water + coffee + milk;
  const waterStyle = { height: `${water * 100 / total}%`, backgroundColor: 'rgb(59, 166, 236)'};
  const coffeeStyle = { height: `${coffee * 100 / total}%`, backgroundColor: 'rgb(31, 24, 13)' };
  const milkStyle = { height: `${milk * 100 / total}%`, backgroundColor: 'rgb(255, 249, 241)' };

  return (
    <div className="glass">
        <div className="milk" style={milkStyle} />
        <div className="water" style={waterStyle} />
        <div className="coffee" style={coffeeStyle} />
    </div>
  );
};

export default Glass;