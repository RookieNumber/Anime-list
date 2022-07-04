import React, {useEffect, useState} from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_ANIME } from '../graphQL/queries'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Breakpoints = [576, 768, 992, 1200, 2000]
const mq = Breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
  )

const ListAnime = styled.ul`
    ${mq[1]} {
        column-count: 1;
    }
    column-count: 2;
    position: relative;
    left: 0;
`

const Card = styled.li`
    ${mq[4]} {
        width: 600px;
        background-color: black;
    }

    // ${mq[3]} {
    //     width: 500px;
    //     background-color: red;
    // }

    ${mq[1]} {
        width: 300px;
        height: auto;
        display: block;
    }
    width: 300px;
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
    border: 3px solid #C5FF0E;
    ${mq[1]} {
        width: 200px;
        margin: 0;
    }
`
const Title = styled.h1`
    color: #C5FF0E;
    font-size: 15px;
    margin-top: 40px;
    margin-left: 10px;
    position: relative;
    position: left;
    ${mq[1]} {
        margin-top: 0;
        font-size: 17px;
        text-align: center;
    }
`

const Txt = styled.div`
    position: relative;
    left: 0;
    margin-top: 20px;
    ${mq[1]} {
        margin-top: 0px;
        display: block;
        height: max-content;
    }
`
const Bnr = styled.div`
    width: auto;
    padding: 30px;
    ${mq[1]} {
        padding-left: 50px;
        padding-right: 50px;
    }
`
const Genres = styled.ul`
    width: auto;
    position: relative;
    left: 0;     
    margin-left: 10px;
    ${mq[1]} {
        column-count: 2;
        item-align: center;
        width: min-content;
        padding-bottom: 10px;
        text-align: center;
    }
`

const Node = styled.li`
    background-color: green;
    display: inline;
    border-radius: 5px;
    width: min-content;
    align-item: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 15px;
    color: white;
    ${mq[1]} {
        display: inline-block;
    }
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
    ${mq[1]} {
        position: relative;
        left: 70px;

    }
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

