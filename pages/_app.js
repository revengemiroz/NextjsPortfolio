import "../styles/globals.css";

import "react-medium-image-zoom/dist/styles.css";

// import '../components/DownloadButton/download.css';
//base
import "../styles/base/_base.css";
import "../styles/base/_normalize.css";
import "../styles/base/_typography.css";

// component
import "../styles/components/_header.css";
import "../styles/components/_footer.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "https://api.hashnode.com/",
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
