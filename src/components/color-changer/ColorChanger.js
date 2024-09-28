import React from "react";
import styled from "styled-components";
import ColorView from "./ColorView";

const ColorChangerMain = styled.div`
  margin-top: 24px;
  width: 50%;
  height: auto;
  align-self: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ColorBox = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 40px);
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

export default function ColorChanger(props) {
  const {colorCard, setColorCard} = props
  const colors = [
    "#F5F5F7",
    "#FFE1FF",
    "#CDC1FF",
    "#D1E9F6",
    "#FEF9D9",
    "#FFD7C4",
    "#BEC6A0",
    "#FFEAE3",
    "#DEE5D4",
  ];

  const handleColorSelect = (color) => {
    setColorCard(color);
  };

  return (
    <ColorChangerMain>
      Color
      <ColorBox>
      {colors.map((color) => (
        <ColorView 
          key={color} 
          color={color} 
          isSelected={colorCard === color} 
          onClick={handleColorSelect} 
        />
      ))}
      </ColorBox>
    </ColorChangerMain>
  );
}
