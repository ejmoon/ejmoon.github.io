function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _class, _class2;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
import { observer } from 'mobx-react';
import Matter from 'matter-js';
import { AudioPlayer, Body, Sprite } from '../../src';
import { jsx as _jsx } from "react/jsx-runtime";
var Character = observer(_class = (_class2 = /*#__PURE__*/function (_Component) {
  _inherits(Character, _Component);
  var _super = _createSuper(Character);
  function Character(props) {
    var _this;
    _classCallCheck(this, Character);
    _this = _super.call(this, props);
    _this.loopID = null;
    _this.isJumping = false;
    _this.isPunching = false;
    _this.isLeaving = false;
    _this.lastX = 0;
    _this.state = {
      characterState: 2,
      loop: false,
      spritePlaying: true
    };
    _this.handlePlayStateChanged = _this.handlePlayStateChanged.bind(_assertThisInitialized(_this));
    _this.jump = _this.jump.bind(_assertThisInitialized(_this));
    _this.punch = _this.punch.bind(_assertThisInitialized(_this));
    _this.getDoorIndex = _this.getDoorIndex.bind(_assertThisInitialized(_this));
    _this.enterBuilding = _this.enterBuilding.bind(_assertThisInitialized(_this));
    _this.checkKeys = _this.checkKeys.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Character, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.jumpNoise = new AudioPlayer('/assets/jump.wav');
      Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Matter.Events.off(this.context.engine, 'afterUpdate', this.update);
    }
  }, {
    key: "getWrapperStyles",
    value: function getWrapperStyles() {
      var _this$props$store = this.props.store,
        characterPosition = _this$props$store.characterPosition,
        stageX = _this$props$store.stageX;
      var scale = this.context.scale;
      var x = characterPosition.x,
        y = characterPosition.y;
      var targetX = x + stageX;
      return {
        position: 'absolute',
        transform: "translate(".concat(targetX * scale, "px, ").concat(y * scale, "px)"),
        transformOrigin: 'left top'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var x = this.props.store.characterPosition.x;
      return /*#__PURE__*/_jsx("div", {
        style: this.getWrapperStyles(),
        children: /*#__PURE__*/_jsx(Body, {
          args: [x, 384, 64, 64],
          inertia: Infinity,
          ref: function ref(b) {
            _this2.body = b;
          },
          children: /*#__PURE__*/_jsx(Sprite, {
            repeat: this.state.repeat,
            onPlayStateChanged: this.handlePlayStateChanged,
            src: "assets/p0.png",
            scale: this.context.scale,
            state: this.state.characterState,
            steps: [1, 1]
          })
        })
      });
    }
  }, {
    key: "handlePlayStateChanged",
    value: function handlePlayStateChanged(state) {
      this.setState({
        spritePlaying: state ? true : false
      });
    }
  }, {
    key: "move",
    value: function move(body, x) {
      Matter.Body.setVelocity(body, {
        x: x,
        y: 0
      });
    }
  }, {
    key: "jump",
    value: function jump(body) {
      this.jumpNoise.play();
      this.isJumping = true;
      Matter.Body.applyForce(body, {
        x: 0,
        y: 0
      }, {
        x: 0,
        y: -0.15
      });
      Matter.Body.set(body, 'friction', 0.0001);
    }
  }, {
    key: "punch",
    value: function punch() {
      this.isPunching = true;
      this.setState({
        characterState: 2,
        repeat: false
      });
    }
  }, {
    key: "getDoorIndex",
    value: function getDoorIndex(body) {
      var doorIndex = null;
      var doorPositions = _toConsumableArray(Array(6).keys()).map(function (a) {
        return [512 * a + 208, 512 * a + 272];
      });
      doorPositions.forEach(function (dp, di) {
        if (body.position.x + 64 > dp[0] && body.position.x + 64 < dp[1]) {
          doorIndex = di;
        }
      });
      return doorIndex;
    }
  }, {
    key: "enterBuilding",
    value: function enterBuilding(body) {
      var doorIndex = this.getDoorIndex(body);
      if (doorIndex !== null) {
        this.setState({
          characterState: 2
        });
        this.isLeaving = true;
        this.props.onEnterBuilding(doorIndex);
      }
    }
  }, {
    key: "checkKeys",
    value: function checkKeys(shouldMoveStageLeft, shouldMoveStageRight) {
      var _this$props = this.props,
        keys = _this$props.keys,
        store = _this$props.store;
      var body = this.body.body;
      var characterState = 2;
      if (keys.isDown(65)) {
        return this.punch();
      }
      if (keys.isDown(keys.SPACE)) {
        this.jump(body);
      }
      if (keys.isDown(keys.UP)) {
        return this.enterBuilding(body);
      }
      if (keys.isDown(keys.LEFT)) {
        if (shouldMoveStageLeft) {
          store.setStageX(store.stageX + 5);
        }
        this.move(body, -5);
        this.props.onDoorText(this.getDoorIndex(body));
        characterState = 1;
      } else if (keys.isDown(keys.RIGHT)) {
        if (shouldMoveStageRight) {
          store.setStageX(store.stageX - 5);
        }
        this.move(body, 5);
        this.props.onDoorText(this.getDoorIndex(body));
        characterState = 0;
      }
      this.setState({
        characterState: characterState,
        repeat: characterState < 2
      });
    }
  }, {
    key: "update",
    value: function update() {
      var store = this.props.store;
      var body = this.body.body;
      var midPoint = Math.abs(store.stageX) + 448;
      var shouldMoveStageLeft = body.position.x < midPoint && store.stageX < 0;
      var shouldMoveStageRight = body.position.x > midPoint && store.stageX > -2048;
      var velY = parseFloat(body.velocity.y.toFixed(10));
      if (velY === 0) {
        this.isJumping = false;
        Matter.Body.set(body, 'friction', 0.9999);
      }
      if (!this.isJumping && !this.isPunching && !this.isLeaving) {
        this.checkKeys(shouldMoveStageLeft, shouldMoveStageRight);
        store.setCharacterPosition(body.position);
      } else {
        if (this.isPunching && this.state.spritePlaying === false) {
          this.isPunching = false;
        }
        if (this.isJumping) {
          store.setCharacterPosition(body.position);
        }
        var targetX = store.stageX + (this.lastX - body.position.x);
        if (shouldMoveStageLeft || shouldMoveStageRight) {
          store.setStageX(targetX);
        }
      }
      this.lastX = body.position.x;
    }
  }]);
  return Character;
}(Component), _defineProperty(_class2, "propTypes", {
  keys: PropTypes.object,
  onEnterBuilding: PropTypes.func,
  onDoorText: PropTypes.func,
  store: PropTypes.object
}), _defineProperty(_class2, "contextTypes", {
  engine: PropTypes.object,
  scale: PropTypes.number
}), _class2)) || _class;
export { Character as default };