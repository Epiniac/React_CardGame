import React from 'react';

function CoffeeConfig() {
  const [coffeeType, setCoffeeType] = React.useState('regular');
  const [sugarAmount, setSugarAmount] = React.useState(2);

  return (
    <div>
      <h3>Configure your coffee:</h3>
      <label>
        Coffee type:
        <select value={coffeeType} onChange={(e) => setCoffeeType(e.target.value)}>
          <option value="regular">Regular</option>
          <option value="decaf">Decaf</option>
          <option value="espresso">Espresso</option>
        </select>
      </label>
      <label>
        Sugar amount:
        <select value={sugarAmount} onChange={(e) => setSugarAmount(parseInt(e.target.value))}>
          <option value={0}>No sugar</option>
          <option value={1}>1 spoon</option>
          <option value={2}>2 spoons</option>
          <option value={3}>3 spoons</option>
        </select>
      </label>
    </div>
  );
}

export default CoffeeConfig;