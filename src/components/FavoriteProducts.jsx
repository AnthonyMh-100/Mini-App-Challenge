import styled from "styled-components";
import { KEY_PRODUCTS_FAVORITES } from "../constants";
import { ProductItem } from "./ProductItem";
import { useProducts } from "../hooks";

export const FavoriteProducts = () => {
  const { productsFavorites, hanldeAddToFavorites } = useProducts({});
  return (
    <Container>
      <Title>Productos Favortios</Title>
      <ProductContainer>
        {productsFavorites?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            productsFavorites={productsFavorites}
            hanldeAddToFavorites={() => hanldeAddToFavorites(product)}
          />
        ))}
      </ProductContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  padding: 20px;
  width: 100%;
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
