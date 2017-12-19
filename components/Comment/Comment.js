// @flow

import { Root, Body, Author, Content, DateTime } from "./style";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import format from "date-fns/format";

const Comment = ({ data: { id, content, user, date, children } }) => {
  return (
    <Root>
      <li key={id}>
        <Body>
          <Author>{user}</Author>
          <Content>{content}</Content>
          <DateTime dateTime={format(date)}>
            {distanceInWordsToNow(date)} ago
          </DateTime>
        </Body>
      </li>
      {children && children.length ? (
        <ul>
          {children.map(child => <Comment key={child.id} data={child} />)}
        </ul>
      ) : null}
    </Root>
  );
};

export default Comment;
