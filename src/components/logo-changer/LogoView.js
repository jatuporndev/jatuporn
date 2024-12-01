import React from "react";
import styled from "styled-components";

const ImageViewWrapper = styled.div`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  background-color: ${(props) => props.$color};
  border: ${(props) => props.$isSelected ? "2px solid black" : "2px solid #EEEEEE"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;

  @media (hover: hover) {
    &:hover {
      transform: scale(2.05);
      background-color: white;
    }
  }
`;

const ImageView = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  overflow-clip-margin: unset;
`;

export default function LogoView({ image, isSelected, setIconCard, fileName }) {

  const handleIconSelect = (icon) => {
    localStorage.setItem("icon", icon)
    setIconCard(icon)
  };


  return (
    <ImageViewWrapper $isSelected={isSelected} onClick={() => handleIconSelect(fileName)}>
      <ImageView src={image} alt="logo" ></ImageView>
    </ImageViewWrapper>
  );
}
