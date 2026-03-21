import styled from "styled-components";

export const DoneBtn = styled.button`
  font-family: "Pangolin";
  background-color: white;
  border-radius: 22%;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  padding: 4px 24px;
  cursor: pointer;
  border-color: black;
  color: black;
  text-align: center;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.$color};
      border-color: ${(props) => props.$color};
      transition: background-color ease 0.4s;
      letter-spacing: 2px;
    }
  }
`;