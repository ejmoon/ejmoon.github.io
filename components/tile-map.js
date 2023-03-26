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
var TileMap = /*#__PURE__*/function (_Component) {
  _inherits(TileMap, _Component);
  var _super = _createSuper(TileMap);
  function TileMap() {
    _classCallCheck(this, TileMap);
    return _super.apply(this, arguments);
  }
  _createClass(TileMap, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return this.context.scale !== nextContext.scale;
    }
  }, {
    key: "generateMap",
    value: function generateMap() {
      var _this = this;
      var _this$props = this.props,
        columns = _this$props.columns,
        layers = _this$props.layers,
        rows = _this$props.rows;
      var mappedLayers = [];
      layers.forEach(function (l, index) {
        var layer = [];
        for (var r = 0; r < rows; r++) {
          for (var c = 0; c < columns; c++) {
            var gridIndex = r * columns + c;
            if (l[gridIndex] !== 0) {
              layer.push( /*#__PURE__*/_jsx("div", {
                style: _this.getImageWrapperStyles(r, c),
                children: _this.props.renderTile(_this.getTileData(r, c, l[gridIndex]), _this.props.src, _this.getImageStyles(l[gridIndex]))
              }, "tile-".concat(index, "-").concat(r, "-").concat(c)));
            }
          }
        }
        mappedLayers.push(layer);
      });
      return mappedLayers;
    }
  }, {
    key: "getTileData",
    value: function getTileData(row, column, index) {
      var tileSize = this.props.tileSize;
      var size = tileSize;
      var left = column * size;
      var top = row * size;
      return {
        index: index,
        size: tileSize,
        left: left,
        top: top
      };
    }
  }, {
    key: "getImageStyles",
    value: function getImageStyles(imageIndex) {
      var scale = this.context.scale;
      var tileSize = this.props.tileSize;
      var size = Math.round(scale * tileSize);
      var left = (imageIndex - 1) * size;
      return {
        position: 'absolute',
        imageRendering: 'pixelated',
        display: 'block',
        height: '100%',
        transform: "translate(-".concat(left, "px, 0px)")
      };
    }
  }, {
    key: "getImageWrapperStyles",
    value: function getImageWrapperStyles(row, column) {
      var scale = this.context.scale;
      var tileSize = this.props.tileSize;
      var size = Math.round(scale * tileSize);
      var left = column * size;
      var top = row * size;
      return {
        height: size,
        width: size,
        overflow: 'hidden',
        position: 'absolute',
        transform: "translate(".concat(left, "px, ").concat(top, "px)")
      };
    }
  }, {
    key: "getLayerStyles",
    value: function getLayerStyles() {
      return {
        position: 'absolute',
        top: 0,
        left: 0
      };
    }
  }, {
    key: "getWrapperStyles",
    value: function getWrapperStyles() {
      return {
        position: 'absolute',
        top: 0,
        left: 0
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var layers = this.generateMap();
      return /*#__PURE__*/_jsx("div", {
        style: _objectSpread(_objectSpread({}, this.getWrapperStyles()), this.props.style),
        children: layers.map(function (layer, index) {
          return /*#__PURE__*/_jsx("div", {
            style: _this2.getLayerStyles(),
            children: layer
          }, "layer-".concat(index));
        })
      });
    }
  }]);
  return TileMap;
}(Component);
_defineProperty(TileMap, "propTypes", {
  columns: PropTypes.number,
  layers: PropTypes.array,
  renderTile: PropTypes.func,
  rows: PropTypes.number,
  scale: PropTypes.number,
  src: PropTypes.string,
  style: PropTypes.object,
  tileSize: PropTypes.number
});
_defineProperty(TileMap, "defaultProps", {
  columns: 16,
  layers: [],
  renderTile: function renderTile(tile, src, styles) {
    return /*#__PURE__*/_jsx("img", {
      style: styles,
      src: src
    });
  },
  rows: 9,
  src: '',
  tileSize: 64
});
_defineProperty(TileMap, "contextTypes", {
  scale: PropTypes.number
});
export { TileMap as default };