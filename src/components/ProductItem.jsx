import React, { useMemo } from "react";
import styled from "styled-components";
import { truncateText } from "../utils/utils";
import { useNavigate } from "react-router";

export const ProductItem = ({
  product,
  productsFavorites,
  hanldeAddToFavorites,
}) => {
  const navigate = useNavigate();

  const { description, id: productId, images, title } = product;

  const isFavorite = useMemo(
    () => productsFavorites?.some(({ id }) => id === productId),
    [productsFavorites]
  );

  return (
    <ProductCard key={productId}>
      <ImageContainer>
        <ProductImg src={images[0]} alt={title} />
      </ImageContainer>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>
        {truncateText({ maxLength: 60, text: description })}
      </ProductDescription>
      <ProductButton onClick={hanldeAddToFavorites} $isFavorite={isFavorite}>
        {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      </ProductButton>
      <ProductButton onClick={() => navigate(`/product/${productId}`)}>
        Ver Producto
      </ProductButton>
    </ProductCard>
  );
};

export default React.memo(ProductItem);

const ProductButton = styled.button`
  margin-top: auto;
  margin-bottom: 5px;
  width: 100%;
  padding: 10px 0;
  background-color: ${({ $isFavorite }) =>
    $isFavorite ? "#f4a261" : "#e9f5f2"};
  color: ${({ $isFavorite }) => ($isFavorite ? "#e9f5f2" : "#264653")};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background-color: ${({ $isFavorite }) =>
      $isFavorite ? "#e76f51" : "#cde8e3"};
  }
  &:focus {
    outline: auto;
  }
`;

const ProductCard = styled.div`
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #264653;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 270px;
  min-height: 320px;
  max-height: 340px;
  width: 100%;
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 10px;
`;

const ProductImg = styled.img`
  border-radius: 5px;
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 10px 0;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0;
  min-height: 42px;
`;
