// @flow

import { Root } from "./style";
import Comment from "../Comment";

const Comments = ({ data }) => (
  <Root>
    {data && data.length
      ? data.map(comment => <Comment key={comment.id} data={comment} />)
      : "No Comments"}
  </Root>
);

export default Comments;
