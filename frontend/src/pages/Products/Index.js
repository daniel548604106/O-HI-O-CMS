import React, { useEffect, useState } from "react";
import { apiGetAllProducts } from "../../api/index";
import { useHistory } from "react-router-dom";
const Index = () => {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await apiGetAllProducts();
      setProducts(data.products);
      setTotalPage(data.totalPage);
      setCurrentPage(data.currentPage);
    };

    getAllProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div
          onClick={() => history.push(`/products/${product._id}`)}
          key={product.name}
        >
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default Index;
