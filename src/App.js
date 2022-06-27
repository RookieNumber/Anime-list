import  AnimeList  from './component/AnimeList';
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider, useQuery } from '@apollo/client/react';



//apollo client set up
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://graphql.anilist.co",
    fetchOptions: {
      method: "POST"
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
});

function App() {

  return (
   <>
    <ApolloProvider client={client}>
      <h3>List of everyDamn thing</h3>
      <AnimeList/>
    </ApolloProvider>
   </>
  );
}

export default App;

