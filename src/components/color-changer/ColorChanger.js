import React from "react";
import styled from "styled-components";
import ColorView from "./ColorView";

const ColorChangerMain = styled.div`
  margin-top: 24px;
  width: 50%;
  height: auto;
  color: #616161;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ColorBox = styled.div`
  margin-top: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 49px);
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
    localStorage.setItem("color", color)
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
