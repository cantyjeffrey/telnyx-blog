// @flow

import Link from "next/link";
import Helmet from "react-helmet";
import {
  Root,
  NavLink,
  Header,
  Title,
  Meta,
  Author,
  DateTime,
  Content
} from "./style";
import Comments from "../Comments";

const Post = ({ post: { title, content, author, publish_date }, comments }) => (
  <Root>
    <Helmet title={`${title} — by ${author}`} />
    <Link href="/">
      <NavLink>&larr; Back</NavLink>
    </Link>
    <Header>
      <Title>{title}</Title>
      <Meta>
        <Author>{author}</Author>
        <DateTime datetime={new Date(publish_date)}>{publish_date}</DateTime>
      </Meta>
    </Header>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
    <Comments data={comments} />
  </Root>
);

export default Post;
