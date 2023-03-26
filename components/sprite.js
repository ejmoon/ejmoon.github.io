function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
var Sprite = /*#__PURE__*/function (_Component) {
  _inherits(Sprite, _Component);
  var _super = _createSuper(Sprite);
  function Sprite(props) {
    var _this;
    _classCallCheck(this, Sprite);
    _this = _super.call(this, props);
    _this.loopID = null;
    _this.tickCount = 0;
    _this.finished = false;
    _this.state = {
      currentStep: 0
    };
    return _this;
  }
  _createClass(Sprite, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onPlayStateChanged(1);
      var animate = this.animate.bind(this, this.props);
      this.loopID = this.context.loop.subscribe(animate);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;
      if (nextProps.state !== this.props.state) {
        this.finished = false;
        this.props.onPlayStateChanged(1);
        this.context.loop.unsubscribe(this.loopID);
        this.tickCount = 0;
        this.setState({
          currentStep: 0
        }, function () {
          var animate = _this2.animate.bind(_this2, nextProps);
          _this2.loopID = _this2.context.loop.subscribe(animate);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.loop.unsubscribe(this.loopID);
    }
  }, {
    key: "animate",
    value: function animate(props) {
      var repeat = props.repeat,
        ticksPerFrame = props.ticksPerFrame,
        state = props.state,
        steps = props.steps;
      if (this.tickCount === ticksPerFrame && !this.finished) {
        if (!steps[state]) {
          this.finished = true;
          this.props.onPlayStateChanged(0);
        } else if (steps[state] !== 0) {
          var currentStep = this.state.currentStep;
          var lastStep = steps[state];
          var nextStep = currentStep === lastStep ? 0 : currentStep + 1;
          this.setState({
            currentStep: nextStep
          });
          if (currentStep === lastStep && repeat === false) {
            this.finished = true;
            this.props.onPlayStateChanged(0);
          }
        }
        this.tickCount = 0;
      } else {
        this.tickCount++;
      }
    }
  }, {
    key: "getImageStyles",
    value: function getImageStyles() {
      var currentStep = this.state.currentStep;
      var _this$props = this.props,
        state = _this$props.state,
        tileWidth = _this$props.tileWidth,
        tileHeight = _this$props.tileHeight;
      var left = this.props.offset[0] + currentStep * tileWidth;
      var top = this.props.offset[1] + state * tileHeight;
      return {
        position: 'absolute',
        transform: "translate(-".concat(left, "px, -").concat(top, "px)")
      };
    }
  }, {
    key: "getWrapperStyles",
    value: function getWrapperStyles() {
      return {
        height: this.props.tileHeight,
        width: this.props.tileWidth,
        overflow: 'hidden',
        position: 'relative',
        transform: "scale(".concat(this.props.scale || this.context.scale, ")"),
        transformOrigin: 'top left',
        imageRendering: 'pixelated'
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_jsx("div", {
        style: _objectSpread(_objectSpread({}, this.getWrapperStyles()), this.props.style),
        children: /*#__PURE__*/_jsx("img", {
          style: this.getImageStyles(),
          src: this.props.src
        })
      });
    }
  }]);
  return Sprite;
}(Component);
_defineProperty(Sprite, "propTypes", {
  offset: PropTypes.array,
  onPlayStateChanged: PropTypes.func,
  repeat: PropTypes.bool,
  scale: PropTypes.number,
  src: PropTypes.string,
  state: PropTypes.number,
  steps: PropTypes.array,
  style: PropTypes.object,
  ticksPerFrame: PropTypes.number,
  tileHeight: PropTypes.number,
  tileWidth: PropTypes.number
});
_defineProperty(Sprite, "defaultProps", {
  offset: [0, 0],
  onPlayStateChanged: function onPlayStateChanged() {},
  repeat: true,
  src: '',
  state: 0,
  steps: [],
  ticksPerFrame: 15,
  tileHeight: 132,
  tileWidth: 150
});
_defineProperty(Sprite, "contextTypes", {
  loop: PropTypes.object,
  scale: PropTypes.number
});
export { Sprite as default };