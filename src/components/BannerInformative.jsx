import styled from "styled-components";

export const BannerInformative = ({ children }) => {
  return <ContainerBanner>{children}</ContainerBanner>;
};

const ContainerBanner = styled.div`
  width: 100%;
  padding: 40px 20px;
  margin-top: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  color: #475569;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
