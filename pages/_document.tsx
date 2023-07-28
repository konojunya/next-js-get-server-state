import Document, { Head, Html, Main, NextScript } from "next/document";
import { store } from "../store";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);

    console.log("server state on server");
    console.log(store.get("state"));

    return {
      ...initialProps,
      state: store.get("state"),
    };
  }
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.__PRELOADED_STATE__ = ${JSON.stringify(
                  (this.props as any).state
                )};
              `,
            }}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}
