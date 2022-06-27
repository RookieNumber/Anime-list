import React, {useEffect, useState} from 'react'
import { gql } from '@apollo/client/core'
import { useQuery } from '@apollo/client/react'
import { LOAD_ANIME } from '../graphQL/queries'



const AnimeList = () => {
    const {error, loading, data} = useQuery(LOAD_ANIME)
    const [list, setList] = useState([])

    useEffect(() => {

        if (data) {
            
            setList(data.Page.media)
        }
        
      
      }, [data])
        
  return (
    <ul>
        {list.map((item, index) => {
            return <li key={index}>{item.title.romaji}</li>
        })}
    </ul>
  )
}

export default AnimeList

