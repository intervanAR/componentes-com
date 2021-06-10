'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var withStyles = require('@material-ui/core/styles/withStyles');
var Snack = require('@material-ui/core/Snackbar');
var IconButton = require('@material-ui/core/IconButton');
var Close = require('@material-ui/icons/Close');
var classNames = require('classnames');
var Button$2 = require('@material-ui/core/Button');
var Dialog$2 = require('@material-ui/core/Dialog');
var DialogActions = require('@material-ui/core/DialogActions');
var DialogContent = require('@material-ui/core/DialogContent');
var DialogContentText = require('@material-ui/core/DialogContentText');
var DialogTitle = require('@material-ui/core/DialogTitle');
var BlockUi = require('react-block-ui');
require('react-block-ui/style.css');
var styles$6 = require('@material-ui/core/styles');
var AppBar = require('@material-ui/core/AppBar');
var Toolbar = require('@material-ui/core/Toolbar');
var Hidden = require('@material-ui/core/Hidden');
var Menu = require('@material-ui/icons/Menu');
var MoreVert = require('@material-ui/icons/MoreVert');
var ViewList = require('@material-ui/icons/ViewList');
var Typography = require('@material-ui/core/Typography');
var InputAdornment = require('@material-ui/core/InputAdornment');
var Email = require('@material-ui/icons/EmailOutlined');
var Person = require('@material-ui/icons/PersonOutline');
var Visibility = require('@material-ui/icons/Visibility');
var VisibilityOff = require('@material-ui/icons/VisibilityOff');
var Grid = require('@material-ui/core/Grid');
var FormControl = require('@material-ui/core/FormControl');
var InputLabel = require('@material-ui/core/InputLabel');
var FormHelperText = require('@material-ui/core/FormHelperText');
var Input = require('@material-ui/core/Input');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var withStyles__default = /*#__PURE__*/_interopDefaultLegacy(withStyles);
var Snack__default = /*#__PURE__*/_interopDefaultLegacy(Snack);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var Close__default = /*#__PURE__*/_interopDefaultLegacy(Close);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button$2);
var Dialog__default = /*#__PURE__*/_interopDefaultLegacy(Dialog$2);
var DialogActions__default = /*#__PURE__*/_interopDefaultLegacy(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefaultLegacy(DialogContent);
var DialogContentText__default = /*#__PURE__*/_interopDefaultLegacy(DialogContentText);
var DialogTitle__default = /*#__PURE__*/_interopDefaultLegacy(DialogTitle);
var BlockUi__default = /*#__PURE__*/_interopDefaultLegacy(BlockUi);
var AppBar__default = /*#__PURE__*/_interopDefaultLegacy(AppBar);
var Toolbar__default = /*#__PURE__*/_interopDefaultLegacy(Toolbar);
var Hidden__default = /*#__PURE__*/_interopDefaultLegacy(Hidden);
var Menu__default = /*#__PURE__*/_interopDefaultLegacy(Menu);
var MoreVert__default = /*#__PURE__*/_interopDefaultLegacy(MoreVert);
var ViewList__default = /*#__PURE__*/_interopDefaultLegacy(ViewList);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var InputAdornment__default = /*#__PURE__*/_interopDefaultLegacy(InputAdornment);
var Email__default = /*#__PURE__*/_interopDefaultLegacy(Email);
var Person__default = /*#__PURE__*/_interopDefaultLegacy(Person);
var Visibility__default = /*#__PURE__*/_interopDefaultLegacy(Visibility);
var VisibilityOff__default = /*#__PURE__*/_interopDefaultLegacy(VisibilityOff);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid);
var FormControl__default = /*#__PURE__*/_interopDefaultLegacy(FormControl);
var InputLabel__default = /*#__PURE__*/_interopDefaultLegacy(InputLabel);
var FormHelperText__default = /*#__PURE__*/_interopDefaultLegacy(FormHelperText);
var Input__default = /*#__PURE__*/_interopDefaultLegacy(Input);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

const SnackbarContentStyle = theme => {
  var _theme$palette, _theme$palette$succes, _theme$palette2, _theme$palette2$succe, _theme$palette3, _theme$palette3$error, _theme$palette4, _theme$palette4$error, _theme$palette5, _theme$palette5$defau, _theme$palette6, _theme$palette6$defau;

  return {
    root: { ...theme.defaultFont,
      flexWrap: "unset",
      position: "relative",
      padding: "20px 15px",
      lineHeight: "20px",
      marginBottom: "20px",
      fontSize: "14px",
      backgroundColor: "white",
      color: "#555555",
      borderRadius: "3px",
      boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
    },
    top20: {
      top: "20px"
    },
    top40: {
      top: "40px"
    },
    info: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText
    },
    success: {
      backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : (_theme$palette$succes = _theme$palette.success) === null || _theme$palette$succes === void 0 ? void 0 : _theme$palette$succes.main) || "lightseagreen",
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette2 = theme.palette) === null || _theme$palette2 === void 0 ? void 0 : (_theme$palette2$succe = _theme$palette2.success) === null || _theme$palette2$succe === void 0 ? void 0 : _theme$palette2$succe.contrastText) || "white"
    },
    error: {
      backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette3 = theme.palette) === null || _theme$palette3 === void 0 ? void 0 : (_theme$palette3$error = _theme$palette3.error) === null || _theme$palette3$error === void 0 ? void 0 : _theme$palette3$error.main) || "orangered",
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette4 = theme.palette) === null || _theme$palette4 === void 0 ? void 0 : (_theme$palette4$error = _theme$palette4.error) === null || _theme$palette4$error === void 0 ? void 0 : _theme$palette4$error.contrastText) || "white"
    },
    primary: {
      backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette5 = theme.palette) === null || _theme$palette5 === void 0 ? void 0 : (_theme$palette5$defau = _theme$palette5.default) === null || _theme$palette5$defau === void 0 ? void 0 : _theme$palette5$defau.main) || "#3f51b5",
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette6 = theme.palette) === null || _theme$palette6 === void 0 ? void 0 : (_theme$palette6$defau = _theme$palette6.default) === null || _theme$palette6$defau === void 0 ? void 0 : _theme$palette6$defau.contrastText) || "white"
    },
    message: {
      padding: "0",
      display: "block",
      width: "100%"
    },
    close: {
      width: "11px",
      height: "11px"
    },
    iconButton: {
      width: "24px",
      height: "24px",
      padding: "0px"
    }
  };
};

function Snackbar(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      message = props.message,
      color = props.color,
      close = props.close,
      place = props.place,
      open = props.open;
  var action = [];

  if (close !== undefined) {
    action = [/*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
      className: classes.iconButton,
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      onClick: function onClick() {
        return props.closeNotification();
      }
    }, /*#__PURE__*/React__default['default'].createElement(Close__default['default'], {
      className: classes.close
    }))];
  }

  return /*#__PURE__*/React__default['default'].createElement(Snack__default['default'], {
    classes: {
      anchorOriginTopCenter: classes.top20,
      anchorOriginTopRight: classes.top40,
      anchorOriginTopLeft: classes.top40
    },
    anchorOrigin: {
      vertical: place.indexOf("t") === -1 ? "bottom" : "top",
      horizontal: place.indexOf("l") !== -1 ? "left" : place.indexOf("c") !== -1 ? "center" : "right"
    },
    open: open,
    message: /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("span", null, message)),
    action: action,
    ContentProps: {
      classes: {
        root: classes.root + " " + classes[color],
        message: classes.message
      }
    }
  });
}

Snackbar.defaultProps = {
  color: "info"
};
Snackbar.propTypes = {
  classes: PropTypes__default['default'].object.isRequired,
  message: PropTypes__default['default'].node.isRequired,
  color: PropTypes__default['default'].oneOf(["info", "success", "error", "primary"]),
  close: PropTypes__default['default'].bool,
  place: PropTypes__default['default'].oneOf(["tl", "tr", "tc", "br", "bl", "bc"]),
  open: PropTypes__default['default'].bool
};
var Snackbar$1 = withStyles__default['default'](SnackbarContentStyle)(Snackbar);

var styles$5 = {};

var MessageComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(MessageComponent, _React$Component);

  var _super = _createSuper(MessageComponent);

  function MessageComponent() {
    var _this;

    _classCallCheck(this, MessageComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      openSnackBar: true
    });

    _defineProperty(_assertThisInitialized(_this), "timeout", null);

    _defineProperty(_assertThisInitialized(_this), "showSnackBar", function () {
      _this.setState({
        openSnackBar: true
      });

      if (_this.timeout) clearTimeout(_this.timeout);
      _this.timeout = setTimeout(_this.closeSnackBar, _this.props.segs || 5000);
    });

    _defineProperty(_assertThisInitialized(_this), "closeSnackBar", function () {
      return _this.setState({
        openSnackBar: false
      });
    });

    return _this;
  }

  _createClass(MessageComponent, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.showSnackBar();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeout) clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          message = _this$props.message;
      var openSnackBar = this.state.openSnackBar;
      if (!message || !openSnackBar) return /*#__PURE__*/React__default['default'].createElement("span", null);
      return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Snackbar$1, {
        place: "br",
        color: color,
        message: message,
        open: openSnackBar,
        closeNotification: this.closeSnackBar,
        close: true
      }));
    }
  }]);

  return MessageComponent;
}(React__default['default'].Component);

_defineProperty(MessageComponent, "propTypes", {
  style: PropTypes__default['default'].any,
  color: PropTypes__default['default'].string,
  message: PropTypes__default['default'].string,
  segs: PropTypes__default['default'].number
});

var MessageComponent$1 = withStyles__default['default'](styles$5)(MessageComponent);

