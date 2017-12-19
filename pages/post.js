// @flow

import "isomorphic-unfetch";
import Post from "../components/Post";
import getNestedChildren from "../utils/getNestedChildren";

Post.getInitialProps = async ({ query: { id }, req }) => {
  const url = `https://telnyx-api.jeffrey.engineer`;
  const postData = await fetch(`${url}/posts/${id}`).then(res => res.json());
  const commentsData = await fetch(`${url}/posts/${id}/comments`)
    .then(res => res.json())
    .then(data => {
      return getNestedChildren(data);
    });
  return { post: postData, comments: commentsData };
};

export default Post;
