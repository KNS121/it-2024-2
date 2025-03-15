(function (redom, AuthForm) {
  'use strict';

  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var LoginPage = /*#__PURE__*/function () {
    function LoginPage() {
      _classCallCheck(this, LoginPage);
      this.form = new AuthForm({
        isLogin: true
      });
      this.el = redom.el('.container.d-flex.justify-content-center.align-items-center.vh-100', redom.el('.card.p-4', {
        style: 'max-width: 400px'
      }, redom.el('h2.card-title.text-center.mb-4', 'Вход'), this.form.el));
      this._initEvents();
    }
    return _createClass(LoginPage, [{
      key: "_initEvents",
      value: function _initEvents() {
        var _this = this;
        this.form.el.addEventListener('submit', function (e) {
          e.preventDefault();
          if (_this.form.validate()) {
            window.location.href = 'doing_list.html';
          }
        });
      }
    }]);
  }();

  redom.mount(document.getElementById('app'), new LoginPage());

})(redom, AuthForm);
//# sourceMappingURL=login.bundle.js.map
