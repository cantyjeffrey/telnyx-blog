// @flow

import "isomorphic-unfetch";
import Helmet from "react-helmet";
import App from "../components/App";
import Hero from "../components/Hero";
import PostList from "../components/PostList";
import sortPostsByDate from "../utils/sortPostsByDate";

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
  const response = await fetch(`${url}/posts`)
    .then(response => response.json())
    .then(data => sortPostsByDate(data));
  return { posts: response };
};

export default Index;
