import React from 'react';
import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
var Fade = function Fade(props) {
  return /*#__PURE__*/_jsx("div", {
    className: "fade ".concat(props.visible && 'active')
  });
};
Fade.propTypes = {
  visible: PropTypes.bool
};
Fade.defaultProps = {
  visible: true
};
export default Fade;