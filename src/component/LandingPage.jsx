import React from 'react'
import AnimeList from './AnimeList'
import styled from '@emotion/styled'

const Bg = styled.div`
      background-color: #2C2C2C;
      position: absolute;
      width: 100%;
      height: auto;
      left: 0;
`
const Cn = styled.div`
      width: auto;
      margin-left: 30%;
      margin-top: 50px;
`

export const LandingPage = () => {
  return (
   <>
    <Bg>
      <Cn>
        <AnimeList/>
      </Cn>
    </Bg>
      
   </>

  )
}
