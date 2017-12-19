// @flow

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
import { injectGlobal } from "styled-components";
import { normalize } from "polished";
import "./fonts";

injectGlobal`
  ${normalize()}
  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: 'Apercu', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
    letter-spacing: 0;
    font-weight: 400;
    font-style: normal;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;
    -webkit-font-smoothing: antialiased;
    color: #454547;
  }

  @media screen and (min-aspect-ratio: 2/3) {
    overflow: hidden;
  }
`;
