import Document, { Head, Main, NextScript } from "next/document";
import Helmet from "react-helmet";
import { ServerStyleSheet } from "styled-components";

import "../styles/global-styles";
const GA_TRACKING_ID = `UA-68616953-7`;

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    const sheet = new ServerStyleSheet();
    const styleTags = sheet.getStyleElement();
    return { ...documentProps, helmet: Helmet.renderStatic(), styleTags };
  }

  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== "htmlAttributes" && el !== "bodyAttributes")
      .map(el => this.props.helmet[el].toComponent());
  }

  get helmetJsx() {
    return (
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { property: "og:title", content: "" }
        ]}
      />
    );
  }

  render() {
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}
          {this.props.styleTags}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `
            }}
          />
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main className="main" />
          <NextScript />
        </body>
      </html>
    );
  }
}
