import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { Collection, Border, CollectionName, CollectionList, 
    ListTitle, ListItem, CoverImg, Title, Text, Delete, Bg} from './CollectionPage'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    width: 200px;
    height: auto;
    position: relative;
    top: 100px;
    left: 400px;
`

const Name = styled.h3`
    color: white;
`

export const AllCollection = () => {

  const [list, setList] = useState(false)
  const showList = () => setList(!list)
  const [collection, setCollection] = useState([])

//   function deleteItem(a) {
//     // var koleksi = JSON.parse(localStorage.getItem(`${collectionName}`))
//     var value = JSON.parse(localStorage[`${collectionName}`])
//     for (var i = 0; i < value.length; i++){
//         if(value[i].id === a){
//             value.splice(i,1);
//             setList(value)
//             showDel()
//             break;
//         }
//     }

//     value = JSON.stringify(value);
//     localStorage.setItem(`${collectionName}`, value)
//     // console.log(value)
// }

  useEffect(() => {
    const getAllKey = () => {
      const keys = Object.keys(localStorage);
      setCollection(keys)
  }

  getAllKey()

  }, [])

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
                                <Text>
                                    <Name>{item}</Name>
                                </Text>
                                <Delete>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Delete>
                            </ListItem>
                        )
                    })}
            </CollectionList>
        </Container>
    </Bg>
  )
}
