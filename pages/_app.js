import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('Hello from _app.js...')
  return <Component {...pageProps} />
}

export default MyApp
