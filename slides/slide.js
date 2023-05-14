import React from 'react';
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var slideStyles = {
  display: 'flex',
  flex: '1 1 0',
  alignItems: 'center',
  justifyContent: 'flex-start',
  maxWidth: '166vh',
  padding: 20
};
var Slide = function Slide(props) {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      style: {}
    }), /*#__PURE__*/_jsx("div", {
      style: slideStyles,
      children: /*#__PURE__*/_jsx("div", {
        style: {
          width: '100%',
          display: 'flex',
          justifyContent: "center",
          alignItems: 'center',
          fontFamily: 'omu'
        },
        children: props.children
      })
    })]
  });
};
export default Slide;