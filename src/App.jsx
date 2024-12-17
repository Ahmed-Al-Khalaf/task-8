import React, { useState } from 'react';
import FormComponent from '../componants/FormComponent';
import ProductCardComponent from '../componants/ProductCardComponent';

function App() {
  const [products, setProducts] = useState([]);


  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  
  const increasePrice = (id) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, price: item.price + 50 } : item))
    );
  };

  
  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-3xl p-5 mx-auto">
      <h1 className="mb-5 text-3xl font-bold text-center">Mangment</h1>
      <FormComponent addProduct={addProduct} />
      <div className="mt-5 space-y-3">
        {products.map((product) => (
          <ProductCardComponent
            key={product.id}
            product={product}
            onIncreasePrice={() => increasePrice(product.id)}
            onDelete={() => deleteProduct(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
