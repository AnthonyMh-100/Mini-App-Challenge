import { use, useEffect, useState } from "react";
import styled from "styled-components";
import {
  DEFAULT_PAGE,
  KEY_PRODUCTS_FAVORITES,
  LIMIT,
  TEXT_LOADING,
} from "./constants";
import { Loading, Pagination, ProductItem, SearchBar } from "./components";
import { useDebounce, useProducts } from "./hooks/";

function App() {
  const [searchProduct, setSearchProduct] = useState("");
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [productsFavorites, setProductsFavorites] = useState(() => {
    const currentProductsFavorites = localStorage.getItem(
      KEY_PRODUCTS_FAVORITES
    );
    return currentProductsFavorites ? JSON.parse(currentProductsFavorites) : [];
  });

  const debouncedSearchProduct = useDebounce({
    delay: 3000,
    value: searchProduct,
  });

  const skip = (page - 1) * LIMIT;
  const path = `search?q=${debouncedSearchProduct}&limit=${LIMIT}&skip=${skip}`;

  const {
    isLoading,
    products: { products: productsData, total: totalPages },
  } = useProducts({
    path,
    searchValue: debouncedSearchProduct,
  });

  const hanldeAddToFavorites = (product) => {
    const { id: productId } = product;
    setProductsFavorites((prev) => {
      const isProductsExist = prev.find(({ id }) => id === productId);
      if (isProductsExist && prev.length)
        return prev.filter(({ id }) => id !== productId);
      return [...prev, product];
    });
  };

  console.log({ productsFavorites });

  useEffect(() => setPage(1), [debouncedSearchProduct]);

  useEffect(() => {
    localStorage.setItem(
      KEY_PRODUCTS_FAVORITES,
      JSON.stringify(productsFavorites)
    );
  }, [productsFavorites]);

  if (isLoading) return <Loading text={TEXT_LOADING} />;

  return (
    <Container>
      <Title>Lista de Productos</Title>
      <ContainerBar>
        <SearchBar
          value={searchProduct}
          onChange={({ target: { value } }) => setSearchProduct(value)}
        />
        <Pagination
          page={page}
          totalPages={productsData?.length ? Math.ceil(totalPages / LIMIT) : 1}
          onPrev={() => setPage((prev) => prev - 1)}
          onNext={() => setPage((prev) => prev + 1)}
        />
      </ContainerBar>
      {!productsData?.length && (
        <EmptyState>No se encontraron productos para tu búsqueda</EmptyState>
      )}
      <ProductContainer>
        {productsData?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            hanldeAddToFavorites={() => hanldeAddToFavorites(product)}
          />
        ))}
      </ProductContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  padding: 20px;
  width: 100%;
`;

const EmptyState = styled.div`
  width: 100%;
  padding: 40px 20px;
  margin-top: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc, #eef2f7);
  color: #475569;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const ContainerBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin-bottom: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;

const Title = styled.h1`
  color: #264653;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export default App;
