(() => {
  function e(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != a) {
        var r,
          i,
          s,
          n,
          l = [],
          o = !0,
          d = !1;
        try {
          if (s = (a = a.call(e)).next, 0 === t) {
            if (Object(a) !== a) return;
            o = !1;
          } else for (; !(o = (r = s.call(a)).done) && (l.push(r.value), l.length !== t); o = !0);
        } catch (e) {
          d = !0, i = e;
        } finally {
          try {
            if (!o && null != a.return && (n = a.return(), Object(n) !== n)) return;
          } finally {
            if (d) throw i;
          }
        }
        return l;
      }
    }(e, t) || r(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function t(e, t) {
    for (var a = 0; a < t.length; a++) {
      var r = t[a];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, n(r.key), r);
    }
  }
  function a(e) {
    return function (e) {
      if (Array.isArray(e)) return i(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || r(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function r(e, t) {
    if (e) {
      if ("string" == typeof e) return i(e, t);
      var a = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? i(e, t) : void 0;
    }
  }
  function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
    return r;
  }
  function s(e, t, a) {
    return (t = n(t)) in e ? Object.defineProperty(e, t, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = a, e;
  }
  function n(e) {
    var t = function (e, t) {
      if ("object" !== l(e) || null === e) return e;
      var a = e[Symbol.toPrimitive];
      if (void 0 !== a) {
        var r = a.call(e, "string");
        if ("object" !== l(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" === l(t) ? t : String(t);
  }
  function l(e) {
    return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, l(e);
  }
  !function () {
    "use strict";

    function r(e) {
      return null !== e && "object" == l(e) && "constructor" in e && e.constructor === Object;
    }
    function i() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      Object.keys(t).forEach(function (a) {
        void 0 === e[a] ? e[a] = t[a] : r(t[a]) && r(e[a]) && 0 < Object.keys(t[a]).length && i(e[a], t[a]);
      });
    }
    var n = {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: {
        blur: function () {},
        nodeName: ""
      },
      querySelector: function () {
        return null;
      },
      querySelectorAll: function () {
        return [];
      },
      getElementById: function () {
        return null;
      },
      createEvent: function () {
        return {
          initEvent: function () {}
        };
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return [];
          }
        };
      },
      createElementNS: function () {
        return {};
      },
      importNode: function () {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };
    function o() {
      var e = "undefined" != typeof document ? document : {};
      return i(e, n), e;
    }
    var d,
      c,
      p,
      u = {
        document: n,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {}
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            }
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        }
      };
    function f() {
      var e = "undefined" != typeof window ? window : {};
      return i(e, u), e;
    }
    function m(e) {
      return setTimeout(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0);
    }
    function v() {
      return Date.now();
    }
    function h(e) {
      var t,
        a,
        r,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
        s = f();
      return e = function (e) {
        var t,
          a = f();
        return (t = !(t = a.getComputedStyle ? a.getComputedStyle(e, null) : t) && e.currentStyle ? e.currentStyle : t) || e.style;
      }(e), s.WebKitCSSMatrix ? (6 < (a = e.transform || e.webkitTransform).split(",").length && (a = a.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), r = new s.WebKitCSSMatrix("none" === a ? "" : a)) : t = (r = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = s.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), (a = "y" === i ? s.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5]) : a) || 0;
    }
    function g(e) {
      return "object" == l(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }
    function w() {
      for (var e, t = Object(arguments.length <= 0 ? void 0 : arguments[0]), a = ["__proto__", "constructor", "prototype"], r = 1; r < arguments.length; r += 1) {
        var i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
        if (null != i && (e = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)))) for (var s = Object.keys(Object(i)).filter(function (e) {
            return a.indexOf(e) < 0;
          }), n = 0, l = s.length; n < l; n += 1) {
          var o = s[n],
            d = Object.getOwnPropertyDescriptor(i, o);
          void 0 !== d && d.enumerable && (g(t[o]) && g(i[o]) ? i[o].__swiper__ ? t[o] = i[o] : w(t[o], i[o]) : g(t[o]) || !g(i[o]) || (t[o] = {}, i[o].__swiper__) ? t[o] = i[o] : w(t[o], i[o]));
        }
      }
      return t;
    }
    function b(e, t, a) {
      e.style.setProperty(t, a);
    }
    function y(e) {
      var t,
        a = e.swiper,
        r = e.targetPosition,
        i = e.side,
        n = f(),
        l = -a.translate,
        o = null,
        d = a.params.speed,
        c = (a.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(a.cssModeFrameID), r > l ? "next" : "prev"),
        p = function (e, t) {
          return "next" === c && t <= e || "prev" === c && e <= t;
        };
      !function e() {
        t = new Date().getTime(), null === o && (o = t);
        var c = Math.max(Math.min((t - o) / d, 1), 0),
          u = (c = .5 - Math.cos(c * Math.PI) / 2, l + c * (r - l));
        p(u, r) && (u = r), a.wrapperEl.scrollTo(s({}, i, u)), p(u, r) ? (a.wrapperEl.style.overflow = "hidden", a.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
          a.wrapperEl.style.overflow = "", a.wrapperEl.scrollTo(s({}, i, u));
        }), n.cancelAnimationFrame(a.cssModeFrameID)) : a.cssModeFrameID = n.requestAnimationFrame(e);
      }();
    }
    function E(e) {
      return e.querySelector(".swiper-slide-transform") || e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform") || e;
    }
    function x(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return a(e.children).filter(function (e) {
        return e.matches(t);
      });
    }
    function S(e) {
      var t,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return (t = (e = document.createElement(e)).classList).add.apply(t, a(Array.isArray(r) ? r : [r])), e;
    }
    function T(e) {
      var t = f(),
        a = o(),
        r = e.getBoundingClientRect(),
        i = (a = a.body, e.clientTop || a.clientTop || 0),
        s = (a = e.clientLeft || a.clientLeft || 0, e === t ? t.scrollY : e.scrollTop);
      return t = e === t ? t.scrollX : e.scrollLeft, {
        top: r.top + s - i,
        left: r.left + t - a
      };
    }
    function M(e, t) {
      return f().getComputedStyle(e, null).getPropertyValue(t);
    }
    function C(e) {
      var t,
        a = e;
      if (a) {
        for (t = 0; null !== (a = a.previousSibling);) 1 === a.nodeType && (t += 1);
        return t;
      }
    }
    function P(e, t) {
      for (var a = [], r = e.parentElement; r;) t && !r.matches(t) || a.push(r), r = r.parentElement;
      return a;
    }
    function L(e, t) {
      t && e.addEventListener("transitionend", function a(r) {
        r.target === e && (t.call(e, r), e.removeEventListener("transitionend", a));
      });
    }
    function A(e, t, a) {
      var r = f();
      return a ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
    }
    function k() {
      return d = d || (e = f(), {
        smoothScroll: (t = o()).documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
      });
      var e, t;
    }
    var z = {
        on: function (e, t, a) {
          var r = this;
          if (r.eventsListeners && !r.destroyed && "function" == typeof t) {
            var i = a ? "unshift" : "push";
            e.split(" ").forEach(function (e) {
              r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t);
            });
          }
          return r;
        },
        once: function (e, t, a) {
          var r = this;
          return !r.eventsListeners || r.destroyed || "function" != typeof t ? r : (i.__emitterProxy = t, r.on(e, i, a));
          function i() {
            for (var a = arguments.length, s = new Array(a), n = 0; n < a; n++) s[n] = arguments[n];
            r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, s);
          }
        },
        onAny: function (e, t) {
          var a = this;
          return a.eventsListeners && !a.destroyed && "function" == typeof e && (t = t ? "unshift" : "push", a.eventsAnyListeners.indexOf(e) < 0) && a.eventsAnyListeners[t](e), a;
        },
        offAny: function (e) {
          var t = this;
          return t.eventsListeners && !t.destroyed && t.eventsAnyListeners && 0 <= (e = t.eventsAnyListeners.indexOf(e)) && t.eventsAnyListeners.splice(e, 1), t;
        },
        off: function (e, t) {
          var a = this;
          return !a.eventsListeners || a.destroyed || a.eventsListeners && e.split(" ").forEach(function (e) {
            void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].forEach(function (r, i) {
              (r === t || r.__emitterProxy && r.__emitterProxy === t) && a.eventsListeners[e].splice(i, 1);
            });
          }), a;
        },
        emit: function () {
          var e = this;
          if (e.eventsListeners && !e.destroyed && e.eventsListeners) {
            for (var t, r, i, s = arguments.length, n = new Array(s), l = 0; l < s; l++) n[l] = arguments[l];
            i = "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], r = n.slice(1, n.length), e) : (t = n[0].events, r = n[0].data, n[0].context || e), r.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
              e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(function (e) {
                e.apply(i, [t].concat(a(r)));
              }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(function (e) {
                e.apply(i, r);
              });
            });
          }
          return e;
        }
      },
      I = function (e, t) {
        if (e && !e.destroyed && e.params) {
          var a = t.closest(e.isElement ? "swiper-slide" : "." + e.params.slideClass);
          if (a) {
            var r = a.querySelector("." + e.params.lazyPreloaderClass);
            r && r.remove();
          }
        }
      },
      O = function (e, t) {
        e.slides[t] && (e = e.slides[t].querySelector('[loading="lazy"]')) && e.removeAttribute("loading");
      },
      D = function (e) {
        if (e && !e.destroyed && e.params) {
          var t = e.params.lazyPreloadPrevNext,
            a = e.slides.length;
          if (a && t && !(t < 0)) {
            t = Math.min(t, a);
            var r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
              i = e.activeIndex,
              s = i + r - 1;
            if (e.params.rewind) for (var n = i - t; n <= s + t; n += 1) {
              var l = (n % a + a) % a;
              l !== i && l > s && O(e, l);
            } else for (var o = Math.max(s - t, 0); o <= Math.min(s + t, a - 1); o += 1) o !== i && o > s && O(e, o);
          }
        }
      },
      G = {
        updateSize: function () {
          var e,
            t,
            a = this,
            r = a.el;
          e = void 0 !== a.params.width && null !== a.params.width ? a.params.width : r.clientWidth, t = void 0 !== a.params.height && null !== a.params.height ? a.params.height : r.clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(M(r, "padding-left") || 0, 10) - parseInt(M(r, "padding-right") || 0, 10), t = t - parseInt(M(r, "padding-top") || 0, 10) - parseInt(M(r, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(a, {
            width: e,
            height: t,
            size: a.isHorizontal() ? e : t
          }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal() ? t : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
            }[t];
          }
          function a(e, a) {
            return parseFloat(e.getPropertyValue(t(a)) || 0);
          }
          var r = e.params,
            i = e.wrapperEl,
            s = e.slidesEl,
            n = e.size,
            l = e.rtlTranslate,
            o = e.wrongRTL,
            d = e.virtual && r.virtual.enabled,
            c = (d ? e.virtual : e).slides.length,
            p = x(s, ".".concat(e.params.slideClass, ", swiper-slide")),
            u = (d ? e.virtual.slides : p).length,
            f = [],
            m = [],
            v = [],
            h = r.slidesOffsetBefore,
            g = ("function" == typeof h && (h = r.slidesOffsetBefore.call(e)), r.slidesOffsetAfter);
          "function" == typeof g && (g = r.slidesOffsetAfter.call(e));
          var w = e.snapGrid.length,
            y = e.slidesGrid.length,
            E = r.spaceBetween,
            S = -h,
            T = 0,
            C = 0;
          if (void 0 !== n) {
            "string" == typeof E && 0 <= E.indexOf("%") && (E = parseFloat(E.replace("%", "")) / 100 * n), e.virtualSize = -E, p.forEach(function (e) {
              l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
            }), r.centeredSlides && r.cssMode && (b(i, "--swiper-centered-offset-before", ""), b(i, "--swiper-centered-offset-after", ""));
            var P,
              L = r.grid && 1 < r.grid.rows && e.grid;
            L && e.grid.initSlides(u);
            for (var k = "auto" === r.slidesPerView && r.breakpoints && 0 < Object.keys(r.breakpoints).filter(function (e) {
                return void 0 !== r.breakpoints[e].slidesPerView;
              }).length, z = 0; z < u; z += 1) {
              var I = void 0;
              if (P = 0, p[z] && (I = p[z]), L && e.grid.updateSlide(z, I, u, t), !p[z] || "none" !== M(I, "display")) {
                if ("auto" === r.slidesPerView) {
                  k && (p[z].style[t("width")] = "");
                  var O = getComputedStyle(I),
                    D = I.style.transform,
                    G = I.style.webkitTransform;
                  if (D && (I.style.transform = "none"), G && (I.style.webkitTransform = "none"), r.roundLengths) P = e.isHorizontal() ? A(I, "width", !0) : A(I, "height", !0);else {
                    var B = a(O, "width"),
                      H = a(O, "padding-left"),
                      X = a(O, "padding-right"),
                      Y = a(O, "margin-left"),
                      q = a(O, "margin-right"),
                      N = O.getPropertyValue("box-sizing");
                    if (N && "border-box" === N) P = B + Y + q;else {
                      var R = I,
                        _ = R.clientWidth;
                      P = B + H + X + Y + q + (R.offsetWidth - _);
                    }
                  }
                  D && (I.style.transform = D), G && (I.style.webkitTransform = G), r.roundLengths && (P = Math.floor(P));
                } else P = (n - (r.slidesPerView - 1) * E) / r.slidesPerView, r.roundLengths && (P = Math.floor(P)), p[z] && (p[z].style[t("width")] = P + "px");
                p[z] && (p[z].swiperSlideSize = P), v.push(P), r.centeredSlides ? (S = S + P / 2 + T / 2 + E, 0 === T && 0 !== z && (S = S - n / 2 - E), 0 === z && (S = S - n / 2 - E), Math.abs(S) < .001 && (S = 0), r.roundLengths && (S = Math.floor(S)), C % r.slidesPerGroup == 0 && f.push(S), m.push(S)) : (r.roundLengths && (S = Math.floor(S)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && f.push(S), m.push(S), S = S + P + E), e.virtualSize += P + E, T = P, C += 1;
              }
            }
            if (e.virtualSize = Math.max(e.virtualSize, n) + g, l && o && ("slide" === r.effect || "coverflow" === r.effect) && (i.style.width = e.virtualSize + r.spaceBetween + "px"), r.setWrapperSize && (i.style[t("width")] = e.virtualSize + r.spaceBetween + "px"), L && e.grid.updateWrapperSize(P, f, t), !r.centeredSlides) {
              for (var j = [], V = 0; V < f.length; V += 1) {
                var F = f[V];
                r.roundLengths && (F = Math.floor(F)), f[V] <= e.virtualSize - n && j.push(F);
              }
              f = j, 1 < Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) && f.push(e.virtualSize - n);
            }
            if (d && r.loop) {
              var W = v[0] + E;
              if (1 < r.slidesPerGroup) for (var U = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup), K = W * r.slidesPerGroup, Z = 0; Z < U; Z += 1) f.push(f[f.length - 1] + K);
              for (var $ = 0; $ < e.virtual.slidesBefore + e.virtual.slidesAfter; $ += 1) 1 === r.slidesPerGroup && f.push(f[f.length - 1] + W), m.push(m[m.length - 1] + W), e.virtualSize += W;
            }
            if (0 === f.length && (f = [0]), 0 !== r.spaceBetween) {
              var Q = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
              p.filter(function (e, t) {
                return !(r.cssMode && !r.loop) || t !== p.length - 1;
              }).forEach(function (e) {
                e.style[Q] = E + "px";
              });
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
              var J = 0;
              v.forEach(function (e) {
                J += e + (r.spaceBetween || 0);
              });
              var ee = (J -= r.spaceBetween) - n;
              f = f.map(function (e) {
                return e < 0 ? -h : e > ee ? ee + g : e;
              });
            }
            if (r.centerInsufficientSlides) {
              var te = 0;
              if (v.forEach(function (e) {
                te += e + (r.spaceBetween || 0);
              }), (te -= r.spaceBetween) < n) {
                var ae = (n - te) / 2;
                f.forEach(function (e, t) {
                  f[t] = e - ae;
                }), m.forEach(function (e, t) {
                  m[t] = e + ae;
                });
              }
            }
            if (Object.assign(e, {
              slides: p,
              snapGrid: f,
              slidesGrid: m,
              slidesSizesGrid: v
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
              b(i, "--swiper-centered-offset-before", -f[0] + "px"), b(i, "--swiper-centered-offset-after", e.size / 2 - v[v.length - 1] / 2 + "px");
              var re = -e.snapGrid[0],
                ie = -e.slidesGrid[0];
              e.snapGrid = e.snapGrid.map(function (e) {
                return e + re;
              }), e.slidesGrid = e.slidesGrid.map(function (e) {
                return e + ie;
              });
            }
            if (u !== c && e.emit("slidesLengthChange"), f.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== y && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), !(d || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
              var se = r.containerModifierClass + "backface-hidden",
                ne = e.el.classList.contains(se);
              u <= r.maxBackfaceHiddenSlides ? ne || e.el.classList.add(se) : ne && e.el.classList.remove(se);
            }
          }
        },
        updateAutoHeight: function (e) {
          var t,
            a = this,
            r = [],
            i = a.virtual && a.params.virtual.enabled,
            s = 0;
          "number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);
          var n = function (e) {
            return i ? a.slides[a.getSlideIndexByData(e)] : a.slides[e];
          };
          if ("auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) {
            if (a.params.centeredSlides) (a.visibleSlides || []).forEach(function (e) {
              r.push(e);
            });else for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
              var l = a.activeIndex + t;
              if (l > a.slides.length && !i) break;
              r.push(n(l));
            }
          } else r.push(n(a.activeIndex));
          for (t = 0; t < r.length; t += 1) if (void 0 !== r[t]) {
            var o = r[t].offsetHeight;
            s = o > s ? o : s;
          }
          !s && 0 !== s || (a.wrapperEl.style.height = s + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this, t = e.slides, a = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0, r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - a - e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0,
            t = this,
            a = t.params,
            r = t.slides,
            i = t.rtlTranslate,
            s = t.snapGrid;
          if (0 !== r.length) {
            void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
            var n = i ? e : -e;
            r.forEach(function (e) {
              e.classList.remove(a.slideVisibleClass);
            }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (var l = 0; l < r.length; l += 1) {
              var o = r[l],
                d = o.swiperSlideOffset;
              a.cssMode && a.centeredSlides && (d -= r[0].swiperSlideOffset);
              var c = (n + (a.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + a.spaceBetween),
                p = (n - s[0] + (a.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + a.spaceBetween),
                u = -(n - d),
                f = u + t.slidesSizesGrid[l];
              (0 <= u && u < t.size - 1 || 1 < f && f <= t.size || u <= 0 && f >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(l), r[l].classList.add(a.slideVisibleClass)), o.progress = i ? -c : c, o.originalProgress = i ? -p : p;
            }
          }
        },
        updateProgress: function (e) {
          var t = this;
          if (void 0 === e) {
            var a = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * a || 0;
          }
          var r = t.params,
            i = t.maxTranslate() - t.minTranslate(),
            s = t.progress,
            n = t.isBeginning,
            l = t.isEnd,
            o = t.progressLoop,
            d = n,
            c = l;
          if (0 === i) s = 0, n = !0, l = !0;else {
            s = (e - t.minTranslate()) / i;
            var p = Math.abs(e - t.minTranslate()) < 1,
              u = Math.abs(e - t.maxTranslate()) < 1;
            n = p || s <= 0, l = u || 1 <= s, p && (s = 0), u && (s = 1);
          }
          if (r.loop) {
            var f = t.getSlideIndexByData(0),
              m = t.getSlideIndexByData(t.slides.length - 1),
              v = t.slidesGrid[f],
              h = t.slidesGrid[m],
              g = t.slidesGrid[t.slidesGrid.length - 1],
              w = Math.abs(e);
            1 < (o = w >= v ? (w - v) / g : (w + g - h) / g) && --o;
          }
          Object.assign(t, {
            progress: s,
            progressLoop: o,
            isBeginning: n,
            isEnd: l
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), n && !d && t.emit("reachBeginning toEdge"), l && !c && t.emit("reachEnd toEdge"), (d && !n || c && !l) && t.emit("fromEdge"), t.emit("progress", s);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            a = t.slides,
            r = t.params,
            i = t.slidesEl,
            s = t.activeIndex,
            n = t.virtual && r.virtual.enabled,
            l = function (e) {
              return x(i, ".".concat(r.slideClass).concat(e, ", swiper-slide") + e)[0];
            };
          if (a.forEach(function (e) {
            e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass);
          }), n) {
            if (r.loop) {
              var o = s - t.virtual.slidesBefore;
              (o = o < 0 ? t.virtual.slides.length + o : o) >= t.virtual.slides.length && (o -= t.virtual.slides.length), e = l('[data-swiper-slide-index="'.concat(o, '"]'));
            } else e = l('[data-swiper-slide-index="'.concat(s, '"]'));
          } else e = a[s];
          if (e) {
            e.classList.add(r.slideActiveClass);
            var d = function (e, t) {
                for (var a = []; e.nextElementSibling;) {
                  var r = e.nextElementSibling;
                  t && !r.matches(t) || a.push(r), e = r;
                }
                return a;
              }(e, ".".concat(r.slideClass, ", swiper-slide"))[0],
              c = ((d = r.loop && !d ? a[0] : d) && d.classList.add(r.slideNextClass), function (e, t) {
                for (var a = []; e.previousElementSibling;) {
                  var r = e.previousElementSibling;
                  t && !r.matches(t) || a.push(r), e = r;
                }
                return a;
              }(e, ".".concat(r.slideClass, ", swiper-slide"))[0]);
            (c = r.loop && 0 === !c ? a[a.length - 1] : c) && c.classList.add(r.slidePrevClass);
          }
          t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            a = this,
            r = a.rtlTranslate ? a.translate : -a.translate,
            i = a.snapGrid,
            s = a.params,
            n = a.activeIndex,
            l = a.realIndex,
            o = a.snapIndex,
            d = e;
          if (e = function (e) {
            var t = e - a.virtual.slidesBefore;
            return (t = t < 0 ? a.virtual.slides.length + t : t) >= a.virtual.slides.length && (t -= a.virtual.slides.length), t;
          }, void 0 === d && (d = function (e) {
            for (var t, a = e.slidesGrid, r = e.params, i = e.rtlTranslate ? e.translate : -e.translate, s = 0; s < a.length; s += 1) void 0 !== a[s + 1] ? i >= a[s] && i < a[s + 1] - (a[s + 1] - a[s]) / 2 ? t = s : i >= a[s] && i < a[s + 1] && (t = s + 1) : i >= a[s] && (t = s);
            return r.normalizeSlideIndex && (t < 0 || void 0 === t) ? 0 : t;
          }(a)), 0 <= i.indexOf(r)) t = i.indexOf(r);else {
            var c = Math.min(s.slidesPerGroupSkip, d);
            t = c + Math.floor((d - c) / s.slidesPerGroup);
          }
          t >= i.length && (t = i.length - 1), d === n ? (t !== o && (a.snapIndex = t, a.emit("snapIndexChange")), a.params.loop && a.virtual && a.params.virtual.enabled && (a.realIndex = e(d))) : (e = a.virtual && s.virtual.enabled && s.loop ? e(d) : a.slides[d] ? parseInt(a.slides[d].getAttribute("data-swiper-slide-index") || d, 10) : d, Object.assign(a, {
            previousSnapIndex: o,
            snapIndex: t,
            previousRealIndex: l,
            realIndex: e,
            previousIndex: n,
            activeIndex: d
          }), a.initialized && D(a), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== e && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            a = this,
            r = a.params,
            i = e.closest(".".concat(r.slideClass, ", swiper-slide")),
            s = !1;
          if (i) for (var n = 0; n < a.slides.length; n += 1) if (a.slides[n] === i) {
            s = !0, t = n;
            break;
          }
          i && s ? (a.clickedSlide = i, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : a.clickedIndex = t, r.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()) : (a.clickedSlide = void 0, a.clickedIndex = void 0);
        }
      };
    function B(e) {
      var t = e.swiper,
        a = e.runCallbacks,
        r = e.direction,
        i = e.step,
        s = t.activeIndex,
        n = t.previousIndex,
        l = r;
      if (l = l || (n < s ? "next" : s < n ? "prev" : "reset"), t.emit("transition" + i), a && s !== n) {
        if ("reset" === l) return t.emit("slideResetTransition" + i);
        t.emit("slideChangeTransition" + i), "next" === l ? t.emit("slideNextTransition" + i) : t.emit("slidePrevTransition" + i);
      }
    }
    function H() {
      var e,
        t,
        a,
        r,
        i,
        s = this,
        n = s.params,
        l = s.el;
      l && 0 === l.offsetWidth || (n.breakpoints && s.setBreakpoint(), e = s.allowSlideNext, t = s.allowSlidePrev, a = s.snapGrid, r = s.virtual && s.params.virtual.enabled, s.allowSlideNext = !0, s.allowSlidePrev = !0, s.updateSize(), s.updateSlides(), s.updateSlidesClasses(), i = r && n.loop, !("auto" === n.slidesPerView || 1 < n.slidesPerView) || !s.isEnd || s.isBeginning || s.params.centeredSlides || i ? s.params.loop && !r ? s.slideToLoop(s.realIndex, 0, !1, !0) : s.slideTo(s.activeIndex, 0, !1, !0) : s.slideTo(s.slides.length - 1, 0, !1, !0), s.autoplay && s.autoplay.running && s.autoplay.paused && (clearTimeout(s.autoplay.resizeTimeout), s.autoplay.resizeTimeout = setTimeout(function () {
        s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.resume();
      }, 500)), s.allowSlidePrev = t, s.allowSlideNext = e, s.params.watchOverflow && a !== s.snapGrid && s.checkOverflow());
    }
    var X = !1;
    function Y() {}
    var q = function (e, t) {
        var a = o(),
          r = e.params,
          i = e.el,
          s = e.wrapperEl,
          n = e.device,
          l = !!r.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener";
        i[d]("pointerdown", e.onTouchStart, {
          passive: !1
        }), a[d]("pointermove", e.onTouchMove, {
          passive: !1,
          capture: l
        }), a[d]("pointerup", e.onTouchEnd, {
          passive: !0
        }), a[d]("pointercancel", e.onTouchEnd, {
          passive: !0
        }), a[d]("pointerout", e.onTouchEnd, {
          passive: !0
        }), a[d]("pointerleave", e.onTouchEnd, {
          passive: !0
        }), (r.preventClicks || r.preventClicksPropagation) && i[d]("click", e.onClick, !0), r.cssMode && s[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[t](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : e[t]("observerUpdate", H, !0), i[d]("load", e.onLoad, {
          capture: !0
        });
      },
      N = function (e, t) {
        return e.grid && t.grid && 1 < t.grid.rows;
      },
      R = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      },
      _ = {
        eventsEmitter: z,
        update: G,
        translate: {
          getTranslate: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y",
              t = this.params,
              a = this.rtlTranslate,
              r = this.translate,
              i = this.wrapperEl;
            if (t.virtualTranslate) return a ? -r : r;
            if (t.cssMode) return r;
            var s = h(i, e);
            return s += this.cssOverflowAdjustment(), (s = a ? -s : s) || 0;
          },
          setTranslate: function (e, t) {
            var a = this,
              r = a.rtlTranslate,
              i = a.params,
              s = a.wrapperEl,
              n = a.progress,
              l = 0,
              o = 0;
            a.isHorizontal() ? l = r ? -e : e : o = e, i.roundLengths && (l = Math.floor(l), o = Math.floor(o)), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? l : o, i.cssMode ? s[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -l : -o : i.virtualTranslate || (a.isHorizontal() ? l -= a.cssOverflowAdjustment() : o -= a.cssOverflowAdjustment(), s.style.transform = "translate3d(".concat(l, "px, ").concat(o, "px, 0px)")), (0 == (r = a.maxTranslate() - a.minTranslate()) ? 0 : (e - a.minTranslate()) / r) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
              a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
              i = arguments.length > 4 ? arguments[4] : void 0,
              n = this,
              l = n.params,
              o = n.wrapperEl;
            if (n.animating && l.preventInteractionOnTransition) return !1;
            var d = n.minTranslate(),
              c = n.maxTranslate();
            if (d = r && d < e ? d : r && e < c ? c : e, n.updateProgress(d), l.cssMode) {
              var p = n.isHorizontal();
              if (0 === t) o[p ? "scrollLeft" : "scrollTop"] = -d;else {
                var u;
                if (!n.support.smoothScroll) return y({
                  swiper: n,
                  targetPosition: -d,
                  side: p ? "left" : "top"
                }), !0;
                o.scrollTo((s(u = {}, p ? "left" : "top", -d), s(u, "behavior", "smooth"), u));
              }
            } else 0 === t ? (n.setTransition(0), n.setTranslate(d), a && (n.emit("beforeTransitionStart", t, i), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), a && (n.emit("beforeTransitionStart", t, i), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
              n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, a) && n.emit("transitionEnd");
            }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd)));
            return !0;
          }
        },
        transition: {
          setTransition: function (e, t) {
            this.params.cssMode || (this.wrapperEl.style.transitionDuration = e + "ms"), this.emit("setTransition", e, t);
          },
          transitionStart: function () {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              t = arguments.length > 1 ? arguments[1] : void 0,
              a = this.params;
            a.cssMode || (a.autoHeight && this.updateAutoHeight(), B({
              swiper: this,
              runCallbacks: e,
              direction: t,
              step: "Start"
            }));
          },
          transitionEnd: function () {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              t = arguments.length > 1 ? arguments[1] : void 0,
              a = this.params;
            this.animating = !1, a.cssMode || (this.setTransition(0), B({
              swiper: this,
              runCallbacks: e,
              direction: t,
              step: "End"
            }));
          }
        },
        slide: {
          slideTo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
              a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              r = arguments.length > 3 ? arguments[3] : void 0,
              i = arguments.length > 4 ? arguments[4] : void 0;
            "string" == typeof e && (e = parseInt(e, 10));
            var n = this,
              l = e;
            l < 0 && (l = 0);
            var o = n.params,
              d = n.snapGrid,
              c = n.slidesGrid,
              p = n.previousIndex,
              u = n.activeIndex,
              f = n.rtlTranslate,
              m = n.wrapperEl,
              v = n.enabled;
            if (n.animating && o.preventInteractionOnTransition || !v && !r && !i) return !1;
            var h,
              g = (e = Math.min(n.params.slidesPerGroupSkip, l)) + Math.floor((l - e) / n.params.slidesPerGroup),
              w = -d[g = g >= d.length ? d.length - 1 : g];
            if (o.normalizeSlideIndex) for (var b = 0; b < c.length; b += 1) {
              var E = -Math.floor(100 * w),
                x = Math.floor(100 * c[b]),
                S = Math.floor(100 * c[b + 1]);
              void 0 !== c[b + 1] ? E >= x && E < S - (S - x) / 2 ? l = b : E >= x && E < S && (l = b + 1) : E >= x && (l = b);
            }
            if (n.initialized && l !== u) {
              if (!n.allowSlideNext && w < n.translate && w < n.minTranslate()) return !1;
              if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (u || 0) !== l) return !1;
            }
            if (l !== (p || 0) && a && n.emit("beforeSlideChangeStart"), n.updateProgress(w), h = l > u ? "next" : l < u ? "prev" : "reset", f && -w === n.translate || !f && w === n.translate) return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" != h && (n.transitionStart(a, h), n.transitionEnd(a, h)), !1;
            if (o.cssMode) {
              var T = n.isHorizontal(),
                M = f ? w : -w;
              if (0 === t) {
                var C = n.virtual && n.params.virtual.enabled;
                C && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), C && !n._cssModeVirtualInitialSet && 0 < n.params.initialSlide ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(function () {
                  m[T ? "scrollLeft" : "scrollTop"] = M;
                })) : m[T ? "scrollLeft" : "scrollTop"] = M, C && requestAnimationFrame(function () {
                  n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
                });
              } else {
                var P;
                if (!n.support.smoothScroll) return y({
                  swiper: n,
                  targetPosition: M,
                  side: T ? "left" : "top"
                }), !0;
                m.scrollTo((s(P = {}, T ? "left" : "top", M), s(P, "behavior", "smooth"), P));
              }
            } else n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, r), n.transitionStart(a, h), 0 === t ? n.transitionEnd(a, h) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
              n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(a, h));
            }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd));
            return !0;
          },
          slideToLoop: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
              a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              r = arguments.length > 3 ? arguments[3] : void 0,
              i = this,
              s = e = "string" == typeof e ? parseInt(e, 10) : e;
            return i.params.loop && (i.virtual && i.params.virtual.enabled ? s += i.virtual.slidesBefore : s = i.getSlideIndexByData(s)), i.slideTo(s, t, a, r);
          },
          slideNext: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
              t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              a = arguments.length > 2 ? arguments[2] : void 0,
              r = this,
              i = r.enabled,
              s = r.params,
              n = r.animating;
            if (!i) return r;
            var l = s.slidesPerGroup;
            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (l = Math.max(r.slidesPerViewDynamic("current", !0), 1)), i = r.activeIndex < s.slidesPerGroupSkip ? 1 : l;
            var o = r.virtual && s.virtual.enabled;
            if (s.loop) {
              if (n && !o && s.loopPreventsSliding) return !1;
              r.loopFix({
                direction: "next"
              }), r._clientLeft = r.wrapperEl.clientLeft;
            }
            return s.rewind && r.isEnd ? r.slideTo(0, e, t, a) : r.slideTo(r.activeIndex + i, e, t, a);
          },
          slidePrev: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
              t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              a = arguments.length > 2 ? arguments[2] : void 0,
              r = this,
              i = r.params,
              s = r.snapGrid,
              n = r.slidesGrid,
              l = r.rtlTranslate,
              o = r.enabled,
              d = r.animating;
            if (!o) return r;
            var c = r.virtual && i.virtual.enabled;
            if (i.loop) {
              if (d && !c && i.loopPreventsSliding) return !1;
              r.loopFix({
                direction: "prev"
              }), r._clientLeft = r.wrapperEl.clientLeft;
            }
            function p(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var u,
              f = p(l ? r.translate : -r.translate),
              m = s.map(function (e) {
                return p(e);
              }),
              v = s[m.indexOf(f) - 1];
            void 0 === v && i.cssMode && (s.forEach(function (e, t) {
              f >= e && (u = t);
            }), void 0 !== u && (v = s[0 < u ? u - 1 : u]));
            var h = 0;
            if (void 0 !== v && ((h = n.indexOf(v)) < 0 && (h = r.activeIndex - 1), "auto" === i.slidesPerView) && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (h = h - r.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0)), i.rewind && r.isBeginning) {
              var g = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
              return r.slideTo(g, e, t, a);
            }
            return r.slideTo(h, e, t, a);
          },
          slideReset: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
              t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              a = arguments.length > 2 ? arguments[2] : void 0;
            return this.slideTo(this.activeIndex, e, t, a);
          },
          slideToClosest: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
              t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              a = arguments.length > 2 ? arguments[2] : void 0,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
              i = this,
              s = i.activeIndex,
              n = (n = Math.min(i.params.slidesPerGroupSkip, s)) + Math.floor((s - n) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[n]) {
              var o = i.snapGrid[n];
              l - o > (i.snapGrid[n + 1] - o) * r && (s += i.params.slidesPerGroup);
            } else {
              var d = i.snapGrid[n - 1];
              l - d <= (i.snapGrid[n] - d) * r && (s -= i.params.slidesPerGroup);
            }
            return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, e, t, a);
          },
          slideToClickedSlide: function () {
            var e,
              t = this,
              a = t.params,
              r = t.slidesEl,
              i = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
              s = t.clickedIndex,
              n = t.isElement ? "swiper-slide" : "." + a.slideClass;
            a.loop ? t.animating || (e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), a.centeredSlides ? s < t.loopedSlides - i / 2 || s > t.slides.length - t.loopedSlides + i / 2 ? (t.loopFix(), s = t.getSlideIndex(x(r, n + '[data-swiper-slide-index="'.concat(e, '"]'))[0]), m(function () {
              t.slideTo(s);
            })) : t.slideTo(s) : s > t.slides.length - i ? (t.loopFix(), s = t.getSlideIndex(x(r, n + '[data-swiper-slide-index="'.concat(e, '"]'))[0]), m(function () {
              t.slideTo(s);
            })) : t.slideTo(s)) : t.slideTo(s);
          }
        },
        loop: {
          loopCreate: function (e) {
            var t = this.params,
              a = this.slidesEl;
            !t.loop || this.virtual && this.params.virtual.enabled || (x(a, ".".concat(t.slideClass, ", swiper-slide")).forEach(function (e, t) {
              e.setAttribute("data-swiper-slide-index", t);
            }), this.loopFix({
              slideRealIndex: e,
              direction: t.centeredSlides ? void 0 : "next"
            }));
          },
          loopFix: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.slideRealIndex,
              a = e.slideTo,
              r = void 0 === a || a,
              i = e.direction,
              s = e.setTranslate,
              n = e.activeSlideIndex,
              l = e.byController,
              o = e.byMousewheel,
              d = this;
            if (d.params.loop) {
              d.emit("beforeLoopFix");
              var c = d.slides,
                p = d.allowSlidePrev,
                u = d.allowSlideNext,
                f = d.slidesEl,
                m = d.params;
              if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && m.virtual.enabled) r && (m.centeredSlides || 0 !== d.snapIndex ? m.centeredSlides && d.snapIndex < m.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = u;else {
                var v = "auto" === m.slidesPerView ? d.slidesPerViewDynamic() : Math.ceil(parseFloat(m.slidesPerView, 10)),
                  h = m.loopedSlides || v;
                h % m.slidesPerGroup != 0 && (h += m.slidesPerGroup - h % m.slidesPerGroup), d.loopedSlides = h;
                var g = [],
                  w = [],
                  b = d.activeIndex;
                void 0 === n ? n = d.getSlideIndex(d.slides.filter(function (e) {
                  return e.classList.contains(m.slideActiveClass);
                })[0]) : b = n, v = "next" === i || !i;
                var y = "prev" === i || !i,
                  E = 0,
                  x = 0;
                if (n < h) {
                  E = Math.max(h - n, m.slidesPerGroup);
                  for (var S = 0; S < h - n; S += 1) {
                    var T = S - Math.floor(S / c.length) * c.length;
                    g.push(c.length - T - 1);
                  }
                } else if (n > d.slides.length - 2 * h) {
                  x = Math.max(n - (d.slides.length - 2 * h), m.slidesPerGroup);
                  for (var M = 0; M < x; M += 1) {
                    var C = M - Math.floor(M / c.length) * c.length;
                    w.push(C);
                  }
                }
                if (y && g.forEach(function (e) {
                  f.prepend(d.slides[e]);
                }), v && w.forEach(function (e) {
                  f.append(d.slides[e]);
                }), d.recalcSlides(), "auto" === m.slidesPerView && d.updateSlides(), m.watchSlidesProgress && d.updateSlidesOffset(), r) if (0 < g.length && y) {
                  if (void 0 === t) {
                    var P = d.slidesGrid[b],
                      L = d.slidesGrid[b + E] - P;
                    o ? d.setTranslate(d.translate - L) : (d.slideTo(b + E, 0, !1, !0), s && (d.touches[d.isHorizontal() ? "startX" : "startY"] += L));
                  } else s && d.slideToLoop(t, 0, !1, !0);
                } else if (0 < w.length && v) if (void 0 === t) {
                  var A = d.slidesGrid[b],
                    k = d.slidesGrid[b - x] - A;
                  o ? d.setTranslate(d.translate - k) : (d.slideTo(b - x, 0, !1, !0), s && (d.touches[d.isHorizontal() ? "startX" : "startY"] += k));
                } else d.slideToLoop(t, 0, !1, !0);
                if (d.allowSlidePrev = p, d.allowSlideNext = u, d.controller && d.controller.control && !l) {
                  var z = {
                    slideRealIndex: t,
                    slideTo: !1,
                    direction: i,
                    setTranslate: s,
                    activeSlideIndex: n,
                    byController: !0
                  };
                  Array.isArray(d.controller.control) ? d.controller.control.forEach(function (e) {
                    !e.destroyed && e.params.loop && e.loopFix(z);
                  }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix(z);
                }
              }
              d.emit("loopFix");
            }
          },
          loopDestroy: function () {
            var e = this,
              t = e.params,
              a = e.slidesEl;
            if (!(!t.loop || e.virtual && e.params.virtual.enabled)) {
              e.recalcSlides();
              var r = [];
              e.slides.forEach(function (e) {
                var t = void 0 === e.swiperSlideIndex ? +e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                r[t] = e;
              }), e.slides.forEach(function (e) {
                e.removeAttribute("data-swiper-slide-index");
              }), r.forEach(function (e) {
                a.append(e);
              }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
            }
          }
        },
        grabCursor: {
          setGrabCursor: function (e) {
            var t,
              a = this;
            !a.params.simulateTouch || a.params.watchOverflow && a.isLocked || a.params.cssMode || (t = "container" === a.params.touchEventsTarget ? a.el : a.wrapperEl, a.isElement && (a.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab", a.isElement && requestAnimationFrame(function () {
              a.__preventObserver__ = !1;
            }));
          },
          unsetGrabCursor: function () {
            var e = this;
            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(function () {
              e.__preventObserver__ = !1;
            }));
          }
        },
        events: {
          attachEvents: function () {
            var e = this,
              t = o(),
              a = e.params;
            e.onTouchStart = function (e) {
              var t = this,
                a = o(),
                r = f(),
                i = t.touchEventsData,
                s = (i.evCache.push(e), t),
                n = s.params,
                l = s.touches;
              if ((p = s.enabled) && (n.simulateTouch || "mouse" !== e.pointerType) && (!t.animating || !n.preventInteractionOnTransition)) {
                !t.animating && n.cssMode && n.loop && t.loopFix();
                var d = e,
                  c = (d = d.originalEvent ? d.originalEvent : d).target;
                if (("wrapper" !== n.touchEventsTarget || t.wrapperEl.contains(c)) && !("which" in d && 3 === d.which || "button" in d && 0 < d.button || i.isTouched && i.isMoved)) {
                  var p = !!n.noSwipingClass && "" !== n.noSwipingClass,
                    u = e.composedPath ? e.composedPath() : e.path;
                  if (p && d.target && d.target.shadowRoot && u && (c = u[0]), p = n.noSwipingSelector || "." + n.noSwipingClass, u = !(!d.target || !d.target.shadowRoot), n.noSwiping && (u ? function (e) {
                    return function t(a) {
                      var r;
                      return a && a !== o() && a !== f() && ((r = (a = a.assignedSlot ? a.assignedSlot : a).closest(e)) || a.getRootNode) ? r || t(a.getRootNode().host) : null;
                    }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this);
                  }(p, c) : c.closest(p))) t.allowClick = !0;else if (!n.swipeHandler || c.closest(n.swipeHandler)) {
                    l.currentX = d.pageX, l.currentY = d.pageY, u = l.currentX, p = l.currentY;
                    var m = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                      h = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                    if (m && (u <= h || u >= r.innerWidth - h)) {
                      if ("prevent" !== m) return;
                      e.preventDefault();
                    }
                    Object.assign(i, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0
                    }), l.startX = u, l.startY = p, i.touchStartTime = v(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < n.threshold && (i.allowThresholdMove = !1);
                    var g = !0;
                    c.matches(i.focusableElements) && (g = !1, "SELECT" === c.nodeName) && (i.isTouched = !1), a.activeElement && a.activeElement.matches(i.focusableElements) && a.activeElement !== c && a.activeElement.blur(), r = g && t.allowTouchMove && n.touchStartPreventDefault, !n.touchStartForcePreventDefault && !r || c.isContentEditable || d.preventDefault(), t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", d);
                  }
                }
              }
            }.bind(e), e.onTouchMove = function (e) {
              var t = o(),
                a = this,
                r = a.touchEventsData,
                i = a.params,
                s = a.touches,
                n = a.rtlTranslate,
                l = a.enabled;
              if (l && (i.simulateTouch || "mouse" !== e.pointerType)) {
                var d = e;
                if (d.originalEvent && (d = d.originalEvent), r.isTouched) {
                  if (0 <= (l = r.evCache.findIndex(function (e) {
                    return e.pointerId === d.pointerId;
                  })) && (r.evCache[l] = d), l = (e = 1 < r.evCache.length ? r.evCache[0] : d).pageX, e = e.pageY, d.preventedByNestedSwiper) s.startX = l, s.startY = e;else if (a.allowTouchMove) {
                    if (i.touchReleaseOnEdges && !i.loop) if (a.isVertical()) {
                      if (e < s.startY && a.translate <= a.maxTranslate() || e > s.startY && a.translate >= a.minTranslate()) return r.isTouched = !1, void (r.isMoved = !1);
                    } else if (l < s.startX && a.translate <= a.maxTranslate() || l > s.startX && a.translate >= a.minTranslate()) return;
                    if (t.activeElement && d.target === t.activeElement && d.target.matches(r.focusableElements)) r.isMoved = !0, a.allowClick = !1;else if (r.allowTouchCallbacks && a.emit("touchMove", d), !(d.targetTouches && 1 < d.targetTouches.length)) {
                      s.currentX = l, s.currentY = e, t = s.currentX - s.startX;
                      var c = s.currentY - s.startY;
                      if (!(a.params.threshold && Math.sqrt(Math.pow(t, 2) + Math.pow(c, 2)) < a.params.threshold)) if (void 0 === r.isScrolling && (a.isHorizontal() && s.currentY === s.startY || a.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : 25 <= t * t + c * c && (f = 180 * Math.atan2(Math.abs(c), Math.abs(t)) / Math.PI, r.isScrolling = a.isHorizontal() ? f > i.touchAngle : 90 - f > i.touchAngle)), r.isScrolling && a.emit("touchMoveOpposite", d), void 0 !== r.startMoving || s.currentX === s.startX && s.currentY === s.startY || (r.startMoving = !0), r.isScrolling || a.zoom && a.params.zoom && a.params.zoom.enabled && 1 < r.evCache.length) r.isTouched = !1;else if (r.startMoving) {
                        a.allowClick = !1, !i.cssMode && d.cancelable && d.preventDefault(), i.touchMoveStopPropagation && !i.nested && d.stopPropagation();
                        var p = a.isHorizontal() ? t : c,
                          u = a.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
                        i.oneWayMovement && (p = Math.abs(p) * (n ? 1 : -1), u = Math.abs(u) * (n ? 1 : -1)), s.diff = p, p *= i.touchRatio, n && (p = -p, u = -u);
                        var f = a.touchesDirection;
                        if (a.swipeDirection = 0 < p ? "prev" : "next", a.touchesDirection = 0 < u ? "prev" : "next", t = a.params.loop && !i.cssMode, !r.isMoved) {
                          if (t && a.loopFix({
                            direction: a.swipeDirection
                          }), r.startTranslate = a.getTranslate(), a.setTransition(0), a.animating) {
                            var m = new window.CustomEvent("transitionend", {
                              bubbles: !0,
                              cancelable: !0
                            });
                            a.wrapperEl.dispatchEvent(m);
                          }
                          r.allowMomentumBounce = !1, !i.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", d);
                        }
                        var h,
                          g = (r.isMoved && f !== a.touchesDirection && t && 1 <= Math.abs(p) && (a.loopFix({
                            direction: a.swipeDirection,
                            setTranslate: !0
                          }), h = !0), a.emit("sliderMove", d), r.isMoved = !0, r.currentTranslate = p + r.startTranslate, !0),
                          w = i.resistanceRatio;
                        if (i.touchReleaseOnEdges && (w = 0), 0 < p ? (t && !h && r.currentTranslate > (i.centeredSlides ? a.minTranslate() - a.size / 2 : a.minTranslate()) && a.loopFix({
                          direction: "prev",
                          setTranslate: !0,
                          activeSlideIndex: 0
                        }), r.currentTranslate > a.minTranslate() && (g = !1, i.resistance) && (r.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + r.startTranslate + p, w))) : p < 0 && (t && !h && r.currentTranslate < (i.centeredSlides ? a.maxTranslate() + a.size / 2 : a.maxTranslate()) && a.loopFix({
                          direction: "next",
                          setTranslate: !0,
                          activeSlideIndex: a.slides.length - ("auto" === i.slidesPerView ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
                        }), r.currentTranslate < a.maxTranslate()) && (g = !1, i.resistance) && (r.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - r.startTranslate - p, w)), g && (d.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), a.allowSlidePrev || a.allowSlideNext || (r.currentTranslate = r.startTranslate), 0 < i.threshold) {
                          if (!(Math.abs(p) > i.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
                          if (!r.allowThresholdMove) return r.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, r.currentTranslate = r.startTranslate, void (s.diff = a.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
                        }
                        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && a.freeMode || i.watchSlidesProgress) && (a.updateActiveIndex(), a.updateSlidesClasses()), a.params.freeMode && i.freeMode.enabled && a.freeMode && a.freeMode.onTouchMove(), a.updateProgress(r.currentTranslate), a.setTranslate(r.currentTranslate));
                      }
                    }
                  } else d.target.matches(r.focusableElements) || (a.allowClick = !1), r.isTouched && (Object.assign(s, {
                    startX: l,
                    startY: e,
                    prevX: a.touches.currentX,
                    prevY: a.touches.currentY,
                    currentX: l,
                    currentY: e
                  }), r.touchStartTime = v());
                } else r.startMoving && r.isScrolling && a.emit("touchMoveOpposite", d);
              }
            }.bind(e), e.onTouchEnd = function (e) {
              var t = this,
                a = t.touchEventsData,
                r = a.evCache.findIndex(function (t) {
                  return t.pointerId === e.pointerId;
                });
              if (0 <= r && a.evCache.splice(r, 1), !["pointercancel", "pointerout", "pointerleave"].includes(e.type) || "pointercancel" === e.type && (t.browser.isSafari || t.browser.isWebView)) {
                var i = t.params,
                  s = t.touches,
                  n = t.rtlTranslate,
                  l = t.slidesGrid;
                if ((c = t.enabled) && (i.simulateTouch || "mouse" !== e.pointerType)) {
                  var o = e;
                  if (o.originalEvent && (o = o.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", o), a.allowTouchCallbacks = !1, a.isTouched) {
                    i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var d,
                      c,
                      p = (c = v()) - a.touchStartTime;
                    if (t.allowClick) {
                      var u = o.path || o.composedPath && o.composedPath();
                      t.updateClickedSlide(u && u[0] || o.target), t.emit("tap click", o), p < 300 && c - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
                    }
                    if (a.lastClickTime = v(), m(function () {
                      t.destroyed || (t.allowClick = !0);
                    }), a.isTouched && a.isMoved && t.swipeDirection && 0 !== s.diff && a.currentTranslate !== a.startTranslate) {
                      if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, d = i.followFinger ? n ? t.translate : -t.translate : -a.currentTranslate, !i.cssMode) if (t.params.freeMode && i.freeMode.enabled) t.freeMode.onTouchEnd({
                        currentPos: d
                      });else {
                        for (var f = 0, h = t.slidesSizesGrid[0], g = 0; g < l.length; g += g < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                          var w = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                          void 0 !== l[g + w] ? d >= l[g] && d < l[g + w] && (f = g, h = l[g + w] - l[g]) : d >= l[g] && (f = g, h = l[l.length - 1] - l[l.length - 2]);
                        }
                        var b = null,
                          y = null;
                        i.rewind && (t.isBeginning ? y = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (b = 0)), c = (d - l[f]) / h, s = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup, p > i.longSwipesMs ? i.longSwipes ? ("next" === t.swipeDirection && (c >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? b : f + s) : t.slideTo(f)), "prev" === t.swipeDirection && (c > 1 - i.longSwipesRatio ? t.slideTo(f + s) : null !== y && c < 0 && Math.abs(c) > i.longSwipesRatio ? t.slideTo(y) : t.slideTo(f))) : t.slideTo(t.activeIndex) : i.shortSwipes ? !t.navigation || o.target !== t.navigation.nextEl && o.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== b ? b : f + s), "prev" === t.swipeDirection && t.slideTo(null !== y ? y : f)) : o.target === t.navigation.nextEl ? t.slideTo(f + s) : t.slideTo(f) : t.slideTo(t.activeIndex);
                      }
                    } else a.isTouched = !1, a.isMoved = !1, a.startMoving = !1;
                  } else a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, a.startMoving = !1;
                }
              }
            }.bind(e), a.cssMode && (e.onScroll = function () {
              var e = this,
                t = e.wrapperEl,
                a = e.rtlTranslate,
                r = e.enabled;
              r && (e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses(), (0 == (r = e.maxTranslate() - e.minTranslate()) ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1));
            }.bind(e)), e.onClick = function (e) {
              var t = this;
              t.enabled && !t.allowClick && (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation) && t.animating && (e.stopPropagation(), e.stopImmediatePropagation());
            }.bind(e), e.onLoad = function (e) {
              I(this, e.target), this.update();
            }.bind(e), X || (t.addEventListener("touchstart", Y), X = !0), q(e, "on");
          },
          detachEvents: function () {
            q(this, "off");
          }
        },
        breakpoints: {
          setBreakpoint: function () {
            var e = this,
              t = e.realIndex,
              a = e.initialized,
              r = e.params,
              i = e.el,
              s = r.breakpoints;
            if (s && 0 !== Object.keys(s).length) {
              var n = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
              if (n && e.currentBreakpoint !== n) {
                var l = (n in s ? s[n] : void 0) || e.originalParams,
                  o = N(e, r),
                  d = N(e, l),
                  c = r.enabled;
                o && !d ? (i.classList.remove(r.containerModifierClass + "grid", r.containerModifierClass + "grid-column"), e.emitContainerClasses()) : !o && d && (i.classList.add(r.containerModifierClass + "grid"), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === r.grid.fill) && i.classList.add(r.containerModifierClass + "grid-column"), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(function (t) {
                  var a = r[t] && r[t].enabled,
                    i = l[t] && l[t].enabled;
                  a && !i && e[t].disable(), !a && i && e[t].enable();
                });
                var p = l.direction && l.direction !== r.direction,
                  u = r.loop && (l.slidesPerView !== r.slidesPerView || p);
                p && a && e.changeDirection(), w(e.params, l), p = e.params.enabled, Object.assign(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev
                }), c && !p ? e.disable() : !c && p && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), u && a && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", l);
              }
            }
          },
          getBreakpoint: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "window",
              a = arguments.length > 2 ? arguments[2] : void 0;
            if (e && ("container" !== t || a)) {
              var r = !1,
                i = f(),
                s = "window" === t ? i.innerHeight : a.clientHeight,
                n = Object.keys(e).map(function (e) {
                  var t;
                  return "string" == typeof e && 0 === e.indexOf("@") ? (t = parseFloat(e.substr(1)), {
                    value: s * t,
                    point: e
                  }) : {
                    value: e,
                    point: e
                  };
                });
              n.sort(function (e, t) {
                return parseInt(e.value, 10) - parseInt(t.value, 10);
              });
              for (var l = 0; l < n.length; l += 1) {
                var o = n[l],
                  d = o.point,
                  c = o.value;
                "window" === t ? i.matchMedia("(min-width: ".concat(c, "px)")).matches && (r = d) : c <= a.clientWidth && (r = d);
              }
              return r || "max";
            }
          }
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
              t = e.isLocked,
              a = e.params,
              r = a.slidesOffsetBefore;
            if (r) {
              var i = e.slides.length - 1,
                s = e.slidesGrid[i] + e.slidesSizesGrid[i] + 2 * r;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === a.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === a.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          }
        },
        classes: {
          addClasses: function () {
            var e,
              t = this.classNames,
              r = this.params,
              i = this.rtl,
              s = this.el,
              n = this.device;
            i = function (e, t) {
              var a = [];
              return e.forEach(function (e) {
                "object" == l(e) ? Object.keys(e).forEach(function (r) {
                  e[r] && a.push(t + r);
                }) : "string" == typeof e && a.push(t + e);
              }), a;
            }(["initialized", r.direction, {
              "free-mode": this.params.freeMode && r.freeMode.enabled
            }, {
              autoheight: r.autoHeight
            }, {
              rtl: i
            }, {
              grid: r.grid && 1 < r.grid.rows
            }, {
              "grid-column": r.grid && 1 < r.grid.rows && "column" === r.grid.fill
            }, {
              android: n.android
            }, {
              ios: n.ios
            }, {
              "css-mode": r.cssMode
            }, {
              centered: r.cssMode && r.centeredSlides
            }, {
              "watch-progress": r.watchSlidesProgress
            }], r.containerModifierClass), t.push.apply(t, a(i)), (e = s.classList).add.apply(e, a(t)), this.emitContainerClasses();
          },
          removeClasses: function () {
            var e,
              t = this.el,
              r = this.classNames;
            (e = t.classList).remove.apply(e, a(r)), this.emitContainerClasses();
          }
        }
      },
      j = {},
      V = function () {
        function r() {
          for (var t, i, s, n, d = arguments.length, u = new Array(d), m = 0; m < d; m++) u[m] = arguments[m];
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, r), 1 === u.length && u[0].constructor && "Object" === Object.prototype.toString.call(u[0]).slice(8, -1) ? n = u[0] : (s = (t = e(u, 2))[0], n = t[1]), n = w({}, n = n || {}), s && !n.el && (n.el = s);
          var v = o();
          if (n.el && "string" == typeof n.el && 1 < v.querySelectorAll(n.el).length) {
            var h = [];
            return v.querySelectorAll(n.el).forEach(function (e) {
              e = w({}, n, {
                el: e
              }), h.push(new r(e));
            }), h;
          }
          var g = this,
            b = (g.__swiper__ = !0, g.support = k(), g.device = (u = {
              userAgent: n.userAgent
            }, c = c || function (e) {
              var t = k(),
                a = (s = f()).navigator.platform,
                r = (e = e || s.navigator.userAgent, {
                  ios: !1,
                  android: !1
                }),
                i = s.screen.width,
                s = s.screen.height,
                n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                l = e.match(/(iPad).*OS\s([\d_]+)/),
                o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                d = !l && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                c = "Win32" === a;
              return a = "MacIntel" === a, !l && a && t.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(i + "x" + s) && (l = (l = e.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"]), n && !c && (r.os = "android", r.android = !0), (l || d || o) && (r.os = "ios", r.ios = !0), r;
            }(u.userAgent)), g.browser = p = p || function () {
              var t = f(),
                a = !1;
              function r() {
                var e = t.navigator.userAgent.toLowerCase();
                return 0 <= e.indexOf("safari") && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
              }
              if (r()) {
                var i = String(t.navigator.userAgent);
                if (i.includes("Version/")) {
                  var s = i.split("Version/")[1].split(" ")[0].split(".").map(function (e) {
                      return Number(e);
                    }),
                    n = e(s, 2),
                    l = n[0],
                    o = n[1];
                  a = l < 16 || 16 === l && o < 2;
                }
              }
              return {
                isSafari: a || r(),
                needPerspectiveFix: a,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
              };
            }(), g.eventsListeners = {}, g.eventsAnyListeners = [], g.modules = a(g.__modules__), n.modules && Array.isArray(n.modules) && (i = g.modules).push.apply(i, a(n.modules)), {});
          return g.modules.forEach(function (e) {
            var t, a;
            e({
              params: n,
              swiper: g,
              extendParams: (t = n, a = b, function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = Object.keys(e)[0],
                  i = e[r];
                "object" == l(i) && null !== i && (0 <= ["navigation", "pagination", "scrollbar"].indexOf(r) && !0 === t[r] && (t[r] = {
                  auto: !0
                }), r in t) && "enabled" in i && (!0 === t[r] && (t[r] = {
                  enabled: !0
                }), "object" != l(t[r]) || "enabled" in t[r] || (t[r].enabled = !0), t[r] || (t[r] = {
                  enabled: !1
                })), w(a, e);
              }),
              on: g.on.bind(g),
              once: g.once.bind(g),
              off: g.off.bind(g),
              emit: g.emit.bind(g)
            });
          }), v = w({}, R, b), g.params = w({}, v, j, n), g.originalParams = w({}, g.params), g.passedParams = w({}, n), g.params && g.params.on && Object.keys(g.params.on).forEach(function (e) {
            g.on(e, g.params.on[e]);
          }), g.params && g.params.onAny && g.onAny(g.params.onAny), Object.assign(g, {
            enabled: g.params.enabled,
            el: s,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function () {
              return "horizontal" === g.params.direction;
            },
            isVertical: function () {
              return "vertical" === g.params.direction;
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment: function () {
              return Math.trunc(this.translate / Math.pow(2, 23)) * Math.pow(2, 23);
            },
            allowSlideNext: g.params.allowSlideNext,
            allowSlidePrev: g.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: g.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: []
            },
            allowClick: !0,
            allowTouchMove: g.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), g.emit("_swiper"), g.params.init && g.init(), g;
        }
        var i, s, n;
        return i = r, s = [{
          key: "getSlideIndex",
          value: function (e) {
            var t = this.slidesEl,
              a = this.params;
            return t = C(x(t, ".".concat(a.slideClass, ", swiper-slide"))[0]), C(e) - t;
          }
        }, {
          key: "getSlideIndexByData",
          value: function (e) {
            return this.getSlideIndex(this.slides.filter(function (t) {
              return +t.getAttribute("data-swiper-slide-index") === e;
            })[0]);
          }
        }, {
          key: "recalcSlides",
          value: function () {
            var e = this.slidesEl,
              t = this.params;
            this.slides = x(e, ".".concat(t.slideClass, ", swiper-slide"));
          }
        }, {
          key: "enable",
          value: function () {
            var e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
          }
        }, {
          key: "disable",
          value: function () {
            var e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
          }
        }, {
          key: "setProgress",
          value: function (e, t) {
            var a = this,
              r = (e = Math.min(Math.max(e, 0), 1), a.minTranslate());
            e = (a.maxTranslate() - r) * e + r, a.translateTo(e, void 0 === t ? 0 : t), a.updateActiveIndex(), a.updateSlidesClasses();
          }
        }, {
          key: "emitContainerClasses",
          value: function () {
            var e,
              t = this;
            t.params._emitClasses && t.el && (e = t.el.className.split(" ").filter(function (e) {
              return 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass);
            }), t.emit("_containerClasses", e.join(" ")));
          }
        }, {
          key: "getSlideClasses",
          value: function (e) {
            var t = this;
            return t.destroyed ? "" : e.className.split(" ").filter(function (e) {
              return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
            }).join(" ");
          }
        }, {
          key: "emitSlidesClasses",
          value: function () {
            var e = this;
            if (e.params._emitClasses && e.el) {
              var t = [];
              e.slides.forEach(function (a) {
                var r = e.getSlideClasses(a);
                t.push({
                  slideEl: a,
                  classNames: r
                }), e.emit("_slideClass", a, r);
              }), e.emit("_slideClasses", t);
            }
          }
        }, {
          key: "slidesPerViewDynamic",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "current",
              t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = this.params,
              r = this.slides,
              i = this.slidesGrid,
              s = this.slidesSizesGrid,
              n = this.size,
              l = this.activeIndex,
              o = 1;
            if (a.centeredSlides) {
              for (var d, c = r[l].swiperSlideSize, p = l + 1; p < r.length; p += 1) r[p] && !d && (o += 1, (c += r[p].swiperSlideSize) > n) && (d = !0);
              for (var u = l - 1; 0 <= u; --u) r[u] && !d && (o += 1, (c += r[u].swiperSlideSize) > n) && (d = !0);
            } else if ("current" === e) for (var f = l + 1; f < r.length; f += 1) (t ? i[f] + s[f] - i[l] < n : i[f] - i[l] < n) && (o += 1);else for (var m = l - 1; 0 <= m; --m) i[l] - i[m] < n && (o += 1);
            return o;
          }
        }, {
          key: "update",
          value: function () {
            var e = this;
            if (e && !e.destroyed) {
              var t,
                r = function () {
                  var t = e.rtlTranslate ? -1 * e.translate : e.translate;
                  t = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate()), e.setTranslate(t), e.updateActiveIndex(), e.updateSlidesClasses();
                },
                i = e.snapGrid,
                s = e.params;
              if (s.breakpoints && e.setBreakpoint(), a(e.el.querySelectorAll('[loading="lazy"]')).forEach(function (t) {
                t.complete && I(e, t);
              }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled) r(), e.params.autoHeight && e.updateAutoHeight();else {
                if (("auto" === e.params.slidesPerView || 1 < e.params.slidesPerView) && e.isEnd && !e.params.centeredSlides) {
                  var n = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides;
                  t = e.slideTo(n.length - 1, 0, !1, !0);
                } else t = e.slideTo(e.activeIndex, 0, !1, !0);
                t || r();
              }
              s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update");
            }
          }
        }, {
          key: "changeDirection",
          value: function (e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              a = this,
              r = a.params.direction;
            return (e = e || ("horizontal" === r ? "vertical" : "horizontal")) === r || "horizontal" !== e && "vertical" !== e || (a.el.classList.remove("" + a.params.containerModifierClass + r), a.el.classList.add("" + a.params.containerModifierClass + e), a.emitContainerClasses(), a.params.direction = e, a.slides.forEach(function (t) {
              "vertical" === e ? t.style.width = "" : t.style.height = "";
            }), a.emit("changeDirection"), t && a.update()), a;
          }
        }, {
          key: "changeLanguageDirection",
          value: function (e) {
            var t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(t.params.containerModifierClass + "rtl"), t.el.dir = "rtl") : (t.el.classList.remove(t.params.containerModifierClass + "rtl"), t.el.dir = "ltr"), t.update());
          }
        }, {
          key: "mount",
          value: function (e) {
            var t = this;
            if (!t.mounted) {
              var a = e || t.params.el;
              if (!(a = "string" == typeof a ? document.querySelector(a) : a)) return !1;
              a.swiper = t, a.shadowEl && (t.isElement = !0), e = function () {
                return "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
              };
              var r = a && a.shadowRoot && a.shadowRoot.querySelector ? a.shadowRoot.querySelector(e()) : x(a, e())[0];
              !r && t.params.createElements && (r = S("div", t.params.wrapperClass), a.append(r), x(a, "." + t.params.slideClass).forEach(function (e) {
                r.append(e);
              })), Object.assign(t, {
                el: a,
                wrapperEl: r,
                slidesEl: t.isElement ? a : r,
                mounted: !0,
                rtl: "rtl" === a.dir.toLowerCase() || "rtl" === M(a, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === M(a, "direction")),
                wrongRTL: "-webkit-box" === M(r, "display")
              });
            }
            return !0;
          }
        }, {
          key: "init",
          value: function (e) {
            var t = this;
            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), a(t.el.querySelectorAll('[loading="lazy"]')).forEach(function (e) {
              e.complete ? I(t, e) : e.addEventListener("load", function (e) {
                I(t, e.target);
              });
            }), D(t), t.initialized = !0, D(t), t.emit("init"), t.emit("afterInit")), t;
          }
        }, {
          key: "destroy",
          value: function () {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              a = this,
              r = a.params,
              i = a.el,
              s = a.wrapperEl,
              n = a.slides;
            if (void 0 !== a.params && !a.destroyed) {
              if (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), r.loop && a.loopDestroy(), t && (a.removeClasses(), i.removeAttribute("style"), s.removeAttribute("style"), n) && n.length && n.forEach(function (e) {
                e.classList.remove(r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
              }), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
                a.off(e);
              }), !1 !== e) {
                a.el.swiper = null;
                var l = a;
                Object.keys(l).forEach(function (e) {
                  try {
                    l[e] = null;
                  } catch (e) {}
                  try {
                    delete l[e];
                  } catch (e) {}
                });
              }
              a.destroyed = !0;
            }
            return null;
          }
        }], n = [{
          key: "extendDefaults",
          value: function (e) {
            w(j, e);
          }
        }, {
          key: "extendedDefaults",
          get: function () {
            return j;
          }
        }, {
          key: "defaults",
          get: function () {
            return R;
          }
        }, {
          key: "installModule",
          value: function (e) {
            r.prototype.__modules__ || (r.prototype.__modules__ = []);
            var t = r.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
          }
        }, {
          key: "use",
          value: function (e) {
            return Array.isArray(e) ? e.forEach(function (e) {
              return r.installModule(e);
            }) : r.installModule(e), r;
          }
        }], s && t(i.prototype, s), n && t(i, n), Object.defineProperty(i, "prototype", {
          writable: !1
        }), r;
      }();
    Object.keys(_).forEach(function (e) {
      Object.keys(_[e]).forEach(function (t) {
        V.prototype[t] = _[e][t];
      });
    }), V.use([function (e) {
      var t = e.swiper,
        a = e.on,
        r = e.emit,
        i = f(),
        s = null,
        n = null,
        l = function () {
          t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"));
        },
        o = function () {
          t && !t.destroyed && t.initialized && r("orientationchange");
        };
      a("init", function () {
        t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (s = new ResizeObserver(function (e) {
          n = i.requestAnimationFrame(function () {
            var a = t.width,
              r = t.height,
              i = a,
              s = r;
            e.forEach(function (e) {
              var a = e.contentBoxSize,
                r = e.contentRect,
                n = e.target;
              n && n !== t.el || (i = r ? r.width : (a[0] || a).inlineSize, s = r ? r.height : (a[0] || a).blockSize);
            }), i === a && s === r || l();
          });
        })).observe(t.el) : (i.addEventListener("resize", l), i.addEventListener("orientationchange", o));
      }), a("destroy", function () {
        n && i.cancelAnimationFrame(n), s && s.unobserve && t.el && (s.unobserve(t.el), s = null), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", o);
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on,
        i = e.emit,
        s = [],
        n = f(),
        l = function (e) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = new (n.MutationObserver || n.WebkitMutationObserver)(function (e) {
              var a;
              t.__preventObserver__ || (1 === e.length ? i("observerUpdate", e[0]) : (a = function () {
                i("observerUpdate", e[0]);
              }, n.requestAnimationFrame ? n.requestAnimationFrame(a) : n.setTimeout(a, 0)));
            });
          r.observe(e, {
            attributes: void 0 === a.attributes || a.attributes,
            childList: void 0 === a.childList || a.childList,
            characterData: void 0 === a.characterData || a.characterData
          }), s.push(r);
        };
      a({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      }), r("init", function () {
        if (t.params.observer) {
          if (t.params.observeParents) for (var e = P(t.el), a = 0; a < e.length; a += 1) l(e[a]);
          l(t.el, {
            childList: t.params.observeSlideChildren
          }), l(t.wrapperEl, {
            attributes: !1
          });
        }
      }), r("destroy", function () {
        s.forEach(function (e) {
          e.disconnect();
        }), s.splice(0, s.length);
      });
    }]);
    var F = V;
    function W(e, t, a, r) {
      return e.params.createElements && Object.keys(r).forEach(function (i) {
        if (!a[i] && !0 === a.auto) {
          var s = x(e.el, "." + r[i])[0];
          s || ((s = S("div", r[i])).className = r[i], e.el.append(s)), a[i] = s, t[i] = s;
        }
      }), a;
    }
    function U() {
      return "." + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".");
    }
    function K(e) {
      var t,
        a = e.effect,
        r = e.swiper,
        i = e.on,
        s = e.setTranslate,
        n = e.setTransition,
        l = e.overwriteParams,
        o = e.perspective,
        d = e.recreateShadows,
        c = e.getEffectParams;
      i("beforeInit", function () {
        var e;
        r.params.effect === a && (r.classNames.push("" + r.params.containerModifierClass + a), o && o() && r.classNames.push(r.params.containerModifierClass + "3d"), e = l ? l() : {}, Object.assign(r.params, e), Object.assign(r.originalParams, e));
      }), i("setTranslate", function () {
        r.params.effect === a && s();
      }), i("setTransition", function (e, t) {
        r.params.effect === a && n(t);
      }), i("transitionEnd", function () {
        r.params.effect === a && d && c && c().slideShadows && (r.slides.forEach(function (e) {
          e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function (e) {
            return e.remove();
          });
        }), d());
      }), i("virtualUpdate", function () {
        r.params.effect === a && (r.slides.length || (t = !0), requestAnimationFrame(function () {
          t && r.slides && r.slides.length && (s(), t = !1);
        }));
      });
    }
    function Z(e, t) {
      var a = E(t);
      return a !== t && (a.style.backfaceVisibility = "hidden", a.style["-webkit-backface-visibility"] = "hidden"), a;
    }
    function $(e) {
      var t = e.swiper,
        a = e.duration,
        r = e.transformElements,
        i = e.allSlides,
        s = t.activeIndex;
      if (t.params.virtualTranslate && 0 !== a) {
        var n = !1;
        (i ? r : r.filter(function (e) {
          var a;
          return e = e.classList.contains("swiper-slide-transform") ? (a = e).parentElement || t.slides.filter(function (e) {
            return e.shadowEl && e.shadowEl === a.parentNode;
          })[0] : e, t.getSlideIndex(e) === s;
        })).forEach(function (e) {
          L(e, function () {
            var e;
            n || t && !t.destroyed && (n = !0, t.animating = !1, e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            }), t.wrapperEl.dispatchEvent(e));
          });
        });
      }
    }
    function Q(e, t, a) {
      var r = "swiper-slide-shadow" + (a ? "-" + a : ""),
        i = (t = E(t)).querySelector("." + r);
      return i || (i = S("div", "swiper-slide-shadow" + (a ? "-" + a : "")), t.append(i)), i;
    }
    function J(e) {
      return function (e) {
        if (Array.isArray(e)) return ee(e);
      }(e) || function () {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }() || function (e) {
        var t;
        if (e) return "string" == typeof e ? ee(e, void 0) : "Map" === (t = "Object" === (t = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ee(e, void 0) : void 0;
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function ee(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    F.use([function (e) {
      var t,
        r = e.swiper,
        i = e.extendParams,
        s = e.on,
        n = e.emit;
      i({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      }), i = o(), r.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: []
      };
      var d = i.createElement("div");
      function c(e, t) {
        var a,
          i = r.params.virtual;
        return i.cache && r.virtual.cache[t] ? r.virtual.cache[t] : (i.renderSlide ? "string" == typeof (a = i.renderSlide.call(r, e, t)) && (d.innerHTML = a, a = d.children[0]) : a = r.isElement ? S("swiper-slide") : S("div", r.params.slideClass), a.setAttribute("data-swiper-slide-index", t), i.renderSlide || (a.innerHTML = e), i.cache && (r.virtual.cache[t] = a), a);
      }
      function p(e) {
        var t = r.params,
          a = t.slidesPerView,
          i = t.slidesPerGroup,
          s = t.centeredSlides,
          l = t.loop,
          o = r.params.virtual,
          d = o.addSlidesBefore,
          p = o.addSlidesAfter,
          u = r.virtual,
          f = u.from,
          m = u.to,
          v = u.slides,
          h = u.slidesGrid,
          g = u.offset;
        r.params.cssMode || r.updateActiveIndex();
        var w,
          b,
          y,
          E = r.activeIndex || 0,
          S = (w = r.rtlTranslate ? "right" : r.isHorizontal() ? "left" : "top", E - (y = s ? (b = Math.floor(a / 2) + i + p, Math.floor(a / 2) + i + d) : (b = a + (i - 1) + p, (l ? a : i) + d))),
          T = E + b,
          M = (l || (S = Math.max(S, 0), T = Math.min(T, v.length - 1)), (r.slidesGrid[S] || 0) - (r.slidesGrid[0] || 0));
        function C() {
          r.updateSlides(), r.updateProgress(), r.updateSlidesClasses(), n("virtualUpdate");
        }
        if (l && E >= y ? (S -= y, s || (M += r.slidesGrid[0])) : l && E < y && (S = -y, s) && (M += r.slidesGrid[0]), Object.assign(r.virtual, {
          from: S,
          to: T,
          offset: M,
          slidesGrid: r.slidesGrid,
          slidesBefore: y,
          slidesAfter: b
        }), f !== S || m !== T || e) {
          if (r.params.virtual.renderExternal) r.params.virtual.renderExternal.call(r, {
            offset: M,
            from: S,
            to: T,
            slides: function () {
              for (var e = [], t = S; t <= T; t += 1) e.push(v[t]);
              return e;
            }()
          }), r.params.virtual.renderExternalUpdate ? C() : n("virtualUpdate");else {
            var P = [],
              L = [],
              A = function (e) {
                var t = e;
                return e < 0 ? t = v.length + e : t >= v.length && (t -= v.length), t;
              };
            if (e) r.slidesEl.querySelectorAll(".".concat(r.params.slideClass, ", swiper-slide")).forEach(function (e) {
              e.remove();
            });else for (var k = f; k <= m; k += 1) if (k < S || k > T) {
              var z = A(k);
              r.slidesEl.querySelectorAll(".".concat(r.params.slideClass, '[data-swiper-slide-index="').concat(z, '"], swiper-slide[data-swiper-slide-index="').concat(z, '"]')).forEach(function (e) {
                e.remove();
              });
            }
            E = l ? -v.length : 0;
            for (var I = l ? 2 * v.length : v.length, O = E; O < I; O += 1) if (O >= S && O <= T) {
              var D = A(O);
              void 0 === m || e ? L.push(D) : (O > m && L.push(D), O < f && P.push(D));
            }
            if (L.forEach(function (e) {
              r.slidesEl.append(c(v[e], e));
            }), l) for (var G = P.length - 1; 0 <= G; --G) {
              var B = P[G];
              r.slidesEl.prepend(c(v[B], B));
            } else P.sort(function (e, t) {
              return t - e;
            }), P.forEach(function (e) {
              r.slidesEl.prepend(c(v[e], e));
            });
            x(r.slidesEl, ".swiper-slide, swiper-slide").forEach(function (e) {
              e.style[w] = M - Math.abs(r.cssOverflowAdjustment()) + "px";
            }), C();
          }
        } else r.slidesGrid !== h && M !== g && r.slides.forEach(function (e) {
          e.style[w] = M - Math.abs(r.cssOverflowAdjustment()) + "px";
        }), r.updateProgress(), n("virtualUpdate");
      }
      s("beforeInit", function () {
        var e, t;
        r.params.virtual.enabled && (void 0 === r.passedParams.virtual.slides && (t = a(r.slidesEl.children).filter(function (e) {
          return e.matches(".".concat(r.params.slideClass, ", swiper-slide"));
        })) && t.length && (r.virtual.slides = a(t), e = !0, t.forEach(function (e, t) {
          e.setAttribute("data-swiper-slide-index", t), (r.virtual.cache[t] = e).remove();
        })), e || (r.virtual.slides = r.params.virtual.slides), r.classNames.push(r.params.containerModifierClass + "virtual"), r.params.watchSlidesProgress = !0, r.originalParams.watchSlidesProgress = !0, r.params.initialSlide || p());
      }), s("setTranslate", function () {
        r.params.virtual.enabled && (r.params.cssMode && !r._immediateVirtual ? (clearTimeout(t), t = setTimeout(function () {
          p();
        }, 100)) : p());
      }), s("init update resize", function () {
        r.params.virtual.enabled && r.params.cssMode && b(r.wrapperEl, "--swiper-virtual-size", r.virtualSize + "px");
      }), Object.assign(r.virtual, {
        appendSlide: function (e) {
          if ("object" == l(e) && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && r.virtual.slides.push(e[t]);else r.virtual.slides.push(e);
          p(!0);
        },
        prependSlide: function (e) {
          var t = r.activeIndex,
            a = t + 1,
            i = 1;
          if (Array.isArray(e)) {
            for (var s = 0; s < e.length; s += 1) e[s] && r.virtual.slides.unshift(e[s]);
            a = t + e.length, i = e.length;
          } else r.virtual.slides.unshift(e);
          if (r.params.virtual.cache) {
            var n = r.virtual.cache,
              l = {};
            Object.keys(n).forEach(function (e) {
              var t = n[e],
                a = t.getAttribute("data-swiper-slide-index");
              a && t.setAttribute("data-swiper-slide-index", parseInt(a, 10) + i), l[parseInt(e, 10) + i] = t;
            }), r.virtual.cache = l;
          }
          p(!0), r.slideTo(a, 0);
        },
        removeSlide: function (e) {
          if (null != e) {
            var t = r.activeIndex;
            if (Array.isArray(e)) for (var a = e.length - 1; 0 <= a; --a) r.virtual.slides.splice(e[a], 1), r.params.virtual.cache && delete r.virtual.cache[e[a]], e[a] < t && --t, t = Math.max(t, 0);else r.virtual.slides.splice(e, 1), r.params.virtual.cache && delete r.virtual.cache[e], e < t && --t, t = Math.max(t, 0);
            p(!0), r.slideTo(t, 0);
          }
        },
        removeAllSlides: function () {
          r.virtual.slides = [], r.params.virtual.cache && (r.virtual.cache = {}), p(!0), r.slideTo(0, 0);
        },
        update: p
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on,
        i = e.emit,
        s = o(),
        n = f();
      function l(e) {
        if (t.enabled) {
          var a = t.rtlTranslate,
            r = e,
            l = (r = r.originalEvent ? r.originalEvent : r).keyCode || r.charCode,
            o = t.params.keyboard.pageUpDown,
            d = o && 33 === l,
            c = o && 34 === l,
            p = 37 === l,
            u = 39 === l,
            f = 38 === l,
            m = 40 === l;
          if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
          if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && f || d)) return !1;
          if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || s.activeElement && s.activeElement.nodeName && ("input" === s.activeElement.nodeName.toLowerCase() || "textarea" === s.activeElement.nodeName.toLowerCase()))) {
            if (t.params.keyboard.onlyInViewport && (d || c || p || u || f || m)) {
              var v = !1;
              if (0 < P(t.el, ".".concat(t.params.slideClass, ", swiper-slide")).length && 0 === P(t.el, "." + t.params.slideActiveClass).length) return;
              for (var h = t.el, g = h.clientWidth, w = h.clientHeight, b = n.innerWidth, y = n.innerHeight, E = T(h), x = (a && (E.left -= h.scrollLeft), [[E.left, E.top], [E.left + g, E.top], [E.left, E.top + w], [E.left + g, E.top + w]]), S = 0; S < x.length; S += 1) {
                var M = x[S];
                0 <= M[0] && M[0] <= b && 0 <= M[1] && M[1] <= y && (0 === M[0] && 0 === M[1] || (v = !0));
              }
              if (!v) return;
            }
            t.isHorizontal() ? ((d || c || p || u) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), ((c || u) && !a || (d || p) && a) && t.slideNext(), ((d || p) && !a || (c || u) && a) && t.slidePrev()) : ((d || c || f || m) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (c || m) && t.slideNext(), (d || f) && t.slidePrev()), i("keyPress", l);
          }
        }
      }
      function d() {
        t.keyboard.enabled || (s.addEventListener("keydown", l), t.keyboard.enabled = !0);
      }
      function c() {
        t.keyboard.enabled && (s.removeEventListener("keydown", l), t.keyboard.enabled = !1);
      }
      a({
        keyboard: {
          enabled: !(t.keyboard = {
            enabled: !1
          }),
          onlyInViewport: !0,
          pageUpDown: !0
        }
      }), r("init", function () {
        t.params.keyboard.enabled && d();
      }), r("destroy", function () {
        t.keyboard.enabled && c();
      }), Object.assign(t.keyboard, {
        enable: d,
        disable: c
      });
    }, function (e) {
      var t,
        a = e.swiper,
        r = e.extendParams,
        i = e.on,
        s = e.emit,
        n = f();
      r({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null
        }
      }), a.mousewheel = {
        enabled: !1
      };
      var l,
        o = v(),
        d = [];
      function c() {
        a.enabled && (a.mouseEntered = !0);
      }
      function p() {
        a.enabled && (a.mouseEntered = !1);
      }
      function u(e) {
        a.params.mousewheel.thresholdDelta && e.delta < a.params.mousewheel.thresholdDelta || a.params.mousewheel.thresholdTime && v() - o < a.params.mousewheel.thresholdTime || 6 <= e.delta && v() - o < 60 || (e.direction < 0 ? a.isEnd && !a.params.loop || a.animating || (a.slideNext(), s("scroll", e.raw)) : a.isBeginning && !a.params.loop || a.animating || (a.slidePrev(), s("scroll", e.raw)), o = new n.Date().getTime());
      }
      function h(e) {
        var r = e;
        if (a.enabled) {
          var i = a.params.mousewheel;
          a.params.cssMode && r.preventDefault();
          var n = a.el,
            o = (n = "container" !== a.params.mousewheel.eventsTarget ? document.querySelector(a.params.mousewheel.eventsTarget) : n) && n.contains(r.target);
          if (!a.mouseEntered && !o && !i.releaseOnEdges) return !0;
          r.originalEvent && (r = r.originalEvent);
          var c = 0,
            p = a.rtlTranslate ? -1 : 1,
            f = function (e) {
              var t = 0,
                a = 0,
                r = 0,
                i = 0;
              return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), r = 10 * t, i = 10 * a, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (r = e.deltaX), e.shiftKey && !r && (r = i, i = 0), (r || i) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, i *= 40) : (r *= 800, i *= 800)), r && !t && (t = r < 1 ? -1 : 1), i && !a && (a = i < 1 ? -1 : 1), {
                spinX: t,
                spinY: a,
                pixelX: r,
                pixelY: i
              };
            }(r);
          if (i.forceToAxis) {
            if (a.isHorizontal()) {
              if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
              c = -f.pixelX * p;
            } else {
              if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
              c = -f.pixelY;
            }
          } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * p : -f.pixelY;
          if (0 === c) return !0;
          i.invert && (c = -c);
          var h = a.getTranslate() + c * i.sensitivity;
          if ((h = h >= a.minTranslate() ? a.minTranslate() : h) <= a.maxTranslate() && (h = a.maxTranslate()), (!!a.params.loop || !(h === a.minTranslate() || h === a.maxTranslate())) && a.params.nested && r.stopPropagation(), a.params.freeMode && a.params.freeMode.enabled) {
            var g = {
                time: v(),
                delta: Math.abs(c),
                direction: Math.sign(c)
              },
              w = l && g.time < l.time + 500 && g.delta <= l.delta && g.direction === l.direction;
            if (!w) {
              l = void 0;
              var b = a.getTranslate() + c * i.sensitivity,
                y = a.isBeginning,
                E = a.isEnd;
              if ((b = b >= a.minTranslate() ? a.minTranslate() : b) <= a.maxTranslate() && (b = a.maxTranslate()), a.setTransition(0), a.setTranslate(b), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!y && a.isBeginning || !E && a.isEnd) && a.updateSlidesClasses(), a.params.loop && a.loopFix({
                direction: g.direction < 0 ? "next" : "prev",
                byMousewheel: !0
              }), a.params.freeMode.sticky) {
                clearTimeout(t), t = void 0, 15 <= d.length && d.shift();
                var x = d.length ? d[d.length - 1] : void 0,
                  S = d[0];
                if (d.push(g), x && (g.delta > x.delta || g.direction !== x.direction)) d.splice(0);else if (15 <= d.length && g.time - S.time < 500 && 1 <= S.delta - g.delta && g.delta <= 6) {
                  var T = 0 < c ? .8 : .2;
                  l = g, d.splice(0), t = m(function () {
                    a.slideToClosest(a.params.speed, !0, void 0, T);
                  }, 0);
                }
                t = t || m(function () {
                  l = g, d.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5);
                }, 500);
              }
              if (w || s("scroll", r), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), b === a.minTranslate() || b === a.maxTranslate()) return !0;
            }
          } else {
            var M = {
                time: v(),
                delta: Math.abs(c),
                direction: Math.sign(c),
                raw: e
              },
              C = (2 <= d.length && d.shift(), d.length ? d[d.length - 1] : void 0);
            if (d.push(M), (!C || M.direction !== C.direction || M.delta > C.delta || M.time > C.time + 150) && u(M), function (e) {
              var t = a.params.mousewheel;
              if (e.direction < 0) {
                if (a.isEnd && !a.params.loop && t.releaseOnEdges) return 1;
              } else if (a.isBeginning && !a.params.loop && t.releaseOnEdges) return 1;
            }(M)) return !0;
          }
          return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1;
        }
      }
      function g(e) {
        var t = a.el;
        (t = "container" !== a.params.mousewheel.eventsTarget ? document.querySelector(a.params.mousewheel.eventsTarget) : t)[e]("mouseenter", c), t[e]("mouseleave", p), t[e]("wheel", h);
      }
      function w() {
        return a.params.cssMode ? (a.wrapperEl.removeEventListener("wheel", h), !0) : !a.mousewheel.enabled && (g("addEventListener"), a.mousewheel.enabled = !0);
      }
      function b() {
        return a.params.cssMode ? (a.wrapperEl.addEventListener(event, h), !0) : !(!a.mousewheel.enabled || (g("removeEventListener"), a.mousewheel.enabled = !1));
      }
      i("init", function () {
        !a.params.mousewheel.enabled && a.params.cssMode && b(), a.params.mousewheel.enabled && w();
      }), i("destroy", function () {
        a.params.cssMode && w(), a.mousewheel.enabled && b();
      }), Object.assign(a.mousewheel, {
        enable: w,
        disable: b
      });
    }, function (e) {
      var t = e.swiper,
        r = e.extendParams,
        i = e.on,
        s = e.emit;
      r({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled"
        }
      }), t.navigation = {
        nextEl: null,
        prevEl: null
      };
      var n = function (e) {
        return Array.isArray(e) ? e : [e].filter(function (e) {
          return !!e;
        });
      };
      function l(e) {
        var r;
        return e && "string" == typeof e && t.isElement && (r = t.el.shadowRoot.querySelector(e)) || (e && ("string" == typeof e && (r = a(document.querySelectorAll(e))), t.params.uniqueNavElements) && "string" == typeof e && 1 < r.length && 1 === t.el.querySelectorAll(e).length && (r = t.el.querySelector(e)), !e) || r ? r : e;
      }
      function o(e, r) {
        var i = t.params.navigation;
        (e = n(e)).forEach(function (e) {
          var s;
          e && ((s = e.classList)[r ? "add" : "remove"].apply(s, a(i.disabledClass.split(" "))), "BUTTON" === e.tagName && (e.disabled = r), t.params.watchOverflow) && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass);
        });
      }
      function d() {
        var e = t.navigation,
          a = e.nextEl,
          r = e.prevEl;
        t.params.loop ? (o(r, !1), o(a, !1)) : (o(r, t.isBeginning && !t.params.rewind), o(a, t.isEnd && !t.params.rewind));
      }
      function c(e) {
        e.preventDefault(), t.isBeginning && !t.params.loop && !t.params.rewind || (t.slidePrev(), s("navigationPrev"));
      }
      function p(e) {
        e.preventDefault(), t.isEnd && !t.params.loop && !t.params.rewind || (t.slideNext(), s("navigationNext"));
      }
      function u() {
        var e = t.params.navigation;
        if (t.params.navigation = W(t, t.originalParams.navigation, t.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev"
        }), e.nextEl || e.prevEl) {
          var r = l(e.nextEl),
            i = l(e.prevEl);
          Object.assign(t.navigation, {
            nextEl: r,
            prevEl: i
          }), r = n(r), i = n(i);
          var s = function (r, i) {
            var s;
            r && r.addEventListener("click", "next" === i ? p : c), !t.enabled && r && (s = r.classList).add.apply(s, a(e.lockClass.split(" ")));
          };
          r.forEach(function (e) {
            return s(e, "next");
          }), i.forEach(function (e) {
            return s(e, "prev");
          });
        }
      }
      function f() {
        var e = t.navigation,
          r = e.nextEl,
          i = e.prevEl,
          s = (r = n(r), i = n(i), function (e, r) {
            var i;
            e.removeEventListener("click", "next" === r ? p : c), (i = e.classList).remove.apply(i, a(t.params.navigation.disabledClass.split(" ")));
          });
        r.forEach(function (e) {
          return s(e, "next");
        }), i.forEach(function (e) {
          return s(e, "prev");
        });
      }
      i("init", function () {
        (!1 === t.params.navigation.enabled ? m : (u(), d))();
      }), i("toEdge fromEdge lock unlock", function () {
        d();
      }), i("destroy", function () {
        f();
      }), i("enable disable", function () {
        var e = t.navigation,
          r = e.nextEl,
          i = e.prevEl;
        r = n(r), i = n(i), [].concat(a(r), a(i)).filter(function (e) {
          return !!e;
        }).forEach(function (e) {
          return e.classList[t.enabled ? "remove" : "add"](t.params.navigation.lockClass);
        });
      }), i("click", function (e, r) {
        var i,
          l = t.navigation,
          o = l.nextEl,
          d = l.prevEl;
        o = n(o), d = n(d), r = r.target, !t.params.navigation.hideOnClick || d.includes(r) || o.includes(r) || t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === r || t.pagination.el.contains(r)) || (o.length ? i = o[0].classList.contains(t.params.navigation.hiddenClass) : d.length && (i = d[0].classList.contains(t.params.navigation.hiddenClass)), s(!0 === i ? "navigationShow" : "navigationHide"), [].concat(a(o), a(d)).filter(function (e) {
          return !!e;
        }).forEach(function (e) {
          return e.classList.toggle(t.params.navigation.hiddenClass);
        }));
      });
      var m = function () {
        var e;
        (e = t.el.classList).add.apply(e, a(t.params.navigation.navigationDisabledClass.split(" "))), f();
      };
      Object.assign(t.navigation, {
        enable: function () {
          var e;
          (e = t.el.classList).remove.apply(e, a(t.params.navigation.navigationDisabledClass.split(" "))), u(), d();
        },
        disable: m,
        update: d,
        init: u,
        destroy: f
      });
    }, function (e) {
      var t,
        r = e.swiper,
        i = e.extendParams,
        s = e.on,
        n = e.emit,
        l = "swiper-pagination",
        o = (i({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: l + "-bullet",
            bulletActiveClass: l + "-bullet-active",
            modifierClass: l + "-",
            currentClass: l + "-current",
            totalClass: l + "-total",
            hiddenClass: l + "-hidden",
            progressbarFillClass: l + "-progressbar-fill",
            progressbarOppositeClass: l + "-progressbar-opposite",
            clickableClass: l + "-clickable",
            lockClass: l + "-lock",
            horizontalClass: l + "-horizontal",
            verticalClass: l + "-vertical",
            paginationDisabledClass: l + "-disabled"
          }
        }), r.pagination = {
          el: null,
          bullets: []
        }, 0),
        d = function (e) {
          return Array.isArray(e) ? e : [e].filter(function (e) {
            return !!e;
          });
        };
      function c() {
        return !r.params.pagination.el || !r.pagination.el || Array.isArray(r.pagination.el) && 0 === r.pagination.el.length;
      }
      function p(e, t) {
        var a = r.params.pagination.bulletActiveClass;
        (e = e && e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(a + "-" + t), e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && e.classList.add(a + "-".concat(t, "-") + t);
      }
      function u(e) {
        var t = e.target.closest(U(r.params.pagination.bulletClass));
        if (t) {
          e.preventDefault();
          var a = C(t) * r.params.slidesPerGroup;
          if (r.params.loop) {
            if (r.realIndex !== a) {
              var i = r.getSlideIndexByData(a),
                s = r.getSlideIndexByData(r.realIndex);
              i > r.slides.length - r.loopedSlides && r.loopFix({
                direction: i > s ? "next" : "prev",
                activeSlideIndex: i,
                slideTo: !1
              }), r.slideToLoop(a);
            }
          } else r.slideTo(a);
        }
      }
      function f() {
        var e = r.rtl,
          i = r.params.pagination;
        if (!c()) {
          var s,
            l,
            u = r.pagination.el;
          u = d(u);
          var f = (r.virtual && r.params.virtual.enabled ? r.virtual : r).slides.length,
            m = r.params.loop ? Math.ceil(f / r.params.slidesPerGroup) : r.snapGrid.length;
          if (r.params.loop ? (l = r.previousRealIndex || 0, s = 1 < r.params.slidesPerGroup ? Math.floor(r.realIndex / r.params.slidesPerGroup) : r.realIndex) : void 0 !== r.snapIndex ? (s = r.snapIndex, l = r.previousSnapIndex) : (l = r.previousIndex || 0, s = r.activeIndex || 0), "bullets" === i.type && r.pagination.bullets && 0 < r.pagination.bullets.length) {
            var v,
              h,
              g,
              w = r.pagination.bullets;
            if (i.dynamicBullets && (t = A(w[0], r.isHorizontal() ? "width" : "height", !0), u.forEach(function (e) {
              e.style[r.isHorizontal() ? "width" : "height"] = t * (i.dynamicMainBullets + 4) + "px";
            }), 1 < i.dynamicMainBullets && void 0 !== l && ((o += s - (l || 0)) > i.dynamicMainBullets - 1 ? o = i.dynamicMainBullets - 1 : o < 0 && (o = 0)), v = Math.max(s - o, 0), g = ((h = v + (Math.min(w.length, i.dynamicMainBullets) - 1)) + v) / 2), w.forEach(function (e) {
              var t,
                r = a(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
                  return "" + i.bulletActiveClass + e;
                })).map(function (e) {
                  return "string" == typeof e && e.includes(" ") ? e.split(" ") : e;
                }).flat();
              (t = e.classList).remove.apply(t, a(r));
            }), 1 < u.length) w.forEach(function (e) {
              var t,
                r,
                n = C(e);
              n === s && (t = e.classList).add.apply(t, a(i.bulletActiveClass.split(" "))), i.dynamicBullets && (n >= v && n <= h && (r = e.classList).add.apply(r, a((i.bulletActiveClass + "-main").split(" "))), n === v && p(e, "prev"), n === h) && p(e, "next");
            });else {
              var b,
                y = w[s];
              if (y && (b = y.classList).add.apply(b, a(i.bulletActiveClass.split(" "))), i.dynamicBullets) {
                for (var E = w[v], x = w[h], S = v; S <= h; S += 1) {
                  var T;
                  w[S] && (T = w[S].classList).add.apply(T, a((i.bulletActiveClass + "-main").split(" ")));
                }
                p(E, "prev"), p(x, "next");
              }
            }
            if (i.dynamicBullets) {
              var M = Math.min(w.length, i.dynamicMainBullets + 4),
                P = (t * M - t) / 2 - g * t,
                L = e ? "right" : "left";
              w.forEach(function (e) {
                e.style[r.isHorizontal() ? L : "top"] = P + "px";
              });
            }
          }
          u.forEach(function (e, t) {
            if ("fraction" === i.type && (e.querySelectorAll(U(i.currentClass)).forEach(function (e) {
              e.textContent = i.formatFractionCurrent(s + 1);
            }), e.querySelectorAll(U(i.totalClass)).forEach(function (e) {
              e.textContent = i.formatFractionTotal(m);
            })), "progressbar" === i.type) {
              var a = i.progressbarOpposite ? r.isHorizontal() ? "vertical" : "horizontal" : r.isHorizontal() ? "horizontal" : "vertical",
                l = (s + 1) / m,
                o = 1,
                d = 1;
              "horizontal" == a ? o = l : d = l, e.querySelectorAll(U(i.progressbarFillClass)).forEach(function (e) {
                e.style.transform = "translate3d(0,0,0) scaleX(".concat(o, ") scaleY(").concat(d, ")"), e.style.transitionDuration = r.params.speed + "ms";
              });
            }
            "custom" === i.type && i.renderCustom ? (e.innerHTML = i.renderCustom(r, s + 1, m), 0 === t && n("paginationRender", e)) : (0 === t && n("paginationRender", e), n("paginationUpdate", e)), r.params.watchOverflow && r.enabled && e.classList[r.isLocked ? "add" : "remove"](i.lockClass);
          });
        }
      }
      function m() {
        var e = r.params.pagination;
        if (!c()) {
          var t = (r.virtual && r.params.virtual.enabled ? r.virtual : r).slides.length,
            i = r.pagination.el,
            s = (i = d(i), "");
          if ("bullets" === e.type) {
            var l = r.params.loop ? Math.ceil(t / r.params.slidesPerGroup) : r.snapGrid.length;
            r.params.freeMode && r.params.freeMode.enabled && l > t && (l = t);
            for (var o = 0; o < l; o += 1) e.renderBullet ? s += e.renderBullet.call(r, o, e.bulletClass) : s += "<".concat(e.bulletElement, ' class="').concat(e.bulletClass, '"></').concat(e.bulletElement, ">");
          }
          "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(r, e.currentClass, e.totalClass) : '<span class="'.concat(e.currentClass, '"></span> / <span class="').concat(e.totalClass, '"></span>')), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(r, e.progressbarFillClass) : '<span class="'.concat(e.progressbarFillClass, '"></span>')), r.pagination.bullets = [], i.forEach(function (t) {
            var i;
            "custom" !== e.type && (t.innerHTML = s || ""), "bullets" === e.type && (i = r.pagination.bullets).push.apply(i, a(t.querySelectorAll(U(e.bulletClass))));
          }), "custom" !== e.type && n("paginationRender", i[0]);
        }
      }
      function v() {
        r.params.pagination = W(r, r.originalParams.pagination, r.params.pagination, {
          el: "swiper-pagination"
        });
        var e,
          t = r.params.pagination;
        t.el && (e = (e = (e = "string" == typeof t.el && r.isElement ? r.el.shadowRoot.querySelector(t.el) : e) || "string" != typeof t.el ? e : a(document.querySelectorAll(t.el))) || t.el) && 0 !== e.length && (r.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(e) && 1 < e.length && 1 < (e = a(r.el.querySelectorAll(t.el))).length && (e = e.filter(function (e) {
          return P(e, ".swiper")[0] === r.el;
        })[0]), Array.isArray(e) && 1 === e.length && (e = e[0]), Object.assign(r.pagination, {
          el: e
        }), (e = d(e)).forEach(function (e) {
          "bullets" === t.type && t.clickable && e.classList.add(t.clickableClass), e.classList.add(t.modifierClass + t.type), e.classList.add(r.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (e.classList.add("" + t.modifierClass + t.type + "-dynamic"), o = 0, t.dynamicMainBullets < 1) && (t.dynamicMainBullets = 1), "progressbar" === t.type && t.progressbarOpposite && e.classList.add(t.progressbarOppositeClass), t.clickable && e.addEventListener("click", u), r.enabled || e.classList.add(t.lockClass);
        }));
      }
      function h() {
        var e,
          t = r.params.pagination;
        c() || ((e = r.pagination.el) && (e = d(e)).forEach(function (e) {
          e.classList.remove(t.hiddenClass), e.classList.remove(t.modifierClass + t.type), e.classList.remove(r.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && e.removeEventListener("click", u);
        }), r.pagination.bullets && r.pagination.bullets.forEach(function (e) {
          var r;
          return (r = e.classList).remove.apply(r, a(t.bulletActiveClass.split(" ")));
        }));
      }
      s("changeDirection", function () {
        if (r.pagination && r.pagination.el) {
          var e = r.params.pagination,
            t = r.pagination.el;
          (t = d(t)).forEach(function (t) {
            t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(r.isHorizontal() ? e.horizontalClass : e.verticalClass);
          });
        }
      }), s("init", function () {
        (!1 === r.params.pagination.enabled ? g : (v(), m(), f))();
      }), s("activeIndexChange", function () {
        void 0 === r.snapIndex && f();
      }), s("snapIndexChange", function () {
        f();
      }), s("snapGridLengthChange", function () {
        m(), f();
      }), s("destroy", function () {
        h();
      }), s("enable disable", function () {
        var e = r.pagination.el;
        e && (e = d(e)).forEach(function (e) {
          return e.classList[r.enabled ? "remove" : "add"](r.params.pagination.lockClass);
        });
      }), s("lock unlock", function () {
        f();
      }), s("click", function (e, t) {
        t = t.target;
        var a = r.pagination.el;
        if (Array.isArray(a) || (a = [a].filter(function (e) {
          return !!e;
        })), r.params.pagination.el && r.params.pagination.hideOnClick && a && 0 < a.length && !t.classList.contains(r.params.pagination.bulletClass) && (!r.navigation || !(r.navigation.nextEl && t === r.navigation.nextEl || r.navigation.prevEl && t === r.navigation.prevEl))) {
          var i = a[0].classList.contains(r.params.pagination.hiddenClass);
          n(!0 === i ? "paginationShow" : "paginationHide"), a.forEach(function (e) {
            return e.classList.toggle(r.params.pagination.hiddenClass);
          });
        }
      });
      var g = function () {
        r.el.classList.add(r.params.pagination.paginationDisabledClass);
        var e = r.pagination.el;
        e && (e = d(e)).forEach(function (e) {
          return e.classList.add(r.params.pagination.paginationDisabledClass);
        }), h();
      };
      Object.assign(r.pagination, {
        enable: function () {
          r.el.classList.remove(r.params.pagination.paginationDisabledClass);
          var e = r.pagination.el;
          e && (e = d(e)).forEach(function (e) {
            return e.classList.remove(r.params.pagination.paginationDisabledClass);
          }), v(), m(), f();
        },
        disable: g,
        render: m,
        update: f,
        init: v,
        destroy: h
      });
    }, function (e) {
      var t,
        a,
        r,
        i,
        s = e.swiper,
        n = e.extendParams,
        l = e.on,
        d = e.emit,
        c = o(),
        p = !1,
        u = null,
        f = null;
      function v() {
        if (s.params.scrollbar.el && s.scrollbar.el) {
          var e = s.scrollbar,
            t = s.rtlTranslate,
            i = e.dragEl,
            n = e.el,
            l = s.params.scrollbar,
            o = s.params.loop ? s.progressLoop : s.progress,
            d = a,
            c = (r - a) * o;
          t ? 0 < (c = -c) ? (d = a - c, c = 0) : -c + a > r && (d = r + c) : c < 0 ? (d = a + c, c = 0) : c + a > r && (d = r - c), s.isHorizontal() ? (i.style.transform = "translate3d(".concat(c, "px, 0, 0)"), i.style.width = d + "px") : (i.style.transform = "translate3d(0px, ".concat(c, "px, 0)"), i.style.height = d + "px"), l.hide && (clearTimeout(u), n.style.opacity = 1, u = setTimeout(function () {
            n.style.opacity = 0, n.style.transitionDuration = "400ms";
          }, 1e3));
        }
      }
      function h() {
        var e, t, n, l;
        s.params.scrollbar.el && s.scrollbar.el && (n = (e = t = s.scrollbar).dragEl, l = e.el, n.style.width = "", n.style.height = "", r = s.isHorizontal() ? l.offsetWidth : l.offsetHeight, i = s.size / (s.virtualSize + s.params.slidesOffsetBefore - (s.params.centeredSlides ? s.snapGrid[0] : 0)), a = "auto" === s.params.scrollbar.dragSize ? r * i : parseInt(s.params.scrollbar.dragSize, 10), s.isHorizontal() ? n.style.width = a + "px" : n.style.height = a + "px", l.style.display = 1 <= i ? "none" : "", s.params.scrollbar.hide && (l.style.opacity = 0), s.params.watchOverflow) && s.enabled && t.el.classList[s.isLocked ? "add" : "remove"](s.params.scrollbar.lockClass);
      }
      function g(e) {
        return s.isHorizontal() ? e.clientX : e.clientY;
      }
      function w(e) {
        var i,
          n = s.scrollbar,
          l = s.rtlTranslate;
        n = n.el, i = (g(e) - T(n)[s.isHorizontal() ? "left" : "top"] - (null !== t ? t : a / 2)) / (r - a), i = Math.max(Math.min(i, 1), 0), l && (i = 1 - i), e = s.minTranslate() + (s.maxTranslate() - s.minTranslate()) * i, s.updateProgress(e), s.setTranslate(e), s.updateActiveIndex(), s.updateSlidesClasses();
      }
      function b(e) {
        var a = s.params.scrollbar,
          r = s.scrollbar,
          i = s.wrapperEl,
          n = r,
          l = (r = n.el, n.dragEl);
        p = !0, t = e.target === l ? g(e) - e.target.getBoundingClientRect()[s.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", l.style.transitionDuration = "100ms", w(e), clearTimeout(f), r.style.transitionDuration = "0ms", a.hide && (r.style.opacity = 1), s.params.cssMode && (s.wrapperEl.style["scroll-snap-type"] = "none"), d("scrollbarDragStart", e);
      }
      function y(e) {
        var t = s.scrollbar,
          a = s.wrapperEl,
          r = t,
          i = (t = r.el, r.dragEl);
        p && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, w(e), a.style.transitionDuration = "0ms", t.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", d("scrollbarDragMove", e));
      }
      function E(e) {
        var t = s.params.scrollbar,
          a = s.scrollbar,
          r = s.wrapperEl,
          i = a.el;
        p && (p = !1, s.params.cssMode && (s.wrapperEl.style["scroll-snap-type"] = "", r.style.transitionDuration = ""), t.hide && (clearTimeout(f), f = m(function () {
          i.style.opacity = 0, i.style.transitionDuration = "400ms";
        }, 1e3)), d("scrollbarDragEnd", e), t.snapOnRelease) && s.slideToClosest();
      }
      function x(e) {
        var t,
          a = s.scrollbar,
          r = s.params;
        (a = a.el) && (t = !!r.passiveListeners && {
          passive: !1,
          capture: !1
        }, r = !!r.passiveListeners && {
          passive: !0,
          capture: !1
        }, a) && (a[a = "on" === e ? "addEventListener" : "removeEventListener"]("pointerdown", b, t), c[a]("pointermove", y, t), c[a]("pointerup", E, r));
      }
      function M() {
        var e,
          t,
          a = s.scrollbar,
          r = s.el,
          i = (s.params.scrollbar = W(s, s.originalParams.scrollbar, s.params.scrollbar, {
            el: "swiper-scrollbar"
          }), s.params.scrollbar);
        i.el && (e = (e = "string" == typeof i.el && s.isElement ? s.el.shadowRoot.querySelector(i.el) : e) || "string" != typeof i.el ? e || i.el : c.querySelectorAll(i.el), (e = 0 < (e = s.params.uniqueNavElements && "string" == typeof i.el && 1 < e.length && 1 === r.querySelectorAll(i.el).length ? r.querySelector(i.el) : e).length ? e[0] : e).classList.add(s.isHorizontal() ? i.horizontalClass : i.verticalClass), e && ((t = e.querySelector("." + s.params.scrollbar.dragClass)) || (t = S("div", s.params.scrollbar.dragClass), e.append(t))), Object.assign(a, {
          el: e,
          dragEl: t
        }), i.draggable && s.params.scrollbar.el && s.scrollbar.el && x("on"), e && e.classList[s.enabled ? "remove" : "add"](s.params.scrollbar.lockClass));
      }
      function C() {
        var e = s.params.scrollbar,
          t = s.scrollbar.el;
        t && t.classList.remove(s.isHorizontal() ? e.horizontalClass : e.verticalClass), s.params.scrollbar.el && s.scrollbar.el && x("off");
      }
      n({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
          scrollbarDisabledClass: "swiper-scrollbar-disabled",
          horizontalClass: "swiper-scrollbar-horizontal",
          verticalClass: "swiper-scrollbar-vertical"
        }
      }), s.scrollbar = {
        el: null,
        dragEl: null
      }, l("init", function () {
        (!1 === s.params.scrollbar.enabled ? P : (M(), h(), v))();
      }), l("update resize observerUpdate lock unlock", function () {
        h();
      }), l("setTranslate", function () {
        v();
      }), l("setTransition", function (e, t) {
        s.params.scrollbar.el && s.scrollbar.el && (s.scrollbar.dragEl.style.transitionDuration = t + "ms");
      }), l("enable disable", function () {
        var e = s.scrollbar.el;
        e && e.classList[s.enabled ? "remove" : "add"](s.params.scrollbar.lockClass);
      }), l("destroy", function () {
        C();
      });
      var P = function () {
        s.el.classList.add(s.params.scrollbar.scrollbarDisabledClass), s.scrollbar.el && s.scrollbar.el.classList.add(s.params.scrollbar.scrollbarDisabledClass), C();
      };
      Object.assign(s.scrollbar, {
        enable: function () {
          s.el.classList.remove(s.params.scrollbar.scrollbarDisabledClass), s.scrollbar.el && s.scrollbar.el.classList.remove(s.params.scrollbar.scrollbarDisabledClass), M(), h(), v();
        },
        disable: P,
        updateSize: h,
        setTranslate: v,
        init: M,
        destroy: C
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        parallax: {
          enabled: !1
        }
      });
      var i = function (e, a) {
          var r = (r = t.rtl) ? -1 : 1,
            i = e.getAttribute("data-swiper-parallax") || "0",
            s = e.getAttribute("data-swiper-parallax-x"),
            n = e.getAttribute("data-swiper-parallax-y"),
            l = e.getAttribute("data-swiper-parallax-scale"),
            o = e.getAttribute("data-swiper-parallax-opacity"),
            d = e.getAttribute("data-swiper-parallax-rotate");
          if (s || n ? (s = s || "0", n = n || "0") : t.isHorizontal() ? (s = i, n = "0") : (n = i, s = "0"), s = 0 <= s.indexOf("%") ? parseInt(s, 10) * a * r + "%" : s * a * r + "px", n = 0 <= n.indexOf("%") ? parseInt(n, 10) * a + "%" : n * a + "px", null != o) {
            var c = o - (o - 1) * (1 - Math.abs(a));
            e.style.opacity = c;
          }
          var p = "translate3d(".concat(s, ", ").concat(n, ", 0px)");
          null != l && (p += " scale(".concat(l - (l - 1) * (1 - Math.abs(a)), ")")), d && null != d && (p += " rotate(".concat(d * a * -1, "deg)")), e.style.transform = p;
        },
        s = function () {
          var e = t.el,
            a = t.slides,
            r = t.progress,
            s = t.snapGrid;
          x(e, "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(function (e) {
            i(e, r);
          }), a.forEach(function (e, a) {
            var n = e.progress;
            1 < t.params.slidesPerGroup && "auto" !== t.params.slidesPerView && (n += Math.ceil(a / 2) - r * (s.length - 1)), n = Math.min(Math.max(n, -1), 1), e.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach(function (e) {
              i(e, n);
            });
          });
        };
      r("beforeInit", function () {
        t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0);
      }), r("init", function () {
        t.params.parallax.enabled && s();
      }), r("setTranslate", function () {
        t.params.parallax.enabled && s();
      }), r("setTransition", function (e, a) {
        var r, i;
        t.params.parallax.enabled && (i = void 0 === (r = a) ? t.params.speed : r, t.el.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(function (e) {
          var t = parseInt(e.getAttribute("data-swiper-parallax-duration"), 10) || i;
          0 === i && (t = 0), e.style.transitionDuration = t + "ms";
        }));
      });
    }, function (t) {
      var r = t.swiper,
        i = t.extendParams,
        s = t.on,
        n = t.emit,
        l = f();
      i({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      }), r.zoom = {
        enabled: !1
      };
      var o,
        d,
        c = 1,
        p = !1,
        u = [],
        m = {
          originX: 0,
          originY: 0,
          slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          imageEl: void 0,
          imageWrapEl: void 0,
          maxRatio: 3
        },
        v = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
        },
        g = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0
        },
        w = 1;
      function b() {
        var e, t, a, r;
        return u.length < 2 ? 1 : (e = u[0].pageX, t = u[0].pageY, a = u[1].pageX, r = u[1].pageY, Math.sqrt(Math.pow(a - e, 2) + Math.pow(r - t, 2)));
      }
      function y(e) {
        var t = r.isElement ? "swiper-slide" : "." + r.params.slideClass;
        return e.target.matches(t) || 0 < r.slides.filter(function (t) {
          return t.contains(e.target);
        }).length;
      }
      function E(t) {
        if ("mouse" === t.pointerType && u.splice(0, u.length), y(t)) {
          var a = r.params.zoom;
          if (o = !1, d = !1, u.push(t), !(u.length < 2)) {
            if (o = !0, m.scaleStart = b(), !m.slideEl) {
              m.slideEl = t.target.closest(".".concat(r.params.slideClass, ", swiper-slide")), m.slideEl || (m.slideEl = r.slides[r.activeIndex]);
              var i = m.slideEl.querySelector("." + a.containerClass);
              if (i = i && i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0], m.imageEl = i, m.imageWrapEl = i ? P(m.imageEl, "." + a.containerClass)[0] : void 0, !m.imageWrapEl) return void (m.imageEl = void 0);
              m.maxRatio = m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio;
            }
            if (m.imageEl) {
              var s = e(u.length < 2 ? {
                  x: null,
                  y: null
                } : (a = m.imageEl.getBoundingClientRect(), [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - a.x) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - a.y) / c]), 2),
                n = s[0],
                l = s[1];
              m.originX = n, m.originY = l, m.imageEl.style.transitionDuration = "0ms";
            }
            p = !0;
          }
        }
      }
      function S(e) {
        var t, a, i;
        y(e) && (t = r.params.zoom, a = r.zoom, 0 <= (i = u.findIndex(function (t) {
          return t.pointerId === e.pointerId;
        })) && (u[i] = e), u.length < 2 || (d = !0, m.scaleMove = b(), m.imageEl && (a.scale = m.scaleMove / m.scaleStart * c, a.scale > m.maxRatio && (a.scale = m.maxRatio - 1 + Math.pow(a.scale - m.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), m.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(a.scale, ")"))));
      }
      function M(e) {
        var t, a, i;
        !y(e) || "mouse" === e.pointerType && "pointerout" === e.type || (t = r.params.zoom, a = r.zoom, 0 <= (i = u.findIndex(function (t) {
          return t.pointerId === e.pointerId;
        })) && u.splice(i, 1), o && d && (o = !1, d = !1, m.imageEl) && (a.scale = Math.max(Math.min(a.scale, m.maxRatio), t.minRatio), m.imageEl.style.transitionDuration = r.params.speed + "ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(a.scale, ")"), c = a.scale, p = !1, 1 < a.scale && m.slideEl ? m.slideEl.classList.add("" + t.zoomedSlideClass) : a.scale <= 1 && m.slideEl && m.slideEl.classList.remove("" + t.zoomedSlideClass), 1 === a.scale) && (m.originX = 0, m.originY = 0, m.slideEl = void 0));
      }
      function C(e) {
        if (y(e) && (t = e, i = "." + r.params.zoom.containerClass, t.target.matches(i) || 0 < a(r.el.querySelectorAll(i)).filter(function (e) {
          return e.contains(t.target);
        }).length)) {
          var t,
            i = r.zoom;
          if (m.imageEl && v.isTouched && m.slideEl) {
            v.isMoved || (v.width = m.imageEl.offsetWidth, v.height = m.imageEl.offsetHeight, v.startX = h(m.imageWrapEl, "x") || 0, v.startY = h(m.imageWrapEl, "y") || 0, m.slideWidth = m.slideEl.offsetWidth, m.slideHeight = m.slideEl.offsetHeight, m.imageWrapEl.style.transitionDuration = "0ms");
            var s = v.width * i.scale,
              n = v.height * i.scale;
            if (!(s < m.slideWidth && n < m.slideHeight)) {
              if (v.minX = Math.min(m.slideWidth / 2 - s / 2, 0), v.maxX = -v.minX, v.minY = Math.min(m.slideHeight / 2 - n / 2, 0), v.maxY = -v.minY, v.touchesCurrent.x = (0 < u.length ? u[0] : e).pageX, v.touchesCurrent.y = (0 < u.length ? u[0] : e).pageY, 5 < Math.max(Math.abs(v.touchesCurrent.x - v.touchesStart.x), Math.abs(v.touchesCurrent.y - v.touchesStart.y)) && (r.allowClick = !1), !v.isMoved && !p) {
                if (r.isHorizontal() && (Math.floor(v.minX) === Math.floor(v.startX) && v.touchesCurrent.x < v.touchesStart.x || Math.floor(v.maxX) === Math.floor(v.startX) && v.touchesCurrent.x > v.touchesStart.x)) return void (v.isTouched = !1);
                if (!r.isHorizontal() && (Math.floor(v.minY) === Math.floor(v.startY) && v.touchesCurrent.y < v.touchesStart.y || Math.floor(v.maxY) === Math.floor(v.startY) && v.touchesCurrent.y > v.touchesStart.y)) return void (v.isTouched = !1);
              }
              e.cancelable && e.preventDefault(), e.stopPropagation(), v.isMoved = !0, s = (i.scale - c) / (m.maxRatio - r.params.zoom.minRatio), n = m.originX, e = m.originY, v.currentX = v.touchesCurrent.x - v.touchesStart.x + v.startX + s * (v.width - 2 * n), v.currentY = v.touchesCurrent.y - v.touchesStart.y + v.startY + s * (v.height - 2 * e), v.currentX < v.minX && (v.currentX = v.minX + 1 - Math.pow(v.minX - v.currentX + 1, .8)), v.currentX > v.maxX && (v.currentX = v.maxX - 1 + Math.pow(v.currentX - v.maxX + 1, .8)), v.currentY < v.minY && (v.currentY = v.minY + 1 - Math.pow(v.minY - v.currentY + 1, .8)), v.currentY > v.maxY && (v.currentY = v.maxY - 1 + Math.pow(v.currentY - v.maxY + 1, .8)), g.prevPositionX || (g.prevPositionX = v.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = v.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (v.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (v.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(v.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(v.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = v.touchesCurrent.x, g.prevPositionY = v.touchesCurrent.y, g.prevTime = Date.now(), m.imageWrapEl.style.transform = "translate3d(".concat(v.currentX, "px, ").concat(v.currentY, "px,0)");
            }
          }
        }
      }
      function L() {
        var e = r.zoom;
        m.slideEl && r.activeIndex !== r.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"), m.slideEl.classList.remove("" + r.params.zoom.zoomedSlideClass), e.scale = 1, c = 1, m.slideEl = void 0, m.imageEl = void 0, m.imageWrapEl = void 0, m.originX = 0, m.originY = 0);
      }
      function A(e) {
        var t = r.zoom,
          a = r.params.zoom;
        if (!m.slideEl) {
          e && e.target && (m.slideEl = e.target.closest(".".concat(r.params.slideClass, ", swiper-slide"))), m.slideEl || (r.params.virtual && r.params.virtual.enabled && r.virtual ? m.slideEl = x(r.slidesEl, "." + r.params.slideActiveClass)[0] : m.slideEl = r.slides[r.activeIndex]);
          var i = m.slideEl.querySelector("." + a.containerClass);
          i = i && i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0], m.imageEl = i, m.imageWrapEl = i ? P(m.imageEl, "." + a.containerClass)[0] : void 0;
        }
        if (m.imageEl && m.imageWrapEl) {
          var s, n, o, d, p, u, f, h, g, w, b, y, E, S, M, C;
          r.params.cssMode && (r.wrapperEl.style.overflow = "hidden", r.wrapperEl.style.touchAction = "none"), m.slideEl.classList.add("" + a.zoomedSlideClass), n = void 0 === v.touchesStart.x && e ? (s = e.pageX, e.pageY) : (s = v.touchesStart.x, v.touchesStart.y);
          var L = "number" == typeof e ? e : null;
          1 === c && L && (s = void 0, n = void 0), t.scale = L || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio, c = L || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio, !e || 1 === c && L ? (p = 0, u = 0) : (M = m.slideEl.offsetWidth, C = m.slideEl.offsetHeight, o = T(m.slideEl).left + l.scrollX + M / 2 - s, d = T(m.slideEl).top + l.scrollY + C / 2 - n, f = m.imageEl.offsetWidth, h = m.imageEl.offsetHeight, g = f * t.scale, w = h * t.scale, E = -(b = Math.min(M / 2 - g / 2, 0)), S = -(y = Math.min(C / 2 - w / 2, 0)), (p = (p = o * t.scale) < b ? b : p) > E && (p = E), (u = (u = d * t.scale) < y ? y : u) > S && (u = S)), L && 1 === t.scale && (m.originX = 0, m.originY = 0), m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(".concat(p, "px, ").concat(u, "px,0)"), m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(t.scale, ")");
        }
      }
      function k() {
        var e = r.zoom,
          t = r.params.zoom;
        if (!m.slideEl) {
          r.params.virtual && r.params.virtual.enabled && r.virtual ? m.slideEl = x(r.slidesEl, "." + r.params.slideActiveClass)[0] : m.slideEl = r.slides[r.activeIndex];
          var a = m.slideEl.querySelector("." + t.containerClass);
          a = a && a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0], m.imageEl = a, m.imageWrapEl = a ? P(m.imageEl, "." + t.containerClass)[0] : void 0;
        }
        m.imageEl && m.imageWrapEl && (r.params.cssMode && (r.wrapperEl.style.overflow = "", r.wrapperEl.style.touchAction = ""), e.scale = 1, c = 1, m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(0,0,0)", m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(1)", m.slideEl.classList.remove("" + t.zoomedSlideClass), m.slideEl = void 0, m.originX = 0, m.originY = 0);
      }
      function z(e) {
        var t = r.zoom;
        t.scale && 1 !== t.scale ? k() : A(e);
      }
      function I() {
        return {
          passiveListener: !!r.params.passiveListeners && {
            passive: !0,
            capture: !1
          },
          activeListenerWithCapture: !r.params.passiveListeners || {
            passive: !1,
            capture: !0
          }
        };
      }
      function O() {
        var e = r.zoom;
        if (!e.enabled) {
          e.enabled = !0;
          var t = I(),
            a = t.passiveListener,
            i = t.activeListenerWithCapture;
          r.wrapperEl.addEventListener("pointerdown", E, a), r.wrapperEl.addEventListener("pointermove", S, i), ["pointerup", "pointercancel", "pointerout"].forEach(function (e) {
            r.wrapperEl.addEventListener(e, M, a);
          }), r.wrapperEl.addEventListener("pointermove", C, i);
        }
      }
      function D() {
        var e = r.zoom;
        if (e.enabled) {
          e.enabled = !1;
          var t = I(),
            a = t.passiveListener,
            i = t.activeListenerWithCapture;
          r.wrapperEl.removeEventListener("pointerdown", E, a), r.wrapperEl.removeEventListener("pointermove", S, i), ["pointerup", "pointercancel", "pointerout"].forEach(function (e) {
            r.wrapperEl.removeEventListener(e, M, a);
          }), r.wrapperEl.removeEventListener("pointermove", C, i);
        }
      }
      Object.defineProperty(r.zoom, "scale", {
        get: function () {
          return w;
        },
        set: function (e) {
          var t, a;
          w !== e && (t = m.imageEl, a = m.slideEl, n("zoomChange", e, t, a)), w = e;
        }
      }), s("init", function () {
        r.params.zoom.enabled && O();
      }), s("destroy", function () {
        D();
      }), s("touchStart", function (e, t) {
        var a;
        r.zoom.enabled && (a = r.device, m.imageEl) && !v.isTouched && (a.android && t.cancelable && t.preventDefault(), v.isTouched = !0, a = 0 < u.length ? u[0] : t, v.touchesStart.x = a.pageX, v.touchesStart.y = a.pageY);
      }), s("touchEnd", function (e, t) {
        if (r.zoom.enabled) {
          var a = r.zoom;
          if (m.imageEl) {
            if (!v.isTouched || !v.isMoved) return v.isTouched = !1, void (v.isMoved = !1);
            v.isTouched = !1, v.isMoved = !1;
            var i = 300,
              s = 300,
              n = g.x * i,
              l = (n = v.currentX + n, g.y * s),
              o = (l = v.currentY + l, 0 !== g.x && (i = Math.abs((n - v.currentX) / g.x)), 0 !== g.y && (s = Math.abs((l - v.currentY) / g.y)), Math.max(i, s));
            v.currentX = n, v.currentY = l, n = v.width * a.scale, l = v.height * a.scale, v.minX = Math.min(m.slideWidth / 2 - n / 2, 0), v.maxX = -v.minX, v.minY = Math.min(m.slideHeight / 2 - l / 2, 0), v.maxY = -v.minY, v.currentX = Math.max(Math.min(v.currentX, v.maxX), v.minX), v.currentY = Math.max(Math.min(v.currentY, v.maxY), v.minY), m.imageWrapEl.style.transitionDuration = o + "ms", m.imageWrapEl.style.transform = "translate3d(".concat(v.currentX, "px, ").concat(v.currentY, "px,0)");
          }
        }
      }), s("doubleTap", function (e, t) {
        !r.animating && r.params.zoom.enabled && r.zoom.enabled && r.params.zoom.toggle && z(t);
      }), s("transitionEnd", function () {
        r.zoom.enabled && r.params.zoom.enabled && L();
      }), s("slideChange", function () {
        r.zoom.enabled && r.params.zoom.enabled && r.params.cssMode && L();
      }), Object.assign(r.zoom, {
        enable: O,
        disable: D,
        in: A,
        out: k,
        toggle: z
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      function i(e, t) {
        var a,
          r,
          i = function () {
            var e, t, a;
            return function (r, i) {
              for (t = -1, e = r.length; 1 < e - t;) r[a = e + t >> 1] <= i ? t = a : e = a;
              return e;
            };
          }();
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (r = i(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0;
        }, this;
      }
      function s() {
        t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline);
      }
      a({
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      }), t.controller = {
        control: void 0
      }, r("beforeInit", function () {
        if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
          var e = document.querySelector(t.params.controller.control);
          e && e.swiper ? t.controller.control = e.swiper : e && e.addEventListener("init", function a(r) {
            t.controller.control = r.detail[0], t.update(), e.removeEventListener("init", a);
          });
        } else t.controller.control = t.params.controller.control;
      }), r("update", function () {
        s();
      }), r("resize", function () {
        s();
      }), r("observerUpdate", function () {
        s();
      }), r("setTranslate", function (e, a, r) {
        t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(a, r);
      }), r("setTransition", function (e, a, r) {
        t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(a, r);
      }), Object.assign(t.controller, {
        setTranslate: function (e, a) {
          var r,
            s,
            n = t.controller.control,
            l = t.constructor;
          function o(e) {
            var a, n;
            e.destroyed || (a = t.rtlTranslate ? -t.translate : t.translate, "slide" === t.params.controller.by && (n = e, t.controller.spline = t.params.loop ? new i(t.slidesGrid, n.slidesGrid) : new i(t.snapGrid, n.snapGrid), s = -t.controller.spline.interpolate(-a)), s && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(r) && Number.isFinite(r) || (r = 1), s = (a - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, t), e.updateActiveIndex(), e.updateSlidesClasses());
          }
          if (Array.isArray(n)) for (var d = 0; d < n.length; d += 1) n[d] !== a && n[d] instanceof l && o(n[d]);else n instanceof l && a !== n && o(n);
        },
        setTransition: function (e, a) {
          var r,
            i = t.constructor,
            s = t.controller.control;
          function n(a) {
            a.destroyed || (a.setTransition(e, t), 0 !== e && (a.transitionStart(), a.params.autoHeight && m(function () {
              a.updateAutoHeight();
            }), L(a.wrapperEl, function () {
              s && a.transitionEnd();
            })));
          }
          if (Array.isArray(s)) for (r = 0; r < s.length; r += 1) s[r] !== a && s[r] instanceof i && n(s[r]);else s instanceof i && a !== s && n(s);
        }
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null
        }
      }), t.a11y = {
        clicked: !1
      };
      var i = null;
      function s(e) {
        var t = i;
        0 !== t.length && (t.innerHTML = "", t.innerHTML = e);
      }
      var n = function (e) {
        return Array.isArray(e) ? e : [e].filter(function (e) {
          return !!e;
        });
      };
      function l(e) {
        (e = n(e)).forEach(function (e) {
          e.setAttribute("tabIndex", "0");
        });
      }
      function o(e) {
        (e = n(e)).forEach(function (e) {
          e.setAttribute("tabIndex", "-1");
        });
      }
      function d(e, t) {
        (e = n(e)).forEach(function (e) {
          e.setAttribute("role", t);
        });
      }
      function c(e, t) {
        (e = n(e)).forEach(function (e) {
          e.setAttribute("aria-roledescription", t);
        });
      }
      function p(e, t) {
        (e = n(e)).forEach(function (e) {
          e.setAttribute("aria-label", t);
        });
      }
      function u(e) {
        (e = n(e)).forEach(function (e) {
          e.setAttribute("aria-disabled", !0);
        });
      }
      function f(e) {
        (e = n(e)).forEach(function (e) {
          e.setAttribute("aria-disabled", !1);
        });
      }
      function m(e) {
        var a, r;
        13 !== e.keyCode && 32 !== e.keyCode || (a = t.params.a11y, r = e.target, t.pagination && t.pagination.el && (r === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(U(t.params.pagination.bulletClass))) || (t.navigation && t.navigation.nextEl && r === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? s(a.lastSlideMessage) : s(a.nextSlideMessage)), t.navigation && t.navigation.prevEl && r === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? s(a.firstSlideMessage) : s(a.prevSlideMessage)), t.pagination && r.matches(U(t.params.pagination.bulletClass)) && r.click());
      }
      function v() {
        return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
      }
      function h() {
        return v() && t.params.pagination.clickable;
      }
      var g = function (e, t, a) {
          var r;
          l(e), "BUTTON" !== e.tagName && (d(e, "button"), e.addEventListener("keydown", m)), p(e, a), r = t, (a = n(a = e)).forEach(function (e) {
            e.setAttribute("aria-controls", r);
          });
        },
        w = function () {
          t.a11y.clicked = !0;
        },
        b = function () {
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              t.destroyed || (t.a11y.clicked = !1);
            });
          });
        },
        y = function (e) {
          var a, r, i;
          t.a11y.clicked || (a = e.target.closest(".".concat(t.params.slideClass, ", swiper-slide"))) && t.slides.includes(a) && (r = t.slides.indexOf(a) === t.activeIndex, i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(a), r || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(a), 0)));
        },
        E = function () {
          var e = t.params.a11y,
            a = (e.itemRoleDescriptionMessage && c(t.slides, e.itemRoleDescriptionMessage), e.slideRole && d(t.slides, e.slideRole), t.slides.length);
          e.slideLabelMessage && t.slides.forEach(function (r, i) {
            i = t.params.loop ? parseInt(r.getAttribute("data-swiper-slide-index"), 10) : i, p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, i + 1).replace(/\{\{slidesLength\}\}/, a));
          });
        };
      r("beforeInit", function () {
        (i = S("span", t.params.a11y.notificationClass)).setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), t.isElement && i.setAttribute("slot", "container-end");
      }), r("afterInit", function () {
        if (t.params.a11y.enabled) {
          var e = t.params.a11y;
          t.el.append(i);
          var a,
            r,
            s = t.el;
          e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
          var l = t.wrapperEl,
            o = e.id || l.getAttribute("id") || "swiper-wrapper-" + "x".repeat(16).replace(/x/g, function () {
              return Math.round(16 * Math.random()).toString(16);
            }),
            d = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          a = o, n(l).forEach(function (e) {
            e.setAttribute("id", a);
          }), r = d, (s = n(s = l)).forEach(function (e) {
            e.setAttribute("aria-live", r);
          }), E();
          var u = t.navigation || {},
            f = (s = u.nextEl, u.prevEl);
          s = n(s), f = n(f), s && s.forEach(function (t) {
            return g(t, o, e.nextSlideMessage);
          }), f && f.forEach(function (t) {
            return g(t, o, e.prevSlideMessage);
          }), h() && (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach(function (e) {
            e.addEventListener("keydown", m);
          }), t.el.addEventListener("focus", y, !0), t.el.addEventListener("pointerdown", w, !0), t.el.addEventListener("pointerup", b, !0);
        }
      }), r("slidesLengthChange snapGridLengthChange slidesGridLengthChange", function () {
        t.params.a11y.enabled && E();
      }), r("fromEdge toEdge afterInit lock unlock", function () {
        var e, a, r;
        t.params.a11y.enabled && !t.params.loop && !t.params.rewind && t.navigation && (a = (e = t.navigation).nextEl, (r = e.prevEl) && (t.isBeginning ? (u(r), o) : (f(r), l))(r), a) && (t.isEnd ? (u(a), o) : (f(a), l))(a);
      }), r("paginationUpdate", function () {
        if (t.params.a11y.enabled) {
          var e = t.params.a11y;
          v() && t.pagination.bullets.forEach(function (a) {
            t.params.pagination.clickable && (l(a), t.params.pagination.renderBullet || (d(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, C(a) + 1)))), a.matches(U(t.params.pagination.bulletActiveClass)) ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current");
          });
        }
      }), r("destroy", function () {
        var e, a, r;
        t.params.a11y.enabled && (i && 0 < i.length && i.remove(), a = (e = t.navigation || {}).nextEl, r = e.prevEl, a = n(a), r = n(r), a && a.forEach(function (e) {
          return e.removeEventListener("keydown", m);
        }), r && r.forEach(function (e) {
          return e.removeEventListener("keydown", m);
        }), h() && (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach(function (e) {
          e.removeEventListener("keydown", m);
        }), t.el.removeEventListener("focus", y, !0), t.el.removeEventListener("pointerdown", w, !0), t.el.removeEventListener("pointerup", b, !0));
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides",
          keepQuery: !1
        }
      });
      var i = !1,
        s = {},
        n = function (e) {
          return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        },
        l = function (e) {
          var t = f();
          return {
            key: (e = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
              return "" !== e;
            }))[(t = e.length) - 2],
            value: e[t - 1]
          };
        },
        o = function (e, a) {
          var r = f();
          if (i && t.params.history.enabled) {
            var s = t.params.url ? new URL(t.params.url) : r.location,
              l = (a = t.slides[a], n(a.getAttribute("data-history")));
            if (0 < t.params.history.root.length) {
              var o = t.params.history.root;
              "/" === o[o.length - 1] && (o = o.slice(0, o.length - 1)), l = o + "/" + (e ? e + "/" : "") + l;
            } else s.pathname.includes(e) || (l = (e ? e + "/" : "") + l);
            t.params.history.keepQuery && (l += s.search), (a = r.history.state) && a.value === l || (t.params.history.replaceState ? r.history.replaceState({
              value: l
            }, null, l) : r.history.pushState({
              value: l
            }, null, l));
          }
        },
        d = function (e, a, r) {
          if (a) for (var i = 0, s = t.slides.length; i < s; i += 1) {
            var l = t.slides[i];
            if (n(l.getAttribute("data-history")) === a) {
              var o = t.getSlideIndex(l);
              t.slideTo(o, e, r);
            }
          } else t.slideTo(0, e, r);
        },
        c = function () {
          s = l(t.params.url), d(t.params.speed, s.value, !1);
        };
      r("init", function () {
        var e;
        t.params.history.enabled && (e = f(), t.params.history) && (e.history && e.history.pushState ? (i = !0, ((s = l(t.params.url)).key || s.value) && d(0, s.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", c)) : (t.params.history.enabled = !1, t.params.hashNavigation.enabled = !0));
      }), r("destroy", function () {
        var e;
        t.params.history.enabled && (e = f(), t.params.history.replaceState || e.removeEventListener("popstate", c));
      }), r("transitionEnd _freeModeNoMomentumRelease", function () {
        i && o(t.params.history.key, t.activeIndex);
      }), r("slideChange", function () {
        i && t.params.cssMode && o(t.params.history.key, t.activeIndex);
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.emit,
        i = e.on,
        s = !1,
        n = o(),
        l = f(),
        d = (a({
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1,
            getSlideIndex: function (e, a) {
              if (t.virtual && t.params.virtual.enabled) {
                var r = t.slides.filter(function (e) {
                  return e.getAttribute("data-hash") === a;
                })[0];
                return r ? parseInt(r.getAttribute("data-swiper-slide-index"), 10) : 0;
              }
              return t.getSlideIndex(x(t.slidesEl, ".".concat(t.params.slideClass, '[data-hash="').concat(a, '"], swiper-slide[data-hash="').concat(a, '"]'))[0]);
            }
          }
        }), function () {
          r("hashChange");
          var e = n.location.hash.replace("#", ""),
            a = t.slidesEl.querySelector('[data-swiper-slide-index="'.concat(t.activeIndex, '"]'));
          if (e !== (a ? a.getAttribute("data-hash") : "")) {
            var i = t.params.hashNavigation.getSlideIndex(t, e);
            console.log(i), void 0 !== i && t.slideTo(i);
          }
        }),
        c = function () {
          var e;
          s && t.params.hashNavigation.enabled && (e = (e = t.slidesEl.querySelector('[data-swiper-slide-index="'.concat(t.activeIndex, '"]'))) ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "", t.params.hashNavigation.replaceState && l.history && l.history.replaceState ? l.history.replaceState(null, null, "#" + e || 0) : n.location.hash = e || "", r("hashSet"));
        };
      i("init", function () {
        var e;
        !t.params.hashNavigation.enabled || !t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled || (s = !0, (e = n.location.hash.replace("#", "")) && (e = t.params.hashNavigation.getSlideIndex(t, e), t.slideTo(e || 0, 0, t.params.runCallbacksOnInit, !0)), t.params.hashNavigation.watchState && l.addEventListener("hashchange", d));
      }), i("destroy", function () {
        t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && l.removeEventListener("hashchange", d);
      }), i("transitionEnd _freeModeNoMomentumRelease", function () {
        s && c();
      }), i("slideChange", function () {
        s && t.params.cssMode && c();
      });
    }, function (e) {
      var t,
        a,
        r = e.swiper,
        i = e.extendParams,
        s = e.on,
        n = e.emit,
        l = e.params;
      i({
        autoplay: {
          enabled: !(r.autoplay = {
            running: !1,
            paused: !1,
            timeLeft: 0
          }),
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1
        }
      });
      var d,
        c,
        p,
        u,
        f,
        m,
        v,
        h = l && l.autoplay ? l.autoplay.delay : 3e3,
        g = l && l.autoplay ? l.autoplay.delay : 3e3,
        w = new Date().getTime;
      function b(e) {
        r && !r.destroyed && r.wrapperEl && e.target === r.wrapperEl && (r.wrapperEl.removeEventListener("transitionend", b), M());
      }
      var y = function e() {
          var t;
          !r.destroyed && r.autoplay.running && (r.autoplay.paused ? c = !0 : c && (g = d, c = !1), t = r.autoplay.paused ? d : w + g - new Date().getTime(), r.autoplay.timeLeft = t, n("autoplayTimeLeft", t, t / h), a = requestAnimationFrame(function () {
            e();
          }));
        },
        E = function e(i) {
          if (!r.destroyed && r.autoplay.running) {
            cancelAnimationFrame(a), y();
            var s = void 0 === i ? r.params.autoplay.delay : i;
            h = r.params.autoplay.delay, g = r.params.autoplay.delay;
            var l = function () {
              var e = r.virtual && r.params.virtual.enabled ? r.slides.filter(function (e) {
                return e.classList.contains("swiper-slide-active");
              })[0] : r.slides[r.activeIndex];
              if (e) return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
            }();
            !Number.isNaN(l) && 0 < l && void 0 === i && (s = l, h = l, g = l), d = s;
            var o = r.params.speed,
              c = function () {
                r && !r.destroyed && (r.params.autoplay.reverseDirection ? !r.isBeginning || r.params.loop || r.params.rewind ? (r.slidePrev(o, !0, !0), n("autoplay")) : r.params.autoplay.stopOnLastSlide || (r.slideTo(r.slides.length - 1, o, !0, !0), n("autoplay")) : !r.isEnd || r.params.loop || r.params.rewind ? (r.slideNext(o, !0, !0), n("autoplay")) : r.params.autoplay.stopOnLastSlide || (r.slideTo(0, o, !0, !0), n("autoplay")), r.params.cssMode) && (w = new Date().getTime(), requestAnimationFrame(function () {
                  e();
                }));
              };
            return 0 < s ? (clearTimeout(t), t = setTimeout(function () {
              c();
            }, s)) : requestAnimationFrame(function () {
              c();
            }), s;
          }
        },
        x = function () {
          r.autoplay.running = !0, E(), n("autoplayStart");
        },
        S = function () {
          r.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(a), n("autoplayStop");
        },
        T = function (e, a) {
          !r.destroyed && r.autoplay.running && (clearTimeout(t), e || (v = !0), e = function () {
            n("autoplayPause"), r.params.autoplay.waitForTransition ? r.wrapperEl.addEventListener("transitionend", b) : M();
          }, r.autoplay.paused = !0, a ? (m && (d = r.params.autoplay.delay), m = !1, e()) : (a = d || r.params.autoplay.delay, d = a - (new Date().getTime() - w), r.isEnd && d < 0 && !r.params.loop || (d < 0 && (d = 0), e())));
        },
        M = function () {
          r.isEnd && d < 0 && !r.params.loop || r.destroyed || !r.autoplay.running || (w = new Date().getTime(), v ? (v = !1, E(d)) : E(), r.autoplay.paused = !1, n("autoplayResume"));
        },
        C = function () {
          var e;
          !r.destroyed && r.autoplay.running && ("hidden" === (e = o()).visibilityState && (v = !0, T(!0)), "visible" === e.visibilityState) && M();
        },
        P = function (e) {
          "mouse" === e.pointerType && (v = !0, T(!0));
        },
        L = function (e) {
          "mouse" === e.pointerType && r.autoplay.paused && M();
        };
      s("init", function () {
        r.params.autoplay.enabled && (r.params.autoplay.pauseOnMouseEnter && (r.el.addEventListener("pointerenter", P), r.el.addEventListener("pointerleave", L)), o().addEventListener("visibilitychange", C), w = new Date().getTime(), x());
      }), s("destroy", function () {
        r.el.removeEventListener("pointerenter", P), r.el.removeEventListener("pointerleave", L), o().removeEventListener("visibilitychange", C), r.autoplay.running && S();
      }), s("beforeTransitionStart", function (e, t, a) {
        !r.destroyed && r.autoplay.running && (a || !r.params.autoplay.disableOnInteraction ? T(!0, !0) : S());
      }), s("sliderFirstMove", function () {
        !r.destroyed && r.autoplay.running && (r.params.autoplay.disableOnInteraction ? S() : (p = !0, u = !1, v = !1, f = setTimeout(function () {
          v = !0, u = !0, T(!0);
        }, 200)));
      }), s("touchEnd", function () {
        !r.destroyed && r.autoplay.running && p && (clearTimeout(f), clearTimeout(t), r.params.autoplay.disableOnInteraction || u && r.params.cssMode && M(), u = !1, p = !1);
      }), s("slideChange", function () {
        !r.destroyed && r.autoplay.running && (m = !0);
      }), Object.assign(r.autoplay, {
        start: x,
        stop: S,
        pause: T,
        resume: M
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs"
        }
      });
      var i = !1,
        s = !1;
      function n() {
        var e,
          a,
          r = t.thumbs.swiper;
        !r || r.destroyed || (e = r.clickedIndex, (a = r.clickedSlide) && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) || null != e && (a = r.params.loop ? parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : e, t.params.loop ? t.slideToLoop(a) : t.slideTo(a));
      }
      function l() {
        var e = t.params.thumbs;
        if (i) return !1;
        i = !0;
        var a = t.constructor;
        return e.swiper instanceof a ? (t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), Object.assign(t.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), t.thumbs.swiper.update()) : g(e.swiper) && (e = Object.assign({}, e.swiper), Object.assign(e, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), t.thumbs.swiper = new a(e), s = !0), t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0;
      }
      function d(e) {
        var a = t.thumbs.swiper;
        if (a && !a.destroyed) {
          var r = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
            i = 1,
            s = t.params.thumbs.slideThumbActiveClass;
          if (1 < t.params.slidesPerView && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), a.slides.forEach(function (e) {
            return e.classList.remove(s);
          }), a.params.loop || a.params.virtual && a.params.virtual.enabled) for (var n = 0; n < i; n += 1) x(a.slidesEl, '[data-swiper-slide-index="'.concat(t.realIndex + n, '"]')).forEach(function (e) {
            e.classList.add(s);
          });else for (var l = 0; l < i; l += 1) a.slides[t.realIndex + l] && a.slides[t.realIndex + l].classList.add(s);
          var o = t.params.thumbs.autoScrollOffset,
            d = o && !a.params.loop;
          if (t.realIndex !== a.realIndex || d) {
            var c,
              p,
              u = a.activeIndex;
            if (a.params.loop) {
              var f = a.slides.filter(function (e) {
                return e.getAttribute("data-swiper-slide-index") === "" + t.realIndex;
              })[0];
              c = a.slides.indexOf(f), p = t.activeIndex > t.previousIndex ? "next" : "prev";
            } else p = (c = t.realIndex) > t.previousIndex ? "next" : "prev";
            d && (c += "next" === p ? o : -1 * o), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(c) < 0 && (a.params.centeredSlides ? c = c > u ? c - Math.floor(r / 2) + 1 : c + Math.floor(r / 2) - 1 : c > u && a.params.slidesPerGroup, a.slideTo(c, e ? 0 : void 0));
          }
        }
      }
      t.thumbs = {
        swiper: null
      }, r("beforeInit", function () {
        var e = t.params.thumbs;
        if (e && e.swiper) if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
          var a = o();
          requestAnimationFrame(function r() {
            t.destroyed || function () {
              var r = "string" == typeof e.swiper ? a.querySelector(e.swiper) : e.swiper;
              return r && r.swiper ? (e.swiper = r.swiper, l(), d(!0)) : r && r.addEventListener("init", function a(i) {
                e.swiper = i.detail[0], r.removeEventListener("init", a), l(), d(!0), e.swiper.update(), t.update();
              }), r;
            }() || requestAnimationFrame(r);
          });
        } else l(), d(!0);
      }), r("slideChange update resize observerUpdate", function () {
        d();
      }), r("setTransition", function (e, a) {
        var r = t.thumbs.swiper;
        r && !r.destroyed && r.setTransition(a);
      }), r("beforeDestroy", function () {
        var e = t.thumbs.swiper;
        e && !e.destroyed && s && e.destroy();
      }), Object.assign(t.thumbs, {
        init: l,
        update: d
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.emit,
        i = e.once;
      a({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: .02
        }
      }), Object.assign(t, {
        freeMode: {
          onTouchStart: function () {
            var e = t.getTranslate();
            t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
              currentPos: t.rtl ? t.translate : -t.translate
            });
          },
          onTouchMove: function () {
            var e = t.touchEventsData,
              a = t.touches;
            0 === e.velocities.length && e.velocities.push({
              position: a[t.isHorizontal() ? "startX" : "startY"],
              time: e.touchStartTime
            }), e.velocities.push({
              position: a[t.isHorizontal() ? "currentX" : "currentY"],
              time: v()
            });
          },
          onTouchEnd: function (e) {
            var a = e.currentPos,
              s = t.params,
              n = t.wrapperEl,
              l = t.rtlTranslate,
              o = t.snapGrid,
              d = t.touchEventsData,
              c = v() - d.touchStartTime;
            if (a < -t.minTranslate()) t.slideTo(t.activeIndex);else if (a > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);else {
              if (s.freeMode.momentum) {
                if (1 < d.velocities.length) {
                  var p = d.velocities.pop(),
                    u = d.velocities.pop(),
                    f = p.position - u.position,
                    m = p.time - u.time;
                  t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeMode.minimumVelocity && (t.velocity = 0), (150 < m || 300 < v() - p.time) && (t.velocity = 0);
                } else t.velocity = 0;
                t.velocity *= s.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                var h = 1e3 * s.freeMode.momentumRatio,
                  g = t.velocity * h,
                  w = t.translate + g;
                l && (w = -w);
                var b,
                  y,
                  E = !1;
                if (a = 20 * Math.abs(t.velocity) * s.freeMode.momentumBounceRatio, w < t.maxTranslate()) s.freeMode.momentumBounce ? (w + t.maxTranslate() < -a && (w = t.maxTranslate() - a), b = t.maxTranslate(), E = !0, d.allowMomentumBounce = !0) : w = t.maxTranslate(), s.loop && s.centeredSlides && (y = !0);else if (w > t.minTranslate()) s.freeMode.momentumBounce ? (w - t.minTranslate() > a && (w = t.minTranslate() + a), b = t.minTranslate(), E = !0, d.allowMomentumBounce = !0) : w = t.minTranslate(), s.loop && s.centeredSlides && (y = !0);else if (s.freeMode.sticky) {
                  for (var x, S = 0; S < o.length; S += 1) if (o[S] > -w) {
                    x = S;
                    break;
                  }
                  w = -(w = Math.abs(o[x] - w) < Math.abs(o[x - 1] - w) || "next" === t.swipeDirection ? o[x] : o[x - 1]);
                }
                if (y && i("transitionEnd", function () {
                  t.loopFix();
                }), 0 !== t.velocity) {
                  if (h = l ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), s.freeMode.sticky) {
                    var T = Math.abs((l ? -w : w) - t.translate),
                      M = t.slidesSizesGrid[t.activeIndex];
                    h = T < M ? s.speed : T < 2 * M ? 1.5 * s.speed : 2.5 * s.speed;
                  }
                } else if (s.freeMode.sticky) return void t.slideToClosest();
                s.freeMode.momentumBounce && E ? (t.updateProgress(b), t.setTransition(h), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, L(n, function () {
                  t && !t.destroyed && d.allowMomentumBounce && (r("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
                    t.setTranslate(b), L(n, function () {
                      t && !t.destroyed && t.transitionEnd();
                    });
                  }, 0));
                })) : t.velocity ? (r("_freeModeNoMomentumRelease"), t.updateProgress(w), t.setTransition(h), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, L(n, function () {
                  t && !t.destroyed && t.transitionEnd();
                }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses();
              } else {
                if (s.freeMode.sticky) return void t.slideToClosest();
                s.freeMode && r("_freeModeNoMomentumRelease");
              }
              (!s.freeMode.momentum || c >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
            }
          }
        }
      });
    }, function (e) {
      var t,
        a,
        r,
        i = e.swiper;
      (0, e.extendParams)({
        grid: {
          rows: 1,
          fill: "column"
        }
      }), i.grid = {
        initSlides: function (e) {
          var s = i.params.slidesPerView,
            n = i.params.grid,
            l = n.rows,
            o = n.fill;
          a = t / l, r = Math.floor(e / l), t = Math.floor(e / l) === e / l ? e : Math.ceil(e / l) * l, "auto" !== s && "row" === o && (t = Math.max(t, s * l));
        },
        updateSlide: function (e, s, n, l) {
          var o,
            d,
            c,
            p = i.params,
            u = p.slidesPerGroup,
            f = p.spaceBetween,
            m = i.params.grid,
            v = m.rows,
            h = m.fill;
          if ("row" === h && 1 < u) {
            var g = Math.floor(e / (u * v)),
              w = e - v * u * g,
              b = 0 === g ? u : Math.min(Math.ceil((n - g * v * u) / v), u);
            o = (d = w - (c = Math.floor(w / b)) * b + g * u) + c * t / v, s.style.order = o;
          } else "column" === h ? (c = e - (d = Math.floor(e / v)) * v, (d > r || d === r && c === v - 1) && (c += 1) >= v && (c = 0, d += 1)) : d = e - (c = Math.floor(e / a)) * a;
          s.style[l("margin-top")] = 0 !== c ? f && f + "px" : "";
        },
        updateWrapperSize: function (e, a, r) {
          var s = i.params,
            n = s.spaceBetween,
            l = s.centeredSlides,
            o = s.roundLengths,
            d = i.params.grid.rows;
          if (i.virtualSize = (e + n) * t, i.virtualSize = Math.ceil(i.virtualSize / d) - n, i.wrapperEl.style[r("width")] = i.virtualSize + n + "px", l) {
            for (var c = [], p = 0; p < a.length; p += 1) {
              var u = a[p];
              o && (u = Math.floor(u)), a[p] < i.virtualSize + a[0] && c.push(u);
            }
            a.splice(0, a.length), a.push.apply(a, c);
          }
        }
      };
    }, function (e) {
      var t = e.swiper;
      Object.assign(t, {
        appendSlide: function (e) {
          var t = this,
            a = t.params,
            r = t.slidesEl;
          a.loop && t.loopDestroy();
          var i = function (e) {
            var t;
            "string" == typeof e ? ((t = document.createElement("div")).innerHTML = e, r.append(t.children[0]), t.innerHTML = "") : r.append(e);
          };
          if ("object" == l(e) && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && i(e[s]);else i(e);
          t.recalcSlides(), a.loop && t.loopCreate(), a.observer && !t.isElement || t.update();
        }.bind(t),
        prependSlide: function (e) {
          var t = this,
            a = t.params,
            r = t.activeIndex,
            i = t.slidesEl;
          a.loop && t.loopDestroy();
          var s = r + 1,
            n = function (e) {
              var t;
              "string" == typeof e ? ((t = document.createElement("div")).innerHTML = e, i.prepend(t.children[0]), t.innerHTML = "") : i.prepend(e);
            };
          if ("object" == l(e) && "length" in e) {
            for (var o = 0; o < e.length; o += 1) e[o] && n(e[o]);
            s = r + e.length;
          } else n(e);
          t.recalcSlides(), a.loop && t.loopCreate(), a.observer && !t.isElement || t.update(), t.slideTo(s, 0, !1);
        }.bind(t),
        addSlide: function (e, t) {
          var a = this,
            r = a.params,
            i = a.activeIndex,
            s = a.slidesEl,
            n = i;
          if (r.loop && (n -= a.loopedSlides, a.loopDestroy(), a.recalcSlides()), i = a.slides.length, e <= 0) a.prependSlide(t);else if (i <= e) a.appendSlide(t);else {
            for (var o = n > e ? n + 1 : n, d = [], c = i - 1; c >= e; --c) {
              var p = a.slides[c];
              p.remove(), d.unshift(p);
            }
            if ("object" == l(t) && "length" in t) {
              for (var u = 0; u < t.length; u += 1) t[u] && s.append(t[u]);
              o = n > e ? n + t.length : n;
            } else s.append(t);
            for (var f = 0; f < d.length; f += 1) s.append(d[f]);
            a.recalcSlides(), r.loop && a.loopCreate(), r.observer && !a.isElement || a.update(), r.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
          }
        }.bind(t),
        removeSlide: function (e) {
          var t = this,
            a = t.params,
            r = t.activeIndex;
          a.loop && (r -= t.loopedSlides, t.loopDestroy());
          var i,
            s = r;
          if ("object" == l(e) && "length" in e) for (var n = 0; n < e.length; n += 1) i = e[n], t.slides[i] && t.slides[i].remove(), i < s && --s;else i = e, t.slides[i] && t.slides[i].remove(), i < s && --s;
          s = Math.max(s, 0), t.recalcSlides(), a.loop && t.loopCreate(), a.observer && !t.isElement || t.update(), a.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1);
        }.bind(t),
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        }.bind(t)
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        fadeEffect: {
          crossFade: !1
        }
      }), K({
        effect: "fade",
        swiper: t,
        on: r,
        setTranslate: function () {
          var e = t.slides;
          t.params.fadeEffect;
          for (var a = 0; a < e.length; a += 1) {
            var r = t.slides[a],
              i = -r.swiperSlideOffset,
              s = (t.params.virtualTranslate || (i -= t.translate), 0);
            t.isHorizontal() || (s = i, i = 0);
            var n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(r.progress), 0) : 1 + Math.min(Math.max(r.progress, -1), 0),
              l = Z(0, r);
            l.style.opacity = n, l.style.transform = "translate3d(".concat(i, "px, ").concat(s, "px, 0px)");
          }
        },
        setTransition: function (e) {
          var a = t.slides.map(function (e) {
            return E(e);
          });
          a.forEach(function (t) {
            t.style.transitionDuration = e + "ms";
          }), $({
            swiper: t,
            duration: e,
            transformElements: a,
            allSlides: !0
          });
        },
        overwriteParams: function () {
          return {
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode
          };
        }
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      });
      var i = function (e, t, a) {
        var r = a ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
          i = a ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
        r || (r = S("div", "swiper-slide-shadow-" + (a ? "left" : "top")), e.append(r)), i || (i = S("div", "swiper-slide-shadow-" + (a ? "right" : "bottom")), e.append(i)), r && (r.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0));
      };
      K({
        effect: "cube",
        swiper: t,
        on: r,
        setTranslate: function () {
          var e,
            a = t.el,
            r = t.wrapperEl,
            s = t.slides,
            n = t.width,
            l = t.height,
            o = t.rtlTranslate,
            d = t.size,
            c = t.browser,
            p = t.params.cubeEffect,
            u = t.isHorizontal(),
            f = t.virtual && t.params.virtual.enabled,
            m = 0;
          p.shadow && (u ? ((e = t.slidesEl.querySelector(".swiper-cube-shadow")) || (e = S("div", "swiper-cube-shadow"), t.slidesEl.append(e)), e.style.height = n + "px") : (e = a.querySelector(".swiper-cube-shadow")) || (e = S("div", "swiper-cube-shadow"), a.append(e)));
          for (var v = 0; v < s.length; v += 1) {
            var h = s[v],
              g = v,
              w = 90 * (g = f ? parseInt(h.getAttribute("data-swiper-slide-index"), 10) : g),
              b = Math.floor(w / 360);
            o && (w = -w, b = Math.floor(-w / 360));
            var y = Math.max(Math.min(h.progress, 1), -1),
              E = 0,
              x = 0,
              T = 0;
            g % 4 == 0 ? (E = 4 * -b * d, T = 0) : (g - 1) % 4 == 0 ? (E = 0, T = 4 * -b * d) : (g - 2) % 4 == 0 ? (E = d + 4 * b * d, T = d) : (g - 3) % 4 == 0 && (E = -d, T = 3 * d + 4 * d * b), o && (E = -E), u || (x = E, E = 0);
            var M = "rotateX(".concat(u ? 0 : -w, "deg) rotateY(").concat(u ? w : 0, "deg) translate3d(").concat(E, "px, ").concat(x, "px, ").concat(T, "px)");
            y <= 1 && -1 < y && (m = 90 * g + 90 * y, o) && (m = 90 * -g - 90 * y), h.style.transform = M, p.slideShadows && i(h, y, u);
          }
          if (r.style.transformOrigin = "50% 50% -".concat(d / 2, "px"), r.style["-webkit-transform-origin"] = "50% 50% -".concat(d / 2, "px"), p.shadow) if (u) e.style.transform = "translate3d(0px, ".concat(n / 2 + p.shadowOffset, "px, ").concat(-n / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(p.shadowScale, ")");else {
            var C = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
              P = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
              L = p.shadowScale,
              A = p.shadowScale / P,
              k = p.shadowOffset;
            e.style.transform = "scale3d(".concat(L, ", 1, ").concat(A, ") translate3d(0px, ").concat(l / 2 + k, "px, ").concat(-l / 2 / A, "px) rotateX(-90deg)");
          }
          var z = (c.isSafari || c.isWebView) && c.needPerspectiveFix ? -d / 2 : 0;
          r.style.transform = "translate3d(0px,0,".concat(z, "px) rotateX(").concat(t.isHorizontal() ? 0 : m, "deg) rotateY(").concat(t.isHorizontal() ? -m : 0, "deg)"), r.style.setProperty("--swiper-cube-translate-z", z + "px");
        },
        setTransition: function (e) {
          var a = t.el;
          if (t.slides.forEach(function (t) {
            t.style.transitionDuration = e + "ms", t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function (t) {
              t.style.transitionDuration = e + "ms";
            });
          }), t.params.cubeEffect.shadow && !t.isHorizontal()) {
            var r = a.querySelector(".swiper-cube-shadow");
            r && (r.style.transitionDuration = e + "ms");
          }
        },
        recreateShadows: function () {
          var e = t.isHorizontal();
          t.slides.forEach(function (t) {
            var a = Math.max(Math.min(t.progress, 1), -1);
            i(t, a, e);
          });
        },
        getEffectParams: function () {
          return t.params.cubeEffect;
        },
        perspective: function () {
          return !0;
        },
        overwriteParams: function () {
          return {
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
        }
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      });
      var i = function (e, a, r) {
        var i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
          s = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
        i = i || Q(0, e, t.isHorizontal() ? "left" : "top"), s = s || Q(0, e, t.isHorizontal() ? "right" : "bottom"), i && (i.style.opacity = Math.max(-a, 0)), s && (s.style.opacity = Math.max(a, 0));
      };
      K({
        effect: "flip",
        swiper: t,
        on: r,
        setTranslate: function () {
          for (var e = t.slides, a = t.rtlTranslate, r = t.params.flipEffect, s = 0; s < e.length; s += 1) {
            var n = e[s],
              l = n.progress;
            t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n.progress, 1), -1));
            var o = n.swiperSlideOffset,
              d = -180 * l,
              c = 0,
              p = t.params.cssMode ? -o - t.translate : -o,
              u = 0;
            t.isHorizontal() ? a && (d = -d) : (u = p, p = 0, c = -d, d = 0), n.style.zIndex = -Math.abs(Math.round(l)) + e.length, r.slideShadows && i(n, l), o = "translate3d(".concat(p, "px, ").concat(u, "px, 0px) rotateX(").concat(c, "deg) rotateY(").concat(d, "deg)"), Z(0, n).style.transform = o;
          }
        },
        setTransition: function (e) {
          var a = t.slides.map(function (e) {
            return E(e);
          });
          a.forEach(function (t) {
            t.style.transitionDuration = e + "ms", t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function (t) {
              t.style.transitionDuration = e + "ms";
            });
          }), $({
            swiper: t,
            duration: e,
            transformElements: a
          });
        },
        recreateShadows: function () {
          t.params.flipEffect, t.slides.forEach(function (e) {
            var a = e.progress;
            t.params.flipEffect.limitRotation && (a = Math.max(Math.min(e.progress, 1), -1)), i(e, a);
          });
        },
        getEffectParams: function () {
          return t.params.flipEffect;
        },
        perspective: function () {
          return !0;
        },
        overwriteParams: function () {
          return {
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode
          };
        }
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0
        }
      }), K({
        effect: "coverflow",
        swiper: t,
        on: r,
        setTranslate: function () {
          for (var e = t.width, a = t.height, r = t.slides, i = t.slidesSizesGrid, s = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : a / 2 - l, d = n ? s.rotate : -s.rotate, c = s.depth, p = 0, u = r.length; p < u; p += 1) {
            var f = r[p],
              m = i[p],
              v = (o - f.swiperSlideOffset - m / 2) / m,
              h = "function" == typeof s.modifier ? s.modifier(v) : v * s.modifier,
              g = n ? d * h : 0,
              w = n ? 0 : d * h,
              b = -c * Math.abs(h),
              y = s.stretch,
              E = ("string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(s.stretch) / 100 * m), n ? 0 : y * h),
              x = n ? y * h : 0,
              S = 1 - (1 - s.scale) * Math.abs(h);
            Math.abs(x) < .001 && (x = 0), Math.abs(E) < .001 && (E = 0), Math.abs(b) < .001 && (b = 0), Math.abs(g) < .001 && (g = 0), Math.abs(w) < .001 && (w = 0), Math.abs(S) < .001 && (S = 0);
            var T = "translate3d(".concat(x, "px,").concat(E, "px,").concat(b, "px)  rotateX(").concat(w, "deg) rotateY(").concat(g, "deg) scale(").concat(S, ")");
            if (Z(0, f).style.transform = T, f.style.zIndex = 1 - Math.abs(Math.round(h)), s.slideShadows) {
              var M = n ? f.querySelector(".swiper-slide-shadow-left") : f.querySelector(".swiper-slide-shadow-top"),
                C = n ? f.querySelector(".swiper-slide-shadow-right") : f.querySelector(".swiper-slide-shadow-bottom");
              M = M || Q(0, f, n ? "left" : "top"), C = C || Q(0, f, n ? "right" : "bottom"), M && (M.style.opacity = 0 < h ? h : 0), C && (C.style.opacity = 0 < -h ? -h : 0);
            }
          }
        },
        setTransition: function (e) {
          t.slides.map(function (e) {
            return E(e);
          }).forEach(function (t) {
            t.style.transitionDuration = e + "ms", t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function (t) {
              t.style.transitionDuration = e + "ms";
            });
          });
        },
        perspective: function () {
          return !0;
        },
        overwriteParams: function () {
          return {
            watchSlidesProgress: !0
          };
        }
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        creativeEffect: {
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          }
        }
      }), K({
        effect: "creative",
        swiper: t,
        on: r,
        setTranslate: function () {
          var e = t.slides,
            a = t.wrapperEl,
            r = t.slidesSizesGrid,
            i = t.params.creativeEffect,
            s = i.progressMultiplier,
            n = t.params.centeredSlides;
          if (n) {
            var l = r[0] / 2 - t.params.slidesOffsetBefore || 0;
            a.style.transform = "translateX(calc(50% - ".concat(l, "px))");
          }
          for (var o = function () {
              var a = e[d],
                r = a.progress,
                l = Math.min(Math.max(a.progress, -i.limitProgress), i.limitProgress),
                o = l;
              n || (o = Math.min(Math.max(a.originalProgress, -i.limitProgress), i.limitProgress));
              var m = a.swiperSlideOffset,
                v = [t.params.cssMode ? -m - t.translate : -m, 0, 0],
                h = [0, 0, 0],
                g = !1,
                w = (t.isHorizontal() || (v[1] = v[0], v[0] = 0), {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  scale: 1,
                  opacity: 1
                });
              if (l < 0 ? (w = i.next, g = !0) : 0 < l && (w = i.prev, g = !0), v.forEach(function (e, t) {
                v[t] = "calc(".concat(e, "px + (").concat((e = w.translate[t], "string" == typeof e ? e : e + "px"), " * ").concat(Math.abs(l * s), "))");
              }), h.forEach(function (e, t) {
                h[t] = w.rotate[t] * Math.abs(l * s);
              }), a.style.zIndex = -Math.abs(Math.round(r)) + e.length, f = v.join(", "), c = "rotateX(".concat(h[0], "deg) rotateY(").concat(h[1], "deg) rotateZ(").concat(h[2], "deg)"), p = "scale(".concat(o < 0 ? 1 + (1 - w.scale) * o * s : 1 - (1 - w.scale) * o * s, ")"), u = o < 0 ? 1 + (1 - w.opacity) * o * s : 1 - (1 - w.opacity) * o * s, f = "translate3d(".concat(f, ") ").concat(c, " ") + p, g && w.shadow || !g) {
                var b = a.querySelector(".swiper-slide-shadow");
                if (b = !b && w.shadow ? Q(0, a) : b) {
                  var y = i.shadowPerProgress ? l * (1 / i.limitProgress) : l;
                  b.style.opacity = Math.min(Math.max(Math.abs(y), 0), 1);
                }
              }
              (c = Z(0, a)).style.transform = f, c.style.opacity = u, w.origin && (c.style.transformOrigin = w.origin);
            }, d = 0; d < e.length; d += 1) {
            var c, p, u, f;
            o();
          }
        },
        setTransition: function (e) {
          var a = t.slides.map(function (e) {
            return E(e);
          });
          a.forEach(function (t) {
            t.style.transitionDuration = e + "ms", t.querySelectorAll(".swiper-slide-shadow").forEach(function (t) {
              t.style.transitionDuration = e + "ms";
            });
          }), $({
            swiper: t,
            duration: e,
            transformElements: a,
            allSlides: !0
          });
        },
        perspective: function () {
          return t.params.creativeEffect.perspective;
        },
        overwriteParams: function () {
          return {
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode
          };
        }
      });
    }, function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        cardsEffect: {
          slideShadows: !0,
          rotate: !0,
          perSlideRotate: 2,
          perSlideOffset: 8
        }
      }), K({
        effect: "cards",
        swiper: t,
        on: r,
        setTranslate: function () {
          for (var e = t.slides, a = t.activeIndex, r = t.params.cardsEffect, i = t.touchEventsData, s = i.startTranslate, n = i.isTouched, l = t.translate, o = 0; o < e.length; o += 1) {
            var d = e[o],
              c = d.progress,
              p = Math.min(Math.max(c, -4), 4),
              u = d.swiperSlideOffset,
              f = (t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = "translateX(".concat(t.minTranslate(), "px)")), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset), t.params.cssMode ? -u - t.translate : -u),
              m = 0,
              v = -100 * Math.abs(p),
              h = 1,
              g = -r.perSlideRotate * p,
              w = r.perSlideOffset - .75 * Math.abs(p),
              b = ((y = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o) === a || y === a - 1) && 0 < p && p < 1 && (n || t.params.cssMode) && l < s,
              y = (y === a || y === a + 1) && p < 0 && -1 < p && (n || t.params.cssMode) && s < l;
            if (b || y) {
              var E = Math.pow(1 - Math.abs((Math.abs(p) - .5) / .5), .5);
              g += -28 * p * E, h += -.5 * E, w += 96 * E, m = -25 * E * Math.abs(p) + "%";
            }
            if (f = p < 0 ? "calc(".concat(f, "px + (").concat(w * Math.abs(p), "%))") : 0 < p ? "calc(".concat(f, "px + (-").concat(w * Math.abs(p), "%))") : f + "px", !t.isHorizontal()) {
              var x = m;
              m = f, f = x;
            }
            if (b = p < 0 ? "" + (1 + (1 - h) * p) : "" + (1 - (1 - h) * p), y = "\n        translate3d(".concat(f, ", ").concat(m, ", ").concat(v, "px)\n        rotateZ(").concat(r.rotate ? g : 0, "deg)\n        scale(").concat(b, ")\n      "), r.slideShadows) {
              var S = d.querySelector(".swiper-slide-shadow");
              (S = S || Q(0, d)) && (S.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1));
            }
            d.style.zIndex = -Math.abs(Math.round(c)) + e.length, Z(0, d).style.transform = y;
          }
        },
        setTransition: function (e) {
          var a = t.slides.map(function (e) {
            return E(e);
          });
          a.forEach(function (t) {
            t.style.transitionDuration = e + "ms", t.querySelectorAll(".swiper-slide-shadow").forEach(function (t) {
              t.style.transitionDuration = e + "ms";
            });
          }), $({
            swiper: t,
            duration: e,
            transformElements: a
          });
        },
        perspective: function () {
          return !0;
        },
        overwriteParams: function () {
          return {
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode
          };
        }
      });
    }]);
    var te = document.querySelector(".head-top"),
      ae = document.querySelector(".head-top_cross"),
      re = document.querySelectorAll(".school_slider-desc"),
      ie = document.querySelectorAll(".school_slider-hide"),
      se = document.querySelectorAll("#about-contents"),
      ne = document.querySelectorAll(".about_dropdown-toggler"),
      le = document.querySelector(".modal");
    function oe(e) {
      se.forEach(function (t) {
        t.dataset.aboutId === e && J(ne).find(function (e) {
          return e.dataset.aboutId === t.dataset.aboutId;
        }).classList.toggle("rotate-180");
      });
    }
    document.querySelector(".pop-up"), document.querySelector(".pop-up_cross").addEventListener("click", function () {
      le.classList.add("hidden");
    }), document.addEventListener("click", function (e) {
      "btn" === e.target.id ? le.classList.remove("hidden") : e.target.closest(".pop-up") || le.classList.add("hidden");
    }), ae.addEventListener("click", function (e) {
      e.preventDefault(), te.classList.add("hidden");
    }), document.addEventListener("click", function (e) {
      e.target.dataset.num && ie.forEach(function (t) {
        t.dataset.num === e.target.dataset.num && (console.log(e.target), t.style.display = "block", e.target.style.display = "none", re.forEach(function (t) {
          t.dataset.num === e.target.dataset.num && (t.style.webkitTextFillColor = "#fff");
        }));
      });
    }), ne[0].classList.add("rotate-180"), oe(), document.addEventListener("click", function (e) {
      var t = e.target.closest(".about_dropdown");
      t && (J(se).find(function (e) {
        return e.dataset.aboutId === t.dataset.aboutId;
      }).classList.toggle("hidden"), oe(t.dataset.aboutId));
    }), new F(".swiper-school", {
      slidesPerView: window.innerWidth < 570 ? 1 : 4,
      parallax: !0,
      loop: !0,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }();
})();