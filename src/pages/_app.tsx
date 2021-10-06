import type { AppProps } from "next/app";
import "../DynamicComponents";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
