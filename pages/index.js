// @flow

import "isomorphic-unfetch";
import Helmet from "react-helmet";
import App from "../components/App";
import Hero from "../components/Hero";
import PostList from "../components/PostList";

const Index = ({ posts }) => (
  <App>
    <Hero />
    <Helmet
      defaultTitle="Super Awesome Blog"
      titleTemplate="Super Awesome Blog - %s"
    />
    <PostList data={posts} />
  </App>
);

Index.getInitialProps = async ({ req }) => {
  const url = `https://telnyx-api.jeffrey.engineer`;
  const res = await fetch(`${url}/posts`);
  const json = await res.json();
  return { posts: json };
};

export default Index;
