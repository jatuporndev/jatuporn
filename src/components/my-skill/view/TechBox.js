import React from 'react'
import styled from 'styled-components'

const TechBoxMain = styled.div`
  background-color: #EEEEEE;
  border-radius: 5px;
  width: 124px;
  height: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px;
  transition: all 0.3s; 

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
`

const IconBox = styled.img`
  width: 54px;
  height: 54px;
  filter: grayscale(1);
`

const TextDetail = styled.div`
  color: #616161;
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