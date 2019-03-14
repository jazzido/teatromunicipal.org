/**
 * easytimer.js
 * Generated: 2019-01-13
 * Version: 3.0.1
 */

!(function(t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], n)
    : n((t.easytimer = {}));
})(this, function(t) {
  "use strict";
  function q(t) {
    return (q =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(t) {
            return typeof t;
          }
        : function(t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  function s(t, n, e) {
    var o,
      i = "";
    if (t.length > n) return t;
    for (o = 0; o < n; o += 1) i += String(e);
    return (i + t).slice(-i.length);
  }
  function I() {
    (this.secondTenths = 0),
      (this.seconds = 0),
      (this.minutes = 0),
      (this.hours = 0),
      (this.days = 0),
      (this.toString = function(t, n, e) {
        (t = t || ["hours", "minutes", "seconds"]),
          (n = n || ":"),
          (e = e || 2);
        var o,
          i = [];
        for (o = 0; o < t.length; o += 1)
          void 0 !== this[t[o]] &&
            ("secondTenths" === t[o]
              ? i.push(this[t[o]])
              : i.push(s(this[t[o]], e, "0")));
        return i.join(n);
      });
  }
  var n = "undefined" != typeof window ? window.CustomEvent : void 0;
  "undefined" != typeof window &&
    "function" != typeof n &&
    (((n = function(t, n) {
      n = n || { bubbles: !1, cancelable: !1, detail: void 0 };
      var e = document.createEvent("CustomEvent");
      return e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), e;
    }).prototype = window.Event.prototype),
    (window.CustomEvent = n));
  var _ = "secondTenths",
    z = "seconds",
    R = "minutes",
    B = "hours",
    F = "days",
    G = {
      secondTenths: 100,
      seconds: 1e3,
      minutes: 6e4,
      hours: 36e5,
      days: 864e5
    },
    H = { secondTenths: 10, seconds: 60, minutes: 60, hours: 24 },
    J =
      "undefined" != typeof module &&
      module.exports &&
      "function" == typeof require
        ? require("events")
        : void 0;
  function K() {
    return "undefined" != typeof document;
  }
  function N() {
    return J;
  }
  function Q(t, n) {
    return ((t % n) + n) % n;
  }
  function e() {
    var n,
      e,
      o,
      i,
      s,
      r,
      u,
      c,
      a,
      d,
      f = new I(),
      h = new I(),
      l = K()
        ? document.createElement("span")
        : N()
        ? new J.EventEmitter()
        : void 0,
      p = !1,
      v = !1,
      m = {},
      y = { detail: { timer: this } };
    function b(t, n) {
      var e,
        o,
        i = h[n];
      return (
        (o = U(t, G[(e = n)])),
        (h[e] = o),
        (f[e] = e === F ? o : 0 <= o ? Q(o, H[e]) : H[e] - Q(o, H[e])),
        h[n] !== i
      );
    }
    function t() {
      w(),
        (function() {
          for (var t in f)
            f.hasOwnProperty(t) && "number" == typeof f[t] && (f[t] = 0);
          for (var n in h)
            h.hasOwnProperty(n) && "number" == typeof h[n] && (h[n] = 0);
        })();
    }
    function w() {
      clearInterval(n), (n = void 0), (v = p = !1);
    }
    function g(t) {
      O()
        ? ((a = E()), (r = V(s.target)))
        : (function(t) {
            (e = "string" == typeof (t = t || {}).precision ? t.precision : z),
              (i =
                "function" == typeof t.callback ? t.callback : function() {}),
              (c = !0 === t.countdown),
              (o = !0 === c ? -1 : 1),
              "object" === q(t.startValues)
                ? ((n = t.startValues),
                  (u = L(n)),
                  (f.secondTenths = u[0]),
                  (f.seconds = u[1]),
                  (f.minutes = u[2]),
                  (f.hours = u[3]),
                  (f.days = u[4]),
                  (h = x(u, h)))
                : (u = null);
            var n;
            (a = E()),
              j(),
              (r =
                "object" === q(t.target)
                  ? V(t.target)
                  : c
                  ? ((t.target = { seconds: 0 }), V(t.target))
                  : null);
            (m = {
              precision: e,
              callback: i,
              countdown: "object" === q(t) && !0 === t.countdown,
              target: r,
              startValues: u
            }),
              (s = t);
          })(t),
        (function() {
          var t = G[e];
          if (C(S(Date.now()))) return;
          (n = setInterval(T, t)), (p = !0), (v = !1);
        })();
    }
    function E() {
      return S(Date.now()) - h.secondTenths * G[_] * o;
    }
    function T() {
      var t = S(Date.now());
      !(function(t) {
        t[_] && P("secondTenthsUpdated", y);
        t[z] && P("secondsUpdated", y);
        t[R] && P("minutesUpdated", y);
        t[B] && P("hoursUpdated", y);
        t[F] && P("daysUpdated", y);
      })(j()),
        i(y.detail.timer),
        C(t) && (A(), P("targetAchieved", y));
    }
    function j() {
      var t =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : S(Date.now()),
        n = 0 < o ? t - a : a - t,
        e = {};
      return (
        (e[_] = b(n, _)),
        (e[z] = b(n, z)),
        (e[R] = b(n, R)),
        (e[B] = b(n, B)),
        (e[F] = b(n, F)),
        e
      );
    }
    function S(t) {
      return Math.floor(t / G[e]) * G[e];
    }
    function C(t) {
      return r instanceof Array && d <= t;
    }
    function L(t) {
      var n, e, o, i, s, r;
      if ("object" === q(t))
        if (t instanceof Array) {
          if (5 !== t.length) throw new Error("Array size not valid");
          r = t;
        } else
          r = [
            t.secondTenths || 0,
            t.seconds || 0,
            t.minutes || 0,
            t.hours || 0,
            t.days || 0
          ];
      return (
        (n = r[0]),
        (e = r[1] + U(n, 10)),
        (o = r[2] + U(e, 60)),
        (i = r[3] + U(o, 60)),
        (s = r[4] + U(i, 24)),
        (r[0] = n % 10),
        (r[1] = e % 60),
        (r[2] = o % 60),
        (r[3] = i % 24),
        (r[4] = s),
        r
      );
    }
    function U(t, n) {
      var e = t / n;
      return e < 0 ? Math.ceil(e) : Math.floor(e);
    }
    function V(t) {
      if (t) {
        var n = x((r = L(t)));
        return (d = a + n.secondTenths * G[_] * o), r;
      }
    }
    function x(t, n) {
      var e = n || {};
      return (
        (e.days = t[4]),
        (e.hours = 24 * e.days + t[3]),
        (e.minutes = 60 * e.hours + t[2]),
        (e.seconds = 60 * e.minutes + t[1]),
        (e.secondTenths = 10 * e.seconds + t[[0]]),
        e
      );
    }
    function A() {
      t(), P("stopped", y);
    }
    function D(t, n) {
      K() ? l.addEventListener(t, n) : N() && l.on(t, n);
    }
    function M(t, n) {
      K() ? l.removeEventListener(t, n) : N() && l.removeListener(t, n);
    }
    function P(t, n) {
      K() ? l.dispatchEvent(new CustomEvent(t, n)) : N() && l.emit(t, n);
    }
    function k() {
      return p;
    }
    function O() {
      return v;
    }
    void 0 !== this &&
      ((this.start = function(t) {
        k() || (g(t), P("started", y));
      }),
      (this.pause = function() {
        w(), (v = !0), P("paused", y);
      }),
      (this.stop = A),
      (this.reset = function() {
        t(), g(s), P("reset", y);
      }),
      (this.isRunning = k),
      (this.isPaused = O),
      (this.getTimeValues = function() {
        return f;
      }),
      (this.getTotalTimeValues = function() {
        return h;
      }),
      (this.getConfig = function() {
        return m;
      }),
      (this.addEventListener = D),
      (this.on = D),
      (this.removeEventListener = M),
      (this.off = M));
  }
  (t.default = e),
    (t.Timer = e),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
