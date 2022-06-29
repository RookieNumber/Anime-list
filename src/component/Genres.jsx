import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const Card = styled.div`
    padding: 5px;
    margin: 10px;
    width: 600px;
    background-color: #6A6A6A;
    font-size: 24px;
    border-radius: 10px;
    &:hover {
        color: red;
    }
    list-style: none;
    display: flex;
`

const Banner = styled.img`
    background-color: white;
    position: relative;
    right: 0;
    width: 100px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 3px solid white;
`
const Title = styled.a`
    color: white;
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

export const NodeGenres = ({item, index}) => {
    return (
        <>
            <Card key={index}>
            <Bnr>
                <Link to={`/detail/${item.id}`}>
                    <Banner src={item.coverImage.large} alt="" />
                </Link>
            </Bnr>
            <Txt>
                <Title>{item.title.english}</Title>
                <Genres>
                    {item.genres.map((item, index) => {
                        const Gtxt = styled.a`
                        font-size: 13px;
                        `
                        return (
                            <Node key={index}>
                                <Gtxt>{item}</Gtxt>
                            </Node>
                            
                        )
                    })}
                </Genres>
            </Txt>
            </Card>
        </>
        )
}