import styled from "styled-components";
import { BORDER_COLOR, SURFACE_COLOR, TEXT_COLOR } from "../utility/utility";

export const DoneBtn = styled.button`
  font-family: "Pangolin";
  background-color: ${SURFACE_COLOR};
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  padding: 4px 24px;
  cursor: pointer;
  border: 1px solid ${BORDER_COLOR};
  color: ${TEXT_COLOR};
  text-align: center;
  transition: background-color ease 0.25s, border-color ease 0.25s, letter-spacing ease 0.25s;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.$color};
      border-color: ${(props) => props.$color};
      letter-spacing: 2px;
    }
  }
`;
