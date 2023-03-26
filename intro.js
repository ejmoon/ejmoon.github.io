function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
import { AudioPlayer } from '../src';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Intro = /*#__PURE__*/function (_Component) {
  _inherits(Intro, _Component);
  var _super = _createSuper(Intro);
  function Intro(props) {
    var _this;
    _classCallCheck(this, Intro);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function () {
      _this.startNoise.play();
      _this.props.onStart();
    });
    _this.state = {
      blink: false,
      isMobile: false // 모바일 기기인지 체크할 변수
    };

    _this.startUpdate = _this.startUpdate.bind(_assertThisInitialized(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Intro, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.startNoise = new AudioPlayer('/assets/start.wav');
      window.addEventListener('keypress', this.handleKeyPress);
      this.animationFrame = requestAnimationFrame(this.startUpdate);
      this.interval = setInterval(function () {
        _this2.setState({
          blink: !_this2.state.blink
        });
      }, 500);

      // user agent string에서 모바일 기기 정보가 있는지 확인
      var userAgent = navigator.userAgent.toLowerCase();
      var isMobile = userAgent.includes('mobi') || userAgent.includes('android');
      this.setState({
        isMobile: isMobile
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keypress', this.handleKeyPress);
      cancelAnimationFrame(this.animationFrame);
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_jsxs("div", {
        style: {
          marginTop: '100px',
          marginBottom: '100px',
          position: 'relative'
        },
        children: [/*#__PURE__*/_jsx("p", {
          className: "t1",
          children: "WDDING STORY"
        }), /*#__PURE__*/_jsx("p", {
          className: "t2",
          children: "GAME START"
        }), /*#__PURE__*/_jsx("img", {
          className: "intro",
          src: "assets/main.png",
          width: "300",
          height: "550"
        }), this.state.isMobile ? /*#__PURE__*/_jsx("button", {
          className: "t3",
          onClick: this.handleButtonClick,
          children: "Press"
        }) : /*#__PURE__*/_jsx("p", {
          className: "t3",
          style: {
            display: this.state.blink ? 'block' : 'none'
          },
          children: "Press \"Enter\""
        })]
      });
    }
  }, {
    key: "startUpdate",
    value: function startUpdate() {
      this.animationFrame = requestAnimationFrame(this.startUpdate);
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      if (e.keyCode === 13) {
        this.startNoise.play();
        this.props.onStart();
      }
    }
  }]);
  return Intro;
}(Component);
_defineProperty(Intro, "propTypes", {
  onStart: PropTypes.func
});
export { Intro as default };