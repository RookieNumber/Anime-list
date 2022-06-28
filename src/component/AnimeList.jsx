import React, {useEffect, useState} from 'react'
import { useQuery } from '@apollo/client/react'
import { LOAD_ANIME } from '../graphQL/queries'
import { NodeGenres } from './Genres'

// render(
//     <div css={css``}>
//     </div>
// )

const AnimeList = () => {
   
    const {error, loading, data} = useQuery(LOAD_ANIME)
    const [list, setList] = useState([])

    useEffect(() => {
        if (data) {   
            console.log(data.Page)
            setList(data.Page.media)
           
        }
      }, [data])

  return ( 
    <ul>
        {list.map((item, index) => {
            return (
                <NodeGenres item={item} key={index}/>
            )
        })}
    </ul>
  )

 

}


export default AnimeList

