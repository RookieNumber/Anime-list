import React, {useEffect, useState} from 'react'
import { useQuery } from '@apollo/client/react'
import { LOAD_ANIME } from '../graphQL/queries'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Card = styled.div`
    width: 600px;
    background-color: black;
    font-size: 24px;
    left: 0;
    border-radius: 10px;
    list-style: none;
    display: flex;
    margin-bottom: 10px;
`

const Banner = styled.img`
    background-color: white;
    position: relative;
    right: 0;
    width: 100px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 3px solid #C5FF0E;
`
const Title = styled.h1`
    color: #C5FF0E;
    font-size: 15px;
    margin-top: 40px;
    margin-left: 10px;
    position: relative;
    position: left;
`
const Genres = styled.div`
    width: auto;
    position: relative;
    left: 0;     
    margin-left: 10px;
`
const Txt = styled.div`
    position: relative;
    left: 0;
    margin-top: 20px;
`
const Bnr = styled.div`
    padding: 20px;
    width: 100px;
`

const Node = styled.div`
    background-color: green;
    display: inline;
    border-radius: 5px;
    width: min-content;
    align-item: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: 10px;
    font-size: 15px;
    color: white;
`

const AnimeList = () => {
   
    const {error, loading, data, fetchMore} = useQuery(LOAD_ANIME, {variables: {"page": 1, "perPage": 10}})
    const [list, setList] = useState([])
    const [page, setPage] = useState()

    useEffect(() => {
        if (data) {   
            console.log(data.Page)
            setList(data.Page.media)   
        }
      }, [data])

  return ( 
    <>
    <ul>
        {list.map((item, index) => {
            return (
                <Card key={index}>
                    <Bnr>
                        <Link to={`/detail/${item.id}`}>
                            <Banner src={item.coverImage.large} alt="" />
                        </Link>
                    </Bnr>
                    <Txt>
                        <Link style={{textDecoration: 'none'}} to={`/detail/${item.id}`}>
                            <Title>{item.title.english}</Title>
                        </Link>
                        <Genres>
                            {item.genres && item.genres.map((genres, index) => {
                                const Gtxt = styled.a`
                                font-size: 13px;
                                `
                                return (
                                    <Node key={index}>
                                        <Gtxt>{genres}</Gtxt>
                                    </Node>
                                    
                                )
                            })}
                        </Genres>
                    </Txt>
                </Card>
            )
        })}
    </ul>
    </>
  )

 

}


export default AnimeList

