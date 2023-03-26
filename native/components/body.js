var _excluded = ["args", "children", "shape"],
  _excluded2 = ["args", "children", "shape"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
import { Component } from 'react';
import PropTypes from 'prop-types';
import Matter, { World, Bodies } from 'matter-js';
var Body = /*#__PURE__*/function (_Component) {
  _inherits(Body, _Component);
  var _super = _createSuper(Body);
  function Body(props, context) {
    var _this;
    _classCallCheck(this, Body);
    _this = _super.call(this, props);
    var args = props.args,
      children = props.children,
      shape = props.shape,
      options = _objectWithoutProperties(props, _excluded); // eslint-disable-line no-unused-vars

    _this.body = Bodies[shape].apply(Bodies, _toConsumableArray(args).concat([options]));
    World.addBody(context.engine.world, _this.body);
    return _this;
  }
  _createClass(Body, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;
      var args = nextProps.args,
        children = nextProps.children,
        shape = nextProps.shape,
        options = _objectWithoutProperties(nextProps, _excluded2); // eslint-disable-line no-unused-vars

      Object.keys(options).forEach(function (option) {
        if (option in _this2.body && _this2.props[option] !== nextProps[option]) {
          Matter.Body.set(_this2.body, option, options[option]);
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      World.remove(this.context.engine.world, this.body);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        body: this.body
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Body;
}(Component);
_defineProperty(Body, "propTypes", {
  angle: PropTypes.number,
  area: PropTypes.string,
  args: PropTypes.array,
  axes: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  bounds: PropTypes.shape({
    min: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    max: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  }),
  children: PropTypes.any,
  collisionFilter: PropTypes.shape({
    category: PropTypes.number,
    group: PropTypes.number,
    mask: PropTypes.number
  }),
  density: PropTypes.number,
  force: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  friction: PropTypes.number,
  frictionAir: PropTypes.number,
  frictionStatic: PropTypes.number,
  id: PropTypes.number,
  inertia: PropTypes.number,
  inverseInertia: PropTypes.number,
  inverseMass: PropTypes.number,
  isSensor: PropTypes.bool,
  isSleeping: PropTypes.bool,
  isStatic: PropTypes.bool,
  label: PropTypes.string,
  mass: PropTypes.number,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  restitution: PropTypes.number,
  shape: PropTypes.string,
  sleepThreshold: PropTypes.number,
  slop: PropTypes.number,
  slope: PropTypes.number,
  timeScale: PropTypes.number,
  torque: PropTypes.number,
  vertices: PropTypes.array
});
_defineProperty(Body, "defaultProps", {
  args: [0, 0, 100, 100],
  restitution: 0,
  friction: 1,
  frictionStatic: 0,
  shape: 'rectangle'
});
_defineProperty(Body, "contextTypes", {
  engine: PropTypes.object
});
_defineProperty(Body, "childContextTypes", {
  body: PropTypes.object
});
export { Body as default };