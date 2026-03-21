import React from "react";
import styled from "styled-components";

const HeadingWrap = styled.div`
  margin-bottom: 28px;
`;

const TitleBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleText = styled.h2`
  margin: 0;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  font-family: "Pangolin", sans-serif;
  color: #212121;
  letter-spacing: 0.02em;
`;

const TitleRule = styled.div`
  width: min(5.25rem, 46%);
  min-width: 3rem;
  height: 3px;
  margin-top: 8px;
  border-radius: 2px;
  background-color: ${(props) => props.$color || "#e0e0e0"};
`;

/**
 * Shared section title + accent line (aligned with SectionInner column).
 * Do not use for About — that section stays custom.
 */
export default function SectionHeading({ id, accentColor, children }) {
  return (
    <HeadingWrap>
      <TitleBlock>
        <TitleText id={id}>{children}</TitleText>
        <TitleRule $color={accentColor} />
      </TitleBlock>
    </HeadingWrap>
  );
}
