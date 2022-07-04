import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { GET_ANIME_DETAIL } from '../graphQL/queries'
import { CollectionModal } from './CollectionModal'

export const Bg = styled.div`
    background-color: #2C2C2C;
    position: absolute;
    padding-bottom: 5%;
    top: 0;
    width: 100%;
    height: auto;
    font-family: 'PT Sans', sans-serif;
    left: 0;
    display: block;
`
const Banner = styled.div`
    width: 100%;
    height: max-content;
    position: relative;
    top: 50px;
`

const BannerImg = styled.img`
    width: 100%;
    height: 400px;
`
const BannerCover = styled.img`
    width: 200px;
    z-index: 1;
    position: relative;
    bottom: -50%;
    margin-left: 10%;
    left: 0;
    border: 2px solid white;
`

const Title = styled.a`
    font-size: 5vh;
    position: relative;
    top: 0;
    left: ;
    color: #C5FF0E;
    z-index: 2;
    width: max-width;
`
const DetailText = styled.div`
    position: relative;
    padding: 5% 25%;
    width: max-width;
    height: max-height;
    display: block;
`
const MoreDetail = styled.a`
    font-size: 18px;
    color: #C5FF0E;
`
const ConText = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;

`
const Button = styled.button`
    background-color: black;
    position: relative;
    margin: 2% 2% 20% 10%;
    padding: 10px;
    height: min-content;
    color: white;
    &:hover {
        cursor: pointer;
        border: 1px solid #C5FF0E;
        transition: 0.2s;
    }
`

export const On = styled.div`
    visibility: visible;
`
export const Off = styled.div`
    visibility: hidden;
`

export const Detail = () => {

    const { animeId } = useParams();
    const {error, loading, data} = useQuery(GET_ANIME_DETAIL, {variables: {"id" : animeId}})
    const [detail, setDetail] = useState([])
    const [title, setTitle] = useState([])
    const [cover, setCover] = useState([])
    const [modal, setModal] = useState(false)
    const showModal = () => setModal(!modal)

    useEffect(() => {
        if(data) {
            
             setDetail(data.Media)
             setTitle(data.Media.title)
             setCover(data.Media.coverImage)
             console.log(data.Media)
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
                    <Button onClick={showModal}>
                    Add to Collection
                    </Button>
               </ConText>
            </DetailText>
            {modal ? <On><CollectionModal data={detail} modal={modal} setClose={setModal}/></On> : <Off></Off>}
        </Bg>

        </>
    
  )
}
