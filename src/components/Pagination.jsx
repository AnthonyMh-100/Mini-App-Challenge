import React from "react";
import styled from "styled-components";

export const Pagination = ({ page, totalPages, onPrev, onNext }) => {
  return (
    <PaginationContainer>
      <Button onClick={onPrev} disabled={page === 1}>
        Anterior
      </Button>

      <PageInfo>
        Página {page} de {totalPages}
      </PageInfo>

      <Button onClick={onNext} disabled={page === totalPages}>
        Siguiente
      </Button>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  white-space: nowrap;
`;

const PageInfo = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#c4c4c4" : "#e9c46a")};
  border-radius: 8px;
  color: #264653;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
`;
