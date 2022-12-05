(() => {
    var t = {
            277: function(t, e, n) {
                var r,
                    i,
                    o = { scope: {} };
                (o.defineProperty =
                    'function' == typeof Object.defineProperties
                        ? Object.defineProperty
                        : function(t, e, n) {
                              if (n.get || n.set)
                                  throw new TypeError(
                                      'ES3 does not support getters and setters.'
                                  );
                              t != Array.prototype &&
                                  t != Object.prototype &&
                                  (t[e] = n.value);
                          }),
                    (o.getGlobal = function(t) {
                        return 'undefined' != typeof window && window === t
                            ? t
                            : void 0 !== n.g && null != n.g
                            ? n.g
                            : t;
                    }),
                    (o.global = o.getGlobal(this)),
                    (o.SYMBOL_PREFIX = 'jscomp_symbol_'),
                    (o.initSymbol = function() {
                        (o.initSymbol = function() {}),
                            o.global.Symbol || (o.global.Symbol = o.Symbol);
                    }),
                    (o.symbolCounter_ = 0),
                    (o.Symbol = function(t) {
                        return o.SYMBOL_PREFIX + (t || '') + o.symbolCounter_++;
                    }),
                    (o.initSymbolIterator = function() {
                        o.initSymbol();
                        var t = o.global.Symbol.iterator;
                        t ||
                            (t = o.global.Symbol.iterator = o.global.Symbol(
                                'iterator'
                            )),
                            'function' != typeof Array.prototype[t] &&
                                o.defineProperty(Array.prototype, t, {
                                    configurable: !0,
                                    writable: !0,
                                    value: function() {
                                        return o.arrayIterator(this);
                                    },
                                }),
                            (o.initSymbolIterator = function() {});
                    }),
                    (o.arrayIterator = function(t) {
                        var e = 0;
                        return o.iteratorPrototype(function() {
                            return e < t.length
                                ? { done: !1, value: t[e++] }
                                : { done: !0 };
                        });
                    }),
                    (o.iteratorPrototype = function(t) {
                        return (
                            o.initSymbolIterator(),
                            ((t = { next: t })[
                                o.global.Symbol.iterator
                            ] = function() {
                                return this;
                            }),
                            t
                        );
                    }),
                    (o.array = o.array || {}),
                    (o.iteratorFromArray = function(t, e) {
                        o.initSymbolIterator(),
                            t instanceof String && (t += '');
                        var n = 0,
                            r = {
                                next: function() {
                                    if (n < t.length) {
                                        var i = n++;
                                        return { value: e(i, t[i]), done: !1 };
                                    }
                                    return (
                                        (r.next = function() {
                                            return { done: !0, value: void 0 };
                                        }),
                                        r.next()
                                    );
                                },
                            };
                        return (
                            (r[Symbol.iterator] = function() {
                                return r;
                            }),
                            r
                        );
                    }),
                    (o.polyfill = function(t, e, n, r) {
                        if (e) {
                            for (
                                n = o.global, t = t.split('.'), r = 0;
                                r < t.length - 1;
                                r++
                            ) {
                                var i = t[r];
                                i in n || (n[i] = {}), (n = n[i]);
                            }
                            (e = e((r = n[(t = t[t.length - 1])]))) != r &&
                                null != e &&
                                o.defineProperty(n, t, {
                                    configurable: !0,
                                    writable: !0,
                                    value: e,
                                });
                        }
                    }),
                    o.polyfill(
                        'Array.prototype.keys',
                        function(t) {
                            return (
                                t ||
                                function() {
                                    return o.iteratorFromArray(this, function(
                                        t
                                    ) {
                                        return t;
                                    });
                                }
                            );
                        },
                        'es6-impl',
                        'es3'
                    );
                var a = this;
                (r = function() {
                    function t(t) {
                        if (!I.col(t))
                            try {
                                return document.querySelectorAll(t);
                            } catch (t) {}
                    }
                    function e(t, e) {
                        for (
                            var n = t.length,
                                r =
                                    2 <= arguments.length
                                        ? arguments[1]
                                        : void 0,
                                i = [],
                                o = 0;
                            o < n;
                            o++
                        )
                            if (o in t) {
                                var a = t[o];
                                e.call(r, a, o, t) && i.push(a);
                            }
                        return i;
                    }
                    function n(t) {
                        return t.reduce(function(t, e) {
                            return t.concat(I.arr(e) ? n(e) : e);
                        }, []);
                    }
                    function r(e) {
                        return I.arr(e)
                            ? e
                            : (I.str(e) && (e = t(e) || e),
                              e instanceof NodeList ||
                              e instanceof HTMLCollection
                                  ? [].slice.call(e)
                                  : [e]);
                    }
                    function i(t, e) {
                        return t.some(function(t) {
                            return t === e;
                        });
                    }
                    function o(t) {
                        var e,
                            n = {};
                        for (e in t) n[e] = t[e];
                        return n;
                    }
                    function s(t, e) {
                        var n,
                            r = o(t);
                        for (n in t) r[n] = e.hasOwnProperty(n) ? e[n] : t[n];
                        return r;
                    }
                    function c(t, e) {
                        var n,
                            r = o(t);
                        for (n in e) r[n] = I.und(t[n]) ? e[n] : t[n];
                        return r;
                    }
                    function u(t) {
                        if (
                            (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
                                t
                            ))
                        )
                            return t[2];
                    }
                    function l(t, e) {
                        return I.fnc(t) ? t(e.target, e.id, e.total) : t;
                    }
                    function f(t, e) {
                        if (e in t.style)
                            return (
                                getComputedStyle(t).getPropertyValue(
                                    e
                                        .replace(/([a-z])([A-Z])/g, '$1-$2')
                                        .toLowerCase()
                                ) || '0'
                            );
                    }
                    function h(t, e) {
                        return I.dom(t) && i(P, e)
                            ? 'transform'
                            : I.dom(t) &&
                              (t.getAttribute(e) || (I.svg(t) && t[e]))
                            ? 'attribute'
                            : I.dom(t) && 'transform' !== e && f(t, e)
                            ? 'css'
                            : null != t[e]
                            ? 'object'
                            : void 0;
                    }
                    function d(t, n) {
                        switch (h(t, n)) {
                            case 'transform':
                                return (function(t, n) {
                                    var r = (function(t) {
                                        return -1 < t.indexOf('translate') ||
                                            'perspective' === t
                                            ? 'px'
                                            : -1 < t.indexOf('rotate') ||
                                              -1 < t.indexOf('skew')
                                            ? 'deg'
                                            : void 0;
                                    })(n);
                                    if (
                                        ((r =
                                            -1 < n.indexOf('scale')
                                                ? 1
                                                : 0 + r),
                                        !(t = t.style.transform))
                                    )
                                        return r;
                                    for (
                                        var i = [],
                                            o = [],
                                            a = [],
                                            s = /(\w+)\((.+?)\)/g;
                                        (i = s.exec(t));

                                    )
                                        o.push(i[1]), a.push(i[2]);
                                    return (
                                        (t = e(a, function(t, e) {
                                            return o[e] === n;
                                        })),
                                        t.length ? t[0] : r
                                    );
                                })(t, n);
                            case 'css':
                                return f(t, n);
                            case 'attribute':
                                return t.getAttribute(n);
                        }
                        return t[n] || 0;
                    }
                    function p(t, e) {
                        var n = /^(\*=|\+=|-=)/.exec(t);
                        if (!n) return t;
                        var r = u(t) || 0;
                        switch (
                            ((e = parseFloat(e)),
                            (t = parseFloat(t.replace(n[0], ''))),
                            n[0][0])
                        ) {
                            case '+':
                                return e + t + r;
                            case '-':
                                return e - t + r;
                            case '*':
                                return e * t + r;
                        }
                    }
                    function g(t, e) {
                        return Math.sqrt(
                            Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)
                        );
                    }
                    function m(t) {
                        t = t.points;
                        for (var e, n = 0, r = 0; r < t.numberOfItems; r++) {
                            var i = t.getItem(r);
                            0 < r && (n += g(e, i)), (e = i);
                        }
                        return n;
                    }
                    function v(t) {
                        if (t.getTotalLength) return t.getTotalLength();
                        switch (t.tagName.toLowerCase()) {
                            case 'circle':
                                return 2 * Math.PI * t.getAttribute('r');
                            case 'rect':
                                return (
                                    2 * t.getAttribute('width') +
                                    2 * t.getAttribute('height')
                                );
                            case 'line':
                                return g(
                                    {
                                        x: t.getAttribute('x1'),
                                        y: t.getAttribute('y1'),
                                    },
                                    {
                                        x: t.getAttribute('x2'),
                                        y: t.getAttribute('y2'),
                                    }
                                );
                            case 'polyline':
                                return m(t);
                            case 'polygon':
                                var e = t.points;
                                return (
                                    m(t) +
                                    g(
                                        e.getItem(e.numberOfItems - 1),
                                        e.getItem(0)
                                    )
                                );
                        }
                    }
                    function y(t, e) {
                        function n(n) {
                            return (
                                (n = void 0 === n ? 0 : n),
                                t.el.getPointAtLength(1 <= e + n ? e + n : 0)
                            );
                        }
                        var r = n(),
                            i = n(-1),
                            o = n(1);
                        switch (t.property) {
                            case 'x':
                                return r.x;
                            case 'y':
                                return r.y;
                            case 'angle':
                                return (
                                    (180 * Math.atan2(o.y - i.y, o.x - i.x)) /
                                    Math.PI
                                );
                        }
                    }
                    function b(t, e) {
                        var n,
                            r = /-?\d*\.?\d+/g;
                        if (((n = I.pth(t) ? t.totalLength : t), I.col(n)))
                            if (I.rgb(n)) {
                                var i = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(
                                    n
                                );
                                n = i ? 'rgba(' + i[1] + ',1)' : n;
                            } else
                                n = I.hex(n)
                                    ? (function(t) {
                                          t = t.replace(
                                              /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                                              function(t, e, n, r) {
                                                  return e + e + n + n + r + r;
                                              }
                                          );
                                          var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                                              t
                                          );
                                          return (
                                              'rgba(' +
                                              (t = parseInt(e[1], 16)) +
                                              ',' +
                                              parseInt(e[2], 16) +
                                              ',' +
                                              (e = parseInt(e[3], 16)) +
                                              ',1)'
                                          );
                                      })(n)
                                    : I.hsl(n)
                                    ? (function(t) {
                                          function e(t, e, n) {
                                              return (
                                                  0 > n && (n += 1),
                                                  1 < n && --n,
                                                  n < 1 / 6
                                                      ? t + 6 * (e - t) * n
                                                      : 0.5 > n
                                                      ? e
                                                      : n < 2 / 3
                                                      ? t +
                                                        (e - t) *
                                                            (2 / 3 - n) *
                                                            6
                                                      : t
                                              );
                                          }
                                          var n =
                                              /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(
                                                  t
                                              ) ||
                                              /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                                                  t
                                              );
                                          t = parseInt(n[1]) / 360;
                                          var r = parseInt(n[2]) / 100,
                                              i = parseInt(n[3]) / 100;
                                          if (((n = n[4] || 1), 0 == r))
                                              i = r = t = i;
                                          else {
                                              var o =
                                                      0.5 > i
                                                          ? i * (1 + r)
                                                          : i + r - i * r,
                                                  a = 2 * i - o;
                                              (i = e(a, o, t + 1 / 3)),
                                                  (r = e(a, o, t)),
                                                  (t = e(a, o, t - 1 / 3));
                                          }
                                          return (
                                              'rgba(' +
                                              255 * i +
                                              ',' +
                                              255 * r +
                                              ',' +
                                              255 * t +
                                              ',' +
                                              n +
                                              ')'
                                          );
                                      })(n)
                                    : void 0;
                        else
                            (i = (i = u(n))
                                ? n.substr(0, n.length - i.length)
                                : n),
                                (n = e && !/\s/g.test(n) ? i + e : i);
                        return {
                            original: (n += ''),
                            numbers: n.match(r) ? n.match(r).map(Number) : [0],
                            strings: I.str(t) || e ? n.split(r) : [],
                        };
                    }
                    function w(t) {
                        return e(
                            (t = t ? n(I.arr(t) ? t.map(r) : r(t)) : []),
                            function(t, e, n) {
                                return n.indexOf(t) === e;
                            }
                        );
                    }
                    function x(t, e) {
                        var n = o(e);
                        if (I.arr(t)) {
                            var i = t.length;
                            2 !== i || I.obj(t[0])
                                ? I.fnc(e.duration) ||
                                  (n.duration = e.duration / i)
                                : (t = { value: t });
                        }
                        return r(t)
                            .map(function(t, n) {
                                return (
                                    (n = n ? 0 : e.delay),
                                    (t =
                                        I.obj(t) && !I.pth(t)
                                            ? t
                                            : { value: t }),
                                    I.und(t.delay) && (t.delay = n),
                                    t
                                );
                            })
                            .map(function(t) {
                                return c(t, n);
                            });
                    }
                    function k(t, e) {
                        var n;
                        return t.tweens.map(function(r) {
                            var i = (r = (function(t, e) {
                                    var n,
                                        r = {};
                                    for (n in t) {
                                        var i = l(t[n], e);
                                        I.arr(i) &&
                                            ((i = i.map(function(t) {
                                                return l(t, e);
                                            })),
                                            1 === i.length && (i = i[0])),
                                            (r[n] = i);
                                    }
                                    return (
                                        (r.duration = parseFloat(r.duration)),
                                        (r.delay = parseFloat(r.delay)),
                                        r
                                    );
                                })(r, e)).value,
                                o = d(e.target, t.name),
                                a = n ? n.to.original : o,
                                s =
                                    ((a = I.arr(i) ? i[0] : a),
                                    p(I.arr(i) ? i[1] : i, a));
                            return (
                                (o = u(s) || u(a) || u(o)),
                                (r.from = b(a, o)),
                                (r.to = b(s, o)),
                                (r.start = n ? n.end : t.offset),
                                (r.end = r.start + r.delay + r.duration),
                                (r.easing = (function(t) {
                                    return I.arr(t) ? E.apply(this, t) : C[t];
                                })(r.easing)),
                                (r.elasticity =
                                    (1e3 -
                                        Math.min(
                                            Math.max(r.elasticity, 1),
                                            999
                                        )) /
                                    1e3),
                                (r.isPath = I.pth(i)),
                                (r.isColor = I.col(r.from.original)),
                                r.isColor && (r.round = 1),
                                (n = r)
                            );
                        });
                    }
                    function S(t, r) {
                        return e(
                            n(
                                t.map(function(t) {
                                    return r.map(function(e) {
                                        var n = h(t.target, e.name);
                                        if (n) {
                                            var r = k(e, t);
                                            e = {
                                                type: n,
                                                property: e.name,
                                                animatable: t,
                                                tweens: r,
                                                duration: r[r.length - 1].end,
                                                delay: r[0].delay,
                                            };
                                        } else e = void 0;
                                        return e;
                                    });
                                })
                            ),
                            function(t) {
                                return !I.und(t);
                            }
                        );
                    }
                    function j(t, e, n, r) {
                        var i = 'delay' === t;
                        return e.length
                            ? (i ? Math.min : Math.max).apply(
                                  Math,
                                  e.map(function(e) {
                                      return e[t];
                                  })
                              )
                            : i
                            ? r.delay
                            : n.offset + r.delay + r.duration;
                    }
                    function M(t) {
                        var e,
                            n = s(_, t),
                            r = s(O, t),
                            i = (function(t) {
                                var e = w(t);
                                return e.map(function(t, n) {
                                    return {
                                        target: t,
                                        id: n,
                                        total: e.length,
                                    };
                                });
                            })(t.targets),
                            o = [],
                            a = c(n, r);
                        for (e in t)
                            a.hasOwnProperty(e) ||
                                'targets' === e ||
                                o.push({
                                    name: e,
                                    offset: a.offset,
                                    tweens: x(t[e], r),
                                });
                        return c(n, {
                            children: [],
                            animatables: i,
                            animations: (t = S(i, o)),
                            duration: j('duration', t, n, r),
                            delay: j('delay', t, n, r),
                        });
                    }
                    function A(t) {
                        function n() {
                            return (
                                window.Promise &&
                                new Promise(function(t) {
                                    return (h = t);
                                })
                            );
                        }
                        function r(t) {
                            return p.reversed ? p.duration - t : t;
                        }
                        function i(t) {
                            for (
                                var n = 0,
                                    r = {},
                                    i = p.animations,
                                    o = i.length;
                                n < o;

                            ) {
                                var a = i[n],
                                    s = a.animatable,
                                    c = (u = a.tweens)[(d = u.length - 1)];
                                d &&
                                    (c =
                                        e(u, function(e) {
                                            return t < e.end;
                                        })[0] || c);
                                for (
                                    var u =
                                            Math.min(
                                                Math.max(
                                                    t - c.start - c.delay,
                                                    0
                                                ),
                                                c.duration
                                            ) / c.duration,
                                        l = isNaN(u)
                                            ? 1
                                            : c.easing(u, c.elasticity),
                                        h = ((u = c.to.strings), c.round),
                                        d = [],
                                        g = void 0,
                                        m = ((g = c.to.numbers.length), 0);
                                    m < g;
                                    m++
                                ) {
                                    var v = void 0,
                                        b =
                                            ((v = c.to.numbers[m]),
                                            c.from.numbers[m]);
                                    (v = c.isPath
                                        ? y(c.value, l * v)
                                        : b + l * (v - b)),
                                        h &&
                                            ((c.isColor && 2 < m) ||
                                                (v = Math.round(v * h) / h)),
                                        d.push(v);
                                }
                                if ((c = u.length))
                                    for (g = u[0], l = 0; l < c; l++)
                                        (h = u[l + 1]),
                                            (m = d[l]),
                                            isNaN(m) ||
                                                (g = h
                                                    ? g + (m + h)
                                                    : g + (m + ' '));
                                else g = d[0];
                                F[a.type](s.target, a.property, g, r, s.id),
                                    (a.currentValue = g),
                                    n++;
                            }
                            if ((n = Object.keys(r).length))
                                for (i = 0; i < n; i++)
                                    T ||
                                        (T = f(document.body, 'transform')
                                            ? 'transform'
                                            : '-webkit-transform'),
                                        (p.animatables[i].target.style[T] = r[
                                            i
                                        ].join(' '));
                            (p.currentTime = t),
                                (p.progress = (t / p.duration) * 100);
                        }
                        function o(t) {
                            p[t] && p[t](p);
                        }
                        function a() {
                            p.remaining && !0 !== p.remaining && p.remaining--;
                        }
                        function s(t) {
                            var e = p.duration,
                                s = p.offset,
                                f = s + p.delay,
                                g = p.currentTime,
                                m = p.reversed,
                                v = r(t);
                            if (p.children.length) {
                                var y = p.children,
                                    b = y.length;
                                if (v >= p.currentTime)
                                    for (var w = 0; w < b; w++) y[w].seek(v);
                                else for (; b--; ) y[b].seek(v);
                            }
                            (v >= f || !e) &&
                                (p.began || ((p.began = !0), o('begin')),
                                o('run')),
                                v > s && v < e
                                    ? i(v)
                                    : (v <= s && 0 !== g && (i(0), m && a()),
                                      ((v >= e && g !== e) || !e) &&
                                          (i(e), m || a())),
                                o('update'),
                                t >= e &&
                                    (p.remaining
                                        ? ((u = c),
                                          'alternate' === p.direction &&
                                              (p.reversed = !p.reversed))
                                        : (p.pause(),
                                          p.completed ||
                                              ((p.completed = !0),
                                              o('complete'),
                                              'Promise' in window &&
                                                  (h(), (d = n())))),
                                    (l = 0));
                        }
                        t = void 0 === t ? {} : t;
                        var c,
                            u,
                            l = 0,
                            h = null,
                            d = n(),
                            p = M(t);
                        return (
                            (p.reset = function() {
                                var t = p.direction,
                                    e = p.loop;
                                for (
                                    p.currentTime = 0,
                                        p.progress = 0,
                                        p.paused = !0,
                                        p.began = !1,
                                        p.completed = !1,
                                        p.reversed = 'reverse' === t,
                                        p.remaining =
                                            'alternate' === t && 1 === e
                                                ? 2
                                                : e,
                                        i(0),
                                        t = p.children.length;
                                    t--;

                                )
                                    p.children[t].reset();
                            }),
                            (p.tick = function(t) {
                                (c = t), u || (u = c), s((l + c - u) * A.speed);
                            }),
                            (p.seek = function(t) {
                                s(r(t));
                            }),
                            (p.pause = function() {
                                var t = L.indexOf(p);
                                -1 < t && L.splice(t, 1), (p.paused = !0);
                            }),
                            (p.play = function() {
                                p.paused &&
                                    ((p.paused = !1),
                                    (u = 0),
                                    (l = r(p.currentTime)),
                                    L.push(p),
                                    N || z());
                            }),
                            (p.reverse = function() {
                                (p.reversed = !p.reversed),
                                    (u = 0),
                                    (l = r(p.currentTime));
                            }),
                            (p.restart = function() {
                                p.pause(), p.reset(), p.play();
                            }),
                            (p.finished = d),
                            p.reset(),
                            p.autoplay && p.play(),
                            p
                        );
                    }
                    var T,
                        _ = {
                            update: void 0,
                            begin: void 0,
                            run: void 0,
                            complete: void 0,
                            loop: 1,
                            direction: 'normal',
                            autoplay: !0,
                            offset: 0,
                        },
                        O = {
                            duration: 1e3,
                            delay: 0,
                            easing: 'easeOutElastic',
                            elasticity: 500,
                            round: 0,
                        },
                        P = 'translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective'.split(
                            ' '
                        ),
                        I = {
                            arr: function(t) {
                                return Array.isArray(t);
                            },
                            obj: function(t) {
                                return (
                                    -1 <
                                    Object.prototype.toString
                                        .call(t)
                                        .indexOf('Object')
                                );
                            },
                            pth: function(t) {
                                return (
                                    I.obj(t) && t.hasOwnProperty('totalLength')
                                );
                            },
                            svg: function(t) {
                                return t instanceof SVGElement;
                            },
                            dom: function(t) {
                                return t.nodeType || I.svg(t);
                            },
                            str: function(t) {
                                return 'string' == typeof t;
                            },
                            fnc: function(t) {
                                return 'function' == typeof t;
                            },
                            und: function(t) {
                                return void 0 === t;
                            },
                            hex: function(t) {
                                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(
                                    t
                                );
                            },
                            rgb: function(t) {
                                return /^rgb/.test(t);
                            },
                            hsl: function(t) {
                                return /^hsl/.test(t);
                            },
                            col: function(t) {
                                return I.hex(t) || I.rgb(t) || I.hsl(t);
                            },
                        },
                        E = (function() {
                            function t(t, e, n) {
                                return (
                                    (((1 - 3 * n + 3 * e) * t +
                                        (3 * n - 6 * e)) *
                                        t +
                                        3 * e) *
                                    t
                                );
                            }
                            return function(e, n, r, i) {
                                if (0 <= e && 1 >= e && 0 <= r && 1 >= r) {
                                    var o = new Float32Array(11);
                                    if (e !== n || r !== i)
                                        for (var a = 0; 11 > a; ++a)
                                            o[a] = t(0.1 * a, e, r);
                                    return function(a) {
                                        if (e === n && r === i) return a;
                                        if (0 === a) return 0;
                                        if (1 === a) return 1;
                                        for (
                                            var s = 0, c = 1;
                                            10 !== c && o[c] <= a;
                                            ++c
                                        )
                                            s += 0.1;
                                        --c,
                                            (c =
                                                s +
                                                ((a - o[c]) /
                                                    (o[c + 1] - o[c])) *
                                                    0.1);
                                        var u =
                                            3 * (1 - 3 * r + 3 * e) * c * c +
                                            2 * (3 * r - 6 * e) * c +
                                            3 * e;
                                        if (0.001 <= u) {
                                            for (
                                                s = 0;
                                                4 > s &&
                                                0 !=
                                                    (u =
                                                        3 *
                                                            (1 -
                                                                3 * r +
                                                                3 * e) *
                                                            c *
                                                            c +
                                                        2 *
                                                            (3 * r - 6 * e) *
                                                            c +
                                                        3 * e);
                                                ++s
                                            ) {
                                                var l = t(c, e, r) - a;
                                                c -= l / u;
                                            }
                                            a = c;
                                        } else if (0 === u) a = c;
                                        else {
                                            (c = s), (s += 0.1);
                                            var f = 0;
                                            do {
                                                0 <
                                                (u =
                                                    t(
                                                        (l = c + (s - c) / 2),
                                                        e,
                                                        r
                                                    ) - a)
                                                    ? (s = l)
                                                    : (c = l);
                                            } while (
                                                1e-7 < Math.abs(u) &&
                                                10 > ++f
                                            );
                                            a = l;
                                        }
                                        return t(a, n, i);
                                    };
                                }
                            };
                        })(),
                        C = (function() {
                            function t(t, e) {
                                return 0 === t || 1 === t
                                    ? t
                                    : -Math.pow(2, 10 * (t - 1)) *
                                          Math.sin(
                                              (2 *
                                                  (t -
                                                      1 -
                                                      (e / (2 * Math.PI)) *
                                                          Math.asin(1)) *
                                                  Math.PI) /
                                                  e
                                          );
                            }
                            var e,
                                n = 'Quad Cubic Quart Quint Sine Expo Circ Back Elastic'.split(
                                    ' '
                                ),
                                r = {
                                    In: [
                                        [0.55, 0.085, 0.68, 0.53],
                                        [0.55, 0.055, 0.675, 0.19],
                                        [0.895, 0.03, 0.685, 0.22],
                                        [0.755, 0.05, 0.855, 0.06],
                                        [0.47, 0, 0.745, 0.715],
                                        [0.95, 0.05, 0.795, 0.035],
                                        [0.6, 0.04, 0.98, 0.335],
                                        [0.6, -0.28, 0.735, 0.045],
                                        t,
                                    ],
                                    Out: [
                                        [0.25, 0.46, 0.45, 0.94],
                                        [0.215, 0.61, 0.355, 1],
                                        [0.165, 0.84, 0.44, 1],
                                        [0.23, 1, 0.32, 1],
                                        [0.39, 0.575, 0.565, 1],
                                        [0.19, 1, 0.22, 1],
                                        [0.075, 0.82, 0.165, 1],
                                        [0.175, 0.885, 0.32, 1.275],
                                        function(e, n) {
                                            return 1 - t(1 - e, n);
                                        },
                                    ],
                                    InOut: [
                                        [0.455, 0.03, 0.515, 0.955],
                                        [0.645, 0.045, 0.355, 1],
                                        [0.77, 0, 0.175, 1],
                                        [0.86, 0, 0.07, 1],
                                        [0.445, 0.05, 0.55, 0.95],
                                        [1, 0, 0, 1],
                                        [0.785, 0.135, 0.15, 0.86],
                                        [0.68, -0.55, 0.265, 1.55],
                                        function(e, n) {
                                            return 0.5 > e
                                                ? t(2 * e, n) / 2
                                                : 1 - t(-2 * e + 2, n) / 2;
                                        },
                                    ],
                                },
                                i = { linear: E(0.25, 0.25, 0.75, 0.75) },
                                o = {};
                            for (e in r)
                                (o.type = e),
                                    r[o.type].forEach(
                                        (function(t) {
                                            return function(e, r) {
                                                i[
                                                    'ease' + t.type + n[r]
                                                ] = I.fnc(e)
                                                    ? e
                                                    : E.apply(a, e);
                                            };
                                        })(o)
                                    ),
                                    (o = { type: o.type });
                            return i;
                        })(),
                        F = {
                            css: function(t, e, n) {
                                return (t.style[e] = n);
                            },
                            attribute: function(t, e, n) {
                                return t.setAttribute(e, n);
                            },
                            object: function(t, e, n) {
                                return (t[e] = n);
                            },
                            transform: function(t, e, n, r, i) {
                                r[i] || (r[i] = []),
                                    r[i].push(e + '(' + n + ')');
                            },
                        },
                        L = [],
                        N = 0,
                        z = (function() {
                            function t() {
                                N = requestAnimationFrame(e);
                            }
                            function e(e) {
                                var n = L.length;
                                if (n) {
                                    for (var r = 0; r < n; )
                                        L[r] && L[r].tick(e), r++;
                                    t();
                                } else cancelAnimationFrame(N), (N = 0);
                            }
                            return t;
                        })();
                    return (
                        (A.version = '2.2.0'),
                        (A.speed = 1),
                        (A.running = L),
                        (A.remove = function(t) {
                            t = w(t);
                            for (var e = L.length; e--; )
                                for (
                                    var n = L[e],
                                        r = n.animations,
                                        o = r.length;
                                    o--;

                                )
                                    i(t, r[o].animatable.target) &&
                                        (r.splice(o, 1), r.length || n.pause());
                        }),
                        (A.getValue = d),
                        (A.path = function(e, n) {
                            var r = I.str(e) ? t(e)[0] : e,
                                i = n || 100;
                            return function(t) {
                                return {
                                    el: r,
                                    property: t,
                                    totalLength: v(r) * (i / 100),
                                };
                            };
                        }),
                        (A.setDashoffset = function(t) {
                            var e = v(t);
                            return t.setAttribute('stroke-dasharray', e), e;
                        }),
                        (A.bezier = E),
                        (A.easings = C),
                        (A.timeline = function(t) {
                            var e = A(t);
                            return (
                                e.pause(),
                                (e.duration = 0),
                                (e.add = function(n) {
                                    return (
                                        e.children.forEach(function(t) {
                                            (t.began = !0), (t.completed = !0);
                                        }),
                                        r(n).forEach(function(n) {
                                            var r = c(n, s(O, t || {}));
                                            (r.targets =
                                                r.targets || t.targets),
                                                (n = e.duration);
                                            var i = r.offset;
                                            (r.autoplay = !1),
                                                (r.direction = e.direction),
                                                (r.offset = I.und(i)
                                                    ? n
                                                    : p(i, n)),
                                                (e.began = !0),
                                                (e.completed = !0),
                                                e.seek(r.offset),
                                                ((r = A(r)).began = !0),
                                                (r.completed = !0),
                                                r.duration > n &&
                                                    (e.duration = r.duration),
                                                e.children.push(r);
                                        }),
                                        e.seek(0),
                                        e.reset(),
                                        e.autoplay && e.restart(),
                                        e
                                    );
                                }),
                                e
                            );
                        }),
                        (A.random = function(t, e) {
                            return Math.floor(Math.random() * (e - t + 1)) + t;
                        }),
                        A
                    );
                }),
                    void 0 === (i = r.apply(e, [])) || (t.exports = i);
            },
            807: (t, e, n) => {
                'use strict';
                n.r(e), n.d(e, { default: () => s });
                var r = n(81),
                    i = n.n(r),
                    o = n(645),
                    a = n.n(o)()(i());
                a.push([
                    t.id,
                    'html{box-sizing:border-box;font-size:12px}@media(min-width: 400px){html{font-size:16px}}*,*:before,*:after{box-sizing:inherit}body{height:100vh;width:100vw;margin:0;display:flex;background:#f0f5f8;color:#222;overflow-x:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}body.active{color:#fff}.wrap{padding:24px;max-width:700px}@media(min-width: 400px){.wrap{margin:auto}}.wrap .blog{margin:0 0 1.5rem 0;line-height:1;white-space:nowrap}.intro{font-family:"Alegreya";font-size:10rem;margin:0 0 1.5rem 0;line-height:1;white-space:nowrap}.target-dot{z-index:1;position:relative;height:2rem;width:2rem;left:4px;top:-1.3rem;display:inline-block;padding:0;margin:0;border:0;background:none;cursor:pointer;vertical-align:bottom;will-change:transform}.active .target-dot{position:fixed;top:0;left:0}.target-dot:focus{outline:none}.target-dot.pulsing{animation:pulse .75s cubic-bezier(0.4, 0, 0, 1)}.pulse{position:absolute;border-radius:50%;left:0;top:0;will-change:transform}.pulse--front{width:100%;height:100%;background:#222;z-index:1}.pulse--back{height:200%;width:200%;left:-50%;top:-50%;transform:scale(0.4761904762);border:1px solid #ff1c83;background:rgba(255,28,131,.5)}.pulsing .pulse--back{animation:pulseRing 1s cubic-bezier(0.4, 0, 0, 1);animation-delay:.28s}@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(0.8)}100%{transform:scale(1)}}@keyframes pulseRing{0%{transform:scale(0.4761904762);opacity:1}100%{transform:scale(1);opacity:0}}p{font-size:1.5rem;line-height:1.6;margin:0 0 1.5rem 0}canvas{z-index:-1;display:block;position:fixed;height:100vh;width:100vw}a{transform:translateZ(0);color:inherit;text-decoration:none;position:relative}a:before,a:after{transform:translateZ(0);content:"";width:100%;height:4px;position:absolute;left:0;bottom:-2px;z-index:-1;transition:transform .2s cubic-bezier(0.4, 0, 0, 1)}a:after{background:#ff1c83;transform:translateZ(0) scale(0, 1)}a:before{background:rgba(0,0,0,.1)}.active a:before{background:rgba(255,255,255,.4)}a:hover:after{transform:translateZ(0) scale(1, 1)}',
                    '',
                ]);
                const s = a;
            },
            645: t => {
                'use strict';
                t.exports = function(t) {
                    var e = [];
                    return (
                        (e.toString = function() {
                            return this.map(function(e) {
                                var n = '',
                                    r = void 0 !== e[5];
                                return (
                                    e[4] &&
                                        (n += '@supports ('.concat(
                                            e[4],
                                            ') {'
                                        )),
                                    e[2] && (n += '@media '.concat(e[2], ' {')),
                                    r &&
                                        (n += '@layer'.concat(
                                            e[5].length > 0
                                                ? ' '.concat(e[5])
                                                : '',
                                            ' {'
                                        )),
                                    (n += t(e)),
                                    r && (n += '}'),
                                    e[2] && (n += '}'),
                                    e[4] && (n += '}'),
                                    n
                                );
                            }).join('');
                        }),
                        (e.i = function(t, n, r, i, o) {
                            'string' == typeof t && (t = [[null, t, void 0]]);
                            var a = {};
                            if (r)
                                for (var s = 0; s < this.length; s++) {
                                    var c = this[s][0];
                                    null != c && (a[c] = !0);
                                }
                            for (var u = 0; u < t.length; u++) {
                                var l = [].concat(t[u]);
                                (r && a[l[0]]) ||
                                    (void 0 !== o &&
                                        (void 0 === l[5] ||
                                            (l[1] = '@layer'
                                                .concat(
                                                    l[5].length > 0
                                                        ? ' '.concat(l[5])
                                                        : '',
                                                    ' {'
                                                )
                                                .concat(l[1], '}')),
                                        (l[5] = o)),
                                    n &&
                                        (l[2]
                                            ? ((l[1] = '@media '
                                                  .concat(l[2], ' {')
                                                  .concat(l[1], '}')),
                                              (l[2] = n))
                                            : (l[2] = n)),
                                    i &&
                                        (l[4]
                                            ? ((l[1] = '@supports ('
                                                  .concat(l[4], ') {')
                                                  .concat(l[1], '}')),
                                              (l[4] = i))
                                            : (l[4] = ''.concat(i))),
                                    e.push(l));
                            }
                        }),
                        e
                    );
                };
            },
            81: t => {
                'use strict';
                t.exports = function(t) {
                    return t[1];
                };
            },
            607: (t, e, n) => {
                var r = n(379),
                    i = n(807);
                'string' == typeof (i = i.__esModule ? i.default : i) &&
                    (i = [[t.id, i, '']]);
                r(i, { insert: 'head', singleton: !1 }),
                    (t.exports = i.locals || {});
            },
            379: (t, e, n) => {
                'use strict';
                var r,
                    i = (function() {
                        var t = {};
                        return function(e) {
                            if (void 0 === t[e]) {
                                var n = document.querySelector(e);
                                if (
                                    window.HTMLIFrameElement &&
                                    n instanceof window.HTMLIFrameElement
                                )
                                    try {
                                        n = n.contentDocument.head;
                                    } catch (t) {
                                        n = null;
                                    }
                                t[e] = n;
                            }
                            return t[e];
                        };
                    })(),
                    o = [];
                function a(t) {
                    for (var e = -1, n = 0; n < o.length; n++)
                        if (o[n].identifier === t) {
                            e = n;
                            break;
                        }
                    return e;
                }
                function s(t, e) {
                    for (var n = {}, r = [], i = 0; i < t.length; i++) {
                        var s = t[i],
                            c = e.base ? s[0] + e.base : s[0],
                            u = n[c] || 0,
                            l = ''.concat(c, ' ').concat(u);
                        n[c] = u + 1;
                        var f = a(l),
                            h = { css: s[1], media: s[2], sourceMap: s[3] };
                        -1 !== f
                            ? (o[f].references++, o[f].updater(h))
                            : o.push({
                                  identifier: l,
                                  updater: g(h, e),
                                  references: 1,
                              }),
                            r.push(l);
                    }
                    return r;
                }
                function c(t) {
                    var e = document.createElement('style'),
                        r = t.attributes || {};
                    if (void 0 === r.nonce) {
                        var o = n.nc;
                        o && (r.nonce = o);
                    }
                    if (
                        (Object.keys(r).forEach(function(t) {
                            e.setAttribute(t, r[t]);
                        }),
                        'function' == typeof t.insert)
                    )
                        t.insert(e);
                    else {
                        var a = i(t.insert || 'head');
                        if (!a)
                            throw new Error(
                                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                            );
                        a.appendChild(e);
                    }
                    return e;
                }
                var u,
                    l =
                        ((u = []),
                        function(t, e) {
                            return (u[t] = e), u.filter(Boolean).join('\n');
                        });
                function f(t, e, n, r) {
                    var i = n
                        ? ''
                        : r.media
                        ? '@media '.concat(r.media, ' {').concat(r.css, '}')
                        : r.css;
                    if (t.styleSheet) t.styleSheet.cssText = l(e, i);
                    else {
                        var o = document.createTextNode(i),
                            a = t.childNodes;
                        a[e] && t.removeChild(a[e]),
                            a.length
                                ? t.insertBefore(o, a[e])
                                : t.appendChild(o);
                    }
                }
                function h(t, e, n) {
                    var r = n.css,
                        i = n.media,
                        o = n.sourceMap;
                    if (
                        (i
                            ? t.setAttribute('media', i)
                            : t.removeAttribute('media'),
                        o &&
                            'undefined' != typeof btoa &&
                            (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                btoa(
                                    unescape(
                                        encodeURIComponent(JSON.stringify(o))
                                    )
                                ),
                                ' */'
                            )),
                        t.styleSheet)
                    )
                        t.styleSheet.cssText = r;
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(r));
                    }
                }
                var d = null,
                    p = 0;
                function g(t, e) {
                    var n, r, i;
                    if (e.singleton) {
                        var o = p++;
                        (n = d || (d = c(e))),
                            (r = f.bind(null, n, o, !1)),
                            (i = f.bind(null, n, o, !0));
                    } else
                        (n = c(e)),
                            (r = h.bind(null, n, e)),
                            (i = function() {
                                !(function(t) {
                                    if (null === t.parentNode) return !1;
                                    t.parentNode.removeChild(t);
                                })(n);
                            });
                    return (
                        r(t),
                        function(e) {
                            if (e) {
                                if (
                                    e.css === t.css &&
                                    e.media === t.media &&
                                    e.sourceMap === t.sourceMap
                                )
                                    return;
                                r((t = e));
                            } else i();
                        }
                    );
                }
                t.exports = function(t, e) {
                    (e = e || {}).singleton ||
                        'boolean' == typeof e.singleton ||
                        (e.singleton =
                            (void 0 === r &&
                                (r = Boolean(
                                    window &&
                                        document &&
                                        document.all &&
                                        !window.atob
                                )),
                            r));
                    var n = s((t = t || []), e);
                    return function(t) {
                        if (
                            ((t = t || []),
                            '[object Array]' ===
                                Object.prototype.toString.call(t))
                        ) {
                            for (var r = 0; r < n.length; r++) {
                                var i = a(n[r]);
                                o[i].references--;
                            }
                            for (var c = s(t, e), u = 0; u < n.length; u++) {
                                var l = a(n[u]);
                                0 === o[l].references &&
                                    (o[l].updater(), o.splice(l, 1));
                            }
                            n = c;
                        }
                    };
                };
            },
            933: (t, e, n) => {
                var r;
                !(function() {
                    function i(t, e, n) {
                        return t.call.apply(t.bind, arguments);
                    }
                    function o(t, e, n) {
                        if (!t) throw Error();
                        if (2 < arguments.length) {
                            var r = Array.prototype.slice.call(arguments, 2);
                            return function() {
                                var n = Array.prototype.slice.call(arguments);
                                return (
                                    Array.prototype.unshift.apply(n, r),
                                    t.apply(e, n)
                                );
                            };
                        }
                        return function() {
                            return t.apply(e, arguments);
                        };
                    }
                    function a(t, e, n) {
                        return (a =
                            Function.prototype.bind &&
                            -1 !=
                                Function.prototype.bind
                                    .toString()
                                    .indexOf('native code')
                                ? i
                                : o).apply(null, arguments);
                    }
                    var s =
                        Date.now ||
                        function() {
                            return +new Date();
                        };
                    function c(t, e) {
                        (this.a = t),
                            (this.o = e || t),
                            (this.c = this.o.document);
                    }
                    var u = !!window.FontFace;
                    function l(t, e, n, r) {
                        if (((e = t.c.createElement(e)), n))
                            for (var i in n)
                                n.hasOwnProperty(i) &&
                                    ('style' == i
                                        ? (e.style.cssText = n[i])
                                        : e.setAttribute(i, n[i]));
                        return r && e.appendChild(t.c.createTextNode(r)), e;
                    }
                    function f(t, e, n) {
                        (t = t.c.getElementsByTagName(e)[0]) ||
                            (t = document.documentElement),
                            t.insertBefore(n, t.lastChild);
                    }
                    function h(t) {
                        t.parentNode && t.parentNode.removeChild(t);
                    }
                    function d(t, e, n) {
                        (e = e || []), (n = n || []);
                        for (
                            var r = t.className.split(/\s+/), i = 0;
                            i < e.length;
                            i += 1
                        ) {
                            for (var o = !1, a = 0; a < r.length; a += 1)
                                if (e[i] === r[a]) {
                                    o = !0;
                                    break;
                                }
                            o || r.push(e[i]);
                        }
                        for (e = [], i = 0; i < r.length; i += 1) {
                            for (o = !1, a = 0; a < n.length; a += 1)
                                if (r[i] === n[a]) {
                                    o = !0;
                                    break;
                                }
                            o || e.push(r[i]);
                        }
                        t.className = e
                            .join(' ')
                            .replace(/\s+/g, ' ')
                            .replace(/^\s+|\s+$/, '');
                    }
                    function p(t, e) {
                        for (
                            var n = t.className.split(/\s+/),
                                r = 0,
                                i = n.length;
                            r < i;
                            r++
                        )
                            if (n[r] == e) return !0;
                        return !1;
                    }
                    function g(t, e, n) {
                        function r() {
                            s && i && o && (s(a), (s = null));
                        }
                        e = l(t, 'link', {
                            rel: 'stylesheet',
                            href: e,
                            media: 'all',
                        });
                        var i = !1,
                            o = !0,
                            a = null,
                            s = n || null;
                        u
                            ? ((e.onload = function() {
                                  (i = !0), r();
                              }),
                              (e.onerror = function() {
                                  (i = !0),
                                      (a = Error('Stylesheet failed to load')),
                                      r();
                              }))
                            : setTimeout(function() {
                                  (i = !0), r();
                              }, 0),
                            f(t, 'head', e);
                    }
                    function m(t, e, n, r) {
                        var i = t.c.getElementsByTagName('head')[0];
                        if (i) {
                            var o = l(t, 'script', { src: e }),
                                a = !1;
                            return (
                                (o.onload = o.onreadystatechange = function() {
                                    a ||
                                        (this.readyState &&
                                            'loaded' != this.readyState &&
                                            'complete' != this.readyState) ||
                                        ((a = !0),
                                        n && n(null),
                                        (o.onload = o.onreadystatechange = null),
                                        'HEAD' == o.parentNode.tagName &&
                                            i.removeChild(o));
                                }),
                                i.appendChild(o),
                                setTimeout(function() {
                                    a ||
                                        ((a = !0),
                                        n && n(Error('Script load timeout')));
                                }, r || 5e3),
                                o
                            );
                        }
                        return null;
                    }
                    function v() {
                        (this.a = 0), (this.c = null);
                    }
                    function y(t) {
                        return (
                            t.a++,
                            function() {
                                t.a--, w(t);
                            }
                        );
                    }
                    function b(t, e) {
                        (t.c = e), w(t);
                    }
                    function w(t) {
                        0 == t.a && t.c && (t.c(), (t.c = null));
                    }
                    function x(t) {
                        this.a = t || '-';
                    }
                    function k(t, e) {
                        (this.c = t), (this.f = 4), (this.a = 'n');
                        var n = (e || 'n4').match(/^([nio])([1-9])$/i);
                        n && ((this.a = n[1]), (this.f = parseInt(n[2], 10)));
                    }
                    function S(t) {
                        var e = [];
                        t = t.split(/,\s*/);
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n].replace(/['"]/g, '');
                            -1 != r.indexOf(' ') || /^\d/.test(r)
                                ? e.push("'" + r + "'")
                                : e.push(r);
                        }
                        return e.join(',');
                    }
                    function j(t) {
                        return t.a + t.f;
                    }
                    function M(t) {
                        var e = 'normal';
                        return (
                            'o' === t.a
                                ? (e = 'oblique')
                                : 'i' === t.a && (e = 'italic'),
                            e
                        );
                    }
                    function A(t) {
                        var e = 4,
                            n = 'n',
                            r = null;
                        return (
                            t &&
                                ((r = t.match(/(normal|oblique|italic)/i)) &&
                                    r[1] &&
                                    (n = r[1].substr(0, 1).toLowerCase()),
                                (r = t.match(/([1-9]00|normal|bold)/i)) &&
                                    r[1] &&
                                    (/bold/i.test(r[1])
                                        ? (e = 7)
                                        : /[1-9]00/.test(r[1]) &&
                                          (e = parseInt(
                                              r[1].substr(0, 1),
                                              10
                                          )))),
                            n + e
                        );
                    }
                    function T(t, e) {
                        (this.c = t),
                            (this.f = t.o.document.documentElement),
                            (this.h = e),
                            (this.a = new x('-')),
                            (this.j = !1 !== e.events),
                            (this.g = !1 !== e.classes);
                    }
                    function _(t) {
                        if (t.g) {
                            var e = p(t.f, t.a.c('wf', 'active')),
                                n = [],
                                r = [t.a.c('wf', 'loading')];
                            e || n.push(t.a.c('wf', 'inactive')), d(t.f, n, r);
                        }
                        O(t, 'inactive');
                    }
                    function O(t, e, n) {
                        t.j && t.h[e] && (n ? t.h[e](n.c, j(n)) : t.h[e]());
                    }
                    function P() {
                        this.c = {};
                    }
                    function I(t, e) {
                        (this.c = t),
                            (this.f = e),
                            (this.a = l(
                                this.c,
                                'span',
                                { 'aria-hidden': 'true' },
                                this.f
                            ));
                    }
                    function E(t) {
                        f(t.c, 'body', t.a);
                    }
                    function C(t) {
                        return (
                            'display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:' +
                            S(t.c) +
                            ';font-style:' +
                            M(t) +
                            ';font-weight:' +
                            t.f +
                            '00;'
                        );
                    }
                    function F(t, e, n, r, i, o) {
                        (this.g = t),
                            (this.j = e),
                            (this.a = r),
                            (this.c = n),
                            (this.f = i || 3e3),
                            (this.h = o || void 0);
                    }
                    function L(t, e, n, r, i, o, a) {
                        (this.v = t),
                            (this.B = e),
                            (this.c = n),
                            (this.a = r),
                            (this.s = a || 'BESbswy'),
                            (this.f = {}),
                            (this.w = i || 3e3),
                            (this.u = o || null),
                            (this.m = this.j = this.h = this.g = null),
                            (this.g = new I(this.c, this.s)),
                            (this.h = new I(this.c, this.s)),
                            (this.j = new I(this.c, this.s)),
                            (this.m = new I(this.c, this.s)),
                            (t = C(
                                (t = new k(this.a.c + ',serif', j(this.a)))
                            )),
                            (this.g.a.style.cssText = t),
                            (t = C(
                                (t = new k(this.a.c + ',sans-serif', j(this.a)))
                            )),
                            (this.h.a.style.cssText = t),
                            (t = C((t = new k('serif', j(this.a))))),
                            (this.j.a.style.cssText = t),
                            (t = C((t = new k('sans-serif', j(this.a))))),
                            (this.m.a.style.cssText = t),
                            E(this.g),
                            E(this.h),
                            E(this.j),
                            E(this.m);
                    }
                    (x.prototype.c = function(t) {
                        for (var e = [], n = 0; n < arguments.length; n++)
                            e.push(
                                arguments[n]
                                    .replace(/[\W_]+/g, '')
                                    .toLowerCase()
                            );
                        return e.join(this.a);
                    }),
                        (F.prototype.start = function() {
                            var t = this.c.o.document,
                                e = this,
                                n = s(),
                                r = new Promise(function(r, i) {
                                    !(function o() {
                                        s() - n >= e.f
                                            ? i()
                                            : t.fonts
                                                  .load(
                                                      (function(t) {
                                                          return (
                                                              M(t) +
                                                              ' ' +
                                                              t.f +
                                                              '00 300px ' +
                                                              S(t.c)
                                                          );
                                                      })(e.a),
                                                      e.h
                                                  )
                                                  .then(
                                                      function(t) {
                                                          1 <= t.length
                                                              ? r()
                                                              : setTimeout(
                                                                    o,
                                                                    25
                                                                );
                                                      },
                                                      function() {
                                                          i();
                                                      }
                                                  );
                                    })();
                                }),
                                i = null,
                                o = new Promise(function(t, n) {
                                    i = setTimeout(n, e.f);
                                });
                            Promise.race([o, r]).then(
                                function() {
                                    i && (clearTimeout(i), (i = null)),
                                        e.g(e.a);
                                },
                                function() {
                                    e.j(e.a);
                                }
                            );
                        });
                    var N = { D: 'serif', C: 'sans-serif' },
                        z = null;
                    function B() {
                        if (null === z) {
                            var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                                window.navigator.userAgent
                            );
                            z =
                                !!t &&
                                (536 > parseInt(t[1], 10) ||
                                    (536 === parseInt(t[1], 10) &&
                                        11 >= parseInt(t[2], 10)));
                        }
                        return z;
                    }
                    function R(t, e, n) {
                        for (var r in N)
                            if (
                                N.hasOwnProperty(r) &&
                                e === t.f[N[r]] &&
                                n === t.f[N[r]]
                            )
                                return !0;
                        return !1;
                    }
                    function X(t) {
                        var e,
                            n = t.g.a.offsetWidth,
                            r = t.h.a.offsetWidth;
                        (e = n === t.f.serif && r === t.f['sans-serif']) ||
                            (e = B() && R(t, n, r)),
                            e
                                ? s() - t.A >= t.w
                                    ? B() &&
                                      R(t, n, r) &&
                                      (null === t.u ||
                                          t.u.hasOwnProperty(t.a.c))
                                        ? W(t, t.v)
                                        : W(t, t.B)
                                    : (function(t) {
                                          setTimeout(
                                              a(function() {
                                                  X(this);
                                              }, t),
                                              50
                                          );
                                      })(t)
                                : W(t, t.v);
                    }
                    function W(t, e) {
                        setTimeout(
                            a(function() {
                                h(this.g.a),
                                    h(this.h.a),
                                    h(this.j.a),
                                    h(this.m.a),
                                    e(this.a);
                            }, t),
                            0
                        );
                    }
                    function Y(t, e, n) {
                        (this.c = t),
                            (this.a = e),
                            (this.f = 0),
                            (this.m = this.j = !1),
                            (this.s = n);
                    }
                    L.prototype.start = function() {
                        (this.f.serif = this.j.a.offsetWidth),
                            (this.f['sans-serif'] = this.m.a.offsetWidth),
                            (this.A = s()),
                            X(this);
                    };
                    var $ = null;
                    function q(t) {
                        0 == --t.f &&
                            t.j &&
                            (t.m
                                ? ((t = t.a).g &&
                                      d(
                                          t.f,
                                          [t.a.c('wf', 'active')],
                                          [
                                              t.a.c('wf', 'loading'),
                                              t.a.c('wf', 'inactive'),
                                          ]
                                      ),
                                  O(t, 'active'))
                                : _(t.a));
                    }
                    function H(t) {
                        (this.j = t),
                            (this.a = new P()),
                            (this.h = 0),
                            (this.f = this.g = !0);
                    }
                    function Z(t, e, n, r, i) {
                        var o = 0 == --t.h;
                        (t.f || t.g) &&
                            setTimeout(function() {
                                var t = i || null,
                                    s = r || {};
                                if (0 === n.length && o) _(e.a);
                                else {
                                    (e.f += n.length), o && (e.j = o);
                                    var c,
                                        u = [];
                                    for (c = 0; c < n.length; c++) {
                                        var l = n[c],
                                            f = s[l.c],
                                            h = e.a,
                                            p = l;
                                        if (
                                            (h.g &&
                                                d(h.f, [
                                                    h.a.c(
                                                        'wf',
                                                        p.c,
                                                        j(p).toString(),
                                                        'loading'
                                                    ),
                                                ]),
                                            O(h, 'fontloading', p),
                                            (h = null),
                                            null === $)
                                        )
                                            if (window.FontFace) {
                                                p = /Gecko.*Firefox\/(\d+)/.exec(
                                                    window.navigator.userAgent
                                                );
                                                var g =
                                                    /OS X.*Version\/10\..*Safari/.exec(
                                                        window.navigator
                                                            .userAgent
                                                    ) &&
                                                    /Apple/.exec(
                                                        window.navigator.vendor
                                                    );
                                                $ = p
                                                    ? 42 < parseInt(p[1], 10)
                                                    : !g;
                                            } else $ = !1;
                                        (h = $
                                            ? new F(
                                                  a(e.g, e),
                                                  a(e.h, e),
                                                  e.c,
                                                  l,
                                                  e.s,
                                                  f
                                              )
                                            : new L(
                                                  a(e.g, e),
                                                  a(e.h, e),
                                                  e.c,
                                                  l,
                                                  e.s,
                                                  t,
                                                  f
                                              )),
                                            u.push(h);
                                    }
                                    for (c = 0; c < u.length; c++) u[c].start();
                                }
                            }, 0);
                    }
                    function D(t, e) {
                        (this.c = t), (this.a = e);
                    }
                    function V(t, e) {
                        (this.c = t), (this.a = e);
                    }
                    function G(t, e) {
                        (this.c = t || Q),
                            (this.a = []),
                            (this.f = []),
                            (this.g = e || '');
                    }
                    (Y.prototype.g = function(t) {
                        var e = this.a;
                        e.g &&
                            d(
                                e.f,
                                [e.a.c('wf', t.c, j(t).toString(), 'active')],
                                [
                                    e.a.c(
                                        'wf',
                                        t.c,
                                        j(t).toString(),
                                        'loading'
                                    ),
                                    e.a.c(
                                        'wf',
                                        t.c,
                                        j(t).toString(),
                                        'inactive'
                                    ),
                                ]
                            ),
                            O(e, 'fontactive', t),
                            (this.m = !0),
                            q(this);
                    }),
                        (Y.prototype.h = function(t) {
                            var e = this.a;
                            if (e.g) {
                                var n = p(
                                        e.f,
                                        e.a.c(
                                            'wf',
                                            t.c,
                                            j(t).toString(),
                                            'active'
                                        )
                                    ),
                                    r = [],
                                    i = [
                                        e.a.c(
                                            'wf',
                                            t.c,
                                            j(t).toString(),
                                            'loading'
                                        ),
                                    ];
                                n ||
                                    r.push(
                                        e.a.c(
                                            'wf',
                                            t.c,
                                            j(t).toString(),
                                            'inactive'
                                        )
                                    ),
                                    d(e.f, r, i);
                            }
                            O(e, 'fontinactive', t), q(this);
                        }),
                        (H.prototype.load = function(t) {
                            (this.c = new c(this.j, t.context || this.j)),
                                (this.g = !1 !== t.events),
                                (this.f = !1 !== t.classes),
                                (function(t, e, n) {
                                    var r = [],
                                        i = n.timeout;
                                    !(function(t) {
                                        t.g && d(t.f, [t.a.c('wf', 'loading')]),
                                            O(t, 'loading');
                                    })(e),
                                        (r = (function(t, e, n) {
                                            var r,
                                                i = [];
                                            for (r in e)
                                                if (e.hasOwnProperty(r)) {
                                                    var o = t.c[r];
                                                    o && i.push(o(e[r], n));
                                                }
                                            return i;
                                        })(t.a, n, t.c));
                                    var o = new Y(t.c, e, i);
                                    for (
                                        t.h = r.length, e = 0, n = r.length;
                                        e < n;
                                        e++
                                    )
                                        r[e].load(function(e, n, r) {
                                            Z(t, o, e, n, r);
                                        });
                                })(this, new T(this.c, t), t);
                        }),
                        (D.prototype.load = function(t) {
                            function e() {
                                if (o['__mti_fntLst' + r]) {
                                    var n,
                                        i = o['__mti_fntLst' + r](),
                                        a = [];
                                    if (i)
                                        for (var s = 0; s < i.length; s++) {
                                            var c = i[s].fontfamily;
                                            null != i[s].fontStyle &&
                                            null != i[s].fontWeight
                                                ? ((n =
                                                      i[s].fontStyle +
                                                      i[s].fontWeight),
                                                  a.push(new k(c, n)))
                                                : a.push(new k(c));
                                        }
                                    t(a);
                                } else
                                    setTimeout(function() {
                                        e();
                                    }, 50);
                            }
                            var n = this,
                                r = n.a.projectId,
                                i = n.a.version;
                            if (r) {
                                var o = n.c.o;
                                m(
                                    this.c,
                                    (n.a.api ||
                                        'https://fast.fonts.net/jsapi') +
                                        '/' +
                                        r +
                                        '.js' +
                                        (i ? '?v=' + i : ''),
                                    function(i) {
                                        i
                                            ? t([])
                                            : ((o[
                                                  '__MonotypeConfiguration__' +
                                                      r
                                              ] = function() {
                                                  return n.a;
                                              }),
                                              e());
                                    }
                                ).id = '__MonotypeAPIScript__' + r;
                            } else t([]);
                        }),
                        (V.prototype.load = function(t) {
                            var e,
                                n,
                                r = this.a.urls || [],
                                i = this.a.families || [],
                                o = this.a.testStrings || {},
                                a = new v();
                            for (e = 0, n = r.length; e < n; e++)
                                g(this.c, r[e], y(a));
                            var s = [];
                            for (e = 0, n = i.length; e < n; e++)
                                if ((r = i[e].split(':'))[1])
                                    for (
                                        var c = r[1].split(','), u = 0;
                                        u < c.length;
                                        u += 1
                                    )
                                        s.push(new k(r[0], c[u]));
                                else s.push(new k(r[0]));
                            b(a, function() {
                                t(s, o);
                            });
                        });
                    var Q = 'https://fonts.googleapis.com/css';
                    function U(t) {
                        (this.f = t), (this.a = []), (this.c = {});
                    }
                    var J = {
                            latin: 'BESbswy',
                            'latin-ext': 'çöüğş',
                            cyrillic: 'йяЖ',
                            greek: 'αβΣ',
                            khmer: 'កខគ',
                            Hanuman: 'កខគ',
                        },
                        K = {
                            thin: '1',
                            extralight: '2',
                            'extra-light': '2',
                            ultralight: '2',
                            'ultra-light': '2',
                            light: '3',
                            regular: '4',
                            book: '4',
                            medium: '5',
                            'semi-bold': '6',
                            semibold: '6',
                            'demi-bold': '6',
                            demibold: '6',
                            bold: '7',
                            'extra-bold': '8',
                            extrabold: '8',
                            'ultra-bold': '8',
                            ultrabold: '8',
                            black: '9',
                            heavy: '9',
                            l: '3',
                            r: '4',
                            b: '7',
                        },
                        tt = { i: 'i', italic: 'i', n: 'n', normal: 'n' },
                        et = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
                    function nt(t, e) {
                        (this.c = t), (this.a = e);
                    }
                    var rt = { Arimo: !0, Cousine: !0, Tinos: !0 };
                    function it(t, e) {
                        (this.c = t), (this.a = e);
                    }
                    function ot(t, e) {
                        (this.c = t), (this.f = e), (this.a = []);
                    }
                    (nt.prototype.load = function(t) {
                        var e = new v(),
                            n = this.c,
                            r = new G(this.a.api, this.a.text),
                            i = this.a.families;
                        !(function(t, e) {
                            for (var n = e.length, r = 0; r < n; r++) {
                                var i = e[r].split(':');
                                3 == i.length && t.f.push(i.pop());
                                var o = '';
                                2 == i.length && '' != i[1] && (o = ':'),
                                    t.a.push(i.join(o));
                            }
                        })(r, i);
                        var o = new U(i);
                        !(function(t) {
                            for (var e = t.f.length, n = 0; n < e; n++) {
                                var r = t.f[n].split(':'),
                                    i = r[0].replace(/\+/g, ' '),
                                    o = ['n4'];
                                if (2 <= r.length) {
                                    var a;
                                    if (((a = []), (s = r[1])))
                                        for (
                                            var s,
                                                c = (s = s.split(',')).length,
                                                u = 0;
                                            u < c;
                                            u++
                                        ) {
                                            var l;
                                            if ((l = s[u]).match(/^[\w-]+$/))
                                                if (
                                                    null ==
                                                    (f = et.exec(
                                                        l.toLowerCase()
                                                    ))
                                                )
                                                    l = '';
                                                else {
                                                    if (
                                                        ((l =
                                                            null ==
                                                                (l = f[2]) ||
                                                            '' == l
                                                                ? 'n'
                                                                : tt[l]),
                                                        null == (f = f[1]) ||
                                                            '' == f)
                                                    )
                                                        f = '4';
                                                    else
                                                        var f =
                                                            K[f] ||
                                                            (isNaN(f)
                                                                ? '4'
                                                                : f.substr(
                                                                      0,
                                                                      1
                                                                  ));
                                                    l = [l, f].join('');
                                                }
                                            else l = '';
                                            l && a.push(l);
                                        }
                                    0 < a.length && (o = a),
                                        3 == r.length &&
                                            ((a = []),
                                            0 <
                                                (r = (r = r[2])
                                                    ? r.split(',')
                                                    : a).length &&
                                                (r = J[r[0]]) &&
                                                (t.c[i] = r));
                                }
                                for (
                                    t.c[i] || ((r = J[i]) && (t.c[i] = r)),
                                        r = 0;
                                    r < o.length;
                                    r += 1
                                )
                                    t.a.push(new k(i, o[r]));
                            }
                        })(o),
                            g(
                                n,
                                (function(t) {
                                    if (0 == t.a.length)
                                        throw Error('No fonts to load!');
                                    if (-1 != t.c.indexOf('kit=')) return t.c;
                                    for (
                                        var e = t.a.length, n = [], r = 0;
                                        r < e;
                                        r++
                                    )
                                        n.push(t.a[r].replace(/ /g, '+'));
                                    return (
                                        (e = t.c + '?family=' + n.join('%7C')),
                                        0 < t.f.length &&
                                            (e += '&subset=' + t.f.join(',')),
                                        0 < t.g.length &&
                                            (e +=
                                                '&text=' +
                                                encodeURIComponent(t.g)),
                                        e
                                    );
                                })(r),
                                y(e)
                            ),
                            b(e, function() {
                                t(o.a, o.c, rt);
                            });
                    }),
                        (it.prototype.load = function(t) {
                            var e = this.a.id,
                                n = this.c.o;
                            e
                                ? m(
                                      this.c,
                                      (this.a.api ||
                                          'https://use.typekit.net') +
                                          '/' +
                                          e +
                                          '.js',
                                      function(e) {
                                          if (e) t([]);
                                          else if (
                                              n.Typekit &&
                                              n.Typekit.config &&
                                              n.Typekit.config.fn
                                          ) {
                                              e = n.Typekit.config.fn;
                                              for (
                                                  var r = [], i = 0;
                                                  i < e.length;
                                                  i += 2
                                              )
                                                  for (
                                                      var o = e[i],
                                                          a = e[i + 1],
                                                          s = 0;
                                                      s < a.length;
                                                      s++
                                                  )
                                                      r.push(new k(o, a[s]));
                                              try {
                                                  n.Typekit.load({
                                                      events: !1,
                                                      classes: !1,
                                                      async: !0,
                                                  });
                                              } catch (t) {}
                                              t(r);
                                          }
                                      },
                                      2e3
                                  )
                                : t([]);
                        }),
                        (ot.prototype.load = function(t) {
                            var e = this.f.id,
                                n = this.c.o,
                                r = this;
                            e
                                ? (n.__webfontfontdeckmodule__ ||
                                      (n.__webfontfontdeckmodule__ = {}),
                                  (n.__webfontfontdeckmodule__[e] = function(
                                      e,
                                      n
                                  ) {
                                      for (
                                          var i = 0, o = n.fonts.length;
                                          i < o;
                                          ++i
                                      ) {
                                          var a = n.fonts[i];
                                          r.a.push(
                                              new k(
                                                  a.name,
                                                  A(
                                                      'font-weight:' +
                                                          a.weight +
                                                          ';font-style:' +
                                                          a.style
                                                  )
                                              )
                                          );
                                      }
                                      t(r.a);
                                  }),
                                  m(
                                      this.c,
                                      (this.f.api ||
                                          'https://f.fontdeck.com/s/css/js/') +
                                          (function(t) {
                                              return (
                                                  t.o.location.hostname ||
                                                  t.a.location.hostname
                                              );
                                          })(this.c) +
                                          '/' +
                                          e +
                                          '.js',
                                      function(e) {
                                          e && t([]);
                                      }
                                  ))
                                : t([]);
                        });
                    var at = new H(window);
                    (at.a.c.custom = function(t, e) {
                        return new V(e, t);
                    }),
                        (at.a.c.fontdeck = function(t, e) {
                            return new ot(e, t);
                        }),
                        (at.a.c.monotype = function(t, e) {
                            return new D(e, t);
                        }),
                        (at.a.c.typekit = function(t, e) {
                            return new it(e, t);
                        }),
                        (at.a.c.google = function(t, e) {
                            return new nt(e, t);
                        });
                    var st = { load: a(at.load, at) };
                    void 0 ===
                        (r = function() {
                            return st;
                        }.call(e, n, e, t)) || (t.exports = r);
                })();
            },
        },
        e = {};
    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = (e[r] = { id: r, exports: {} });
        return t[r].call(o.exports, o, o.exports, n), o.exports;
    }
    (n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, { a: e }), e;
    }),
        (n.d = (t, e) => {
            for (var r in e)
                n.o(e, r) &&
                    !n.o(t, r) &&
                    Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        }),
        (n.g = (function() {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (t) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (n.r = t => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (n.nc = void 0),
        (() => {
            'use strict';
            var t = n(933),
                e = n.n(t),
                r = n(277),
                i = n.n(r);
            const o = document.getElementById('c'),
                a = o.getContext('2d');
            let s, c;
            const u = () => {
                (c = window.innerWidth),
                    (s = window.innerHeight),
                    (o.width = c * devicePixelRatio),
                    (o.height = s * devicePixelRatio),
                    a.scale(devicePixelRatio, devicePixelRatio);
            };
            class l {
                constructor(t) {
                    Object.assign(this, t);
                }
                draw() {
                    (a.globalAlpha = this.opacity || 1),
                        a.beginPath(),
                        a.arc(this.x, this.y, this.r, 0, 2 * Math.PI, !1),
                        this.stroke &&
                            ((a.strokeStyle = this.stroke.color),
                            (a.lineWidth = this.stroke.width),
                            a.stroke()),
                        this.fill && ((a.fillStyle = this.fill), a.fill()),
                        a.closePath(),
                        (a.globalAlpha = 1);
                }
            }
            const f = new (class {
                constructor() {
                    this.animations = [];
                }
                add(t) {
                    this.animations.push(t);
                }
                remove(t) {
                    const e = this.animations.indexOf(t);
                    e > -1 && this.animations.splice(e, 1);
                }
                init() {
                    i()({
                        duration: 1 / 0,
                        update: () => {
                            a.clearRect(0, 0, c, s),
                                this.animations.forEach(t => {
                                    t.animatables.forEach(t => {
                                        console.log(t), t.target.draw();
                                    });
                                });
                        },
                    });
                }
            })();
            f.init();
            class h {
                constructor(t, e, n) {
                    Object.assign(this, { x: t, y: e, fill: n }),
                        (this.circle = new l({
                            x: this.x,
                            y: this.y,
                            r: 0,
                            fill: this.fill,
                        })),
                        this._animate();
                }
                _animate() {
                    const t = this._calcR();
                    (this.animation = i()({
                        targets: this.circle,
                        r: t,
                        duration: Math.max(t / 2, 750),
                        easing: 'easeOutQuart',
                        complete: () => {
                            f.remove(this.animation),
                                (document.body.style.background = this.fill);
                        },
                    })),
                        f.add(this.animation);
                }
                _calcR() {
                    const t = Math.max(this.x - 0, c - this.x),
                        e = Math.max(this.y - 0, s - this.y);
                    return Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2));
                }
            }
            class d {
                constructor(t, e, n, r) {
                    (this.size = r),
                        (this.circle = new l({
                            x: t,
                            y: e,
                            fill: n,
                            r: 0,
                            opacity: 1,
                            stroke: { width: 3, color: n },
                        })),
                        this._animate();
                }
                _animate() {
                    (this.animation = i()({
                        targets: this.circle,
                        r: this.size,
                        opacity: 0,
                        easing: 'easeOutExpo',
                        duration: 1100,
                        complete: () => {
                            f.remove(this.animation);
                        },
                    })),
                        f.add(this.animation);
                }
            }
            class p {
                constructor(t, e, n, r) {
                    (this.size = r), (this.particles = []);
                    for (let r = 0; r < 32; r++)
                        this.particles.push(
                            new l({
                                x: t,
                                y: e,
                                fill: n,
                                r: i().random(24, 48),
                            })
                        );
                    this._animate();
                }
                _animate() {
                    (this.animation = i()({
                        targets: this.particles,
                        x: t => t.x + i().random(this.size, -this.size),
                        y: t =>
                            t.y +
                            i().random(1.15 * this.size, 1.15 * -this.size),
                        r: 0,
                        easing: 'easeOutExpo',
                        duration: 1150,
                        complete: () => {
                            f.remove(this.animation);
                        },
                    })),
                        f.add(this.animation);
                }
            }
            const g = document.getElementById('target-dot'),
                m = g.querySelector('.pulse--front'),
                v = g.offsetWidth,
                y = g.offsetHeight;
            let b,
                w,
                x,
                k = !0;
            const S = () => {
                    k &&
                        (g.classList.toggle('pulsing'),
                        (b = window.setTimeout(() => {
                            S();
                        }, 1500)));
                },
                j = (t, e) => {
                    k &&
                        ((k = !1),
                        g.classList.remove('pulsing'),
                        b && window.clearTimeout(b),
                        (w = g.offsetLeft),
                        (x = g.offsetTop),
                        (g.style.transform =
                            'translateX(' + w + 'px) translateY(' + x + 'px)'));
                    const { x: n, y: r } = ((t, e) => {
                        let n, r, o;
                        const a = 0.5 * Math.min(s, c);
                        do {
                            (r = i().random(0, t - v)),
                                (o = i().random(0, e - y));
                            const a = Math.pow(w - r, 2),
                                s = Math.pow(x - o, 2);
                            n = Math.sqrt(a + s);
                        } while (n < a);
                        return (w = r), (x = o), { x: r, y: o };
                    })(t, e);
                    i()({
                        targets: g,
                        translateX: n,
                        translateY: r,
                        duration: 800,
                        easing: 'easeOutExpo',
                    });
                },
                M = ['#FF1C83', '#282741', '#26b4cd', '#FFBE53'];
            let A = 0,
                T = M[A];
            const _ = document.createElement('style');
            var O;
            document.head.appendChild(_),
                n(607),
                u(),
                window.addEventListener('resize', u),
                S(),
                (O = t => {
                    t.touches && (t.preventDefault(), (t = t.touches[0]));
                    const e = T,
                        n = (A++, A >= M.length && (A = 0), (T = M[A]), T),
                        r = Math.min(200, 0.4 * c);
                    var i, o;
                    j(c, s),
                        (i = e),
                        (m.style.background = i),
                        (o = e),
                        (_.innerText = 'a:after{background:' + o + '}'),
                        (document.body.classList = 'active'),
                        new h(t.clientX, t.clientY, n),
                        new d(t.clientX, t.clientY, e, r),
                        new p(t.clientX, t.clientY, e, r);
                }),
                g.addEventListener('touchstart', O),
                g.addEventListener('mousedown', O),
                e().load({
                    google: { families: ['Alegreya:900'], text: 'Hi' },
                });
        })();
})();
