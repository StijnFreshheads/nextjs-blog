import '../styles/global.css'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PMFKV2D' });
  }, []);
  return <Component {...pageProps} />
}
