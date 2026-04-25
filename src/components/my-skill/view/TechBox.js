import React from 'react'
import styled from 'styled-components'
import { BORDER_COLOR, MUTED_TEXT_COLOR, SURFACE_COLOR } from '../../../utility/utility'

const TechBoxMain = styled.div`
  background-color: ${SURFACE_COLOR};
  border: 1px solid ${BORDER_COLOR};
  border-radius: 5px;
  width: 124px;
  height: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px;
  box-shadow: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease; 

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(70, 55, 25, 0.035);
    }
  }
`

const IconBox = styled.img`
  width: 54px;
  height: 54px;
  filter: grayscale(1);
`

const TextDetail = styled.div`
  color: ${MUTED_TEXT_COLOR};
  text-align: center;
  line-height: 18px;
`

function TechBox(props) {
  const {icon, detail} = props
  return (
    <TechBoxMain>
      <IconBox src={icon} />
      <TextDetail>{detail}</TextDetail>
    </TechBoxMain>
  )
}

export default TechBox
