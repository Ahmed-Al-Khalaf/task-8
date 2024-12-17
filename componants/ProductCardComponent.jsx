import React from 'react';

const ProductCardComponent = ({ product, onIncreasePrice, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border rounded shadow-md">
      <div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">pricee: {product.price} $</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onIncreasePrice}
          className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600"
        >
          increes
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default ProductCardComponent;
