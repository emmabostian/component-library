import React, { forwardRef } from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const StyledTomatoButton = styled(StyledButton)`
  color: tomato;
  border-color: tomato;
`;
