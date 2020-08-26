import '../styles/globals.css'

import 'react-medium-image-zoom/dist/styles.css'

// import '../components/DownloadButton/download.css';
//base
import "../styles/base/_base.css";
import "../styles/base/_normalize.css";
import "../styles/base/_typography.css";

// component
import '../styles/components/_header.css';
import '../styles/components/_footer.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
