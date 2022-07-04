import React from 'react'
import AnimeList from './AnimeList'
import styled from '@emotion/styled'

const Bg = styled.div`
      background-color: #2C2C2C;
      position: absolute;
      width: 100%;
      font-family: 'PT Sans', sans-serif;
      height: auto;
      left: 0;
`
const Cn = styled.div`
      width: max-width;
      margin-left: 15%;
      margin-top: 50px;
      display: table;
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
