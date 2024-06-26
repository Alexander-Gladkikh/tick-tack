import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log("App");
  return <Component {...pageProps} />;
}
