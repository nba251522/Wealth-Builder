import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ApolloProvider>
    </>
  );
};

export default App;