import React from 'react';
import '@fontsource/open-sans/variable.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Layout from './components/Layout';
import PersonsList from './features/persons/personsList';

const queryClient = new QueryClient();

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Open Sans, sans-serif',
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Layout>
          <PersonsList />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
