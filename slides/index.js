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
import Basics from './basics';
import Loop from './loop';
import Scaling from './scaling';
import Sprites from './sprites';
import TileMaps from './tilemaps';
import Physics from './physics';
import { jsx as _jsx } from "react/jsx-runtime";
var slides = [Basics, Loop, Scaling, Sprites, TileMaps, Physics];
var Slides = /*#__PURE__*/function (_Component) {
  _inherits(Slides, _Component);
  var _super = _createSuper(Slides);
  function Slides(props) {
    var _this;
    _classCallCheck(this, Slides);
    _this = _super.call(this, props);
    _this.state = {
      currentSlide: 0
    };
    _this.restartLoop = _this.restartLoop.bind(_assertThisInitialized(_this));
    _this.highlight = _this.highlight.bind(_assertThisInitialized(_this));
    _this.startUpdate = _this.startUpdate.bind(_assertThisInitialized(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.handleNext = _this.handleNext.bind(_assertThisInitialized(_this));
    _this.handlePrev = _this.handlePrev.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Slides, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.highlight();
      window.addEventListener('keyup', this.handleKeyPress);
      window.addEventListener('keypress', this.handleKeyPress);
      this.animationFrame = requestAnimationFrame(this.startUpdate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keyup', this.handleKeyPress);
      window.removeEventListener('keypress', this.handleKeyPress);
      cancelAnimationFrame(this.animationFrame);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.highlight();
    }
  }, {
    key: "getWrapperStyles",
    value: function getWrapperStyles() {
      return {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center'
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_jsx("div", {
        style: this.getWrapperStyles(),
        children: slides[this.props.index].slides[this.state.currentSlide]
      });
    }
  }, {
    key: "restartLoop",
    value: function restartLoop() {
      var _this2 = this;
      setTimeout(function () {
        _this2.startUpdate();
      }, 300);
    }
  }, {
    key: "highlight",
    value: function highlight() {
      if (window.Prism) {
        window.Prism.highlightAll();
      }
    }
  }, {
    key: "startUpdate",
    value: function startUpdate() {
      this.animationFrame = requestAnimationFrame(this.startUpdate);
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      if (e.keyCode === 27) {
        this.props.onDone();
      }
      if (e.keyCode === 37) {
        this.handlePrev();
      }
      if (e.keyCode === 39) {
        this.handleNext();
      }
    }
  }, {
    key: "handleNext",
    value: function handleNext(restartLoop) {
      var _this3 = this;
      var currentSlide = this.state.currentSlide;
      var index = this.props.index;
      if (currentSlide + 1 === slides[index].slides.length) {
        this.props.onDone();
      } else {
        this.setState({
          currentSlide: currentSlide + 1
        }, function () {
          if (restartLoop) {
            _this3.restartLoop();
          }
        });
      }
    }
  }, {
    key: "handlePrev",
    value: function handlePrev(restartLoop) {
      var _this4 = this;
      var currentSlide = this.state.currentSlide;
      if (currentSlide !== 0) {
        this.setState({
          currentSlide: currentSlide - 1
        }, function () {
          if (restartLoop) {
            _this4.restartLoop();
          }
        });
      } else if (restartLoop) {
        this.restartLoop();
      }
    }
  }]);
  return Slides;
}(Component);
_defineProperty(Slides, "propTypes", {
  index: PropTypes.number,
  onDone: PropTypes.func
});
export { Slides as default };