var ButtonStyle = function ButtonStyle(theme) {
  var _theme$palette, _theme$palette$defaul, _theme$palette2, _theme$palette2$defau, _theme$palette3, _theme$palette3$defau, _theme$palette4, _theme$palette4$defau, _theme$palette5, _theme$palette5$defau, _theme$palette6, _theme$palette6$defau, _theme$palette7, _theme$palette7$secon, _theme$palette8, _theme$palette8$secon, _theme$palette9, _theme$palette9$secon, _theme$palette10, _theme$palette10$succ, _theme$palette11, _theme$palette11$succ, _theme$palette12, _theme$palette12$succ, _theme$palette13, _theme$palette13$erro, _theme$palette14, _theme$palette14$erro, _theme$palette15, _theme$palette15$erro, _theme$palette16, _theme$palette16$defa, _theme$palette17, _theme$palette17$defa, _theme$palette18, _theme$palette18$seco, _theme$palette19, _theme$palette19$succ, _theme$palette20, _theme$palette20$erro;

  return {
    button: {
      minHeight: "auto",
      minWidth: "auto",
      backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : (_theme$palette$defaul = _theme$palette.default) === null || _theme$palette$defaul === void 0 ? void 0 : _theme$palette$defaul.main) || "#3f51b5",
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette2 = theme.palette) === null || _theme$palette2 === void 0 ? void 0 : (_theme$palette2$defau = _theme$palette2.default) === null || _theme$palette2$defau === void 0 ? void 0 : _theme$palette2$defau.contrastText) || "white",
      boxShadow: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
      border: "none",
      borderRadius: "3px",
      position: "relative",
      padding: "12px 30px",
      margin: ".3125rem 1px",
      fontSize: "12px",
      fontWeight: "400",
      textTransform: "uppercase",
      letterSpacing: "0",
      willChange: "box-shadow, transform",
      transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      lineHeight: "1.42857143",
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      touchAction: "manipulation",
      cursor: "pointer",
      "&:focus,&:hover": {
        opacity: 0.8,
        backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette3 = theme.palette) === null || _theme$palette3 === void 0 ? void 0 : (_theme$palette3$defau = _theme$palette3.default) === null || _theme$palette3$defau === void 0 ? void 0 : _theme$palette3$defau.main) || "#3f51b5"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        position: "relative",
        display: "inline-block",
        top: "0",
        marginTop: "-1em",
        marginBottom: "-1em",
        fontSize: "1.1rem",
        marginRight: "4px",
        verticalAlign: "middle"
      },
      "& svg": {
        position: "relative",
        display: "inline-block",
        top: "0",
        width: "18px",
        height: "18px",
        marginRight: "4px",
        verticalAlign: "middle"
      },
      "&$justIcon": {
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          marginTop: "0px",
          position: "absolute",
          width: "100%",
          transform: "none",
          left: "0px",
          top: "0px",
          height: "100%",
          lineHeight: "41px",
          fontSize: "20px"
        }
      }
    },
    fullWidth: {
      width: "100%"
    },
    primary: {
      backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette4 = theme.palette) === null || _theme$palette4 === void 0 ? void 0 : (_theme$palette4$defau = _theme$palette4.default) === null || _theme$palette4$defau === void 0 ? void 0 : _theme$palette4$defau.main) || "#3f51b5",
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette5 = theme.palette) === null || _theme$palette5 === void 0 ? void 0 : (_theme$palette5$defau = _theme$palette5.default) === null || _theme$palette5$defau === void 0 ? void 0 : _theme$palette5$defau.contrastText) || "white",
      "&:focus,&:hover": {
        opacity: 0.9,
        backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette6 = theme.palette) === null || _theme$palette6 === void 0 ? void 0 : (_theme$palette6$defau = _theme$palette6.default) === null || _theme$palette6$defau === void 0 ? void 0 : _theme$palette6$defau.main) || "#3f51b5"
      }
    },
    secondary: {
      backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette7 = theme.palette) === null || _theme$palette7 === void 0 ? void 0 : (_theme$palette7$secon = _theme$palette7.secondary) === null || _theme$palette7$secon === void 0 ? void 0 : _theme$palette7$secon.main) || "#46ce90",
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette8 = theme.palette) === null || _theme$palette8 === void 0 ? void 0 : (_theme$palette8$secon = _theme$palette8.secondary) === null || _theme$palette8$secon === void 0 ? void 0 : _theme$palette8$secon.contrastText) || "white",
      "&:focus,&:hover": {
        opacity: 0.9,
        backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette9 = theme.palette) === null || _theme$palette9 === void 0 ? void 0 : (_theme$palette9$secon = _theme$palette9.secondary) === null || _theme$palette9$secon === void 0 ? void 0 : _theme$palette9$secon.main) || "#46ce90"
      }
    },
    success: {
      backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette10 = theme.palette) === null || _theme$palette10 === void 0 ? void 0 : (_theme$palette10$succ = _theme$palette10.success) === null || _theme$palette10$succ === void 0 ? void 0 : _theme$palette10$succ.main) || "lightseagreen",
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette11 = theme.palette) === null || _theme$palette11 === void 0 ? void 0 : (_theme$palette11$succ = _theme$palette11.success) === null || _theme$palette11$succ === void 0 ? void 0 : _theme$palette11$succ.contrastText) || "white",
      "&:focus,&:hover": {
        opacity: 0.9,
        backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette12 = theme.palette) === null || _theme$palette12 === void 0 ? void 0 : (_theme$palette12$succ = _theme$palette12.success) === null || _theme$palette12$succ === void 0 ? void 0 : _theme$palette12$succ.main) || "lightseagreen"
      }
    },
    error: {
      backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette13 = theme.palette) === null || _theme$palette13 === void 0 ? void 0 : (_theme$palette13$erro = _theme$palette13.error) === null || _theme$palette13$erro === void 0 ? void 0 : _theme$palette13$erro.main) || "orangered",
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette14 = theme.palette) === null || _theme$palette14 === void 0 ? void 0 : (_theme$palette14$erro = _theme$palette14.error) === null || _theme$palette14$erro === void 0 ? void 0 : _theme$palette14$erro.contrastText) || "white",
      "&:focus,&:hover": {
        opacity: 0.9,
        backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette15 = theme.palette) === null || _theme$palette15 === void 0 ? void 0 : (_theme$palette15$erro = _theme$palette15.error) === null || _theme$palette15$erro === void 0 ? void 0 : _theme$palette15$erro.main) || "orangered"
      }
    },
    simple: {
      "&,&:focus,&:hover": {
        color: (theme === null || theme === void 0 ? void 0 : (_theme$palette16 = theme.palette) === null || _theme$palette16 === void 0 ? void 0 : (_theme$palette16$defa = _theme$palette16.default) === null || _theme$palette16$defa === void 0 ? void 0 : _theme$palette16$defa.main) || "#3f51b5",
        background: "transparent",
        boxShadow: "none"
      },
      "&$primary": {
        "&,&:focus,&:hover,&:visited": {
          color: (theme === null || theme === void 0 ? void 0 : (_theme$palette17 = theme.palette) === null || _theme$palette17 === void 0 ? void 0 : (_theme$palette17$defa = _theme$palette17.default) === null || _theme$palette17$defa === void 0 ? void 0 : _theme$palette17$defa.main) || "#3f51b5"
        }
      },
      "&$secondary": {
        "&,&:focus,&:hover,&:visited": {
          color: (theme === null || theme === void 0 ? void 0 : (_theme$palette18 = theme.palette) === null || _theme$palette18 === void 0 ? void 0 : (_theme$palette18$seco = _theme$palette18.secondary) === null || _theme$palette18$seco === void 0 ? void 0 : _theme$palette18$seco.main) || "#46ce90"
        }
      },
      "&$success": {
        "&,&:focus,&:hover,&:visited": {
          color: (theme === null || theme === void 0 ? void 0 : (_theme$palette19 = theme.palette) === null || _theme$palette19 === void 0 ? void 0 : (_theme$palette19$succ = _theme$palette19.success) === null || _theme$palette19$succ === void 0 ? void 0 : _theme$palette19$succ.main) || "lightseagreen"
        }
      },
      "&$error": {
        "&,&:focus,&:hover,&:visited": {
          color: (theme === null || theme === void 0 ? void 0 : (_theme$palette20 = theme.palette) === null || _theme$palette20 === void 0 ? void 0 : (_theme$palette20$erro = _theme$palette20.error) === null || _theme$palette20$erro === void 0 ? void 0 : _theme$palette20$erro.main) || "orangered"
        }
      }
    },
    transparent: {
      "&,&:focus,&:hover": {
        color: "inherit",
        background: "transparent",
        boxShadow: "none"
      }
    },
    disabled: {
      opacity: "0.65",
      pointerEvents: "none"
    },
    lg: {
      padding: "1.125rem 2.25rem",
      fontSize: "0.875rem",
      lineHeight: "1.333333",
      borderRadius: "0.2rem"
    },
    sm: {
      padding: "0.40625rem 1.25rem",
      fontSize: "0.6875rem",
      lineHeight: "1.5",
      borderRadius: "0.2rem"
    },
    round: {
      borderRadius: "30px"
    },
    justIcon: {
      paddingLeft: "12px",
      paddingRight: "12px",
      fontSize: "20px",
      height: "41px",
      minWidth: "41px",
      width: "41px",
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginRight: "0px"
      },
      "&$lg": {
        height: "57px",
        minWidth: "57px",
        width: "57px",
        lineHeight: "56px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          fontSize: "32px",
          lineHeight: "56px"
        },
        "& svg": {
          width: "32px",
          height: "32px"
        }
      },
      "&$sm": {
        height: "30px",
        minWidth: "30px",
        width: "30px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          fontSize: "17px",
          lineHeight: "29px"
        },
        "& svg": {
          width: "17px",
          height: "17px"
        }
      }
    }
  };
};

var _excluded$8 = ["classes", "color", "round", "children", "fullWidth", "disabled", "simple", "size", "justIcon", "className"];

function Button(_ref) {
  var _classNames;

  var props = _extends({}, _ref);

  var classes = props.classes,
      color = props.color,
      round = props.round,
      children = props.children,
      fullWidth = props.fullWidth,
      disabled = props.disabled,
      simple = props.simple,
      size = props.size,
      justIcon = props.justIcon,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$8);

  var btnClasses = classNames__default['default']((_classNames = {}, _defineProperty(_classNames, classes.button, true), _defineProperty(_classNames, classes[size], size), _defineProperty(_classNames, classes[color], color), _defineProperty(_classNames, classes.round, round), _defineProperty(_classNames, classes.fullWidth, fullWidth), _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.simple, simple), _defineProperty(_classNames, classes.justIcon, justIcon), _defineProperty(_classNames, className, className), _classNames));
  return /*#__PURE__*/React__default['default'].createElement(Button__default['default'], _extends({}, rest, {
    className: btnClasses
  }), children);
}

Button.propTypes = {
  classes: PropTypes__default['default'].object.isRequired,
  color: PropTypes__default['default'].oneOf(["primary", "success", "error", "secondary", "transparent"]),
  size: PropTypes__default['default'].oneOf(["sm", "lg"]),
  simple: PropTypes__default['default'].bool,
  round: PropTypes__default['default'].bool,
  fullWidth: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  justIcon: PropTypes__default['default'].bool,
  className: PropTypes__default['default'].string
};
var Button$1 = withStyles__default['default'](ButtonStyle)(Button);

