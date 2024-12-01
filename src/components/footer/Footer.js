import React from "react";
import styled from "styled-components";
import githubIcon from "../../resouses/footer/github.svg";
import igIcon from "../../resouses/footer/instagram.svg";
import linkinIcon from "../../resouses/footer/linkedin.svg";

const FooterBox = styled.div`
  margin-top: 42px;
  background-color: #f5f5f5;
  height: auto;
  padding: 18px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 100;
  color: #616161;
  font-size: 14px;
  margin-bottom: 2px;
  text-decoration: none;
`;

const GropLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
`;

const IconSocial = styled.img`
  width: 16px;
  height: 16px;
  filter: grayscale(1);
`;

const Email = styled.a`
  text-decoration: none;
  color: #616161;

  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (
    <FooterBox>
      <GropLink>
        <a href="https://github.com/jatuporndev" target="_blank">
          <IconSocial src={githubIcon} alt={`github`}></IconSocial>
        </a>
        <a href="https://www.instagram.com/01_ohm" target="_blank">
          <IconSocial src={igIcon} alt={`ig`}></IconSocial>
        </a>
        <a
          href="https://www.linkedin.com/in/jatuporn-saenthip-7286b633b/"
          target="_blank"
        >
          <IconSocial src={linkinIcon} alt={`linkin`}></IconSocial>
        </a>
      </GropLink>
      <Content>
        <Email href="mailto:jatuporn.saenthip@gmail.com">
          jatuporn.saenthip@gmail.com
        </Email>
      </Content>
      <Content>Copyright © 2024 jatuporndev</Content>
    </FooterBox>
  );
}
