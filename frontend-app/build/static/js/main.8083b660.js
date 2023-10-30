/*! For license information please see main.8083b660.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      110: function (e, t, n) {
        var r = n(309),
          a = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          l = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          i = {};
        function u(e) {
          return r.isMemo(e) ? l : i[e.$$typeof] || a;
        }
        (i[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (i[r.Memo] = l);
        var c = Object.defineProperty,
          s = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          f = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          v = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (v) {
              var a = p(n);
              a && a !== v && e(t, a, r);
            }
            var l = s(n);
            d && (l = l.concat(d(n)));
            for (var i = u(t), m = u(n), h = 0; h < l.length; ++h) {
              var g = l[h];
              if (!o[g] && (!r || !r[g]) && (!m || !m[g]) && (!i || !i[g])) {
                var y = f(n, g);
                try {
                  c(t, g, y);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      746: function (e, t) {
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          a = n ? Symbol.for("react.portal") : 60106,
          o = n ? Symbol.for("react.fragment") : 60107,
          l = n ? Symbol.for("react.strict_mode") : 60108,
          i = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
          c = n ? Symbol.for("react.context") : 60110,
          s = n ? Symbol.for("react.async_mode") : 60111,
          d = n ? Symbol.for("react.concurrent_mode") : 60111,
          f = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          v = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          h = n ? Symbol.for("react.lazy") : 60116,
          g = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          w = n ? Symbol.for("react.scope") : 60119;
        function S(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case s:
                  case d:
                  case o:
                  case i:
                  case l:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case f:
                      case h:
                      case m:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        function k(e) {
          return S(e) === d;
        }
        (t.AsyncMode = s),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = c),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = f),
          (t.Fragment = o),
          (t.Lazy = h),
          (t.Memo = m),
          (t.Portal = a),
          (t.Profiler = i),
          (t.StrictMode = l),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return k(e) || S(e) === s;
          }),
          (t.isConcurrentMode = k),
          (t.isContextConsumer = function (e) {
            return S(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return S(e) === u;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return S(e) === f;
          }),
          (t.isFragment = function (e) {
            return S(e) === o;
          }),
          (t.isLazy = function (e) {
            return S(e) === h;
          }),
          (t.isMemo = function (e) {
            return S(e) === m;
          }),
          (t.isPortal = function (e) {
            return S(e) === a;
          }),
          (t.isProfiler = function (e) {
            return S(e) === i;
          }),
          (t.isStrictMode = function (e) {
            return S(e) === l;
          }),
          (t.isSuspense = function (e) {
            return S(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === o ||
              e === d ||
              e === i ||
              e === l ||
              e === p ||
              e === v ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === h ||
                  e.$$typeof === m ||
                  e.$$typeof === u ||
                  e.$$typeof === c ||
                  e.$$typeof === f ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = S);
      },
      309: function (e, t, n) {
        e.exports = n(746);
      },
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var s = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          v = {};
        function m(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var h = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            h[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            h[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              h[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            h[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              h[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            h[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            h[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            h[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            h[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = h.hasOwnProperty(t) ? h[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(v, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (v[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            h[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              h[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            h[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            h[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (h.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            h[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          x = Symbol.for("react.fragment"),
          C = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          P = Symbol.for("react.provider"),
          z = Symbol.for("react.context"),
          A = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          I = Symbol.for("react.memo"),
          N = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var D = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var B = Symbol.iterator;
        function R(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (B && e[B]) || e["@@iterator"])
            ? e
            : null;
        }
        var O,
          F = Object.assign;
        function L(e) {
          if (void 0 === O)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              O = (t && t[1]) || "";
            }
          return "\n" + O + e;
        }
        var M = !1;
        function j(e, t) {
          if (!e || M) return "";
          M = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var u = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (M = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? L(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return L(e.type);
            case 16:
              return L("Lazy");
            case 13:
              return L("Suspense");
            case 19:
              return L("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = j(e.type, !1));
            case 11:
              return (e = j(e.type.render, !1));
            case 1:
              return (e = j(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case x:
              return "Fragment";
            case k:
              return "Portal";
            case E:
              return "Profiler";
            case C:
              return "StrictMode";
            case _:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case z:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case A:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case I:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case N:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return W(t);
            case 8:
              return t === C ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function U(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function K(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = K(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function $(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = K(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = U(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Y(e, t) {
          J(e, t);
          var n = U(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, U(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + U(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: U(n) };
        }
        function oe(e, t) {
          var n = U(t.value),
            r = U(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          se,
          de =
            ((se = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return se(e, t);
                  });
                }
              : se);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          ve = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function he(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          ve.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          xe = null,
          Ce = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = Sa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Pe(e) {
          xe ? (Ce ? Ce.push(e) : (Ce = [e])) : (xe = e);
        }
        function ze() {
          if (xe) {
            var e = xe,
              t = Ce;
            if (((Ce = xe = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Ae(e, t) {
          return e(t);
        }
        function _e() {}
        var Te = !1;
        function Ie(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Ae(e, t, n);
          } finally {
            (Te = !1), (null !== xe || null !== Ce) && (_e(), ze());
          }
        }
        function Ne(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Sa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var De = !1;
        if (s)
          try {
            var Be = {};
            Object.defineProperty(Be, "passive", {
              get: function () {
                De = !0;
              },
            }),
              window.addEventListener("test", Be, Be),
              window.removeEventListener("test", Be, Be);
          } catch (se) {
            De = !1;
          }
        function Re(e, t, n, r, a, o, l, i, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (s) {
            this.onError(s);
          }
        }
        var Oe = !1,
          Fe = null,
          Le = !1,
          Me = null,
          je = {
            onError: function (e) {
              (Oe = !0), (Fe = e);
            },
          };
        function He(e, t, n, r, a, o, l, i, u) {
          (Oe = !1), (Fe = null), Re.apply(je, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ue(e) {
          if (We(e) !== e) throw Error(o(188));
        }
        function Ke(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return Ue(a), e;
                    if (l === r) return Ue(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var $e = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Xe = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Je = a.unstable_now,
          Ye = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var ct = 64,
          st = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = dt(i)) : 0 !== (o &= l) && (r = dt(o));
          } else 0 !== (l = n & ~a) ? (r = dt(l)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function vt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function ht(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          kt,
          xt,
          Ct,
          Et,
          Pt = !1,
          zt = [],
          At = null,
          _t = null,
          Tt = null,
          It = new Map(),
          Nt = new Map(),
          Dt = [],
          Bt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Rt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              At = null;
              break;
            case "dragenter":
            case "dragleave":
              _t = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              It.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nt.delete(t.pointerId);
          }
        }
        function Ot(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      xt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Lt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Mt(e, t, n) {
          Lt(e) && n.delete(t);
        }
        function jt() {
          (Pt = !1),
            null !== At && Lt(At) && (At = null),
            null !== _t && Lt(_t) && (_t = null),
            null !== Tt && Lt(Tt) && (Tt = null),
            It.forEach(Mt),
            Nt.forEach(Mt);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Pt ||
              ((Pt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, jt)));
        }
        function Wt(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < zt.length) {
            Ht(zt[0], e);
            for (var n = 1; n < zt.length; n++) {
              var r = zt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== At && Ht(At, e),
              null !== _t && Ht(_t, e),
              null !== Tt && Ht(Tt, e),
              It.forEach(t),
              Nt.forEach(t),
              n = 0;
            n < Dt.length;
            n++
          )
            (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Dt.shift();
        }
        var Vt = w.ReactCurrentBatchConfig,
          Ut = !0;
        function Kt(e, t, n, r) {
          var a = bt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), $t(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), $t(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = o);
          }
        }
        function $t(e, t, n, r) {
          if (Ut) {
            var a = Xt(e, t, n, r);
            if (null === a) Ur(e, t, r, qt, n), Rt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (At = Ot(At, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (_t = Ot(_t, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Tt = Ot(Tt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return It.set(o, Ot(It.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Nt.set(o, Ot(Nt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rt(e, r), 4 & t && -1 < Bt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && St(o),
                  null === (o = Xt(e, t, n, r)) && Ur(e, t, r, qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Ur(e, t, r, null, n);
          }
        }
        var qt = null;
        function Xt(e, t, n, r) {
          if (((qt = null), null !== (e = ya((e = Se(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Gt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ye()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Yt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Yt,
            r = n.length,
            a = "value" in Jt ? Jt.value : Jt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          sn = an(cn),
          dn = F({}, cn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = F({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          vn = an(pn),
          mn = an(F({}, pn, { dataTransfer: 0 })),
          hn = an(F({}, dn, { relatedTarget: 0 })),
          gn = an(
            F({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = F({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(F({}, cn, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          xn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Cn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = xn[e]) && !!t[e];
        }
        function En() {
          return Cn;
        }
        var Pn = F({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          zn = an(Pn),
          An = an(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          _n = an(
            F({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Tn = an(
            F({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          In = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Nn = an(In),
          Dn = [9, 13, 27, 32],
          Bn = s && "CompositionEvent" in window,
          Rn = null;
        s && "documentMode" in document && (Rn = document.documentMode);
        var On = s && "TextEvent" in window && !Rn,
          Fn = s && (!Bn || (Rn && 8 < Rn && 11 >= Rn)),
          Ln = String.fromCharCode(32),
          Mn = !1;
        function jn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Dn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Un(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Kn(e, t, n, r) {
          Pe(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new sn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          $n = null;
        function qn(e) {
          Lr(e, 0);
        }
        function Xn(e) {
          if ($(wa(e))) return e;
        }
        function Gn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (s) {
          var Yn;
          if (s) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Yn = Zn;
          } else Yn = !1;
          Jn = Yn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), ($n = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Xn($n)) {
            var t = [];
            Kn(t, $n, e, Se(e)), Ie(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), ($n = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn($n);
        }
        function or(e, t) {
          if ("click" === e) return Xn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sr(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function vr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = sr(n, o));
                var l = sr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = s && "documentMode" in document && 11 >= document.documentMode,
          hr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == hr ||
            hr !== q(r) ||
            ("selectionStart" in (r = hr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(gr, "onSelect")).length &&
                ((t = new sn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = hr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          xr = {},
          Cr = {};
        function Er(e) {
          if (xr[e]) return xr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Cr) return (xr[e] = n[t]);
          return e;
        }
        s &&
          ((Cr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Pr = Er("animationend"),
          zr = Er("animationiteration"),
          Ar = Er("animationstart"),
          _r = Er("transitionend"),
          Tr = new Map(),
          Ir =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Nr(e, t) {
          Tr.set(e, t), u(t, [e]);
        }
        for (var Dr = 0; Dr < Ir.length; Dr++) {
          var Br = Ir[Dr];
          Nr(Br.toLowerCase(), "on" + (Br[0].toUpperCase() + Br.slice(1)));
        }
        Nr(Pr, "onAnimationEnd"),
          Nr(zr, "onAnimationIteration"),
          Nr(Ar, "onAnimationStart"),
          Nr("dblclick", "onDoubleClick"),
          Nr("focusin", "onFocus"),
          Nr("focusout", "onBlur"),
          Nr(_r, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Rr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Or = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Rr)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, i, u, c) {
              if ((He.apply(this, arguments), Oe)) {
                if (!Oe) throw Error(o(198));
                var s = Fe;
                (Oe = !1), (Fe = null), Le || ((Le = !0), (Me = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Lr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    c = i.currentTarget;
                  if (((i = i.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Fr(a, i, c), (o = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (c = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, i, c), (o = u);
                }
            }
          }
          if (Le) throw ((e = Me), (Le = !1), (Me = null), e);
        }
        function Mr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function jr(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Hr = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Or.has(t) || jr(t, !1, e), jr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), jr("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var a = Kt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = $t;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !De ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Ur(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = ya(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Ie(function () {
            var r = o,
              a = Se(n),
              l = [];
            e: {
              var i = Tr.get(e);
              if (void 0 !== i) {
                var u = sn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = zn;
                    break;
                  case "focusin":
                    (c = "focus"), (u = hn);
                    break;
                  case "focusout":
                    (c = "blur"), (u = hn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = hn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = vn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = _n;
                    break;
                  case Pr:
                  case zr:
                  case Ar:
                    u = gn;
                    break;
                  case _r:
                    u = Tn;
                    break;
                  case "scroll":
                    u = fn;
                    break;
                  case "wheel":
                    u = Nn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = An;
                }
                var s = 0 !== (4 & t),
                  d = !s && "scroll" === e,
                  f = s ? (null !== i ? i + "Capture" : null) : i;
                s = [];
                for (var p, v = r; null !== v; ) {
                  var m = (p = v).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Ne(v, f)) &&
                        s.push(Kr(v, m, p))),
                    d)
                  )
                    break;
                  v = v.return;
                }
                0 < s.length &&
                  ((i = new u(i, c, null, n, a)),
                  l.push({ event: i, listeners: s }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ya(c) && !c[va])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? ya(c)
                          : null) &&
                        (c !== (d = We(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((s = vn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (v = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = An),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (v = "pointer")),
                  (d = null == u ? i : wa(u)),
                  (p = null == c ? i : wa(c)),
                  ((i = new s(m, v + "leave", u, n, a)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((s = new s(f, v + "enter", c, n, a)).target = p),
                    (s.relatedTarget = d),
                    (m = s)),
                  (d = m),
                  u && c)
                )
                  e: {
                    for (f = c, v = 0, p = s = u; p; p = $r(p)) v++;
                    for (p = 0, m = f; m; m = $r(m)) p++;
                    for (; 0 < v - p; ) (s = $r(s)), v--;
                    for (; 0 < p - v; ) (f = $r(f)), p--;
                    for (; v--; ) {
                      if (s === f || (null !== f && s === f.alternate)) break e;
                      (s = $r(s)), (f = $r(f));
                    }
                    s = null;
                  }
                else s = null;
                null !== u && qr(l, i, u, s, !1),
                  null !== c && null !== d && qr(l, d, c, s, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var h = Gn;
              else if (Un(i))
                if (Jn) h = lr;
                else {
                  h = ar;
                  var g = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (h = or);
              switch (
                (h && (h = h(e, r))
                  ? Kn(l, h, n, a)
                  : (g && g(e, i, r),
                    "focusout" === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Un(g) || "true" === g.contentEditable) &&
                    ((hr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = hr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(l, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(l, n, a);
              }
              var y;
              if (Bn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? jn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Wn && (y = en())
                    : ((Yt = "value" in (Jt = a) ? Jt.value : Jt.textContent),
                      (Wn = !0))),
                0 < (g = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  l.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = On
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Mn = !0), Ln);
                        case "textInput":
                          return (e = t.data) === Ln && Mn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!Bn && jn(e, t))
                          ? ((e = en()), (Zt = Yt = Jt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Lr(l, t);
          });
        }
        function Kr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Ne(e, n)) && r.unshift(Kr(e, o, a)),
              null != (o = Ne(e, t)) && r.push(Kr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function $r(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              c = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== c &&
              ((i = c),
              a
                ? null != (u = Ne(n, o)) && l.unshift(Kr(n, u, i))
                : a || (null != (u = Ne(n, o)) && l.push(Kr(n, u, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Xr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xr, "\n")
            .replace(Gr, "");
        }
        function Yr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Wt(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function sa(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          va = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ha = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[va] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sa(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = sa(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[va]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function Sa(e) {
          return e[pa] || null;
        }
        var ka = [],
          xa = -1;
        function Ca(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > xa || ((e.current = ka[xa]), (ka[xa] = null), xa--);
        }
        function Pa(e, t) {
          xa++, (ka[xa] = e.current), (e.current = t);
        }
        var za = {},
          Aa = Ca(za),
          _a = Ca(!1),
          Ta = za;
        function Ia(e, t) {
          var n = e.type.contextTypes;
          if (!n) return za;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Na(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Da() {
          Ea(_a), Ea(Aa);
        }
        function Ba(e, t, n) {
          if (Aa.current !== za) throw Error(o(168));
          Pa(Aa, t), Pa(_a, n);
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, V(e) || "Unknown", a));
          return F({}, n, r);
        }
        function Oa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              za),
            (Ta = Aa.current),
            Pa(Aa, e),
            Pa(_a, _a.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Ra(e, t, Ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(_a),
              Ea(Aa),
              Pa(Aa, e))
            : Ea(_a),
            Pa(_a, n);
        }
        var La = null,
          Ma = !1,
          ja = !1;
        function Ha(e) {
          null === La ? (La = [e]) : La.push(e);
        }
        function Wa() {
          if (!ja && null !== La) {
            ja = !0;
            var e = 0,
              t = bt;
            try {
              var n = La;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (La = null), (Ma = !1);
            } catch (a) {
              throw (null !== La && (La = La.slice(e + 1)), $e(Ze, Wa), a);
            } finally {
              (bt = t), (ja = !1);
            }
          }
          return null;
        }
        var Va = [],
          Ua = 0,
          Ka = null,
          Qa = 0,
          $a = [],
          qa = 0,
          Xa = null,
          Ga = 1,
          Ja = "";
        function Ya(e, t) {
          (Va[Ua++] = Qa), (Va[Ua++] = Ka), (Ka = e), (Qa = t);
        }
        function Za(e, t, n) {
          ($a[qa++] = Ga), ($a[qa++] = Ja), ($a[qa++] = Xa), (Xa = e);
          var r = Ga;
          e = Ja;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ga = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Ja = o + e);
          } else (Ga = (1 << o) | (n << a) | r), (Ja = e);
        }
        function eo(e) {
          null !== e.return && (Ya(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Ka; )
            (Ka = Va[--Ua]), (Va[Ua] = null), (Qa = Va[--Ua]), (Va[Ua] = null);
          for (; e === Xa; )
            (Xa = $a[--qa]),
              ($a[qa] = null),
              (Ja = $a[--qa]),
              ($a[qa] = null),
              (Ga = $a[--qa]),
              ($a[qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function lo(e, t) {
          var n = Nc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xa ? { id: Ga, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Nc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function co(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!io(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = ca(n.nextSibling);
                var r = no;
                t && io(e, t)
                  ? lo(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function so(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return so(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) lo(e, t), (t = ca(t.nextSibling));
          }
          if ((so(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ca(e.nextSibling);
        }
        function vo() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var ho = w.ReactCurrentBatchConfig;
        function go(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yo = Ca(null),
          bo = null,
          wo = null,
          So = null;
        function ko() {
          So = wo = bo = null;
        }
        function xo(e) {
          var t = yo.current;
          Ea(yo), (e._currentValue = t);
        }
        function Co(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Eo(e, t) {
          (bo = e),
            (So = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wi = !0), (e.firstContext = null));
        }
        function Po(e) {
          var t = e._currentValue;
          if (So !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var zo = null;
        function Ao(e) {
          null === zo ? (zo = [e]) : zo.push(e);
        }
        function _o(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ao(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            To(e, r)
          );
        }
        function To(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Io = !1;
        function No(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Do(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Bo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ro(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _u))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              To(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ao(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            To(e, n)
          );
        }
        function Oo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Fo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Lo(e, t, n, r) {
          var a = e.updateQueue;
          Io = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              c = u.next;
            (u.next = null), null === l ? (o = c) : (l.next = c), (l = u);
            var s = e.alternate;
            null !== s &&
              (i = (s = s.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (s.firstBaseUpdate = c) : (i.next = c),
              (s.lastBaseUpdate = u));
          }
          if (null !== o) {
            var d = a.baseState;
            for (l = 0, s = c = u = null, i = o; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((r & f) === f) {
                null !== s &&
                  (s = s.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var v = e,
                    m = i;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (v = m.payload)) {
                        d = v.call(p, d, f);
                        break e;
                      }
                      d = v;
                      break e;
                    case 3:
                      v.flags = (-65537 & v.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (v = m.payload)
                              ? v.call(p, d, f)
                              : v) ||
                        void 0 === f
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      Io = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === s ? ((c = s = p), (u = d)) : (s = s.next = p),
                  (l |= f);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === s && (u = d),
              (a.baseState = u),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = s),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Fu |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function Mo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var jo = new r.Component().refs;
        function Ho(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Wo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              o = Bo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Ro(e, o, a)) && (rc(t, e, a, r), Oo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              o = Bo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Ro(e, o, a)) && (rc(t, e, a, r), Oo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tc(),
              r = nc(e),
              a = Bo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ro(e, a, r)) && (rc(t, e, r, n), Oo(t, e, r));
          },
        };
        function Vo(e, t, n, r, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function Uo(e, t, n) {
          var r = !1,
            a = za,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Po(o))
              : ((a = Na(t) ? Ta : Aa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ia(e, a)
                  : za)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Wo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Ko(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
        }
        function Qo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = jo), No(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Po(o))
            : ((o = Na(t) ? Ta : Aa.current), (a.context = Ia(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Ho(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Wo.enqueueReplaceState(a, a.state, null),
              Lo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function $o(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === jo && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Xo(e) {
          return (0, e._init)(e._payload);
        }
        function Go(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Bc(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Lc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === x
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === N &&
                    Xo(o) === t.type))
              ? (((r = a(t, n.props)).ref = $o(e, t, n)), (r.return = e), r)
              : (((r = Rc(n.type, n.key, n.props, null, e.mode, r)).ref = $o(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Mc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Oc(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Lc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Rc(t.type, t.key, t.props, null, e.mode, n)).ref = $o(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Mc(t, e.mode, n)).return = e), t;
                case N:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || R(t))
                return ((t = Oc(t, e.mode, n, null)).return = e), t;
              qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case k:
                  return n.key === a ? s(e, t, n, r) : null;
                case N:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || R(n)) return null !== a ? null : d(e, t, n, r, null);
              qo(e, n);
            }
            return null;
          }
          function v(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case N:
                  return v(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || R(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              qo(t, r);
            }
            return null;
          }
          function m(a, o, i, u) {
            for (
              var c = null, s = null, d = o, m = (o = 0), h = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((h = d), (d = null)) : (h = d.sibling);
              var g = p(a, d, i[m], u);
              if (null === g) {
                null === d && (d = h);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (o = l(g, o, m)),
                null === s ? (c = g) : (s.sibling = g),
                (s = g),
                (d = h);
            }
            if (m === i.length) return n(a, d), ao && Ya(a, m), c;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], u)) &&
                  ((o = l(d, o, m)),
                  null === s ? (c = d) : (s.sibling = d),
                  (s = d));
              return ao && Ya(a, m), c;
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (h = v(d, a, m, i[m], u)) &&
                (e &&
                  null !== h.alternate &&
                  d.delete(null === h.key ? m : h.key),
                (o = l(h, o, m)),
                null === s ? (c = h) : (s.sibling = h),
                (s = h));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ya(a, m),
              c
            );
          }
          function h(a, i, u, c) {
            var s = R(u);
            if ("function" !== typeof s) throw Error(o(150));
            if (null == (u = s.call(u))) throw Error(o(151));
            for (
              var d = (s = null), m = i, h = (i = 0), g = null, y = u.next();
              null !== m && !y.done;
              h++, y = u.next()
            ) {
              m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, c);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = l(b, i, h)),
                null === d ? (s = b) : (d.sibling = b),
                (d = b),
                (m = g);
            }
            if (y.done) return n(a, m), ao && Ya(a, h), s;
            if (null === m) {
              for (; !y.done; h++, y = u.next())
                null !== (y = f(a, y.value, c)) &&
                  ((i = l(y, i, h)),
                  null === d ? (s = y) : (d.sibling = y),
                  (d = y));
              return ao && Ya(a, h), s;
            }
            for (m = r(a, m); !y.done; h++, y = u.next())
              null !== (y = v(m, a, h, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? h : y.key),
                (i = l(y, i, h)),
                null === d ? (s = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ya(a, h),
              s
            );
          }
          return function e(r, o, l, u) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === x &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case S:
                  e: {
                    for (var c = l.key, s = o; null !== s; ) {
                      if (s.key === c) {
                        if ((c = l.type) === x) {
                          if (7 === s.tag) {
                            n(r, s.sibling),
                              ((o = a(s, l.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          s.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === N &&
                            Xo(c) === s.type)
                        ) {
                          n(r, s.sibling),
                            ((o = a(s, l.props)).ref = $o(r, s, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, s);
                        break;
                      }
                      t(r, s), (s = s.sibling);
                    }
                    l.type === x
                      ? (((o = Oc(l.props.children, r.mode, u, l.key)).return =
                          r),
                        (r = o))
                      : (((u = Rc(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          u
                        )).ref = $o(r, o, l)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case k:
                  e: {
                    for (s = l.key; null !== o; ) {
                      if (o.key === s) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Mc(l, r.mode, u)).return = r), (r = o);
                  }
                  return i(r);
                case N:
                  return e(r, o, (s = l._init)(l._payload), u);
              }
              if (te(l)) return m(r, o, l, u);
              if (R(l)) return h(r, o, l, u);
              qo(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Lc(l, r.mode, u)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var Jo = Go(!0),
          Yo = Go(!1),
          Zo = {},
          el = Ca(Zo),
          tl = Ca(Zo),
          nl = Ca(Zo);
        function rl(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function al(e, t) {
          switch ((Pa(nl, t), Pa(tl, e), Pa(el, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea(el), Pa(el, t);
        }
        function ol() {
          Ea(el), Ea(tl), Ea(nl);
        }
        function ll(e) {
          rl(nl.current);
          var t = rl(el.current),
            n = ue(t, e.type);
          t !== n && (Pa(tl, e), Pa(el, n));
        }
        function il(e) {
          tl.current === e && (Ea(el), Ea(tl));
        }
        var ul = Ca(0);
        function cl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var sl = [];
        function dl() {
          for (var e = 0; e < sl.length; e++)
            sl[e]._workInProgressVersionPrimary = null;
          sl.length = 0;
        }
        var fl = w.ReactCurrentDispatcher,
          pl = w.ReactCurrentBatchConfig,
          vl = 0,
          ml = null,
          hl = null,
          gl = null,
          yl = !1,
          bl = !1,
          wl = 0,
          Sl = 0;
        function kl() {
          throw Error(o(321));
        }
        function xl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function Cl(e, t, n, r, a, l) {
          if (
            ((vl = l),
            (ml = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fl.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            bl)
          ) {
            l = 0;
            do {
              if (((bl = !1), (wl = 0), 25 <= l)) throw Error(o(301));
              (l += 1),
                (gl = hl = null),
                (t.updateQueue = null),
                (fl.current = ci),
                (e = n(r, a));
            } while (bl);
          }
          if (
            ((fl.current = li),
            (t = null !== hl && null !== hl.next),
            (vl = 0),
            (gl = hl = ml = null),
            (yl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function El() {
          var e = 0 !== wl;
          return (wl = 0), e;
        }
        function Pl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gl ? (ml.memoizedState = gl = e) : (gl = gl.next = e), gl
          );
        }
        function zl() {
          if (null === hl) {
            var e = ml.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = hl.next;
          var t = null === gl ? ml.memoizedState : gl.next;
          if (null !== t) (gl = t), (hl = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (hl = e).memoizedState,
              baseState: hl.baseState,
              baseQueue: hl.baseQueue,
              queue: hl.queue,
              next: null,
            }),
              null === gl ? (ml.memoizedState = gl = e) : (gl = gl.next = e);
          }
          return gl;
        }
        function Al(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function _l(e) {
          var t = zl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = hl,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var u = (i = null),
              c = null,
              s = l;
            do {
              var d = s.lane;
              if ((vl & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.hasEagerState ? s.eagerState : e(r, s.action));
              else {
                var f = {
                  lane: d,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === c ? ((u = c = f), (i = r)) : (c = c.next = f),
                  (ml.lanes |= d),
                  (Fu |= d);
              }
              s = s.next;
            } while (null !== s && s !== l);
            null === c ? (i = r) : (c.next = u),
              ir(r, t.memoizedState) || (wi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (ml.lanes |= l), (Fu |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Tl(e) {
          var t = zl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, t.memoizedState) || (wi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Il() {}
        function Nl(e, t) {
          var n = ml,
            r = zl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (wi = !0)),
            (r = r.queue),
            Ul(Rl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== gl && 1 & gl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ml(9, Bl.bind(null, n, r, a, t), void 0, null),
              null === Tu)
            )
              throw Error(o(349));
            0 !== (30 & vl) || Dl(n, t, a);
          }
          return a;
        }
        function Dl(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ml.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ml.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Bl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ol(t) && Fl(e);
        }
        function Rl(e, t, n) {
          return n(function () {
            Ol(t) && Fl(e);
          });
        }
        function Ol(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Fl(e) {
          var t = To(e, 1);
          null !== t && rc(t, e, 1, -1);
        }
        function Ll(e) {
          var t = Pl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Al,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, ml, e)),
            [t.memoizedState, e]
          );
        }
        function Ml(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ml.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ml.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function jl() {
          return zl().memoizedState;
        }
        function Hl(e, t, n, r) {
          var a = Pl();
          (ml.flags |= e),
            (a.memoizedState = Ml(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Wl(e, t, n, r) {
          var a = zl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== hl) {
            var l = hl.memoizedState;
            if (((o = l.destroy), null !== r && xl(r, l.deps)))
              return void (a.memoizedState = Ml(t, n, o, r));
          }
          (ml.flags |= e), (a.memoizedState = Ml(1 | t, n, o, r));
        }
        function Vl(e, t) {
          return Hl(8390656, 8, e, t);
        }
        function Ul(e, t) {
          return Wl(2048, 8, e, t);
        }
        function Kl(e, t) {
          return Wl(4, 2, e, t);
        }
        function Ql(e, t) {
          return Wl(4, 4, e, t);
        }
        function $l(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function ql(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Wl(4, 4, $l.bind(null, t, e), n)
          );
        }
        function Xl() {}
        function Gl(e, t) {
          var n = zl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Jl(e, t) {
          var n = zl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Yl(e, t, n) {
          return 0 === (21 & vl)
            ? (e.baseState && ((e.baseState = !1), (wi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (ml.lanes |= n), (Fu |= n), (e.baseState = !0)),
              t);
        }
        function Zl(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pl.transition;
          pl.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pl.transition = r);
          }
        }
        function ei() {
          return zl().memoizedState;
        }
        function ti(e, t, n) {
          var r = nc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n);
          else if (null !== (n = _o(e, t, n, r))) {
            rc(n, e, r, tc()), oi(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = nc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Ao(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = _o(e, t, a, r)) &&
              (rc(n, e, r, (a = tc())), oi(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === ml || (null !== t && t === ml);
        }
        function ai(e, t) {
          bl = yl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function oi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var li = {
            readContext: Po,
            useCallback: kl,
            useContext: kl,
            useEffect: kl,
            useImperativeHandle: kl,
            useInsertionEffect: kl,
            useLayoutEffect: kl,
            useMemo: kl,
            useReducer: kl,
            useRef: kl,
            useState: kl,
            useDebugValue: kl,
            useDeferredValue: kl,
            useTransition: kl,
            useMutableSource: kl,
            useSyncExternalStore: kl,
            useId: kl,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Po,
            useCallback: function (e, t) {
              return (Pl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Po,
            useEffect: Vl,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Hl(4194308, 4, $l.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Hl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Hl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Pl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Pl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, ml, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Pl().memoizedState = e);
            },
            useState: Ll,
            useDebugValue: Xl,
            useDeferredValue: function (e) {
              return (Pl().memoizedState = e);
            },
            useTransition: function () {
              var e = Ll(!1),
                t = e[0];
              return (
                (e = Zl.bind(null, e[1])), (Pl().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ml,
                a = Pl();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Tu)) throw Error(o(349));
                0 !== (30 & vl) || Dl(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Vl(Rl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Ml(9, Bl.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Pl(),
                t = Tu.identifierPrefix;
              if (ao) {
                var n = Ja;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ga & ~(1 << (32 - lt(Ga) - 1))).toString(32) + n)),
                  0 < (n = wl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = Sl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: Po,
            useCallback: Gl,
            useContext: Po,
            useEffect: Ul,
            useImperativeHandle: ql,
            useInsertionEffect: Kl,
            useLayoutEffect: Ql,
            useMemo: Jl,
            useReducer: _l,
            useRef: jl,
            useState: function () {
              return _l(Al);
            },
            useDebugValue: Xl,
            useDeferredValue: function (e) {
              return Yl(zl(), hl.memoizedState, e);
            },
            useTransition: function () {
              return [_l(Al)[0], zl().memoizedState];
            },
            useMutableSource: Il,
            useSyncExternalStore: Nl,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          ci = {
            readContext: Po,
            useCallback: Gl,
            useContext: Po,
            useEffect: Ul,
            useImperativeHandle: ql,
            useInsertionEffect: Kl,
            useLayoutEffect: Ql,
            useMemo: Jl,
            useReducer: Tl,
            useRef: jl,
            useState: function () {
              return Tl(Al);
            },
            useDebugValue: Xl,
            useDeferredValue: function (e) {
              var t = zl();
              return null === hl
                ? (t.memoizedState = e)
                : Yl(t, hl.memoizedState, e);
            },
            useTransition: function () {
              return [Tl(Al)[0], zl().memoizedState];
            },
            useMutableSource: Il,
            useSyncExternalStore: Nl,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function si(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function di(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fi(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map;
        function vi(e, t, n) {
          ((n = Bo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ku || ((Ku = !0), (Qu = r)), fi(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = Bo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fi(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                fi(0, t),
                  "function" !== typeof r &&
                    (null === $u ? ($u = new Set([this])) : $u.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function hi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Pc.bind(null, e, t, n)), t.then(e, e));
        }
        function gi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Bo(-1, 1)).tag = 2), Ro(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = w.ReactCurrentOwner,
          wi = !1;
        function Si(e, t, n, r) {
          t.child = null === e ? Yo(t, null, n, r) : Jo(t, e.child, n, r);
        }
        function ki(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Eo(t, a),
            (r = Cl(e, t, n, r, o, a)),
            (n = El()),
            null === e || wi
              ? (ao && n && eo(t), (t.flags |= 1), Si(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ki(e, t, a))
          );
        }
        function xi(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Dc(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Rc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ci(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(l, r) &&
              e.ref === t.ref
            )
              return Ki(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Bc(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ci(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((wi = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Ki(e, t, a);
              0 !== (131072 & e.flags) && (wi = !0);
            }
          }
          return zi(e, t, n, r, a);
        }
        function Ei(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Pa(Bu, Du),
                (Du |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Pa(Bu, Du),
                  (Du |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Pa(Bu, Du),
                (Du |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Pa(Bu, Du),
              (Du |= r);
          return Si(e, t, a, n), t.child;
        }
        function Pi(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function zi(e, t, n, r, a) {
          var o = Na(n) ? Ta : Aa.current;
          return (
            (o = Ia(t, o)),
            Eo(t, a),
            (n = Cl(e, t, n, r, o, a)),
            (r = El()),
            null === e || wi
              ? (ao && r && eo(t), (t.flags |= 1), Si(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ki(e, t, a))
          );
        }
        function Ai(e, t, n, r, a) {
          if (Na(n)) {
            var o = !0;
            Oa(t);
          } else o = !1;
          if ((Eo(t, a), null === t.stateNode))
            Ui(e, t), Uo(t, n, r), Qo(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var u = l.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Po(c))
              : (c = Ia(t, (c = Na(n) ? Ta : Aa.current)));
            var s = n.getDerivedStateFromProps,
              d =
                "function" === typeof s ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== c) && Ko(t, l, r, c)),
              (Io = !1);
            var f = t.memoizedState;
            (l.state = f),
              Lo(t, r, l, a),
              (u = t.memoizedState),
              i !== r || f !== u || _a.current || Io
                ? ("function" === typeof s &&
                    (Ho(t, n, s, r), (u = t.memoizedState)),
                  (i = Io || Vo(t, n, i, r, f, u, c))
                    ? (d ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = c),
                  (r = i))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              Do(e, t),
              (i = t.memoizedProps),
              (c = t.type === t.elementType ? i : go(t.type, i)),
              (l.props = c),
              (d = t.pendingProps),
              (f = l.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Po(u))
                : (u = Ia(t, (u = Na(n) ? Ta : Aa.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== d || f !== u) && Ko(t, l, r, u)),
              (Io = !1),
              (f = t.memoizedState),
              (l.state = f),
              Lo(t, r, l, a);
            var v = t.memoizedState;
            i !== d || f !== v || _a.current || Io
              ? ("function" === typeof p &&
                  (Ho(t, n, p, r), (v = t.memoizedState)),
                (c = Io || Vo(t, n, c, r, f, v, u) || !1)
                  ? (s ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, v, u),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, v, u)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = v)),
                (l.props = r),
                (l.state = v),
                (l.context = u),
                (r = c))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return _i(e, t, n, r, o, a);
        }
        function _i(e, t, n, r, a, o) {
          Pi(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Fa(t, n, !1), Ki(e, t, o);
          (r = t.stateNode), (bi.current = t);
          var i =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Jo(t, e.child, null, o)),
                (t.child = Jo(t, null, i, o)))
              : Si(e, t, i, o),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function Ti(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ba(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ba(0, t.context, !1),
            al(e, t.containerInfo);
        }
        function Ii(e, t, n, r, a) {
          return vo(), mo(a), (t.flags |= 256), Si(e, t, n, r), t.child;
        }
        var Ni,
          Di,
          Bi,
          Ri,
          Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Li(e, t, n) {
          var r,
            a = t.pendingProps,
            l = ul.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Pa(ul, 1 & l),
            null === e)
          )
            return (
              co(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Fc(u, a, 0, null)),
                      (e = Oc(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Fi(n)),
                      (t.memoizedState = Oi),
                      e)
                    : Mi(t, u))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), ji(e, t, i, (r = di(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = Fc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((l = Oc(l, a, i, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 !== (1 & t.mode) && Jo(t, e.child, null, i),
                    (t.child.memoizedState = Fi(i)),
                    (t.memoizedState = Oi),
                    l);
              if (0 === (1 & t.mode)) return ji(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), ji(e, t, i, (r = di((l = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), wi || u)) {
                if (null !== (r = Tu)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), To(e, a), rc(r, e, a, -1));
                }
                return hc(), ji(e, t, i, (r = di(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ac.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = ca(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    (($a[qa++] = Ga),
                    ($a[qa++] = Ja),
                    ($a[qa++] = Xa),
                    (Ga = e.id),
                    (Ja = e.overflow),
                    (Xa = t)),
                  (t = Mi(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, l, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (l = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Bc(l, c)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (i = Bc(r, i))
                : ((i = Oc(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Fi(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Oi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Bc(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Mi(e, t) {
          return (
            ((t = Fc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function ji(e, t, n, r) {
          return (
            null !== r && mo(r),
            Jo(t, e.child, null, n),
            ((e = Mi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Hi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Co(e.return, t, n);
        }
        function Wi(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Vi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((Si(e, t, r.children, n), 0 !== (2 & (r = ul.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Hi(e, n, t);
                else if (19 === e.tag) Hi(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Pa(ul, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === cl(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Wi(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === cl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Wi(t, !0, n, null, o);
                break;
              case "together":
                Wi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ui(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ki(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Bc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Bc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Qi(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $i(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qi(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $i(t), null;
            case 1:
            case 17:
              return Na(t.type) && Da(), $i(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ol(),
                Ea(_a),
                Ea(Aa),
                dl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ic(oo), (oo = null)))),
                Di(e, t),
                $i(t),
                null
              );
            case 5:
              il(t);
              var a = rl(nl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Bi(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return $i(t), null;
                }
                if (((e = rl(el.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Mr("cancel", r), Mr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Mr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Rr.length; a++) Mr(Rr[a], r);
                      break;
                    case "source":
                      Mr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Mr("error", r), Mr("load", r);
                      break;
                    case "details":
                      Mr("toggle", r);
                      break;
                    case "input":
                      G(r, l), Mr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Mr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), Mr("invalid", r);
                  }
                  for (var u in (ye(n, l), (a = null), l))
                    if (l.hasOwnProperty(u)) {
                      var c = l[u];
                      "children" === u
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Yr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Yr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : i.hasOwnProperty(u) &&
                          null != c &&
                          "onScroll" === u &&
                          Mr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, l, !0);
                      break;
                    case "textarea":
                      Q(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Ni(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Mr("cancel", e), Mr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Mr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Rr.length; a++) Mr(Rr[a], e);
                        a = r;
                        break;
                      case "source":
                        Mr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Mr("error", e), Mr("load", e), (a = r);
                        break;
                      case "details":
                        Mr("toggle", e), (a = r);
                        break;
                      case "input":
                        G(e, r), (a = X(e, r)), Mr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Mr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Mr("invalid", e);
                    }
                    for (l in (ye(n, a), (c = a)))
                      if (c.hasOwnProperty(l)) {
                        var s = c[l];
                        "style" === l
                          ? he(e, s)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (s = s ? s.__html : void 0) && de(e, s)
                          : "children" === l
                          ? "string" === typeof s
                            ? ("textarea" !== n || "" !== s) && fe(e, s)
                            : "number" === typeof s && fe(e, "" + s)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != s && "onScroll" === l && Mr("scroll", e)
                              : null != s && b(e, l, s, u));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + U(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $i(t), null;
            case 6:
              if (e && null != t.stateNode) Ri(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = rl(nl.current)), rl(el.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return $i(t), null;
            case 13:
              if (
                (Ea(ul),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), vo(), (t.flags |= 98560), (l = !1);
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317));
                    l[fa] = t;
                  } else
                    vo(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  $i(t), (l = !1);
                } else null !== oo && (ic(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ul.current)
                        ? 0 === Ru && (Ru = 3)
                        : hc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $i(t),
                  null);
            case 4:
              return (
                ol(),
                Di(e, t),
                null === e && Wr(t.stateNode.containerInfo),
                $i(t),
                null
              );
            case 10:
              return xo(t.type._context), $i(t), null;
            case 19:
              if ((Ea(ul), null === (l = t.memoizedState))) return $i(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = l.rendering)))
                if (r) Qi(l, !1);
                else {
                  if (0 !== Ru || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = cl(e))) {
                        for (
                          t.flags |= 128,
                            Qi(l, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Pa(ul, (1 & ul.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Je() > Vu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Qi(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = cl(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Qi(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return $i(t), null;
                  } else
                    2 * Je() - l.renderingStartTime > Vu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qi(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = l.last) ? (n.sibling = u) : (t.child = u),
                    (l.last = u));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = ul.current),
                  Pa(ul, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($i(t), null);
            case 22:
            case 23:
              return (
                fc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Du) &&
                    ($i(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $i(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Xi(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Na(t.type) && Da(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ol(),
                Ea(_a),
                Ea(Aa),
                dl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return il(t), null;
            case 13:
              if (
                (Ea(ul),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                vo();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(ul), null;
            case 4:
              return ol(), null;
            case 10:
              return xo(t.type._context), null;
            case 22:
            case 23:
              return fc(), null;
            default:
              return null;
          }
        }
        (Ni = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Di = function () {}),
          (Bi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), rl(el.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = X(e, a)), (r = X(e, r)), (l = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (s in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                  if ("style" === s) {
                    var u = a[s];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== s &&
                      "children" !== s &&
                      "suppressContentEditableWarning" !== s &&
                      "suppressHydrationWarning" !== s &&
                      "autoFocus" !== s &&
                      (i.hasOwnProperty(s)
                        ? l || (l = [])
                        : (l = l || []).push(s, null));
              for (s in r) {
                var c = r[s];
                if (
                  ((u = null != a ? a[s] : void 0),
                  r.hasOwnProperty(s) && c !== u && (null != c || null != u))
                )
                  if ("style" === s)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          u[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (l || (l = []), l.push(s, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === s
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (l = l || []).push(s, c))
                      : "children" === s
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (l = l || []).push(s, "" + c)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (i.hasOwnProperty(s)
                          ? (null != c && "onScroll" === s && Mr("scroll", e),
                            l || u === c || (l = []))
                          : (l = l || []).push(s, c));
              }
              n && (l = l || []).push("style", n);
              var s = l;
              (t.updateQueue = s) && (t.flags |= 4);
            }
          }),
          (Ri = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Gi = !1,
          Ji = !1,
          Yi = "function" === typeof WeakSet ? WeakSet : Set,
          Zi = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Ec(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            Ec(e, t, r);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ha],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var du = null,
          fu = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) vu(e, t, n), (n = n.sibling);
        }
        function vu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Ji || eu(n, t);
            case 6:
              var r = du,
                a = fu;
              (du = null),
                pu(e, t, n),
                (fu = a),
                null !== (du = r) &&
                  (fu
                    ? ((e = du),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : du.removeChild(n.stateNode));
              break;
            case 18:
              null !== du &&
                (fu
                  ? ((e = du),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Wt(e))
                  : ua(du, n.stateNode));
              break;
            case 4:
              (r = du),
                (a = fu),
                (du = n.stateNode.containerInfo),
                (fu = !0),
                pu(e, t, n),
                (du = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ji &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tu(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Ji &&
                (eu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  Ec(n, t, i);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ji = (r = Ji) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Ji = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function mu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Yi()),
              t.forEach(function (t) {
                var r = _c.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function hu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (du = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (du = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === du) throw Error(o(160));
                vu(l, i, a), (du = null), (fu = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (s) {
                Ec(a, t, s);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gu(t, e), (t = t.sibling);
        }
        function gu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hu(t, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (h) {
                  Ec(e, e.return, h);
                }
                try {
                  ru(5, e, e.return);
                } catch (h) {
                  Ec(e, e.return, h);
                }
              }
              break;
            case 1:
              hu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (hu(t, e),
                yu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (h) {
                  Ec(e, e.return, h);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  u = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === u &&
                      "radio" === l.type &&
                      null != l.name &&
                      J(a, l),
                      be(u, i);
                    var s = be(u, l);
                    for (i = 0; i < c.length; i += 2) {
                      var d = c[i],
                        f = c[i + 1];
                      "style" === d
                        ? he(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, s);
                    }
                    switch (u) {
                      case "input":
                        Y(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var v = l.value;
                        null != v
                          ? ne(a, !!l.multiple, v, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (h) {
                    Ec(e, e.return, h);
                  }
              }
              break;
            case 6:
              if ((hu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (h) {
                  Ec(e, e.return, h);
                }
              }
              break;
            case 3:
              if (
                (hu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (h) {
                  Ec(e, e.return, h);
                }
              break;
            case 4:
            default:
              hu(t, e), yu(e);
              break;
            case 13:
              hu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Wu = Je())),
                4 & r && mu(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ji = (s = Ji) || d), hu(t, e), (Ji = s))
                  : hu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((s = null !== e.memoizedState),
                  (e.stateNode.isHidden = s) && !d && 0 !== (1 & e.mode))
                )
                  for (Zi = e, d = e.child; null !== d; ) {
                    for (f = Zi = d; null !== Zi; ) {
                      switch (((v = (p = Zi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (h) {
                              Ec(r, n, h);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ku(f);
                            continue;
                          }
                      }
                      null !== v ? ((v.return = p), (Zi = v)) : ku(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          s
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((u = f.stateNode),
                              (i =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (u.style.display = me("display", i)));
                      } catch (h) {
                        Ec(e, e.return, h);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = s ? "" : f.memoizedProps;
                      } catch (h) {
                        Ec(e, e.return, h);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              hu(t, e), yu(e), 4 & r && mu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (iu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    su(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  cu(e, uu(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              Ec(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Zi = e), wu(e, t, n);
        }
        function wu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zi; ) {
            var a = Zi,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Gi;
              if (!l) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Ji;
                i = Gi;
                var c = Ji;
                if (((Gi = l), (Ji = u) && !c))
                  for (Zi = a; null !== Zi; )
                    (u = (l = Zi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? xu(a)
                        : null !== u
                        ? ((u.return = l), (Zi = u))
                        : xu(a);
                for (; null !== o; ) (Zi = o), wu(o, t, n), (o = o.sibling);
                (Zi = a), (Gi = i), (Ji = c);
              }
              Su(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zi = o))
                : Su(e);
          }
        }
        function Su(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ji || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ji)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : go(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Mo(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Mo(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var s = t.alternate;
                        if (null !== s) {
                          var d = s.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Wt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Ji || (512 & t.flags && ou(t));
              } catch (p) {
                Ec(t, t.return, p);
              }
            }
            if (t === e) {
              Zi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function ku(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (t === e) {
              Zi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function xu(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    au(4, t);
                  } catch (u) {
                    Ec(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Ec(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Ec(t, o, u);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Ec(t, l, u);
                  }
              }
            } catch (u) {
              Ec(t, t.return, u);
            }
            if (t === e) {
              Zi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Zi = i);
              break;
            }
            Zi = t.return;
          }
        }
        var Cu,
          Eu = Math.ceil,
          Pu = w.ReactCurrentDispatcher,
          zu = w.ReactCurrentOwner,
          Au = w.ReactCurrentBatchConfig,
          _u = 0,
          Tu = null,
          Iu = null,
          Nu = 0,
          Du = 0,
          Bu = Ca(0),
          Ru = 0,
          Ou = null,
          Fu = 0,
          Lu = 0,
          Mu = 0,
          ju = null,
          Hu = null,
          Wu = 0,
          Vu = 1 / 0,
          Uu = null,
          Ku = !1,
          Qu = null,
          $u = null,
          qu = !1,
          Xu = null,
          Gu = 0,
          Ju = 0,
          Yu = null,
          Zu = -1,
          ec = 0;
        function tc() {
          return 0 !== (6 & _u) ? Je() : -1 !== Zu ? Zu : (Zu = Je());
        }
        function nc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _u) && 0 !== Nu
            ? Nu & -Nu
            : null !== ho.transition
            ? (0 === ec && (ec = mt()), ec)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function rc(e, t, n, r) {
          if (50 < Ju) throw ((Ju = 0), (Yu = null), Error(o(185)));
          gt(e, n, r),
            (0 !== (2 & _u) && e === Tu) ||
              (e === Tu && (0 === (2 & _u) && (Lu |= n), 4 === Ru && uc(e, Nu)),
              ac(e, r),
              1 === n &&
                0 === _u &&
                0 === (1 & t.mode) &&
                ((Vu = Je() + 500), Ma && Wa()));
        }
        function ac(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                u = a[l];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Tu ? Nu : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ma = !0), Ha(e);
                  })(cc.bind(null, e))
                : Ha(cc.bind(null, e)),
                la(function () {
                  0 === (6 & _u) && Wa();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Tc(n, oc.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function oc(e, t) {
          if (((Zu = -1), (ec = 0), 0 !== (6 & _u))) throw Error(o(327));
          var n = e.callbackNode;
          if (xc() && e.callbackNode !== n) return null;
          var r = ft(e, e === Tu ? Nu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
          else {
            t = r;
            var a = _u;
            _u |= 2;
            var l = mc();
            for (
              (Tu === e && Nu === t) ||
              ((Uu = null), (Vu = Je() + 500), pc(e, t));
              ;

            )
              try {
                bc();
                break;
              } catch (u) {
                vc(e, u);
              }
            ko(),
              (Pu.current = l),
              (_u = a),
              null !== Iu ? (t = 0) : ((Tu = null), (Nu = 0), (t = Ru));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = vt(e)) && ((r = a), (t = lc(e, a))),
              1 === t)
            )
              throw ((n = Ou), pc(e, 0), uc(e, r), ac(e, Je()), n);
            if (6 === t) uc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gc(e, r)) &&
                    0 !== (l = vt(e)) &&
                    ((r = l), (t = lc(e, l))),
                  1 === t))
              )
                throw ((n = Ou), pc(e, 0), uc(e, r), ac(e, Je()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  kc(e, Hu, Uu);
                  break;
                case 3:
                  if (
                    (uc(e, r),
                    (130023424 & r) === r && 10 < (t = Wu + 500 - Je()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tc(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(kc.bind(null, e, Hu, Uu), t);
                    break;
                  }
                  kc(e, Hu, Uu);
                  break;
                case 4:
                  if ((uc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Eu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(kc.bind(null, e, Hu, Uu), r);
                    break;
                  }
                  kc(e, Hu, Uu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ac(e, Je()), e.callbackNode === n ? oc.bind(null, e) : null;
        }
        function lc(e, t) {
          var n = ju;
          return (
            e.current.memoizedState.isDehydrated && (pc(e, t).flags |= 256),
            2 !== (e = gc(e, t)) && ((t = Hu), (Hu = n), null !== t && ic(t)),
            e
          );
        }
        function ic(e) {
          null === Hu ? (Hu = e) : Hu.push.apply(Hu, e);
        }
        function uc(e, t) {
          for (
            t &= ~Mu,
              t &= ~Lu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function cc(e) {
          if (0 !== (6 & _u)) throw Error(o(327));
          xc();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ac(e, Je()), null;
          var n = gc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = vt(e);
            0 !== r && ((t = r), (n = lc(e, r)));
          }
          if (1 === n) throw ((n = Ou), pc(e, 0), uc(e, t), ac(e, Je()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            kc(e, Hu, Uu),
            ac(e, Je()),
            null
          );
        }
        function sc(e, t) {
          var n = _u;
          _u |= 1;
          try {
            return e(t);
          } finally {
            0 === (_u = n) && ((Vu = Je() + 500), Ma && Wa());
          }
        }
        function dc(e) {
          null !== Xu && 0 === Xu.tag && 0 === (6 & _u) && xc();
          var t = _u;
          _u |= 1;
          var n = Au.transition,
            r = bt;
          try {
            if (((Au.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Au.transition = n), 0 === (6 & (_u = t)) && Wa();
          }
        }
        function fc() {
          (Du = Bu.current), Ea(Bu);
        }
        function pc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Iu))
            for (n = Iu.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Da();
                  break;
                case 3:
                  ol(), Ea(_a), Ea(Aa), dl();
                  break;
                case 5:
                  il(r);
                  break;
                case 4:
                  ol();
                  break;
                case 13:
                case 19:
                  Ea(ul);
                  break;
                case 10:
                  xo(r.type._context);
                  break;
                case 22:
                case 23:
                  fc();
              }
              n = n.return;
            }
          if (
            ((Tu = e),
            (Iu = e = Bc(e.current, null)),
            (Nu = Du = t),
            (Ru = 0),
            (Ou = null),
            (Mu = Lu = Fu = 0),
            (Hu = ju = null),
            null !== zo)
          ) {
            for (t = 0; t < zo.length; t++)
              if (null !== (r = (n = zo[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                n.pending = r;
              }
            zo = null;
          }
          return e;
        }
        function vc(e, t) {
          for (;;) {
            var n = Iu;
            try {
              if ((ko(), (fl.current = li), yl)) {
                for (var r = ml.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yl = !1;
              }
              if (
                ((vl = 0),
                (gl = hl = ml = null),
                (bl = !1),
                (wl = 0),
                (zu.current = null),
                null === n || null === n.return)
              ) {
                (Ru = 1), (Ou = t), (Iu = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  u = n,
                  c = t;
                if (
                  ((t = Nu),
                  (u.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var s = c,
                    d = u,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var v = gi(i);
                  if (null !== v) {
                    (v.flags &= -257),
                      yi(v, i, u, 0, t),
                      1 & v.mode && hi(l, s, t),
                      (c = s);
                    var m = (t = v).updateQueue;
                    if (null === m) {
                      var h = new Set();
                      h.add(c), (t.updateQueue = h);
                    } else m.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    hi(l, s, t), hc();
                    break e;
                  }
                  c = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var g = gi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yi(g, i, u, 0, t),
                      mo(si(c, u));
                    break e;
                  }
                }
                (l = c = si(c, u)),
                  4 !== Ru && (Ru = 2),
                  null === ju ? (ju = [l]) : ju.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Fo(l, vi(0, c, t));
                      break e;
                    case 1:
                      u = c;
                      var y = l.type,
                        b = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === $u || !$u.has(b))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Fo(l, mi(l, u, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              Sc(n);
            } catch (w) {
              (t = w), Iu === n && null !== n && (Iu = n = n.return);
              continue;
            }
            break;
          }
        }
        function mc() {
          var e = Pu.current;
          return (Pu.current = li), null === e ? li : e;
        }
        function hc() {
          (0 !== Ru && 3 !== Ru && 2 !== Ru) || (Ru = 4),
            null === Tu ||
              (0 === (268435455 & Fu) && 0 === (268435455 & Lu)) ||
              uc(Tu, Nu);
        }
        function gc(e, t) {
          var n = _u;
          _u |= 2;
          var r = mc();
          for ((Tu === e && Nu === t) || ((Uu = null), pc(e, t)); ; )
            try {
              yc();
              break;
            } catch (a) {
              vc(e, a);
            }
          if ((ko(), (_u = n), (Pu.current = r), null !== Iu))
            throw Error(o(261));
          return (Tu = null), (Nu = 0), Ru;
        }
        function yc() {
          for (; null !== Iu; ) wc(Iu);
        }
        function bc() {
          for (; null !== Iu && !Xe(); ) wc(Iu);
        }
        function wc(e) {
          var t = Cu(e.alternate, e, Du);
          (e.memoizedProps = e.pendingProps),
            null === t ? Sc(e) : (Iu = t),
            (zu.current = null);
        }
        function Sc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, Du))) return void (Iu = n);
            } else {
              if (null !== (n = Xi(n, t)))
                return (n.flags &= 32767), void (Iu = n);
              if (null === e) return (Ru = 6), void (Iu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Iu = t);
            Iu = t = e;
          } while (null !== t);
          0 === Ru && (Ru = 5);
        }
        function kc(e, t, n) {
          var r = bt,
            a = Au.transition;
          try {
            (Au.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  xc();
                } while (null !== Xu);
                if (0 !== (6 & _u)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, l),
                  e === Tu && ((Iu = Tu = null), (Nu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Tc(tt, function () {
                      return xc(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Au.transition), (Au.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = _u;
                  (_u |= 4),
                    (zu.current = null),
                    (function (e, t) {
                      if (((ea = Ut), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                c = -1,
                                s = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var v;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (u = i + a),
                                    f !== l ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (c = i + r),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (v = f.firstChild);

                                )
                                  (p = f), (f = v);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++s === a && (u = i),
                                    p === l && ++d === r && (c = i),
                                    null !== (v = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = v;
                              }
                              n =
                                -1 === u || -1 === c
                                  ? null
                                  : { start: u, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ut = !1,
                          Zi = t;
                        null !== Zi;

                      )
                        if (
                          ((e = (t = Zi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zi = e);
                        else
                          for (; null !== Zi; ) {
                            t = Zi;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var h = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? h
                                            : go(t.type, h),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (S) {
                              Ec(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zi = e);
                              break;
                            }
                            Zi = t.return;
                          }
                      (m = nu), (nu = !1);
                    })(e, n),
                    gu(n, e),
                    vr(ta),
                    (Ut = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Ge(),
                    (_u = u),
                    (bt = i),
                    (Au.transition = l);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Xu = e), (Gu = a)),
                  (l = e.pendingLanes),
                  0 === l && ($u = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ac(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Ku) throw ((Ku = !1), (e = Qu), (Qu = null), e);
                0 !== (1 & Gu) && 0 !== e.tag && xc(),
                  (l = e.pendingLanes),
                  0 !== (1 & l)
                    ? e === Yu
                      ? Ju++
                      : ((Ju = 0), (Yu = e))
                    : (Ju = 0),
                  Wa();
              })(e, t, n, r);
          } finally {
            (Au.transition = a), (bt = r);
          }
          return null;
        }
        function xc() {
          if (null !== Xu) {
            var e = wt(Gu),
              t = Au.transition,
              n = bt;
            try {
              if (((Au.transition = null), (bt = 16 > e ? 16 : e), null === Xu))
                var r = !1;
              else {
                if (((e = Xu), (Xu = null), (Gu = 0), 0 !== (6 & _u)))
                  throw Error(o(331));
                var a = _u;
                for (_u |= 4, Zi = e.current; null !== Zi; ) {
                  var l = Zi,
                    i = l.child;
                  if (0 !== (16 & Zi.flags)) {
                    var u = l.deletions;
                    if (null !== u) {
                      for (var c = 0; c < u.length; c++) {
                        var s = u[c];
                        for (Zi = s; null !== Zi; ) {
                          var d = Zi;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zi = f);
                          else
                            for (; null !== Zi; ) {
                              var p = (d = Zi).sibling,
                                v = d.return;
                              if ((lu(d), d === s)) {
                                Zi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = v), (Zi = p);
                                break;
                              }
                              Zi = v;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var h = m.child;
                        if (null !== h) {
                          m.child = null;
                          do {
                            var g = h.sibling;
                            (h.sibling = null), (h = g);
                          } while (null !== h);
                        }
                      }
                      Zi = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Zi = i);
                  else
                    e: for (; null !== Zi; ) {
                      if (0 !== (2048 & (l = Zi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, l, l.return);
                        }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (Zi = y);
                        break e;
                      }
                      Zi = l.return;
                    }
                }
                var b = e.current;
                for (Zi = b; null !== Zi; ) {
                  var w = (i = Zi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (Zi = w);
                  else
                    e: for (i = b; null !== Zi; ) {
                      if (0 !== (2048 & (u = Zi).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (k) {
                          Ec(u, u.return, k);
                        }
                      if (u === i) {
                        Zi = null;
                        break e;
                      }
                      var S = u.sibling;
                      if (null !== S) {
                        (S.return = u.return), (Zi = S);
                        break e;
                      }
                      Zi = u.return;
                    }
                }
                if (
                  ((_u = a),
                  Wa(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Au.transition = t);
            }
          }
          return !1;
        }
        function Cc(e, t, n) {
          (e = Ro(e, (t = vi(0, (t = si(n, t)), 1)), 1)),
            (t = tc()),
            null !== e && (gt(e, 1, t), ac(e, t));
        }
        function Ec(e, t, n) {
          if (3 === e.tag) Cc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Cc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === $u || !$u.has(r)))
                ) {
                  (t = Ro(t, (e = mi(t, (e = si(n, e)), 1)), 1)),
                    (e = tc()),
                    null !== t && (gt(t, 1, e), ac(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Pc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Tu === e &&
              (Nu & n) === n &&
              (4 === Ru ||
              (3 === Ru && (130023424 & Nu) === Nu && 500 > Je() - Wu)
                ? pc(e, 0)
                : (Mu |= n)),
            ac(e, t);
        }
        function zc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = st), 0 === (130023424 & (st <<= 1)) && (st = 4194304)));
          var n = tc();
          null !== (e = To(e, t)) && (gt(e, t, n), ac(e, n));
        }
        function Ac(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), zc(e, n);
        }
        function _c(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), zc(e, n);
        }
        function Tc(e, t) {
          return $e(e, t);
        }
        function Ic(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Nc(e, t, n, r) {
          return new Ic(e, t, n, r);
        }
        function Dc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Bc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Nc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Rc(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Dc(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case x:
                return Oc(n.children, a, l, t);
              case C:
                (i = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = Nc(12, n, t, 2 | a)).elementType = E), (e.lanes = l), e
                );
              case _:
                return (
                  ((e = Nc(13, n, t, a)).elementType = _), (e.lanes = l), e
                );
              case T:
                return (
                  ((e = Nc(19, n, t, a)).elementType = T), (e.lanes = l), e
                );
              case D:
                return Fc(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      i = 10;
                      break e;
                    case z:
                      i = 9;
                      break e;
                    case A:
                      i = 11;
                      break e;
                    case I:
                      i = 14;
                      break e;
                    case N:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Nc(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Oc(e, t, n, r) {
          return ((e = Nc(7, e, r, t)).lanes = n), e;
        }
        function Fc(e, t, n, r) {
          return (
            ((e = Nc(22, e, r, t)).elementType = D),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Lc(e, t, n) {
          return ((e = Nc(6, e, null, t)).lanes = n), e;
        }
        function Mc(e, t, n) {
          return (
            ((t = Nc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function jc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = ht(0)),
            (this.expirationTimes = ht(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = ht(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Hc(e, t, n, r, a, o, l, i, u) {
          return (
            (e = new jc(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Nc(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            No(o),
            e
          );
        }
        function Wc(e) {
          if (!e) return za;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Na(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Na(n)) return Ra(e, n, t);
          }
          return t;
        }
        function Vc(e, t, n, r, a, o, l, i, u) {
          return (
            ((e = Hc(n, r, !0, e, 0, o, 0, i, u)).context = Wc(null)),
            (n = e.current),
            ((o = Bo((r = tc()), (a = nc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ro(n, o, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ac(e, r),
            e
          );
        }
        function Uc(e, t, n, r) {
          var a = t.current,
            o = tc(),
            l = nc(a);
          return (
            (n = Wc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Bo(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ro(a, t, l)) && (rc(e, a, l, o), Oo(e, a, l)),
            l
          );
        }
        function Kc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $c(e, t) {
          Qc(e, t), (e = e.alternate) && Qc(e, t);
        }
        Cu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || _a.current) wi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ti(t), vo();
                        break;
                      case 5:
                        ll(t);
                        break;
                      case 1:
                        Na(t.type) && Oa(t);
                        break;
                      case 4:
                        al(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Pa(yo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Pa(ul, 1 & ul.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Li(e, t, n)
                            : (Pa(ul, 1 & ul.current),
                              null !== (e = Ki(e, t, n)) ? e.sibling : null);
                        Pa(ul, 1 & ul.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Pa(ul, ul.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ei(e, t, n);
                    }
                    return Ki(e, t, n);
                  })(e, t, n)
                );
              wi = 0 !== (131072 & e.flags);
            }
          else (wi = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Ui(e, t), (e = t.pendingProps);
              var a = Ia(t, Aa.current);
              Eo(t, n), (a = Cl(null, t, r, e, a, n));
              var l = El();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Na(r) ? ((l = !0), Oa(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    No(t),
                    (a.updater = Wo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Qo(t, r, e, n),
                    (t = _i(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    ao && l && eo(t),
                    Si(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Ui(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Dc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === A) return 11;
                        if (e === I) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = go(r, e)),
                  a)
                ) {
                  case 0:
                    t = zi(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ai(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ki(null, t, r, e, n);
                    break e;
                  case 14:
                    t = xi(null, t, r, go(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                zi(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ai(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 3:
              e: {
                if ((Ti(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Do(e, t),
                  Lo(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Ii(e, t, r, n, (a = si(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ii(e, t, r, n, (a = si(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ca(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Yo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((vo(), r === a)) {
                    t = Ki(e, t, n);
                    break e;
                  }
                  Si(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ll(t),
                null === e && co(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                Pi(e, t),
                Si(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && co(t), null;
            case 13:
              return Li(e, t, n);
            case 4:
              return (
                al(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Jo(t, null, r, n)) : Si(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ki(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 7:
              return Si(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Si(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  Pa(yo, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !_a.current) {
                      t = Ki(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var u = l.dependencies;
                      if (null !== u) {
                        i = l.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === l.tag) {
                              (c = Bo(-1, n & -n)).tag = 2;
                              var s = l.updateQueue;
                              if (null !== s) {
                                var d = (s = s.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (s.pending = c);
                              }
                            }
                            (l.lanes |= n),
                              null !== (c = l.alternate) && (c.lanes |= n),
                              Co(l.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Co(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                Si(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Eo(t, n),
                (r = r((a = Po(a)))),
                (t.flags |= 1),
                Si(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = go((r = t.type), t.pendingProps)),
                xi(e, t, r, (a = go(r.type, a)), n)
              );
            case 15:
              return Ci(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : go(r, a)),
                Ui(e, t),
                (t.tag = 1),
                Na(r) ? ((e = !0), Oa(t)) : (e = !1),
                Eo(t, n),
                Uo(t, r, a),
                Qo(t, r, a, n),
                _i(null, t, r, !0, e, n)
              );
            case 19:
              return Vi(e, t, n);
            case 22:
              return Ei(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var qc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xc(e) {
          this._internalRoot = e;
        }
        function Gc(e) {
          this._internalRoot = e;
        }
        function Jc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Yc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zc() {}
        function es(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Kc(l);
                i.call(e);
              };
            }
            Uc(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Kc(l);
                    o.call(e);
                  };
                }
                var l = Vc(t, r, e, 0, null, !1, 0, "", Zc);
                return (
                  (e._reactRootContainer = l),
                  (e[va] = l.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  dc(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Kc(u);
                  i.call(e);
                };
              }
              var u = Hc(e, 0, !1, null, 0, !1, 0, "", Zc);
              return (
                (e._reactRootContainer = u),
                (e[va] = u.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                dc(function () {
                  Uc(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Kc(l);
        }
        (Gc.prototype.render = Xc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Uc(e, t, null, null);
          }),
          (Gc.prototype.unmount = Xc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                dc(function () {
                  Uc(null, e, null, null);
                }),
                  (t[va] = null);
              }
            }),
          (Gc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Ct();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Dt.length && 0 !== t && t < Dt[n].priority;
                n++
              );
              Dt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ac(t, Je()),
                    0 === (6 & _u) && ((Vu = Je() + 500), Wa()));
                }
                break;
              case 13:
                dc(function () {
                  var t = To(e, 1);
                  if (null !== t) {
                    var n = tc();
                    rc(t, e, 1, n);
                  }
                }),
                  $c(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = To(e, 134217728);
              if (null !== t) rc(t, e, 134217728, tc());
              $c(e, 134217728);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = nc(e),
                n = To(e, t);
              if (null !== n) rc(n, e, t, tc());
              $c(e, t);
            }
          }),
          (Ct = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Y(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = Sa(r);
                      if (!a) throw Error(o(90));
                      $(r), Y(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ae = sc),
          (_e = dc);
        var ts = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, Sa, Pe, ze, sc],
          },
          ns = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rs = {
            bundleType: ns.bundleType,
            version: ns.version,
            rendererPackageName: ns.rendererPackageName,
            rendererConfig: ns.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ke(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ns.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!as.isDisabled && as.supportsFiber)
            try {
              (at = as.inject(rs)), (ot = as);
            } catch (se) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ts),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Jc(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Jc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = qc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Hc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[va] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Xc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = Ke(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return dc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Yc(t)) throw Error(o(200));
            return es(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Jc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              i = qc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Vc(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[va] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Gc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Yc(t)) throw Error(o(200));
            return es(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Yc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (dc(function () {
                es(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[va] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = sc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Yc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return es(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            s = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (s = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: s,
            props: o,
            _owner: i.current,
          };
        }
        (t.jsx = c), (t.jsxs = c);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var v = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          h = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = n || v);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = n || v);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          x = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              k.call(t, a) && !C.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: x.current,
          };
        }
        function P(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var z = /\/+/g;
        function A(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function _(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = "" === o ? "." + A(u, 0) : o),
              S(l)
                ? ((a = ""),
                  null != e && (a = e.replace(z, "$&/") + "/"),
                  _(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (P(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (u && u.key === l.key)
                          ? ""
                          : ("" + l.key).replace(z, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), S(e)))
            for (var c = 0; c < e.length; c++) {
              var s = o + A((i = e[c]), c);
              u += _(i, t, a, s, l);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof s)
          )
            for (e = s.call(e), c = 0; !(i = e.next()).done; )
              u += _((i = i.value), t, a, (s = o + A(i, c++)), l);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            _(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function I(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N = { current: null },
          D = { transition: null },
          B = {
            ReactCurrentDispatcher: N,
            ReactCurrentBatchConfig: D,
            ReactCurrentOwner: x,
          };
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!P(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = x.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                k.call(t, c) &&
                  !C.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              u = Array(c);
              for (var s = 0; s < c; s++) u[s] = arguments[s + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: I,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = D.transition;
            D.transition = {};
            try {
              e();
            } finally {
              D.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return N.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return N.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return N.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return N.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return N.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return N.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return N.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return N.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return N.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return N.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return N.current.useRef(e);
          }),
          (t.useState = function (e) {
            return N.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return N.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return N.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                c = i + 1,
                s = e[c];
              if (0 > o(u, n))
                c < a && 0 > o(s, u)
                  ? ((e[r] = s), (e[c] = n), (r = c))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(c < a && 0 > o(s, n))) break e;
                (e[r] = s), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var c = [],
          s = [],
          d = 1,
          f = null,
          p = 3,
          v = !1,
          m = !1,
          h = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(s); null !== t; ) {
            if (null === t.callback) a(s);
            else {
              if (!(t.startTime <= e)) break;
              a(s), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(s);
          }
        }
        function S(e) {
          if (((h = !1), w(e), !m))
            if (null !== r(c)) (m = !0), D(k);
            else {
              var t = r(s);
              null !== t && B(S, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), h && ((h = !1), y(P), (P = -1)), (v = !0);
          var o = p;
          try {
            for (
              w(n), f = r(c);
              null !== f && (!(f.expirationTime > n) || (e && !_()));

            ) {
              var l = f.callback;
              if ("function" === typeof l) {
                (f.callback = null), (p = f.priorityLevel);
                var i = l(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (f.callback = i)
                    : f === r(c) && a(c),
                  w(n);
              } else a(c);
              f = r(c);
            }
            if (null !== f) var u = !0;
            else {
              var d = r(s);
              null !== d && B(S, d.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (f = null), (p = o), (v = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          C = !1,
          E = null,
          P = -1,
          z = 5,
          A = -1;
        function _() {
          return !(t.unstable_now() - A < z);
        }
        function T() {
          if (null !== E) {
            var e = t.unstable_now();
            A = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? x() : ((C = !1), (E = null));
            }
          } else C = !1;
        }
        if ("function" === typeof b)
          x = function () {
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var I = new MessageChannel(),
            N = I.port2;
          (I.port1.onmessage = T),
            (x = function () {
              N.postMessage(null);
            });
        } else
          x = function () {
            g(T, 0);
          };
        function D(e) {
          (E = e), C || ((C = !0), x());
        }
        function B(e, n) {
          P = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || v || ((m = !0), D(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (z = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(s, e),
                  null === r(c) &&
                    e === r(s) &&
                    (h ? (y(P), (P = -1)) : (h = !0), B(S, o - l)))
                : ((e.sortIndex = i), n(c, e), m || v || ((m = !0), D(k))),
              e
            );
          }),
          (t.unstable_shouldYield = _),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  !(function () {
    var e,
      t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e);
          }
        : function (e) {
            return e.__proto__;
          };
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var o = Object.create(null);
      n.r(o);
      var l = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var i = 2 & a && r; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach(function (e) {
          l[e] = function () {
            return r[e];
          };
        });
      return (
        (l.default = function () {
          return r;
        }),
        n.d(o, l),
        o
      );
    };
  })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      var e = n(791),
        t = n.t(e, 2),
        r = n(250),
        a = n(184),
        o = function (e) {
          var t = e.children;
          return (0, a.jsx)("div", {
            className:
              "default 2xl:max-w-screen-lg lg:max-w-screen-lg md:max-w-screen-md sm:max-w-[960px] m-auto",
            children: t,
          });
        };
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        if (e) {
          if ("string" === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                l,
                i = [],
                u = !0,
                c = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (i.push(r.value), i.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (a = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          i(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(e) {
        return (
          (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          s(e)
        );
      }
      function d(e) {
        var t = (function (e, t) {
          if ("object" !== s(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== s(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === s(t) ? t : String(t);
      }
      function f(e, t, n) {
        return (
          (t = d(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                f(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function m(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function h(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = m(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function g() {
        return (
          (g = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          g.apply(this, arguments)
        );
      }
      var y = n(164);
      function b() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          return t.forEach(function (t) {
            return (function (e, t) {
              "function" === typeof e
                ? e(t)
                : null !== e && void 0 !== e && (e.current = t);
            })(t, e);
          });
        };
      }
      function w() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return (0, e.useCallback)(b.apply(void 0, n), n);
      }
      var S = ["children"],
        k = ["children"],
        x = (0, e.forwardRef)(function (t, n) {
          var r = t.children,
            a = h(t, S),
            o = e.Children.toArray(r),
            l = o.find(P);
          if (l) {
            var i = l.props.children,
              u = o.map(function (t) {
                return t === l
                  ? e.Children.count(i) > 1
                    ? e.Children.only(null)
                    : (0, e.isValidElement)(i)
                    ? i.props.children
                    : null
                  : t;
              });
            return (0, e.createElement)(
              C,
              g({}, a, { ref: n }),
              (0, e.isValidElement)(i)
                ? (0, e.cloneElement)(i, void 0, u)
                : null
            );
          }
          return (0, e.createElement)(C, g({}, a, { ref: n }), r);
        });
      x.displayName = "Slot";
      var C = (0, e.forwardRef)(function (t, n) {
        var r = t.children,
          a = h(t, k);
        return (0, e.isValidElement)(r)
          ? (0, e.cloneElement)(
              r,
              v(
                v(
                  {},
                  (function (e, t) {
                    var n = v({}, t),
                      r = function () {
                        var r = e[a],
                          o = t[a];
                        /^on[A-Z]/.test(a)
                          ? r && o
                            ? (n[a] = function () {
                                o.apply(void 0, arguments),
                                  r.apply(void 0, arguments);
                              })
                            : r && (n[a] = r)
                          : "style" === a
                          ? (n[a] = v(v({}, r), o))
                          : "className" === a &&
                            (n[a] = [r, o].filter(Boolean).join(" "));
                      };
                    for (var a in t) r();
                    return v(v({}, e), n);
                  })(a, r.props)
                ),
                {},
                { ref: n ? b(n, r.ref) : r.ref }
              )
            )
          : e.Children.count(r) > 1
          ? e.Children.only(null)
          : null;
      });
      C.displayName = "SlotClone";
      var E = function (t) {
        var n = t.children;
        return (0, e.createElement)(e.Fragment, null, n);
      };
      function P(t) {
        return (0, e.isValidElement)(t) && t.type === E;
      }
      var z = ["asChild"],
        A = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce(function (t, n) {
          var r = (0, e.forwardRef)(function (t, r) {
            var a = t.asChild,
              o = h(t, z),
              l = a ? x : n;
            return (
              (0, e.useEffect)(function () {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, e.createElement)(l, g({}, o, { ref: r }))
            );
          });
          return (
            (r.displayName = "Primitive.".concat(n)),
            v(v({}, t), {}, f({}, n, r))
          );
        }, {});
      var _ = Boolean(
        null === globalThis || void 0 === globalThis
          ? void 0
          : globalThis.document
      )
        ? e.useLayoutEffect
        : function () {};
      var T = function (t) {
        var n = t.present,
          r = t.children,
          a = (function (t) {
            var n = c((0, e.useState)(), 2),
              r = n[0],
              a = n[1],
              o = (0, e.useRef)({}),
              l = (0, e.useRef)(t),
              i = (0, e.useRef)("none"),
              u = t ? "mounted" : "unmounted",
              s = c(
                (function (t, n) {
                  return (0, e.useReducer)(function (e, t) {
                    var r = n[e][t];
                    return null !== r && void 0 !== r ? r : e;
                  }, t);
                })(u, {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                2
              ),
              d = s[0],
              f = s[1];
            return (
              (0, e.useEffect)(
                function () {
                  var e = I(o.current);
                  i.current = "mounted" === d ? e : "none";
                },
                [d]
              ),
              _(
                function () {
                  var e = o.current,
                    n = l.current;
                  if (n !== t) {
                    var r = i.current,
                      a = I(e);
                    if (t) f("MOUNT");
                    else if (
                      "none" === a ||
                      "none" ===
                        (null === e || void 0 === e ? void 0 : e.display)
                    )
                      f("UNMOUNT");
                    else {
                      f(n && r !== a ? "ANIMATION_OUT" : "UNMOUNT");
                    }
                    l.current = t;
                  }
                },
                [t, f]
              ),
              _(
                function () {
                  if (r) {
                    var e = function (e) {
                        var t = I(o.current).includes(e.animationName);
                        e.target === r &&
                          t &&
                          (0, y.flushSync)(function () {
                            return f("ANIMATION_END");
                          });
                      },
                      t = function (e) {
                        e.target === r && (i.current = I(o.current));
                      };
                    return (
                      r.addEventListener("animationstart", t),
                      r.addEventListener("animationcancel", e),
                      r.addEventListener("animationend", e),
                      function () {
                        r.removeEventListener("animationstart", t),
                          r.removeEventListener("animationcancel", e),
                          r.removeEventListener("animationend", e);
                      }
                    );
                  }
                  f("ANIMATION_END");
                },
                [r, f]
              ),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(d),
                ref: (0, e.useCallback)(function (e) {
                  e && (o.current = getComputedStyle(e)), a(e);
                }, []),
              }
            );
          })(n),
          o =
            "function" === typeof r
              ? r({ present: a.isPresent })
              : e.Children.only(r),
          l = w(a.ref, o.ref);
        return "function" === typeof r || a.isPresent
          ? (0, e.cloneElement)(o, { ref: l })
          : null;
      };
      function I(e) {
        return (
          (null === e || void 0 === e ? void 0 : e.animationName) || "none"
        );
      }
      T.displayName = "Presence";
      var N = ["scope", "children"];
      function D() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        var a = n[0];
        if (1 === n.length) return a;
        var o = function () {
          var t = n.map(function (e) {
            return { useScope: e(), scopeName: e.scopeName };
          });
          return function (n) {
            var r = t.reduce(function (e, t) {
              var r = t.useScope,
                a = t.scopeName,
                o = r(n)["__scope".concat(a)];
              return v(v({}, e), o);
            }, {});
            return (0, e.useMemo)(
              function () {
                return f({}, "__scope".concat(a.scopeName), r);
              },
              [r]
            );
          };
        };
        return (o.scopeName = a.scopeName), o;
      }
      function B(t) {
        var n = (0, e.useRef)(t);
        return (
          (0, e.useEffect)(function () {
            n.current = t;
          }),
          (0, e.useMemo)(function () {
            return function () {
              for (
                var e, t, r = arguments.length, a = new Array(r), o = 0;
                o < r;
                o++
              )
                a[o] = arguments[o];
              return null === (t = n.current) || void 0 === t
                ? void 0
                : (e = t).call.apply(e, [n].concat(a));
            };
          }, [])
        );
      }
      var R = (0, e.createContext)(void 0);
      function O(e, t) {
        var n = (
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          ).checkForDefaultPrevented,
          r = void 0 === n || n;
        return function (n) {
          if (
            (null === e || void 0 === e || e(n),
            !1 === r || !n.defaultPrevented)
          )
            return null === t || void 0 === t ? void 0 : t(n);
        };
      }
      var F = ["__scopeScrollArea", "type", "dir", "scrollHideDelay"],
        L = ["__scopeScrollArea", "children"],
        M = ["forceMount"],
        j = ["forceMount"],
        H = ["forceMount"],
        W = ["forceMount"],
        V = ["orientation"],
        U = ["sizes", "onSizesChange"],
        K = ["sizes", "onSizesChange"],
        Q = [
          "__scopeScrollArea",
          "sizes",
          "hasThumb",
          "onThumbChange",
          "onThumbPointerUp",
          "onThumbPointerDown",
          "onThumbPositionChange",
          "onDragScroll",
          "onWheelScroll",
          "onResize",
        ],
        $ = ["forceMount"],
        q = ["__scopeScrollArea", "style"],
        X = ["__scopeScrollArea"];
      var G = "ScrollArea",
        J = (function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            r = [],
            a = function () {
              var n = r.map(function (t) {
                return (0, e.createContext)(t);
              });
              return function (r) {
                var a = (null === r || void 0 === r ? void 0 : r[t]) || n;
                return (0, e.useMemo)(
                  function () {
                    return f(
                      {},
                      "__scope".concat(t),
                      v(v({}, r), {}, f({}, t, a))
                    );
                  },
                  [r, a]
                );
              };
            };
          return (
            (a.scopeName = t),
            [
              function (n, a) {
                var o = (0, e.createContext)(a),
                  l = r.length;
                function i(n) {
                  var r = n.scope,
                    a = n.children,
                    i = h(n, N),
                    u = (null === r || void 0 === r ? void 0 : r[t][l]) || o,
                    c = (0, e.useMemo)(function () {
                      return i;
                    }, Object.values(i));
                  return (0, e.createElement)(u.Provider, { value: c }, a);
                }
                return (
                  (r = [].concat(u(r), [a])),
                  (i.displayName = n + "Provider"),
                  [
                    i,
                    function (r, i) {
                      var u =
                          (null === i || void 0 === i ? void 0 : i[t][l]) || o,
                        c = (0, e.useContext)(u);
                      if (c) return c;
                      if (void 0 !== a) return a;
                      throw new Error(
                        "`".concat(r, "` must be used within `").concat(n, "`")
                      );
                    },
                  ]
                );
              },
              D.apply(void 0, [a].concat(u(n))),
            ]
          );
        })(G),
        Y = c(J, 2),
        Z = Y[0],
        ee = (Y[1], c(Z(G), 2)),
        te = ee[0],
        ne = ee[1],
        re = (0, e.forwardRef)(function (t, n) {
          var r,
            a = t.__scopeScrollArea,
            o = t.type,
            l = void 0 === o ? "hover" : o,
            i = t.dir,
            u = t.scrollHideDelay,
            s = void 0 === u ? 600 : u,
            d = h(t, F),
            p = c((0, e.useState)(null), 2),
            m = p[0],
            y = p[1],
            b = c((0, e.useState)(null), 2),
            S = b[0],
            k = b[1],
            x = c((0, e.useState)(null), 2),
            C = x[0],
            E = x[1],
            P = c((0, e.useState)(null), 2),
            z = P[0],
            _ = P[1],
            T = c((0, e.useState)(null), 2),
            I = T[0],
            N = T[1],
            D = c((0, e.useState)(0), 2),
            B = D[0],
            O = D[1],
            L = c((0, e.useState)(0), 2),
            M = L[0],
            j = L[1],
            H = c((0, e.useState)(!1), 2),
            W = H[0],
            V = H[1],
            U = c((0, e.useState)(!1), 2),
            K = U[0],
            Q = U[1],
            $ = w(n, function (e) {
              return y(e);
            }),
            q = (function (t) {
              var n = (0, e.useContext)(R);
              return t || n || "ltr";
            })(i);
          return (0,
          e.createElement)(te, { scope: a, type: l, dir: q, scrollHideDelay: s, scrollArea: m, viewport: S, onViewportChange: k, content: C, onContentChange: E, scrollbarX: z, onScrollbarXChange: _, scrollbarXEnabled: W, onScrollbarXEnabledChange: V, scrollbarY: I, onScrollbarYChange: N, scrollbarYEnabled: K, onScrollbarYEnabledChange: Q, onCornerWidthChange: O, onCornerHeightChange: j }, (0, e.createElement)(A.div, g({ dir: q }, d, { ref: $, style: v(((r = { position: "relative" }), f(r, "--radix-scroll-area-corner-width", B + "px"), f(r, "--radix-scroll-area-corner-height", M + "px"), r), t.style) })));
        }),
        ae = "ScrollAreaViewport",
        oe = (0, e.forwardRef)(function (t, n) {
          var r = t.__scopeScrollArea,
            a = t.children,
            o = h(t, L),
            l = ne(ae, r),
            i = w(n, (0, e.useRef)(null), l.onViewportChange);
          return (0,
          e.createElement)(e.Fragment, null, (0, e.createElement)("style", { dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" } }), (0, e.createElement)(A.div, g({ "data-radix-scroll-area-viewport": "" }, o, { ref: i, style: v({ overflowX: l.scrollbarXEnabled ? "scroll" : "hidden", overflowY: l.scrollbarYEnabled ? "scroll" : "hidden" }, t.style) }), (0, e.createElement)("div", { ref: l.onContentChange, style: { minWidth: "100%", display: "table" } }, a)));
        }),
        le = "ScrollAreaScrollbar",
        ie = (0, e.forwardRef)(function (t, n) {
          var r = t.forceMount,
            a = h(t, M),
            o = ne(le, t.__scopeScrollArea),
            l = o.onScrollbarXEnabledChange,
            i = o.onScrollbarYEnabledChange,
            u = "horizontal" === t.orientation;
          return (
            (0, e.useEffect)(
              function () {
                return (
                  u ? l(!0) : i(!0),
                  function () {
                    u ? l(!1) : i(!1);
                  }
                );
              },
              [u, l, i]
            ),
            "hover" === o.type
              ? (0, e.createElement)(ue, g({}, a, { ref: n, forceMount: r }))
              : "scroll" === o.type
              ? (0, e.createElement)(ce, g({}, a, { ref: n, forceMount: r }))
              : "auto" === o.type
              ? (0, e.createElement)(se, g({}, a, { ref: n, forceMount: r }))
              : "always" === o.type
              ? (0, e.createElement)(de, g({}, a, { ref: n }))
              : null
          );
        }),
        ue = (0, e.forwardRef)(function (t, n) {
          var r = t.forceMount,
            a = h(t, j),
            o = ne(le, t.__scopeScrollArea),
            l = c((0, e.useState)(!1), 2),
            i = l[0],
            u = l[1];
          return (
            (0, e.useEffect)(
              function () {
                var e = o.scrollArea,
                  t = 0;
                if (e) {
                  var n = function () {
                      window.clearTimeout(t), u(!0);
                    },
                    r = function () {
                      t = window.setTimeout(function () {
                        return u(!1);
                      }, o.scrollHideDelay);
                    };
                  return (
                    e.addEventListener("pointerenter", n),
                    e.addEventListener("pointerleave", r),
                    function () {
                      window.clearTimeout(t),
                        e.removeEventListener("pointerenter", n),
                        e.removeEventListener("pointerleave", r);
                    }
                  );
                }
              },
              [o.scrollArea, o.scrollHideDelay]
            ),
            (0, e.createElement)(
              T,
              { present: r || i },
              (0, e.createElement)(
                se,
                g({ "data-state": i ? "visible" : "hidden" }, a, { ref: n })
              )
            )
          );
        }),
        ce = (0, e.forwardRef)(function (t, n) {
          var r,
            a,
            o = t.forceMount,
            l = h(t, H),
            i = ne(le, t.__scopeScrollArea),
            u = "horizontal" === t.orientation,
            s = Ie(function () {
              return v("SCROLL_END");
            }, 100),
            d =
              ((r = "hidden"),
              (a = {
                hidden: { SCROLL: "scrolling" },
                scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
                interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
                idle: {
                  HIDE: "hidden",
                  SCROLL: "scrolling",
                  POINTER_ENTER: "interacting",
                },
              }),
              (0, e.useReducer)(function (e, t) {
                var n = a[e][t];
                return null !== n && void 0 !== n ? n : e;
              }, r)),
            f = c(d, 2),
            p = f[0],
            v = f[1];
          return (
            (0, e.useEffect)(
              function () {
                if ("idle" === p) {
                  var e = window.setTimeout(function () {
                    return v("HIDE");
                  }, i.scrollHideDelay);
                  return function () {
                    return window.clearTimeout(e);
                  };
                }
              },
              [p, i.scrollHideDelay, v]
            ),
            (0, e.useEffect)(
              function () {
                var e = i.viewport,
                  t = u ? "scrollLeft" : "scrollTop";
                if (e) {
                  var n = e[t],
                    r = function () {
                      var r = e[t];
                      n !== r && (v("SCROLL"), s()), (n = r);
                    };
                  return (
                    e.addEventListener("scroll", r),
                    function () {
                      return e.removeEventListener("scroll", r);
                    }
                  );
                }
              },
              [i.viewport, u, v, s]
            ),
            (0, e.createElement)(
              T,
              { present: o || "hidden" !== p },
              (0, e.createElement)(
                de,
                g({ "data-state": "hidden" === p ? "hidden" : "visible" }, l, {
                  ref: n,
                  onPointerEnter: O(t.onPointerEnter, function () {
                    return v("POINTER_ENTER");
                  }),
                  onPointerLeave: O(t.onPointerLeave, function () {
                    return v("POINTER_LEAVE");
                  }),
                })
              )
            )
          );
        }),
        se = (0, e.forwardRef)(function (t, n) {
          var r = ne(le, t.__scopeScrollArea),
            a = t.forceMount,
            o = h(t, W),
            l = c((0, e.useState)(!1), 2),
            i = l[0],
            u = l[1],
            s = "horizontal" === t.orientation,
            d = Ie(function () {
              if (r.viewport) {
                var e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                u(s ? e : t);
              }
            }, 10);
          return (
            Ne(r.viewport, d),
            Ne(r.content, d),
            (0, e.createElement)(
              T,
              { present: a || i },
              (0, e.createElement)(
                de,
                g({ "data-state": i ? "visible" : "hidden" }, o, { ref: n })
              )
            )
          );
        }),
        de = (0, e.forwardRef)(function (t, n) {
          var r = t.orientation,
            a = void 0 === r ? "vertical" : r,
            o = h(t, V),
            l = ne(le, t.__scopeScrollArea),
            i = (0, e.useRef)(null),
            u = (0, e.useRef)(0),
            s = c(
              (0, e.useState)({
                content: 0,
                viewport: 0,
                scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
              }),
              2
            ),
            d = s[0],
            f = s[1],
            p = Ee(d.viewport, d.content),
            m = v(
              v({}, o),
              {},
              {
                sizes: d,
                onSizesChange: f,
                hasThumb: Boolean(p > 0 && p < 1),
                onThumbChange: function (e) {
                  return (i.current = e);
                },
                onThumbPointerUp: function () {
                  return (u.current = 0);
                },
                onThumbPointerDown: function (e) {
                  return (u.current = e);
                },
              }
            );
          function y(e, t) {
            return (function (e, t, n) {
              var r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "ltr",
                a = Pe(n),
                o = a / 2,
                l = t || o,
                i = a - l,
                u = n.scrollbar.paddingStart + l,
                c = n.scrollbar.size - n.scrollbar.paddingEnd - i,
                s = n.content - n.viewport,
                d = "ltr" === r ? [0, s] : [-1 * s, 0];
              return Ae([u, c], d)(e);
            })(e, u.current, d, t);
          }
          return "horizontal" === a
            ? (0, e.createElement)(
                fe,
                g({}, m, {
                  ref: n,
                  onThumbPositionChange: function () {
                    if (l.viewport && i.current) {
                      var e = ze(l.viewport.scrollLeft, d, l.dir);
                      i.current.style.transform = "translate3d(".concat(
                        e,
                        "px, 0, 0)"
                      );
                    }
                  },
                  onWheelScroll: function (e) {
                    l.viewport && (l.viewport.scrollLeft = e);
                  },
                  onDragScroll: function (e) {
                    l.viewport && (l.viewport.scrollLeft = y(e, l.dir));
                  },
                })
              )
            : "vertical" === a
            ? (0, e.createElement)(
                pe,
                g({}, m, {
                  ref: n,
                  onThumbPositionChange: function () {
                    if (l.viewport && i.current) {
                      var e = ze(l.viewport.scrollTop, d);
                      i.current.style.transform = "translate3d(0, ".concat(
                        e,
                        "px, 0)"
                      );
                    }
                  },
                  onWheelScroll: function (e) {
                    l.viewport && (l.viewport.scrollTop = e);
                  },
                  onDragScroll: function (e) {
                    l.viewport && (l.viewport.scrollTop = y(e));
                  },
                })
              )
            : null;
        }),
        fe = (0, e.forwardRef)(function (t, n) {
          var r = t.sizes,
            a = t.onSizesChange,
            o = h(t, U),
            l = ne(le, t.__scopeScrollArea),
            i = c((0, e.useState)(), 2),
            u = i[0],
            s = i[1],
            d = (0, e.useRef)(null),
            p = w(n, d, l.onScrollbarXChange);
          return (
            (0, e.useEffect)(
              function () {
                d.current && s(getComputedStyle(d.current));
              },
              [d]
            ),
            (0, e.createElement)(
              ge,
              g({ "data-orientation": "horizontal" }, o, {
                ref: p,
                sizes: r,
                style: v(
                  f(
                    {
                      bottom: 0,
                      left:
                        "rtl" === l.dir
                          ? "var(--radix-scroll-area-corner-width)"
                          : 0,
                      right:
                        "ltr" === l.dir
                          ? "var(--radix-scroll-area-corner-width)"
                          : 0,
                    },
                    "--radix-scroll-area-thumb-width",
                    Pe(r) + "px"
                  ),
                  t.style
                ),
                onThumbPointerDown: function (e) {
                  return t.onThumbPointerDown(e.x);
                },
                onDragScroll: function (e) {
                  return t.onDragScroll(e.x);
                },
                onWheelScroll: function (e, n) {
                  if (l.viewport) {
                    var r = l.viewport.scrollLeft + e.deltaX;
                    t.onWheelScroll(r), _e(r, n) && e.preventDefault();
                  }
                },
                onResize: function () {
                  d.current &&
                    l.viewport &&
                    u &&
                    a({
                      content: l.viewport.scrollWidth,
                      viewport: l.viewport.offsetWidth,
                      scrollbar: {
                        size: d.current.clientWidth,
                        paddingStart: Ce(u.paddingLeft),
                        paddingEnd: Ce(u.paddingRight),
                      },
                    });
                },
              })
            )
          );
        }),
        pe = (0, e.forwardRef)(function (t, n) {
          var r = t.sizes,
            a = t.onSizesChange,
            o = h(t, K),
            l = ne(le, t.__scopeScrollArea),
            i = c((0, e.useState)(), 2),
            u = i[0],
            s = i[1],
            d = (0, e.useRef)(null),
            p = w(n, d, l.onScrollbarYChange);
          return (
            (0, e.useEffect)(
              function () {
                d.current && s(getComputedStyle(d.current));
              },
              [d]
            ),
            (0, e.createElement)(
              ge,
              g({ "data-orientation": "vertical" }, o, {
                ref: p,
                sizes: r,
                style: v(
                  f(
                    {
                      top: 0,
                      right: "ltr" === l.dir ? 0 : void 0,
                      left: "rtl" === l.dir ? 0 : void 0,
                      bottom: "var(--radix-scroll-area-corner-height)",
                    },
                    "--radix-scroll-area-thumb-height",
                    Pe(r) + "px"
                  ),
                  t.style
                ),
                onThumbPointerDown: function (e) {
                  return t.onThumbPointerDown(e.y);
                },
                onDragScroll: function (e) {
                  return t.onDragScroll(e.y);
                },
                onWheelScroll: function (e, n) {
                  if (l.viewport) {
                    var r = l.viewport.scrollTop + e.deltaY;
                    t.onWheelScroll(r), _e(r, n) && e.preventDefault();
                  }
                },
                onResize: function () {
                  d.current &&
                    l.viewport &&
                    u &&
                    a({
                      content: l.viewport.scrollHeight,
                      viewport: l.viewport.offsetHeight,
                      scrollbar: {
                        size: d.current.clientHeight,
                        paddingStart: Ce(u.paddingTop),
                        paddingEnd: Ce(u.paddingBottom),
                      },
                    });
                },
              })
            )
          );
        }),
        ve = c(Z(le), 2),
        me = ve[0],
        he = ve[1],
        ge = (0, e.forwardRef)(function (t, n) {
          var r = t.__scopeScrollArea,
            a = t.sizes,
            o = t.hasThumb,
            l = t.onThumbChange,
            i = t.onThumbPointerUp,
            u = t.onThumbPointerDown,
            s = t.onThumbPositionChange,
            d = t.onDragScroll,
            f = t.onWheelScroll,
            p = t.onResize,
            m = h(t, Q),
            y = ne(le, r),
            b = c((0, e.useState)(null), 2),
            S = b[0],
            k = b[1],
            x = w(n, function (e) {
              return k(e);
            }),
            C = (0, e.useRef)(null),
            E = (0, e.useRef)(""),
            P = y.viewport,
            z = a.content - a.viewport,
            _ = B(f),
            T = B(s),
            I = Ie(p, 10);
          function N(e) {
            if (C.current) {
              var t = e.clientX - C.current.left,
                n = e.clientY - C.current.top;
              d({ x: t, y: n });
            }
          }
          return (
            (0, e.useEffect)(
              function () {
                var e = function (e) {
                  var t = e.target;
                  (null === S || void 0 === S ? void 0 : S.contains(t)) &&
                    _(e, z);
                };
                return (
                  document.addEventListener("wheel", e, { passive: !1 }),
                  function () {
                    return document.removeEventListener("wheel", e, {
                      passive: !1,
                    });
                  }
                );
              },
              [P, S, z, _]
            ),
            (0, e.useEffect)(T, [a, T]),
            Ne(S, I),
            Ne(y.content, I),
            (0, e.createElement)(
              me,
              {
                scope: r,
                scrollbar: S,
                hasThumb: o,
                onThumbChange: B(l),
                onThumbPointerUp: B(i),
                onThumbPositionChange: T,
                onThumbPointerDown: B(u),
              },
              (0, e.createElement)(
                A.div,
                g({}, m, {
                  ref: x,
                  style: v({ position: "absolute" }, m.style),
                  onPointerDown: O(t.onPointerDown, function (e) {
                    0 === e.button &&
                      (e.target.setPointerCapture(e.pointerId),
                      (C.current = S.getBoundingClientRect()),
                      (E.current = document.body.style.webkitUserSelect),
                      (document.body.style.webkitUserSelect = "none"),
                      y.viewport && (y.viewport.style.scrollBehavior = "auto"),
                      N(e));
                  }),
                  onPointerMove: O(t.onPointerMove, N),
                  onPointerUp: O(t.onPointerUp, function (e) {
                    var t = e.target;
                    t.hasPointerCapture(e.pointerId) &&
                      t.releasePointerCapture(e.pointerId),
                      (document.body.style.webkitUserSelect = E.current),
                      y.viewport && (y.viewport.style.scrollBehavior = ""),
                      (C.current = null);
                  }),
                })
              )
            )
          );
        }),
        ye = "ScrollAreaThumb",
        be = (0, e.forwardRef)(function (t, n) {
          var r = t.forceMount,
            a = h(t, $),
            o = he(ye, t.__scopeScrollArea);
          return (0,
          e.createElement)(T, { present: r || o.hasThumb }, (0, e.createElement)(we, g({ ref: n }, a)));
        }),
        we = (0, e.forwardRef)(function (t, n) {
          var r = t.__scopeScrollArea,
            a = t.style,
            o = h(t, q),
            l = ne(ye, r),
            i = he(ye, r),
            u = i.onThumbPositionChange,
            c = w(n, function (e) {
              return i.onThumbChange(e);
            }),
            s = (0, e.useRef)(),
            d = Ie(function () {
              s.current && (s.current(), (s.current = void 0));
            }, 100);
          return (
            (0, e.useEffect)(
              function () {
                var e = l.viewport;
                if (e) {
                  var t = function () {
                    if ((d(), !s.current)) {
                      var t = Te(e, u);
                      (s.current = t), u();
                    }
                  };
                  return (
                    u(),
                    e.addEventListener("scroll", t),
                    function () {
                      return e.removeEventListener("scroll", t);
                    }
                  );
                }
              },
              [l.viewport, d, u]
            ),
            (0, e.createElement)(
              A.div,
              g({ "data-state": i.hasThumb ? "visible" : "hidden" }, o, {
                ref: c,
                style: v(
                  {
                    width: "var(--radix-scroll-area-thumb-width)",
                    height: "var(--radix-scroll-area-thumb-height)",
                  },
                  a
                ),
                onPointerDownCapture: O(t.onPointerDownCapture, function (e) {
                  var t = e.target.getBoundingClientRect(),
                    n = e.clientX - t.left,
                    r = e.clientY - t.top;
                  i.onThumbPointerDown({ x: n, y: r });
                }),
                onPointerUp: O(t.onPointerUp, i.onThumbPointerUp),
              })
            )
          );
        }),
        Se = "ScrollAreaCorner",
        ke = (0, e.forwardRef)(function (t, n) {
          var r = ne(Se, t.__scopeScrollArea),
            a = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && a
            ? (0, e.createElement)(xe, g({}, t, { ref: n }))
            : null;
        }),
        xe = (0, e.forwardRef)(function (t, n) {
          var r = t.__scopeScrollArea,
            a = h(t, X),
            o = ne(Se, r),
            l = c((0, e.useState)(0), 2),
            i = l[0],
            u = l[1],
            s = c((0, e.useState)(0), 2),
            d = s[0],
            f = s[1],
            p = Boolean(i && d);
          return (
            Ne(o.scrollbarX, function () {
              var e,
                t =
                  (null === (e = o.scrollbarX) || void 0 === e
                    ? void 0
                    : e.offsetHeight) || 0;
              o.onCornerHeightChange(t), f(t);
            }),
            Ne(o.scrollbarY, function () {
              var e,
                t =
                  (null === (e = o.scrollbarY) || void 0 === e
                    ? void 0
                    : e.offsetWidth) || 0;
              o.onCornerWidthChange(t), u(t);
            }),
            p
              ? (0, e.createElement)(
                  A.div,
                  g({}, a, {
                    ref: n,
                    style: v(
                      {
                        width: i,
                        height: d,
                        position: "absolute",
                        right: "ltr" === o.dir ? 0 : void 0,
                        left: "rtl" === o.dir ? 0 : void 0,
                        bottom: 0,
                      },
                      t.style
                    ),
                  })
                )
              : null
          );
        });
      function Ce(e) {
        return e ? parseInt(e, 10) : 0;
      }
      function Ee(e, t) {
        var n = e / t;
        return isNaN(n) ? 0 : n;
      }
      function Pe(e) {
        var t = Ee(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18);
      }
      function ze(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "ltr",
          r = Pe(t),
          a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          o = t.scrollbar.size - a,
          l = t.content - t.viewport,
          i = o - r,
          u = (function (e, t) {
            var n = c(t, 2),
              r = n[0],
              a = n[1];
            return Math.min(a, Math.max(r, e));
          })(e, "ltr" === n ? [0, l] : [-1 * l, 0]);
        return Ae([0, l], [0, i])(u);
      }
      function Ae(e, t) {
        return function (n) {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          var r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0]);
        };
      }
      function _e(e, t) {
        return e > 0 && e < t;
      }
      var Te = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function () {},
          n = { left: e.scrollLeft, top: e.scrollTop },
          r = 0;
        return (
          (function a() {
            var o = { left: e.scrollLeft, top: e.scrollTop },
              l = n.left !== o.left,
              i = n.top !== o.top;
            (l || i) && t(), (n = o), (r = window.requestAnimationFrame(a));
          })(),
          function () {
            return window.cancelAnimationFrame(r);
          }
        );
      };
      function Ie(t, n) {
        var r = B(t),
          a = (0, e.useRef)(0);
        return (
          (0, e.useEffect)(function () {
            return function () {
              return window.clearTimeout(a.current);
            };
          }, []),
          (0, e.useCallback)(
            function () {
              window.clearTimeout(a.current),
                (a.current = window.setTimeout(r, n));
            },
            [r, n]
          )
        );
      }
      function Ne(e, t) {
        var n = B(t);
        _(
          function () {
            var t = 0;
            if (e) {
              var r = new ResizeObserver(function () {
                cancelAnimationFrame(t), (t = window.requestAnimationFrame(n));
              });
              return (
                r.observe(e),
                function () {
                  window.cancelAnimationFrame(t), r.unobserve(e);
                }
              );
            }
          },
          [e, n]
        );
      }
      var De = re,
        Be = oe,
        Re = ie,
        Oe = be,
        Fe = ke;
      function Le(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0,
          r = {};
        return (
          Object.keys(e).forEach(function (a) {
            r[a] = e[a]
              .reduce(function (e, r) {
                if (r) {
                  var a = t(r);
                  "" !== a && e.push(a), n && n[r] && e.push(n[r]);
                }
                return e;
              }, [])
              .join(" ");
          }),
          r
        );
      }
      function Me(e) {
        for (
          var t = "https://mui.com/production-error/?code=" + e, n = 1;
          n < arguments.length;
          n += 1
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified MUI error #" + e + "; visit " + t + " for the full message."
        );
      }
      function je(e) {
        if ("string" !== typeof e) throw new Error(Me(7));
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      function He(e, t) {
        var n = g({}, t);
        return (
          Object.keys(e).forEach(function (r) {
            if (r.toString().match(/^(components|slots)$/))
              n[r] = g({}, e[r], n[r]);
            else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
              var a = e[r] || {},
                o = t[r];
              (n[r] = {}),
                o && Object.keys(o)
                  ? a && Object.keys(a)
                    ? ((n[r] = g({}, o)),
                      Object.keys(a).forEach(function (e) {
                        n[r][e] = He(a[e], o[e]);
                      }))
                    : (n[r] = o)
                  : (n[r] = a);
            } else void 0 === n[r] && (n[r] = e[r]);
          }),
          n
        );
      }
      function We(e) {
        var t = e.theme,
          n = e.name,
          r = e.props;
        return t &&
          t.components &&
          t.components[n] &&
          t.components[n].defaultProps
          ? He(t.components[n].defaultProps, r)
          : r;
      }
      function Ve(e) {
        return null !== e && "object" === typeof e && e.constructor === Object;
      }
      function Ue(e) {
        if (!Ve(e)) return e;
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            t[n] = Ue(e[n]);
          }),
          t
        );
      }
      function Ke(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { clone: !0 },
          r = n.clone ? g({}, e) : e;
        return (
          Ve(e) &&
            Ve(t) &&
            Object.keys(t).forEach(function (a) {
              "__proto__" !== a &&
                (Ve(t[a]) && a in e && Ve(e[a])
                  ? (r[a] = Ke(e[a], t[a], n))
                  : n.clone
                  ? (r[a] = Ve(t[a]) ? Ue(t[a]) : t[a])
                  : (r[a] = t[a]));
            }),
          r
        );
      }
      var Qe = ["values", "unit", "step"],
        $e = function (e) {
          var t =
            Object.keys(e).map(function (t) {
              return { key: t, val: e[t] };
            }) || [];
          return (
            t.sort(function (e, t) {
              return e.val - t.val;
            }),
            t.reduce(function (e, t) {
              return g({}, e, f({}, t.key, t.val));
            }, {})
          );
        };
      function qe(e) {
        var t = e.values,
          n =
            void 0 === t ? { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } : t,
          r = e.unit,
          a = void 0 === r ? "px" : r,
          o = e.step,
          l = void 0 === o ? 5 : o,
          i = m(e, Qe),
          u = $e(n),
          c = Object.keys(u);
        function s(e) {
          var t = "number" === typeof n[e] ? n[e] : e;
          return "@media (min-width:".concat(t).concat(a, ")");
        }
        function d(e) {
          var t = "number" === typeof n[e] ? n[e] : e;
          return "@media (max-width:".concat(t - l / 100).concat(a, ")");
        }
        function f(e, t) {
          var r = c.indexOf(t);
          return (
            "@media (min-width:"
              .concat("number" === typeof n[e] ? n[e] : e)
              .concat(a, ") and ") +
            "(max-width:"
              .concat(
                (-1 !== r && "number" === typeof n[c[r]] ? n[c[r]] : t) -
                  l / 100
              )
              .concat(a, ")")
          );
        }
        return g(
          {
            keys: c,
            values: u,
            up: s,
            down: d,
            between: f,
            only: function (e) {
              return c.indexOf(e) + 1 < c.length
                ? f(e, c[c.indexOf(e) + 1])
                : s(e);
            },
            not: function (e) {
              var t = c.indexOf(e);
              return 0 === t
                ? s(c[1])
                : t === c.length - 1
                ? d(c[t])
                : f(e, c[c.indexOf(e) + 1]).replace(
                    "@media",
                    "@media not all and"
                  );
            },
            unit: a,
          },
          i
        );
      }
      var Xe = { borderRadius: 4 },
        Ge = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        Je = {
          keys: ["xs", "sm", "md", "lg", "xl"],
          up: function (e) {
            return "@media (min-width:".concat(Ge[e], "px)");
          },
        };
      function Ye(e, t, n) {
        var r = e.theme || {};
        if (Array.isArray(t)) {
          var a = r.breakpoints || Je;
          return t.reduce(function (e, r, o) {
            return (e[a.up(a.keys[o])] = n(t[o])), e;
          }, {});
        }
        if ("object" === typeof t) {
          var o = r.breakpoints || Je;
          return Object.keys(t).reduce(function (e, r) {
            if (-1 !== Object.keys(o.values || Ge).indexOf(r)) {
              e[o.up(r)] = n(t[r], r);
            } else {
              var a = r;
              e[a] = t[a];
            }
            return e;
          }, {});
        }
        return n(t);
      }
      function Ze() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          (null == (e = t.keys)
            ? void 0
            : e.reduce(function (e, n) {
                return (e[t.up(n)] = {}), e;
              }, {})) || {}
        );
      }
      function et(e, t) {
        return e.reduce(function (e, t) {
          var n = e[t];
          return (!n || 0 === Object.keys(n).length) && delete e[t], e;
        }, t);
      }
      function tt(e, t) {
        var n =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!t || "string" !== typeof t) return null;
        if (e && e.vars && n) {
          var r = "vars."
            .concat(t)
            .split(".")
            .reduce(function (e, t) {
              return e && e[t] ? e[t] : null;
            }, e);
          if (null != r) return r;
        }
        return t.split(".").reduce(function (e, t) {
          return e && null != e[t] ? e[t] : null;
        }, e);
      }
      function nt(e, t, n) {
        var r,
          a =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
        return (
          (r =
            "function" === typeof e
              ? e(n)
              : Array.isArray(e)
              ? e[n] || a
              : tt(e, n) || a),
          t && (r = t(r, a, e)),
          r
        );
      }
      var rt = function (e) {
        var t = e.prop,
          n = e.cssProperty,
          r = void 0 === n ? e.prop : n,
          a = e.themeKey,
          o = e.transform,
          l = function (e) {
            if (null == e[t]) return null;
            var n = e[t],
              l = tt(e.theme, a) || {};
            return Ye(e, n, function (e) {
              var n = nt(l, o, e);
              return (
                e === n &&
                  "string" === typeof e &&
                  (n = nt(
                    l,
                    o,
                    "".concat(t).concat("default" === e ? "" : je(e)),
                    e
                  )),
                !1 === r ? n : f({}, r, n)
              );
            });
          };
        return (l.propTypes = {}), (l.filterProps = [t]), l;
      };
      var at = function (e, t) {
        return t ? Ke(e, t, { clone: !1 }) : e;
      };
      var ot = { m: "margin", p: "padding" },
        lt = {
          t: "Top",
          r: "Right",
          b: "Bottom",
          l: "Left",
          x: ["Left", "Right"],
          y: ["Top", "Bottom"],
        },
        it = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
        ut = (function (e) {
          var t = {};
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        })(function (e) {
          if (e.length > 2) {
            if (!it[e]) return [e];
            e = it[e];
          }
          var t = c(e.split(""), 2),
            n = t[0],
            r = t[1],
            a = ot[n],
            o = lt[r] || "";
          return Array.isArray(o)
            ? o.map(function (e) {
                return a + e;
              })
            : [a + o];
        }),
        ct = [
          "m",
          "mt",
          "mr",
          "mb",
          "ml",
          "mx",
          "my",
          "margin",
          "marginTop",
          "marginRight",
          "marginBottom",
          "marginLeft",
          "marginX",
          "marginY",
          "marginInline",
          "marginInlineStart",
          "marginInlineEnd",
          "marginBlock",
          "marginBlockStart",
          "marginBlockEnd",
        ],
        st = [
          "p",
          "pt",
          "pr",
          "pb",
          "pl",
          "px",
          "py",
          "padding",
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
          "paddingX",
          "paddingY",
          "paddingInline",
          "paddingInlineStart",
          "paddingInlineEnd",
          "paddingBlock",
          "paddingBlockStart",
          "paddingBlockEnd",
        ],
        dt = [].concat(ct, st);
      function ft(e, t, n, r) {
        var a,
          o = null != (a = tt(e, t, !1)) ? a : n;
        return "number" === typeof o
          ? function (e) {
              return "string" === typeof e ? e : o * e;
            }
          : Array.isArray(o)
          ? function (e) {
              return "string" === typeof e ? e : o[e];
            }
          : "function" === typeof o
          ? o
          : function () {};
      }
      function pt(e) {
        return ft(e, "spacing", 8);
      }
      function vt(e, t) {
        if ("string" === typeof t || null == t) return t;
        var n = e(Math.abs(t));
        return t >= 0 ? n : "number" === typeof n ? -n : "-".concat(n);
      }
      function mt(e, t, n, r) {
        if (-1 === t.indexOf(n)) return null;
        var a = (function (e, t) {
          return function (n) {
            return e.reduce(function (e, r) {
              return (e[r] = vt(t, n)), e;
            }, {});
          };
        })(ut(n), r);
        return Ye(e, e[n], a);
      }
      function ht(e, t) {
        var n = pt(e.theme);
        return Object.keys(e)
          .map(function (r) {
            return mt(e, t, r, n);
          })
          .reduce(at, {});
      }
      function gt(e) {
        return ht(e, ct);
      }
      function yt(e) {
        return ht(e, st);
      }
      function bt(e) {
        return ht(e, dt);
      }
      (gt.propTypes = {}),
        (gt.filterProps = ct),
        (yt.propTypes = {}),
        (yt.filterProps = st),
        (bt.propTypes = {}),
        (bt.filterProps = dt);
      function wt() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
        if (e.mui) return e;
        var t = pt({ spacing: e }),
          n = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (0 === n.length ? [1] : n)
              .map(function (e) {
                var n = t(e);
                return "number" === typeof n ? "".concat(n, "px") : n;
              })
              .join(" ");
          };
        return (n.mui = !0), n;
      }
      var St = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var r = t.reduce(function (e, t) {
            return (
              t.filterProps.forEach(function (n) {
                e[n] = t;
              }),
              e
            );
          }, {}),
          a = function (e) {
            return Object.keys(e).reduce(function (t, n) {
              return r[n] ? at(t, r[n](e)) : t;
            }, {});
          };
        return (
          (a.propTypes = {}),
          (a.filterProps = t.reduce(function (e, t) {
            return e.concat(t.filterProps);
          }, [])),
          a
        );
      };
      function kt(e) {
        return "number" !== typeof e ? e : "".concat(e, "px solid");
      }
      var xt = rt({ prop: "border", themeKey: "borders", transform: kt }),
        Ct = rt({ prop: "borderTop", themeKey: "borders", transform: kt }),
        Et = rt({ prop: "borderRight", themeKey: "borders", transform: kt }),
        Pt = rt({ prop: "borderBottom", themeKey: "borders", transform: kt }),
        zt = rt({ prop: "borderLeft", themeKey: "borders", transform: kt }),
        At = rt({ prop: "borderColor", themeKey: "palette" }),
        _t = rt({ prop: "borderTopColor", themeKey: "palette" }),
        Tt = rt({ prop: "borderRightColor", themeKey: "palette" }),
        It = rt({ prop: "borderBottomColor", themeKey: "palette" }),
        Nt = rt({ prop: "borderLeftColor", themeKey: "palette" }),
        Dt = function (e) {
          if (void 0 !== e.borderRadius && null !== e.borderRadius) {
            var t = ft(e.theme, "shape.borderRadius", 4);
            return Ye(e, e.borderRadius, function (e) {
              return { borderRadius: vt(t, e) };
            });
          }
          return null;
        };
      (Dt.propTypes = {}), (Dt.filterProps = ["borderRadius"]);
      St(xt, Ct, Et, Pt, zt, At, _t, Tt, It, Nt, Dt);
      var Bt = function (e) {
        if (void 0 !== e.gap && null !== e.gap) {
          var t = ft(e.theme, "spacing", 8);
          return Ye(e, e.gap, function (e) {
            return { gap: vt(t, e) };
          });
        }
        return null;
      };
      (Bt.propTypes = {}), (Bt.filterProps = ["gap"]);
      var Rt = function (e) {
        if (void 0 !== e.columnGap && null !== e.columnGap) {
          var t = ft(e.theme, "spacing", 8);
          return Ye(e, e.columnGap, function (e) {
            return { columnGap: vt(t, e) };
          });
        }
        return null;
      };
      (Rt.propTypes = {}), (Rt.filterProps = ["columnGap"]);
      var Ot = function (e) {
        if (void 0 !== e.rowGap && null !== e.rowGap) {
          var t = ft(e.theme, "spacing", 8);
          return Ye(e, e.rowGap, function (e) {
            return { rowGap: vt(t, e) };
          });
        }
        return null;
      };
      (Ot.propTypes = {}), (Ot.filterProps = ["rowGap"]);
      St(
        Bt,
        Rt,
        Ot,
        rt({ prop: "gridColumn" }),
        rt({ prop: "gridRow" }),
        rt({ prop: "gridAutoFlow" }),
        rt({ prop: "gridAutoColumns" }),
        rt({ prop: "gridAutoRows" }),
        rt({ prop: "gridTemplateColumns" }),
        rt({ prop: "gridTemplateRows" }),
        rt({ prop: "gridTemplateAreas" }),
        rt({ prop: "gridArea" })
      );
      function Ft(e, t) {
        return "grey" === t ? t : e;
      }
      St(
        rt({ prop: "color", themeKey: "palette", transform: Ft }),
        rt({
          prop: "bgcolor",
          cssProperty: "backgroundColor",
          themeKey: "palette",
          transform: Ft,
        }),
        rt({ prop: "backgroundColor", themeKey: "palette", transform: Ft })
      );
      function Lt(e) {
        return e <= 1 && 0 !== e ? "".concat(100 * e, "%") : e;
      }
      var Mt = rt({ prop: "width", transform: Lt }),
        jt = function (e) {
          if (void 0 !== e.maxWidth && null !== e.maxWidth) {
            return Ye(e, e.maxWidth, function (t) {
              var n,
                r,
                a =
                  (null == (n = e.theme) ||
                  null == (n = n.breakpoints) ||
                  null == (n = n.values)
                    ? void 0
                    : n[t]) || Ge[t];
              return a
                ? "px" !==
                  (null == (r = e.theme) || null == (r = r.breakpoints)
                    ? void 0
                    : r.unit)
                  ? { maxWidth: "".concat(a).concat(e.theme.breakpoints.unit) }
                  : { maxWidth: a }
                : { maxWidth: Lt(t) };
            });
          }
          return null;
        };
      jt.filterProps = ["maxWidth"];
      var Ht = rt({ prop: "minWidth", transform: Lt }),
        Wt = rt({ prop: "height", transform: Lt }),
        Vt = rt({ prop: "maxHeight", transform: Lt }),
        Ut = rt({ prop: "minHeight", transform: Lt }),
        Kt =
          (rt({ prop: "size", cssProperty: "width", transform: Lt }),
          rt({ prop: "size", cssProperty: "height", transform: Lt }),
          St(Mt, jt, Ht, Wt, Vt, Ut, rt({ prop: "boxSizing" })),
          {
            border: { themeKey: "borders", transform: kt },
            borderTop: { themeKey: "borders", transform: kt },
            borderRight: { themeKey: "borders", transform: kt },
            borderBottom: { themeKey: "borders", transform: kt },
            borderLeft: { themeKey: "borders", transform: kt },
            borderColor: { themeKey: "palette" },
            borderTopColor: { themeKey: "palette" },
            borderRightColor: { themeKey: "palette" },
            borderBottomColor: { themeKey: "palette" },
            borderLeftColor: { themeKey: "palette" },
            borderRadius: { themeKey: "shape.borderRadius", style: Dt },
            color: { themeKey: "palette", transform: Ft },
            bgcolor: {
              themeKey: "palette",
              cssProperty: "backgroundColor",
              transform: Ft,
            },
            backgroundColor: { themeKey: "palette", transform: Ft },
            p: { style: yt },
            pt: { style: yt },
            pr: { style: yt },
            pb: { style: yt },
            pl: { style: yt },
            px: { style: yt },
            py: { style: yt },
            padding: { style: yt },
            paddingTop: { style: yt },
            paddingRight: { style: yt },
            paddingBottom: { style: yt },
            paddingLeft: { style: yt },
            paddingX: { style: yt },
            paddingY: { style: yt },
            paddingInline: { style: yt },
            paddingInlineStart: { style: yt },
            paddingInlineEnd: { style: yt },
            paddingBlock: { style: yt },
            paddingBlockStart: { style: yt },
            paddingBlockEnd: { style: yt },
            m: { style: gt },
            mt: { style: gt },
            mr: { style: gt },
            mb: { style: gt },
            ml: { style: gt },
            mx: { style: gt },
            my: { style: gt },
            margin: { style: gt },
            marginTop: { style: gt },
            marginRight: { style: gt },
            marginBottom: { style: gt },
            marginLeft: { style: gt },
            marginX: { style: gt },
            marginY: { style: gt },
            marginInline: { style: gt },
            marginInlineStart: { style: gt },
            marginInlineEnd: { style: gt },
            marginBlock: { style: gt },
            marginBlockStart: { style: gt },
            marginBlockEnd: { style: gt },
            displayPrint: {
              cssProperty: !1,
              transform: function (e) {
                return { "@media print": { display: e } };
              },
            },
            display: {},
            overflow: {},
            textOverflow: {},
            visibility: {},
            whiteSpace: {},
            flexBasis: {},
            flexDirection: {},
            flexWrap: {},
            justifyContent: {},
            alignItems: {},
            alignContent: {},
            order: {},
            flex: {},
            flexGrow: {},
            flexShrink: {},
            alignSelf: {},
            justifyItems: {},
            justifySelf: {},
            gap: { style: Bt },
            rowGap: { style: Ot },
            columnGap: { style: Rt },
            gridColumn: {},
            gridRow: {},
            gridAutoFlow: {},
            gridAutoColumns: {},
            gridAutoRows: {},
            gridTemplateColumns: {},
            gridTemplateRows: {},
            gridTemplateAreas: {},
            gridArea: {},
            position: {},
            zIndex: { themeKey: "zIndex" },
            top: {},
            right: {},
            bottom: {},
            left: {},
            boxShadow: { themeKey: "shadows" },
            width: { transform: Lt },
            maxWidth: { style: jt },
            minWidth: { transform: Lt },
            height: { transform: Lt },
            maxHeight: { transform: Lt },
            minHeight: { transform: Lt },
            boxSizing: {},
            fontFamily: { themeKey: "typography" },
            fontSize: { themeKey: "typography" },
            fontStyle: { themeKey: "typography" },
            fontWeight: { themeKey: "typography" },
            letterSpacing: {},
            textTransform: {},
            lineHeight: {},
            textAlign: {},
            typography: { cssProperty: !1, themeKey: "typography" },
          });
      var Qt = (function () {
        function e(e, t, n, r) {
          var a,
            o = (f((a = {}), e, t), f(a, "theme", n), a),
            l = r[e];
          if (!l) return f({}, e, t);
          var i = l.cssProperty,
            u = void 0 === i ? e : i,
            c = l.themeKey,
            s = l.transform,
            d = l.style;
          if (null == t) return null;
          if ("typography" === c && "inherit" === t) return f({}, e, t);
          var p = tt(n, c) || {};
          if (d) return d(o);
          return Ye(o, t, function (t) {
            var n = nt(p, s, t);
            return (
              t === n &&
                "string" === typeof t &&
                (n = nt(
                  p,
                  s,
                  "".concat(e).concat("default" === t ? "" : je(t)),
                  t
                )),
              !1 === u ? n : f({}, u, n)
            );
          });
        }
        return function t(n) {
          var r,
            a = n || {},
            o = a.sx,
            l = a.theme,
            i = void 0 === l ? {} : l;
          if (!o) return null;
          var u = null != (r = i.unstable_sxConfig) ? r : Kt;
          function c(n) {
            var r = n;
            if ("function" === typeof n) r = n(i);
            else if ("object" !== typeof n) return n;
            if (!r) return null;
            var a = Ze(i.breakpoints),
              o = Object.keys(a),
              l = a;
            return (
              Object.keys(r).forEach(function (n) {
                var a,
                  o,
                  c = ((a = r[n]), (o = i), "function" === typeof a ? a(o) : a);
                if (null !== c && void 0 !== c)
                  if ("object" === typeof c)
                    if (u[n]) l = at(l, e(n, c, i, u));
                    else {
                      var s = Ye({ theme: i }, c, function (e) {
                        return f({}, n, e);
                      });
                      !(function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        var r = t.reduce(function (e, t) {
                            return e.concat(Object.keys(t));
                          }, []),
                          a = new Set(r);
                        return t.every(function (e) {
                          return a.size === Object.keys(e).length;
                        });
                      })(s, c)
                        ? (l = at(l, s))
                        : (l[n] = t({ sx: c, theme: i }));
                    }
                  else l = at(l, e(n, c, i, u));
              }),
              et(o, l)
            );
          }
          return Array.isArray(o) ? o.map(c) : c(o);
        };
      })();
      Qt.filterProps = ["sx"];
      var $t = Qt,
        qt = ["breakpoints", "palette", "spacing", "shape"];
      var Xt = function () {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.breakpoints,
            n = void 0 === t ? {} : t,
            r = e.palette,
            a = void 0 === r ? {} : r,
            o = e.spacing,
            l = e.shape,
            i = void 0 === l ? {} : l,
            u = m(e, qt),
            c = qe(n),
            s = wt(o),
            d = Ke(
              {
                breakpoints: c,
                direction: "ltr",
                components: {},
                palette: g({ mode: "light" }, a),
                spacing: s,
                shape: g({}, Xe, i),
              },
              u
            ),
            f = arguments.length,
            p = new Array(f > 1 ? f - 1 : 0),
            v = 1;
          v < f;
          v++
        )
          p[v - 1] = arguments[v];
        return (
          ((d = p.reduce(function (e, t) {
            return Ke(e, t);
          }, d)).unstable_sxConfig = g(
            {},
            Kt,
            null == u ? void 0 : u.unstable_sxConfig
          )),
          (d.unstable_sx = function (e) {
            return $t({ sx: e, theme: this });
          }),
          d
        );
      };
      var Gt = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement("style");
                    return (
                      t.setAttribute("data-emotion", e.key),
                      void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                      t.appendChild(document.createTextNode("")),
                      t.setAttribute("data-s", ""),
                      t
                    );
                  })(this)
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(t);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (r) {
                  0;
                }
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        Jt = Math.abs,
        Yt = String.fromCharCode,
        Zt = Object.assign;
      function en(e) {
        return e.trim();
      }
      function tn(e, t, n) {
        return e.replace(t, n);
      }
      function nn(e, t) {
        return e.indexOf(t);
      }
      function rn(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function an(e, t, n) {
        return e.slice(t, n);
      }
      function on(e) {
        return e.length;
      }
      function ln(e) {
        return e.length;
      }
      function un(e, t) {
        return t.push(e), e;
      }
      var cn = 1,
        sn = 1,
        dn = 0,
        fn = 0,
        pn = 0,
        vn = "";
      function mn(e, t, n, r, a, o, l) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: o,
          line: cn,
          column: sn,
          length: l,
          return: "",
        };
      }
      function hn(e, t) {
        return Zt(
          mn("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function gn() {
        return (
          (pn = fn > 0 ? rn(vn, --fn) : 0),
          sn--,
          10 === pn && ((sn = 1), cn--),
          pn
        );
      }
      function yn() {
        return (
          (pn = fn < dn ? rn(vn, fn++) : 0),
          sn++,
          10 === pn && ((sn = 1), cn++),
          pn
        );
      }
      function bn() {
        return rn(vn, fn);
      }
      function wn() {
        return fn;
      }
      function Sn(e, t) {
        return an(vn, e, t);
      }
      function kn(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function xn(e) {
        return (cn = sn = 1), (dn = on((vn = e))), (fn = 0), [];
      }
      function Cn(e) {
        return (vn = ""), e;
      }
      function En(e) {
        return en(Sn(fn - 1, An(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function Pn(e) {
        for (; (pn = bn()) && pn < 33; ) yn();
        return kn(e) > 2 || kn(pn) > 3 ? "" : " ";
      }
      function zn(e, t) {
        for (
          ;
          --t &&
          yn() &&
          !(
            pn < 48 ||
            pn > 102 ||
            (pn > 57 && pn < 65) ||
            (pn > 70 && pn < 97)
          );

        );
        return Sn(e, wn() + (t < 6 && 32 == bn() && 32 == yn()));
      }
      function An(e) {
        for (; yn(); )
          switch (pn) {
            case e:
              return fn;
            case 34:
            case 39:
              34 !== e && 39 !== e && An(pn);
              break;
            case 40:
              41 === e && An(e);
              break;
            case 92:
              yn();
          }
        return fn;
      }
      function _n(e, t) {
        for (; yn() && e + pn !== 57 && (e + pn !== 84 || 47 !== bn()); );
        return "/*" + Sn(t, fn - 1) + "*" + Yt(47 === e ? e : yn());
      }
      function Tn(e) {
        for (; !kn(bn()); ) yn();
        return Sn(e, fn);
      }
      var In = "-ms-",
        Nn = "-moz-",
        Dn = "-webkit-",
        Bn = "comm",
        Rn = "rule",
        On = "decl",
        Fn = "@keyframes";
      function Ln(e, t) {
        for (var n = "", r = ln(e), a = 0; a < r; a++)
          n += t(e[a], a, e, t) || "";
        return n;
      }
      function Mn(e, t, n, r) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case On:
            return (e.return = e.return || e.value);
          case Bn:
            return "";
          case Fn:
            return (e.return = e.value + "{" + Ln(e.children, r) + "}");
          case Rn:
            e.value = e.props.join(",");
        }
        return on((n = Ln(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function jn(e) {
        return Cn(Hn("", null, null, null, [""], (e = xn(e)), 0, [0], e));
      }
      function Hn(e, t, n, r, a, o, l, i, u) {
        for (
          var c = 0,
            s = 0,
            d = l,
            f = 0,
            p = 0,
            v = 0,
            m = 1,
            h = 1,
            g = 1,
            y = 0,
            b = "",
            w = a,
            S = o,
            k = r,
            x = b;
          h;

        )
          switch (((v = y), (y = yn()))) {
            case 40:
              if (108 != v && 58 == rn(x, d - 1)) {
                -1 != nn((x += tn(En(y), "&", "&\f")), "&\f") && (g = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              x += En(y);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              x += Pn(v);
              break;
            case 92:
              x += zn(wn() - 1, 7);
              continue;
            case 47:
              switch (bn()) {
                case 42:
                case 47:
                  un(Vn(_n(yn(), wn()), t, n), u);
                  break;
                default:
                  x += "/";
              }
              break;
            case 123 * m:
              i[c++] = on(x) * g;
            case 125 * m:
            case 59:
            case 0:
              switch (y) {
                case 0:
                case 125:
                  h = 0;
                case 59 + s:
                  -1 == g && (x = tn(x, /\f/g, "")),
                    p > 0 &&
                      on(x) - d &&
                      un(
                        p > 32
                          ? Un(x + ";", r, n, d - 1)
                          : Un(tn(x, " ", "") + ";", r, n, d - 2),
                        u
                      );
                  break;
                case 59:
                  x += ";";
                default:
                  if (
                    (un(
                      (k = Wn(x, t, n, c, s, a, i, b, (w = []), (S = []), d)),
                      o
                    ),
                    123 === y)
                  )
                    if (0 === s) Hn(x, t, k, k, w, o, d, i, S);
                    else
                      switch (99 === f && 110 === rn(x, 3) ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Hn(
                            e,
                            k,
                            k,
                            r &&
                              un(Wn(e, k, k, 0, 0, a, i, b, a, (w = []), d), S),
                            a,
                            S,
                            d,
                            i,
                            r ? w : S
                          );
                          break;
                        default:
                          Hn(x, k, k, k, [""], S, 0, i, S);
                      }
              }
              (c = s = p = 0), (m = g = 1), (b = x = ""), (d = l);
              break;
            case 58:
              (d = 1 + on(x)), (p = v);
            default:
              if (m < 1)
                if (123 == y) --m;
                else if (125 == y && 0 == m++ && 125 == gn()) continue;
              switch (((x += Yt(y)), y * m)) {
                case 38:
                  g = s > 0 ? 1 : ((x += "\f"), -1);
                  break;
                case 44:
                  (i[c++] = (on(x) - 1) * g), (g = 1);
                  break;
                case 64:
                  45 === bn() && (x += En(yn())),
                    (f = bn()),
                    (s = d = on((b = x += Tn(wn())))),
                    y++;
                  break;
                case 45:
                  45 === v && 2 == on(x) && (m = 0);
              }
          }
        return o;
      }
      function Wn(e, t, n, r, a, o, l, i, u, c, s) {
        for (
          var d = a - 1, f = 0 === a ? o : [""], p = ln(f), v = 0, m = 0, h = 0;
          v < r;
          ++v
        )
          for (
            var g = 0, y = an(e, d + 1, (d = Jt((m = l[v])))), b = e;
            g < p;
            ++g
          )
            (b = en(m > 0 ? f[g] + " " + y : tn(y, /&\f/g, f[g]))) &&
              (u[h++] = b);
        return mn(e, t, n, 0 === a ? Rn : i, u, c, s);
      }
      function Vn(e, t, n) {
        return mn(e, t, n, Bn, Yt(pn), an(e, 2, -2), 0);
      }
      function Un(e, t, n, r) {
        return mn(e, t, n, On, an(e, 0, r), an(e, r + 1, -1), r);
      }
      var Kn = function (e, t, n) {
          for (
            var r = 0, a = 0;
            (r = a), (a = bn()), 38 === r && 12 === a && (t[n] = 1), !kn(a);

          )
            yn();
          return Sn(e, fn);
        },
        Qn = function (e, t) {
          return Cn(
            (function (e, t) {
              var n = -1,
                r = 44;
              do {
                switch (kn(r)) {
                  case 0:
                    38 === r && 12 === bn() && (t[n] = 1),
                      (e[n] += Kn(fn - 1, t, n));
                    break;
                  case 2:
                    e[n] += En(r);
                    break;
                  case 4:
                    if (44 === r) {
                      (e[++n] = 58 === bn() ? "&\f" : ""), (t[n] = e[n].length);
                      break;
                    }
                  default:
                    e[n] += Yt(r);
                }
              } while ((r = yn()));
              return e;
            })(xn(e), t)
          );
        },
        $n = new WeakMap(),
        qn = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || $n.get(n)) &&
              !r
            ) {
              $n.set(e, !0);
              for (
                var a = [], o = Qn(t, a), l = n.props, i = 0, u = 0;
                i < o.length;
                i++
              )
                for (var c = 0; c < l.length; c++, u++)
                  e.props[u] = a[i]
                    ? o[i].replace(/&\f/g, l[c])
                    : l[c] + " " + o[i];
            }
          }
        },
        Xn = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        };
      function Gn(e, t) {
        switch (
          (function (e, t) {
            return 45 ^ rn(e, 0)
              ? (((((((t << 2) ^ rn(e, 0)) << 2) ^ rn(e, 1)) << 2) ^
                  rn(e, 2)) <<
                  2) ^
                  rn(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return Dn + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return Dn + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return Dn + e + Nn + e + In + e + e;
          case 6828:
          case 4268:
            return Dn + e + In + e + e;
          case 6165:
            return Dn + e + In + "flex-" + e + e;
          case 5187:
            return (
              Dn +
              e +
              tn(e, /(\w+).+(:[^]+)/, Dn + "box-$1$2" + In + "flex-$1$2") +
              e
            );
          case 5443:
            return Dn + e + In + "flex-item-" + tn(e, /flex-|-self/, "") + e;
          case 4675:
            return (
              Dn +
              e +
              In +
              "flex-line-pack" +
              tn(e, /align-content|flex-|-self/, "") +
              e
            );
          case 5548:
            return Dn + e + In + tn(e, "shrink", "negative") + e;
          case 5292:
            return Dn + e + In + tn(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              Dn +
              "box-" +
              tn(e, "-grow", "") +
              Dn +
              e +
              In +
              tn(e, "grow", "positive") +
              e
            );
          case 4554:
            return Dn + tn(e, /([^-])(transform)/g, "$1" + Dn + "$2") + e;
          case 6187:
            return (
              tn(
                tn(tn(e, /(zoom-|grab)/, Dn + "$1"), /(image-set)/, Dn + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return tn(e, /(image-set\([^]*)/, Dn + "$1$`$1");
          case 4968:
            return (
              tn(
                tn(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  Dn + "box-pack:$3" + In + "flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              Dn +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return tn(e, /(.+)-inline(.+)/, Dn + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (on(e) - 1 - t > 6)
              switch (rn(e, t + 1)) {
                case 109:
                  if (45 !== rn(e, t + 4)) break;
                case 102:
                  return (
                    tn(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        Dn +
                        "$2-$3$1" +
                        Nn +
                        (108 == rn(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~nn(e, "stretch")
                    ? Gn(tn(e, "stretch", "fill-available"), t) + e
                    : e;
              }
            break;
          case 4949:
            if (115 !== rn(e, t + 1)) break;
          case 6444:
            switch (rn(e, on(e) - 3 - (~nn(e, "!important") && 10))) {
              case 107:
                return tn(e, ":", ":" + Dn) + e;
              case 101:
                return (
                  tn(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1" +
                      Dn +
                      (45 === rn(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      Dn +
                      "$2$3$1" +
                      In +
                      "$2box$3"
                  ) + e
                );
            }
            break;
          case 5936:
            switch (rn(e, t + 11)) {
              case 114:
                return Dn + e + In + tn(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return Dn + e + In + tn(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return Dn + e + In + tn(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return Dn + e + In + e + e;
        }
        return e;
      }
      var Jn = [
          function (e, t, n, r) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case On:
                  e.return = Gn(e.value, e.length);
                  break;
                case Fn:
                  return Ln([hn(e, { value: tn(e.value, "@", "@" + Dn) })], r);
                case Rn:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join("");
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = t.exec(e)) ? e[0] : e;
                        })(t, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ":read-only":
                        case ":read-write":
                          return Ln(
                            [
                              hn(e, {
                                props: [tn(t, /:(read-\w+)/, ":-moz-$1")],
                              }),
                            ],
                            r
                          );
                        case "::placeholder":
                          return Ln(
                            [
                              hn(e, {
                                props: [
                                  tn(t, /:(plac\w+)/, ":" + Dn + "input-$1"),
                                ],
                              }),
                              hn(e, {
                                props: [tn(t, /:(plac\w+)/, ":-moz-$1")],
                              }),
                              hn(e, {
                                props: [tn(t, /:(plac\w+)/, In + "input-$1")],
                              }),
                            ],
                            r
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        Yn = function (e) {
          var t = e.key;
          if ("css" === t) {
            var n = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(n, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var r = e.stylisPlugins || Jn;
          var a,
            o,
            l = {},
            i = [];
          (a = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), n = 1;
                  n < t.length;
                  n++
                )
                  l[t[n]] = !0;
                i.push(e);
              }
            );
          var u,
            c,
            s = [
              Mn,
              ((c = function (e) {
                u.insert(e);
              }),
              function (e) {
                e.root || ((e = e.return) && c(e));
              }),
            ],
            d = (function (e) {
              var t = ln(e);
              return function (n, r, a, o) {
                for (var l = "", i = 0; i < t; i++) l += e[i](n, r, a, o) || "";
                return l;
              };
            })([qn, Xn].concat(r, s));
          o = function (e, t, n, r) {
            (u = n),
              (function (e) {
                Ln(jn(e), d);
              })(e ? e + "{" + t.styles + "}" : t.styles),
              r && (f.inserted[t.name] = !0);
          };
          var f = {
            key: t,
            sheet: new Gt({
              key: t,
              container: a,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: l,
            registered: {},
            insert: o,
          };
          return f.sheet.hydrate(i), f;
        };
      var Zn = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
      function er(e) {
        var t = Object.create(null);
        return function (n) {
          return void 0 === t[n] && (t[n] = e(n)), t[n];
        };
      }
      var tr = /[A-Z]|^ms/g,
        nr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        rr = function (e) {
          return 45 === e.charCodeAt(1);
        },
        ar = function (e) {
          return null != e && "boolean" !== typeof e;
        },
        or = er(function (e) {
          return rr(e) ? e : e.replace(tr, "-$&").toLowerCase();
        }),
        lr = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" === typeof t)
                return t.replace(nr, function (e, t, n) {
                  return (ur = { name: t, styles: n, next: ur }), t;
                });
          }
          return 1 === Zn[e] || rr(e) || "number" !== typeof t || 0 === t
            ? t
            : t + "px";
        };
      function ir(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (
                (ur = { name: n.name, styles: n.styles, next: ur }), n.name
              );
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; )
                  (ur = { name: r.name, styles: r.styles, next: ur }),
                    (r = r.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n))
                for (var a = 0; a < n.length; a++) r += ir(e, t, n[a]) + ";";
              else
                for (var o in n) {
                  var l = n[o];
                  if ("object" !== typeof l)
                    null != t && void 0 !== t[l]
                      ? (r += o + "{" + t[l] + "}")
                      : ar(l) && (r += or(o) + ":" + lr(o, l) + ";");
                  else if (
                    !Array.isArray(l) ||
                    "string" !== typeof l[0] ||
                    (null != t && void 0 !== t[l[0]])
                  ) {
                    var i = ir(e, t, l);
                    switch (o) {
                      case "animation":
                      case "animationName":
                        r += or(o) + ":" + i + ";";
                        break;
                      default:
                        r += o + "{" + i + "}";
                    }
                  } else
                    for (var u = 0; u < l.length; u++)
                      ar(l[u]) && (r += or(o) + ":" + lr(o, l[u]) + ";");
                }
              return r;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var a = ur,
                o = n(e);
              return (ur = a), ir(e, t, o);
            }
        }
        if (null == t) return n;
        var l = t[n];
        return void 0 !== l ? l : n;
      }
      var ur,
        cr = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
      var sr = function (e, t, n) {
          if (
            1 === e.length &&
            "object" === typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var r = !0,
            a = "";
          ur = void 0;
          var o = e[0];
          null == o || void 0 === o.raw
            ? ((r = !1), (a += ir(n, t, o)))
            : (a += o[0]);
          for (var l = 1; l < e.length; l++)
            (a += ir(n, t, e[l])), r && (a += o[l]);
          cr.lastIndex = 0;
          for (var i, u = ""; null !== (i = cr.exec(a)); ) u += "-" + i[1];
          var c =
            (function (e) {
              for (var t, n = 0, r = 0, a = e.length; a >= 4; ++r, a -= 4)
                (t =
                  1540483477 *
                    (65535 &
                      (t =
                        (255 & e.charCodeAt(r)) |
                        ((255 & e.charCodeAt(++r)) << 8) |
                        ((255 & e.charCodeAt(++r)) << 16) |
                        ((255 & e.charCodeAt(++r)) << 24))) +
                  ((59797 * (t >>> 16)) << 16)),
                  (n =
                    (1540483477 * (65535 & (t ^= t >>> 24)) +
                      ((59797 * (t >>> 16)) << 16)) ^
                    (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
              switch (a) {
                case 3:
                  n ^= (255 & e.charCodeAt(r + 2)) << 16;
                case 2:
                  n ^= (255 & e.charCodeAt(r + 1)) << 8;
                case 1:
                  n =
                    1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                    ((59797 * (n >>> 16)) << 16);
              }
              return (
                ((n =
                  1540483477 * (65535 & (n ^= n >>> 13)) +
                  ((59797 * (n >>> 16)) << 16)) ^
                  (n >>> 15)) >>>
                0
              ).toString(36);
            })(a) + u;
          return { name: c, styles: a, next: ur };
        },
        dr = !!t.useInsertionEffect && t.useInsertionEffect,
        fr =
          dr ||
          function (e) {
            return e();
          },
        pr =
          (dr || e.useLayoutEffect,
          e.createContext(
            "undefined" !== typeof HTMLElement ? Yn({ key: "css" }) : null
          ));
      pr.Provider;
      var vr = function (t) {
        return (0, e.forwardRef)(function (n, r) {
          var a = (0, e.useContext)(pr);
          return t(n, a, r);
        });
      };
      var mr = e.createContext({});
      var hr = function () {
          var t,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            r = e.useContext(mr);
          return r && ((t = r), 0 !== Object.keys(t).length) ? r : n;
        },
        gr = Xt();
      var yr = function () {
        return hr(
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gr
        );
      };
      function br() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        function t() {
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          if (!r.length) return "";
          var o = r[0];
          return "string" !== typeof o ||
            o.match(
              /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
            )
            ? ", ".concat(o)
            : ", var(--"
                .concat(e ? "".concat(e, "-") : "")
                .concat(o)
                .concat(t.apply(void 0, u(r.slice(1))), ")");
        }
        return function (n) {
          for (
            var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            a[o - 1] = arguments[o];
          return "var(--"
            .concat(e ? "".concat(e, "-") : "")
            .concat(n)
            .concat(t.apply(void 0, a), ")");
        };
      }
      function wr(e) {
        if (e.type) return e;
        if ("#" === e.charAt(0))
          return wr(
            (function (e) {
              e = e.slice(1);
              var t = new RegExp(
                  ".{1,".concat(e.length >= 6 ? 2 : 1, "}"),
                  "g"
                ),
                n = e.match(t);
              return (
                n &&
                  1 === n[0].length &&
                  (n = n.map(function (e) {
                    return e + e;
                  })),
                n
                  ? "rgb".concat(4 === n.length ? "a" : "", "(").concat(
                      n
                        .map(function (e, t) {
                          return t < 3
                            ? parseInt(e, 16)
                            : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3;
                        })
                        .join(", "),
                      ")"
                    )
                  : ""
              );
            })(e)
          );
        var t = e.indexOf("("),
          n = e.substring(0, t);
        if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n))
          throw new Error(Me(9, e));
        var r,
          a = e.substring(t + 1, e.length - 1);
        if ("color" === n) {
          if (
            ((r = (a = a.split(" ")).shift()),
            4 === a.length && "/" === a[3].charAt(0) && (a[3] = a[3].slice(1)),
            -1 ===
              [
                "srgb",
                "display-p3",
                "a98-rgb",
                "prophoto-rgb",
                "rec-2020",
              ].indexOf(r))
          )
            throw new Error(Me(10, r));
        } else a = a.split(",");
        return {
          type: n,
          values: (a = a.map(function (e) {
            return parseFloat(e);
          })),
          colorSpace: r,
        };
      }
      var Sr = function (e) {
        var t = wr(e);
        return t.values
          .slice(0, 3)
          .map(function (e, n) {
            return -1 !== t.type.indexOf("hsl") && 0 !== n
              ? "".concat(e, "%")
              : e;
          })
          .join(" ");
      };
      var kr = function (e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : [],
            a = e;
          t.forEach(function (e, o) {
            o === t.length - 1
              ? Array.isArray(a)
                ? (a[Number(e)] = n)
                : a && "object" === typeof a && (a[e] = n)
              : a &&
                "object" === typeof a &&
                (a[e] || (a[e] = r.includes(e) ? [] : {}), (a = a[e]));
          });
        },
        xr = function (e, t, n) {
          !(function e(r) {
            var a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [];
            Object.entries(r).forEach(function (r) {
              var l = c(r, 2),
                i = l[0],
                s = l[1];
              (!n || (n && !n([].concat(u(a), [i])))) &&
                void 0 !== s &&
                null !== s &&
                ("object" === typeof s && Object.keys(s).length > 0
                  ? e(
                      s,
                      [].concat(u(a), [i]),
                      Array.isArray(s) ? [].concat(u(o), [i]) : o
                    )
                  : t([].concat(u(a), [i]), s, o));
            });
          })(e);
        },
        Cr = function (e, t) {
          return "number" === typeof t
            ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some(function (
                t
              ) {
                return e.includes(t);
              }) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0
              ? t
              : "".concat(t, "px")
            : t;
        };
      function Er(e, t) {
        var n = t || {},
          r = n.prefix,
          a = n.shouldSkipGeneratingVar,
          o = {},
          l = {},
          i = {};
        return (
          xr(
            e,
            function (e, t, n) {
              if (
                ("string" === typeof t || "number" === typeof t) &&
                (!a || !a(e, t))
              ) {
                var u = "--"
                  .concat(r ? "".concat(r, "-") : "")
                  .concat(e.join("-"));
                Object.assign(o, f({}, u, Cr(e, t))),
                  kr(l, e, "var(".concat(u, ")"), n),
                  kr(i, e, "var(".concat(u, ", ").concat(t, ")"), n);
              }
            },
            function (e) {
              return "vars" === e[0];
            }
          ),
          { css: o, vars: l, varsWithDefaults: i }
        );
      }
      var Pr = ["colorSchemes", "components"],
        zr = ["light"];
      var Ar = function (e, t) {
          var n = e.colorSchemes,
            r = void 0 === n ? {} : n,
            a = Er(m(e, Pr), t),
            o = a.vars,
            l = a.css,
            i = a.varsWithDefaults,
            u = {},
            s = r.light,
            d = m(r, zr);
          if (
            (Object.entries(d || {}).forEach(function (e) {
              var n = c(e, 2),
                r = n[0],
                a = Er(n[1], t),
                o = a.vars,
                l = a.css,
                s = a.varsWithDefaults;
              (i = Ke(i, s)), (u[r] = { css: l, vars: o });
            }),
            s)
          ) {
            var f = Er(s, t),
              p = f.css,
              v = f.vars,
              h = f.varsWithDefaults;
            (i = Ke(i, h)), (u.light = { css: p, vars: v });
          }
          return {
            vars: i,
            generateCssVars: function (e) {
              return e
                ? { css: g({}, u[e].css), vars: u[e].vars }
                : { css: g({}, l), vars: o };
            },
          };
        },
        _r = g({}, Kt, {
          borderRadius: { themeKey: "radius" },
          boxShadow: { themeKey: "shadow" },
          fontFamily: { themeKey: "fontFamily" },
          fontSize: { themeKey: "fontSize" },
          fontWeight: { themeKey: "fontWeight" },
          letterSpacing: { themeKey: "letterSpacing" },
          lineHeight: { themeKey: "lineHeight" },
        }),
        Tr = {
          grey: {
            50: "#FBFCFE",
            100: "#F0F4F8",
            200: "#DDE7EE",
            300: "#CDD7E1",
            400: "#9FA6AD",
            500: "#636B74",
            600: "#555E68",
            700: "#32383E",
            800: "#171A1C",
            900: "#0B0D0E",
          },
          blue: {
            50: "#EDF5FD",
            100: "#E3EFFB",
            200: "#C7DFF7",
            300: "#97C3F0",
            400: "#4393E4",
            500: "#0B6BCB",
            600: "#185EA5",
            700: "#12467B",
            800: "#0A2744",
            900: "#051423",
          },
          yellow: {
            50: "#FEFAF6",
            100: "#FDF0E1",
            200: "#FCE1C2",
            300: "#F3C896",
            400: "#EA9A3E",
            500: "#9A5B13",
            600: "#72430D",
            700: "#492B08",
            800: "#2E1B05",
            900: "#1D1002",
          },
          red: {
            50: "#FEF6F6",
            100: "#FCE4E4",
            200: "#F7C5C5",
            300: "#F09898",
            400: "#E47474",
            500: "#C41C1C",
            600: "#A51818",
            700: "#7D1212",
            800: "#430A0A",
            900: "#240505",
          },
          green: {
            50: "#F6FEF6",
            100: "#E3FBE3",
            200: "#C7F7C7",
            300: "#A1E8A1",
            400: "#51BC51",
            500: "#1F7A1F",
            600: "#136C13",
            700: "#0A470A",
            800: "#042F04",
            900: "#021D02",
          },
        };
      function Ir(e) {
        var t;
        return (
          !!e[0].match(/^(typography|variants|breakpoints)$/) ||
          !!e[0].match(/sxConfig$/) ||
          ("palette" === e[0] &&
            !(null == (t = e[1]) || !t.match(/^(mode)$/))) ||
          ("focus" === e[0] && "thickness" !== e[1])
        );
      }
      var Nr = function (e) {
          return e;
        },
        Dr = (function () {
          var e = Nr;
          return {
            configure: function (t) {
              e = t;
            },
            generate: function (t) {
              return e(t);
            },
            reset: function () {
              e = Nr;
            },
          };
        })(),
        Br = {
          active: "active",
          checked: "checked",
          completed: "completed",
          disabled: "disabled",
          error: "error",
          expanded: "expanded",
          focused: "focused",
          focusVisible: "focusVisible",
          open: "open",
          readOnly: "readOnly",
          required: "required",
          selected: "selected",
        };
      function Rr(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "Mui",
          r = Br[t];
        return r
          ? "".concat(n, "-").concat(r)
          : "".concat(Dr.generate(e), "-").concat(t);
      }
      var Or = function (e, t) {
          return Rr(e, t, "Mui");
        },
        Fr = function (e, t) {
          return (function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "Mui",
              r = {};
            return (
              t.forEach(function (t) {
                r[t] = Rr(e, t, n);
              }),
              r
            );
          })(e, t, "Mui");
        },
        Lr = function (e, t, n) {
          t.includes("Color") && (e.color = n),
            t.includes("Bg") && (e.backgroundColor = n),
            t.includes("Border") && (e.borderColor = n);
        },
        Mr = function (e, t, n) {
          var r = {};
          return (
            Object.entries(t || {}).forEach(function (t) {
              var a = c(t, 2),
                o = a[0],
                l = a[1];
              if (
                o.match(new RegExp("".concat(e, "(color|bg|border)"), "i")) &&
                l
              ) {
                var i = n ? n(o) : l;
                o.includes("Disabled") &&
                  ((r.pointerEvents = "none"),
                  (r.cursor = "default"),
                  (r["--Icon-color"] = "currentColor")),
                  o.match(/(Hover|Active|Disabled)/) ||
                    (r["--variant-borderWidth"] ||
                      (r["--variant-borderWidth"] = "0px"),
                    o.includes("Border") &&
                      ((r["--variant-borderWidth"] = "1px"),
                      (r.border = "var(--variant-borderWidth) solid"))),
                  Lr(r, o, i);
              }
            }),
            r
          );
        },
        jr = function (e, t) {
          var n = {};
          if (t) {
            var r = t.getCssVar,
              a = t.palette;
            Object.entries(a).forEach(function (t) {
              var o = c(t, 2),
                l = o[0],
                i = o[1];
              (function (e) {
                return (
                  e &&
                  "object" === typeof e &&
                  Object.keys(e).some(function (e) {
                    var t;
                    return null == (t = e.match)
                      ? void 0
                      : t.call(
                          e,
                          /^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/
                        );
                  })
                );
              })(i) &&
                "object" === typeof i &&
                (n = g(
                  {},
                  n,
                  f(
                    {},
                    l,
                    Mr(e, i, function (e) {
                      return "var(--variant-"
                        .concat(e, ", ")
                        .concat(
                          r("palette-".concat(l, "-").concat(e), a[l][e]),
                          ")"
                        );
                    })
                  )
                ));
            });
          }
          return (
            (n.context = Mr(e, {
              plainColor: "var(--variant-plainColor)",
              plainHoverColor: "var(--variant-plainHoverColor)",
              plainHoverBg: "var(--variant-plainHoverBg)",
              plainActiveBg: "var(--variant-plainActiveBg)",
              plainDisabledColor: "var(--variant-plainDisabledColor)",
              outlinedColor: "var(--variant-outlinedColor)",
              outlinedBorder: "var(--variant-outlinedBorder)",
              outlinedHoverColor: "var(--variant-outlinedHoverColor)",
              outlinedHoverBorder: "var(--variant-outlinedHoverBorder)",
              outlinedHoverBg: "var(--variant-outlinedHoverBg)",
              outlinedActiveBg: "var(--variant-outlinedActiveBg)",
              outlinedDisabledColor: "var(--variant-outlinedDisabledColor)",
              outlinedDisabledBorder: "var(--variant-outlinedDisabledBorder)",
              softColor: "var(--variant-softColor)",
              softBg: "var(--variant-softBg)",
              softHoverColor: "var(--variant-softHoverColor)",
              softHoverBg: "var(--variant-softHoverBg)",
              softActiveBg: "var(--variant-softActiveBg)",
              softDisabledColor: "var(--variant-softDisabledColor)",
              softDisabledBg: "var(--variant-softDisabledBg)",
              solidColor: "var(--variant-solidColor)",
              solidBg: "var(--variant-solidBg)",
              solidHoverBg: "var(--variant-solidHoverBg)",
              solidActiveBg: "var(--variant-solidActiveBg)",
              solidDisabledColor: "var(--variant-solidDisabledColor)",
              solidDisabledBg: "var(--variant-solidDisabledBg)",
            })),
            n
          );
        },
        Hr = [
          "cssVarPrefix",
          "breakpoints",
          "spacing",
          "components",
          "variants",
          "shouldSkipGeneratingVar",
        ],
        Wr = ["colorSchemes"];
      var Vr = (function (e) {
          var t,
            n,
            r,
            a,
            o,
            l,
            i,
            u,
            s,
            d,
            f = e || {},
            p = f.cssVarPrefix,
            v = void 0 === p ? "joy" : p,
            h = f.breakpoints,
            y = f.spacing,
            b = f.components,
            w = f.variants,
            S = f.shouldSkipGeneratingVar,
            k = void 0 === S ? Ir : S,
            x = m(f, Hr),
            C = (function () {
              return br(
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "joy"
              );
            })(v),
            E = {
              primary: Tr.blue,
              neutral: Tr.grey,
              danger: Tr.red,
              success: Tr.green,
              warning: Tr.yellow,
              common: { white: "#FFF", black: "#000" },
            },
            P = function (e) {
              var t,
                n = e.split("-"),
                r = n[1],
                a = n[2];
              return C(e, null == (t = E[r]) ? void 0 : t[a]);
            },
            z = function (e) {
              return {
                plainColor: P("palette-".concat(e, "-500")),
                plainHoverBg: P("palette-".concat(e, "-100")),
                plainActiveBg: P("palette-".concat(e, "-200")),
                plainDisabledColor: P("palette-neutral-400"),
                outlinedColor: P("palette-".concat(e, "-500")),
                outlinedBorder: P("palette-".concat(e, "-300")),
                outlinedHoverBg: P("palette-".concat(e, "-100")),
                outlinedActiveBg: P("palette-".concat(e, "-200")),
                outlinedDisabledColor: P("palette-neutral-400"),
                outlinedDisabledBorder: P("palette-neutral-200"),
                softColor: P("palette-".concat(e, "-700")),
                softBg: P("palette-".concat(e, "-100")),
                softHoverBg: P("palette-".concat(e, "-200")),
                softActiveColor: P("palette-".concat(e, "-800")),
                softActiveBg: P("palette-".concat(e, "-300")),
                softDisabledColor: P("palette-neutral-400"),
                softDisabledBg: P("palette-neutral-50"),
                solidColor: P("palette-common-white"),
                solidBg: P("palette-".concat(e, "-500")),
                solidHoverBg: P("palette-".concat(e, "-600")),
                solidActiveBg: P("palette-".concat(e, "-700")),
                solidDisabledColor: P("palette-neutral-400"),
                solidDisabledBg: P("palette-neutral-100"),
              };
            },
            A = function (e) {
              return {
                plainColor: P("palette-".concat(e, "-300")),
                plainHoverBg: P("palette-".concat(e, "-800")),
                plainActiveBg: P("palette-".concat(e, "-700")),
                plainDisabledColor: P("palette-neutral-500"),
                outlinedColor: P("palette-".concat(e, "-200")),
                outlinedBorder: P("palette-".concat(e, "-700")),
                outlinedHoverBg: P("palette-".concat(e, "-800")),
                outlinedActiveBg: P("palette-".concat(e, "-700")),
                outlinedDisabledColor: P("palette-neutral-500"),
                outlinedDisabledBorder: P("palette-neutral-800"),
                softColor: P("palette-".concat(e, "-200")),
                softBg: P("palette-".concat(e, "-800")),
                softHoverBg: P("palette-".concat(e, "-700")),
                softActiveColor: P("palette-".concat(e, "-100")),
                softActiveBg: P("palette-".concat(e, "-600")),
                softDisabledColor: P("palette-neutral-500"),
                softDisabledBg: P("palette-neutral-800"),
                solidColor: P("palette-common-white"),
                solidBg: P("palette-".concat(e, "-500")),
                solidHoverBg: P("palette-".concat(e, "-600")),
                solidActiveBg: P("palette-".concat(e, "-700")),
                solidDisabledColor: P("palette-neutral-500"),
                solidDisabledBg: P("palette-neutral-800"),
              };
            },
            _ = {
              palette: {
                mode: "light",
                primary: g({}, E.primary, z("primary")),
                neutral: g({}, E.neutral, z("neutral"), {
                  plainColor: P("palette-neutral-700"),
                  plainHoverColor: P("palette-neutral-900"),
                  outlinedColor: P("palette-neutral-700"),
                }),
                danger: g({}, E.danger, z("danger")),
                success: g({}, E.success, z("success")),
                warning: g({}, E.warning, z("warning")),
                common: { white: "#FFF", black: "#000" },
                text: {
                  primary: P("palette-neutral-800"),
                  secondary: P("palette-neutral-700"),
                  tertiary: P("palette-neutral-600"),
                  icon: P("palette-neutral-500"),
                },
                background: {
                  body: P("palette-common-white"),
                  surface: P("palette-neutral-50"),
                  popup: P("palette-common-white"),
                  level1: P("palette-neutral-100"),
                  level2: P("palette-neutral-200"),
                  level3: P("palette-neutral-300"),
                  tooltip: P("palette-neutral-500"),
                  backdrop: "rgba(".concat(
                    C("palette-neutral-darkChannel", Sr(E.neutral[900])),
                    " / 0.25)"
                  ),
                },
                divider: "rgba(".concat(
                  C("palette-neutral-mainChannel", Sr(E.neutral[500])),
                  " / 0.2)"
                ),
                focusVisible: P("palette-primary-500"),
              },
              shadowRing: "0 0 #000",
              shadowChannel: "21 21 21",
              shadowOpacity: "0.08",
            },
            T = {
              palette: {
                mode: "dark",
                primary: g({}, E.primary, A("primary")),
                neutral: g({}, E.neutral, A("neutral"), {
                  plainColor: P("palette-neutral-300"),
                  plainHoverColor: P("palette-neutral-300"),
                }),
                danger: g({}, E.danger, A("danger")),
                success: g({}, E.success, A("success")),
                warning: g({}, E.warning, A("warning")),
                common: { white: "#FFF", black: "#000" },
                text: {
                  primary: P("palette-neutral-100"),
                  secondary: P("palette-neutral-300"),
                  tertiary: P("palette-neutral-400"),
                  icon: P("palette-neutral-400"),
                },
                background: {
                  body: P("palette-common-black"),
                  surface: P("palette-neutral-900"),
                  popup: P("palette-common-black"),
                  level1: P("palette-neutral-800"),
                  level2: P("palette-neutral-700"),
                  level3: P("palette-neutral-600"),
                  tooltip: P("palette-neutral-600"),
                  backdrop: "rgba(".concat(
                    C("palette-neutral-darkChannel", Sr(E.neutral[50])),
                    " / 0.25)"
                  ),
                },
                divider: "rgba(".concat(
                  C("palette-neutral-mainChannel", Sr(E.neutral[500])),
                  " / 0.16)"
                ),
                focusVisible: P("palette-primary-500"),
              },
              shadowRing: "0 0 #000",
              shadowChannel: "0 0 0",
              shadowOpacity: "0.6",
            },
            I =
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            N = g(
              {
                body: '"Inter", '.concat(C("fontFamily-fallback, ".concat(I))),
                display: '"Inter", '.concat(
                  C("fontFamily-fallback, ".concat(I))
                ),
                code: "Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
                fallback: I,
              },
              x.fontFamily
            ),
            D = g({ sm: 300, md: 500, lg: 600, xl: 700 }, x.fontWeight),
            B = g(
              {
                xs: "0.75rem",
                sm: "0.875rem",
                md: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                xl2: "1.5rem",
                xl3: "1.875rem",
                xl4: "2.25rem",
              },
              x.fontSize
            ),
            R = g(
              {
                xs: "1.33334",
                sm: "1.42858",
                md: "1.5",
                lg: "1.55556",
                xl: "1.66667",
              },
              x.lineHeight
            ),
            O =
              null !=
              (t =
                null == (n = x.colorSchemes) || null == (n = n.light)
                  ? void 0
                  : n.shadowRing)
                ? t
                : _.shadowRing,
            F =
              null !=
              (r =
                null == (a = x.colorSchemes) || null == (a = a.light)
                  ? void 0
                  : a.shadowChannel)
                ? r
                : _.shadowChannel,
            L =
              null !=
              (o =
                null == (l = x.colorSchemes) || null == (l = l.light)
                  ? void 0
                  : l.shadowOpacity)
                ? o
                : _.shadowOpacity,
            M = {
              colorSchemes: { light: _, dark: T },
              fontSize: B,
              fontFamily: N,
              fontWeight: D,
              focus: {
                thickness: "2px",
                selector: "&.".concat(
                  Or("", "focusVisible"),
                  ", &:focus-visible"
                ),
                default: {
                  outlineOffset: "var(--focus-outline-offset, ".concat(
                    C(
                      "focus-thickness",
                      null != (i = null == (u = x.focus) ? void 0 : u.thickness)
                        ? i
                        : "2px"
                    ),
                    ")"
                  ),
                  outline: ""
                    .concat(
                      C(
                        "focus-thickness",
                        null !=
                          (s = null == (d = x.focus) ? void 0 : d.thickness)
                          ? s
                          : "2px"
                      ),
                      " solid "
                    )
                    .concat(C("palette-focusVisible", E.primary[500])),
                },
              },
              lineHeight: R,
              radius: {
                xs: "2px",
                sm: "6px",
                md: "8px",
                lg: "12px",
                xl: "16px",
              },
              shadow: {
                xs: ""
                  .concat(C("shadowRing", O), ", 0px 1px 2px 0px rgba(")
                  .concat(C("shadowChannel", F), " / ")
                  .concat(C("shadowOpacity", L), ")"),
                sm: ""
                  .concat(C("shadowRing", O), ", 0px 1px 2px 0px rgba(")
                  .concat(C("shadowChannel", F), " / ")
                  .concat(C("shadowOpacity", L), "), 0px 2px 4px 0px rgba(")
                  .concat(C("shadowChannel", F), " / ")
                  .concat(C("shadowOpacity", L), ")"),
                md: ""
                  .concat(C("shadowRing", O), ", 0px 2px 8px -2px rgba(")
                  .concat(C("shadowChannel", F), " / ")
                  .concat(C("shadowOpacity", L), "), 0px 6px 12px -2px rgba(")
                  .concat(C("shadowChannel", F), " / ")
                  .concat(C("shadowOpacity", L), ")"),
                lg: ""
                  .concat(C("shadowRing", O), ", 0px 2px 8px -2px rgba(")
                  .concat(C("shadowChannel", F), " / ")
                  .concat(C("shadowOpacity", L), "), 0px 12px 16px -4px rgba(")
                  .concat(C("shadowChannel", F), " / ")
                  .concat(C("shadowOpacity", L), ")"),
                xl: ""
                  .concat(C("shadowRing", O), ", 0px 2px 8px -2px rgba(")
                  .concat(C("shadowChannel", F), " / ")
                  .concat(C("shadowOpacity", L), "), 0px 20px 24px -4px rgba(")
                  .concat(C("shadowChannel", F), " / ")
                  .concat(C("shadowOpacity", L), ")"),
              },
              zIndex: {
                badge: 1,
                table: 10,
                popup: 1e3,
                modal: 1300,
                tooltip: 1500,
              },
              typography: {
                h1: {
                  fontFamily: C("fontFamily-display, ".concat(N.display)),
                  fontWeight: C("fontWeight-xl, ".concat(D.xl)),
                  fontSize: C("fontSize-xl4, ".concat(B.xl4)),
                  lineHeight: C("lineHeight-xs, ".concat(R.xs)),
                  letterSpacing: "-0.025em",
                  color: C(
                    "palette-text-primary, ".concat(_.palette.text.primary)
                  ),
                },
                h2: {
                  fontFamily: C("fontFamily-display, ".concat(N.display)),
                  fontWeight: C("fontWeight-xl, ".concat(D.xl)),
                  fontSize: C("fontSize-xl3, ".concat(B.xl3)),
                  lineHeight: C("lineHeight-xs, ".concat(R.xs)),
                  letterSpacing: "-0.025em",
                  color: C(
                    "palette-text-primary, ".concat(_.palette.text.primary)
                  ),
                },
                h3: {
                  fontFamily: C("fontFamily-display, ".concat(N.display)),
                  fontWeight: C("fontWeight-lg, ".concat(D.lg)),
                  fontSize: C("fontSize-xl2, ".concat(B.xl2)),
                  lineHeight: C("lineHeight-xs, ".concat(R.xs)),
                  letterSpacing: "-0.025em",
                  color: C(
                    "palette-text-primary, ".concat(_.palette.text.primary)
                  ),
                },
                h4: {
                  fontFamily: C("fontFamily-display, ".concat(N.display)),
                  fontWeight: C("fontWeight-lg, ".concat(D.lg)),
                  fontSize: C("fontSize-xl, ".concat(B.xl)),
                  lineHeight: C("lineHeight-md, ".concat(R.md)),
                  letterSpacing: "-0.025em",
                  color: C(
                    "palette-text-primary, ".concat(_.palette.text.primary)
                  ),
                },
                "title-lg": {
                  fontFamily: C("fontFamily-body, ".concat(N.body)),
                  fontWeight: C("fontWeight-lg, ".concat(D.lg)),
                  fontSize: C("fontSize-lg, ".concat(B.lg)),
                  lineHeight: C("lineHeight-xs, ".concat(R.xs)),
                  color: C(
                    "palette-text-primary, ".concat(_.palette.text.primary)
                  ),
                },
                "title-md": {
                  fontFamily: C("fontFamily-body, ".concat(N.body)),
                  fontWeight: C("fontWeight-md, ".concat(D.md)),
                  fontSize: C("fontSize-md, ".concat(B.md)),
                  lineHeight: C("lineHeight-md, ".concat(R.md)),
                  color: C(
                    "palette-text-primary, ".concat(_.palette.text.primary)
                  ),
                },
                "title-sm": {
                  fontFamily: C("fontFamily-body, ".concat(N.body)),
                  fontWeight: C("fontWeight-md, ".concat(D.md)),
                  fontSize: C("fontSize-sm, ".concat(B.sm)),
                  lineHeight: C("lineHeight-sm, ".concat(R.sm)),
                  color: C(
                    "palette-text-primary, ".concat(_.palette.text.primary)
                  ),
                },
                "body-lg": {
                  fontFamily: C("fontFamily-body, ".concat(N.body)),
                  fontSize: C("fontSize-lg, ".concat(B.lg)),
                  lineHeight: C("lineHeight-md, ".concat(R.md)),
                  color: C(
                    "palette-text-secondary, ".concat(_.palette.text.secondary)
                  ),
                },
                "body-md": {
                  fontFamily: C("fontFamily-body, ".concat(N.body)),
                  fontSize: C("fontSize-md, ".concat(B.md)),
                  lineHeight: C("lineHeight-md, ".concat(R.md)),
                  color: C(
                    "palette-text-secondary, ".concat(_.palette.text.secondary)
                  ),
                },
                "body-sm": {
                  fontFamily: C("fontFamily-body, ".concat(N.body)),
                  fontSize: C("fontSize-sm, ".concat(B.sm)),
                  lineHeight: C("lineHeight-md, ".concat(R.md)),
                  color: C(
                    "palette-text-tertiary, ".concat(_.palette.text.tertiary)
                  ),
                },
                "body-xs": {
                  fontFamily: C("fontFamily-body, ".concat(N.body)),
                  fontWeight: C("fontWeight-md, ".concat(D.md)),
                  fontSize: C("fontSize-xs, ".concat(B.xs)),
                  lineHeight: C("lineHeight-md, ".concat(R.md)),
                  color: C(
                    "palette-text-tertiary, ".concat(_.palette.text.tertiary)
                  ),
                },
              },
            },
            j = x ? Ke(M, x) : M,
            H = j.colorSchemes,
            W = m(j, Wr),
            V = g({ colorSchemes: H }, W, {
              breakpoints: qe(null != h ? h : {}),
              components: Ke(
                {
                  MuiSvgIcon: {
                    defaultProps: { fontSize: "xl2" },
                    styleOverrides: {
                      root: function (e) {
                        var t,
                          n = e.ownerState,
                          r = e.theme,
                          a = n.instanceFontSize;
                        return g(
                          { margin: "var(--Icon-margin)" },
                          n.fontSize &&
                            "inherit" !== n.fontSize && {
                              fontSize: "var(--Icon-fontSize, ".concat(
                                r.vars.fontSize[n.fontSize],
                                ")"
                              ),
                            },
                          !n.htmlColor &&
                            g(
                              {
                                color: "var(--Icon-color, ".concat(
                                  V.vars.palette.text.icon,
                                  ")"
                                ),
                              },
                              n.color &&
                                "inherit" !== n.color &&
                                r.vars.palette[n.color] && {
                                  color: "rgba(".concat(
                                    null == (t = r.vars.palette[n.color])
                                      ? void 0
                                      : t.mainChannel,
                                    " / 1)"
                                  ),
                                }
                            ),
                          a &&
                            "inherit" !== a && {
                              "--Icon-fontSize": r.vars.fontSize[a],
                            }
                        );
                      },
                    },
                  },
                },
                b
              ),
              cssVarPrefix: v,
              getCssVar: C,
              spacing: wt(y),
            });
          Object.entries(V.colorSchemes).forEach(function (e) {
            var t = c(e, 2);
            !(function (e, t) {
              Object.keys(t).forEach(function (n) {
                var r = { main: "500", light: "200", dark: "700" };
                "dark" === e && (r.main = 400),
                  !t[n].mainChannel &&
                    t[n][r.main] &&
                    (t[n].mainChannel = Sr(t[n][r.main])),
                  !t[n].lightChannel &&
                    t[n][r.light] &&
                    (t[n].lightChannel = Sr(t[n][r.light])),
                  !t[n].darkChannel &&
                    t[n][r.dark] &&
                    (t[n].darkChannel = Sr(t[n][r.dark]));
              });
            })(t[0], t[1].palette);
          });
          var U = { prefix: v, shouldSkipGeneratingVar: k },
            K = Ar(g({ colorSchemes: H }, W), U),
            Q = K.vars,
            $ = K.generateCssVars;
          (V.vars = Q),
            (V.generateCssVars = $),
            (V.unstable_sxConfig = g(
              {},
              _r,
              null == e ? void 0 : e.unstable_sxConfig
            )),
            (V.unstable_sx = function (e) {
              return $t({ sx: e, theme: this });
            }),
            (V.getColorSchemeSelector = function (e) {
              return "light" === e
                ? "&"
                : '&[data-joy-color-scheme="'
                    .concat(e, '"], [data-joy-color-scheme="')
                    .concat(e, '"] &');
            });
          var q = { getCssVar: C, palette: V.colorSchemes.light.palette };
          return (
            (V.variants = Ke(
              {
                plain: jr("plain", q),
                plainHover: jr("plainHover", q),
                plainActive: jr("plainActive", q),
                plainDisabled: jr("plainDisabled", q),
                outlined: jr("outlined", q),
                outlinedHover: jr("outlinedHover", q),
                outlinedActive: jr("outlinedActive", q),
                outlinedDisabled: jr("outlinedDisabled", q),
                soft: jr("soft", q),
                softHover: jr("softHover", q),
                softActive: jr("softActive", q),
                softDisabled: jr("softDisabled", q),
                solid: jr("solid", q),
                solidHover: jr("solidHover", q),
                solidActive: jr("solidActive", q),
                solidDisabled: jr("solidDisabled", q),
              },
              w
            )),
            (V.palette = g({}, V.colorSchemes.light.palette, {
              colorScheme: "light",
            })),
            (V.shouldSkipGeneratingVar = k),
            V
          );
        })(),
        Ur = Vr,
        Kr = "$$joy";
      function Qr(e) {
        return (function (e) {
          var t = e.props,
            n = e.name,
            r = e.defaultTheme,
            a = e.themeId,
            o = yr(r);
          return a && (o = o[a] || o), We({ theme: o, name: n, props: t });
        })({
          props: e.props,
          name: e.name,
          defaultTheme: g({}, Ur, { components: {} }),
          themeId: Kr,
        });
      }
      function $r() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return e.useMemo(function () {
          return n.every(function (e) {
            return null == e;
          })
            ? null
            : function (e) {
                n.forEach(function (t) {
                  !(function (e, t) {
                    "function" === typeof e ? e(t) : e && (e.current = t);
                  })(t, e);
                });
              };
        }, n);
      }
      function qr(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = qr(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      var Xr = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = qr(e)) && (r && (r += " "), (r += t));
        return r;
      };
      function Gr(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (void 0 === e) return {};
        var n = {};
        return (
          Object.keys(e)
            .filter(function (n) {
              return (
                n.match(/^on[A-Z]/) &&
                "function" === typeof e[n] &&
                !t.includes(n)
              );
            })
            .forEach(function (t) {
              n[t] = e[t];
            }),
          n
        );
      }
      function Jr(e) {
        if (void 0 === e) return {};
        var t = {};
        return (
          Object.keys(e)
            .filter(function (t) {
              return !(t.match(/^on[A-Z]/) && "function" === typeof e[t]);
            })
            .forEach(function (n) {
              t[n] = e[n];
            }),
          t
        );
      }
      var Yr = [
          "className",
          "elementType",
          "ownerState",
          "externalForwardedProps",
          "getSlotOwnerState",
          "internalForwardedProps",
        ],
        Zr = ["component", "slots", "slotProps"],
        ea = ["component"];
      function ta(e, t) {
        var n = t.className,
          r = t.elementType,
          a = t.ownerState,
          o = t.externalForwardedProps,
          l = t.getSlotOwnerState,
          i = t.internalForwardedProps,
          u = m(t, Yr),
          c = o.component,
          s = o.slots,
          d = void 0 === s ? f({}, e, void 0) : s,
          p = o.slotProps,
          v = void 0 === p ? f({}, e, void 0) : p,
          h = m(o, Zr),
          y = d[e] || r,
          b = (function (e, t, n) {
            return "function" === typeof e ? e(t, n) : e;
          })(v[e], a),
          w = (function (e) {
            var t = e.getSlotProps,
              n = e.additionalProps,
              r = e.externalSlotProps,
              a = e.externalForwardedProps,
              o = e.className;
            if (!t) {
              var l = Xr(
                  null == a ? void 0 : a.className,
                  null == r ? void 0 : r.className,
                  o,
                  null == n ? void 0 : n.className
                ),
                i = g(
                  {},
                  null == n ? void 0 : n.style,
                  null == a ? void 0 : a.style,
                  null == r ? void 0 : r.style
                ),
                u = g({}, n, a, r);
              return (
                l.length > 0 && (u.className = l),
                Object.keys(i).length > 0 && (u.style = i),
                { props: u, internalRef: void 0 }
              );
            }
            var c = Gr(g({}, a, r)),
              s = Jr(r),
              d = Jr(a),
              f = t(c),
              p = Xr(
                null == f ? void 0 : f.className,
                null == n ? void 0 : n.className,
                o,
                null == a ? void 0 : a.className,
                null == r ? void 0 : r.className
              ),
              v = g(
                {},
                null == f ? void 0 : f.style,
                null == n ? void 0 : n.style,
                null == a ? void 0 : a.style,
                null == r ? void 0 : r.style
              ),
              m = g({}, f, n, d, s);
            return (
              p.length > 0 && (m.className = p),
              Object.keys(v).length > 0 && (m.style = v),
              { props: m, internalRef: f.ref }
            );
          })(
            g({ className: n }, u, {
              externalForwardedProps: "root" === e ? h : void 0,
              externalSlotProps: b,
            })
          ),
          S = w.props.component,
          k = w.internalRef,
          x = m(w.props, ea),
          C = $r(k, null == b ? void 0 : b.ref, t.ref),
          E = l ? l(x) : {},
          P = g({}, a, E),
          z = "root" === e ? S || c : S,
          A = (function (e, t, n) {
            return void 0 === e || "string" === typeof e
              ? t
              : g({}, t, { ownerState: g({}, t.ownerState, n) });
          })(
            y,
            g(
              {},
              "root" === e && !c && !d[e] && i,
              "root" !== e && !d[e] && i,
              x,
              z && { as: z },
              { ref: C }
            ),
            P
          );
        return (
          Object.keys(E).forEach(function (e) {
            delete A[e];
          }),
          [y, A]
        );
      }
      var na =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
      var ra = function (e, t, n) {
          var r = e.key + "-" + t.name;
          !1 === n &&
            void 0 === e.registered[r] &&
            (e.registered[r] = t.styles);
        },
        aa = er(function (e) {
          return (
            na.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        }),
        oa = function (e) {
          return "theme" !== e;
        },
        la = function (e) {
          return "string" === typeof e && e.charCodeAt(0) > 96 ? aa : oa;
        },
        ia = function (e, t, n) {
          var r;
          if (t) {
            var a = t.shouldForwardProp;
            r =
              e.__emotion_forwardProp && a
                ? function (t) {
                    return e.__emotion_forwardProp(t) && a(t);
                  }
                : a;
          }
          return (
            "function" !== typeof r && n && (r = e.__emotion_forwardProp), r
          );
        },
        ua = function (e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          return (
            ra(t, n, r),
            fr(function () {
              return (function (e, t, n) {
                ra(e, t, n);
                var r = e.key + "-" + t.name;
                if (void 0 === e.inserted[t.name]) {
                  var a = t;
                  do {
                    e.insert(t === a ? "." + r : "", a, e.sheet, !0),
                      (a = a.next);
                  } while (void 0 !== a);
                }
              })(t, n, r);
            }),
            null
          );
        },
        ca = function t(n, r) {
          var a,
            o,
            l = n.__emotion_real === n,
            i = (l && n.__emotion_base) || n;
          void 0 !== r && ((a = r.label), (o = r.target));
          var u = ia(n, r, l),
            c = u || la(i),
            s = !c("as");
          return function () {
            var d = arguments,
              f =
                l && void 0 !== n.__emotion_styles
                  ? n.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== a && f.push("label:" + a + ";"),
              null == d[0] || void 0 === d[0].raw)
            )
              f.push.apply(f, d);
            else {
              0, f.push(d[0][0]);
              for (var p = d.length, v = 1; v < p; v++) f.push(d[v], d[0][v]);
            }
            var m = vr(function (t, n, r) {
              var a = (s && t.as) || i,
                l = "",
                d = [],
                p = t;
              if (null == t.theme) {
                for (var v in ((p = {}), t)) p[v] = t[v];
                p.theme = e.useContext(mr);
              }
              "string" === typeof t.className
                ? (l = (function (e, t, n) {
                    var r = "";
                    return (
                      n.split(" ").forEach(function (n) {
                        void 0 !== e[n] ? t.push(e[n] + ";") : (r += n + " ");
                      }),
                      r
                    );
                  })(n.registered, d, t.className))
                : null != t.className && (l = t.className + " ");
              var m = sr(f.concat(d), n.registered, p);
              (l += n.key + "-" + m.name), void 0 !== o && (l += " " + o);
              var h = s && void 0 === u ? la(a) : c,
                g = {};
              for (var y in t) (s && "as" === y) || (h(y) && (g[y] = t[y]));
              return (
                (g.className = l),
                (g.ref = r),
                e.createElement(
                  e.Fragment,
                  null,
                  e.createElement(ua, {
                    cache: n,
                    serialized: m,
                    isStringTag: "string" === typeof a,
                  }),
                  e.createElement(a, g)
                )
              );
            });
            return (
              (m.displayName =
                void 0 !== a
                  ? a
                  : "Styled(" +
                    ("string" === typeof i
                      ? i
                      : i.displayName || i.name || "Component") +
                    ")"),
              (m.defaultProps = n.defaultProps),
              (m.__emotion_real = m),
              (m.__emotion_base = i),
              (m.__emotion_styles = f),
              (m.__emotion_forwardProp = u),
              Object.defineProperty(m, "toString", {
                value: function () {
                  return "." + o;
                },
              }),
              (m.withComponent = function (e, n) {
                return t(
                  e,
                  g({}, r, n, { shouldForwardProp: ia(m, n, !0) })
                ).apply(void 0, f);
              }),
              m
            );
          };
        }.bind();
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (e) {
        ca[e] = ca(e);
      });
      var sa = ["variant"];
      function da(e) {
        return 0 === e.length;
      }
      function fa(e) {
        var t = e.variant,
          n = m(e, sa),
          r = t || "";
        return (
          Object.keys(n)
            .sort()
            .forEach(function (t) {
              r +=
                "color" === t
                  ? da(r)
                    ? e[t]
                    : je(e[t])
                  : "".concat(da(r) ? t : je(t)).concat(je(e[t].toString()));
            }),
          r
        );
      }
      var pa = [
        "name",
        "slot",
        "skipVariantsResolver",
        "skipSx",
        "overridesResolver",
      ];
      var va = function (e) {
          var t = {};
          return (
            e &&
              e.forEach(function (e) {
                var n = fa(e.props);
                t[n] = e.style;
              }),
            t
          );
        },
        ma = function (e, t, n) {
          var r = e.ownerState,
            a = void 0 === r ? {} : r,
            o = [];
          return (
            n &&
              n.forEach(function (n) {
                var r = !0;
                Object.keys(n.props).forEach(function (t) {
                  a[t] !== n.props[t] && e[t] !== n.props[t] && (r = !1);
                }),
                  r && o.push(t[fa(n.props)]);
              }),
            o
          );
        };
      function ha(e) {
        return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
      }
      var ga = Xt();
      function ya(e) {
        var t,
          n = e.defaultTheme,
          r = e.theme,
          a = e.themeId;
        return (t = r), 0 === Object.keys(t).length ? n : r[a] || r;
      }
      var ba = function (e) {
        var t,
          n = e.styledArg,
          r = e.props,
          a = n(
            g({}, r, {
              theme: ya(
                g({}, r, { defaultTheme: e.defaultTheme, themeId: e.themeId })
              ),
            })
          );
        if ((a && a.variants && ((t = a.variants), delete a.variants), t)) {
          var o = ma(r, va(t), t);
          return [a].concat(u(o));
        }
        return a;
      };
      var wa = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.themeId,
            n = e.defaultTheme,
            r = void 0 === n ? ga : n,
            a = e.rootShouldForwardProp,
            o = void 0 === a ? ha : a,
            l = e.slotShouldForwardProp,
            i = void 0 === l ? ha : l,
            s = function (e) {
              return $t(
                g({}, e, {
                  theme: ya(g({}, e, { defaultTheme: r, themeId: t })),
                })
              );
            };
          return (
            (s.__mui_systemSx = !0),
            function (e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              !(function (e, t) {
                Array.isArray(e.__emotion_styles) &&
                  (e.__emotion_styles = t(e.__emotion_styles));
              })(e, function (e) {
                return e.filter(function (e) {
                  return !(null != e && e.__mui_systemSx);
                });
              });
              var a,
                l,
                d = n.name,
                f = n.slot,
                p = n.skipVariantsResolver,
                v = n.skipSx,
                h = n.overridesResolver,
                y =
                  void 0 === h
                    ? (a = (l = f) ? l.charAt(0).toLowerCase() + l.slice(1) : l)
                      ? function (e, t) {
                          return t[a];
                        }
                      : null
                    : h,
                b = m(n, pa),
                w =
                  void 0 !== p ? p : (f && "Root" !== f && "root" !== f) || !1,
                S = v || !1;
              var k = ha;
              "Root" === f || "root" === f
                ? (k = o)
                : f
                ? (k = i)
                : (function (e) {
                    return "string" === typeof e && e.charCodeAt(0) > 96;
                  })(e) && (k = void 0);
              var x = (function (e, t) {
                  return ca(e, t);
                })(e, g({ shouldForwardProp: k, label: undefined }, b)),
                C = function (n) {
                  for (
                    var a = arguments.length,
                      o = new Array(a > 1 ? a - 1 : 0),
                      l = 1;
                    l < a;
                    l++
                  )
                    o[l - 1] = arguments[l];
                  var i,
                    f = o
                      ? o.map(function (e) {
                          if ("function" === typeof e && e.__emotion_real !== e)
                            return function (n) {
                              return ba({
                                styledArg: e,
                                props: n,
                                defaultTheme: r,
                                themeId: t,
                              });
                            };
                          if (Ve(e)) {
                            var n,
                              a = e;
                            return (
                              e &&
                                e.variants &&
                                ((n = e.variants),
                                delete a.variants,
                                (a = function (t) {
                                  var r = e;
                                  return (
                                    ma(t, va(n), n).forEach(function (e) {
                                      r = Ke(r, e);
                                    }),
                                    r
                                  );
                                })),
                              a
                            );
                          }
                          return e;
                        })
                      : [],
                    p = n;
                  Ve(n)
                    ? n &&
                      n.variants &&
                      ((i = n.variants),
                      delete p.variants,
                      (p = function (e) {
                        var t = n;
                        return (
                          ma(e, va(i), i).forEach(function (e) {
                            t = Ke(t, e);
                          }),
                          t
                        );
                      }))
                    : "function" === typeof n &&
                      n.__emotion_real !== n &&
                      (p = function (e) {
                        return ba({
                          styledArg: n,
                          props: e,
                          defaultTheme: r,
                          themeId: t,
                        });
                      });
                  d &&
                    y &&
                    f.push(function (e) {
                      var n = ya(g({}, e, { defaultTheme: r, themeId: t })),
                        a = (function (e, t) {
                          return t.components &&
                            t.components[e] &&
                            t.components[e].styleOverrides
                            ? t.components[e].styleOverrides
                            : null;
                        })(d, n);
                      if (a) {
                        var o = {};
                        return (
                          Object.entries(a).forEach(function (t) {
                            var r = c(t, 2),
                              a = r[0],
                              l = r[1];
                            o[a] =
                              "function" === typeof l
                                ? l(g({}, e, { theme: n }))
                                : l;
                          }),
                          y(e, o)
                        );
                      }
                      return null;
                    }),
                    d &&
                      !w &&
                      f.push(function (e) {
                        var n = ya(g({}, e, { defaultTheme: r, themeId: t }));
                        return (function (e, t, n, r) {
                          var a,
                            o =
                              null == n ||
                              null == (a = n.components) ||
                              null == (a = a[r])
                                ? void 0
                                : a.variants;
                          return ma(e, t, o);
                        })(
                          e,
                          (function (e, t) {
                            var n = [];
                            return (
                              t &&
                                t.components &&
                                t.components[e] &&
                                t.components[e].variants &&
                                (n = t.components[e].variants),
                              va(n)
                            );
                          })(d, n),
                          n,
                          d
                        );
                      }),
                    S || f.push(s);
                  var v = f.length - o.length;
                  if (Array.isArray(n) && v > 0) {
                    var m = new Array(v).fill("");
                    (p = [].concat(u(n), u(m))).raw = [].concat(u(n.raw), u(m));
                  }
                  var h = x.apply(void 0, [p].concat(u(f)));
                  return e.muiName && (h.muiName = e.muiName), h;
                };
              return x.withConfig && (C.withConfig = x.withConfig), C;
            }
          );
        })({ defaultTheme: Ur, themeId: Kr }),
        Sa = wa;
      function ka(e) {
        return Or("MuiSvgIcon", e);
      }
      Fr("MuiSvgIcon", [
        "root",
        "colorInherit",
        "colorPrimary",
        "colorNeutral",
        "colorDanger",
        "colorSuccess",
        "colorWarning",
        "fontSizeInherit",
        "fontSizeXs",
        "fontSizeSm",
        "fontSizeMd",
        "fontSizeLg",
        "fontSizeXl",
        "fontSizeXl2",
        "fontSizeXl3",
        "fontSizeXl4",
        "sizeSm",
        "sizeMd",
        "sizeLg",
      ]);
      var xa = [
          "children",
          "className",
          "color",
          "component",
          "fontSize",
          "htmlColor",
          "inheritViewBox",
          "titleAccess",
          "viewBox",
          "size",
          "slots",
          "slotProps",
        ],
        Ca = { sm: "xl", md: "xl2", lg: "xl3" },
        Ea = Sa("svg", {
          name: "JoySvgIcon",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })(function (e) {
          var t,
            n = e.theme,
            r = e.ownerState;
          return g(
            {},
            r.instanceSize && {
              "--Icon-fontSize": n.vars.fontSize[Ca[r.instanceSize]],
            },
            r.instanceFontSize &&
              "inherit" !== r.instanceFontSize && {
                "--Icon-fontSize": n.vars.fontSize[r.instanceFontSize],
              },
            {
              userSelect: "none",
              margin: "var(--Icon-margin)",
              width: "1em",
              height: "1em",
              display: "inline-block",
              fill: r.hasSvgAsChild ? void 0 : "currentColor",
              flexShrink: 0,
              fontSize: "var(--Icon-fontSize, ".concat(
                n.vars.fontSize[Ca[r.size]] || "unset",
                ")"
              ),
            },
            r.fontSize &&
              "inherit" !== r.fontSize && {
                fontSize: "var(--Icon-fontSize, ".concat(
                  n.fontSize[r.fontSize],
                  ")"
                ),
              },
            !r.htmlColor &&
              g(
                {
                  color: "var(--Icon-color, ".concat(
                    n.vars.palette.text.icon,
                    ")"
                  ),
                },
                "inherit" === r.color && { color: "inherit" },
                "inherit" !== r.color &&
                  n.vars.palette[r.color] && {
                    color: "rgba(".concat(
                      null == (t = n.vars.palette[r.color])
                        ? void 0
                        : t.mainChannel,
                      " / 1)"
                    ),
                  }
              )
          );
        }),
        Pa = e.forwardRef(function (t, n) {
          var r = Qr({ props: t, name: "JoySvgIcon" }),
            o = r.children,
            l = r.className,
            i = r.color,
            u = r.component,
            s = void 0 === u ? "svg" : u,
            d = r.fontSize,
            f = r.htmlColor,
            p = r.inheritViewBox,
            v = void 0 !== p && p,
            h = r.titleAccess,
            y = r.viewBox,
            b = void 0 === y ? "0 0 24 24" : y,
            w = r.size,
            S = void 0 === w ? "md" : w,
            k = r.slots,
            x = void 0 === k ? {} : k,
            C = r.slotProps,
            E = void 0 === C ? {} : C,
            P = m(r, xa),
            z = e.isValidElement(o) && "svg" === o.type,
            A = g({}, r, {
              color: i,
              component: s,
              size: S,
              instanceSize: t.size,
              fontSize: d,
              instanceFontSize: t.fontSize,
              inheritViewBox: v,
              viewBox: b,
              hasSvgAsChild: z,
            }),
            _ = (function (e) {
              var t = e.color,
                n = e.size,
                r = e.fontSize;
              return Le(
                {
                  root: [
                    "root",
                    t && "inherit" !== t && "color".concat(je(t)),
                    n && "size".concat(je(n)),
                    r && "fontSize".concat(je(r)),
                  ],
                },
                ka,
                {}
              );
            })(A),
            T = g({}, P, { component: s, slots: x, slotProps: E }),
            I = c(
              ta("root", {
                ref: n,
                className: Xr(_.root, l),
                elementType: Ea,
                externalForwardedProps: T,
                ownerState: A,
                additionalProps: g(
                  { color: f, focusable: !1 },
                  h && { role: "img" },
                  !h && { "aria-hidden": !0 },
                  !v && { viewBox: b },
                  z && o.props
                ),
              }),
              2
            ),
            N = I[0],
            D = I[1];
          return (0,
          a.jsxs)(N, g({}, D, { children: [z ? o.props.children : o, h ? (0, a.jsx)("title", { children: h }) : null] }));
        }),
        za = Pa;
      var Aa = (function (t, n) {
        function r(e, r) {
          return (0, a.jsx)(
            za,
            g({ "data-testid": "".concat(n, "Icon"), ref: r }, e, {
              children: t,
            })
          );
        }
        return (r.muiName = za.muiName), e.memo(e.forwardRef(r));
      })(
        (0, a.jsx)("path", {
          d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
        }),
        "Person"
      );
      function _a(e) {
        return Or("MuiAvatar", e);
      }
      Fr("MuiAvatar", [
        "root",
        "colorPrimary",
        "colorNeutral",
        "colorDanger",
        "colorSuccess",
        "colorWarning",
        "colorContext",
        "fallback",
        "sizeSm",
        "sizeMd",
        "sizeLg",
        "img",
        "variantOutlined",
        "variantSoft",
        "variantSolid",
      ]);
      var Ta = e.createContext(void 0),
        Ia =
          (Sa("div", {
            name: "JoyAvatarGroup",
            slot: "Root",
            overridesResolver: function (e, t) {
              return t.root;
            },
          })(function (e) {
            var t = e.ownerState,
              n = e.theme;
            return g(
              {},
              "sm" === t.size && {
                "--AvatarGroup-gap": "-0.375rem",
                "--Avatar-ringSize": "2px",
              },
              "md" === t.size && {
                "--AvatarGroup-gap": "-0.5rem",
                "--Avatar-ringSize": "2px",
              },
              "lg" === t.size && {
                "--AvatarGroup-gap": "-0.625rem",
                "--Avatar-ringSize": "4px",
              },
              {
                "--Avatar-ring":
                  "0 0 0 var(--Avatar-ringSize) var(--Avatar-ringColor, ".concat(
                    n.vars.palette.background.surface,
                    ")"
                  ),
                "--Avatar-marginInlineStart": "var(--AvatarGroup-gap)",
                display: "flex",
                marginInlineStart: "calc(-1 * var(--AvatarGroup-gap))",
              }
            );
          }),
          [
            "alt",
            "color",
            "size",
            "variant",
            "src",
            "srcSet",
            "children",
            "component",
            "slots",
            "slotProps",
          ]),
        Na = Sa("div", {
          name: "JoyAvatar",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })(function (e) {
          var t,
            n = e.theme,
            r = e.ownerState;
          return g(
            {
              "--Icon-color":
                "neutral" !== r.color || "solid" === r.variant
                  ? "currentColor"
                  : n.vars.palette.text.icon,
            },
            n.typography["title-".concat(r.size)],
            "sm" === r.size && {
              width: "var(--Avatar-size, 2rem)",
              height: "var(--Avatar-size, 2rem)",
              fontSize: "calc(var(--Avatar-size, 2rem) * 0.4375)",
            },
            "md" === r.size && {
              width: "var(--Avatar-size, 2.5rem)",
              height: "var(--Avatar-size, 2.5rem)",
              fontSize: "calc(var(--Avatar-size, 2.5rem) * 0.4)",
            },
            "lg" === r.size && {
              width: "var(--Avatar-size, 3rem)",
              height: "var(--Avatar-size, 3rem)",
              fontSize: "calc(var(--Avatar-size, 3rem) * 0.375)",
            },
            {
              marginInlineStart: "var(--Avatar-marginInlineStart)",
              boxShadow: "var(--Avatar-ring)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              lineHeight: 1,
              overflow: "hidden",
              borderRadius: "var(--Avatar-radius, 50%)",
              userSelect: "none",
            },
            null == (t = n.variants[r.variant]) ? void 0 : t[r.color]
          );
        }),
        Da = Sa("img", {
          name: "JoyAvatar",
          slot: "Img",
          overridesResolver: function (e, t) {
            return t.img;
          },
        })({
          width: "100%",
          height: "100%",
          textAlign: "center",
          objectFit: "cover",
          color: "transparent",
          textIndent: 1e4,
        }),
        Ba = Sa(Aa, {
          name: "JoyAvatar",
          slot: "Fallback",
          overridesResolver: function (e, t) {
            return t.fallback;
          },
        })({ width: "64%", height: "64%" });
      var Ra,
        Oa = e.forwardRef(function (t, n) {
          var r = Qr({ props: t, name: "JoyAvatar" }),
            o = e.useContext(Ta),
            l = r.alt,
            i = r.color,
            u = void 0 === i ? "neutral" : i,
            s = r.size,
            d = void 0 === s ? "md" : s,
            f = r.variant,
            p = void 0 === f ? "soft" : f,
            v = r.src,
            h = r.srcSet,
            y = r.children,
            b = r.component,
            w = r.slots,
            S = void 0 === w ? {} : w,
            k = r.slotProps,
            x = void 0 === k ? {} : k,
            C = m(r, Ia),
            E = t.variant || (null == o ? void 0 : o.variant) || p,
            P = null,
            z = g({}, r, {
              color: t.color || (null == o ? void 0 : o.color) || u,
              size: t.size || (null == o ? void 0 : o.size) || d,
              variant: E,
              grouped: !!o,
            }),
            A = (function (e) {
              var t = e.size,
                n = e.variant,
                r = e.color,
                a = e.src,
                o = e.srcSet;
              return Le(
                {
                  root: [
                    "root",
                    n && "variant".concat(je(n)),
                    r && "color".concat(je(r)),
                    t && "size".concat(je(t)),
                  ],
                  img: [(a || o) && "img"],
                  fallback: ["fallback"],
                },
                _a,
                {}
              );
            })(z),
            _ = g({}, C, { component: b, slots: S, slotProps: x }),
            T = c(
              ta("root", {
                ref: n,
                className: A.root,
                elementType: Na,
                externalForwardedProps: _,
                ownerState: z,
              }),
              2
            ),
            I = T[0],
            N = T[1],
            D = c(
              ta("img", {
                additionalProps: { alt: l, src: v, srcSet: h },
                className: A.img,
                elementType: Da,
                externalForwardedProps: _,
                ownerState: z,
              }),
              2
            ),
            B = D[0],
            R = D[1],
            O = c(
              ta("fallback", {
                className: A.fallback,
                elementType: Ba,
                externalForwardedProps: _,
                ownerState: z,
              }),
              2
            ),
            F = O[0],
            L = O[1],
            M = (function (t) {
              var n = t.crossOrigin,
                r = t.referrerPolicy,
                a = t.src,
                o = t.srcSet,
                l = c(e.useState(!1), 2),
                i = l[0],
                u = l[1];
              return (
                e.useEffect(
                  function () {
                    if (a || o) {
                      u(!1);
                      var e = !0,
                        t = new Image();
                      return (
                        (t.onload = function () {
                          e && u("loaded");
                        }),
                        (t.onerror = function () {
                          e && u("error");
                        }),
                        (t.crossOrigin = n),
                        (t.referrerPolicy = r),
                        a && (t.src = a),
                        o && (t.srcset = o),
                        function () {
                          e = !1;
                        }
                      );
                    }
                  },
                  [n, r, a, o]
                ),
                i
              );
            })(g({}, R, { src: v, srcSet: h }));
          return (
            (P =
              (v || h) && "error" !== M
                ? (0, a.jsx)(B, g({}, R))
                : null != y
                ? y
                : l
                ? l[0]
                : (0, a.jsx)(F, g({}, L))),
            (0, a.jsx)(I, g({}, N, { children: P }))
          );
        }),
        Fa = Oa,
        La =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAJq0lEQVR4Ae2d729T1xnHv77XduIkgFMIWjuVpJqo1G206aqysnXESEibNmllk/ZyWvZyLybgxV5D/oLCm0nTpGGmbdJedIVpG2Kr2rB2hFKyhBZoCdAmQKEEu0lKfhH/6vPcHBvj+F5f2/ccH+P7kRxf+57YyfOc8zznPOec5wSgKTMzM9F0Ot1vGEZ/NpvtDQQCffygW1F+5HK5aHF5ujdLT7P0/mT+mX53in53PBgMjnd3d89CQwLQBBZ4JpPZQ5cDJMwYCbAPHkKfOU6fOU6Xp0zTHCaFTEIDGqoAFjrV0EESzCv0Mga1DNPjaKOV0RAF3L17N0Y18gDUC92OY/Q4umnTpmNQjDIF5Gs7Xe712rx4BVWKSfrbhkgRcShCiQKSyeReejpY6jh1RaUipCqATQ31RI7oWuMroUIRUhRA5qaPejSv0uUePBrEyVkPyXDWnisgkUj8gmrOoWYxN26R1Ro8U4Bwsgfoj9yHRxj6/w7RwG7Iq4GdJwpgk0PCf6tZbX21cGsg37bLC5NkoE5I+BwqGGsV4TP8v3KFm56e7ked1KUAtvfkbMceNXvvBlYCtYIxlgHqoGYFiL59HD5x6m7X7Pdq8gEsfHZG8ClA8tjf09NTtUyqVoBocnH4lGOQuqlHq/mFqhTADpdtPiQQuH8fubY2SCeXQyCVQi4chgzIOT+/efPmcbflXfsA0dV8HTIgoaw/+mcElu9DNuFLHyLy9v8gC3LMb7GsXJd3U0gMsqT18yMj7yJ46zbazr8P2bSPjiHyzgiCt29DEpasWGZuCrtSgBjh9kECgZUVtJ89Z12HP7oMmZjTdxH6eNJqce1n3oMsWFY0nXrATdmKCiCnOygzvNB2bhTG7Jx1HZq6AXNmBrKIvHP6wfdevEQmbxmyoNHyPjdjBEcFsC0TM1fSiJwdffAim0Xb2HnIwJhfoBY28eCNdEZqKxAcquQPHBVAPZ4DMkMMoanrhdqfJ3zpI8ggdOWqZe6KaXv/A0gmKsLyttgqgE0PPQ1CIg/VSIGZSCJ48xY8hWx+5MzZtd/1+QyML+5BMnt4Ysrupq0CZJsehns+5QhdvQYvCV+egHlnuuy94I0bkA3PCtreK/emcLx9kIxpowA2DaXmoh7a/m8/LuIWJxuWpV28qKwCVNR+HvnyiLQcbBqCNz6FF5jkY8ITV23vKzBBFizTcmODNQpQVfuNe/OO99vOe+MgwxUcrZctrQK81HKw9M01ClBR+y0yGcfb4Ykrti3ELdzPb39vFLpAvmDvmveKX1Dt36NqZivX7hx4Y+GFJqdQD+HLVyq2tFwkAlUIXxArfq+0BdQ1u1MN2a4u5EzTsUz44oeoh/Z3Kw+0MtENUEmphSkoQIzY1K3jIeFnu53jVewHAgsLqOnjP7tj280tJvPE41BMrNgZFxRAI7YYFJP62lPOBThodv4CaqHj9JmKZbJkflJbnoRqip1xsQlSZn7yrDz9dMUyoYkJVIsx9wXCH1ysWG7lm19nzwjVkBl6JX9tfbswPzEoJvVUL/mCTscyHCENLCyiGtouXLBajyMk+KXv7kCDKJghSwGNMD8WLISdLzuXIUFaAq2C9nOVZ03vP7cNWcUOuBixGwhB8XoADWL5xResWSq7WA0T+e9pLG9/0brmUa2RSMDk7mU6TU0kiExnJzKPfwXp3i0IcoR1xnnVYLazA4sD30ODYZnHLQWQTerPVWqysggEsPD93Vj/x7/YFjGoJ9T1t+MIXfsExqK9Ocqu64KbdQYLP/5RQ2u/IMY/AmJznLxpKJfwvHDHyTcgm8Xdu7D08negA6Zpdgd5Kyi1ADSapR3ftgJ0keG3IYNcpB3zP/wBVrZ9A7rAsmcTVPcCU69YjO3E8rPbsOH3R2AsLcErUn1bcO9nP0WusxOa0W+Izc/aYM7NwfB4spxn2MJXP4ZusOy5G9oLTeDY/bq/vla5D18lAeotdf7rJALztYU1ZGGtsMbq1n8t6Pj3G9KWirB/6frHCegEhad7tTFBZvJzaSsi8vDCr3pD3F7C+yoMXTZXdJz8D1QQOSVvXWgNRLUwQTxp4jRv6yXBmzctc6QJUfWhwDIEr1+HKniaM/SJPmZIDwXc+gwqMe/cgS5ooQAzKX9tTjEc4tYFVkDDM0mptsnGgjbjgVlDpPpqKIFF78IOTcasHi2gwhohr8lSYE4TJg2R5K61CAahAyT7OW4B+vTJWgwr50RLtgBNsFJr0rPrPa0+njNucFJT+DQElr3BiYfYFsFHKZxIlmWfXxd0Cj5KEVl8V0MRNDEwDB/VWJXeUoBpmsozxrY6nDKZny0FiAR0w9CcBMWMvnXiBH49OooLsw8G8COJBH4+MoLdb76JJqGQr7owJCSbdJyzlkNjumgE+9WODrxG8wf82ELXIcPAtfnVXTC/2roVTUIhp1AhHE1dojg0p9008acdO7B13Trr9fXFxYLwn41G8ZtnnkEzkDc/TEEBzWKGNoTD+OfAAF547LHCe09SS/jDSy9ZCtIdtjTF6S6NkptDaAK6QiH8bvt29Hd3Yz1d/5aun1C42a4eyMzHi18/FBbs6ekZTiaTk82QA5QF/vedOzGXTmOjpPRjXsMD3o0bNz7U41wzJZnNZg+jSQiSA24W4TPlLMwaBQhnrOWBN80M1/5yib/XKEDEhprCFzQTdv617KoIslOH/ACdd9jVfsZ2WQr5gl/CxxOcepe2CuAeEVZPF/Kpj7jToQ+OC7NoxLYfvkOuGTY9fPSJUxlHBYgR23741ASbnkqHPFRcmiiaT9OMDTTisJvzZlytDaVmdNDvFblHmJ6DrsrCJeJoKs4B0HKnZVRDtefLuF4dzR9IXdNd8HGEhP+Tag73qWp5usiL748PbOCxEwm/qmU+Ve8PYMdCzczvGZXAR5hQBY2jSmrOUUBh6330pa/Cp+bzY5i6kkSI/NJH0MKw2aml5uepO0sHH2ZGXa7XW+kgN4Y3tojeTl1LO/2jDGtAq6MMGf5D6A96Hq0xYj7M/6tXR9vKOM52kJOTPmqtgU0ODUT312Pvy34uJMAmKZVKHaSaojwVpiSOcWS4KQ50LqbZWwPbeu7liLkROd8BBTSbItjckOCHau3bV/VdUIjuihARX3ayca9OzK74nWgAnCYfq6mS1SULd2aYJ09kmho7GpouUYS4Y1hVRgxqGaYaf1xlbS9H4/NVCvLKINsbox7Hc1QjPc3myOaFPnOYLk/xhpRGCr0YbRRQCieU5byaVEP5CF0+PpyTC0ZFirVoaaYvkfPCevD+W1LkFAman8d5N6IuAi/lS+KeLsqVqxkYAAAAAElFTkSuQmCC",
        Ma = function (e) {
          return (0, a.jsxs)(De, {
            className:
              "w-full h-[480px] rounded-[16px] overflow-hidden shadow-blackA7 bg-[#2b2b2b] text-[#fff] font-sans text-[14px]",
            children: [
              (0, a.jsx)(Be, {
                className: "w-full h-full rounded",
                children: (0, a.jsx)("div", {
                  className: "p-6 flex flex-col-reverse",
                  children: e.chatHistory.map(function (e, t) {
                    return (0,
                    a.jsx)("div", { className: "flex w-full mb-4 first:mb-0 font-sans", children: "system" === e.entity ? ("pending" === e.message ? (0, a.jsxs)("div", { className: "flex w-full", children: [(0, a.jsx)("div", { className: "mr-2 ", children: (0, a.jsx)(Fa, { size: "sm", src: La, sx: { width: "24px", height: "24px" } }) }), (0, a.jsx)("div", { className: "my-auto text-[4px] text-[#FF6C71] align-middle", children: (0, a.jsx)("div", { className: "loading" }) })] }) : (0, a.jsx)("div", { className: "mx-auto text-[#9E9E9E] text-[12px] whitespace-pre-wrap", children: e.message })) : (0, a.jsxs)("div", { className: "flex w-full", children: [(0, a.jsx)("div", { className: "mr-2 ", children: "user" === e.entity ? (0, a.jsx)(Fa, { size: "sm", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAIFUlEQVR4Ae2de2oUTxDHa9dFURQ3vkAQsgoKgvCLJ3A9gXqCX3ICzQk0J1BP4HoC9QSuJ3D/UBBF3EhCQp4bEhLy/tV30r3MbzKzO4/unppkPjDZye7MPqq6q6u7q6srJJTV1dX63t7eWLVaHTs4OBitVCoNHPxSHcfh4WHdfz2/1uOHHj/f1Y987zTf26nVap2RkZEeCaRCQoDA9/f3n/LpIxZmkwXYIIPwe3b4PTt8+uXMmTNtVkiXBJCrAiB0LqHjLJgn/G+T3NLm433eyshFAYuLi00ukS/JvdCj+MjH+2vXrn0kxzhTgC7tfPrctHkxBReKLn+3KVZEixzhRAHLy8vP+eFVsOGUiktFWFUATA17Iu+klvhhuFCEFQWwuWmwR/OaT5/SyaDFjfWUjcbauAKWlpb+5ZLzpijmJi62aoMxBahG9iV/yRd0guHf94Y7dlOmOnZGFACTw8L/XFRbnxTUBm7bHpswSVXKCAsfQwVfT4vwAX4rCtzCwsIYZSSTAmDvubH9etLsfRygBK4FXyEDykBqBSjfvkUlLXa3U7d7qdoACB+NEZX0YXlMXr9+PbFMEitAVbkWlYQxzm7q+yQ3JFIAGlzYfCqJhBvnhzdu3OjEvT52G6BczQ9UMhBumD9DVnGvj1UDVCfrVLmaWVD9hIdxOmuxaoDq4TaoJBaQFU+nvoxz7dAawI3uOD+8o5I0DG2UByrgtA0xWKDHo6gPBw1Z1AbdzR4PqlGDhLG+vk5bW1veAc6ePUsXL16kS5cukTDqalj+WdQFkTVAmulhm4oJHuLxFxSM0GugiKtXr9LNmzdJEmxBHnMnrR32WqQCuLf7R4rp2d7epl+/ftHOzk6s66GIu3fv0rlz50gC8Iq4YNwOey3UC0LpL6rwAa7FPbhXApBl1HhRaA2QVPq/ffuWSPh+UBPu379P3BCSANAg3w72DY7VAEmlf25uLrXwAe5FmyEEhFqOB588pgAVMCUCromUFUEKwDDF82PP+f/h0v9USumHq5ml9GvgMeG9JKDagqb/uWANyDS7Y5KNjQ0yhe4vSCBoYfoKUCN4YuJ4TJR+jSQFME0Mbup/+grgqtqkEif4G2O/CRJjfsD58+fJFHBHJcFm6Ik+9xSgzE+TBGFSARgnEkbfDHkKkGh+MLBmogOF0i9wkI7UaqC+CXpEAuG5VcoKBueE4sncUwDbpMwRXjaAArLYb9wrbWTURxN/Kmpx3CoJBe7oz58/E7ulEP69e/fENcB+2MSOVLEUlASTRpBFED6A7DEjJloBAIJ88OCBNziH8aGo2oBGG2YLh5AR0GGM1dTi50IAe44DYzsYqtCKgMuKQ6K3MwjIHjVglAoGBF00YYfhRVjT0dL/khzg4enRapFM0EkD6yqqp3FxhSDqpQnKl3rmNWIl2ahRAUBQFtxO7XpiggXP+QO0Lly44Pn+cEcx+omjVpP/8yo8D3xIQoG/Pz8/n3pOF67qlStXJA/IeQrAOJCodgC93awhKX70oJxARfQqkoKwNjc3aXZ21loUg7SQRaaLRlhELjXE7/z48cNqCAlq1Pfv373aJYRuVSW5y5Xp6WmamZkhV0AB3W43MsraFSz7NbgJ05QT8GQQRJtH2MjKyor3uRi2zmvk1FtLlmcN+Pv3b64xO/js379/U154qTX5MfaaVpPADPR6+Tc/6Fu4NH8BOlUkNSXHaDdTCnAA8igMkH0V8eqwReQILJqQJHwNHAGXjTISyUL2Oi7oCzkCPVuTcZ+mgPBdFgyVxfcoLIUnBtrkAJR+EzH/toApcrisySv0ngLYDXOSMRalXzpwT12AlMl49BSg1i21yTJSFkoMYtAyWIP081X35wPYJn0ii8DuS7T9QSB8Bwropy/oK4BdohZZpCBxOh62v6s2P6CvANtmCD9KYJj4MUxFZUcBS+PPHVENvDhFFmk0GqLDBfHdRkfthkmx/9/63//BC2zPD6Ad0CGGkkDJv3PnjtXSH5ay4Nik/MHBwVuyiC5lOCTUBgj81q1b3kSNbdsfZmGO1QAVrv6HHExT5l0bEMSLqUoXDkJUwo6oXBEvWFuvyREuFQFh1+t1T/COa+BEWOZ1UelqoAh01kxOyGsQtnL58uVcQtcHpauJDJzhtmCCb/xMDtEJl3Bggh5j9Wtra9550s4RhKyFjiPPifhB3uXAnHFLS0vIEypi9bxWAmaxdG9VKwXCxgEF6uAsQZEPLTY9E1EvDk3apzLllvGjKYizz8DA2FB14ySVpAKmZ9gmD0ODc1XLbbVvcEJ5G2e/mTJ1sQWMpy725i7ZlpGQKDrJ+Ox+LFnFXh8AW8a14DGVDISF/yzJ5j6JFmiovPgTVBIK+k4s/ERhPolXyKBh4WpWekYBsIUJF9AWJST1PmKux4skk3b/GJBpI7cytf2R2UlT8jWZd9LDZmbc/f9w2lxU7GGvvJ1MoZ3lVoYpELWVIcAXQceDTkeP+a3qZHXJADa2sx1HctKTVhtgcnhgcjKLvQ99X7IATNLu7u4rLimiUmFm4CO3c5OF2NDZT9FrA2w9vJyo3S+MfAY5oGiKgLlhwU+l9e0TfRY5RLoi1EIVNLItUztmD/1MygGkyaejVMlSkoW3MXli09REkYsCNGrKs0lHymiSW9pc4j+5LO1h5KoAP1oZbHub7HH8wyXSaDZHmBd+zzaffsGClDyF7keMAoJgFg55NbmEYgtdbB+OqNm6SrFWD2b6QsNJRxNGPay/ZUVOs6Dx2MFqRCkCD/If8yBnMsCLfosAAAAASUVORK5CYII=", sx: { width: "24px", height: "24px" } }) : (0, a.jsx)(Fa, { size: "sm", src: La, sx: { width: "24px", height: "24px" } }) }), (0, a.jsx)("div", { className: "whitespace-pre-wrap", children: e.message })] }) }, t);
                  }),
                }),
              }),
              (0, a.jsx)(Re, {
                className:
                  "flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5",
                orientation: "vertical",
                children: (0, a.jsx)(Oe, {
                  className:
                    "flex-1 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]",
                }),
              }),
              (0, a.jsx)(Re, {
                className:
                  "flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5",
                orientation: "horizontal",
                children: (0, a.jsx)(Oe, {
                  className:
                    "flex-1 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]",
                }),
              }),
              (0, a.jsx)(Fe, { className: "bg-blackA8" }),
            ],
          });
        },
        ja = !0,
        Ha = !1,
        Wa = {
          text: !0,
          search: !0,
          url: !0,
          tel: !0,
          email: !0,
          password: !0,
          number: !0,
          date: !0,
          month: !0,
          week: !0,
          time: !0,
          datetime: !0,
          "datetime-local": !0,
        };
      function Va(e) {
        e.metaKey || e.altKey || e.ctrlKey || (ja = !0);
      }
      function Ua() {
        ja = !1;
      }
      function Ka() {
        "hidden" === this.visibilityState && Ha && (ja = !0);
      }
      function Qa(e) {
        var t = e.target;
        try {
          return t.matches(":focus-visible");
        } catch (n) {}
        return (
          ja ||
          (function (e) {
            var t = e.type,
              n = e.tagName;
            return (
              !("INPUT" !== n || !Wa[t] || e.readOnly) ||
              ("TEXTAREA" === n && !e.readOnly) ||
              !!e.isContentEditable
            );
          })(t)
        );
      }
      function $a() {
        var t = e.useCallback(function (e) {
            var t;
            null != e &&
              ((t = e.ownerDocument).addEventListener("keydown", Va, !0),
              t.addEventListener("mousedown", Ua, !0),
              t.addEventListener("pointerdown", Ua, !0),
              t.addEventListener("touchstart", Ua, !0),
              t.addEventListener("visibilitychange", Ka, !0));
          }, []),
          n = e.useRef(!1);
        return {
          isFocusVisibleRef: n,
          onFocus: function (e) {
            return !!Qa(e) && ((n.current = !0), !0);
          },
          onBlur: function () {
            return (
              !!n.current &&
              ((Ha = !0),
              window.clearTimeout(Ra),
              (Ra = window.setTimeout(function () {
                Ha = !1;
              }, 100)),
              (n.current = !1),
              !0)
            );
          },
          ref: t,
        };
      }
      n(110);
      function qa() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return sr(t);
      }
      function Xa(e) {
        return Or("MuiCircularProgress", e);
      }
      Fr("MuiCircularProgress", [
        "root",
        "determinate",
        "svg",
        "track",
        "progress",
        "colorPrimary",
        "colorNeutral",
        "colorDanger",
        "colorSuccess",
        "colorWarning",
        "colorContext",
        "sizeSm",
        "sizeMd",
        "sizeLg",
        "variantPlain",
        "variantOutlined",
        "variantSoft",
        "variantSolid",
      ]);
      var Ga,
        Ja,
        Ya = ["color", "backgroundColor"],
        Za = [
          "children",
          "className",
          "color",
          "size",
          "variant",
          "thickness",
          "determinate",
          "value",
          "component",
          "slots",
          "slotProps",
        ],
        eo = (function () {
          var e = qa.apply(void 0, arguments),
            t = "animation-" + e.name;
          return {
            name: t,
            styles: "@keyframes " + t + "{" + e.styles + "}",
            anim: 1,
            toString: function () {
              return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
            },
          };
        })({
          "0%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(270deg)" },
        });
      function to(e, t) {
        return "var(--CircularProgress-"
          .concat(e, "Thickness, var(--CircularProgress-thickness, ")
          .concat(t, "))");
      }
      var no = Sa("span", {
          name: "JoyCircularProgress",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })(function (e) {
          var t,
            n = e.ownerState,
            r = e.theme,
            a =
              (null == (t = r.variants[n.variant]) ? void 0 : t[n.color]) || {},
            o = a.color,
            l = a.backgroundColor,
            i = m(a, Ya);
          return g(
            {
              "--Icon-fontSize": "calc(0.4 * var(--_root-size))",
              "--CircularProgress-trackColor": l,
              "--CircularProgress-progressColor": o,
              "--CircularProgress-percent": n.value,
              "--CircularProgress-linecap": "round",
            },
            "sm" === n.size && {
              "--_root-size": "var(--CircularProgress-size, 24px)",
              "--_track-thickness": to("track", "3px"),
              "--_progress-thickness": to("progress", "3px"),
            },
            "sm" === n.instanceSize && { "--CircularProgress-size": "24px" },
            "md" === n.size && {
              "--_track-thickness": to("track", "6px"),
              "--_progress-thickness": to("progress", "6px"),
              "--_root-size": "var(--CircularProgress-size, 40px)",
            },
            "md" === n.instanceSize && { "--CircularProgress-size": "40px" },
            "lg" === n.size && {
              "--_track-thickness": to("track", "8px"),
              "--_progress-thickness": to("progress", "8px"),
              "--_root-size": "var(--CircularProgress-size, 64px)",
            },
            "lg" === n.instanceSize && { "--CircularProgress-size": "64px" },
            n.thickness && {
              "--_track-thickness": "".concat(n.thickness, "px"),
              "--_progress-thickness": "".concat(n.thickness, "px"),
            },
            {
              "--_thickness-diff":
                "calc(var(--_track-thickness) - var(--_progress-thickness))",
              "--_inner-size":
                "calc(var(--_root-size) - 2 * var(--variant-borderWidth, 0px))",
              "--_outlined-inset":
                "max(var(--_track-thickness), var(--_progress-thickness))",
              width: "var(--_root-size)",
              height: "var(--_root-size)",
              borderRadius: "var(--_root-size)",
              margin: "var(--CircularProgress-margin)",
              boxSizing: "border-box",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              position: "relative",
              color: o,
            },
            n.children && {
              fontFamily: r.vars.fontFamily.body,
              fontWeight: r.vars.fontWeight.md,
              fontSize: "calc(0.2 * var(--_root-size))",
            },
            i,
            "outlined" === n.variant && {
              "&:before": g(
                {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  borderRadius: "inherit",
                  top: "var(--_outlined-inset)",
                  left: "var(--_outlined-inset)",
                  right: "var(--_outlined-inset)",
                  bottom: "var(--_outlined-inset)",
                },
                i
              ),
            }
          );
        }),
        ro = Sa("svg", {
          name: "JoyCircularProgress",
          slot: "Svg",
          overridesResolver: function (e, t) {
            return t.svg;
          },
        })({
          width: "inherit",
          height: "inherit",
          display: "inherit",
          boxSizing: "inherit",
          position: "absolute",
          top: "calc(-1 * var(--variant-borderWidth, 0px))",
          left: "calc(-1 * var(--variant-borderWidth, 0px))",
        }),
        ao = Sa("circle", {
          name: "JoyCircularProgress",
          slot: "track",
          overridesResolver: function (e, t) {
            return t.track;
          },
        })({
          cx: "50%",
          cy: "50%",
          r: "calc(var(--_inner-size) / 2 - var(--_track-thickness) / 2 + min(0px, var(--_thickness-diff) / 2))",
          fill: "transparent",
          strokeWidth: "var(--_track-thickness)",
          stroke: "var(--CircularProgress-trackColor)",
        }),
        oo = Sa("circle", {
          name: "JoyCircularProgress",
          slot: "progress",
          overridesResolver: function (e, t) {
            return t.progress;
          },
        })(
          {
            "--_progress-radius":
              "calc(var(--_inner-size) / 2 - var(--_progress-thickness) / 2 - max(0px, var(--_thickness-diff) / 2))",
            "--_progress-length":
              "calc(2 * 3.1415926535 * var(--_progress-radius))",
            cx: "50%",
            cy: "50%",
            r: "var(--_progress-radius)",
            fill: "transparent",
            strokeWidth: "var(--_progress-thickness)",
            stroke: "var(--CircularProgress-progressColor)",
            strokeLinecap: "var(--CircularProgress-linecap, round)",
            strokeDasharray: "var(--_progress-length)",
            strokeDashoffset:
              "calc(var(--_progress-length) - var(--CircularProgress-percent) * var(--_progress-length) / 100)",
            transformOrigin: "center",
            transform: "rotate(-90deg)",
          },
          function (e) {
            var t, n;
            return (
              !e.ownerState.determinate &&
              qa(
                Ja ||
                  (Ja =
                    Ga ||
                    ((t = [
                      "\n      animation: var(--CircularProgress-circulation, 0.8s linear 0s infinite normal none running)\n        ",
                      ";\n    ",
                    ]),
                    n || (n = t.slice(0)),
                    (Ga = Object.freeze(
                      Object.defineProperties(t, {
                        raw: { value: Object.freeze(n) },
                      })
                    )))),
                eo
              )
            );
          }
        ),
        lo = e.forwardRef(function (e, t) {
          var n = Qr({ props: e, name: "JoyCircularProgress" }),
            r = n.children,
            o = n.className,
            l = n.color,
            i = void 0 === l ? "primary" : l,
            u = n.size,
            s = void 0 === u ? "md" : u,
            d = n.variant,
            f = void 0 === d ? "soft" : d,
            p = n.thickness,
            v = n.determinate,
            h = void 0 !== v && v,
            y = n.value,
            b = void 0 === y ? (h ? 0 : 25) : y,
            w = n.component,
            S = n.slots,
            k = void 0 === S ? {} : S,
            x = n.slotProps,
            C = void 0 === x ? {} : x,
            E = m(n, Za),
            P = g({}, n, {
              color: i,
              size: s,
              variant: f,
              thickness: p,
              value: b,
              determinate: h,
              instanceSize: e.size,
            }),
            z = (function (e) {
              var t = e.determinate,
                n = e.color,
                r = e.variant,
                a = e.size;
              return Le(
                {
                  root: [
                    "root",
                    t && "determinate",
                    n && "color".concat(je(n)),
                    r && "variant".concat(je(r)),
                    a && "size".concat(je(a)),
                  ],
                  svg: ["svg"],
                  track: ["track"],
                  progress: ["progress"],
                },
                Xa,
                {}
              );
            })(P),
            A = g({}, E, { component: w, slots: k, slotProps: C }),
            _ = c(
              ta("root", {
                ref: t,
                className: Xr(z.root, o),
                elementType: no,
                externalForwardedProps: A,
                ownerState: P,
                additionalProps: g(
                  {
                    role: "progressbar",
                    style: { "--CircularProgress-percent": b },
                  },
                  b &&
                    h && {
                      "aria-valuenow":
                        "number" === typeof b
                          ? Math.round(b)
                          : Math.round(Number(b || 0)),
                    }
                ),
              }),
              2
            ),
            T = _[0],
            I = _[1],
            N = c(
              ta("svg", {
                className: z.svg,
                elementType: ro,
                externalForwardedProps: A,
                ownerState: P,
              }),
              2
            ),
            D = N[0],
            B = N[1],
            R = c(
              ta("track", {
                className: z.track,
                elementType: ao,
                externalForwardedProps: A,
                ownerState: P,
              }),
              2
            ),
            O = R[0],
            F = R[1],
            L = c(
              ta("progress", {
                className: z.progress,
                elementType: oo,
                externalForwardedProps: A,
                ownerState: P,
              }),
              2
            ),
            M = L[0],
            j = L[1];
          return (0,
          a.jsxs)(T, g({}, I, { children: [(0, a.jsxs)(D, g({}, B, { children: [(0, a.jsx)(O, g({}, F)), (0, a.jsx)(M, g({}, j))] })), r] }));
        }),
        io = lo;
      function uo(e) {
        return Or("MuiButton", e);
      }
      var co = Fr("MuiButton", [
        "root",
        "colorPrimary",
        "colorNeutral",
        "colorDanger",
        "colorSuccess",
        "colorWarning",
        "colorContext",
        "variantPlain",
        "variantOutlined",
        "variantSoft",
        "variantSolid",
        "focusVisible",
        "disabled",
        "sizeSm",
        "sizeMd",
        "sizeLg",
        "fullWidth",
        "startDecorator",
        "endDecorator",
        "loading",
        "loadingIndicatorCenter",
      ]);
      var so = e.createContext({}),
        fo = [
          "children",
          "action",
          "color",
          "variant",
          "size",
          "fullWidth",
          "startDecorator",
          "endDecorator",
          "loading",
          "loadingPosition",
          "loadingIndicator",
          "disabled",
          "component",
          "slots",
          "slotProps",
        ],
        po = Sa("span", {
          name: "JoyButton",
          slot: "StartDecorator",
          overridesResolver: function (e, t) {
            return t.startDecorator;
          },
        })({
          "--Icon-margin": "0 0 0 calc(var(--Button-gap) / -2)",
          "--CircularProgress-margin": "0 0 0 calc(var(--Button-gap) / -2)",
          display: "inherit",
          marginRight: "var(--Button-gap)",
        }),
        vo = Sa("span", {
          name: "JoyButton",
          slot: "EndDecorator",
          overridesResolver: function (e, t) {
            return t.endDecorator;
          },
        })({
          "--Icon-margin": "0 calc(var(--Button-gap) / -2) 0 0",
          "--CircularProgress-margin": "0 calc(var(--Button-gap) / -2) 0 0",
          display: "inherit",
          marginLeft: "var(--Button-gap)",
        }),
        mo = Sa("span", {
          name: "JoyButton",
          slot: "LoadingCenter",
          overridesResolver: function (e, t) {
            return t.loadingIndicatorCenter;
          },
        })(function (e) {
          var t,
            n,
            r = e.theme,
            a = e.ownerState;
          return g(
            {
              display: "inherit",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              color:
                null == (t = r.variants[a.variant]) || null == (t = t[a.color])
                  ? void 0
                  : t.color,
            },
            a.disabled && {
              color:
                null == (n = r.variants["".concat(a.variant, "Disabled")]) ||
                null == (n = n[a.color])
                  ? void 0
                  : n.color,
            }
          );
        }),
        ho = Sa("button", {
          name: "JoyButton",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })(function (e) {
          var t,
            n,
            r,
            a,
            o = e.theme,
            l = e.ownerState;
          return [
            g(
              {
                "--Icon-margin": "initial",
                "--Icon-color":
                  "neutral" !== l.color || "solid" === l.variant
                    ? "currentColor"
                    : o.vars.palette.text.icon,
              },
              "sm" === l.size && {
                "--Icon-fontSize": o.vars.fontSize.lg,
                "--CircularProgress-size": "20px",
                "--CircularProgress-thickness": "2px",
                "--Button-gap": "0.375rem",
                minHeight: "var(--Button-minHeight, 2rem)",
                fontSize: o.vars.fontSize.sm,
                paddingBlock: "var(--Button-paddingBlock, 0.25rem)",
                paddingInline: "0.75rem",
              },
              "md" === l.size && {
                "--Icon-fontSize": o.vars.fontSize.xl,
                "--CircularProgress-size": "20px",
                "--CircularProgress-thickness": "2px",
                "--Button-gap": "0.5rem",
                minHeight: "var(--Button-minHeight, 2.25rem)",
                fontSize: o.vars.fontSize.sm,
                paddingBlock: "var(--Button-paddingBlock, 0.375rem)",
                paddingInline: "1rem",
              },
              "lg" === l.size && {
                "--Icon-fontSize": o.vars.fontSize.xl2,
                "--CircularProgress-size": "28px",
                "--CircularProgress-thickness": "4px",
                "--Button-gap": "0.75rem",
                minHeight: "var(--Button-minHeight, 2.75rem)",
                fontSize: o.vars.fontSize.md,
                paddingBlock: "var(--Button-paddingBlock, 0.5rem)",
                paddingInline: "1.5rem",
              },
              {
                WebkitTapHighlightColor: "transparent",
                boxSizing: "border-box",
                borderRadius: "var(--Button-radius, ".concat(
                  o.vars.radius.sm,
                  ")"
                ),
                margin: "var(--Button-margin)",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                textDecoration: "none",
                fontFamily: o.vars.fontFamily.body,
                fontWeight: o.vars.fontWeight.lg,
                lineHeight: o.vars.lineHeight.md,
              },
              l.fullWidth && { width: "100%" },
              f({}, o.focus.selector, o.focus.default)
            ),
            g(
              {},
              null == (t = o.variants[l.variant]) ? void 0 : t[l.color],
              f(
                {
                  "&:hover": {
                    "@media (hover: hover)":
                      null == (n = o.variants["".concat(l.variant, "Hover")])
                        ? void 0
                        : n[l.color],
                  },
                  '&:active, &[aria-pressed="true"]':
                    null == (r = o.variants["".concat(l.variant, "Active")])
                      ? void 0
                      : r[l.color],
                },
                "&.".concat(co.disabled),
                null == (a = o.variants["".concat(l.variant, "Disabled")])
                  ? void 0
                  : a[l.color]
              ),
              "center" === l.loadingPosition &&
                f({}, "&.".concat(co.loading), { color: "transparent" })
            ),
          ];
        }),
        go = e.forwardRef(function (t, n) {
          var r,
            o = Qr({ props: t, name: "JoyButton" }),
            l = o.children,
            i = o.action,
            u = o.color,
            s = void 0 === u ? "primary" : u,
            d = o.variant,
            f = void 0 === d ? "solid" : d,
            p = o.size,
            v = void 0 === p ? "md" : p,
            h = o.fullWidth,
            y = void 0 !== h && h,
            b = o.startDecorator,
            w = o.endDecorator,
            S = o.loading,
            k = void 0 !== S && S,
            x = o.loadingPosition,
            C = void 0 === x ? "center" : x,
            E = o.loadingIndicator,
            P = o.disabled,
            z = o.component,
            A = o.slots,
            _ = void 0 === A ? {} : A,
            T = o.slotProps,
            I = void 0 === T ? {} : T,
            N = m(o, fo),
            D = e.useContext(so),
            B = t.variant || D.variant || f,
            R = t.size || D.size || v,
            O = t.color || D.color || s,
            F =
              null != (r = t.disabled || t.loading) ? r : D.disabled || P || k,
            L = e.useRef(null),
            M = (function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.disabled,
                r = void 0 !== n && n,
                a = t.focusableWhenDisabled,
                o = t.href,
                l = t.rootRef,
                i = t.tabIndex,
                u = t.to,
                s = t.type,
                d = e.useRef(),
                f = c(e.useState(!1), 2),
                p = f[0],
                v = f[1],
                m = $a(),
                h = m.isFocusVisibleRef,
                y = m.onFocus,
                b = m.onBlur,
                w = m.ref,
                S = c(e.useState(!1), 2),
                k = S[0],
                x = S[1];
              r && !a && k && x(!1),
                e.useEffect(
                  function () {
                    h.current = k;
                  },
                  [k, h]
                );
              var C = c(e.useState(""), 2),
                E = C[0],
                P = C[1],
                z = function (e) {
                  return function (t) {
                    var n;
                    k && t.preventDefault(),
                      null == (n = e.onMouseLeave) || n.call(e, t);
                  };
                },
                A = function (e) {
                  return function (t) {
                    var n, r;
                    d.current || (d.current = t.currentTarget),
                      y(t),
                      !0 === h.current &&
                        (x(!0), null == (r = e.onFocusVisible) || r.call(e, t)),
                      null == (n = e.onFocus) || n.call(e, t);
                  };
                },
                _ = function () {
                  var e = d.current;
                  return (
                    "BUTTON" === E ||
                    ("INPUT" === E &&
                      ["button", "submit", "reset"].includes(
                        null == e ? void 0 : e.type
                      )) ||
                    ("A" === E && (null == e ? void 0 : e.href))
                  );
                },
                T = function (e) {
                  return function (t) {
                    var n;
                    r || null == (n = e.onClick) || n.call(e, t);
                  };
                },
                I = function (e) {
                  return function (t) {
                    var n;
                    r ||
                      (v(!0),
                      document.addEventListener(
                        "mouseup",
                        function () {
                          v(!1);
                        },
                        { once: !0 }
                      )),
                      null == (n = e.onMouseDown) || n.call(e, t);
                  };
                },
                N = function (e) {
                  return function (t) {
                    var n, a;
                    null == (n = e.onKeyDown) || n.call(e, t),
                      t.defaultMuiPrevented ||
                        (t.target !== t.currentTarget ||
                          _() ||
                          " " !== t.key ||
                          t.preventDefault(),
                        t.target !== t.currentTarget ||
                          " " !== t.key ||
                          r ||
                          v(!0),
                        t.target !== t.currentTarget ||
                          _() ||
                          "Enter" !== t.key ||
                          r ||
                          (null == (a = e.onClick) || a.call(e, t),
                          t.preventDefault()));
                  };
                },
                D = function (e) {
                  return function (t) {
                    var n, a;
                    t.target === t.currentTarget && v(!1),
                      null == (n = e.onKeyUp) || n.call(e, t),
                      t.target !== t.currentTarget ||
                        _() ||
                        r ||
                        " " !== t.key ||
                        t.defaultMuiPrevented ||
                        null == (a = e.onClick) ||
                        a.call(e, t);
                  };
                },
                B = $r(
                  e.useCallback(function (e) {
                    var t;
                    P(null != (t = null == e ? void 0 : e.tagName) ? t : "");
                  }, []),
                  l,
                  w,
                  d
                ),
                R = {};
              return (
                void 0 !== i && (R.tabIndex = i),
                "BUTTON" === E
                  ? ((R.type = null != s ? s : "button"),
                    a ? (R["aria-disabled"] = r) : (R.disabled = r))
                  : "" !== E &&
                    (o ||
                      u ||
                      ((R.role = "button"), (R.tabIndex = null != i ? i : 0)),
                    r &&
                      ((R["aria-disabled"] = r),
                      (R.tabIndex = a ? (null != i ? i : 0) : -1))),
                {
                  getRootProps: function () {
                    var e,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = g({}, Gr(t), Gr(n)),
                      a = g({ type: s }, r, R, n, {
                        onBlur:
                          ((e = r),
                          function (t) {
                            var n;
                            b(t),
                              !1 === h.current && x(!1),
                              null == (n = e.onBlur) || n.call(e, t);
                          }),
                        onClick: T(r),
                        onFocus: A(r),
                        onKeyDown: N(r),
                        onKeyUp: D(r),
                        onMouseDown: I(r),
                        onMouseLeave: z(r),
                        ref: B,
                      });
                    return delete a.onFocusVisible, a;
                  },
                  focusVisible: k,
                  setFocusVisible: x,
                  active: p,
                  rootRef: B,
                }
              );
            })(g({}, o, { disabled: F, rootRef: $r(L, n) })),
            j = M.focusVisible,
            H = M.setFocusVisible,
            W = M.getRootProps,
            V =
              null != E
                ? E
                : (0, a.jsx)(io, {
                    color: O,
                    thickness: { sm: 2, md: 3, lg: 4 }[R] || 3,
                  });
          e.useImperativeHandle(
            i,
            function () {
              return {
                focusVisible: function () {
                  var e;
                  H(!0), null == (e = L.current) || e.focus();
                },
              };
            },
            [H]
          );
          var U = g({}, o, {
              color: O,
              fullWidth: y,
              variant: B,
              size: R,
              focusVisible: j,
              loading: k,
              loadingPosition: C,
              disabled: F,
            }),
            K = (function (e) {
              var t = e.color,
                n = e.disabled,
                r = e.focusVisible,
                a = e.focusVisibleClassName,
                o = e.fullWidth,
                l = e.size,
                i = e.variant,
                u = e.loading,
                c = Le(
                  {
                    root: [
                      "root",
                      n && "disabled",
                      r && "focusVisible",
                      o && "fullWidth",
                      i && "variant".concat(je(i)),
                      t && "color".concat(je(t)),
                      l && "size".concat(je(l)),
                      u && "loading",
                    ],
                    startDecorator: ["startDecorator"],
                    endDecorator: ["endDecorator"],
                    loadingIndicatorCenter: ["loadingIndicatorCenter"],
                  },
                  uo,
                  {}
                );
              return r && a && (c.root += " ".concat(a)), c;
            })(U),
            Q = g({}, N, { component: z, slots: _, slotProps: I }),
            $ = c(
              ta("root", {
                ref: n,
                className: K.root,
                elementType: ho,
                externalForwardedProps: Q,
                getSlotProps: W,
                ownerState: U,
              }),
              2
            ),
            q = $[0],
            X = $[1],
            G = c(
              ta("startDecorator", {
                className: K.startDecorator,
                elementType: po,
                externalForwardedProps: Q,
                ownerState: U,
              }),
              2
            ),
            J = G[0],
            Y = G[1],
            Z = c(
              ta("endDecorator", {
                className: K.endDecorator,
                elementType: vo,
                externalForwardedProps: Q,
                ownerState: U,
              }),
              2
            ),
            ee = Z[0],
            te = Z[1],
            ne = c(
              ta("loadingIndicatorCenter", {
                className: K.loadingIndicatorCenter,
                elementType: mo,
                externalForwardedProps: Q,
                ownerState: U,
              }),
              2
            ),
            re = ne[0],
            ae = ne[1];
          return (0,
          a.jsxs)(q, g({}, X, { children: [(b || (k && "start" === C)) && (0, a.jsx)(J, g({}, Y, { children: k && "start" === C ? V : b })), l, k && "center" === C && (0, a.jsx)(re, g({}, ae, { children: V })), (w || (k && "end" === C)) && (0, a.jsx)(ee, g({}, te, { children: k && "end" === C ? V : w }))] }));
        });
      go.muiName = "Button";
      var yo = go;
      function bo(e) {
        return Or("MuiInput", e);
      }
      var wo = Fr("MuiInput", [
          "root",
          "input",
          "formControl",
          "focused",
          "disabled",
          "error",
          "adornedStart",
          "adornedEnd",
          "colorPrimary",
          "colorNeutral",
          "colorDanger",
          "colorSuccess",
          "colorWarning",
          "colorContext",
          "sizeSm",
          "sizeMd",
          "sizeLg",
          "variantPlain",
          "variantOutlined",
          "variantSoft",
          "variantSolid",
          "fullWidth",
          "startDecorator",
          "endDecorator",
        ]),
        So = e.createContext(void 0);
      function ko() {
        var t,
          n,
          r,
          a,
          o,
          l,
          i,
          u,
          s =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          d = s.defaultValue,
          f = s.disabled,
          p = void 0 !== f && f,
          v = s.error,
          m = void 0 !== v && v,
          h = s.onBlur,
          y = s.onChange,
          b = s.onFocus,
          w = s.required,
          S = void 0 !== w && w,
          k = s.value,
          x = s.inputRef,
          C = e.useContext(So);
        C
          ? ((t = void 0),
            (n = null != (l = C.disabled) && l),
            (r = null != (i = C.error) && i),
            (a = null != (u = C.required) && u),
            (o = C.value))
          : ((t = d), (n = p), (r = m), (a = S), (o = k));
        var E = e.useRef(null != o).current,
          P = e.useCallback(function (e) {
            0;
          }, []),
          z = e.useRef(null),
          A = $r(z, x, P),
          _ = c(e.useState(!1), 2),
          T = _[0],
          I = _[1];
        e.useEffect(
          function () {
            !C && n && T && (I(!1), null == h || h());
          },
          [C, n, T, h]
        );
        var N = function (e) {
            return function (t) {
              var n, r;
              null != C && C.disabled
                ? t.stopPropagation()
                : (null == (n = e.onFocus) || n.call(e, t),
                  C && C.onFocus
                    ? null == C || null == (r = C.onFocus) || r.call(C)
                    : I(!0));
            };
          },
          D = function (e) {
            return function (t) {
              var n, r, a;
              if (!E && null == (t.target || z.current))
                throw new Error(Me(17));
              null == C || null == (r = C.onChange) || r.call(C, t);
              for (
                var o = arguments.length,
                  l = new Array(o > 1 ? o - 1 : 0),
                  i = 1;
                i < o;
                i++
              )
                l[i - 1] = arguments[i];
              null == (a = e.onChange) ||
                (n = a).call.apply(n, [e, t].concat(l));
            };
          };
        return {
          disabled: n,
          error: r,
          focused: T,
          formControlContext: C,
          getInputProps: function () {
            var e,
              l =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = g({}, { onBlur: h, onChange: y, onFocus: b }, Gr(l)),
              u = g({}, i, {
                onBlur:
                  ((e = i),
                  function (t) {
                    var n;
                    null == (n = e.onBlur) || n.call(e, t),
                      C && C.onBlur ? C.onBlur() : I(!1);
                  }),
                onChange: D(i),
                onFocus: N(i),
              });
            return g(
              {},
              u,
              {
                "aria-invalid": r || void 0,
                defaultValue: t,
                value: o,
                required: a,
                disabled: n,
              },
              l,
              { ref: A },
              u
            );
          },
          getRootProps: function () {
            var e,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = g({}, Gr(s, ["onBlur", "onChange", "onFocus"]), Gr(t));
            return g({}, t, n, {
              onClick:
                ((e = n),
                function (t) {
                  var n;
                  z.current &&
                    t.currentTarget === t.target &&
                    z.current.focus(),
                    null == (n = e.onClick) || n.call(e, t);
                }),
            });
          },
          inputRef: A,
          required: a,
          value: o,
        };
      }
      var xo = e.createContext(void 0),
        Co = [
          "aria-describedby",
          "aria-label",
          "aria-labelledby",
          "autoComplete",
          "autoFocus",
          "className",
          "defaultValue",
          "disabled",
          "error",
          "id",
          "name",
          "onClick",
          "onChange",
          "onKeyDown",
          "onKeyUp",
          "onFocus",
          "onBlur",
          "placeholder",
          "readOnly",
          "required",
          "type",
          "value",
        ];
      var Eo = function (e) {
          return function (t) {
            return "--"
              .concat(e ? "".concat(e, "-") : "")
              .concat(t.replace(/^--/, ""));
          };
        },
        Po = "data-skip-inverted-colors",
        zo = "& :not([".concat(Po, "], [").concat(Po, "] *)"),
        Ao = function (e) {
          var t,
            n,
            r,
            a,
            o,
            l,
            i,
            u,
            c,
            s,
            d,
            p,
            v,
            m,
            h,
            g,
            y,
            b,
            w,
            S,
            k,
            x,
            C,
            E,
            P,
            z = Eo(e.cssVarPrefix);
          return (
            f(
              (r = {
                "--variant-plainColor": "var(--variant-plainColor) !important",
                "--variant-plainHoverColor":
                  "var(--variant-plainHoverColor) !important",
                "--variant-plainHoverBg":
                  "var(--variant-plainHoverBg) !important",
                "--variant-plainActiveBg":
                  "var(--variant-plainActiveBg) !important",
                "--variant-plainDisabledColor":
                  "var(--variant-plainDisabledColor) !important",
                "--variant-outlinedColor":
                  "var(--variant-outlinedColor) !important",
                "--variant-outlinedBorder":
                  "var(--variant-outlinedBorder) !important",
                "--variant-outlinedHoverColor":
                  "var(--variant-outlinedHoverColor) !important",
                "--variant-outlinedHoverBorder":
                  "var(--variant-outlinedHoverBorder) !important",
                "--variant-outlinedHoverBg":
                  "var(--variant-outlinedHoverBg) !important",
                "--variant-outlinedActiveBg":
                  "var(--variant-outlinedActiveBg) !important",
                "--variant-outlinedDisabledColor":
                  "var(--variant-outlinedDisabledColor) !important",
                "--variant-outlinedDisabledBorder":
                  "var(--variant-outlinedDisabledBorder) !important",
                "--variant-softColor": "var(--variant-softColor) !important",
                "--variant-softHoverColor":
                  "var(--variant-softHoverColor) !important",
                "--variant-softBg": "var(--variant-softBg) !important",
                "--variant-softHoverBg":
                  "var(--variant-softHoverBg) !important",
                "--variant-softActiveBg":
                  "var(--variant-softActiveBg) !important",
                "--variant-softActiveColor":
                  "var(--variant-softActiveColor) !important",
                "--variant-softDisabledColor":
                  "var(--variant-softDisabledColor) !important",
                "--variant-softDisabledBg":
                  "var(--variant-softDisabledBg) !important",
                "--variant-solidColor": "var(--variant-solidColor) !important",
                "--variant-solidBg": "var(--variant-solidBg) !important",
                "--variant-solidHoverBg":
                  "var(--variant-solidHoverBg) !important",
                "--variant-solidActiveBg":
                  "var(--variant-solidActiveBg) !important",
                "--variant-solidDisabledColor":
                  "var(--variant-solidDisabledColor) !important",
                "--variant-solidDisabledBg":
                  "var(--variant-solidDisabledBg) !important",
                "--Badge-ringColor": "var(--Badge-ringColor) !important",
                colorScheme: "unset",
              }),
              e.getColorSchemeSelector("light"),
              (f(
                (t = {}),
                z("--palette-focusVisible"),
                "".concat(
                  null == (a = e.colorSchemes.light)
                    ? void 0
                    : a.palette.focusVisible,
                  " !important"
                )
              ),
              f(
                t,
                z("--palette-background-body"),
                "".concat(
                  null == (o = e.colorSchemes.light)
                    ? void 0
                    : o.palette.background.body,
                  " !important"
                )
              ),
              f(
                t,
                z("--palette-background-surface"),
                "".concat(
                  null == (l = e.colorSchemes.light)
                    ? void 0
                    : l.palette.background.surface,
                  " !important"
                )
              ),
              f(
                t,
                z("--palette-background-popup"),
                "".concat(
                  null == (i = e.colorSchemes.light)
                    ? void 0
                    : i.palette.background.popup,
                  " !important"
                )
              ),
              f(
                t,
                z("--palette-background-level1"),
                "".concat(
                  null == (u = e.colorSchemes.light)
                    ? void 0
                    : u.palette.background.level1,
                  " !important"
                )
              ),
              f(
                t,
                z("--palette-background-level2"),
                "".concat(
                  null == (c = e.colorSchemes.light)
                    ? void 0
                    : c.palette.background.level2,
                  " !important"
                )
              ),
              f(
                t,
                z("--palette-background-level3"),
                "".concat(
                  null == (s = e.colorSchemes.light)
                    ? void 0
                    : s.palette.background.level3,
                  " !important"
                )
              ),
              f(
                t,
                z("--palette-text-primary"),
                "".concat(
                  null == (d = e.colorSchemes.light)
                    ? void 0
                    : d.palette.text.primary,
                  " !important"
                )
              ),
              f(
                t,
                z("--palette-text-secondary"),
                "".concat(
                  null == (p = e.colorSchemes.light)
                    ? void 0
                    : p.palette.text.secondary,
                  " !important"
                )
              ),
              f(
                t,
                z("--palette-text-tertiary"),
                "".concat(
                  null == (v = e.colorSchemes.light)
                    ? void 0
                    : v.palette.text.tertiary,
                  " !important"
                )
              ),
              f(
                t,
                z("--palette-divider"),
                "".concat(
                  null == (m = e.colorSchemes.light)
                    ? void 0
                    : m.palette.divider,
                  " !important"
                )
              ),
              t)
            ),
            f(
              r,
              e.getColorSchemeSelector("dark"),
              (f(
                (n = {}),
                z("--palette-focusVisible"),
                "".concat(
                  null == (h = e.colorSchemes.dark)
                    ? void 0
                    : h.palette.focusVisible,
                  " !important"
                )
              ),
              f(
                n,
                z("--palette-background-body"),
                "".concat(
                  null == (g = e.colorSchemes.dark)
                    ? void 0
                    : g.palette.background.body,
                  " !important"
                )
              ),
              f(
                n,
                z("--palette-background-surface"),
                "".concat(
                  null == (y = e.colorSchemes.dark)
                    ? void 0
                    : y.palette.background.surface,
                  " !important"
                )
              ),
              f(
                n,
                z("--palette-background-popup"),
                "".concat(
                  null == (b = e.colorSchemes.dark)
                    ? void 0
                    : b.palette.background.popup,
                  " !important"
                )
              ),
              f(
                n,
                z("--palette-background-level1"),
                "".concat(
                  null == (w = e.colorSchemes.dark)
                    ? void 0
                    : w.palette.background.level1,
                  " !important"
                )
              ),
              f(
                n,
                z("--palette-background-level2"),
                "".concat(
                  null == (S = e.colorSchemes.dark)
                    ? void 0
                    : S.palette.background.level2,
                  " !important"
                )
              ),
              f(
                n,
                z("--palette-background-level3"),
                "".concat(
                  null == (k = e.colorSchemes.dark)
                    ? void 0
                    : k.palette.background.level3,
                  " !important"
                )
              ),
              f(
                n,
                z("--palette-text-primary"),
                "".concat(
                  null == (x = e.colorSchemes.dark)
                    ? void 0
                    : x.palette.text.primary,
                  " !important"
                )
              ),
              f(
                n,
                z("--palette-text-secondary"),
                "".concat(
                  null == (C = e.colorSchemes.dark)
                    ? void 0
                    : C.palette.text.secondary,
                  " !important"
                )
              ),
              f(
                n,
                z("--palette-text-tertiary"),
                "".concat(
                  null == (E = e.colorSchemes.dark)
                    ? void 0
                    : E.palette.text.tertiary,
                  " !important"
                )
              ),
              f(
                n,
                z("--palette-divider"),
                "".concat(
                  null == (P = e.colorSchemes.dark)
                    ? void 0
                    : P.palette.divider,
                  " !important"
                )
              ),
              n)
            ),
            r
          );
        };
      var _o = function (e) {
          return function (t) {
            var n,
              r,
              a = void 0 !== t.theme ? t.theme : t,
              o = br(a.cssVarPrefix),
              l = Eo(a.cssVarPrefix),
              i = function (e) {
                var t = e.split("-");
                return o(e, a.palette[t[1]][t[2]]);
              };
            return (
              f(
                (r = {}),
                zo,
                f(
                  {
                    "--Badge-ringColor": i("palette-".concat(e, "-solidBg")),
                    "--Icon-color": "currentColor",
                  },
                  ""
                    .concat(a.getColorSchemeSelector("light"), ", ")
                    .concat(a.getColorSchemeSelector("dark")),
                  (f(
                    (n = { colorScheme: "dark" }),
                    l("--palette-focusVisible"),
                    i("palette-".concat(e, "-200"))
                  ),
                  f(n, l("--palette-background-body"), "rgba(0 0 0 / 0.1)"),
                  f(n, l("--palette-background-surface"), "rgba(0 0 0 / 0.06)"),
                  f(
                    n,
                    l("--palette-background-popup"),
                    i("palette-".concat(e, "-700"))
                  ),
                  f(
                    n,
                    l("--palette-background-level1"),
                    "rgba(".concat(
                      i("palette-".concat(e, "-darkChannel")),
                      " / 0.2)"
                    )
                  ),
                  f(
                    n,
                    l("--palette-background-level2"),
                    "rgba(".concat(
                      i("palette-".concat(e, "-darkChannel")),
                      " / 0.36)"
                    )
                  ),
                  f(
                    n,
                    l("--palette-background-level3"),
                    "rgba(".concat(
                      i("palette-".concat(e, "-darkChannel")),
                      " / 0.6)"
                    )
                  ),
                  f(n, l("--palette-text-primary"), i("palette-common-white")),
                  f(
                    n,
                    l("--palette-text-secondary"),
                    i("palette-".concat(e, "-200"))
                  ),
                  f(
                    n,
                    l("--palette-text-tertiary"),
                    i("palette-".concat(e, "-300"))
                  ),
                  f(
                    n,
                    l("--palette-text-icon"),
                    i("palette-".concat(e, "-200"))
                  ),
                  f(
                    n,
                    l("--palette-divider"),
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.32)"
                    )
                  ),
                  f(n, "--variant-plainColor", i("palette-".concat(e, "-50"))),
                  f(n, "--variant-plainHoverColor", "#fff"),
                  f(
                    n,
                    "--variant-plainHoverBg",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.12)"
                    )
                  ),
                  f(
                    n,
                    "--variant-plainActiveBg",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.32)"
                    )
                  ),
                  f(
                    n,
                    "--variant-plainDisabledColor",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.72)"
                    )
                  ),
                  f(
                    n,
                    "--variant-outlinedColor",
                    i("palette-".concat(e, "-50"))
                  ),
                  f(
                    n,
                    "--variant-outlinedBorder",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.5)"
                    )
                  ),
                  f(n, "--variant-outlinedHoverColor", "#fff"),
                  f(
                    n,
                    "--variant-outlinedHoverBorder",
                    i("palette-".concat(e, "-300"))
                  ),
                  f(
                    n,
                    "--variant-outlinedHoverBg",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.12)"
                    )
                  ),
                  f(
                    n,
                    "--variant-outlinedActiveBg",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.32)"
                    )
                  ),
                  f(
                    n,
                    "--variant-outlinedDisabledColor",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.72)"
                    )
                  ),
                  f(
                    n,
                    "--variant-outlinedDisabledBorder",
                    "rgba(255 255 255 / 0.2)"
                  ),
                  f(n, "--variant-softColor", i("palette-common-white")),
                  f(n, "--variant-softHoverColor", i("palette-common-white")),
                  f(
                    n,
                    "--variant-softBg",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.24)"
                    )
                  ),
                  f(
                    n,
                    "--variant-softHoverBg",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.36)"
                    )
                  ),
                  f(
                    n,
                    "--variant-softActiveBg",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.16)"
                    )
                  ),
                  f(n, "--variant-softActiveColor", "#fff"),
                  f(
                    n,
                    "--variant-softDisabledColor",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.72)"
                    )
                  ),
                  f(
                    n,
                    "--variant-softDisabledBg",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.1)"
                    )
                  ),
                  f(
                    n,
                    "--variant-solidColor",
                    i(
                      "palette-"
                        .concat(e, "-")
                        .concat("neutral" === e ? "600" : "500")
                    )
                  ),
                  f(n, "--variant-solidBg", i("palette-common-white")),
                  f(n, "--variant-solidHoverBg", i("palette-common-white")),
                  f(
                    n,
                    "--variant-solidActiveBg",
                    i("palette-".concat(e, "-100"))
                  ),
                  f(
                    n,
                    "--variant-solidDisabledColor",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.72)"
                    )
                  ),
                  f(
                    n,
                    "--variant-solidDisabledBg",
                    "rgba(".concat(
                      i("palette-".concat(e, "-lightChannel")),
                      " / 0.1)"
                    )
                  ),
                  n)
                )
              ),
              f(r, "&, & [".concat(Po, "]"), Ao(a)),
              r
            );
          };
        },
        To = function (e) {
          return function (t) {
            var n,
              r,
              a,
              o,
              l = t.theme,
              i = void 0 === l ? t : l,
              u = br(i.cssVarPrefix),
              c = Eo(i.cssVarPrefix),
              s = function (e) {
                var t = e.split("-");
                return u(e, i.palette[t[1]][t[2]]);
              };
            return (
              f(
                (o = {}),
                zo,
                (f(
                  (a = {
                    "--Badge-ringColor": s("palette-".concat(e, "-softBg")),
                    "--Icon-color": "currentColor",
                  }),
                  i.getColorSchemeSelector("dark"),
                  (f(
                    (n = {}),
                    c("--palette-focusVisible"),
                    s("palette-".concat(e, "-300"))
                  ),
                  f(
                    n,
                    c("--palette-background-body"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.1)"
                    )
                  ),
                  f(
                    n,
                    c("--palette-background-surface"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.08)"
                    )
                  ),
                  f(
                    n,
                    c("--palette-background-level1"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.2)"
                    )
                  ),
                  f(
                    n,
                    c("--palette-background-level2"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.4)"
                    )
                  ),
                  f(
                    n,
                    c("--palette-background-level3"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.6)"
                    )
                  ),
                  f(
                    n,
                    c("--palette-text-primary"),
                    s("palette-".concat(e, "-100"))
                  ),
                  f(
                    n,
                    c("--palette-text-secondary"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-lightChannel")),
                      " / 0.72)"
                    )
                  ),
                  f(
                    n,
                    c("--palette-text-tertiary"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-lightChannel")),
                      " / 0.6)"
                    )
                  ),
                  f(
                    n,
                    c("--palette-text-icon"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-lightChannel")),
                      " / 0.6)"
                    )
                  ),
                  f(
                    n,
                    c("--palette-divider"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-lightChannel")),
                      " / 0.2)"
                    )
                  ),
                  f(
                    n,
                    "--variant-plainColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-lightChannel")),
                      " / 1)"
                    )
                  ),
                  f(
                    n,
                    "--variant-plainHoverColor",
                    s("palette-".concat(e, "-50"))
                  ),
                  f(
                    n,
                    "--variant-plainHoverBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.16)"
                    )
                  ),
                  f(
                    n,
                    "--variant-plainActiveBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.32)"
                    )
                  ),
                  f(
                    n,
                    "--variant-plainDisabledColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.72)"
                    )
                  ),
                  f(
                    n,
                    "--variant-outlinedColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-lightChannel")),
                      " / 1)"
                    )
                  ),
                  f(
                    n,
                    "--variant-outlinedHoverColor",
                    s("palette-".concat(e, "-50"))
                  ),
                  f(n, "--variant-outlinedBg", "initial"),
                  f(
                    n,
                    "--variant-outlinedBorder",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.4)"
                    )
                  ),
                  f(
                    n,
                    "--variant-outlinedHoverBorder",
                    s("palette-".concat(e, "-600"))
                  ),
                  f(
                    n,
                    "--variant-outlinedHoverBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.16)"
                    )
                  ),
                  f(
                    n,
                    "--variant-outlinedActiveBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.32)"
                    )
                  ),
                  f(
                    n,
                    "--variant-outlinedDisabledColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.72)"
                    )
                  ),
                  f(
                    n,
                    "--variant-outlinedDisabledBorder",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.2)"
                    )
                  ),
                  f(n, "--variant-softColor", s("palette-".concat(e, "-200"))),
                  f(
                    n,
                    "--variant-softBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.24)"
                    )
                  ),
                  f(n, "--variant-softHoverColor", "#fff"),
                  f(
                    n,
                    "--variant-softHoverBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.32)"
                    )
                  ),
                  f(
                    n,
                    "--variant-softActiveBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.48)"
                    )
                  ),
                  f(
                    n,
                    "--variant-softDisabledColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.72)"
                    )
                  ),
                  f(
                    n,
                    "--variant-softDisabledBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.12)"
                    )
                  ),
                  f(n, "--variant-solidColor", "#fff"),
                  f(n, "--variant-solidBg", s("palette-".concat(e, "-500"))),
                  f(n, "--variant-solidHoverColor", "#fff"),
                  f(
                    n,
                    "--variant-solidHoverBg",
                    s("palette-".concat(e, "-600"))
                  ),
                  f(
                    n,
                    "--variant-solidActiveBg",
                    s("palette-".concat(e, "-600"))
                  ),
                  f(
                    n,
                    "--variant-solidDisabledColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.72)"
                    )
                  ),
                  f(
                    n,
                    "--variant-solidDisabledBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.12)"
                    )
                  ),
                  n)
                ),
                f(
                  a,
                  i.getColorSchemeSelector("light"),
                  (f(
                    (r = {}),
                    c("--palette-focusVisible"),
                    s("palette-".concat(e, "-500"))
                  ),
                  f(
                    r,
                    c("--palette-background-body"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.1)"
                    )
                  ),
                  f(
                    r,
                    c("--palette-background-surface"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.08)"
                    )
                  ),
                  f(
                    r,
                    c("--palette-background-level1"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.2)"
                    )
                  ),
                  f(
                    r,
                    c("--palette-background-level2"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.32)"
                    )
                  ),
                  f(
                    r,
                    c("--palette-background-level3"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.48)"
                    )
                  ),
                  f(
                    r,
                    c("--palette-text-primary"),
                    s("palette-".concat(e, "-700"))
                  ),
                  f(
                    r,
                    c("--palette-text-secondary"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-darkChannel")),
                      " / 0.8)"
                    )
                  ),
                  f(
                    r,
                    c("--palette-text-tertiary"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-darkChannel")),
                      " / 0.68)"
                    )
                  ),
                  f(
                    r,
                    c("--palette-text-icon"),
                    s("palette-".concat(e, "-500"))
                  ),
                  f(
                    r,
                    c("--palette-divider"),
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.32)"
                    )
                  ),
                  f(
                    r,
                    "--variant-plainColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-darkChannel")),
                      " / 0.8)"
                    )
                  ),
                  f(
                    r,
                    "--variant-plainHoverColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-darkChannel")),
                      " / 1)"
                    )
                  ),
                  f(
                    r,
                    "--variant-plainHoverBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.12)"
                    )
                  ),
                  f(
                    r,
                    "--variant-plainActiveBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.24)"
                    )
                  ),
                  f(
                    r,
                    "--variant-plainDisabledColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.6)"
                    )
                  ),
                  f(
                    r,
                    "--variant-outlinedColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 1)"
                    )
                  ),
                  f(
                    r,
                    "--variant-outlinedBorder",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.4)"
                    )
                  ),
                  f(
                    r,
                    "--variant-outlinedHoverColor",
                    s("palette-".concat(e, "-600"))
                  ),
                  f(
                    r,
                    "--variant-outlinedHoverBorder",
                    s("palette-".concat(e, "-300"))
                  ),
                  f(
                    r,
                    "--variant-outlinedHoverBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.12)"
                    )
                  ),
                  f(
                    r,
                    "--variant-outlinedActiveBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.24)"
                    )
                  ),
                  f(
                    r,
                    "--variant-outlinedDisabledColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.6)"
                    )
                  ),
                  f(
                    r,
                    "--variant-outlinedDisabledBorder",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.12)"
                    )
                  ),
                  f(r, "--variant-softColor", s("palette-".concat(e, "-600"))),
                  f(
                    r,
                    "--variant-softBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-lightChannel")),
                      " / 0.8)"
                    )
                  ),
                  f(
                    r,
                    "--variant-softHoverColor",
                    s("palette-".concat(e, "-700"))
                  ),
                  f(
                    r,
                    "--variant-softHoverBg",
                    s("palette-".concat(e, "-200"))
                  ),
                  f(
                    r,
                    "--variant-softActiveBg",
                    s("palette-".concat(e, "-300"))
                  ),
                  f(
                    r,
                    "--variant-softDisabledColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.6)"
                    )
                  ),
                  f(
                    r,
                    "--variant-softDisabledBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.08)"
                    )
                  ),
                  f(r, "--variant-solidColor", s("palette-common-white")),
                  f(
                    r,
                    "--variant-solidBg",
                    s(
                      "palette-"
                        .concat(e, "-")
                        .concat("neutral" === e ? "700" : "500")
                    )
                  ),
                  f(r, "--variant-solidHoverColor", s("palette-common-white")),
                  f(
                    r,
                    "--variant-solidHoverBg",
                    s("palette-".concat(e, "-").concat("600"))
                  ),
                  f(
                    r,
                    "--variant-solidActiveBg",
                    s("palette-".concat(e, "-").concat("600"))
                  ),
                  f(
                    r,
                    "--variant-solidDisabledColor",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.6)"
                    )
                  ),
                  f(
                    r,
                    "--variant-solidDisabledBg",
                    "rgba(".concat(
                      s("palette-".concat(e, "-mainChannel")),
                      " / 0.08)"
                    )
                  ),
                  r)
                ),
                a)
              ),
              f(o, "&, & [".concat(Po, "]"), Ao(i)),
              o
            );
          };
        },
        Io = [
          "propsToForward",
          "rootStateClasses",
          "inputStateClasses",
          "getRootProps",
          "getInputProps",
          "formControl",
          "focused",
          "error",
          "disabled",
          "fullWidth",
          "size",
          "color",
          "variant",
          "startDecorator",
          "endDecorator",
          "component",
          "slots",
          "slotProps",
        ],
        No = Sa("div")(function (e) {
          var t,
            n,
            r,
            a,
            o,
            l,
            i,
            u = e.theme,
            c = e.ownerState,
            s =
              null == (n = u.variants["".concat(c.variant)])
                ? void 0
                : n[c.color];
          return [
            g(
              f(
                {
                  "--Input-radius": u.vars.radius.sm,
                  "--Input-gap": "0.5rem",
                  "--Input-placeholderColor": "inherit",
                  "--Input-placeholderOpacity": 0.64,
                  "--Input-decoratorColor": u.vars.palette.text.icon,
                  "--Input-focused": "0",
                  "--Input-focusedThickness": u.vars.focus.thickness,
                  "--Input-focusedHighlight":
                    null ==
                    (r =
                      u.vars.palette[
                        "neutral" === c.color ? "primary" : c.color
                      ])
                      ? void 0
                      : r[500],
                },
                "&:not([".concat(Po, "])"),
                g(
                  {},
                  c.instanceColor && {
                    "--_Input-focusedHighlight":
                      null ==
                      (a =
                        u.vars.palette[
                          "neutral" === c.instanceColor
                            ? "primary"
                            : c.instanceColor
                        ])
                        ? void 0
                        : a[500],
                  },
                  {
                    "--Input-focusedHighlight":
                      "var(--_Input-focusedHighlight, ".concat(
                        u.vars.palette.focusVisible,
                        ")"
                      ),
                  }
                )
              ),
              "sm" === c.size && {
                "--Input-minHeight": "2rem",
                "--Input-paddingInline": "0.5rem",
                "--Input-decoratorChildHeight":
                  "min(1.5rem, var(--Input-minHeight))",
                "--Icon-fontSize": u.vars.fontSize.xl,
              },
              "md" === c.size && {
                "--Input-minHeight": "2.25rem",
                "--Input-paddingInline": "0.75rem",
                "--Input-decoratorChildHeight":
                  "min(1.75rem, var(--Input-minHeight))",
                "--Icon-fontSize": u.vars.fontSize.xl2,
              },
              "lg" === c.size && {
                "--Input-minHeight": "2.75rem",
                "--Input-paddingInline": "1rem",
                "--Input-gap": "0.75rem",
                "--Input-decoratorChildHeight":
                  "min(2.25rem, var(--Input-minHeight))",
                "--Icon-fontSize": u.vars.fontSize.xl2,
              },
              {
                "--Input-decoratorChildOffset":
                  "min(calc(var(--Input-paddingInline) - (var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2), var(--Input-paddingInline))",
                "--_Input-paddingBlock":
                  "max((var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2, 0px)",
                "--Input-decoratorChildRadius":
                  "max(var(--Input-radius) - var(--variant-borderWidth, 0px) - var(--_Input-paddingBlock), min(var(--_Input-paddingBlock) + var(--variant-borderWidth, 0px), var(--Input-radius) / 2))",
                "--Button-minHeight": "var(--Input-decoratorChildHeight)",
                "--Button-paddingBlock": "0px",
                "--IconButton-size": "var(--Input-decoratorChildHeight)",
                "--Button-radius": "var(--Input-decoratorChildRadius)",
                "--IconButton-radius": "var(--Input-decoratorChildRadius)",
                boxSizing: "border-box",
              },
              "plain" !== c.variant && { boxShadow: u.shadow.xs },
              { minWidth: 0, minHeight: "var(--Input-minHeight)" },
              c.fullWidth && { width: "100%" },
              {
                cursor: "text",
                position: "relative",
                display: "flex",
                paddingInline: "var(--Input-paddingInline)",
                borderRadius: "var(--Input-radius)",
              },
              u.typography["body-".concat(c.size)],
              s,
              {
                backgroundColor:
                  null != (o = null == s ? void 0 : s.backgroundColor)
                    ? o
                    : u.vars.palette.background.surface,
                "&:before": {
                  boxSizing: "border-box",
                  content: '""',
                  display: "block",
                  position: "absolute",
                  pointerEvents: "none",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1,
                  borderRadius: "inherit",
                  margin: "calc(var(--variant-borderWidth, 0px) * -1)",
                  boxShadow:
                    "var(--Input-focusedInset, inset) 0 0 0 calc(var(--Input-focused) * var(--Input-focusedThickness)) var(--Input-focusedHighlight)",
                },
              }
            ),
            ((t = {
              "&:hover": g(
                {},
                null == (l = u.variants["".concat(c.variant, "Hover")])
                  ? void 0
                  : l[c.color],
                { backgroundColor: null }
              ),
            }),
            f(
              t,
              "&.".concat(wo.disabled),
              null == (i = u.variants["".concat(c.variant, "Disabled")])
                ? void 0
                : i[c.color]
            ),
            f(t, "&:focus-within::before", { "--Input-focused": "1" }),
            t),
          ];
        }),
        Do = Sa("input")(function (e) {
          var t = e.ownerState;
          return {
            border: "none",
            minWidth: 0,
            outline: 0,
            padding: 0,
            flex: 1,
            color: "inherit",
            backgroundColor: "transparent",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontStyle: "inherit",
            fontWeight: "inherit",
            lineHeight: "inherit",
            textOverflow: "ellipsis",
            "&:-webkit-autofill": g(
              { paddingInline: "var(--Input-paddingInline)" },
              !t.startDecorator && {
                marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
                paddingInlineStart: "var(--Input-paddingInline)",
                borderTopLeftRadius:
                  "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
                borderBottomLeftRadius:
                  "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
              },
              !t.endDecorator && {
                marginInlineEnd: "calc(-1 * var(--Input-paddingInline))",
                paddingInlineEnd: "var(--Input-paddingInline)",
                borderTopRightRadius:
                  "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
                borderBottomRightRadius:
                  "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
              }
            ),
            "&::-webkit-input-placeholder": {
              color: "var(--Input-placeholderColor)",
              opacity: "var(--Input-placeholderOpacity)",
            },
            "&::-moz-placeholder": {
              color: "var(--Input-placeholderColor)",
              opacity: "var(--Input-placeholderOpacity)",
            },
            "&:-ms-input-placeholder": {
              color: "var(--Input-placeholderColor)",
              opacity: "var(--Input-placeholderOpacity)",
            },
            "&::-ms-input-placeholder": {
              color: "var(--Input-placeholderColor)",
              opacity: "var(--Input-placeholderOpacity)",
            },
          };
        }),
        Bo = Sa("div")({
          "--Button-margin":
            "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
          "--IconButton-margin":
            "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
          "--Icon-margin": "0 0 0 calc(var(--Input-paddingInline) / -4)",
          display: "inherit",
          alignItems: "center",
          paddingBlock: "var(--unstable_InputPaddingBlock)",
          flexWrap: "wrap",
          marginInlineEnd: "var(--Input-gap)",
          color: "var(--Input-decoratorColor)",
          cursor: "initial",
        }),
        Ro = Sa("div")({
          "--Button-margin":
            "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
          "--IconButton-margin":
            "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
          "--Icon-margin": "0 calc(var(--Input-paddingInline) / -4) 0 0",
          display: "inherit",
          alignItems: "center",
          marginInlineStart: "var(--Input-gap)",
          color: "var(--Input-decoratorColor)",
          cursor: "initial",
        }),
        Oo = Sa(No, {
          name: "JoyInput",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })({}),
        Fo = Sa(Do, {
          name: "JoyInput",
          slot: "Input",
          overridesResolver: function (e, t) {
            return t.input;
          },
        })({}),
        Lo = Sa(Bo, {
          name: "JoyInput",
          slot: "StartDecorator",
          overridesResolver: function (e, t) {
            return t.startDecorator;
          },
        })({}),
        Mo = Sa(Ro, {
          name: "JoyInput",
          slot: "EndDecorator",
          overridesResolver: function (e, t) {
            return t.endDecorator;
          },
        })({}),
        jo = e.forwardRef(function (t, n) {
          var r,
            o,
            l,
            i,
            u,
            s,
            d = Qr({ props: t, name: "JoyInput" }),
            p = (function (t, n) {
              var r,
                a = e.useContext(xo),
                o = t["aria-describedby"],
                l = t["aria-label"],
                i = t["aria-labelledby"],
                u = t.autoComplete,
                c = t.autoFocus,
                s = t.className,
                d = t.defaultValue,
                p = t.disabled,
                v = t.error,
                h = t.id,
                y = t.name,
                b = t.onClick,
                w = t.onChange,
                S = t.onKeyDown,
                k = t.onKeyUp,
                x = t.onFocus,
                C = t.onBlur,
                E = t.placeholder,
                P = t.readOnly,
                z = t.required,
                A = t.type,
                _ = t.value,
                T = m(t, Co),
                I = ko({
                  disabled: null != p ? p : null == a ? void 0 : a.disabled,
                  defaultValue: d,
                  error: v,
                  onBlur: C,
                  onClick: b,
                  onChange: w,
                  onFocus: x,
                  required: null != z ? z : null == a ? void 0 : a.required,
                  value: _,
                }),
                N = I.getRootProps,
                D = I.getInputProps,
                B = I.focused,
                R = I.error,
                O = I.disabled;
              return g(
                {
                  formControl: a,
                  propsToForward: {
                    "aria-describedby": o,
                    "aria-label": l,
                    "aria-labelledby": i,
                    autoComplete: u,
                    autoFocus: c,
                    disabled: O,
                    id: h,
                    onKeyDown: S,
                    onKeyUp: k,
                    name: y,
                    placeholder: E,
                    readOnly: P,
                    type: A,
                  },
                  rootStateClasses:
                    (f((r = {}), n.disabled, O),
                    f(r, n.error, R),
                    f(r, n.focused, B),
                    f(r, n.formControl, Boolean(a)),
                    f(r, s, s),
                    r),
                  inputStateClasses: f({}, n.disabled, O),
                  getRootProps: N,
                  getInputProps: D,
                  focused: B,
                  error: R,
                  disabled: O,
                },
                T
              );
            })(d, wo),
            v = p.propsToForward,
            h = p.rootStateClasses,
            y = p.inputStateClasses,
            b = p.getRootProps,
            w = p.getInputProps,
            S = p.formControl,
            k = p.focused,
            x = p.error,
            C = void 0 !== x && x,
            E = p.disabled,
            P = p.fullWidth,
            z = void 0 !== P && P,
            A = p.size,
            _ = void 0 === A ? "md" : A,
            T = p.color,
            I = void 0 === T ? "neutral" : T,
            N = p.variant,
            D = void 0 === N ? "outlined" : N,
            B = p.startDecorator,
            R = p.endDecorator,
            O = p.component,
            F = p.slots,
            L = void 0 === F ? {} : F,
            M = p.slotProps,
            j = void 0 === M ? {} : M,
            H = m(p, Io),
            W =
              null !=
              (r = null != (o = t.error) ? o : null == S ? void 0 : S.error)
                ? r
                : C,
            V =
              null !=
              (l = null != (i = t.size) ? i : null == S ? void 0 : S.size)
                ? l
                : _,
            U =
              null != (u = t.color)
                ? u
                : W
                ? "danger"
                : null != (s = null == S ? void 0 : S.color)
                ? s
                : I,
            K = g({ instanceColor: W ? "danger" : t.color }, d, {
              fullWidth: z,
              color: U,
              disabled: E,
              error: W,
              focused: k,
              size: V,
              variant: D,
            }),
            Q = (function (e) {
              var t = e.disabled,
                n = e.fullWidth,
                r = e.variant,
                a = e.color,
                o = e.size;
              return Le(
                {
                  root: [
                    "root",
                    t && "disabled",
                    n && "fullWidth",
                    r && "variant".concat(je(r)),
                    a && "color".concat(je(a)),
                    o && "size".concat(je(o)),
                  ],
                  input: ["input"],
                  startDecorator: ["startDecorator"],
                  endDecorator: ["endDecorator"],
                },
                bo,
                {}
              );
            })(K),
            $ = g({}, H, { component: O, slots: L, slotProps: j }),
            q = c(
              ta("root", {
                ref: n,
                className: [Q.root, h],
                elementType: Oo,
                getSlotProps: b,
                externalForwardedProps: $,
                ownerState: K,
              }),
              2
            ),
            X = q[0],
            G = q[1],
            J = c(
              ta(
                "input",
                g(
                  {},
                  S && {
                    additionalProps: {
                      id: S.htmlFor,
                      "aria-describedby": S["aria-describedby"],
                    },
                  },
                  {
                    className: [Q.input, y],
                    elementType: Fo,
                    getSlotProps: w,
                    internalForwardedProps: v,
                    externalForwardedProps: $,
                    ownerState: K,
                  }
                )
              ),
              2
            ),
            Y = J[0],
            Z = J[1],
            ee = c(
              ta("startDecorator", {
                className: Q.startDecorator,
                elementType: Lo,
                externalForwardedProps: $,
                ownerState: K,
              }),
              2
            ),
            te = ee[0],
            ne = ee[1],
            re = c(
              ta("endDecorator", {
                className: Q.endDecorator,
                elementType: Mo,
                externalForwardedProps: $,
                ownerState: K,
              }),
              2
            ),
            ae = re[0],
            oe = re[1];
          return (0,
          a.jsxs)(X, g({}, G, { children: [B && (0, a.jsx)(te, g({}, ne, { children: B })), (0, a.jsx)(Y, g({}, Z)), R && (0, a.jsx)(ae, g({}, oe, { children: R }))] }));
        }),
        Ho = jo;
      function Wo(e) {
        return Or("MuiSheet", e);
      }
      Fr("MuiSheet", [
        "root",
        "colorPrimary",
        "colorNeutral",
        "colorDanger",
        "colorSuccess",
        "colorWarning",
        "colorContext",
        "variantPlain",
        "variantOutlined",
        "variantSoft",
        "variantSolid",
      ]);
      var Vo = [
          "className",
          "color",
          "component",
          "variant",
          "invertedColors",
          "slots",
          "slotProps",
        ],
        Uo = Sa("div", {
          name: "JoySheet",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })(function (e) {
          var t,
            n,
            r = e.theme,
            a = e.ownerState,
            o = null == (t = r.variants[a.variant]) ? void 0 : t[a.color],
            l = (function (e, t) {
              var n = e.theme,
                r = e.ownerState,
                a = {};
              return (
                r.sx &&
                  ((function e(t) {
                    "function" === typeof t
                      ? e(t(n))
                      : Array.isArray(t)
                      ? t.forEach(function (t) {
                          "boolean" !== typeof t && e(t);
                        })
                      : "object" === typeof t && (a = g({}, a, t));
                  })(r.sx),
                  t.forEach(function (e) {
                    var t,
                      r = a[e];
                    "string" === typeof r || "number" === typeof r
                      ? "borderRadius" === e
                        ? (a[e] =
                            "number" === typeof r
                              ? "".concat(r, "px")
                              : (null == (t = n.vars) ? void 0 : t.radius[r]) ||
                                r)
                        : -1 !== ["p", "padding", "m", "margin"].indexOf(e) &&
                          "number" === typeof r
                        ? (a[e] = n.spacing(r))
                        : (a[e] = r)
                      : (a[e] = "function" === typeof r ? r(n) : void 0);
                  })),
                a
              );
            })({ theme: r, ownerState: a }, [
              "borderRadius",
              "bgcolor",
              "backgroundColor",
              "background",
            ]),
            i = l.borderRadius,
            u = l.bgcolor,
            c = l.backgroundColor,
            s = l.background,
            d =
              tt(r, "palette.".concat(u)) ||
              u ||
              tt(r, "palette.".concat(c)) ||
              c ||
              s ||
              (null == o ? void 0 : o.backgroundColor) ||
              (null == o ? void 0 : o.background) ||
              r.vars.palette.background.surface;
          return [
            g(
              {
                "--Icon-color":
                  "neutral" !== a.color || "solid" === a.variant
                    ? "currentColor"
                    : r.vars.palette.text.icon,
                "--ListItem-stickyBackground":
                  "transparent" === d ? "initial" : d,
                "--Sheet-background": "transparent" === d ? "initial" : d,
              },
              void 0 !== i && {
                "--List-radius": "calc(".concat(
                  i,
                  " - var(--variant-borderWidth, 0px))"
                ),
                "--unstable_actionRadius": "calc(".concat(
                  i,
                  " - var(--variant-borderWidth, 0px))"
                ),
              },
              {
                backgroundColor: r.vars.palette.background.surface,
                position: "relative",
              }
            ),
            g(
              {},
              r.typography["body-md"],
              "solid" === a.variant &&
                a.color &&
                a.invertedColors &&
                _o(a.color)(r),
              "soft" === a.variant &&
                a.color &&
                a.invertedColors &&
                To(a.color)(r),
              null == (n = r.variants[a.variant]) ? void 0 : n[a.color],
              o
            ),
          ];
        }),
        Ko = e.forwardRef(function (e, t) {
          var n = Qr({ props: e, name: "JoySheet" }),
            r = n.className,
            o = n.color,
            l = void 0 === o ? "neutral" : o,
            i = n.component,
            u = void 0 === i ? "div" : i,
            s = n.variant,
            d = void 0 === s ? "plain" : s,
            f = n.invertedColors,
            p = void 0 !== f && f,
            v = n.slots,
            h = void 0 === v ? {} : v,
            y = n.slotProps,
            b = void 0 === y ? {} : y,
            w = m(n, Vo),
            S = g({}, n, {
              color: l,
              component: u,
              invertedColors: p,
              variant: d,
            }),
            k = (function (e) {
              var t = e.variant,
                n = e.color;
              return Le(
                {
                  root: [
                    "root",
                    t && "variant".concat(je(t)),
                    n && "color".concat(je(n)),
                  ],
                },
                Wo,
                {}
              );
            })(S),
            x = g({}, w, { component: u, slots: h, slotProps: b }),
            C = c(
              ta("root", {
                ref: t,
                className: Xr(k.root, r),
                elementType: Uo,
                externalForwardedProps: x,
                ownerState: S,
              }),
              2
            ),
            E = C[0],
            P = C[1];
          return (0, a.jsx)(E, g({}, P));
        }),
        Qo = Ko,
        $o = function (e) {
          return (0, a.jsx)(Qo, {
            className: "w-full rounded-[16px] bg-[#2b2b2b]",
            children: (0, a.jsxs)("form", {
              onSubmit: function (e) {
                e.preventDefault();
              },
              className: "flex w-full bg-[#2b2b2b] rounded-[12px]",
              children: [
                (0, a.jsx)(Ho, {
                  value: e.message,
                  size: "md",
                  variant: "solid",
                  placeholder: "Type your question here\u2026",
                  className: "w-full rounded-[16px] bg-[#2b2b2b]",
                  focusIndicatorStyle: { border: "none" },
                  sx: {
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 0,
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    backgroundColor: "#2b2b2b",
                    borderRadius: 12,
                  },
                  onChange: function (t) {
                    return e.setMessage(t.target.value);
                  },
                }),
                (0, a.jsx)(yo, {
                  sx: {
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 4,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 4,
                    color: "#FF6C71",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                  },
                  onClick: function () {
                    e.onSendMessage(), e.setMessage("");
                  },
                  variant: "plain",
                  type: "submit",
                  children: "Send",
                }),
              ],
            }),
          });
        };
      function qo(t) {
        var n = c(e.useState(""), 2),
          r = n[0],
          o = n[1],
          l = [
            { value: "meta-llama/Llama-2-7b-chat-hf", label: "Llama2-7b-chat" },
            {
              value: "mistralai/Mistral-7B-Instruct-v0.1",
              label: "Mistral-7b-instruct",
            },
          ],
          i = [
            { value: "base", label: "base" },
            { value: "rag", label: "rag" },
          ],
          s = c(
            e.useState([
              { message: "What would you like to know?", entity: "model" },
            ]),
            2
          ),
          d = s[0],
          f = s[1],
          p = c((0, e.useState)(l[0].value), 2),
          v = p[0],
          m = p[1],
          h = c((0, e.useState)(i[0].value), 2),
          g = h[0],
          y = h[1];
        return (0, a.jsxs)("div", {
          className: "md:w-full mb-6 ".concat(t.default ? "" : "mx-auto"),
          children: [
            (0, a.jsx)("div", {
              className: "flex mb-6 text-black w-full",
              children: (0, a.jsxs)("div", {
                className: "mr-2 w-full flex",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-[16px] mb-2 text-white",
                        children: "Model Selected",
                      }),
                      (0, a.jsxs)("select", {
                        className:
                          "mr-4 bg-[#2b2b2b] rounded border-0 text-white",
                        value: v,
                        onChange: function (e) {
                          var t = e.target.value;
                          m(t), console.log("Selected Model:", t);
                        },
                        children: [
                          (0, a.jsx)("option", {
                            value: "",
                            disabled: !0,
                            children: "-- Select a model --",
                          }),
                          l.map(function (e) {
                            return (0,
                            a.jsx)("option", { value: e.value, children: e.label }, e.value);
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-[16px] mb-2 text-white",
                        children: "Mode",
                      }),
                      (0, a.jsxs)("select", {
                        className:
                          "mr-4 bg-[#2b2b2b] rounded border-0 text-white",
                        value: g,
                        onChange: function (e) {
                          var t = e.target.value;
                          y(t), console.log("Selected Inference Mode:", t);
                        },
                        children: [
                          (0, a.jsx)("option", {
                            value: "",
                            disabled: !0,
                            children: "-- Select a mode --",
                          }),
                          i.map(function (e) {
                            return (0,
                            a.jsx)("option", { value: e.value, children: e.label }, e.value);
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: "mb-2",
              children: (0, a.jsx)(Ma, { chatHistory: d }),
            }),
            (0, a.jsx)($o, {
              message: r,
              onSendMessage: function () {
                f(
                  [
                    { entity: "system", message: "pending" },
                    { entity: "user", message: r },
                  ].concat(u(d))
                );
                !(function (e, t, n, r, a) {
                  console.log("Selected Model:", n);
                  var o = new Headers();
                  o.append("Authorization", "Bearer " + e),
                    o.append("Content-Type", "application/json");
                  var l = { in_value: { question: t }, model_name: n };
                  fetch("".concat(a), {
                    method: "POST",
                    body: JSON.stringify(l),
                    headers: o,
                  })
                    .then(function (e) {
                      return e.ok ? e.json() : Promise.reject(e);
                    })
                    .then(function (e) {
                      var t = e.answer;
                      r(t);
                    })
                    .catch(function (e) {
                      503 === e.status
                        ? r(
                            "Model is still loading... Please try again in a few minutes."
                          )
                        : r(
                            "Oops, something went wrong. I couldn\u2019t provide you with a response. Please try again."
                          );
                    });
                })(
                  t.token,
                  r,
                  v,
                  function (e) {
                    f(
                      [
                        { entity: "model", message: e },
                        { entity: "user", message: r },
                      ].concat(u(d))
                    );
                  },
                  g
                );
              },
              setMessage: o,
            }),
          ],
        });
      }
      var Xo = function (e) {
        return (0, a.jsx)(o, {
          children: (0, a.jsxs)("div", {
            className: "w-full px-16",
            children: [
              (0, a.jsx)("div", {
                className: "my-12",
                children: (0, a.jsx)("h1", {
                  className: "text-3xl mb-4",
                  children: "Contract Playground",
                }),
              }),
              (0, a.jsx)(qo, { token: e.token, default: "RAG model" }),
            ],
          }),
        });
      };
      function Go() {
        return (0, a.jsx)(Xo, { token: "" });
      }
      var Jo = document.getElementById("root");
      if (!Jo) throw new Error("Failed to find the root element");
      r.createRoot(Jo).render(
        (0, a.jsx)(e.StrictMode, { children: (0, a.jsx)(Go, {}) })
      );
    })();
})();
//# sourceMappingURL=main.8083b660.js.map
