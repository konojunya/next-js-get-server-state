import "../styles/globals.css";
import NextApp from "next/app";
import type { AppContext, AppProps } from "next/app";
import { userAgentFromString } from "next/server";
import { store } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = async (context: AppContext): Promise<any> => {
  const { pageProps } = await NextApp.getInitialProps(context);
  const req = context.ctx.req;

  // only run on server
  if (req != null) {
    const uaString = req.headers["user-agent"];
    const userAgent = userAgentFromString(uaString);
    const isSP = userAgent.device.type === "mobile";

    store.set("state", { isSP });
  }

  return {
    pageProps,
  };
};
