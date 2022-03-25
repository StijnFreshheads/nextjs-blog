import { SessionProvider } from 'next-auth/react';
import '../styles/global.css';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PMFKV2D' });
  }, []);
  return (
        <SessionProvider session={session} refetchInterval={0}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
