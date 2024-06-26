import "../styles/globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', "cyrillic"] })

export default function App({ Component, pageProps }) {
  console.log("App");
  return <div className={inter.className}>
    <Component {...pageProps} />
    </div>;
}