var CardStyle = function CardStyle(theme) {
  var _theme$palette, _theme$palette$defaul;

  return {
    card: {
      border: "0",
      marginBottom: "30px",
      marginTop: "30px",
      borderRadius: "6px",
      color: "rgba(0, 0, 0, 0.87)",
      background: "#fff",
      width: "100%",
      boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minWidth: "0",
      wordWrap: "break-word",
      fontSize: ".875rem"
    },
    cardAnimation: {
      transform: "translate3d(0, 0, 0)",
      transition: "all 300ms linear"
    },
    cardHidden: {
      opacity: "0",
      transform: "translate3d(0, -60px, 0)"
    },
    cardHeader: {
      padding: "0.75rem 1.25rem",
      marginBottom: "0",
      borderBottom: "none",
      background: "transparent",
      zIndex: "3 !important",
      "&:first-child": {
        borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
      }
    },
    cardHeaderIcon: {
      background: "transparent",
      boxShadow: "none",
      color: "#FFFFFF",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        width: "33px",
        height: "33px",
        textAlign: "center",
        lineHeight: "33px"
      },
      "& svg": {
        width: "24px",
        height: "24px",
        textAlign: "center",
        lineHeight: "33px",
        margin: "5px 4px 0px"
      }
    },
    cardIcon: {
      "&$primaryColorCardHeader": {
        borderRadius: "3px",
        padding: "15px",
        marginTop: "-20px",
        marginRight: "15px",
        float: "left"
      }
    },
    primaryColorCardHeader: {
      color: "#FFFFFF",
      background: (theme === null || theme === void 0 ? void 0 : (_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : (_theme$palette$defaul = _theme$palette.default) === null || _theme$palette$defaul === void 0 ? void 0 : _theme$palette$defaul.main) || "#3f51b5",
      borderRadius: "3px",
      margin: "-20px 15px 15px 15px"
    },
    cardBody: {
      padding: "0.9375rem 20px",
      flex: "1 1 auto",
      WebkitBoxFlex: "1",
      position: "relative"
    },
    cardFooter: {
      padding: "0",
      paddingTop: "10px",
      margin: "0 15px 10px",
      borderRadius: "0",
      justifyContent: "space-between",
      alignItems: "center",
      display: "flex",
      backgroundColor: "transparent",
      border: "0"
    }
  };
};

var _excluded$7 = ["classes", "children", "withAnimation", "className"];

var Card = /*#__PURE__*/function (_React$Component) {
  _inherits(Card, _React$Component);

  var _super = _createSuper(Card);

  function Card() {
    var _this;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      cardAnimationClass: _this.props.withAnimation && _this.props.classes.cardHidden
    });

    return _this;
  }

  _createClass(Card, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.withAnimation) {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        this.timeOutFunction = setTimeout(function () {
          this.setState({
            cardAnimationClass: null
          });
        }.bind(this), 700);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.withAnimation) {
        clearTimeout(this.timeOutFunction);
        this.timeOutFunction = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          children = _this$props.children,
          withAnimation = _this$props.withAnimation,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, _excluded$7);

      var cardAnimationClass = this.state.cardAnimationClass;
      return /*#__PURE__*/React__default['default'].createElement("div", _extends({
        className: "".concat(classes.card, " ").concat(withAnimation && classes.cardAnimation, " ").concat(cardAnimationClass, " ").concat(className, " ")
      }, rest), children);
    }
  }]);

  return Card;
}(React__default['default'].Component);

_defineProperty(Card, "propTypes", {
  classes: PropTypes__default['default'].object.isRequired,
  className: PropTypes__default['default'].string,
  withAnimation: PropTypes__default['default'].bool
});

var Card$1 = withStyles__default['default'](CardStyle)(Card);

var _excluded$6 = ["classes", "className", "children"];

function CardBody(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$6);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: "".concat(classes.cardBody, " ").concat(className)
  }, rest), children);
}

CardBody.propTypes = {
  classes: PropTypes__default['default'].object.isRequired,
  className: PropTypes__default['default'].string
};
var CardBody$1 = withStyles__default['default'](CardStyle)(CardBody);

var _excluded$5 = ["classes", "className", "children"];

function CardFooter$2(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$5);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: "".concat(classes.cardFooter, " ").concat(className)
  }, rest), children);
}

CardFooter$2.propTypes = {
  classes: PropTypes__default['default'].object.isRequired,
  className: PropTypes__default['default'].string
};
var CardFooter$3 = withStyles__default['default'](CardStyle)(CardFooter$2);

var _excluded$4 = ["classes", "className", "children", "color", "icon"];

var CardHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(CardHeader, _React$Component);

  var _super = _createSuper(CardHeader);

  function CardHeader() {
    _classCallCheck(this, CardHeader);

    return _super.apply(this, arguments);
  }

  _createClass(CardHeader, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          children = _this$props.children,
          color = _this$props.color,
          icon = _this$props.icon,
          rest = _objectWithoutProperties(_this$props, _excluded$4);

      var cardHeaderClasses = classNames__default['default']((_classNames = {}, _defineProperty(_classNames, classes[color + "ColorCardHeader"], color), _defineProperty(_classNames, classes.cardHeaderIcon, icon), _classNames));
      return /*#__PURE__*/React__default['default'].createElement("div", _extends({
        className: "".concat(classes.cardHeader, " ").concat(cardHeaderClasses, " ").concat(className)
      }, rest), children);
    }
  }]);

  return CardHeader;
}(React__default['default'].Component);

_defineProperty(CardHeader, "propTypes", {
  classes: PropTypes__default['default'].object.isRequired,
  className: PropTypes__default['default'].string,
  icon: PropTypes__default['default'].bool,
  color: PropTypes__default['default'].oneOf(["primary"])
});

var CardHeader$1 = withStyles__default['default'](CardStyle)(CardHeader);

var _excluded$3 = ["classes", "className", "children", "color"];

var CardIcon = /*#__PURE__*/function (_React$Component) {
  _inherits(CardIcon, _React$Component);

  var _super = _createSuper(CardIcon);

  function CardIcon() {
    _classCallCheck(this, CardIcon);

    return _super.apply(this, arguments);
  }

  _createClass(CardIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          children = _this$props.children,
          color = _this$props.color,
          rest = _objectWithoutProperties(_this$props, _excluded$3);

      var cardIconClasses = classNames__default['default'](_defineProperty({}, classes[color + "ColorCardHeader"], color));
      return /*#__PURE__*/React__default['default'].createElement("div", _extends({
        className: "".concat(classes.cardIcon, " ").concat(cardIconClasses, " ").concat(className)
      }, rest), children);
    }
  }]);

  return CardIcon;
}(React__default['default'].Component);

_defineProperty(CardIcon, "propTypes", {
  classes: PropTypes__default['default'].object.isRequired,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(["primary"])
});

var CardIcon$1 = withStyles__default['default'](CardStyle)(CardIcon);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".block-ui-container {\n  position: fixed; }\n\n.jp-loader {\n  font-size: 90px;\n  text-indent: -9999em;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  margin: 72px auto;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease; }\n\n@-webkit-keyframes load6 {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; }\n  5%,\n  95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; }\n  10%,\n  59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em; }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em; }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em; }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; } }\n\n@keyframes load6 {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; }\n  5%,\n  95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; }\n  10%,\n  59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em; }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em; }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em; }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; } }\n\n@-webkit-keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n";
styleInject(css_248z$1);

var styles$4 = function styles(theme) {
  var _theme$palette, _theme$palette$defaul;

  return {
    spinColor: {
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : (_theme$palette$defaul = _theme$palette.default) === null || _theme$palette$defaul === void 0 ? void 0 : _theme$palette$defaul.main) || "#3f51b5"
    }
  };
};

var BlockComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(BlockComponent, _React$Component);

  var _super = _createSuper(BlockComponent);

  function BlockComponent() {
    var _this;

    _classCallCheck(this, BlockComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(BlockComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          showSpinner = _this$props.showSpinner,
          blocking = _this$props.blocking,
          children = _this$props.children,
          classes = _this$props.classes;

      var MyLoader = function MyLoader() {
        return showSpinner ? /*#__PURE__*/React__default['default'].createElement("div", {
          className: "jp-loader ".concat(classes.spinColor)
        }) : /*#__PURE__*/React__default['default'].createElement("div", null);
      };

      return /*#__PURE__*/React__default['default'].createElement(BlockUi__default['default'], {
        loader: MyLoader,
        blocking: blocking,
        keepInView: true
      }, children);
    }
  }]);

  return BlockComponent;
}(React__default['default'].Component);

_defineProperty(BlockComponent, "propTypes", {
  classes: PropTypes__default['default'].object.isRequired,
  blocking: PropTypes__default['default'].bool,
  keepInView: PropTypes__default['default'].bool,
  showSpinner: PropTypes__default['default'].bool,
  children: PropTypes__default['default'].node,
  renderChildren: PropTypes__default['default'].bool,
  // default to true
  className: PropTypes__default['default'].string,
  message: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].node]),
  loader: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].func, PropTypes__default['default'].node]),
  tag: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].func])
});

_defineProperty(BlockComponent, "defaultProps", {
  showSpinner: true
});

var BlockComponent$1 = withStyles__default['default'](styles$4)(BlockComponent);

var useStyles = styles$6.makeStyles(function (theme) {
  var _theme$palette, _theme$palette$primar, _theme$palette2, _theme$palette2$prima;

  return {
    confirmButton: {
      backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : (_theme$palette$primar = _theme$palette.primary) === null || _theme$palette$primar === void 0 ? void 0 : _theme$palette$primar.main) || "green",
      "&:hover": {
        opacity: "0.8",
        backgroundColor: "".concat(theme === null || theme === void 0 ? void 0 : (_theme$palette2 = theme.palette) === null || _theme$palette2 === void 0 ? void 0 : (_theme$palette2$prima = _theme$palette2.primary) === null || _theme$palette2$prima === void 0 ? void 0 : _theme$palette2$prima.main, " !important") || "green"
      }
    }
  };
});

