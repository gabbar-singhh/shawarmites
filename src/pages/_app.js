import "@/styles/globals.css";
import { RemoveScrollBar } from "react-remove-scroll-bar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RemoveScrollBar />
      <Component {...pageProps} />;
    </>
  );
}
