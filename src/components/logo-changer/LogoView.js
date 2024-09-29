import React from "react";
import styled from "styled-components";

const ImageViewWrapper = styled.div`
  border: 2px solid black;
  border: ${(props) => props.$isSelected ? "2px solid black" : "2px solid #EEEEEE"};
  height: 78px;
  align-items: center;
  border-radius: 4%;
  flex: 1 0 21%;

  @media (max-width: 768px) {
    flex: 1 0 44%;
  }
`;

const ImageView = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default function LogoView({ image, isSelected }) {
  return (
    <ImageViewWrapper $isSelected={isSelected}>
      <ImageView src={image} alt={image}></ImageView>
    </ImageViewWrapper>
  );
}
