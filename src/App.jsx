import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BannerInformative,
  Loading,
  Pagination,
  ProductItem,
  SearchBar,
} from "./components";
import {
  DEBOUNCE_DELAY,
  DEFAULT_PAGE,
  LIMIT,
  MESSAGES,
  TEXT_LOADING,
} from "./constants";
import { useDebounce, useProducts } from "./hooks/";
import { useNavigate } from "react-router";

const { NO_PRODUCTS_FOUND } = MESSAGES;

function App() {
  const [searchProduct, setSearchProduct] = useState("");
  const [page, setPage] = useState(DEFAULT_PAGE);

  const navigate = useNavigate();

  const debouncedSearchProduct = useDebounce({
    delay: DEBOUNCE_DELAY,
    value: searchProduct,
  });

  const skip = (page - 1) * LIMIT;
  const path = `search?q=${debouncedSearchProduct}&limit=${LIMIT}&skip=${skip}`;

  const {
    productsFavorites,
    hanldeAddToFavorites,
    isLoading,
    products: { products: productsData, total: totalPages },
  } = useProducts({
    path,
    searchValue: debouncedSearchProduct,
  });

  useEffect(() => setPage(DEFAULT_PAGE), [debouncedSearchProduct]);

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
          hanldePrevPage={() => setPage((prev) => prev - 1)}
          handleNextPage={() => setPage((prev) => prev + 1)}
          page={page}
          totalPages={
            productsData?.length ? Math.ceil(totalPages / LIMIT) : DEFAULT_PAGE
          }
        />
        <ProductButton onClick={() => navigate("/favorites")}>
          Ir a favoritos
        </ProductButton>
      </ContainerBar>
      {!productsData?.length && (
        <BannerInformative>{NO_PRODUCTS_FOUND}</BannerInformative>
      )}
      <ProductContainer>
        {productsData?.map((product) => (
          <ProductItem
            key={product.id}
            productsFavorites={productsFavorites}
            product={product}
            hanldeAddToFavorites={() => hanldeAddToFavorites(product)}
          />
        ))}
      </ProductContainer>
    </Container>
  );
}

const ProductButton = styled.button`
  background-color: #d1a638;
  border: none;
  border-radius: 8px;
  color: #f0f0f0;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
`;

const Container = styled.div`
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  padding: 20px;
  width: 100%;
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
