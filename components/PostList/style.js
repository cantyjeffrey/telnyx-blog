// @flow

import styled from "styled-components";
import Shevy from "shevyjs";

const shevy = new Shevy();
const { baseSpacing: bs, h4, body } = shevy;

export const Root = styled.ol`
  margin: ${bs(2)} 0 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
`;

export const Post = styled.li`
  padding: 0 0 ${bs(2)};
  margin: 0 0 ${bs(2)};
  border-bottom: 1px solid #f0f0f2;
  display: flex;
  flex-direction: column;
  &:last-of-type {
    border-bottom: none;
  }
`;

export const Heading = styled.h4`
  ${h4};
  margin: 0;
  color: #29292c;
  cursor: pointer;
  align-self: flex-start;
  transition: color 0.1s linear;
  text-decoration: none;
  &:hover {
    color: #da393f;
  }
`;

export const Meta = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, max-content);
  }
`;

export const Author = styled.div`
  color: #da393f;
  cursor: pointer;
  transition: color 0.1s linear;
  &:hover,
  &:active {
    color: #be3236;
  }
  &::after {
    color: #9b9aa1;
    content: "–";
    display: none;
    margin: 0 ${bs(0.375)};
    @media screen and (min-width: 1024px) {
      display: inline-flex;
    }
  }
`;

export const DateTime = styled.time`
  @media screen and (max-width: 1024px) {
    text-align: right;
  }
`;

export const Description = styled.p`
  ${body};
`;

export default {};
