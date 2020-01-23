import React, { forwardRef } from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components'
import "./styles.css";

// const StyledButton = styled.button`
//   background: ${props => (props.primary ? 'palevioletred' : 'white')};
//   color: ${props => (props.primary ? 'white' : 'palevioletred')};
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `

// const StyledTomatoButton = styled(StyledButton)`
//   color: tomato;
//   border-color: tomato;
// `

export const Button = ({ children }) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};
