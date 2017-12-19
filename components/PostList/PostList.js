// @flow

import Link from "next/link";
import format from "date-fns/format";

import {
  Root,
  Post,
  Heading,
  Description,
  Meta,
  Author,
  DateTime
} from "./style";

const PostList = ({ data }) => (
  <Root>
    {data.map(p => {
      const { id, title, author, publish_date, description } = p;
      return (
        <Post key={id}>
          <Link prefetch href={`/post?id=${id}`} as={`/post/${id}`}>
            <Heading>{title}</Heading>
          </Link>
          <Description>{description}</Description>
          <Meta>
            <Author>{author}</Author>
            <DateTime dateTime={format(publish_date)}>
              {format(publish_date, "MMM Do, YYYY")}
            </DateTime>
          </Meta>
        </Post>
      );
    })}
  </Root>
);

export default PostList;
