// @flow

import styled from "styled-components";
import Shevy from "shevyjs";

const shevy = new Shevy();
const { baseSpacing: bs } = shevy;

export const Root = styled.div`
  padding: ${bs(2)} 0;
`;

export default {};
