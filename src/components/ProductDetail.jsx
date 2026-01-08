import React from "react";
import { useParams } from "react-router";
export const ProductDetail = () => {
  const { id } = useParams();
  return <div>ProductDetail {id}</div>;
};
