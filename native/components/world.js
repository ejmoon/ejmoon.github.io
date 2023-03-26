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
import { View } from 'react-native';
import Matter, { Engine, Events } from 'matter-js';
import { jsx as _jsx } from "react/jsx-runtime";
var World = /*#__PURE__*/function (_Component) {
  _inherits(World, _Component);
  var _super = _createSuper(World);
  function World(props) {
    var _this;
    _classCallCheck(this, World);
    _this = _super.call(this, props);
    _this.loopID = null;
    _this.lastTime = null;
    var world = Matter.World.create({
      gravity: props.gravity
    });
    _this.engine = Engine.create({
      world: world
    });
    _this.loop = _this.loop.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(World, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var gravity = nextProps.gravity;
      if (gravity !== this.props.gravity) {
        this.engine.world.gravity = gravity;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loopID = this.context.loop.subscribe(this.loop);
      this.props.onInit(this.engine);
      Events.on(this.engine, 'afterUpdate', this.props.onUpdate);
      Events.on(this.engine, 'collisionStart', this.props.onCollision);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.loop.unsubscribe(this.loopID);
      Events.off(this.engine, 'afterUpdate', this.props.onUpdate);
      Events.off(this.engine, 'collisionStart', this.props.onCollision);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        engine: this.engine
      };
    }
  }, {
    key: "render",
    value: function render() {
      var defaultStyles = {
        flex: 1
      };
      return /*#__PURE__*/_jsx(View, {
        style: defaultStyles,
        children: this.props.children
      });
    }
  }, {
    key: "loop",
    value: function loop() {
      var currTime = 0.001 * Date.now();
      Engine.update(this.engine, 1000 / 60, this.lastTime ? currTime / this.lastTime : 1);
      this.lastTime = currTime;
    }
  }]);
  return World;
}(Component);
_defineProperty(World, "propTypes", {
  children: PropTypes.any,
  gravity: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    scale: PropTypes.number
  }),
  onCollision: PropTypes.func,
  onInit: PropTypes.func,
  onUpdate: PropTypes.func
});
_defineProperty(World, "defaultProps", {
  gravity: {
    x: 0,
    y: 1,
    scale: 0.001
  },
  onCollision: function onCollision() {},
  onInit: function onInit() {},
  onUpdate: function onUpdate() {}
});
_defineProperty(World, "contextTypes", {
  scale: PropTypes.number,
  loop: PropTypes.object
});
_defineProperty(World, "childContextTypes", {
  engine: PropTypes.object
});
export { World as default };