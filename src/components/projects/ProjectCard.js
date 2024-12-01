import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.a`
  display: flex;
  flex-direction: row;
  width: auto;
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;
  cursor: default;

  @media (max-width: 767px) {
    flex-direction: column;
    margin-left: 28px;
    margin-right: 28px;
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const BoxImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border: 2px solid #eeeeee;
  border-radius: 4px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const BoxDetail = styled.div`
  padding-left: 52px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    padding-left: 0px;
    padding-top: 24px;
  }
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    gap: 8px;
    flex-direction: column-reverse;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;

  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const LinkBox = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 12px;

  @media (max-width: 767px) {
    flex-direction: row-reverse;
  }
`;

const Detail = styled.div`
  padding-top: 16px;
  color: #9e9e9e;
`;

const IconLink = styled.img`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;


  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`;

const GithubLink = styled.a`
  display: flex;
  height: 26px;
  align-items: center;
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 1px 8px;
  border-radius: 8px;
  font-size: 13px;
  white-space: nowrap;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`;

const TagBox = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.div`
  background-color: ${(props) => props.$color};
  padding: 2px 6px;
  border-radius: 20%;
  font-size: 13px;
`;

export default function ProjectCard({ data, color }) {
  return (
    <Box href={data.link} target="_blank" rel="noreferrer">
      <BoxImage
        src={require(`../../resouses/projects/${data.key_image}`)}
      ></BoxImage>
      <BoxDetail>
        <TopBox>
          <Title>{data.name}</Title>
          <LinkBox>
            {data.store.map((ref, i) => (
              <a
                key={i}
                href={ref.link}
                target="_blank"
                rel="noreferrer"
              >
                <IconLink
                  src={require(`../../resouses/projects/icon-link/${ref.type}.svg`)}
                  alt={`${ref.type} icon`}
                  key={i}
                />
              </a>
            ))}
            <GithubLink>
              <IconLink
                src={require(`../../resouses/projects/icon-link/github.png`)}
                alt={`icon`}
              />
              Source Code
            </GithubLink>
          </LinkBox>
        </TopBox>
        <Detail>{data.detail}</Detail>
        <TagBox>
          {data.tag.map((tag, i) => (
            <Tag $color={color} key={i}>{tag}</Tag>
          ))}
        </TagBox>
      </BoxDetail>
    </Box>
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
