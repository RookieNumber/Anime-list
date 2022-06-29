import { gql } from "@apollo/client/core";

export const LOAD_ANIME = gql`
        query {
            Page {
            media(isAdult: false, sort: POPULARITY_DESC) {
                id
                title {
                romaji
                english
                }
                coverImage {
                large
                }
                genres
                
            }
            }
        }
`

export const GET_ANIME_DETAIL = gql`
        query ($id: Int) { 
            Media (id: $id, type: ANIME) {
            id
            title {
            romaji
            english
            native
            }
            bannerImage
            coverImage {
            large
            }
            genres
            description
            }
        }
`