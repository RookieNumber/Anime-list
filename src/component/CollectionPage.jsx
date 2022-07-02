import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { Bg } from './Detail'
import { useQuery } from '@apollo/client'
import { GET_ANIME_DETAIL } from '../graphQL/queries'

const Container = styled.div`
    width: 200px;
    height: 200px;
    position: fixed;
    top: 200px;
    left: 400px;
`

export const CollectionPage = () => {

    const {collectionName} = useParams()
    const [list, setList] = useState([])

    useEffect(() => {
        const DataCollection = JSON.parse(localStorage.getItem(`${collectionName}`))
        setList(DataCollection)

        console.log(DataCollection)
        
        
    
    }, [])

  return (
    <Bg>
        <Container>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index}>{item.id}</li>
                    )
                })}
            </ul>
        </Container>
    </Bg>
  )
}
