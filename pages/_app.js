/* _app.js */
import React from "react";
import App from "next/app";
import Head from "next/head";
import NavBar from "../components/nav";
import { withRouter } from "next/router";


class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="/bootstrap.min.css"
            crossOrigin="anonymous"
          />
        </Head>
        <NavBar />
        <Component {...pageProps} />
      </>
    );
  }
}
export default withRouter(MyApp);
