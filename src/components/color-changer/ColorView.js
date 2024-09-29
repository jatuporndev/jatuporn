import { React } from "react";
import styled from "styled-components";

const ViewColor = styled.div`
  border-radius: 50%;
  height: 44px;
  width: 44px;
  background-color: ${(props) => props.$color};
  border: 3px solid white;
  outline: ${(props) => props.$isSelected ? "1px solid black" : "1px solid white"};
  cursor: pointer;
`;

function ColorView(props) {
  const { color, isSelected, onClick } = props;

  return (
    <ViewColor
      onClick={() => onClick(color)}
      $color={color}
      $isSelected={isSelected}
    ></ViewColor>
  );
}

export default ColorView;