function ConfirmItemComponent(props) {
  var title = props.title,
      description = props.description,
      loading = props.loading;
  var classes = useStyles();

  var handleClose = function handleClose() {
    if (props.handleClose) props.handleClose();
  };

  var handleContinue = function handleContinue() {
    var item = props.item;
    if (props.handleOnConfirm) props.handleOnConfirm(item);
  };

  return /*#__PURE__*/React__default['default'].createElement(Dialog__default['default'], {
    open: props.open,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default['default'].createElement(BlockComponent$1, {
    blocking: loading
  }, /*#__PURE__*/React__default['default'].createElement(DialogTitle__default['default'], {
    id: "alert-dialog-title"
  }, title), /*#__PURE__*/React__default['default'].createElement(DialogContent__default['default'], null, /*#__PURE__*/React__default['default'].createElement(DialogContentText__default['default'], {
    id: "alert-dialog-description"
  }, description)), /*#__PURE__*/React__default['default'].createElement(DialogActions__default['default'], null, /*#__PURE__*/React__default['default'].createElement(Button$1, {
    onClick: handleClose
  }, "Cancelar"), /*#__PURE__*/React__default['default'].createElement(Button$1, {
    onClick: handleContinue,
    className: classes.confirmButton,
    autoFocus: true
  }, "Si"))));
}

ConfirmItemComponent.propTypes = {
  classes: PropTypes__default['default'].any,
  style: PropTypes__default['default'].any,
  open: PropTypes__default['default'].bool.isRequired,
  item: PropTypes__default['default'].any.isRequired,
  handleClose: PropTypes__default['default'].func.isRequired,
  handleOnConfirm: PropTypes__default['default'].func,
  title: PropTypes__default['default'].string.isRequired,
  description: PropTypes__default['default'].string,
  loading: PropTypes__default['default'].bool
};
/*export default class ConfirmItemComponent extends React.Component {
  static propTypes = {
    classes: PropTypes.any,
    style: PropTypes.any,
    open: PropTypes.bool.isRequired,
    item: PropTypes.any.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleOnConfirm: PropTypes.func,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    loading: PropTypes.bool,
  };

  state = {};

  handleClose = () => {
    if (this.props.handleClose) this.props.handleClose();
  };

  handleContinue = () => {
    const { item } = this.props;
    if (this.props.handleOnConfirm) this.props.handleOnConfirm(item);
  };

  render() {
    const { title, description, loading } = this.props;
    return (
      <Dialog
        open={this.props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <BlockComponent blocking={loading}>
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancelar</Button>
            <Button onClick={this.handleContinue} color="primary" autoFocus>
              Si
            </Button>
          </DialogActions>
        </BlockComponent>
      </Dialog>
    );
  }
}*/

var headerStyle = function headerStyle(theme) {
  return {
    appBar: {
      backgroundColor: "#fff",
      boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      borderBottom: "0",
      marginBottom: "0",
      position: "absolute",
      width: "100%",
      paddingTop: "10px",
      zIndex: "1029",
      color: "#555555",
      border: "0",
      borderRadius: "3px",
      padding: "10px 0",
      transition: "all 150ms ease 0s",
      minHeight: "50px",
      display: "block"
    },
    appLogo: {
      maxHeight: "40px",
      maxWidth: "40px"
    },
    container: _objectSpread2(_objectSpread2({}, theme.containerFluid), {}, {
      minHeight: "50px"
    }),
    flex: {
      flex: 1
    },
    brandContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flex: 1
    },
    title: _objectSpread2(_objectSpread2({}, theme.defaultFont), {}, {
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      color: "inherit",
      paddingTop: "0.625rem",
      paddingBottom: "0.625rem",
      margin: "0 !important",
      "&:hover,&:focus": {
        background: "transparent"
      }
    }),
    sidebarMinimize: {
      float: "left",
      padding: "0 0 0 15px",
      display: "block",
      color: "#555555"
    },
    sidebarMiniIcon: {
      width: "20px",
      height: "17px"
    }
  };
};

var Header = function Header(props) {
  var _useState = React.useState(props.classes),
      _useState2 = _slicedToArray(_useState, 1),
      classes = _useState2[0];

  var _useState3 = React.useState(props.miniActive),
      _useState4 = _slicedToArray(_useState3, 1),
      miniActive = _useState4[0];

  var _useState5 = React.useState(props.children),
      _useState6 = _slicedToArray(_useState5, 1),
      children = _useState6[0];

  var _useState7 = React.useState(props.showTitle || true),
      _useState8 = _slicedToArray(_useState7, 1),
      showTitle = _useState8[0];

  var logoURL = props === null || props === void 0 ? void 0 : props.logoURL;
  /*const propTypes = {
    classes: PropTypes.object.isRequired,
    sidebarMinimize: PropTypes.func.isRequired,
    miniActive: PropTypes.bool.isRequired,
    showTitle: PropTypes.bool,
    routes: PropTypes.array.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
    children: PropTypes.any,
  };*/
  // Initialize state with undefined width/height so server and client renders match

  var _useState9 = React.useState({
    width: undefined,
    height: undefined
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      windowSize = _useState10[0],
      setWindowSize = _useState10[1];

  React.useEffect(function () {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    } // Add event listener


    window.addEventListener("resize", handleResize); // Call handler right away so state gets updated with initial window size

    handleResize(); // Remove event listener on cleanup

    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount

  var makeBrand = function makeBrand(props) {
    var routes = props.routes,
        location = props.location;
    var name = "";
    {
      routes && routes.map(function (prop) {
        if (prop.collapse) {
          prop.views.map(function (view) {
            if (view.path === location.pathname) {
              name = view.name;
            }

            return null;
          });
        }

        if (prop.path === location.pathname) {
          name = prop.name;
        }

        return null;
      });
    }
    return name;
  };

  return /*#__PURE__*/React__default['default'].createElement(AppBar__default['default'], {
    className: classes.appBar
  }, /*#__PURE__*/React__default['default'].createElement(Toolbar__default['default'], {
    className: classes.container
  }, /*#__PURE__*/React__default['default'].createElement(Hidden__default['default'], {
    smDown: true,
    implementation: "css"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.sidebarMinimize
  }, miniActive ? /*#__PURE__*/React__default['default'].createElement(Button$1, {
    justIcon: true,
    round: true,
    onClick: props.sidebarMinimize
  }, /*#__PURE__*/React__default['default'].createElement(ViewList__default['default'], {
    className: classes.sidebarMiniIcon
  })) : /*#__PURE__*/React__default['default'].createElement(Button$1, {
    justIcon: true,
    round: true,
    onClick: props.sidebarMinimize
  }, /*#__PURE__*/React__default['default'].createElement(MoreVert__default['default'], {
    className: classes.sidebarMiniIcon
  })))), windowSize.width <= 570 && logoURL && /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("img", {
    className: classes.appLogo,
    src: logoURL,
    alt: "logo"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.brandContainer
  }, showTitle && /*#__PURE__*/React__default['default'].createElement(Button$1, {
    href: "#",
    className: classes.title,
    color: "transparent"
  }, makeBrand(props)), children), /*#__PURE__*/React__default['default'].createElement(Hidden__default['default'], {
    smDown: true,
    implementation: "css"
  }), /*#__PURE__*/React__default['default'].createElement(Hidden__default['default'], {
    mdUp: true,
    implementation: "css"
  }, /*#__PURE__*/React__default['default'].createElement(Button$1, {
    className: classes.appResponsive,
    color: "transparent",
    justIcon: true,
    "aria-label": "open drawer",
    onClick: props.handleDrawerToggle
  }, /*#__PURE__*/React__default['default'].createElement(Menu__default['default'], null)))));
};

var Header$1 = withStyles__default['default'](headerStyle)(Header);

var DialogStyle = function DialogStyle(theme) {
  return {
    modalRootTransparent: {
      backgroundColor: "transparent"
    },
    modalTransparent: {
      backgroundColor: "transparent",
      boxShadow: "none",
      overflow: "hidden"
    },
    modalBodyTransparent: {
      background: "none",
      boxShadow: "none"
    }
  };
};

var Dialog = /*#__PURE__*/function (_React$Component) {
  _inherits(Dialog, _React$Component);

  var _super = _createSuper(Dialog);

  function Dialog() {
    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(Dialog, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          open = _this$props.open,
          children = _this$props.children,
          loading = _this$props.loading,
          fullScreen = _this$props.fullScreen,
          transparent = _this$props.transparent,
          maxWidth = _this$props.maxWidth;
      return /*#__PURE__*/React__default['default'].createElement(Dialog__default['default'], {
        fullScreen: fullScreen,
        maxWidth: maxWidth,
        classes: {
          root: transparent && classes.modalRootTransparent,
          paper: transparent && classes.modalTransparent
        },
        open: open
      }, /*#__PURE__*/React__default['default'].createElement(BlockComponent$1, {
        blocking: loading
      }, /*#__PURE__*/React__default['default'].createElement(DialogContent__default['default'], {
        className: transparent && classes.modalBodyTransparent
      }, children)));
    }
  }]);

  return Dialog;
}(React__default['default'].Component);

_defineProperty(Dialog, "propTypes", {
  classes: PropTypes__default['default'].object.isRequired,
  loading: PropTypes__default['default'].bool,
  fullScreen: PropTypes__default['default'].bool,
  maxWidth: PropTypes__default['default'].bool,
  transparent: PropTypes__default['default'].bool,
  open: PropTypes__default['default'].bool.isRequired
});

var Dialog$1 = withStyles__default['default'](DialogStyle)(Dialog);

var DialogMessage = /*#__PURE__*/function (_React$Component) {
  _inherits(DialogMessage, _React$Component);

  var _super = _createSuper(DialogMessage);

  function DialogMessage() {
    var _this;

    _classCallCheck(this, DialogMessage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      if (_this.props.handleClose) _this.props.handleClose();
    });

    return _this;
  }

  _createClass(DialogMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props;
          _this$props.title;
          var description = _this$props.description;
          _this$props.loading;
          var color = _this$props.color;
      return /*#__PURE__*/React__default['default'].createElement(Dialog__default['default'], {
        open: this.props.open,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
      }, /*#__PURE__*/React__default['default'].createElement(DialogTitle__default['default'], {
        id: "alert-dialog-title"
      }, /*#__PURE__*/React__default['default'].createElement("i", {
        style: {
          color: color,
          fontSize: "24px"
        },
        class: "material-icons"
      }, "error_outline")), /*#__PURE__*/React__default['default'].createElement(DialogContent__default['default'], null, /*#__PURE__*/React__default['default'].createElement(DialogContentText__default['default'], {
        id: "alert-dialog-description"
      }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
        gutterBottom: true,
        variant: "headline"
      }, description))), /*#__PURE__*/React__default['default'].createElement(DialogActions__default['default'], null, /*#__PURE__*/React__default['default'].createElement(Button$1, {
        onClick: this.handleClose
      }, "Aceptar")));
    }
  }]);

  return DialogMessage;
}(React__default['default'].Component);

_defineProperty(DialogMessage, "propTypes", {
  classes: PropTypes__default['default'].any,
  style: PropTypes__default['default'].any,
  open: PropTypes__default['default'].bool.isRequired,
  handleClose: PropTypes__default['default'].func.isRequired,
  title: PropTypes__default['default'].string.isRequired,
  description: PropTypes__default['default'].string,
  color: PropTypes__default['default'].string
});

var GridStyle = function GridStyle(theme) {
  return {
    grid: {
      margin: "0 -15px",
      width: "calc(100% + 30px)"
    },
    gridItem: {
      padding: "0 15px !important"
    }
  };
};

var _excluded$2 = ["classes", "children"];

