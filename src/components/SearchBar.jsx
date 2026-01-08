import styled from "styled-components";

export const SearchBar = ({
  value,
  onChange,
  placeholder = "Buscar productos...",
}) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const StyledInput = styled.input`
  background-color: #ffffff;
  border: 2px solid #e9c46a;
  border-radius: 8px;
  font-size: 15px;
  padding: 10px 14px;
  width: 50%;
  transition: border-color 0.2s;
  &:focus {
    border-color: #f4a261;
    outline: none;
  }
`;
