import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  BORDER_COLOR,
  MUTED_TEXT_COLOR,
  SOFT_SURFACE_COLOR,
  TEXT_COLOR,
} from "../../utility/utility";

const CardRoot = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  background: transparent;
  border: none;
  box-shadow: none;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`;

/* Same size for every project; center crop fills frame (no letterboxing) */
const ImageLink = styled.a`
  display: block;
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  overflow: hidden;
  background: transparent;
  border: 1px solid ${BORDER_COLOR};
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    max-height: 220px;
    border-radius: 10px;
    overflow: hidden;
  }
`;

const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const BoxDetail = styled.div`
  flex: 1;
  min-width: 0;
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    min-height: 0;
    padding: 18px 16px 20px;
  }
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

const TitleLink = styled.a`
  font-weight: 600;
  font-size: 22px;
  font-family: "Pangolin", sans-serif;
  text-decoration: none;
  color: ${TEXT_COLOR};
  line-height: 1.25;

  @media (max-width: 767px) {
    font-size: 19px;
    line-height: 1.3;
  }

  @media (hover: hover) {
    &:hover {
      color: ${TEXT_COLOR};
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: transparent;
  border: none;
  text-decoration: none;
  transition: background 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background: ${SOFT_SURFACE_COLOR};
    }
  }
`;

const IconLink = styled.img`
  width: 22px;
  height: 22px;
`;

const GithubIcon = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 32px;
  padding: 0 10px;
  text-decoration: none;
  color: #ffffff;
  background-color: ${TEXT_COLOR};
  border-radius: 8px;
  font-size: 11px;
  font-family: "Pangolin", sans-serif;
  font-weight: 500;
  white-space: nowrap;
  border: 1px solid ${TEXT_COLOR};
  transition: background 0.2s ease, transform 0.15s ease;

  @media (max-width: 767px) {
    height: 36px;
    padding: 0 12px;
    font-size: 12px;
    border-radius: 10px;
  }

  @media (hover: hover) {
    &:hover {
      background: #3b352b;
      border-color: #3b352b;
    }
  }
`;

const Detail = styled.p`
  margin: 14px 0 0;
  padding: 0;
  font-size: 14px;
  line-height: 1.55;
  color: ${MUTED_TEXT_COLOR};

  @media (max-width: 767px) {
    margin-top: 12px;
    font-size: 13px;
    line-height: 1.6;
  }
`;

const TagBox = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 767px) {
    margin-top: 14px;
    gap: 6px;
  }
`;

const Tag = styled.span`
  display: inline-block;
  background-color: ${(props) => props.$color};
  color: ${TEXT_COLOR};
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-family: "Pangolin", sans-serif;
  border: none;

  @media (max-width: 767px) {
    padding: 5px 10px;
    font-size: 11px;
  }
`;

function storeAriaLabel(projectName, type) {
  const map = {
    "app-store": "App Store",
    "play-store": "Google Play",
    web: "website",
  };
  return `Open ${projectName} on ${map[type] || type}`;
}

export default function ProjectCard({ data, color }) {
  return (
    <CardRoot>
      <ImageLink
        href={data.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`${data.name} — open project`}
      >
        <BoxImage
          src={require(`../../resouses/projects/${data.key_image}`)}
          alt={`${data.name} preview`}
          loading="lazy"
          decoding="async"
        />
      </ImageLink>
      <BoxDetail>
        <TopBox>
          <TitleLink href={data.link} target="_blank" rel="noreferrer">
            {data.name}
          </TitleLink>
          <LinkBox>
            {data.store.map((ref, i) => (
              <IconButton
                key={i}
                href={ref.link}
                target="_blank"
                rel="noreferrer"
                aria-label={storeAriaLabel(data.name, ref.type)}
              >
                <IconLink
                  src={require(`../../resouses/projects/icon-link/${ref.type}.svg`)}
                  alt=""
                  aria-hidden="true"
                />
              </IconButton>
            ))}
            <GithubLink
              href={data.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${data.name} — source code on GitHub`}
            >
              <GithubIcon
                src={require(`../../resouses/projects/icon-link/github.png`)}
                alt=""
                aria-hidden="true"
              />
              Source Code
            </GithubLink>
          </LinkBox>
        </TopBox>
        <Detail>{data.detail}</Detail>
        <TagBox>
          {data.tag.map((tag, i) => (
            <Tag $color={color} key={i}>
              {tag}
            </Tag>
          ))}
        </TagBox>
      </BoxDetail>
    </CardRoot>
  );
}

ProjectCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    key_image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tag: PropTypes.arrayOf(PropTypes.string).isRequired,
    detail: PropTypes.string.isRequired,
    store: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