function GridContainer(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$2);

  return /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], _extends({
    container: true
  }, rest, {
    className: classes.grid
  }), children);
}

var GridContainer$1 = withStyles__default['default'](GridStyle)(GridContainer);

var _excluded$1 = ["classes", "children"];

function GridItem(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$1);

  return /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], _extends({
    item: true
  }, rest, {
    className: classes.gridItem
  }), children);
}

var GridItem$1 = withStyles__default['default'](GridStyle)(GridItem);

var CustomInputStyle = function CustomInputStyle(theme) {
  var _theme$palette, _theme$palette$succes, _theme$palette2, _theme$palette2$error, _theme$palette3, _theme$palette3$succe, _theme$palette4, _theme$palette4$error, _theme$palette5, _theme$palette5$succe;

  return {
    disabled: {
      "&:before": {
        borderColor: "transparent !important"
      }
    },
    underline: {
      "&:hover:not($disabled):before,&:before": {
        borderColor: "#D2D2D2 !important",
        borderWidth: "1px !important"
      },
      "&:after": {
        borderColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : (_theme$palette$succes = _theme$palette.success) === null || _theme$palette$succes === void 0 ? void 0 : _theme$palette$succes.main) || "lightseagreen"
      }
    },
    underlineError: {
      "&:after": {
        borderColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette2 = theme.palette) === null || _theme$palette2 === void 0 ? void 0 : (_theme$palette2$error = _theme$palette2.error) === null || _theme$palette2$error === void 0 ? void 0 : _theme$palette2$error.main) || "orangered"
      }
    },
    underlineSuccess: {
      "&:after": {
        borderColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette3 = theme.palette) === null || _theme$palette3 === void 0 ? void 0 : (_theme$palette3$succe = _theme$palette3.success) === null || _theme$palette3$succe === void 0 ? void 0 : _theme$palette3$succe.main) || "lightseagreen"
      }
    },
    labelRoot: _objectSpread2(_objectSpread2({}, theme.defaultFont), {}, {
      color: "#AAAAAA !important",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.42857",
      top: "10px",
      "& + $underline": {
        marginTop: "0px"
      }
    }),
    labelRootError: {
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette4 = theme.palette) === null || _theme$palette4 === void 0 ? void 0 : (_theme$palette4$error = _theme$palette4.error) === null || _theme$palette4$error === void 0 ? void 0 : _theme$palette4$error.main) || "orangered" + " !important"
    },
    labelRootSuccess: {
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette5 = theme.palette) === null || _theme$palette5 === void 0 ? void 0 : (_theme$palette5$succe = _theme$palette5.success) === null || _theme$palette5$succe === void 0 ? void 0 : _theme$palette5$succe.main) || "lightseagreen" + " !important"
    },
    formControl: {
      margin: "0 17px 17px 0",
      paddingTop: "27px",
      position: "relative",
      "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
        color: "#495057"
      }
    },
    input: {
      color: "#495057",
      "&,&::placeholder": {
        fontSize: "14px",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: "400",
        lineHeight: "1.42857",
        opacity: "1"
      },
      "&::placeholder": {
        color: "#AAAAAA"
      }
    }
  };
};

function CustomInput(_ref) {
  var _classNames, _classNames2, _classNames4;

  var props = _extends({}, _ref);

  var classes = props.classes,
      formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      labelProps = props.labelProps,
      inputProps = props.inputProps,
      inputHtmlProps = props.inputHtmlProps,
      error = props.error,
      success = props.success,
      helpText = props.helpText,
      inputRef = props.inputRef;
  var labelClasses = classNames__default['default']((_classNames = {}, _defineProperty(_classNames, " " + classes.labelRootError, error), _defineProperty(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = classNames__default['default']((_classNames2 = {}, _defineProperty(_classNames2, classes.underlineError, error), _defineProperty(_classNames2, classes.underlineSuccess, success && !error), _defineProperty(_classNames2, classes.underline, true), _classNames2));
  var inputClasses = classNames__default['default'](_defineProperty({}, classes.input, true));
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = classNames__default['default'](formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  var helpTextClasses = classNames__default['default']((_classNames4 = {}, _defineProperty(_classNames4, classes.labelRootError, error), _defineProperty(_classNames4, classes.labelRootSuccess, success && !error), _classNames4));
  return /*#__PURE__*/React__default['default'].createElement(FormControl__default['default'], _extends({}, formControlProps, {
    className: formControlClasses
  }), labelText !== undefined ? /*#__PURE__*/React__default['default'].createElement(InputLabel__default['default'], _extends({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps), labelText) : null, /*#__PURE__*/React__default['default'].createElement(Input__default['default'], _extends({
    classes: {
      input: inputClasses,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps, {
    inputRef: inputRef,
    inputProps: inputHtmlProps
  })), helpText !== undefined ? /*#__PURE__*/React__default['default'].createElement(FormHelperText__default['default'], {
    id: id + "-text",
    className: helpTextClasses
  }, helpText) : null);
}

CustomInput.propTypes = {
  classes: PropTypes__default['default'].object.isRequired,
  labelText: PropTypes__default['default'].node,
  labelProps: PropTypes__default['default'].object,
  id: PropTypes__default['default'].string,
  inputProps: PropTypes__default['default'].object,
  inputHtmlProps: PropTypes__default['default'].object,
  inputRef: PropTypes__default['default'].any,
  formControlProps: PropTypes__default['default'].object,
  error: PropTypes__default['default'].bool,
  success: PropTypes__default['default'].bool,
  helpText: PropTypes__default['default'].node
};
var CustomInput$1 = withStyles__default['default'](CustomInputStyle)(CustomInput);

var _excluded = ["classes", "className", "children"];

function CardFooter(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: "".concat(classes.cardFooter, " ").concat(className)
  }, rest), children);
}

CardFooter.propTypes = {
  classes: PropTypes__default['default'].object.isRequired,
  className: PropTypes__default['default'].string
};
var CardFooter$1 = withStyles__default['default'](CardStyle)(CardFooter);

const LoginComponentStyle$2 = theme => ({
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    "@media (min-width: 768px)": {
      width: "750px"
    },
    "@media (min-width: 992px)": {
      width: "970px"
    },
    "@media (min-width: 1200px)": {
      width: "1170px"
    },
    "&:before,&:after": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    },
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  cardTitle: {
    textDecoration: "none",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    },
    marginTop: "0",
    marginBottom: "3px",
    minHeight: "auto",
    "& a": {
      color: "#3C4858",
      textDecoration: "none",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      },
      marginTop: ".625rem",
      marginBottom: "0.75rem",
      minHeight: "auto"
    },
    color: "#FFFFFF"
  },
  textCenter: {
    textAlign: "center"
  },
  justifyContentCenter: {
    justifyContent: "center !important"
  },
  inputAdornment: {
    marginRight: "18px"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  cardHeader: {
    marginBottom: "20px"
  }
});

var styles$3 = function styles(theme) {
  return _objectSpread2(_objectSpread2({}, LoginComponentStyle$2(theme)), {}, {
    link: {
      cursor: "pointer",
      textDecoration: "underline",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  });
};

var RegisterComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(RegisterComponent, _React$Component);

  var _super = _createSuper(RegisterComponent);

  function RegisterComponent() {
    var _this;

    _classCallCheck(this, RegisterComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      item: {},
      errorMessage: null,
      showPassword: false
    });

    _defineProperty(_assertThisInitialized(_this), "bindValue", function (key) {
      return {
        onChange: function onChange(e) {
          var item = _this.state.item;
          item[key] = e.target.value;

          _this.setState({
            item: item
          });
        },
        value: _this.state.item[key] || ""
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmitRegister", function (event) {
      event.stopPropagation();
      event.preventDefault(); //Varificar password and password2

      if (_this.state.item.password !== _this.state.item.password2) {
        _this.setState({
          errorMessage: "Las claves no coiciden."
        });

        return;
      }

      _this.setState({
        errorMessage: null
      });

      var _this$state$item = _this.state.item,
          email = _this$state$item.email,
          name = _this$state$item.name,
          password = _this$state$item.password;
      return _this.props.onRegister(email, name, password);
    });

    return _this;
  }

  _createClass(RegisterComponent, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (props.isLoggedIn()) {
        this.props.onCancelClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          loading = _this$props.loading,
          onCancelClick = _this$props.onCancelClick,
          onLoginClick = _this$props.onLoginClick;
      var errorMessage = this.props.errorMessage || this.state.errorMessage || null;
      return /*#__PURE__*/React__default['default'].createElement(Dialog$1, {
        fullScreen: false,
        open: this.props.open,
        loading: loading,
        transparent: true
      }, /*#__PURE__*/React__default['default'].createElement(GridContainer$1, {
        justify: "center"
      }, /*#__PURE__*/React__default['default'].createElement(GridItem$1, {
        xs: 12,
        sm: 6,
        md: 4,
        style: {
          minWidth: "100%"
        }
      }, /*#__PURE__*/React__default['default'].createElement("form", {
        autoComplete: "off",
        onSubmit: this.onSubmitRegister.bind(this)
      }, /*#__PURE__*/React__default['default'].createElement(Card$1, null, /*#__PURE__*/React__default['default'].createElement(CardHeader$1, {
        className: "".concat(classes.cardHeader, " ").concat(classes.textCenter),
        color: "primary"
      }, /*#__PURE__*/React__default['default'].createElement("h4", {
        className: classes.cardTitle
      }, "Crear Usuario")), /*#__PURE__*/React__default['default'].createElement(CardBody$1, null, /*#__PURE__*/React__default['default'].createElement(CustomInput$1, {
        labelText: "Email",
        id: "email",
        formControlProps: {
          fullWidth: true
        },
        inputProps: _objectSpread2({
          endAdornment: /*#__PURE__*/React__default['default'].createElement(InputAdornment__default['default'], {
            position: "end"
          }, /*#__PURE__*/React__default['default'].createElement(Email__default['default'], {
            className: classes.inputAdornmentIcon
          })),
          type: "email",
          required: true
        }, this.bindValue("email"))
      }), /*#__PURE__*/React__default['default'].createElement(CustomInput$1, {
        labelText: "Nombre",
        id: "name",
        formControlProps: {
          fullWidth: true
        },
        inputProps: _objectSpread2({
          endAdornment: /*#__PURE__*/React__default['default'].createElement(InputAdornment__default['default'], {
            position: "end"
          }, /*#__PURE__*/React__default['default'].createElement(Person__default['default'], {
            className: classes.inputAdornmentIcon
          })),
          required: true
        }, this.bindValue("name"))
      }), /*#__PURE__*/React__default['default'].createElement(CustomInput$1, {
        labelText: "Clave",
        id: "password",
        helpText: "Debe tener al menos 6 caracteres",
        formControlProps: {
          fullWidth: true
        },
        inputProps: _objectSpread2({
          endAdornment: /*#__PURE__*/React__default['default'].createElement(InputAdornment__default['default'], {
            position: "end"
          }, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
            onClick: function onClick() {
              return _this2.setState({
                showPassword: !_this2.state.showPassword
              });
            }
          }, this.state.showPassword ? /*#__PURE__*/React__default['default'].createElement(Visibility__default['default'], null) : /*#__PURE__*/React__default['default'].createElement(VisibilityOff__default['default'], null))),
          type: this.state.showPassword ? "text" : "password",
          required: true
        }, this.bindValue("password")),
        inputHtmlProps: {
          pattern: ".{6,}"
        }
      }), /*#__PURE__*/React__default['default'].createElement(CustomInput$1, {
        labelText: "Repetir clave",
        id: "password2",
        helpText: "Debe tener al menos 6 caracteres",
        formControlProps: {
          fullWidth: true
        },
        inputProps: _objectSpread2({
          endAdornment: /*#__PURE__*/React__default['default'].createElement(InputAdornment__default['default'], {
            position: "end"
          }, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
            onClick: function onClick() {
              return _this2.setState({
                showPassword: !_this2.state.showPassword
              });
            }
          }, this.state.showPassword ? /*#__PURE__*/React__default['default'].createElement(Visibility__default['default'], null) : /*#__PURE__*/React__default['default'].createElement(VisibilityOff__default['default'], null))),
          type: this.state.showPassword ? "text" : "password",
          required: true
        }, this.bindValue("password2")),
        inputHtmlProps: {
          pattern: ".{6,}"
        }
      }), errorMessage && /*#__PURE__*/React__default['default'].createElement("p", {
        style: {
          color: "red",
          fontWeight: "bold"
        }
      }, errorMessage)), /*#__PURE__*/React__default['default'].createElement(CardFooter$1, {
        className: classes.justifyContentCenter
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: classes.center,
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement(Button$1, {
        round: true,
        onClick: onCancelClick
      }, "Cancelar"), /*#__PURE__*/React__default['default'].createElement(Button$1, {
        round: true,
        color: "primary",
        type: "submit"
      }, "Registrar"))), /*#__PURE__*/React__default['default'].createElement(CardFooter$1, {
        className: classes.justifyContentCenter
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: classes.center,
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement(Button$1, {
        round: true,
        onClick: onLoginClick
      }, "INGRESAR"))))))));
    }
  }]);

  return RegisterComponent;
}(React__default['default'].Component);

