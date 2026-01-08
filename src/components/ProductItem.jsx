import React from "react";
import styled from "styled-components";
import { truncateText } from "../utils/utils";
import { useNavigate } from "react-router";

export const ProductItem = React.memo(
  ({ description, id: productId, images, title }) => {
    const navigate = useNavigate();
    return (
      <ProductCard key={productId}>
        <ImageContainer>
          <ProductImg src={images[0]} alt={title} />
        </ImageContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>
          {truncateText({ maxLength: 60, text: description })}
        </ProductDescription>
        <ProductButton onClick={() => navigate(`/${productId}`)}>
          Ver Producto
        </ProductButton>
      </ProductCard>
    );
  }
);

const ProductButton = styled.button`
  margin-top: auto;
  width: 100%;
  padding: 10px 0;
  background-color: #e9f5f2;
  color: #264653;
  border: 1px solid #cde5df;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #dff1ec;
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
