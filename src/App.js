import React, { useState } from 'react';
import Product from './Components/Product';
import Save from './Components/Save';
const App = () => {

  return (
              
    <div className="container mx-auto p-4">
      <Product />
      <Save />
    </div>

  );
};

export default App;
