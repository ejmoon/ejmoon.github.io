function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import React, { Component } from 'react';
import Intro from './intro';
import Game from './game';
import Slides from './slides';
import { jsx as _jsx } from "react/jsx-runtime";
var Presentation = /*#__PURE__*/function (_Component) {
  _inherits(Presentation, _Component);
  var _super = _createSuper(Presentation);
  function Presentation(props) {
    var _this;
    _classCallCheck(this, Presentation);
    _this = _super.call(this, props);
    _this.state = {
      gameState: 0,
      slideIndex: 0
    };
    _this.handleStart = _this.handleStart.bind(_assertThisInitialized(_this));
    _this.handleDone = _this.handleDone.bind(_assertThisInitialized(_this));
    _this.handleLeave = _this.handleLeave.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Presentation, [{
    key: "render",
    value: function render() {
      this.gameStates = [/*#__PURE__*/_jsx(Intro, {
        onStart: this.handleStart
      }), /*#__PURE__*/_jsx(Game, {
        onLeave: this.handleLeave
      }), /*#__PURE__*/_jsx(Slides, {
        onDone: this.handleDone,
        index: this.state.slideIndex
      })];
      return this.gameStates[this.state.gameState];
    }
  }, {
    key: "handleStart",
    value: function handleStart() {
      this.setState({
        gameState: 1
      });
    }
  }, {
    key: "handleDone",
    value: function handleDone() {
      this.setState({
        gameState: 1
      });
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(index) {
      this.setState({
        gameState: 2,
        slideIndex: index
      });
    }
  }]);
  return Presentation;
}(Component);
export { Presentation as default };