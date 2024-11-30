import React from "react";
import styled from "styled-components";

const TextTitle = styled.div`
color: #424242;
  line-height: 0.7;
  font-size: 10px;
`;

const TextValue = styled.div`
  font-size: 16px;
  margin-bottom: 2px;
`;

const TextWrapper = styled.div``;

function DetailCardValue(props) {
  const { title, value } = props;

  return (
    <TextWrapper>
      <TextTitle>{title}</TextTitle>
      <TextValue>{value}</TextValue>
    </TextWrapper>
  );
}

export default DetailCardValue;
