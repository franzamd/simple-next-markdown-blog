import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='container'></main>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