_defineProperty(RegisterComponent, "propTypes", {
  classes: PropTypes__default['default'].object.isRequired,
  loading: PropTypes__default['default'].bool,
  errorMessage: PropTypes__default['default'].string,
  open: PropTypes__default['default'].bool.isRequired,
  onCancelClick: PropTypes__default['default'].func.isRequired,
  onLoginClick: PropTypes__default['default'].func.isRequired,
  onRegister: PropTypes__default['default'].func.isRequired,
  history: PropTypes__default['default'].object,
  isLoggedIn: PropTypes__default['default'].func.isRequired
});

var RegisterComponent$1 = withStyles__default['default'](styles$3)(RegisterComponent);

var RemoveItemComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(RemoveItemComponent, _React$Component);

  var _super = _createSuper(RemoveItemComponent);

  function RemoveItemComponent() {
    var _this;

    _classCallCheck(this, RemoveItemComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      if (_this.props.handleClose) _this.props.handleClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleContinue", function () {
      var item = _this.props.item;
      if (_this.props.handleOnRemove) _this.props.handleOnRemove(item);
    });

    return _this;
  }

  _createClass(RemoveItemComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          loading = _this$props.loading;
      return /*#__PURE__*/React__default['default'].createElement(Dialog__default['default'], {
        open: this.props.open,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
      }, /*#__PURE__*/React__default['default'].createElement(BlockComponent$1, {
        blocking: loading
      }, /*#__PURE__*/React__default['default'].createElement(DialogTitle__default['default'], {
        id: "alert-dialog-title"
      }, title), /*#__PURE__*/React__default['default'].createElement(DialogContent__default['default'], null, /*#__PURE__*/React__default['default'].createElement(DialogContentText__default['default'], {
        id: "alert-dialog-description"
      }, description)), /*#__PURE__*/React__default['default'].createElement(DialogActions__default['default'], null, /*#__PURE__*/React__default['default'].createElement(Button$1, {
        onClick: this.handleClose
      }, "Cancelar"), /*#__PURE__*/React__default['default'].createElement(Button$1, {
        onClick: this.handleContinue,
        color: "error",
        autoFocus: true
      }, "Si"))));
    }
  }]);

  return RemoveItemComponent;
}(React__default['default'].Component);

_defineProperty(RemoveItemComponent, "propTypes", {
  classes: PropTypes__default['default'].any,
  style: PropTypes__default['default'].any,
  open: PropTypes__default['default'].bool.isRequired,
  item: PropTypes__default['default'].any.isRequired,
  handleClose: PropTypes__default['default'].func.isRequired,
  handleOnRemove: PropTypes__default['default'].func.isRequired,
  title: PropTypes__default['default'].string.isRequired,
  description: PropTypes__default['default'].string,
  loading: PropTypes__default['default'].bool
});

var LoginComponentStyle$1 = function LoginComponentStyle(theme) {
  return {
    container: _defineProperty({
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      "@media (min-width: 768px)": {
        width: "750px"
      },
      "@media (min-width: 992px)": {
        width: "970px"
      },
      "@media (min-width: 1200px)": {
        width: "1170px"
      },
      "&:before,&:after": {
        display: "table",
        content: '" "'
      },
      "&:after": {
        clear: "both"
      },
      zIndex: "4"
    }, theme.breakpoints.down("sm"), {
      paddingBottom: "100px"
    }),
    cardTitle: {
      textDecoration: "none",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      },
      marginTop: "0",
      marginBottom: "3px",
      minHeight: "auto",
      "& a": {
        color: "#3C4858",
        textDecoration: "none",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        "& small": {
          color: "#777",
          fontSize: "65%",
          fontWeight: "400",
          lineHeight: "1"
        },
        marginTop: ".625rem",
        marginBottom: "0.75rem",
        minHeight: "auto"
      },
      color: "#FFFFFF"
    },
    textCenter: {
      textAlign: "center"
    },
    justifyContentCenter: {
      justifyContent: "center !important"
    },
    inputAdornment: {
      marginRight: "18px"
    },
    inputAdornmentIcon: {
      color: "#555"
    },
    cardHidden: {
      opacity: "0",
      transform: "translate3d(0, -60px, 0)"
    },
    cardHeader: {
      marginBottom: "20px"
    }
  };
};

var styles$2 = function styles(theme) {
  return _objectSpread2(_objectSpread2({}, LoginComponentStyle$1(theme)), {}, {
    link: {
      cursor: "pointer",
      textDecoration: "underline",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  });
};

var ResetComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(ResetComponent, _React$Component);

  var _super = _createSuper(ResetComponent);

  function ResetComponent() {
    var _this;

    _classCallCheck(this, ResetComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      item: {}
    });

    _defineProperty(_assertThisInitialized(_this), "bindValue", function (key) {
      return {
        onChange: function onChange(e) {
          var item = _this.state.item;
          item[key] = e.target.value;

          _this.setState({
            item: item
          });
        },
        value: _this.state.item[key] || ""
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmitReset", function (event) {
      event.stopPropagation();
      event.preventDefault();
      var email = _this.state.item.email;
      return _this.props.onResetPassword(email);
    });

    return _this;
  }

  _createClass(ResetComponent, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (props.isLoggedIn()) {
        this.props.onCancelClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          errorMessage = _this$props.errorMessage,
          loading = _this$props.loading,
          onCancelClick = _this$props.onCancelClick,
          onLoginClick = _this$props.onLoginClick;
      return /*#__PURE__*/React__default['default'].createElement(Dialog$1, {
        fullScreen: false,
        open: this.props.open,
        loading: loading,
        transparent: true
      }, /*#__PURE__*/React__default['default'].createElement(GridContainer$1, {
        justify: "center"
      }, /*#__PURE__*/React__default['default'].createElement(GridItem$1, {
        xs: 12,
        sm: 6,
        md: 4,
        style: {
          minWidth: "100%"
        }
      }, /*#__PURE__*/React__default['default'].createElement("form", {
        autoComplete: "off",
        onSubmit: this.onSubmitReset.bind(this)
      }, /*#__PURE__*/React__default['default'].createElement(Card$1, null, /*#__PURE__*/React__default['default'].createElement(CardHeader$1, {
        className: "".concat(classes.cardHeader, " ").concat(classes.textCenter),
        color: "primary"
      }, /*#__PURE__*/React__default['default'].createElement("h4", {
        className: classes.cardTitle
      }, "Recuperar Contrase\xF1a")), /*#__PURE__*/React__default['default'].createElement(CardBody$1, null, /*#__PURE__*/React__default['default'].createElement(CustomInput$1, {
        labelText: "Email",
        id: "email",
        formControlProps: {
          fullWidth: true
        },
        inputProps: _objectSpread2({
          endAdornment: /*#__PURE__*/React__default['default'].createElement(InputAdornment__default['default'], {
            position: "end"
          }, /*#__PURE__*/React__default['default'].createElement(Email__default['default'], {
            className: classes.inputAdornmentIcon
          })),
          type: "email",
          required: true
        }, this.bindValue("email"))
      }), errorMessage && /*#__PURE__*/React__default['default'].createElement("p", {
        style: {
          color: "red",
          fontWeight: "bold"
        }
      }, errorMessage)), /*#__PURE__*/React__default['default'].createElement(CardFooter$1, {
        className: classes.justifyContentCenter
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: classes.center,
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement(Button$1, {
        round: true,
        onClick: onCancelClick
      }, "Cancelar"), /*#__PURE__*/React__default['default'].createElement(Button$1, {
        round: true,
        color: "primary",
        type: "submit"
      }, "Recuperar Contrase\xF1a"))), /*#__PURE__*/React__default['default'].createElement(CardFooter$1, {
        className: classes.justifyContentCenter
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: classes.center,
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement(Button$1, {
        round: true,
        onClick: onLoginClick
      }, "Ingresar"))))))));
    }
  }]);

  return ResetComponent;
}(React__default['default'].Component);

_defineProperty(ResetComponent, "propTypes", {
  classes: PropTypes__default['default'].object.isRequired,
  loading: PropTypes__default['default'].bool,
  errorMessage: PropTypes__default['default'].string,
  open: PropTypes__default['default'].bool.isRequired,
  onResetPassword: PropTypes__default['default'].func.isRequired,
  onCancelClick: PropTypes__default['default'].func.isRequired,
  onLoginClick: PropTypes__default['default'].func.isRequired,
  onResetClick: PropTypes__default['default'].func.isRequired,
  history: PropTypes__default['default'].object,
  isLoggedIn: PropTypes__default['default'].func.isRequired
});

