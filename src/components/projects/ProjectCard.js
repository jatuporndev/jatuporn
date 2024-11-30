import React from "react";
import styled from "styled-components";

const Box = styled.a`
  display: flex;
  flex-direction: row;
  width: auto;
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;
  cursor: default;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const BoxImage = styled.img`
  width: 200x;
  height: 170px;
  object-fit: cover;
  border: 2px solid #eeeeee;
  border-radius: 4px;
`;

const BoxDetail = styled.div`
  padding-left: 52px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  gap: 12px;
`;

const Detail = styled.div`
  padding-top: 16px;
  color: #9e9e9e;
`;

const IconLink = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 2px;

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
  padding: 1px 4px;
  border-radius: 8px;
  font-size: 13px;

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
  background-color: #d1e9f6;
  padding: 2px 6px;
  border-radius: 20%;
  font-size: 13px;
`;

export default function ProjectCard() {
  const tags = ["Android", "Kotlin", "MVVM", "Android", "Kotlin"];
  const projectLink = "https://redketchup.io/color-picker";
  const refLink = [
    {
      type: "play-style",
      link: "https://stackoverflow.com/questions/5868850/creating-list-of-objects-in-javascript",
    },
    {
      type: "app-store",
      link: "https://stackoverflow.com/questions/5868850/creating-list-of-objects-in-javascript",
    },
  ];

  return (
    <Box href={projectLink} target="_blank" rel="noreferrer">
      <BoxImage
        src={require(`../../resouses/projects/portfolio-1.jpg`)}
      ></BoxImage>
      <BoxDetail>
        <TopBox>
          <Title>Lorem Ipsum</Title>
          <LinkBox>
            {refLink.map((ref) => (
              <a
                key={ref.type}
                href={ref.link}
                target="_blank"
                rel="noreferrer"
              >
                <IconLink
                  src={require(`../../resouses/projects/icon-link/${ref.type}.svg`)}
                  alt={`${ref.type} icon`}
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
        <Detail>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Detail>
        <TagBox>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </TagBox>
      </BoxDetail>
    </Box>
  );
}
