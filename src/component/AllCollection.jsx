import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { Collection, Border, CollectionName, CollectionList, 
    ListTitle, ListItem, CoverImg, Container, Title, Text, Delete, Bg,
    Confirmed, DeleteText, ButtonDel} from './CollectionPage'
import { On, Off } from './Detail'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSquareXmark } from '@fortawesome/free-solid-svg-icons'

const Name = styled.h3`
    color: white;
`

export const AllCollection = () => {

  const [list, setList] = useState(false)
  const showList = () => setList(!list)
  const [del, setDel] = useState(false)
    const showDel = () => setDel(!del)
    const hideDel = () => setDel(false)
  const [collection, setCollection] = useState([])
  const keys = Object.keys(localStorage);

  function deleteItem(a) {
    localStorage.removeItem(a)
    
    if (keys) {
        showDel()
        setList(keys)
    }
    // console.log(value)
}

  useEffect(() => {
    const getAllKey = () => {
      setCollection(keys)
  }

  getAllKey()

  }, [keys])

  return (
    <Bg>
         <Collection>
            <Border>
                <CollectionName>All Collection</CollectionName>
            </Border>
        </Collection>
        <Container>
            <CollectionList>
                <ListTitle>Collection</ListTitle>
                {collection.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <Link style={{textDecoration: 'none'}} to={`/collection/${item}`}>
                                    <Text>
                                        <Name>{item}</Name>
                                    </Text>
                                </Link>
                                <Delete onClick={() => deleteItem(item)}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Delete>
                            </ListItem>
                        )
                    })}
            </CollectionList>
        </Container>
        {del ? <On>
            <Confirmed>
                <DeleteText>
                    Collection is deleted from this list
                </DeleteText>
                <ButtonDel onClick={hideDel}>
                    <FontAwesomeIcon icon={faSquareXmark} size="3x"/>
                </ButtonDel>
            </Confirmed></On>
            : <Off></Off>}
    </Bg>
  )
}
