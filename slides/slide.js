import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var slideStyles = {
  display: 'flex',
  flex: '1 1 0',
  alignItems: 'center',
  justifyContent: 'flex-start',
  maxWidth: '166vh',
  padding: 20
};
var Slide = function Slide(props) {
  return /*#__PURE__*/_jsx("div", {
    style: slideStyles,
    children: /*#__PURE__*/_jsx("div", {
      style: {
        width: '100%'
      },
      children: props.children
    })
  });
};
export default Slide;