import '../styles/globals.css';
import Layout from '../components/Layout';
import { StoreProvider } from '../client/context';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  )
}

export default MyApp
