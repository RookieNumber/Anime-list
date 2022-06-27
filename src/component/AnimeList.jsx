import React, {useEffect, useState} from 'react'
import { useQuery } from '@apollo/client/react'
import { LOAD_ANIME } from '../graphQL/queries'
import styled from '@emotion/styled'

// render(
//     <div css={css``}>
//     </div>
// )

const color = 'red'

const Card = styled.div`
    padding: 5px;
    margin: 10px;
    width: 500px;
    background-color: white;
    box-shadow: 5px 1px 10px 2px grey;
    font-size: 24px;
    border-radius: 10px;
    &:hover {
        color: ${color};
    }
    list-style: none;
    display: flex;
`

const Banner = styled.img`
    background-color: white;
    position: relative;
    right: 0;
    width: 200px
    
`
const Title = styled.a`
    color: black;
    font-size: 12px;
`
const Genres = styled.div`
    display: flex;
    width: auto;    
`
const Node = styled.div`
    background-color: green;
    border-radius: 5px;
    width: auto;
    padding: 5px;
    font-size: 15px;
    color: white;
`
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
                <Card key={index}>
                    {/* <Title>{item.title.english}</Title> */}
                    <Genres>
                        <Banner src={item.coverImage.large} alt="" />
                        <Node>{item.genres[0]}</Node>
                    </Genres>
                </Card>
            )
        })}
    </ul>
  )

 

}


export default AnimeList

