import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/GlobalStyles";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";
import Layout from "../src/Components/Commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