var ResetComponent$1 = withStyles__default['default'](styles$2)(ResetComponent);

var FormsStyle = function FormsStyle(theme) {
  var _theme$palette, _theme$palette$defaul, _theme$palette2, _theme$palette2$defau;

  return {
    color: "#3C4858",
    textDecoration: "none",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    },
    marginTop: "0",
    marginBottom: "3px",
    minHeight: "auto",
    "& a": {
      color: "#3C4858",
      textDecoration: "none",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      },
      marginTop: ".625rem",
      marginBottom: "0.75rem",
      minHeight: "auto"
    },
    cardIconTitle: {
      color: "#3C4858",
      textDecoration: "none",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      },
      minHeight: "auto",
      "& a": {
        color: "#3C4858",
        textDecoration: "none",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        "& small": {
          color: "#777",
          fontSize: "65%",
          fontWeight: "400",
          lineHeight: "1"
        },
        marginTop: ".625rem",
        marginBottom: "0.75rem",
        minHeight: "auto"
      },
      marginTop: "15px",
      marginBottom: "0px"
    },
    label: {
      cursor: "pointer",
      paddingLeft: "0",
      color: "rgba(0, 0, 0, 0.26)",
      fontSize: "14px",
      lineHeight: "1.428571429",
      fontWeight: "400",
      display: "inline-flex"
    },
    selectFormControl: {
      minWidth: "146px",
      margin: "0px 17px 0px 0px !important",
      "& > div": {
        "&:before": {
          borderBottomWidth: "1px !important",
          borderBottomColor: "#D2D2D2 !important"
        },
        "&:after": {
          borderBottomColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : (_theme$palette$defaul = _theme$palette.default) === null || _theme$palette$defaul === void 0 ? void 0 : _theme$palette$defaul.main) || "#3f51b5" + "!important"
        }
      }
    },
    selectMenu: {
      "& > div > ul": {
        border: "0",
        padding: "5px 0",
        margin: "0",
        boxShadow: "none",
        minWidth: "100%",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "block",
        fontSize: "14px",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: "#fff",
        backgroundClip: "padding-box"
      },
      "& > div + div": {
        maxHeight: "266px !important"
      }
    },
    checked: {
      color: (theme === null || theme === void 0 ? void 0 : (_theme$palette2 = theme.palette) === null || _theme$palette2 === void 0 ? void 0 : (_theme$palette2$defau = _theme$palette2.default) === null || _theme$palette2$defau === void 0 ? void 0 : _theme$palette2$defau.main) || "#3f51b5" + "!important"
    },
    checkedIcon: {
      width: "20px",
      height: "20px",
      border: "1px solid rgba(0, 0, 0, .54)",
      borderRadius: "3px"
    },
    uncheckedIcon: {
      width: "0px",
      height: "0px",
      padding: "9px",
      border: "1px solid rgba(0, 0, 0, .54)",
      borderRadius: "3px"
    }
  };
};

var SpinnerComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(SpinnerComponent, _React$Component);

  var _super = _createSuper(SpinnerComponent);

  function SpinnerComponent() {
    var _this;

    _classCallCheck(this, SpinnerComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(SpinnerComponent, [{
    key: "render",
    value: function render() {
      if (this.props.blocking) return null;
      return /*#__PURE__*/React__default['default'].createElement(BlockComponent$1, this.props);
    }
  }]);

  return SpinnerComponent;
}(React__default['default'].Component);

_defineProperty(SpinnerComponent, "propTypes", {
  blocking: PropTypes__default['default'].bool
});

const LoginComponentStyle = theme => {
  var _theme$palette, _theme$palette$primar, _theme$palette2, _theme$palette2$prima, _theme$palette3, _theme$palette3$prima;

  return {
    container: {
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      "@media (min-width: 768px)": {
        width: "750px"
      },
      "@media (min-width: 992px)": {
        width: "970px"
      },
      "@media (min-width: 1200px)": {
        width: "1170px"
      },
      "&:before,&:after": {
        display: "table",
        content: '" "'
      },
      "&:after": {
        clear: "both"
      },
      zIndex: "4",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "100px"
      }
    },
    cardTitle: {
      textDecoration: "none",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      },
      marginTop: "0",
      marginBottom: "3px",
      minHeight: "auto",
      "& a": {
        color: "#3C4858",
        textDecoration: "none",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        "& small": {
          color: "#777",
          fontSize: "65%",
          fontWeight: "400",
          lineHeight: "1"
        },
        marginTop: ".625rem",
        marginBottom: "0.75rem",
        minHeight: "auto"
      },
      color: "#FFFFFF"
    },
    textCenter: {
      textAlign: "center"
    },
    justifyContentCenter: {
      justifyContent: "center !important",
      "& .ingButton": {
        backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : (_theme$palette$primar = _theme$palette.primary) === null || _theme$palette$primar === void 0 ? void 0 : _theme$palette$primar.main) || "grey",
        color: (theme === null || theme === void 0 ? void 0 : (_theme$palette2 = theme.palette) === null || _theme$palette2 === void 0 ? void 0 : (_theme$palette2$prima = _theme$palette2.primary) === null || _theme$palette2$prima === void 0 ? void 0 : _theme$palette2$prima.contrastText) || "white"
      }
    },
    inputAdornment: {
      marginRight: "18px"
    },
    inputAdornmentIcon: {
      color: "#555"
    },
    cardHidden: {
      opacity: "0",
      transform: "translate3d(0, -60px, 0)"
    },
    cardHeader: {
      marginBottom: "20px",
      backgroundColor: (theme === null || theme === void 0 ? void 0 : (_theme$palette3 = theme.palette) === null || _theme$palette3 === void 0 ? void 0 : (_theme$palette3$prima = _theme$palette3.primary) === null || _theme$palette3$prima === void 0 ? void 0 : _theme$palette3$prima.main) || "grey"
    }
  };
};

var styles$1 = function styles(theme) {
  return _objectSpread2(_objectSpread2({}, LoginComponentStyle(theme)), {}, {
    link: {
      cursor: "pointer",
      textDecoration: "underline",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  });
};

var LoginComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginComponent, _React$Component);

  var _super = _createSuper(LoginComponent);

  function LoginComponent() {
    var _this;

    _classCallCheck(this, LoginComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      item: {
        email: _this.props.DEMO_MAIL,
        password: _this.props.DEMO_PASSWORD
      },
      showPassword: false
    });

    _defineProperty(_assertThisInitialized(_this), "bindValue", function (key) {
      return {
        onChange: function onChange(e) {
          var item = _this.state.item;
          item[key] = e.target.value;

          _this.setState({
            item: item
          });
        },
        value: _this.state.item[key] || ""
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmitLogin", function (event) {
      event.stopPropagation();
      event.preventDefault();
      var _this$state$item = _this.state.item,
          email = _this$state$item.email,
          password = _this$state$item.password;
      return _this.props.onLogin(email, password);
    });

    return _this;
  }

  _createClass(LoginComponent, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.isLoggedIn()) {
        this.props.onCancelClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          errorMessage = _this$props.errorMessage,
          loading = _this$props.loading,
          onCancelClick = _this$props.onCancelClick,
          onCreateAccountClick = _this$props.onCreateAccountClick,
          onResetPasswordClick = _this$props.onResetPasswordClick;

      var iconPathGoogle = require("./assets/img/auth_service_google.svg");

      var iconPathFacebook = require("./assets/img/auth_service_facebook.svg");

      var recuperaLink = !this.props.DEMO_MAIL || this.props.DEMO_MAIL !== this.state.item.email ? /*#__PURE__*/React__default['default'].createElement("a", {
        className: classes.link,
        onClick: onResetPasswordClick
      }, "Recuperar Contrase\xF1a") : "";
      return /*#__PURE__*/React__default['default'].createElement(Dialog$1, {
        fullScreen: false,
        open: this.props.open,
        loading: loading,
        transparent: true
      }, /*#__PURE__*/React__default['default'].createElement(GridContainer$1, {
        justify: "center"
      }, /*#__PURE__*/React__default['default'].createElement(GridItem$1, {
        xs: 12,
        sm: 6,
        md: 4,
        style: {
          minWidth: "100%"
        }
      }, /*#__PURE__*/React__default['default'].createElement("form", {
        autoComplete: "off",
        onSubmit: this.onSubmitLogin.bind(this)
      }, /*#__PURE__*/React__default['default'].createElement(Card$1, {
        withAnimation: true
      }, /*#__PURE__*/React__default['default'].createElement(CardHeader$1, {
        className: "".concat(classes.cardHeader, " ").concat(classes.textCenter) //color="primary"

      }, /*#__PURE__*/React__default['default'].createElement("h4", {
        className: classes.cardTitle
      }, "Ingresar")), /*#__PURE__*/React__default['default'].createElement(CardBody$1, null, /*#__PURE__*/React__default['default'].createElement(CustomInput$1, {
        labelText: "Email",
        id: "email",
        formControlProps: {
          fullWidth: true
        },
        inputProps: _objectSpread2({
          endAdornment: /*#__PURE__*/React__default['default'].createElement(InputAdornment__default['default'], {
            position: "end"
          }, /*#__PURE__*/React__default['default'].createElement(Email__default['default'], {
            className: classes.inputAdornmentIcon
          })),
          required: true
        }, this.bindValue("email"))
      }), /*#__PURE__*/React__default['default'].createElement(CustomInput$1, {
        labelText: "Clave",
        id: "password",
        formControlProps: {
          fullWidth: true
        },
        inputProps: _objectSpread2({
          endAdornment: /*#__PURE__*/React__default['default'].createElement(InputAdornment__default['default'], {
            position: "end"
          }, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
            onClick: function onClick() {
              return _this2.setState({
                showPassword: !_this2.state.showPassword
              });
            }
          }, this.state.showPassword ? /*#__PURE__*/React__default['default'].createElement(Visibility__default['default'], null) : /*#__PURE__*/React__default['default'].createElement(VisibilityOff__default['default'], null))),
          type: this.state.showPassword ? "text" : "password",
          required: true
        }, this.bindValue("password"))
      }), errorMessage && /*#__PURE__*/React__default['default'].createElement("p", {
        style: {
          color: "red",
          fontWeight: "bold"
        }
      }, errorMessage)), /*#__PURE__*/React__default['default'].createElement(CardFooter$1, {
        className: classes.justifyContentCenter
      }, /*#__PURE__*/React__default['default'].createElement(GridContainer$1, null, /*#__PURE__*/React__default['default'].createElement(GridItem$1, {
        xs: 12,
        sm: 6
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement(Button$1, {
        round: true,
        type: "submit",
        className: "ingButton"
      }, "Ingresar"))), /*#__PURE__*/React__default['default'].createElement(GridItem$1, {
        xs: 12,
        sm: 6
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement(Button$1, {
        round: true,
        onClick: onCancelClick
      }, "Cancelar"))))), /*#__PURE__*/React__default['default'].createElement(CardFooter$1, {
        className: classes.justifyContentCenter
      }, /*#__PURE__*/React__default['default'].createElement(GridContainer$1, null, /*#__PURE__*/React__default['default'].createElement(GridItem$1, {
        xs: 12
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: classes.center,
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement("a", {
        className: classes.link,
        onClick: onCreateAccountClick
      }, "Registrarse"), "\xA0 \xA0", recuperaLink))))), /*#__PURE__*/React__default['default'].createElement(CardFooter$1, {
        className: classes.justifyContentCenter
      }, /*#__PURE__*/React__default['default'].createElement(GridContainer$1, null, /*#__PURE__*/React__default['default'].createElement(GridItem$1, {
        xs: 12
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement(Button$1, {
        round: true,
        onClick: this.props.onLoginWithGoogleProvider
      }, /*#__PURE__*/React__default['default'].createElement("img", {
        src: iconPathGoogle,
        className: classes.img,
        alt: ""
      }), "\xA0 \xA0Ingresar Con Google"))), /*#__PURE__*/React__default['default'].createElement(GridItem$1, {
        xs: 12
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React__default['default'].createElement(Button$1, {
        round: true,
        onClick: this.props.onLoginWithFacebookProvider
      }, /*#__PURE__*/React__default['default'].createElement("img", {
        src: iconPathFacebook,
        className: classes.img,
        alt: ""
      }), "\xA0 \xA0Ingresar con Facebook"))))))))));
    }
  }]);

  return LoginComponent;
}(React__default['default'].Component);

