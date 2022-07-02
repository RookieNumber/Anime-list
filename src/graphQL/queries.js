import { gql } from "@apollo/client/core";

export const LOAD_ANIME = gql`
        query ($id: Int, $page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (id: $id, search: $search) {
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