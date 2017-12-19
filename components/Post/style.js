// @flow

import styled from "styled-components";
import Shevy from "shevyjs";

const shevy = new Shevy();
const { baseSpacing: bs, h2, h3, body } = shevy;

export const Root = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const NavLink = styled.a`
  color: #454547;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.1s linear;
  &:hover,
  &:focus {
    color: #ed3e44;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${bs(3)} 0;
`;

export const Title = styled.h1`
  ${h3};
  @media screen and (min-width: 1024px) {
    ${h2};
  }
  letter-spacing: -0.03em;
  margin: 0 0 ${bs(0.5)};
  color: #29292c;
`;

export const Meta = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
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
    display: inline-flex;
    margin: 0 ${bs(0.375)};
  }
`;

export const DateTime = styled.time``;

export const Content = styled.div`
  ${body};
  border-top: 1px solid #f0f0f2;
  border-bottom: 1px solid #f0f0f2;
  padding: ${bs(2)} 0;
  & p:last-of-type {
    margin-bottom: 0;
  }
`;

export default {};
