import React from "react";
import styled from "styled-components";
import { SectionInner } from "../../styles/sectionLayout";
import SectionHeading from "../common/SectionHeading";

const MainDiv = styled.div`
  height: auto;
  width: 100%;
  padding: 56px 0 72px;
  box-sizing: border-box;
`;

const Cards = styled.div`
  width: 100%;
  column-count: 3;
  column-gap: 18px;

  @media (max-width: 1100px) {
    column-count: 2;
  }

  @media (max-width: 700px) {
    column-count: 1;
  }
`;

const Card = styled.div`
  width: 100%;
  display: inline-block;
  margin-bottom: 18px;
  break-inside: avoid;
  background: linear-gradient(180deg, #fafafa 0%, #f4f4f4 100%);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px 16px 18px 16px;
  box-sizing: border-box;
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #424242;
  font-family: "Pangolin";
  margin-bottom: 10px;
`;

const CardBody = styled.div`
  color: #616161;
  font-size: 14px;
  line-height: 20px;
`;

const Bullet = styled.div`
  margin-bottom: 10px;
`;

function Experience({ accentColor }) {
  return (
    <MainDiv id="experience">
      <SectionInner>
        <SectionHeading accentColor={accentColor}>EXPERIENCE</SectionHeading>
        <Cards>
        <Card>
          <CardTitle>Work with AI agent</CardTitle>
          <CardBody>
            <Bullet>
              Used AI agents to complete real tasks end-to-end in a company
              production workflow.
            </Bullet>
            <Bullet>
              Experienced with Claude Code workflows to iterate quickly from
              requirements to working implementation.
            </Bullet>
          </CardBody>
        </Card>

        <Card>
          <CardTitle>Backend like (.NET + Node.js)</CardTitle>
          <CardBody>
            <Bullet>
              Built production backend APIs using .NET and Node.js services.
            </Bullet>
            <Bullet>
              Implemented background batch jobs and worker services for
              reliable async processing.
            </Bullet>
            <Bullet>
              Designed Postgres database models (constraints + indexes) and
              optimized queries for real workloads.
            </Bullet>
          </CardBody>
        </Card>

        <Card>
          <CardTitle>Design Systems</CardTitle>
          <CardBody>
            <Bullet>
              Built and maintained a design system with reusable components and
              consistent styling.
            </Bullet>
            <Bullet>
              Defined backend flow and architecture patterns to keep APIs,
              async batch/worker jobs, and data access consistent.
            </Bullet>
            <Bullet>
              Designed the Postgres schema using ER modeling (entities,
              relationships, constraints, and indexes) to support production
              queries reliably.
            </Bullet>
          </CardBody>
        </Card>

        <Card>
          <CardTitle>Mobile (Native Kotlin + MVVM)</CardTitle>
          <CardBody>
            <Bullet>
              Built native Android apps with Kotlin using MVVM architecture.
            </Bullet>
            <Bullet>
              Used Dependency Injection (DI) and LiveData for state
              management.
            </Bullet>
          </CardBody>
        </Card>

        <Card>
          <CardTitle>iOS (Swift + RxSwift MVVM)</CardTitle>
          <CardBody>
            <Bullet>
              Developed iOS apps with Swift using MVVM and RxSwift for reactive
              flows.
            </Bullet>
            <Bullet>
              Focused on clean separation of concerns and testable business
              logic.
            </Bullet>
          </CardBody>
        </Card>
      </Cards>
      </SectionInner>
    </MainDiv>
  );
}

export default Experience;
