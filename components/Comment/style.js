// @flow

import styled from "styled-components";
import Shevy from "shevyjs";

const shevy = new Shevy();
const { baseSpacing: bs, body } = shevy;

export const Root = styled.ul`
  ${body};
  margin: 0;
  padding: 0;
  list-style-type: none;
  & ul {
    margin: 0;
    padding: 0;
    & ul {
      margin-left: ${bs(0.5)};
    }
  }
`;

export const Body = styled.p`
  display: inline-flex;
  flex-direction: column;
  margin: ${bs(0.25)} 0 ${bs(0.75)};
  & span {
    flex: 1;
  }
`;

export const Author = styled.span`
  font-weight: 600;
  color: #29292c;
`;

export const Content = styled.span``;

export const DateTime = styled.time`
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
`;

export default {};
