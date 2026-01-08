import React from "react";
import styled from "styled-components";

export const Loading = ({ text }) => {
  return <ContainerLoading>{text}</ContainerLoading>;
};

const ContainerLoading = styled.div`
  align-items: center;
  background-color: #f0f0f0;
  color: #264653;
  display: flex;
  font-size: 28px;
  font-weight: bold;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

export default React.memo(Loading);
