import React, {useEffect, useState} from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_ANIME } from '../graphQL/queries'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListAnime = styled.ul`
    column-count: 2;
    position: relative;
    left: 0;
`

const Card = styled.li`
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
const Button = styled.button`
    background-color: black;
    color: #C5FF0E;
    font-size: 17px;
    font-weight: 200;
    &:hover {
        cursor: pointer;
        background-color: #C5FF0E;
        color: black;
    }
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
`
const PageNumber = styled.a`
    color: #C5FF0E;
    font-size: 17px;
    font-weight: 200;
    position: relative;
`
const BtnContainer = styled.div`
    width: max-content;
    display: flex;
    position: relative;
    left: -80px;
`



const AnimeList = () => {
    
    const [page, setPage] = useState(1)

    const {error, loading, data} = useQuery(LOAD_ANIME, {variables: {"page": page, "perPage": 10}})
    
    if (loading) {
        return <div>Loading</div>
      }
    
      if (error) {
        return <div>{error.message}</div>
      }

    // useEffect(() => {
    //     if (data) {   
    //         console.log(data.Page)
    //         setList(data.Page.media)   
    //     }
    //   }, [data])

    console.log(page)

  return ( 
    <>
    <ListAnime>
        {data.Page.media.map((item, index) => {
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
    <BtnContainer>
        <Button onClick={() => setPage((event) => event - 1)}>Prev</Button>
        <PageNumber>{page}</PageNumber>
        <Button onClick={() => setPage((event) => event + 1)}>Next</Button>
    </BtnContainer>
    </ListAnime>
    </>
  )

 

}


export default AnimeList

