import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'antd/dist/reset.css';
import Categories from './Pages/Categories';
import Customers from './Pages/Customers/indexCustomers';
import Employees from './Pages/Employees/indexEmployess';
import Suppliers from './Pages/Suppliers/indexSuppliers';
import Products from './Pages/Products/indexProducts';

function App() {
  return (
    <div>
     <Categories/>
     {/* < Customers/> */}
     {/* <Employees/> */}
    {/* <Suppliers/> */}
    {/* <Products/> */}
    </div>
  );
}

export default App;
