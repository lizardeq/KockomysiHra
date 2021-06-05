import React from 'react';
import './style.css';

import Counters from './Counters';
import Items from './Items';

const Inventory = ({ myData, setSelectedBuilding }) => {
  return (
    <div className="container inventory">
      <div className="inventory__header">
        <div className="inventory__icon">
          <p>Inventář</p>
          <hr />
        </div>

        <Counters myData={myData} />
        <Items myData={myData} setSelectedBuilding={setSelectedBuilding} />
      </div>
    </div>
  );
};

export default Inventory;
