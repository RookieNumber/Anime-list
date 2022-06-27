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