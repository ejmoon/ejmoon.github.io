function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable no-console */
var AudioPlayer = /*#__PURE__*/function () {
  function AudioPlayer(url, callback) {
    _classCallCheck(this, AudioPlayer);
    this.url = url || null;
    this.callback = callback || function () {};
    this.buffer = null;
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = window.context || new AudioContext();
    this.loadBuffer();
  }
  _createClass(AudioPlayer, [{
    key: "play",
    value: function play(options) {
      var volume = options && options.volume;
      var offset = options && options.offset;
      var loop = options && options.loop;
      var source = this.context.createBufferSource();
      var gainNode = this.context.createGain();
      gainNode.gain.value = volume || 0.5;
      gainNode.connect(this.context.destination);
      source.connect(gainNode);
      source.buffer = this.buffer;
      source.start(offset ? this.context.currentTime + offset : 0);
      source.loop = loop || false;
      return source.stop.bind(source);
    }
  }, {
    key: "loadBuffer",
    value: function loadBuffer() {
      var _this = this;
      var request = new XMLHttpRequest();
      request.open('GET', this.url, true);
      request.responseType = 'arraybuffer';
      request.onload = function () {
        _this.context.decodeAudioData(request.response, function (buffer) {
          if (!buffer) {
            console.error("error decoding file data: ".concat(_this.url));
            return;
          }
          _this.buffer = buffer;
          _this.callback();
        }, function (error) {
          console.error('decodeAudioData error', error);
        });
      };
      request.onerror = function onError() {
        console.error('BufferLoader: XHR error');
      };
      request.send();
    }
  }]);
  return AudioPlayer;
}();
export { AudioPlayer as default };