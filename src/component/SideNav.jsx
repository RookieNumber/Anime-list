import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 200px;
  height: 100%;
  background-color: black;
  font-family: 'PT Sans', sans-serif;
  z-index: 3;
  position: fixed;
  left: 0;
  top: 50px;
  padding-top: 100px;
  transition: 0.3s;
`
const Collection = styled.div`
  width: 100%;
  display: block;
`
const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 20px 10px;
  outline: none;
  color: #C5FF0E;
  &:hover {
    cursor: pointer;
  }
`
const List = styled.ul`
  width: 100%;
`
const ListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
`
const ListItem2 = styled.li`
  list-style: none;
  margin-bottom: 10px;
  width: 100%;
`

const Title = styled.a`
  margin-right: 40px;
`
const On = styled.div`
  width: max-content;
  visibility: visibile;
  animation-duration: 5s;
`
const Off = styled.div`
`

export const SideNav = () => {

  const [list, setList] = useState(false)
  const showList = () => setList(!list)
  const [collection, setCollection] = useState([])

  useEffect(() => {
    const getAllKey = () => {
      const keys = Object.keys(localStorage);
      setCollection(keys)
  }

  getAllKey()

  }, [])

  return (
    <Container>
      <Collection>
        <Button onClick={showList}>
          <Title>Show Collection</Title>
          <FontAwesomeIcon icon={faArrowDown}/>
        </Button>
        {list ? <On>
          <List>
          {collection.map((item, index) => {
            return (
                <ListItem key={index}>
                <Link to={`/collection/${item}`}>
                  <Button>{item}</Button>
                </Link>
                </ListItem>
            )
          })}
          </List>
          <ListItem2>
                 <Link to={`/collection/All`}>
                  <Button>
                  All List
                  </Button>
                 </Link>
          </ListItem2>
          </On> : <Off></Off>}
          <Button>
            <Title>Create Collection</Title>
            <FontAwesomeIcon icon={faPlus}/>
          </Button>
      </Collection>
    </Container>
  )
}
