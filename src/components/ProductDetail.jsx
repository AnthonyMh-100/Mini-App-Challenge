import styled from "styled-components";
import { useParams, useNavigate } from "react-router";
import { useProducts } from "../hooks";
import { Loading } from "../components";
import { TEXT_LOADING } from "../constants";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, products } = useProducts({
    path: `${id}`,
    searchValue: id,
  });

  const { title, description, images = [], price, rating, stock } = products;

  if (isLoading) return <Loading text={TEXT_LOADING} />;

  return (
    <Container>
      <ContainerCard>
        <Image src={images[0]} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <InfoContainer>
          <InfoItem>
            <Label>Price</Label>
            <Value>S/.{price}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Rating</Label>
            <Value>{rating}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Stock</Label>
            <Value>{stock}</Value>
          </InfoItem>
        </InfoContainer>

        <ProductButton onClick={() => navigate("/")}>Volver</ProductButton>
      </ContainerCard>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  background-color: #f9f9f9;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  width: 100vw;
`;

const ContainerCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #d1f0e8;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  max-width: 480px;
  padding: 24px;
  text-align: center;
  width: 100%;
`;

const Description = styled.p`
  color: #666;
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 16px;
`;

const Image = styled.img`
  border-radius: 12px;
  margin-bottom: 20px;
  max-height: 260px;
  object-fit: contain;
  width: 100%;
`;

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

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 14px;
  margin: 16px 0 24px;
`;

const InfoItem = styled.div`
  flex: 1;
  text-align: center;
`;

const Label = styled.span`
  display: block;
  font-size: 12px;
  color: #64748b;
  margin-bottom: 4px;
`;

const Title = styled.h2`
  color: #264653;
  font-size: 22px;
  margin-bottom: 12px;
`;

const Value = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #264653;
`;
