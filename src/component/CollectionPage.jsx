import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { On, Off } from './Detail'
import { useQuery } from '@apollo/client'
import { GET_ANIME_DETAIL, LOAD_ANIME } from '../graphQL/queries'
import { client } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Breakpoints = [576, 768, 992, 1200, 2000]
const mq = Breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
  )

export const Bg = styled.div`
    background-color: #2C2C2C;
    position: absolute;
    width: 100%;
    height: max-content;
    font-family: 'PT Sans', sans-serif;
    left: 0;
    display: flex;
    padding-bottom: 200px;
    ${mq[1]} {
        display: block;
    }
`
export const Container = styled.div`
    width: 200px;
    height: auto;
    position: relative;
    top: 100px;
    left: 400px;
    ${mq[1]} {
        top: 0px;
        left: 0px;
    }
`
export const Collection = styled.div`
    width: 200px;
    position: relative;
    top: 50px;
    left: 200px;
    color: white;
    color: #C5FF0E;
    ${mq[1]} {
        top: 20px;
        left: 20px;
    }
`
export const CollectionName = styled.h2`
    margin-left: 10px;
    color: white;
`
export const Border = styled.div`
    top: 40px;
    border-bottom: 1px solid #C5FF0E;
    position: absolute;
    left: 0;
    height: max-auto;
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
export const CollectionList = styled.ul`
    position: relative;
    height: max-content;
    ${mq[1]} {
        position: relative;
        top: 200px;
    }
`
export const ListTitle = styled.h2`
    color: white;

`

export const ListItem = styled.li`
    width: 600px;
    height: 100px;
    margin-bottom: 19px;
    list-style: none;
    padding: 5px 20px 10px 20px ;
    display: flex;
    position: relative;
    border-bottom:  1px solid #C5FF0E;
    ${mq[1]} {
        width: 300px;
    }
`
export const Text = styled.div`
    width: 100%;
    position: relative;
    top: 0;
    // padding-top: 20px;
`
export const Title = styled.a`
    color: #C5FF0E;
    font-size: 15px;
    font-weight: 500;
    margin-left: 20px;
    
`
export const CoverImg = styled.img`
    height: 100%;
    border: 1px solid #C5FF0E;
`
export const Delete = styled.button`
    background-color: transparent;
    color: #C5FF0E;
    border: none;
    &:hover {
        cursor: pointer;
    }
`
export const Confirmed = styled.div`
    width: max-content;
    background-color: black;
    height: max-content;
    position: fixed;
    top: 100px;
    right: 200px;
    display: flex;
    ${mq[1]} {
        position: fixed;
        top: 50px;
        right: 0;
    }
`
export const DeleteText = styled.a`
    color: white;
    font-size: 13px;
    width: auto;
    height: auto;
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 30px;
`
export const ButtonDel = styled.button`
    background-color: transparent;
    border: none;
    position: relative;
    top: 0;
    right: 0;
    color: red;
    height: auto;
    width: auto;
    &:hover {
        cursor: pointer;
    }
`



export const CollectionPage = () => {

    // const {data} = useQuery(GET_ANIME_DETAIL, {variables: {"id": }})
    const {collectionName} = useParams()
    const [list, setList] = useState([])
    const [del, setDel] = useState(false)
    const showDel = () => setDel(!del)
    const hideDel = () => setDel(false)
    const [anime, setAnime] = useState([])

    function deleteItem(a) {
        // var koleksi = JSON.parse(localStorage.getItem(`${collectionName}`))
        var value = JSON.parse(localStorage[`${collectionName}`])
        for (var i = 0; i < value.length; i++){
            if(value[i].id === a){
                value.splice(i,1);
                setList(value)
                showDel()
                break;
            }
        }

        value = JSON.stringify(value);
        localStorage.setItem(`${collectionName}`, value)
        // console.log(value)
    }

    useEffect(() => {
        setTimeout(setDel(false), 1000);
    }, [])

    useEffect(() => {
        const DataCollection = JSON.parse(localStorage.getItem(`${collectionName}`))
        setList(DataCollection)
        
        console.log(DataCollection)
       
    }, [collectionName])

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
                                <Delete onClick={() => deleteItem(item.id)}>
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
                    Anime is deleted from this list
                </DeleteText>
                <ButtonDel onClick={hideDel}>
                    <FontAwesomeIcon icon={faSquareXmark} size="3x"/>
                </ButtonDel>
            </Confirmed></On>
            : <Off></Off>}
    </Bg>
  )
}
