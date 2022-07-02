import {LandingPage} from './component/LandingPage';
import {Detail} from './component/Detail';
import  NavBar  from './component/Navbar';
import { ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import { ApolloProvider} from '@apollo/client/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CollectionPage } from './component/CollectionPage';


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
      <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/detail/:animeId' element={<Detail/>} />
        <Route path='/collection/:collectionName' element={<CollectionPage/>} />
      </Routes>
    </ApolloProvider>
   </>
  );
}

export default App;