_defineProperty(LoginComponent, "propTypes", {
  classes: PropTypes__default['default'].object.isRequired,
  loading: PropTypes__default['default'].bool,
  errorMessage: PropTypes__default['default'].string,
  open: PropTypes__default['default'].bool.isRequired,
  onCancelClick: PropTypes__default['default'].func.isRequired,
  onCreateAccountClick: PropTypes__default['default'].func.isRequired,
  onResetPasswordClick: PropTypes__default['default'].func.isRequired,
  onLogin: PropTypes__default['default'].func.isRequired,
  onLoginWithGoogleProvider: PropTypes__default['default'].func.isRequired,
  onLoginWithFacebookProvider: PropTypes__default['default'].func.isRequired,
  history: PropTypes__default['default'].object,
  isLoggedIn: PropTypes__default['default'].func.isRequired
});

var LoginComponent$1 = withStyles__default['default'](styles$1)(LoginComponent);

var styles = function styles(theme) {
  return {
    button: {
      margin: theme.spacing(1),
      paddin: "0px"
    },
    input: {
      display: "none"
    }
  };
};

var NavPath = /*#__PURE__*/function (_Component) {
  _inherits(NavPath, _Component);

  var _super = _createSuper(NavPath);

  function NavPath() {
    _classCallCheck(this, NavPath);

    return _super.apply(this, arguments);
  }

  _createClass(NavPath, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          paths = _this$props.paths,
          classes = _this$props.classes;
      return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("span", null, this.props.iniPath !== undefined && /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
        onClick: this.props.handleOnClickIni,
        size: "small",
        color: "primary",
        variant: "outlined",
        href: "#outlined-buttons",
        className: classes.button
      }, this.props.iniPath.texto)), paths.map(function (p, index) {
        return /*#__PURE__*/React__default['default'].createElement("span", {
          key: index
        }, /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
          onClick: function onClick() {
            return _this.props.handleOnClick(p);
          },
          size: "small",
          color: "primary",
          variant: "outlined",
          href: "#outlined-buttons",
          className: classes.button
        }, p.texto));
      }));
    }
  }]);

  return NavPath;
}(React.Component);

NavPath.defaultProps = {
  paths: []
};
NavPath.propTypes = {
  iniPath: PropTypes__default['default'].object,
  paths: PropTypes__default['default'].array.isRequired,
  handleOnClick: PropTypes__default['default'].func.isRequired
};
var index = styles$6.withStyles(styles)(NavPath);

function PageStyle(theme) {
  return {
    wrapper: {
      position: "relative",
      top: "70px",
      margin: "20px",
      height: "calc(100vh - 70px)",
      "&:after": {
        display: "table",
        clear: "both",
        content: '" "'
      }
    },
    card: {
      marginTop: "0px"
    },
    justificado: {
      position: "relative",
      textAlign: "justify",
      top: "0px",
      margin: "20px"
    },
    centrado: {
      position: "relative",
      textAlign: "center",
      top: "0px",
      margin: "0px"
    }
  };
}

var css_248z = ".Table__itemCount {\n  /* margin-top: 10px; */\n  font-size: 14px;\n}\n\n.Table__pagination {\n  display: flex;\n  justify-content: flex-end;\n  padding: 20px 10px;\n}\n\n.Table__pageButton {\n  font-size: 15px;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.Table__pageButton:disabled {\n  cursor: not-allowed;\n  color: gray;\n}\n\n.Table__pageButton--active {\n  color: #45b3e3;\n  font-weight: bold;\n}\n";
styleInject(css_248z);

var defaultButton = function defaultButton(props) {
  return /*#__PURE__*/React__default['default'].createElement("button", props, props.children);
};

var CustomPagination = /*#__PURE__*/function (_React$Component) {
  _inherits(CustomPagination, _React$Component);

  var _super = _createSuper(CustomPagination);

  function CustomPagination(props) {
    var _this;

    _classCallCheck(this, CustomPagination);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "filterPages", function (visiblePages, totalPages) {
      return visiblePages.filter(function (page) {
        return page <= totalPages;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getVisiblePages", function (page, total) {
      if (total < 7) {
        return _this.filterPages([1, 2, 3, 4, 5, 6], total);
      } else {
        if (page % 5 >= 0 && page > 4 && page + 2 < total) {
          return [1, page - 1, page, page + 1, total];
        } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
          return [1, total - 3, total - 2, total - 1, total];
        } else {
          return [1, 2, 3, 4, 5, total];
        }
      }
    });

    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.state = {
      visiblePages: _this.getVisiblePages(null, props.pages)
    };
    return _this;
  }

  _createClass(CustomPagination, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.pages !== nextProps.pages) {
        this.setState({
          visiblePages: this.getVisiblePages(null, nextProps.pages)
        });
      }

      this.changePage(nextProps.page + 1);
    }
  }, {
    key: "changePage",
    value: function changePage(page) {
      var activePage = this.props.page + 1;

      if (page === activePage) {
        return;
      }

      var visiblePages = this.getVisiblePages(page, this.props.pages);
      this.setState({
        visiblePages: this.filterPages(visiblePages, this.props.pages)
      });
      this.props.onPageChange(page - 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$PageButto = this.props.PageButtonComponent,
          PageButtonComponent = _this$props$PageButto === void 0 ? defaultButton : _this$props$PageButto;
      var visiblePages = this.state.visiblePages;
      var activePage = this.props.page + 1;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "Table__pagination"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "Table__prevPageWrapper"
      }, /*#__PURE__*/React__default['default'].createElement(PageButtonComponent, {
        className: "Table__pageButton",
        onClick: function onClick() {
          if (activePage === 1) return;

          _this2.changePage(activePage - 1);
        },
        disabled: activePage === 1
      }, this.props.previousText)), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "Table__visiblePagesWrapper"
      }, visiblePages.map(function (page, index, array) {
        return /*#__PURE__*/React__default['default'].createElement(PageButtonComponent, {
          key: page,
          className: activePage === page ? "Table__pageButton Table__pageButton--active" : "Table__pageButton",
          onClick: _this2.changePage.bind(null, page)
        }, array[index - 1] + 2 < page ? "...".concat(page) : page);
      })), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "Table__nextPageWrapper"
      }, /*#__PURE__*/React__default['default'].createElement(PageButtonComponent, {
        className: "Table__pageButton",
        onClick: function onClick() {
          if (activePage === _this2.props.pages) return;

          _this2.changePage(activePage + 1);
        },
        disabled: activePage === this.props.pages
      }, this.props.nextText)));
    }
  }]);

  return CustomPagination;
}(React__default['default'].Component);

_defineProperty(CustomPagination, "propTypes", {
  pages: PropTypes__default['default'].number,
  page: PropTypes__default['default'].number,
  PageButtonComponent: PropTypes__default['default'].any,
  onPageChange: PropTypes__default['default'].func,
  previousText: PropTypes__default['default'].string,
  nextText: PropTypes__default['default'].string
});

var TooltipStyle = function TooltipStyle(theme) {
  return {
    tooltip: {
      padding: "10px 15px",
      minWidth: "130px",
      color: "#FFFFFF",
      lineHeight: "1.7em",
      background: "rgba(85,85,85,0.9)",
      border: "none",
      borderRadius: "3px",
      opacity: "1!important",
      boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
      maxWidth: "200px",
      textAlign: "center",
      fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "400",
      textShadow: "none",
      textTransform: "none",
      letterSpacing: "normal",
      wordBreak: "normal",
      wordSpacing: "normal",
      wordWrap: "normal",
      whiteSpace: "normal",
      lineBreak: "auto"
    }
  };
};

exports.BlockComponent = BlockComponent$1;
exports.Button = Button$1;
exports.Card = Card$1;
exports.CardBody = CardBody$1;
exports.CardFooter = CardFooter$3;
exports.CardHeader = CardHeader$1;
exports.CardIcon = CardIcon$1;
exports.ConfirmItemComponent = ConfirmItemComponent;
exports.CustomInput = CustomInput$1;
exports.CustomPagination = CustomPagination;
exports.Dialog = Dialog$1;
exports.DialogMessagge = DialogMessage;
exports.FormStyle = FormsStyle;
exports.Grid = GridContainer$1;
exports.GridContainer = GridContainer$1;
exports.GridItem = GridItem$1;
exports.Header = Header$1;
exports.LoginComponent = LoginComponent$1;
exports.MessageComponent = MessageComponent$1;
exports.NavPath = index;
exports.PageStyle = PageStyle;
exports.Register = RegisterComponent$1;
exports.RemoveItemComponent = RemoveItemComponent;
exports.ResetComponent = ResetComponent$1;
exports.SpinnerComponent = SpinnerComponent;
exports.TooltipStyle = TooltipStyle;
