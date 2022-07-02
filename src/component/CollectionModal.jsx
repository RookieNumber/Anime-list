import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { On, Off } from './Detail'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
    width: min-content;
    height: min-content;
    background-color: black;
    z-index: 5;
    position: fixed;
    font-family: 'PT Sans', sans-serif;
    top: 300px;
    left: 40%;
    padding-right: 10px;
    padding-top: 10px;
    display: ;

`
const Form = styled.form`
    
`
const Input = styled.input`
    width: 80%;
    height: 20px;
`
const Label = styled.label`

`
const List = styled.ul`
    width: 200px;
    height: max-content;
    list-style: none;
    position: relative;
    left: -20px;
`
const ListItem = styled.li`
    margin-bottom: 10px;
    position: relative;
    left: 0;
    color: white;
`
const Add = styled.button`
    width: min-content;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 0;
    &:hover {
        cursor: pointer;
    }
`
const AddItem = styled.div`
    width: 100%;
`
const AddList = styled.div`
    width: max-width;
    display: block;
    margin-left: 10%;
    margin-bottom: 20px;
`
const AddButton = styled.button`
    background-color: black;
    color: #C5FF0E;
    border: none;
    padding: 10px 20px 10px;
    margin-left: 21%;
    margin-bottom: 20px;
    &:hover {
        cursor: pointer;
    }
`
const Adding = styled.button`
    margin-top: 10px;
    padding: 5px 10px 5px;
    
`
const CollectionList = [
    {
        name: "My-List1"
    },
    {
        name: "My-List2"
    },
    {
        name: "My-List3"
    }
]


export const CollectionModal = ({ data }) => {
    
    const [add, setAdd] = useState(false)
    const showAdd = () => setAdd(!add)
    const [title, setTitle] = useState("")
    const [collection, setCollection] = useState([])

    const createCollection = () => {
        
        var a = [];

        a = JSON.parse(localStorage.getItem(`${title}`)) || [];

        a.push(
            {
                id: data.id,
                title: data.title.english,
                coverImage: data.coverImage.large,
                bannerImage: data.bannerImage,
                description: data.description,
                genres: data.genres

            }
        );
                
        localStorage.setItem(`${title}`, JSON.stringify(a))
        console.log(a)
    }

    const addToCollection = (item) => {

        var b = [];
        b = JSON.parse(localStorage.getItem(`${item}`)) || [];

        b.push(
            {
                id: data.id,
                title: data.title.english,
                coverImage: data.coverImage.large,
                bannerImage: data.bannerImage,
                description: data.description,
                genres: data.genres
            }
        )

        localStorage.setItem(`${item}`, JSON.stringify(b))

        console.log(b)
        
    }

    useEffect(() => {

        const getAllKey = () => {
            const keys = Object.keys(localStorage);
            console.log(keys)
            setCollection(keys)
        }

        getAllKey()
    }, [])


  return (
    <Container>
        <List>
            {collection.map((item, index) => {
                return (
                    <ListItem key={index}>
                        {item}
                        <Add>
                            <FontAwesomeIcon style={{color: '#C5FF0E'}} onClick={() => addToCollection(item)} icon={faPlusSquare}/>
                        </Add>
                    </ListItem>
                )
            })}
        </List>
        {add ? 
        <AddList>
            <Form>
                <Label>Nama</Label>
                <Input placeholder='Collection' type='text' name="Name" onChange={e => setTitle(e.target.value)}></Input>
            </Form>
            <Adding onClick={() => createCollection()} >
                Create
            </Adding>
        </AddList>
        :
        <AddItem>
            <AddButton onClick={showAdd}>
                Create Collection
            </AddButton>
        </AddItem>}
    </Container>
  )
}
