import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { SideNav } from './SideNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png'


const Navi = styled.div`
             background-color: #C5FF0E;
             width: 100%;
             height: 50px;
             position: fixed;
             top: 0;
             left: 0;
             z-index: 2;
             display: flex;
`

const Logo = styled.button`
             background-color: transparent;
             border: none;
             position: relative;
             left: 0;
             top: 0;
             display: flex;
`
const Image = styled.img`
  width: 50px;
`
const Title = styled.a`
  color: black;
  font-size: 20px;
  position: relative;
  top: 15px;
`
const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #2C2C2C;
  position: relative;
  left: 0;
  top: 0;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`
const On = styled.div`
  width: max-content;
  visibility: visibile;
  animation-duration: 5s;
`
const Off = styled.div`
`


const NavBar = () => {

  const [sidenav, setSidenav] = useState(false)
  const showSidenav = () => setSidenav(!sidenav)

  return (
    <>
      <Navi>
        <Button onClick={showSidenav}>
          <FontAwesomeIcon icon={faBars} size="2x"/>
        </Button>
          <Logo > 
          <Link to={`/`}>
            <Image src={logo}>
            </Image>
            </Link>
            <Title>AnimeClick</Title>
          </Logo>
      </Navi>
      {sidenav ? <On><SideNav/></On> : <Off></Off>}
    </>
    
  )
}

export default NavBar