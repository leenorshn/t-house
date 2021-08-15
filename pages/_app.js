import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-50">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
