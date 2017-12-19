// @flow

import styled from "styled-components";
import Shevy from "shevyjs";

const shevy = new Shevy();
const { baseSpacing: bs, h1, h3 } = shevy;

export const Root = styled.div`
  padding: ${bs(3)} 0 ${bs(1)};
  @media screen and (min-width: 1024px) {
    padding: ${bs(3)} 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & svg {
    width: 64px;
    flex: none;
  }
`;

export const Display = styled.h1`
  ${h3};
  @media screen and (min-width: 1024px) {
    ${h1};
  }
  margin-top: ${bs(0.25)};
  max-width: 80%;
  color: #29292c;
  text-align: center;
  letter-spacing: -0.03em;
`;

export default {};
