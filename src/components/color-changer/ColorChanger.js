import React from "react";
import styled from "styled-components";
import ColorView from "./ColorView";

const ColorChangerMain = styled.div`
  font-family: "Pangolin";
  margin-top: 24px;
  width: 50vw;
  height: auto;
  color: #616161;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ColorBox = styled.div`
  margin-top: 8px;
  padding: 2px;
  display: flex;
  gap: 4px;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-behavior: smooth;
`;

const IconScroll = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 4px;
  visibility: hidden;

  @media (max-width: 767px) {
    visibility: visible;
  }
`

export default function ColorChanger(props) {
  const { colorCard, setColorCard } = props;
  const colors = [
    "#F5F5F7",
    "#e8e8e4",
    "#CDC1FF",
    "#D1E9F6",
    "#FEF9D9",
    "#FFD7C4",
    "#fad2e1",
    "#FFEAE3",
    "#DEE5D4",
    "#ffa6c1",
    "#cdeac0",
  ];

  const handleColorSelect = (color) => {
    localStorage.setItem("color", color);
    setColorCard(color);
  };

  return (
    <ColorChangerMain>
      Color <IconScroll src={require("../../resouses/utility/can-scroll.gif")}></IconScroll>
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
