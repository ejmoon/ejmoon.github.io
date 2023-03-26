function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var KeyListener = /*#__PURE__*/function () {
  function KeyListener() {
    _classCallCheck(this, KeyListener);
    _defineProperty(this, "LEFT", 37);
    _defineProperty(this, "RIGHT", 39);
    _defineProperty(this, "UP", 38);
    _defineProperty(this, "DOWN", 40);
    _defineProperty(this, "SPACE", 32);
    this.keys = {};
    this.down = this.down.bind(this);
    this.up = this.up.bind(this);
    this.isDown = this.isDown.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }
  _createClass(KeyListener, [{
    key: "down",
    value: function down(event) {
      if (event.keyCode in this.keys) {
        event.preventDefault();
        this.keys[event.keyCode] = true;
      }
    }
  }, {
    key: "up",
    value: function up(event) {
      if (event.keyCode in this.keys) {
        event.preventDefault();
        this.keys[event.keyCode] = false;
      }
    }
  }, {
    key: "isDown",
    value: function isDown(keyCode) {
      return this.keys[keyCode] || false;
    }
  }, {
    key: "subscribe",
    value: function subscribe(keys) {
      var _this = this;
      window.addEventListener('keydown', this.down);
      window.addEventListener('keyup', this.up);
      keys.forEach(function (key) {
        _this.keys[key] = false;
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      window.removeEventListener('keydown', this.down);
      window.removeEventListener('keyup', this.up);
      this.keys = {};
    }
  }]);
  return KeyListener;
}();
export { KeyListener as default };