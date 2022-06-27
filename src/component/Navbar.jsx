import React from 'react'
import styled from '@emotion/styled'

const Navi = styled.div`
             background-color: #C5FF0E;
             width: 100%;
             height: 50px;
             position: absolute;
             top: 0;
             left: 0;
`

const Logo = styled.button`
             background-color: transparent;
             border: none;
`


const NavBar = () => {
  return (
    
      <Navi>
        <Logo>
            
        </Logo>
      </Navi>
    
  )
}

export default NavBar