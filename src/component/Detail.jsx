import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { GET_ANIME_DETAIL } from '../graphQL/queries'

const Bg = styled.div`
    background-color: #2C2C2C;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
`
const Banner = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    top: 40px;
`

const BannerImg = styled.img`
    width: 100%;
`
const BannerCover = styled.img`
    width: 200px;
    z-index: 1;
    position: absolute;
    top: 40vh;
    margin-left: 50px;
    left: 0;
    border: 2px solid white;
`

const Title = styled.a`
    font-size: 5vh;
    position: relative;
    top: 0;
    left: ;
    color: white;
    z-index: 2;
`
const DetailText = styled.div`
    position: relative;
    width: 100%;
    background-color: red;
    height: auto;
    top: 50px;
`
const MoreDetail = styled.a`
    font-size: 20px;
    color: white;
`
const ConText = styled.div`
    width: 500px;
    background-color: blue;

`

export const Detail = () => {

    const { animeId } = useParams();
    const {error, loading, data} = useQuery(GET_ANIME_DETAIL, {variables: {"id" : animeId}})
    const [detail, setDetail] = useState([])
    const [title, setTitle] = useState([])
    const [cover, setCover] = useState([])

    useEffect(() => {
        if(data) {
            console.log(data)
             setDetail(data.Media)
             setTitle(data.Media.title)
             setCover(data.Media.coverImage)
        }
    }, [data])

  return (
        <>
        <Bg>
            <Banner>
                <BannerImg src={detail.bannerImage}></BannerImg>
                <BannerCover src={cover.large}></BannerCover>
            </Banner>
            <DetailText>
                <Title>{title.english}</Title>
               <ConText>
                    
                    <MoreDetail>{detail.description}</MoreDetail>
               </ConText>
            </DetailText>
        </Bg>
        </>
    
  )
}
