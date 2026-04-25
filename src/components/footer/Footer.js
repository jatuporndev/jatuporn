import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FiCopy, FiCheck } from "react-icons/fi";
import githubIcon from "../../resouses/footer/github.svg";
import igIcon from "../../resouses/footer/instagram.svg";
import linkinIcon from "../../resouses/footer/linkedin.svg";
import emailIcon from "../../resouses/footer/email.svg";
import {
  BORDER_COLOR,
  SOFT_SURFACE_COLOR,
  SURFACE_COLOR,
  TEXT_COLOR,
  MUTED_TEXT_COLOR,
  setBackgroundColor,
} from "../../utility/utility";

const EMAIL = "jatuporn.saenthip@gmail.com";

const FooterBox = styled.footer`
  margin-top: 42px;
  ${setBackgroundColor()}
  border-top: 1px solid ${BORDER_COLOR};
  padding: 16px 14px 18px;
  box-sizing: border-box;
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const IconSocial = styled.img`
  width: 17px;
  height: 17px;
  filter: grayscale(1);
  opacity: 0.85;
  transition: opacity 0.15s ease;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 8px;
  line-height: 0;
  transition: background 0.15s ease;

  @media (hover: hover) {
    &:hover {
      background: rgba(0, 0, 0, 0.05);

      img {
        opacity: 1;
      }
    }
  }
`;

/* Short chip: one line + ellipsis; not full footer width */
const EmailBlock = styled.div`
  width: 100%;
  max-width: 195px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const EmailPill = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 28px;
  border-radius: 8px;
  border: 1px solid ${BORDER_COLOR};
  background: ${SOFT_SURFACE_COLOR};
  overflow: hidden;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`;

const EmailLink = styled.a`
  display: block;
  flex: 1 1 0;
  min-width: 0;
  width: 0;
  height: 28px;
  padding: 0 4px 0 8px;
  text-decoration: none;
  color: ${MUTED_TEXT_COLOR};
  font-size: 11px;
  font-weight: 400;
  line-height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;

  @media (hover: hover) {
    &:hover {
      color: ${TEXT_COLOR};
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
`;

const CopyEmailButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  margin: 0;
  padding: 0;
  border: none;
  border-left: 1px solid ${BORDER_COLOR};
  background: ${SURFACE_COLOR};
  cursor: pointer;
  color: ${MUTED_TEXT_COLOR};
  transition: color 0.15s ease, background 0.15s ease;

  @media (hover: hover) {
    &:hover {
      color: ${TEXT_COLOR};
      background: ${SOFT_SURFACE_COLOR};
    }
  }

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px ${MUTED_TEXT_COLOR};
  }
`;

const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const Copyright = styled.p`
  margin: 2px 0 0;
  font-weight: 300;
  font-size: 11px;
  color: ${MUTED_TEXT_COLOR};
  letter-spacing: 0.02em;
  text-align: center;
  line-height: 1.35;
`;

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const ta = document.createElement("textarea");
        ta.value = EMAIL;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <FooterBox>
      <FooterInner>
        <SocialRow>
          <SocialLink
            href="https://github.com/jatuporndev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <IconSocial src={githubIcon} alt="" />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/01_ohm"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <IconSocial src={igIcon} alt="" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/jatuporn-saenthip-7286b633b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <IconSocial src={linkinIcon} alt="" />
          </SocialLink>
          <SocialLink href={`mailto:${EMAIL}`} aria-label="Email">
            <IconSocial src={emailIcon} alt="" />
          </SocialLink>
        </SocialRow>

        <EmailBlock>
          <EmailPill>
            <EmailLink href={`mailto:${EMAIL}`} title={EMAIL}>
              {EMAIL}
            </EmailLink>
            <CopyEmailButton
              type="button"
              onClick={copyEmail}
              title={copied ? "Copied" : "Copy email"}
              aria-label={
                copied ? "Email copied to clipboard" : "Copy email to clipboard"
              }
            >
              {copied ? (
                <>
                  <FiCheck size={12} strokeWidth={2.5} aria-hidden />
                  <SrOnly>Copied</SrOnly>
                </>
              ) : (
                <FiCopy size={11} strokeWidth={2} aria-hidden />
              )}
            </CopyEmailButton>
          </EmailPill>
        </EmailBlock>

        <Copyright>Copyright © 2024 jatuporndev</Copyright>
      </FooterInner>
    </FooterBox>
  );
}
