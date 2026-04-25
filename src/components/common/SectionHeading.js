import React from "react";
import styled from "styled-components";
import { TEXT_COLOR } from "../../utility/utility";

const HeadingWrap = styled.div`
  margin-bottom: 28px;

  @media (max-width: 767px) {
    ${(p) =>
      p.$centerOnMobile &&
      `
      display: flex;
      justify-content: center;
    `}
  }
`;

const TitleBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 767px) {
    ${(p) =>
      p.$centerOnMobile &&
      `
      align-items: center;
    `}
  }
`;

const TitleText = styled.h2`
  margin: 0;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  font-family: "Pangolin", sans-serif;
  color: ${TEXT_COLOR};
  letter-spacing: 0;
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
export default function SectionHeading({
  id,
  accentColor,
  children,
  centerOnMobile,
}) {
  return (
    <HeadingWrap $centerOnMobile={centerOnMobile}>
      <TitleBlock $centerOnMobile={centerOnMobile}>
        <TitleText id={id}>{children}</TitleText>
        <TitleRule $color={accentColor} />
      </TitleBlock>
    </HeadingWrap>
  );
}
