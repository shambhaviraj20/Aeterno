// src/components/ProductList.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products.json";

function ProductList({ era, onAddToCart }) {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const result = products.filter((item) =>
      item.supported_eras.includes(era)
    );
    setFiltered(result);
  }, [era]);

  if (filtered.length === 0) {
    return <p className="text-center text-gray-600 mt-10">🕵️ No products found for {era}.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filtered.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          era={era}
          onAdd={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
