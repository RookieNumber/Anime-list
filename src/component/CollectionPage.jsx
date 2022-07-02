import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { Bg } from './Detail'
import { useQuery } from '@apollo/client'
import { GET_ANIME_DETAIL, LOAD_ANIME } from '../graphQL/queries'
import { client } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 200px;
    height: 200px;
    position: absolute;
    top: 100px;
    left: 400px;
`
const Collection = styled.div`
    width: 200px;
    height: 100%;
    position: absolute;
    top: 50px;
    left: 200px;
    color: white;
    color: #C5FF0E;
    border-right: 1px solid #C5FF0E;
    border-left: 1px solid #C5FF0E;
`
const CollectionName = styled.h2`
    margin-left: 10px;
    color: white;
`
const Border = styled.div`
    top: 40px;
    border-bottom: 1px solid #C5FF0E;
    position: absolute;
    left: 0;
    width: 100%;
    display: flex;
`
const Button = styled.button`
    width: max-content;
    background-color: transparent;
    color: #C5FF0E;
    border: none;
    position: absolute;
    right: 0;
    top: 30px;
    margin-right: 10px;
    &:hover {
        cursor: pointer;
    }
`
const CollectionList = styled.ul`
`
const ListTitle = styled.h2`
    color: white;
`

const ListItem = styled.li`
    width: 600px;
    height: 100px;
    margin-bottom: 19px;
    list-style: none;
    padding: 5px 20px 10px 20px ;
    display: flex;
`
const Text = styled.div`
    width: 100%;
    position: relative;
    top: 0;
    padding-top: 20px;
`
const Title = styled.a`
    color: #C5FF0E;
    font-size: 15px;
    font-weight: 500;
    margin-left: 20px;
    
`
const CoverImg = styled.img`
    height: 100%;
    border: 1px solid #C5FF0E;
`



export const CollectionPage = () => {

    // const {data} = useQuery(GET_ANIME_DETAIL, {variables: {"id": }})
    const {collectionName} = useParams()
    const [list, setList] = useState([])
    const [anime, setAnime] = useState([])

    useEffect(() => {
        const DataCollection = JSON.parse(localStorage.getItem(`${collectionName}`))
        setList(DataCollection)
        
        console.log(DataCollection)
       
    }, [])

  return (
    <Bg>
        <Collection>
            <Border>
                <CollectionName>{collectionName}</CollectionName>
                <Button>
                    <FontAwesomeIcon icon={faPencil}/>
                </Button>
            </Border>
        </Collection>
        <Container>
            <CollectionList>
                <ListTitle>Collection</ListTitle>
                {list.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <Link to={`/detail/${item.id}`}>
                                    <CoverImg src={item.coverImage}></CoverImg>
                                </Link>
                                <Text>
                                    <Title>{item.title}</Title>
                                </Text>
                            </ListItem>
                        )
                    })}
            </CollectionList>
        </Container>
    </Bg>
  )
}
