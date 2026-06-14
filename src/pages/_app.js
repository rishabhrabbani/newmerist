import "../styles/globals.css";
import { hostGrotesk } from "../components/fonts";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${hostGrotesk.variable} ${hostGrotesk.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
