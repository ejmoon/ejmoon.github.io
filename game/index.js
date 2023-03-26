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
import Matter from 'matter-js';
import { AudioPlayer, Loop, Stage, KeyListener, World } from '../../src';
import Character from './character';
import Level from './level';
import Fade from './fade';
import GameStore from './stores/game-store';
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Game = /*#__PURE__*/function (_Component) {
  _inherits(Game, _Component);
  var _super = _createSuper(Game);
  function Game(props) {
    var _this;
    _classCallCheck(this, Game);
    _this = _super.call(this, props);
    _this.state = {
      fade: true
    };
    _this.keyListener = new KeyListener();
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    window.context = window.context || new AudioContext();
    _this.handleEnterBuilding = _this.handleEnterBuilding.bind(_assertThisInitialized(_this));
    _this.doorTextIndex = _this.doorTextIndex.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Game, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.player = new AudioPlayer('/assets/music.wav', function () {
        _this2.stopMusic = _this2.player.play({
          loop: true,
          offset: 1,
          volume: 0.35
        });
      });
      this.setState({
        fade: false,
        doorText: '방향키(→ ←)로 이동하세요',
        isMobile: false
      });
      this.keyListener.subscribe([this.keyListener.LEFT, this.keyListener.RIGHT, this.keyListener.UP, this.keyListener.SPACE, 65]);

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
      this.stopMusic();
      this.keyListener.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs(Loop, {
          children: [/*#__PURE__*/_jsx(Stage, {
            style: {
              background: '#3a9bdc'
            },
            children: /*#__PURE__*/_jsxs(World, {
              onInit: this.physicsInit,
              children: [/*#__PURE__*/_jsx(Level, {
                store: GameStore
              }), /*#__PURE__*/_jsx(Character, {
                onEnterBuilding: this.handleEnterBuilding,
                onDoorText: this.doorTextIndex,
                store: GameStore,
                keys: this.keyListener
              })]
            })
          }), /*#__PURE__*/_jsx(Fade, {
            visible: this.state.fade
          })]
        }), /*#__PURE__*/_jsx("span", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          },
          children: this.state.doorText
        })]
      });
    }
  }, {
    key: "physicsInit",
    value: function physicsInit(engine) {
      var ground = Matter.Bodies.rectangle(512 * 3, 448, 1024 * 3, 64, {
        isStatic: true
      });
      var leftWall = Matter.Bodies.rectangle(-64, 288, 64, 576, {
        isStatic: true
      });
      var rightWall = Matter.Bodies.rectangle(3008, 288, 64, 576, {
        isStatic: true
      });
      Matter.World.addBody(engine.world, ground);
      Matter.World.addBody(engine.world, leftWall);
      Matter.World.addBody(engine.world, rightWall);
    }
  }, {
    key: "handleEnterBuilding",
    value: function handleEnterBuilding(index) {
      var _this3 = this;
      this.setState({
        fade: true
      });
      setTimeout(function () {
        _this3.props.onLeave(index);
      }, 500);
    }
  }, {
    key: "doorTextIndex",
    value: function doorTextIndex(index) {
      if (index == null) {
        this.setState({
          doorText: '방향키(→ ←)로 이동하세요'
        });
      } else {
        this.setState({
          doorText: '방향키(↑)로 이동하세요'
        });
      }
    }
  }]);
  return Game;
}(Component);
_defineProperty(Game, "propTypes", {
  onLeave: PropTypes.func
});
export { Game as default };