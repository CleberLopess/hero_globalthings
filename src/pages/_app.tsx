import type { AppProps } from "next/app";
import "styles/globals.css";

//redux
// import { store } from "store";
// import { Provider } from "react-redux";

//components
import { Layout } from "sections/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
