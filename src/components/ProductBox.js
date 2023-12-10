import React, { useState, useEffect } from "react";
import { API_URL } from "../util/config";
const ProductBox = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/v1/demo-controller/getitems`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }

      const productData = await response.json();
      console.log(productData);
      setProduct(productData);
    };

    fetchData();
  }, []);

  return (
    <div className='pt-10'>
      {product && (
        <div className='flex justify-between'>
          {product.map((item) => (
            <div
              key={item.id}
              className='flex flex-col items-center p-3 rounded-lg w-44 bg-gray-100 h-40'
            >
              <h3 className='mb-6 font-bold text-lg line-clamp-1'>
                {item.title}
              </h3>
              <span className='font-medium text-sm line-clamp-2'>
                {item.itemDesc}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductBox;
