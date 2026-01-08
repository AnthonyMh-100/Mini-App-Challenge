import React, { useEffect, useState } from "react";
import { API_URL } from "../constants";

export const useProducts = ({ path, searchValue }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = `${API_URL}/${path || ""}`;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error :", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [apiUrl, searchValue]);
  return {
    products,
    setProducts,
    isLoading,
  };
};
