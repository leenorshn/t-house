import 'tailwindcss/tailwind.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-50">
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
