import React from 'react';
import './styles.css';

const DMSiAutomatedWarehouseInventory = () => {
  return (
    <div className="dmsi-automated-warehouse-inventory"> {/* Applying a class name */}
      <h1>DMSi Automated Warehouse Inventory</h1>
      <h5>
        My Senior Design team was tasked with automating the inventory of a lumber warehouse.
        We proposed the solution of tracking individual lumber bundle movements. To accomplish this, 
        we placed QR codes on each bundle and a camera on each forklift. We then read the bundle information 
        and compute a map of the warehouse for customers to use.
      </h5>
    </div>
  );
}

export default DMSiAutomatedWarehouseInventory;
