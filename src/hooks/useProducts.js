import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { KEY_PRODUCTS_FAVORITES } from "../constants";

export const useProducts = ({ path = "", searchValue = null }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productsFavorites, setProductsFavorites] = useState(() => {
    const currentProductsFavorites = localStorage.getItem(
      KEY_PRODUCTS_FAVORITES
    );
    return currentProductsFavorites ? JSON.parse(currentProductsFavorites) : [];
  });

  const apiUrl = `${API_URL}/${path}`;

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

  useEffect(() => {
    localStorage.setItem(
      KEY_PRODUCTS_FAVORITES,
      JSON.stringify(productsFavorites)
    );
  }, [productsFavorites]);

  const hanldeAddToFavorites = (product) => {
    const { id: productId } = product;
    setProductsFavorites((prev) => {
      const isProductsExist = prev.find(({ id }) => id === productId);
      if (isProductsExist && prev.length)
        return prev.filter(({ id }) => id !== productId);
      return [...prev, product];
    });
  };

  return {
    hanldeAddToFavorites,
    isLoading,
    products,
    productsFavorites,
    setProducts,
  };
};
