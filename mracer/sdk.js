var adxAds  = true;
var adxAds2 = false;

! function e(t, n, o) {
    function i(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var d = "function" == typeof require && require;
                if (!a && d) return d(s, !0);
                if (r) return r(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = n[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, function(e) {
                var n = t[s][1][e];
                return i(n || e)
            }, l, l.exports, e, t, n, o)
        }
        return n[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < o.length; s++) i(o[s]);
    return i
}({
    1: [function(e, t, n) {
        "use strict";
        t.exports = e("./").polyfill()
    }, {
        "./": 2
    }],
    2: [function(e, t, n) {
        (function(o, i) {
            ! function(e, o) {
                "object" == typeof n && void 0 !== t ? t.exports = o() : "function" == typeof define && define.amd ? define(o) : e.ES6Promise = o()
            }(this, function() {
                "use strict";

                function t(e) {
                    var t = typeof e;
                    return null !== e && ("object" === t || "function" === t)
                }

                function n(e) {
                    return "function" == typeof e
                }

                function r() {
                    return void 0 !== B ? function() {
                        B(a)
                    } : s()
                }

                function s() {
                    var e = setTimeout;
                    return function() {
                        return e(a, 1)
                    }
                }

                function a() {
                    for (var e = 0; e < O; e += 2)(0, F[e])(F[e + 1]), F[e] = void 0, F[e + 1] = void 0;
                    O = 0
                }

                function d(e, t) {
                    var n = this,
                        o = new this.constructor(l);
                    void 0 === o[Y] && I(o);
                    var i = n._state;
                    if (i) {
                        var r = arguments[i - 1];
                        N(function() {
                            return T(i, o, r, n._result)
                        })
                    } else w(n, o, e, t);
                    return o
                }

                function c(e) {
                    var t = this;
                    if (e && "object" == typeof e && e.constructor === t) return e;
                    var n = new t(l);
                    return y(n, e), n
                }

                function l() {}

                function u() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function h() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function g(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return W.error = e, W
                    }
                }

                function p(e, t, n, o) {
                    try {
                        e.call(t, n, o)
                    } catch (e) {
                        return e
                    }
                }

                function f(e, t, n) {
                    N(function(e) {
                        var o = !1,
                            i = p(n, t, function(n) {
                                o || (o = !0, t !== n ? y(e, n) : _(e, n))
                            }, function(t) {
                                o || (o = !0, E(e, t))
                            }, "Settle: " + (e._label || " unknown promise"));
                        !o && i && (o = !0, E(e, i))
                    }, e)
                }

                function m(e, t) {
                    t._state === Q ? _(e, t._result) : t._state === V ? E(e, t._result) : w(t, void 0, function(t) {
                        return y(e, t)
                    }, function(t) {
                        return E(e, t)
                    })
                }

                function v(e, t, o) {
                    t.constructor === e.constructor && o === d && t.constructor.resolve === c ? m(e, t) : o === W ? (E(e, W.error), W.error = null) : void 0 === o ? _(e, t) : n(o) ? f(e, t, o) : _(e, t)
                }

                function y(e, n) {
                    e === n ? E(e, u()) : t(n) ? v(e, n, g(n)) : _(e, n)
                }

                function b(e) {
                    e._onerror && e._onerror(e._result), A(e)
                }

                function _(e, t) {
                    e._state === z && (e._result = t, e._state = Q, 0 !== e._subscribers.length && N(A, e))
                }

                function E(e, t) {
                    e._state === z && (e._state = V, e._result = t, N(b, e))
                }

                function w(e, t, n, o) {
                    var i = e._subscribers,
                        r = i.length;
                    e._onerror = null, i[r] = t, i[r + Q] = n, i[r + V] = o, 0 === r && e._state && N(A, e)
                }

                function A(e) {
                    var t = e._subscribers,
                        n = e._state;
                    if (0 !== t.length) {
                        for (var o = void 0, i = void 0, r = e._result, s = 0; s < t.length; s += 3) o = t[s], i = t[s + n], o ? T(n, o, i, r) : i(r);
                        e._subscribers.length = 0
                    }
                }

                function D(e, t) {
                    try {
                        return e(t)
                    } catch (e) {
                        return W.error = e, W
                    }
                }

                function T(e, t, o, i) {
                    var r = n(o),
                        s = void 0,
                        a = void 0,
                        d = void 0,
                        c = void 0;
                    if (r) {
                        if ((s = D(o, i)) === W ? (c = !0, a = s.error, s.error = null) : d = !0, t === s) return void E(t, h())
                    } else s = i, d = !0;
                    t._state !== z || (r && d ? y(t, s) : c ? E(t, a) : e === Q ? _(t, s) : e === V && E(t, s))
                }

                function S(e, t) {
                    try {
                        t(function(t) {
                            y(e, t)
                        }, function(t) {
                            E(e, t)
                        })
                    } catch (t) {
                        E(e, t)
                    }
                }

                function R() {
                    return X++
                }

                function I(e) {
                    e[Y] = X++, e._state = void 0, e._result = void 0, e._subscribers = []
                }

                function C() {
                    return new Error("Array Methods must be provided an Array")
                }

                function x() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function k() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }
                var L = void 0,
                    P = L = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    O = 0,
                    B = void 0,
                    M = void 0,
                    N = function(e, t) {
                        F[O] = e, F[O + 1] = t, 2 === (O += 2) && (M ? M(a) : q())
                    },
                    U = "undefined" != typeof window ? window : void 0,
                    G = U || {},
                    K = G.MutationObserver || G.WebKitMutationObserver,
                    j = "undefined" == typeof self && void 0 !== o && "[object process]" === {}.toString.call(o),
                    H = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    F = new Array(1e3),
                    q = void 0;
                q = j ? function() {
                    return o.nextTick(a)
                } : K ? function() {
                    var e = 0,
                        t = new K(a),
                        n = document.createTextNode("");
                    return t.observe(n, {
                            characterData: !0
                        }),
                        function() {
                            n.data = e = ++e % 2
                        }
                }() : H ? function() {
                    var e = new MessageChannel;
                    return e.port1.onmessage = a,
                        function() {
                            return e.port2.postMessage(0)
                        }
                }() : void 0 === U && "function" == typeof e ? function() {
                    try {
                        var e = Function("return this")().require("vertx");
                        return B = e.runOnLoop || e.runOnContext, r()
                    } catch (e) {
                        return s()
                    }
                }() : s();
                var Y = Math.random().toString(36).substring(2),
                    z = void 0,
                    Q = 1,
                    V = 2,
                    W = {
                        error: null
                    },
                    X = 0,
                    J = function() {
                        function e(e, t) {
                            this._instanceConstructor = e, this.promise = new e(l), this.promise[Y] || I(this.promise), P(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? _(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && _(this.promise, this._result))) : E(this.promise, C())
                        }
                        return e.prototype._enumerate = function(e) {
                            for (var t = 0; this._state === z && t < e.length; t++) this._eachEntry(e[t], t)
                        }, e.prototype._eachEntry = function(e, t) {
                            var n = this._instanceConstructor,
                                o = n.resolve;
                            if (o === c) {
                                var i = g(e);
                                if (i === d && e._state !== z) this._settledAt(e._state, t, e._result);
                                else if ("function" != typeof i) this._remaining--, this._result[t] = e;
                                else if (n === $) {
                                    var r = new n(l);
                                    v(r, e, i), this._willSettleAt(r, t)
                                } else this._willSettleAt(new n(function(t) {
                                    return t(e)
                                }), t)
                            } else this._willSettleAt(o(e), t)
                        }, e.prototype._settledAt = function(e, t, n) {
                            var o = this.promise;
                            o._state === z && (this._remaining--, e === V ? E(o, n) : this._result[t] = n), 0 === this._remaining && _(o, this._result)
                        }, e.prototype._willSettleAt = function(e, t) {
                            var n = this;
                            w(e, void 0, function(e) {
                                return n._settledAt(Q, t, e)
                            }, function(e) {
                                return n._settledAt(V, t, e)
                            })
                        }, e
                    }(),
                    $ = function() {
                        function e(t) {
                            this[Y] = R(), this._result = this._state = void 0, this._subscribers = [], l !== t && ("function" != typeof t && x(), this instanceof e ? S(this, t) : k())
                        }
                        return e.prototype.catch = function(e) {
                            return this.then(null, e)
                        }, e.prototype.finally = function(e) {
                            var t = this,
                                n = t.constructor;
                            return t.then(function(t) {
                                return n.resolve(e()).then(function() {
                                    return t
                                })
                            }, function(t) {
                                return n.resolve(e()).then(function() {
                                    throw t
                                })
                            })
                        }, e
                    }();
                return $.prototype.then = d, $.all = function(e) {
                    return new J(this, e).promise
                }, $.race = function(e) {
                    var t = this;
                    return new t(P(e) ? function(n, o) {
                        for (var i = e.length, r = 0; r < i; r++) t.resolve(e[r]).then(n, o)
                    } : function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }, $.resolve = c, $.reject = function(e) {
                    var t = new this(l);
                    return E(t, e), t
                }, $._setScheduler = function(e) {
                    M = e
                }, $._setAsap = function(e) {
                    N = e
                }, $._asap = N, $.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== i) e = i;
                    else if ("undefined" != typeof self) e = self;
                    else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var n = null;
                        try {
                            n = Object.prototype.toString.call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === n && !t.cast) return
                    }
                    e.Promise = $
                }, $.Promise = $, $
            })
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 3
    }],
    3: [function(e, t, n) {
        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function r(e) {
            if (u === setTimeout) return setTimeout(e, 0);
            if ((u === o || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
            try {
                return u(e, 0)
            } catch (t) {
                try {
                    return u.call(null, e, 0)
                } catch (t) {
                    return u.call(this, e, 0)
                }
            }
        }

        function s(e) {
            if (h === clearTimeout) return clearTimeout(e);
            if ((h === i || !h) && clearTimeout) return h = clearTimeout, clearTimeout(e);
            try {
                return h(e)
            } catch (t) {
                try {
                    return h.call(null, e)
                } catch (t) {
                    return h.call(this, e)
                }
            }
        }

        function a() {
            m && p && (m = !1, p.length ? f = p.concat(f) : v = -1, f.length && d())
        }

        function d() {
            if (!m) {
                var e = r(a);
                m = !0;
                for (var t = f.length; t;) {
                    for (p = f, f = []; ++v < t;) p && p[v].run();
                    v = -1, t = f.length
                }
                p = null, m = !1, s(e)
            }
        }

        function c(e, t) {
            this.fun = e, this.array = t
        }

        function l() {}
        var u, h, g = t.exports = {};
        ! function() {
            try {
                u = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                u = o
            }
            try {
                h = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                h = i
            }
        }();
        var p, f = [],
            m = !1,
            v = -1;
        g.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            f.push(new c(e, t)), 1 !== f.length || m || r(d)
        }, c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, g.title = "browser", g.browser = !0, g.env = {}, g.argv = [], g.version = "", g.versions = {}, g.on = l, g.addListener = l, g.once = l, g.off = l, g.removeListener = l, g.removeAllListeners = l, g.emit = l, g.prependListener = l, g.prependOnceListener = l, g.listeners = function(e) {
            return []
        }, g.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, g.cwd = function() {
            return "/"
        }, g.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, g.umask = function() {
            return 0
        }
    }, {}],
    4: [function(e, t, n) {
        ! function(e) {
            "use strict";

            function t(e) {
                if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                return e.toLowerCase()
            }

            function n(e) {
                return "string" != typeof e && (e = String(e)), e
            }

            function o(e) {
                var t = {
                    next: function() {
                        var t = e.shift();
                        return {
                            done: void 0 === t,
                            value: t
                        }
                    }
                };
                return v.iterable && (t[Symbol.iterator] = function() {
                    return t
                }), t
            }

            function i(e) {
                this.map = {}, e instanceof i ? e.forEach(function(e, t) {
                    this.append(t, e)
                }, this) : Array.isArray(e) ? e.forEach(function(e) {
                    this.append(e[0], e[1])
                }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                    this.append(t, e[t])
                }, this)
            }

            function r(e) {
                if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                e.bodyUsed = !0
            }

            function s(e) {
                return new Promise(function(t, n) {
                    e.onload = function() {
                        t(e.result)
                    }, e.onerror = function() {
                        n(e.error)
                    }
                })
            }

            function a(e) {
                var t = new FileReader,
                    n = s(t);
                return t.readAsArrayBuffer(e), n
            }

            function d(e) {
                var t = new FileReader,
                    n = s(t);
                return t.readAsText(e), n
            }

            function c(e) {
                for (var t = new Uint8Array(e), n = new Array(t.length), o = 0; o < t.length; o++) n[o] = String.fromCharCode(t[o]);
                return n.join("")
            }

            function l(e) {
                if (e.slice) return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)), t.buffer
            }

            function u() {
                return this.bodyUsed = !1, this._initBody = function(e) {
                    if (this._bodyInit = e, e)
                        if ("string" == typeof e) this._bodyText = e;
                        else if (v.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                    else if (v.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                    else if (v.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                    else if (v.arrayBuffer && v.blob && b(e)) this._bodyArrayBuffer = l(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                    else {
                        if (!v.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !_(e)) throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = l(e)
                    } else this._bodyText = "";
                    this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : v.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, v.blob && (this.blob = function() {
                    var e = r(this);
                    if (e) return e;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? r(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
                }), this.text = function() {
                    var e = r(this);
                    if (e) return e;
                    if (this._bodyBlob) return d(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, v.formData && (this.formData = function() {
                    return this.text().then(p)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }

            function h(e) {
                var t = e.toUpperCase();
                return E.indexOf(t) > -1 ? t : e
            }

            function g(e, t) {
                var n = (t = t || {}).body;
                if (e instanceof g) {
                    if (e.bodyUsed) throw new TypeError("Already read");
                    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new i(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                } else this.url = String(e);
                if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new i(t.headers)), this.method = h(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(n)
            }

            function p(e) {
                var t = new FormData;
                return e.trim().split("&").forEach(function(e) {
                    if (e) {
                        var n = e.split("="),
                            o = n.shift().replace(/\+/g, " "),
                            i = n.join("=").replace(/\+/g, " ");
                        t.append(decodeURIComponent(o), decodeURIComponent(i))
                    }
                }), t
            }

            function f(e) {
                var t = new i;
                return e.split(/\r?\n/).forEach(function(e) {
                    var n = e.split(":"),
                        o = n.shift().trim();
                    if (o) {
                        var i = n.join(":").trim();
                        t.append(o, i)
                    }
                }), t
            }

            function m(e, t) {
                t || (t = {}), this.type = "default", this.status = "status" in t ? t.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new i(t.headers), this.url = t.url || "", this._initBody(e)
            }
            if (!e.fetch) {
                var v = {
                    searchParams: "URLSearchParams" in e,
                    iterable: "Symbol" in e && "iterator" in Symbol,
                    blob: "FileReader" in e && "Blob" in e && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in e,
                    arrayBuffer: "ArrayBuffer" in e
                };
                if (v.arrayBuffer) var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    b = function(e) {
                        return e && DataView.prototype.isPrototypeOf(e)
                    },
                    _ = ArrayBuffer.isView || function(e) {
                        return e && y.indexOf(Object.prototype.toString.call(e)) > -1
                    };
                i.prototype.append = function(e, o) {
                    e = t(e), o = n(o);
                    var i = this.map[e];
                    this.map[e] = i ? i + "," + o : o
                }, i.prototype.delete = function(e) {
                    delete this.map[t(e)]
                }, i.prototype.get = function(e) {
                    return e = t(e), this.has(e) ? this.map[e] : null
                }, i.prototype.has = function(e) {
                    return this.map.hasOwnProperty(t(e))
                }, i.prototype.set = function(e, o) {
                    this.map[t(e)] = n(o)
                }, i.prototype.forEach = function(e, t) {
                    for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                }, i.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, n) {
                        e.push(n)
                    }), o(e)
                }, i.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), o(e)
                }, i.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, n) {
                        e.push([n, t])
                    }), o(e)
                }, v.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
                var E = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                g.prototype.clone = function() {
                    return new g(this, {
                        body: this._bodyInit
                    })
                }, u.call(g.prototype), u.call(m.prototype), m.prototype.clone = function() {
                    return new m(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new i(this.headers),
                        url: this.url
                    })
                }, m.error = function() {
                    var e = new m(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var w = [301, 302, 303, 307, 308];
                m.redirect = function(e, t) {
                    if (-1 === w.indexOf(t)) throw new RangeError("Invalid status code");
                    return new m(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.Headers = i, e.Request = g, e.Response = m, e.fetch = function(e, t) {
                    return new Promise(function(n, o) {
                        var i = new g(e, t),
                            r = new XMLHttpRequest;
                        r.onload = function() {
                            var e = {
                                status: r.status,
                                statusText: r.statusText,
                                headers: f(r.getAllResponseHeaders() || "")
                            };
                            e.url = "responseURL" in r ? r.responseURL : e.headers.get("X-Request-URL");
                            var t = "response" in r ? r.response : r.responseText;
                            n(new m(t, e))
                        }, r.onerror = function() {
                            o(new TypeError("Network request failed"))
                        }, r.ontimeout = function() {
                            o(new TypeError("Network request failed"))
                        }, r.open(i.method, i.url, !0), "include" === i.credentials && (r.withCredentials = !0), "responseType" in r && v.blob && (r.responseType = "blob"), i.headers.forEach(function(e, t) {
                            r.setRequestHeader(t, e)
                        }), r.send(void 0 === i._bodyInit ? null : i._bodyInit)
                    })
                }, e.fetch.polyfill = !0
            }
        }("undefined" != typeof self ? self : this)
    }, {}],
    5: [function(e, t, n) {
        t.exports = {
            name: "@gamemonetize.com/html5-sdk",
            version: "1.2.4",
            author: "GameMonetize.com",
            description: "GameMonetize.com HTML5 SDK",
            url: "https://gamemonetize.com",
            license: "MIT",
            main: "lib/main.js",
            scripts: {
                test: 'echo "Error: no test specified" && exit 1'
            },
            directories: {
                doc: "https://github.com/GameMonetize/GameMonetize.com-SDK"
            },
            repository: {
                type: "git",
                url: ""
            },
            dependencies: {
                "es6-promise": "^4.1.1",
                "whatwg-fetch": "^2.0.3"
            },
            devDependencies: {
                "babel-eslint": "^8.0.0",
                "babel-preset-env": "^1.6.1",
                babelify: "^7.2.0",
                eslint: "^4.7.0",
                "eslint-config-google": "^0.9.1",
                "eslint-friendly-formatter": "^3.0.0",
                "eslint-loader": "^1.7.1",
                "eslint-plugin-html": "^3.0.0",
                "eslint-plugin-promise": "^3.4.0",
                "eslint-plugin-standard": "^2.0.1",
                grunt: "^1.0.3",
                "grunt-banner": "^0.6.0",
                "grunt-browser-sync": "^2.2.0",
                "grunt-browserify": "^5.2.0",
                "grunt-contrib-clean": "^1.1.0",
                "grunt-contrib-copy": "^1.0.0",
                "grunt-contrib-uglify": "^3.1.0",
                "grunt-contrib-watch": "^1.0.0",
                "grunt-exec": "^3.0.0",
                "grunt-google-cloud": "^1.0.7"
            },
            engines: {
                node: ">= 10.15.0",
                npm: ">= 6.6.0"
            }
        }
    }, {}],
    6: [function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = null,
            s = function() {
                function e() {
                    if (o(this, e), r) return r;
                    r = this, this.listeners = {}
                }
                return i(e, [{
                    key: "_getListenerIdx",
                    value: function(e, t, n) {
                        var o = this.listeners[e],
                            i = void 0,
                            r = -1;
                        if (!o || 0 === o.length) return r;
                        for (i = 0; i < o.length; i++)
                            if (o[i].callback === t && (!n || n === o[i].scope)) {
                                r = i;
                                break
                            }
                        return r
                    }
                }, {
                    key: "subscribe",
                    value: function(e, t, n) {
                        var o = void 0;
                        if (!e) throw new Error("Event name cannot be null or undefined.");
                        if (!t || "function" != typeof t) throw new Error("Listener must be of type function.");
                        this._getListenerIdx(e, t, n) >= 0 || (o = {
                            callback: t,
                            scope: n
                        }, this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(o))
                    }
                }, {
                    key: "broadcast",
                    value: function(e, t) {
                        var n = this.listeners[e];
                        e && this.listeners[e] && (t = t || {}, n.forEach(function(e) {
                            e.callback.call(e.scope, t)
                        }))
                    }
                }]), e
            }();
        n.default = s
    }, {}],
    7: [function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(e("../components/EventBus")),
            s = null,
            a = function() {
                function e(t) {
                    if (o(this, e), s) return s;
                    s = this, this.testing = t, this.eventBus = new r.default
                }
                return i(e, [{
                    key: "start",
                    value: function() {
                        var e = "\n            #sdk__implementation {\n                display: flex;\n                box-sizing: border-box;\n                position: fixed;\n                z-index: 667;\n                bottom: 0;\n                left: 0;\n                width: 100%;\n                padding: 3px;\n                background: transparent;\n                box-shadow: none;\n                color: #fff;\n                font-family: Helvetica, Arial, sans-serif;\n                      }\n            #sdk__implementation button {\n                flex: 1;\n                background: #ea5460;\n                padding: 4px 10px;\n font-size:10px;\n                margin: 2px;\n                border: 0;\n                border-radius: 3px;\n                color: #fff;\n                outline: 0;\n                cursor: pointer;\n                font-size: 10px;\n                box-shadow: 0 0 0 transparent;\n                text-shadow: 0 0 0 transparent;\n                text-overflow: ellipsis;\n                overflow: hidden;\n                white-space: nowrap;\n            }\n            #sdk__implementation button:hover {\n                background: #ff7f03;\n            }\n            #sdk__implementation button:active {\n                background: #ff7f03;\n            }\n        ",
                            t = document.head || document.getElementsByTagName("head")[0],
                            n = document.createElement("style");
                        n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), t.appendChild(n);
                        var o = document.body || document.getElementsByTagName("body")[0],
                            i = document.createElement("div");
                        i.style.position = "fixed", i.style.zIndex = "668", i.style.bottom = "0", i.innerHTML = '\n            <div id="sdk__implementation">\n                                                <button id="sdk__resumeGame">resumeGame</button>\n                <button id="sdk__pauseGame">pauseGame</button>\n                <button id="sdk__showBanner" onclick="window.sdk.showBanner()">showBanner()</button>\n                <button id="sdk__cancel">Cancel</button>\n                \n                <button id="sdk__closeDebug">Close</button>\n            </div>\n        ', o.appendChild(i);
                        var r = document.getElementById("sdk__pauseGame"),
                            s = document.getElementById("sdk__resumeGame"),
                            a = document.getElementById("sdk__showBanner"),
                            d = document.getElementById("sdk__cancel"),
                            c = document.getElementById("sdk__demo"),
                            l = document.getElementById("sdk__midrollTimer"),
                            u = document.getElementById("sdk__hbgdDebug"),
                            h = document.getElementById("sdk__hbgdConfig"),
                            g = document.getElementById("sdk__closeDebug");
                      
                        r.addEventListener("click", function() {
                            window.sdk.onPauseGame("Pause game requested from debugger", "warning")
                        }), s.addEventListener("click", function() {
                            window.sdk.onResumeGame("Resume game requested from debugger", "warning")
                        }), a.addEventListener("click", function() {
                            window.sdk.showBanner()
                        }), d.addEventListener("click", function() {
                            window.sdk.videoAdInstance.requestAttempts = 0, window.sdk.videoAdInstance.cancel()
                        }), g.addEventListener("click", function() {
                            try {
                                localStorage.getItem("gd_debug") ? localStorage.removeItem("gd_debug") : localStorage.setItem("gd_debug", "0"), location.reload()
                            } catch (e) {
                                console.log(e)
                            }
                        }), c.addEventListener("click", function() {
                            try {
                                if (localStorage.getItem("gd_tag")) localStorage.removeItem("gd_tag");
                                else {
                                    localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=")
                                }
                                location.reload()
                            } catch (e) {
                                console.log(e)
                            }
                        }), l.addEventListener("click", function() {
                            try {
                                localStorage.getItem("gd_midroll") ? localStorage.removeItem("gd_midroll") : localStorage.setItem("gd_midroll", "0"), location.reload()
                            } catch (e) {
                                console.log(e)
                            }
                        }), u.addEventListener("click", function() {
                            try {
                                window.idhbgd.debug(!0)
                            } catch (e) {
                                console.log(e)
                            }
                        }), h.addEventListener("click", function() {
                            try {
                                var e = window.idhbgd.getConfig();
                                console.info(e)
                            } catch (e) {
                                console.log(e)
                            }
                        })
                    }
                }]), e
            }();
        n.default = a
    }, {
        "../components/EventBus": 6
    }],
    8: [function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(e("../components/EventBus")),
            s = e("../modules/common"),
            a = e("../modules/dankLog"),
            d = null,
            c = function() {
                function e(t, n, i) {
                    var a = this;
                    if (o(this, e), d) return d;
                    d = this;
                    var c = {
                        debug: !1,
                        width: 640,
                        height: 360,
                        locale: "en"
                    };
                    this.options = i ? (0, s.extendDefaults)(c, i) : c, this.prefix = "sdk__", this.adsLoader = null, this.adsManager = null, this.adDisplayContainer = null, 
                    this.eventBus = new r.default, this.safetyTimer = null, this.containerTransitionSpeed = 300, this.adCount = 0, 
                    this.adTypeCount = 0, this.requestRunning = !1, this.parentDomain = (0, s.getParentDomain)(), 
                    this.parentUrl = (0, s.getParentUrl)(), this.userDeclinedPersonalAds = document.location.search.indexOf("gdpr-targeting=0") >= 0 || document.cookie.indexOf("ogdpr_advertisement=0") >= 0 ? "1" : "0", this.thirdPartyContainer = "" !== t ? document.getElementById(t) : null, this.options.width = "number" == typeof this.options.width ? this.options.width : "100%" === this.options.width ? 640 : this.options.width.replace(/[^0-9]/g, ""), this.options.height = "number" == typeof this.options.height ? this.options.height : "100%" === this.options.height ? 360 : this.options.height.replace(/[^0-9]/g, "");
                    var l = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                        u = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                    this.options.width = this.thirdPartyContainer ? this.thirdPartyContainer.offsetWidth : l, this.options.height = this.thirdPartyContainer ? this.thirdPartyContainer.offsetHeight : u, this.gameId = "0", this.category = "", this.tags = [], this.eventCategory = "AD", 
                    this.adsLoaderPromise = new Promise(function(e, t) {
                        a.eventBus.subscribe("AD_SDK_LOADER_READY", function() {
                            return e()
                        }), a.eventBus.subscribe("AD_CANCELED", function() {
                            return t(new Error("Initial adsLoaderPromise failed to load."))
                        })
                    }), this._loadScripts().then(function() {
                        a._createPlayer(), a._setUpIMA()
                    }).catch(function(e) {
                        return a.onError(e)
                    }), window.idhbgd = window.idhbgd || {}, window.idhbgd.que = window.idhbgd.que || []
                }
                return i(e, [{
                    key: "start",
                    value: function() {
                        var e = this;
                        this._startSafetyTimer(12e3, "start()"), this.eventBus.subscribe("AD_SDK_LOADER_READY", function() {
                            e._clearSafetyTimer("AD_SDK_LOADER_READY")
                        }), this.eventBus.subscribe("AD_SDK_MANAGER_READY", function() {
                            e._clearSafetyTimer("AD_SDK_MANAGER_READY")
                        }), this.eventBus.subscribe("LOADED", function() {
                            e._clearSafetyTimer("LOADED"), e._startSafetyTimer(8e3, "LOADED")
                        }), this.eventBus.subscribe("CONTENT_PAUSE_REQUESTED", function() {
                            e._show()
                        }), this.eventBus.subscribe("STARTED", function() {
                            e._clearSafetyTimer("STARTED")
                        })
                    }
                }, {
                    key: "requestAd",
                    value: function() {
                        var e = this;
                        return new Promise(function(t, n) {
                            if (e.requestRunning)(0, a.dankLog)("AD_SDK_REQUEST", "A request is already running", "warning");
                            else {
                                e.requestRunning = !0, 1 === e.adTypeCount && (e.adCount = 0), e.adCount++, e.adTypeCount++;
                                try {
                                    // LIVE ADS
                                    t(localStorage.getItem("gd_tag"));
                                } catch (e) {
                                    n(e)
                                }
                            }
                        })
                    }
                }, {
                    key: "_ReportingKeys",
                    value: function() {
                        var e = this;
                        return new Promise(function(t) {

                        })
                    }
                }, {
                    key: "loadAd",
                    value: function(e) {
                        if ("undefined" != typeof google) try {
                            var t = new google.ima.AdsRequest;
                            if (t.adTagUrl = e, (0, a.dankLog)("AD_SDK_TAG_URL", t.adTagUrl, "success"), t.linearAdSlotWidth = this.options.width, t.linearAdSlotHeight = this.options.height, t.nonLinearAdSlotWidth = this.options.width, t.nonLinearAdSlotHeight = this.options.height, t.forceNonLinearFullSlot = !0, void 0 !== window.ga) {
                                var n = new Date,
                                    o = n.getHours(),
                                    i = n.getDate(),
                                    r = n.getMonth(),
                                    s = n.getFullYear();
                            }
                            this.adsLoader.requestAds(t)
                        } catch (e) {
                            this._onAdError(e)
                        } else this.onError("Unable to load ad, google IMA SDK not defined.")
                    }
                }, {
                    key: "cancel",
                    value: function() {
                        var e = this;
                        this.adsLoaderPromise.then(function() {
                            e.adsLoader && e.adsLoader.contentComplete(), e.adsManager && e.adsManager.destroy(), e._hide(), e.requestRunning = !1
                        }).catch(function() {
                            console.log(new Error("adsLoaderPromise failed to load."))
                        });
                        this.eventBus.broadcast("AD_CANCELED", {
                            name: "AD_CANCELED",
                            message: "Advertisement has been canceled.",
                            status: "warning"
                        })
                    }
                }, {
                    key: "onError",
                    value: function(e) {
                        this.eventBus.broadcast("AD_SDK_ERROR", {
                            name: "AD_SDK_ERROR",
                            message: e,
                            status: "error"
                        }), this.cancel(), this._clearSafetyTimer("AD_SDK_ERROR")
                    }
                }, {
                    key: "_hide",
                    value: function() {
                        var e = this;
                        this.adContainer && (this.adContainer.style.opacity = "0", this.thirdPartyContainer && (this.thirdPartyContainer.style.opacity = "0"), setTimeout(function() {
                            e.adContainer.style.transform = "translateX(-9999px)", e.adContainer.style.zIndex = "0", e.thirdPartyContainer && (e.thirdPartyContainer.style.transform = "translateX(-9999px)", e.thirdPartyContainer.style.zIndex = "0")
                        }, this.containerTransitionSpeed))
                    }
                }, {
                    key: "_show",
                    value: function() {
                        var e = this;
                        this.adContainer && (this.adContainer.style.transform = "translateX(0)", this.adContainer.style.zIndex = "99", this.thirdPartyContainer && (this.thirdPartyContainer.style.transform = "translateX(0)", this.thirdPartyContainer.style.zIndex = "99", this.thirdPartyContainer.style.display = "block"), setTimeout(function() {
                            e.adContainer.style.opacity = "1", e.thirdPartyContainer && (e.thirdPartyContainer.style.opacity = "1")
                        }, 10))
                    }
                }, {
                    key: "_loadScripts",
                    value: function() {
                        var e = this,
                            t = new Promise(function(t, n) {
                                var o = e.options.debug ? "//imasdk.googleapis.com/js/sdkloader/ima3_debug.js" : "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
                                    i = document.getElementsByTagName("script")[0],
                                    r = document.createElement("script");
                                r.type = "text/javascript", r.async = !0, r.src = o, r.onload = function() {
                                    t()
                                }, r.onerror = function() {
                                    n("IMA script failed to load! Probably due to an ADBLOCKER!")
                                }, i.parentNode.insertBefore(r, i)
                            }),
                            n = new Promise(function(t, n) {
                                var o = "https://gamemonetize.com/ga.js",
                                    i = document.getElementsByTagName("script")[0],
                                    r = document.createElement("script");
                                r.type = "text/javascript", r.id = "analytics", r.async = !0, r.src = o, r.onload = function() {
                                    t()
                                }, r.onerror = function() {
                                    n("Prebid.js failed to load! Probably due to an ADBLOCKER!")
                                }, i.parentNode.insertBefore(r, i)
                            });
                        return Promise.all([t, n])
                    }
                }, {
                    key: "_createPlayer",
                    value: function() {
                        var e = this,
                            t = document.body || document.getElementsByTagName("body")[0];
                        this.adContainer = document.createElement("div"), this.adContainer.id = this.prefix + "advertisement", this.adContainer.style.position = this.thirdPartyContainer ? "absolute" : "fixed", this.adContainer.style.zIndex = "0", this.adContainer.style.top = "0", this.adContainer.style.left = "0", this.adContainer.style.width = "100%", this.adContainer.style.height = "100%", this.adContainer.style.transform = "translateX(-9999px)", this.adContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)", this.adContainer.style.opacity = "0", this.adContainer.style.transition = "opacity " + this.containerTransitionSpeed + "ms cubic-bezier(0.55, 0, 0.1, 1)", this.thirdPartyContainer && (this.thirdPartyContainer.style.transform = "translateX(-9999px)", this.thirdPartyContainer.style.opacity = "0", this.thirdPartyContainer.style.transition = "opacity " + this.containerTransitionSpeed + "ms cubic-bezier(0.55, 0, 0.1, 1)");
                        var n = document.createElement("div");
                        n.id = this.prefix + "advertisement_slot", n.style.position = "absolute", n.style.backgroundColor = "#000000", n.style.top = "0", n.style.left = "0", n.style.width = this.options.width + "px", n.style.height = this.options.height + "px", this.thirdPartyContainer ? (this.adContainer.appendChild(n), this.thirdPartyContainer.appendChild(this.adContainer)) : (this.adContainer.appendChild(n), t.appendChild(this.adContainer)), window.addEventListener("resize", function() {
                            var t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                                o = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                            e.options.width = e.thirdPartyContainer ? e.thirdPartyContainer.offsetWidth : t, e.options.height = e.thirdPartyContainer ? e.thirdPartyContainer.offsetHeight : o, n.style.width = e.options.width + "px", n.style.height = e.options.height + "px"
                        })
                    }
                }, {
                    key: "_setUpIMA",
                    value: function() {
                        google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE), google.ima.settings.setLocale(this.options.locale), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0), this.adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById(this.prefix + "advertisement_slot")), this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer), this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this._onAdsManagerLoaded, !1, this), this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError, !1, this);
                        var e = new Date,
                            t = e.getHours(),
                            n = e.getDate(),
                            o = e.getMonth(),
                            i = e.getFullYear(),
                            r = "AD_SDK_LOADER_READY";
                        this.eventBus.broadcast(r, {
                            name: r,
                            message: this.options,
                            status: "success"
                        })
                    }
                }, {
                    key: "_onAdsManagerLoaded",
                    value: function(e) {
                        var t = this,
                            n = new google.ima.AdsRenderingSettings;
                        if (n.enablePreloading = !0, n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.uiElements = [google.ima.UiElements.AD_ATTRIBUTION, google.ima.UiElements.COUNTDOWN], this.adsManager = e.getAdsManager(n), this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError.bind(this), !1, this), this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_METADATA, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.DURATION_CHANGE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.INTERACTION, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.LINEAR_CHANGED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.LOG, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED, this._onAdEvent.bind(this), this), this.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_MUTED, this._onAdEvent.bind(this), this), window.addEventListener("resize", function() {
                                t.adsManager.resize(t.options.width, t.options.height, google.ima.ViewMode.NORMAL)
                            }), this.adsManager && this.adDisplayContainer) {
                            var o = new Date,
                                i = o.getHours(),
                                r = o.getDate(),
                                s = o.getMonth(),
                                a = o.getFullYear(),
                                d = "AD_SDK_MANAGER_READY";
                            this.eventBus.broadcast(d, {
                                name: d,
                                message: this.adsManager,
                                status: "success"
                            }), this.adDisplayContainer.initialize();
                            try {
                                this.adsManager.init(this.options.width, this.options.height, google.ima.ViewMode.NORMAL), this.adsManager.start()
                            } catch (e) {
                                this.onError(e)
                            }
                        }
                    }
                }, {
                    key: "_onAdEvent",
                    value: function(e) {
                        var t = this,
                            n = new Date,
                            o = n.getHours(),
                            i = n.getDate(),
                            r = n.getMonth(),
                            s = n.getFullYear(),
                            a = "",
                            d = "";
                        switch (e.type) {
                            case google.ima.AdEvent.Type.AD_BREAK_READY:
                                a = "AD_BREAK_READY", d = "Fired when an ad rule or a VMAP ad break would have played if autoPlayAdBreaks is false.";
                                break;
                            case google.ima.AdEvent.Type.AD_METADATA:
                                a = "AD_METADATA", d = "Fired when an ads list is loaded.";
                                break;
                            case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                a = "ALL_ADS_COMPLETED", d = "Fired when the ads manager is done playing all the ads.";
                                break;
                            case google.ima.AdEvent.Type.CLICK:
                                a = "CLICK", d = "Fired when the ad is clicked.";
                                break;
                            case google.ima.AdEvent.Type.COMPLETE:
                                a = "COMPLETE", d = "Fired when the ad completes playing.";
                                break;
                            case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                a = "CONTENT_PAUSE_REQUESTED", d = "Fired when content should be paused. This usually happens right before an ad is about to cover the content.";
                                break;
                            case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                a = "CONTENT_RESUME_REQUESTED", d = "Fired when content should be resumed. This usually happens when an ad finishes or collapses.", this._hide(), this.adsLoaderPromise.then(function() {
                                    if (t.adsLoader && t.adsLoader.contentComplete(), t.adsManager && t.adsManager.destroy(), 1 === t.adCount) {
                                        var e = [];
                                        t.tags.forEach(function(t) {
                                            e.push(t.title.toLowerCase())
                                        });
                                        var n = t.category.toLowerCase();
                                        t._loadDisplayAd(t.gameId, e, n)
                                    }
                                    t.requestRunning = !1;
                                    t.eventBus.broadcast("AD_SDK_FINISHED", {
                                        name: "AD_SDK_FINISHED",
                                        message: "IMA is ready for new requests.",
                                        status: "success"
                                    })
                                }).catch(function() {
                                    console.log(new Error("adsLoaderPromise failed to load."))
                                });
                                break;
                            case google.ima.AdEvent.Type.DURATION_CHANGE:
                                a = "DURATION_CHANGE", d = "Fired when the ad's duration changes.";
                                break;
                            case google.ima.AdEvent.Type.FIRST_QUARTILE:
                                a = "FIRST_QUARTILE", d = "Fired when the ad playhead crosses first quartile.";
                                break;
                            case google.ima.AdEvent.Type.IMPRESSION:
                                a = "IMPRESSION", d = "Fired when the impression URL has been pinged.";
                                break;
                            case google.ima.AdEvent.Type.INTERACTION:
                                a = "INTERACTION", d = "Fired when an ad triggers the interaction callback. Ad interactions contain an interaction ID string in the ad data.";
                                break;
                            case google.ima.AdEvent.Type.LINEAR_CHANGED:
                                a = "LINEAR_CHANGED", d = "Fired when the displayed ad changes from linear to nonlinear, or vice versa.";
                                break;
                            case google.ima.AdEvent.Type.LOADED:
                                a = "LOADED", d = e.getAd().getContentType();
                                break;
                            case google.ima.AdEvent.Type.LOG:
                                e.getAdData().adError && (a = "LOG", d = e.getAdData());
                                break;
                            case google.ima.AdEvent.Type.MIDPOINT:
                                a = "MIDPOINT", d = "Fired when the ad playhead crosses midpoint.";
                                break;
                            case google.ima.AdEvent.Type.PAUSED:
                                a = "PAUSED", d = "Fired when the ad is paused.";
                                break;
                            case google.ima.AdEvent.Type.RESUMED:
                                a = "RESUMED", d = "Fired when the ad is resumed.";
                                break;
                            case google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED:
                                a = "SKIPPABLE_STATE_CHANGED", d = "Fired when the displayed ads skippable state is changed.";
                                break;
                            case google.ima.AdEvent.Type.SKIPPED:
                                a = "SKIPPED", d = "Fired when the ad is skipped by the user.";
                                break;
                            case google.ima.AdEvent.Type.STARTED:
                                a = "STARTED", d = "Fired when the ad starts playing.";
                                break;
                            case google.ima.AdEvent.Type.THIRD_QUARTILE:
                                a = "THIRD_QUARTILE", d = "Fired when the ad playhead crosses third quartile.";
                                break;
                            case google.ima.AdEvent.Type.USER_CLOSE:
                                a = "USER_CLOSE", d = "Fired when the ad is closed by the user.";
                                break;
                            case google.ima.AdEvent.Type.VOLUME_CHANGED:
                                a = "VOLUME_CHANGED", d = "Fired when the ad volume has changed.";
                                break;
                            case google.ima.AdEvent.Type.VOLUME_MUTED:
                                a = "VOLUME_MUTED", d = "Fired when the ad volume has been muted."
                        }
                        "" !== a && "" !== d && this.eventBus.broadcast(a, {
                            name: a,
                            message: d,
                            status: "success"
                        })
                    }
                }, {
                    key: "_onAdError",
                    value: function(e) {
                        this.cancel(), this._clearSafetyTimer("AD_ERROR");
                        try {
                            if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.href.indexOf("account") != -1) {       
                            }
                            else {
                                if(adxAds == true)  {
                                    adxAds2 = true;
                                    window.sdk.showBanner();
                                }
                                else  {
                                     try {
                                            var urls = '(y8.com|pog.com|gamepost.com';
                                            $.getJSON('https://api.gamemonetize.com/dataxxx.json', function (data) {
                                                $.each(data, function(i, item) {
                                                      urls += '|' + item.domain;
                                                });
                                                var url = (window.location != window.parent.location) ? document.referrer : document.location.href;
                                                urls += ')';
                                                urls = new RegExp(urls);
                                                if (url.match(urls) || window.location.search.indexOf("y8") > -1) {

                                                }
                                                else  {
                                                    promoVideo();
                                                }
                                        });
                                    } catch (e) {
                                    }
                                    // ShowAds2();
                                }
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }, {
                    key: "_startSafetyTimer",
                    value: function(e, t) {
                        var n = this;
                        (0, a.dankLog)("AD_SAFETY_TIMER", "Invoked timer from: " + t, "success"), this.safetyTimer = window.setTimeout(function() {
                            n.eventBus.broadcast("AD_SAFETY_TIMER", {
                                name: "AD_SAFETY_TIMER",
                                message: "Advertisement took too long to load.",
                                status: "warning"
                            }), n.cancel(), n._clearSafetyTimer(t)
                        }, e)
                    }
                }, {
                    key: "_clearSafetyTimer",
                    value: function(e) {
                        if (void 0 !== this.safetyTimer && null !== this.safetyTimer && ((0, a.dankLog)("AD_SAFETY_TIMER", "Cleared timer set at: " + e, "success"), clearTimeout(this.safetyTimer), this.safetyTimer = void 0, "requestAd()" === e)) {
                            var t = new Date,
                                n = t.getHours(),
                                o = t.getDate(),
                                i = t.getMonth(),
                                r = t.getFullYear();
                        }
                    }
                }, {
                    key: "_loadDisplayAd",
                    value: function(e, t, n) {
                        var o = this,
                            i = document.body || document.getElementsByTagName("body")[0],
                            r = document.createElement("div");
                        r.id = this.prefix + "baguette", r.style.zIndex = "100", r.style.position = "absolute", r.style.top = "0", r.style.left = "0", i.appendChild(r);
                        var s = document.createElement("script");
                        s.async = !0, s.type = "text/javascript";
                        var a = "https:" === document.location.protocol;
                        s.src = (a ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
                        var d = document.getElementsByTagName("script")[0];
                    }
                }]), e
            }();
        n.default = c
    }, {
        "../components/EventBus": 6,
        "../modules/common": 11,
        "../modules/dankLog": 12
    }],
    9: [function(e, t, n) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(e("./main")),
            r = "object" === ("undefined" == typeof SDK_OPTIONS ? "undefined" : o(SDK_OPTIONS)) && SDK_OPTIONS ? SDK_OPTIONS : window.gdApi && "object" === o(window.gdApi.q[0][0]) && window.gdApi.q[0][0] ? window.gdApi.q[0][0] : {};
        window.gdApi && "object" === o(window.gdApi.q[0][0]) && window.gdApi.q[0][0] && (r.hasOwnProperty("advertisementSettings") || (r.advertisementSettings = {
            autoplay: !0
        })), window.sdk = new i.default(r), window.gdApi = window.sdk
    }, {
        "./main": 10
    }],
    10: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }();
        e("es6-promise/auto"), e("whatwg-fetch");
        var a = o(e("../package.json")),
            d = o(e("./components/VideoAd")),
            c = o(e("./components/EventBus")),
            l = o(e("./components/ImplementationTest")),
            u = e("./modules/dankLog"),
            h = e("./modules/common"),
            g = null,
            p = function() {
                function e(t) {
                    var n = this;
                    if (i(this, e), g) return g;
                    g = this;
                    var o = {
                        debug: !1,
                        testing: !1,
                        gameId: "",
                        prefix: "sdk__",
                        flashSettings: {
                            adContainerId: "",
                            splashContainerId: ""
                        },
                        advertisementSettings: {},
                        resumeGame: function() {},
                        pauseGame: function() {},
                        onEvent: function(e) {},
                        onInit: function(e) {},
                        onError: function(e) {}
                    };
                     this.options = t ? (0, h.extendDefaults)(o, t) : o;
                    var r = a.default.version;
                    window.console.log.apply(console, "\n %c %c %c GameMonetize.com HTML5 Ads SDK %c  %c   ads by   https://www.gamemonetize.com/   %c %c %c %c,background: #9C0013; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #FFFFFF; background: #030307; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #FFFFFF;background: #DB0028; padding:5px 0;,background: #9C0013; padding:5px 0;,color: #ff2424; background: #9C0013; padding:5px 0;,color: #ff2424; background: #fff; padding:5px 0;,color: #ff2424; background: #fff; padding:5px 0;".split(","));
                    console.log(" %c %c %c Distribute and monetize your online games and websites with GameMonetize.com %c %c %c", "background: #db0028", "background: #db0028", "color: #fff; background: #db0028;", "background: #db0028", "background: #db0028", "background: #ffffff");
                    var l = (0, h.getParentUrl)(),
                        p = (0, h.getParentDomain)(),
                        f = document.location.search.indexOf("gdpr-tracking=0") >= 0 || document.cookie.indexOf("ogdpr_tracking=0") >= 0;
                    var m = [];
                    this.options.testing = this.options.testing || m.indexOf(p) > -1, this.options.testing && (0, u.dankLog)("SDK_TESTING_ENABLED", this.options.testing, "info"), this.whitelabelPartner = !1;
                    var v = (0, h.getQueryParams)("xanthophyll");
                    v.hasOwnProperty("xanthophyll") && "true" === v.xanthophyll && (this.whitelabelPartner = !0, (0, u.dankLog)("SDK_WHITELABEL", this.whitelabelPartner, "success"));
                    try {
                        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.href.indexOf("account") != -1) {
                            localStorage.setItem("gd_debug", "true"), localStorage.setItem("gd_midroll", "0");
                            localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=")
                            
                            if(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") { } else { localStorage.getItem("gd_debug") && this.openConsole() }              
                        }
                        else {
                            localStorage.removeItem("gd_debug");
                            localStorage.setItem("gd_midroll", "0");
                            var descriptionURL = encodeURIComponent(window.location);
                            localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/ca-games-pub-5519830896693885-tag&description_url=" + descriptionURL + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
                           
                            if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || localStorage.getItem("gd_debug")) { } 
                            else {
                            var url = (window.location != window.parent.location) ? document.referrer : document.location.href;
                            var getParentDomain2 = url.replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, "").split("/")[0];
                            try
                            {
                                  if (url.indexOf("gamedomain") == -1) {
                                                var parameterValue = decodeURIComponent(window.location.search.match(/(\?|&)gamedomain\=([^&]*)/)[2]);
                                                getParentDomain2 = parameterValue;
                                            }
                            }
                            catch (e) { }

                            (new Image).src = "https://gamemonetize.com/account/event.php?page_url=" + getParentDomain2 + "&game_id=" + this.options.gameId + "&eventtype=1";
                            }
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    this.eventBus = new c.default, this.eventBus.gameId = this.options.gameId + "", this.eventBus.subscribe("SDK_BLOCKED", function(e) 
                    {
                        return n._onEvent(e)

                    }
                    ), this.eventBus.subscribe("SDK_READY", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("SDK_ERROR", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("SDK_GAME_DATA_READY", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("SDK_GAME_START", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("SDK_GAME_PAUSE", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("AD_SDK_LOADER_READY", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("AD_SDK_MANAGER_READY", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("AD_SDK_REQUEST_ADS", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("AD_SDK_ERROR", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("AD_SDK_FINISHED", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("AD_CANCELED", function(e) {
                        n._onEvent(e), n.onResumeGame("Advertisement error, no worries, start / resume the game.", "warning")
                    }), this.eventBus.subscribe("AD_ERROR", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("AD_SAFETY_TIMER", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("AD_BREAK_READY", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("AD_METADATA", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("ALL_ADS_COMPLETED", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("CLICK", function(e) {
                    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || localStorage.getItem("gd_debug")) { } else {
                        var url = (window.location != window.parent.location) ? document.referrer : document.location.href;
                        var getParentDomain2 = url.replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, "").split("/")[0];
                        try
                            {
                                  if (url.indexOf("gamedomain") == -1) {
                                                var parameterValue = decodeURIComponent(window.location.search.match(/(\?|&)gamedomain\=([^&]*)/)[2]);
                                                getParentDomain2 = parameterValue;
                                            }
                            }
                            catch (e) { }

                        var http = new XMLHttpRequest();
                        var url = "https://api.gamemonetize.com/opphbh.php?id=" + window.SDK_OPTIONS.gameId + "&domain=" + getParentDomain2;
                        var params = "h=AGt39rRaEEKgamvehwKyOKiCxRMil7wtKsQXLF9LkzbCsCYfAZJcQdG7064n_zeUjqJ0cF1kNt8GG82uX8j3YvDbRSUTyeUN-o3rCLzKwVA";
                        http.open('POST', url, true);
                        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                        http.onreadystatechange = function() {
                            if(http.readyState == 4 && http.status == 200) {
                                
                            }
                        }
                        http.send(params);
                    }
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("COMPLETE", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("CONTENT_PAUSE_REQUESTED", function(e) {
                        n._onEvent(e), n.onPauseGame("New advertisements requested and loaded", "success")
                    }), this.eventBus.subscribe("CONTENT_RESUME_REQUESTED", function(e) {
                        n._onEvent(e), n.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
                         try {
                                var t = JSON.stringify({
                                    type: "SDK_IMPLEMENTED"
                                });
                                window.parent.postMessage(t, '*');
                            } catch (e) {}

                    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || localStorage.getItem("gd_debug")) { } else {
                        var url = (window.location != window.parent.location) ? document.referrer : document.location.href;
                        var getParentDomain = url.replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, "").split("/")[0];

                        try
                            {
                                  if (url.indexOf("gamedomain") == -1) {
                                                var parameterValue = decodeURIComponent(window.location.search.match(/(\?|&)gamedomain\=([^&]*)/)[2]);
                                                getParentDomain = parameterValue;
                                            }
                            }
                            catch (e) { }
                            
                        var http = new XMLHttpRequest();
                        var url = "https://api.gamemonetize.com/opphbh2.php?id=" + window.SDK_OPTIONS.gameId + "&domain=" + getParentDomain;
                        var params = "h=AGt39rRaEEKgamvehwKyOKiCxRMil7wtKsQXLF9LkzbCsCYfAZJcQdG7064n_zeUjqJ0cF1kNt8GG82uX8j3YvDbRSUTyeUN-o3rCLzKwVA";
                        http.open('POST', url, true);
                        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                        http.onreadystatechange = function() {
                            if(http.readyState == 4 && http.status == 200) {
                                
                            }
                        }
                        http.send(params);
                    }
                    }), this.eventBus.subscribe("DURATION_CHANGE", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("FIRST_QUARTILE", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("IMPRESSION", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("INTERACTION", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("LINEAR_CHANGED", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("LOADED", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("LOG", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("MIDPOINT", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("PAUSED", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("RESUMED", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("SKIPPABLE_STATE_CHANGED", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("SKIPPED", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("STARTED", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("THIRD_QUARTILE", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("USER_CLOSE", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("VOLUME_CHANGED", function(e) {
                        return n._onEvent(e)
                    }), this.eventBus.subscribe("VOLUME_MUTED", function(e) {
                        return n._onEvent(e)
                    }), 
                    this.adRequestTimer = void 0, this.videoAdInstance = new d.default(this.options.flashSettings.adContainerId, this.options.prefix, this.options.advertisementSettings);
                    var y = new Promise(function(e) {
                        var t = {
                                gameId: n.options.gameId ? n.options.gameId + "" : "",
                                advertisements: !0,
                                preroll: !0,
                                //midroll: 12e4,
                                midroll: 180000,
                                title: "",
                                tags: [],
                                category: "",
                                assets: []
                            },
                            o = "",
                            i = new Request(o, {
                                method: "GET"
                            });
                        fetch(i).then(function(e) {
                            var t = e.headers.get("content-type");
                        }).then(function(n) {
                            
                            e(t)
                        }).catch(function(n) {
                            (0, u.dankLog)("SDK_GAME_DATA_READY", n, "success")
                        })
                    });
                    y.then(function(e) {
                        n.videoAdInstance.gameId = e.gameId, n.videoAdInstance.category = e.category, n.videoAdInstance.tags = e.tags;
                        try {
                            localStorage.getItem("gd_debug") && (localStorage.getItem("gd_tag") && (n.videoAdInstance.tag = localStorage.getItem("gd_tag")), localStorage.getItem("gd_midroll") && (e.midroll = localStorage.getItem("gd_midroll")))
                        } catch (e) {
                            console.log(e)
                        }
                        if (e.advertisements) {
                            var t = false;
                            e.preroll ? (n.videoAdInstance.options.autoplay || t) && n._createSplash(e, t) : n.adRequestTimer = new Date
                        }
                        n.videoAdInstance.start()
                    }).catch(function() {
                        console.log(new Error("gameDataPromise failed to resolve."))
                    }), 

                    this.readyPromise = Promise.all([y, this.videoAdInstance.adsLoaderPromise]).then(function(e) {
                        return n.eventBus.broadcast("SDK_READY", {
                            name: "SDK_READY",
                            message: "Everything is ready.",
                            status: "success"
                        }), n.options.onInit("Everything is ready."), e[0]
                    }).catch(function() {
                        return n.eventBus.broadcast("SDK_ERROR", {
                            name: "SDK_ERROR",
                            message: "The SDK failed.",
                            status: "error"
                        }), n.options.onError("The SDK failed."), !1
                    })
                }
                return s(e, [{
                    key: "_gdpr",
                    value: function(e) {
                       
                    }
                }, {
                    key: "_onEvent",
                    value: function(e) {
                        (0, u.dankLog)(e.name, e.message, e.status);
                        this.options.onEvent(e)
                    }
                }, {
                    key: "_analytics",
                    value: function(e) {
                       
                    }
                }, {
                    key: "_createSplash",
                    value: function(e, t) {
                        var n = this,
                            o = e.assets.find(function(e) {
                                return e.hasOwnProperty("name") && 512 === e.width && 512 === e.height
                            });
                        var i = "\n            body {\n                position: inherit;\n            }\n            ." + this.options.prefix + "splash-background-container {\n                box-sizing: border-box;\n                position: absolute;\n                z-index: 664;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #000;\n                overflow: hidden;\n            }\n            ." + this.options.prefix + "splash-background-image {\n                box-sizing: border-box;\n                position: absolute;\n                top: -25%;\n                left: -25%;\n                width: 150%;\n                height: 150%;\n                background-image: url(" + o + ");\n                background-size: cover;\n                filter: blur(50px) brightness(1.5);\n            }\n            ." + this.options.prefix + "splash-container {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                position: absolute;\n                z-index: 665;\n                bottom: 0;\n                width: 100%;\n                height: 100%;\n            }\n            ." + this.options.prefix + "splash-top {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                flex: 1;\n                align-self: center;\n                justify-content: center;\n                padding: 20px;\n            }\n            ." + this.options.prefix + "splash-top > div {\n                text-align: center;\n            }\n            ." + this.options.prefix + "splash-top > div > button {\n                border: 0;\n                margin: auto;\n                padding: 10px 22px;\n                border-radius: 5px;\n                border: 3px solid white;\n                background: linear-gradient(0deg, #dddddd, #ffffff);\n                color: #222;\n                text-transform: uppercase;\n                text-shadow: 0 0 1px #fff;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                font-size: 18px;\n                cursor: pointer;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n            }\n            ." + this.options.prefix + "splash-top > div > button:hover {\n                background: linear-gradient(0deg, #ffffff, #dddddd);\n            }\n            ." + this.options.prefix + "splash-top > div > button:active {\n                box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n                background: linear-gradient(0deg, #ffffff, #f5f5f5);\n            }\n            ." + this.options.prefix + "splash-top > div > div {\n                position: relative;\n                width: 150px;\n                height: 150px;\n                margin: auto auto 20px;\n                border-radius: 100%;\n                overflow: hidden;\n                border: 3px solid rgba(255, 255, 255, 1);\n                background-color: #000;\n                box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);\n                background-image: url(" + o + ");\n                background-position: center;\n                background-size: cover;\n            }\n            ." + this.options.prefix + "splash-top > div > div > img {\n                width: 100%;\n                height: 100%;\n            }\n            ." + this.options.prefix + "splash-bottom {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                align-self: center;\n                justify-content: center;\n                width: 100%;\n                padding: 0 0 20px;\n            }\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-consent,\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-title {\n                box-sizing: border-box;\n                width: 100%;\n                padding: 20px;\n                background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5) 50%, transparent);\n                color: #fff;\n                text-align: left;\n                font-size: 12px;\n                font-family: Arial;\n                font-weight: normal;\n                text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);\n                line-height: 150%;\n            }\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-title {\n                padding: 15px 0;\n                text-align: center;\n                font-size: 18px;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                line-height: 100%;\n            }\n            ." + this.options.prefix + "splash-bottom > ." + this.options.prefix + "splash-consent a {\n                color: #fff;\n            }\n        ",
                            r = document.head || document.getElementsByTagName("head")[0],
                            s = document.createElement("style");
                        s.type = "text/css", s.styleSheet ? s.styleSheet.cssText = i : s.appendChild(document.createTextNode(i)), r.appendChild(s);
                        var a = "";
                        a = t ? '\n                <div class="' + this.options.prefix + 'splash-background-container">\n                    <div class="' + this.options.prefix + 'splash-background-image"></div>\n                </div>\n                <div class="' + this.options.prefix + 'splash-container">\n                    <div class="' + this.options.prefix + 'splash-top">\n                        <div>\n                            <div></div>\n                            <button id="' + this.options.prefix + 'splash-button">Play Game</button>\n                        </div>   \n                    </div>\n                    <div class="' + this.options.prefix + 'splash-bottom">\n                        <div class="' + this.options.prefix + 'splash-consent">\n                            We may show personalized ads provided by our partners, and our \n                            services can not be used by children under 16 years old without the \n                            consent of their legal guardian. By clicking "PLAY GAME", you consent \n                            to transmit your data to our partners for advertising purposes and \n                            declare that you are 16 years old or have the permission of your \n                            legal guardian. You can review our terms\n                            <a href="" target="_blank">here</a>.\n                        </div>\n                    </div>\n                </div>\n            ' : "b92a4170784248bca2ffa0c08bec7a50" === e.gameId ? '\n                <div class="' + this.options.prefix + 'splash-background-container">\n                    <div class="' + this.options.prefix + 'splash-background-image"></div>\n                </div>\n                <div class="' + this.options.prefix + 'splash-container">\n                    <div class="' + this.options.prefix + 'splash-top">\n                        <div>\n                            <button id="' + this.options.prefix + 'splash-button">Play Game</button>\n                        </div>   \n                    </div>\n                </div>\n            ' : '\n                <div class="' + this.options.prefix + 'splash-background-container">\n                    <div class="' + this.options.prefix + 'splash-background-image"></div>\n                </div>\n                <div class="' + this.options.prefix + 'splash-container">\n                    <div class="' + this.options.prefix + 'splash-top">\n                        <div>\n                            <div></div>\n                            <button id="' + this.options.prefix + 'splash-button">Play Game</button>\n                        </div>   \n                    </div>\n                    <div class="' + this.options.prefix + 'splash-bottom">\n                        <div class="' + this.options.prefix + 'splash-title">' + e.title + "</div>\n                    </div>\n                </div>\n            ";
                        var d = document.createElement("div");
                        d.innerHTML = a, d.id = this.options.prefix + "splash";
                        var c = this.options.flashSettings.splashContainerId ? document.getElementById(this.options.flashSettings.splashContainerId) : null;
                        if (c) c.style.display = "block", c.insertBefore(d, c.firstChild);
                        else {
                            var l = document.body || document.getElementsByTagName("body")[0];
                            l.insertBefore(d, l.firstChild)
                        }
                        t ? document.getElementById(this.options.prefix + "splash-button").addEventListener("click", function() {
                            var e = new Date;
                            e.setDate(e.getDate() + 90), document.cookie = "ogdpr_tracking=1; expires=" + e.toUTCString() + "; path=/", n.showBanner()
                        }) : d.addEventListener("click", function() {
                            n.showBanner()
                        }), this.onPauseGame("Pause the game and wait for a user gesture", "success"), this.eventBus.subscribe("CONTENT_PAUSE_REQUESTED", function() {
                            d && d.parentNode ? d.parentNode.removeChild(d) : d && (d.style.display = "none"), c && c.parentNode ? c.parentNode.removeChild(c) : c && (c.style.display = "none")
                        }), this.eventBus.subscribe("SDK_GAME_START", function() {
                            d && d.parentNode ? d.parentNode.removeChild(d) : d && (d.style.display = "none"), c && c.parentNode ? c.parentNode.removeChild(c) : c && (c.style.display = "none")
                        })
                    }
                }, {
                   key: "showBanner",
                    value: function() {
                        try { if (window.location.href.indexOf("gmadstester") == -1) {

                            var urlsvk = "(vkplay.ru|vkplay.com|dzen.ru)";
                            var urlvk = (window.location != window.parent.location) ? document.referrer : document.location.href;
                            urlsvk = new RegExp(urlsvk);
                            if (urlvk.match(urlsvk)) {
                                window.sdk.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
                            }
                            else  {

                        var e = this;
                        if(adxAds2 == true)  {
                            var descriptionURL = encodeURIComponent(window.location);
                            localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/GameMonetize.com-ADX-AFG-Preroll-Ads&description_url=" + descriptionURL + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
                            this.adRequestTimer = void 0;
                            adxAds = false;
                        }

                        try {
                            var urls2 = "(y8.com|y8|dollmania.com|pog.com|gamepost.com)";
                            var url = (window.location != window.parent.location) ? document.referrer : document.location.href;
                            urls2 = new RegExp(urls2);
                            if (url.match(urls2) || window.location.search.indexOf("y8") > -1) {
                            }
                            else  {
                                var apnd2 = '<div id="gmLoadingText" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="https://gamemonetize.com/gamemonetize-logo.png" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
                                $('#sdk__advertisement').append(apnd2);
                            }
                        } catch (e) {
                        }

                        this.readyPromise.then(function(t) {
                            var midrolltimer = 130000;
                            
                            try {
                                var urls1 = "(sites.google.com";
                                $.getJSON("https://api.gamemonetize.com/dataxx.json", function (data) {
                                    $.each(data, function(i, item) {
                                            urls1 += "|" + item.domain;
                                    });
                                    var url = (window.location != window.parent.location) ? document.referrer : document.location.href;
                                    urls1 += ")";
                                    urls1 = new RegExp(urls1);
                                    if (url.match(urls1)) {
                                        var descriptionURL = encodeURIComponent(window.location);
                                       localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/GameMonetize.com-ADX-AFG-Universal&description_url=" + descriptionURL + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
                                    }
                                });
                            } catch (e) {
                            }

                            try {
                                    var urls = "(gamemonetize.com|y8.com|html5.gamemonetize.com";
                                    $.getJSON("https://api.gamemonetize.com/datax.json", function (data) {
                                        
                                    $.each(data, function(i, item) {
                                          urls += "|" + item.domain;
                                    });
                                    var url = (window.location != window.parent.location) ? document.referrer : document.location.href;
                                    urls += ")";
                                    urls = new RegExp(urls);
                                        if (url.match(urls) || window.location.search.indexOf("y8") > -1) {
                                            midrolltimer = 130000;
                                            t.advertisements ? void 0 !== e.adRequestTimer ? (new Date).valueOf() - e.adRequestTimer.valueOf() < midrolltimer ? ((0, u.dankLog)("SDK_SHOW_BANNER", "The advertisement was requested too soon after the previous advertisement was finished.", "warning"), e.onResumeGame("Just resume the game...", "success")) : ((0, u.dankLog)("SDK_SHOW_BANNER", "Requested the midroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function(t) {
                                                return e.videoAdInstance.loadAd(t)
                                            }).catch(function(t) {
                                                e.videoAdInstance.onError(t)
                                            })) : ((0, u.dankLog)("SDK_SHOW_BANNER", "Requested the preroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function(t) {
                                                return e.videoAdInstance.loadAd(t)
                                            }).catch(function(t) {
                                                e.videoAdInstance.onError(t)
                                            })) : (e.videoAdInstance.cancel(), (0, u.dankLog)("SDK_SHOW_BANNER", "Advertisements are disabled.", "warning"))
                                        }
                                        else  {
                                            midrolltimer = 30000;
                                            t.advertisements ? void 0 !== e.adRequestTimer ? (new Date).valueOf() - e.adRequestTimer.valueOf() < midrolltimer ? ((0, u.dankLog)("SDK_SHOW_BANNER", "The advertisement was requested too soon after the previous advertisement was finished.", "warning"), e.onResumeGame("Just resume the game...", "success"), ShowAds()) : ((0, u.dankLog)("SDK_SHOW_BANNER", "Requested the midroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function(t) {
                                                return e.videoAdInstance.loadAd(t)
                                            }).catch(function(t) {
                                                e.videoAdInstance.onError(t)
                                            })) : ((0, u.dankLog)("SDK_SHOW_BANNER", "Requested the preroll advertisement.", "success"), e.adRequestTimer = new Date, e.videoAdInstance.requestAttempts = 0, e.videoAdInstance.requestAd().then(function(t) {
                                                return e.videoAdInstance.loadAd(t)
                                            }).catch(function(t) {
                                                e.videoAdInstance.onError(t)
                                            })) : (e.videoAdInstance.cancel(), (0, u.dankLog)("SDK_SHOW_BANNER", "Advertisements are disabled.", "warning"))
                                        }
                                });
                            } catch (e) {
                            }
                        }).catch(function(e) {
                            (0, u.dankLog)("SDK_SHOW_BANNER", e, "error")
                        });
                        }
                        } else {
                            window.sdk.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
                        }  
                    } catch (e) { }
                    }
                }, {
                    key: "customLog",
                    value: function(e) {}
                }, {
                    key: "play",
                    value: function() {}
                }, {
                    key: "onResumeGame",
                    value: function(e, t) {
                        try {
                            this.options.resumeGame()
                        } catch (e) {
                            console.log(e)
                        }
                        this.eventBus.broadcast("SDK_GAME_START", {
                            name: "SDK_GAME_START",
                            message: e,
                            status: t
                        })
                    }
                }, {
                    key: "onPauseGame",
                    value: function(e, t) {
                        try {
                            this.options.pauseGame()
                        } catch (e) {
                            console.log(e)
                        }
                        this.eventBus.broadcast("SDK_GAME_PAUSE", {
                            name: "SDK_GAME_PAUSE",
                            message: e,
                            status: t
                        })
                    }
                }, {
                    key: "openConsole",
                    value: function() {
                        try {
                            new l.default(this.options.testing).start(), localStorage.setItem("gd_debug", !0)
                        } catch (e) {

                        }
                    }
                }]), e
            }();
        n.default = p
    }, {
        "../package.json": 5,
        "./components/EventBus": 6,
        "./components/ImplementationTest": 7,
        "./components/VideoAd": 8,
        "./modules/common": 11,
        "./modules/dankLog": 12,
        "es6-promise/auto": 1,
        "whatwg-fetch": 4
    }],
    11: [function(e, t, n) {
        "use strict";

        function o(e, t) {
            var n = t || window.location.href,
                o = new RegExp("[?&]" + e + "=([^&#]*)", "i").exec(n);
            return o ? o[1] : null
        }

        function i() {
            for (var e = void 0, t = /\+/g, n = /([^&=]+)=?([^&]*)/g, o = function(e) {
                    return decodeURIComponent(e.toLowerCase().replace(t, " "))
                }, i = window.location.search.substring(1), r = {}; e = n.exec(i);) r[o(e[1])] = o(e[2]);
            return r
        }

        function r(e) {
            return (e = e || "") !== decodeURIComponent(e)
        }

        function s(e) {
            for (; r(e);) e = decodeURIComponent(e);
            return e
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.extendDefaults = function(e, t) {
            var n = void 0;
            for (n in t) t.hasOwnProperty(n) && null !== t[n] && void 0 !== t[n] && (e[n] = t[n]);
            return e
        }, n.getParentUrl = function() {
            t = "https://gamemonetize.com/";
            return t
        }, n.getParentDomain = function() {
           t = "https://gamemonetize.com/";
            return t
        }, n.getQueryParams = i, n.updateQueryStringParameter = function(e, t, n) {
            var o = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                i = -1 !== e.indexOf("?") ? "&" : "?";
            return e.match(o) ? e.replace(o, "$1" + t + "=" + n + "$2") : e + i + t + "=" + n
        }, n.getMobilePlatform = function() {
            var e = navigator.userAgent || navigator.vendor || window.opera;
            return /windows phone/i.test(e) ? "windows" : /android/i.test(e) ? "android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "ios" : ""
        }, n.getQueryString = o, n.getScript = function(e, t) {
            return new Promise(function(n, o) {
                if (Array.from(document.querySelectorAll("script")).map(function(e) {
                        return e.src
                    }).includes(e)) n();
                else {
                    var i = document.getElementsByTagName("script")[0],
                        r = document.createElement("script");
                    r.type = "text/javascript", r.async = !0, r.src = e, r.id = t, r.onload = function() {
                        n()
                    }, r.onerror = function() {
                        o("Failed to load " + e)
                    }, i.parentNode.insertBefore(r, i)
                }
            })
        }
    }, {}],
    12: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = Date.now();
        n.dankLog = function(e, t, n) {
            try {
                if (localStorage.getItem("gd_debug")) {
                    var i = "error" === n ? "background: #c4161e; color: #fff" : "warning" === n ? "background: #ff8c1c; color: #fff" : "info" === n ? "background: #ff0080; color: #fff" : "background: #50b432; color: #fff",
                        r = console.log("[" + (Date.now() - o) / 1e3 + "s]%c %c %c GameMonetize.com %c %c %c " + e + " ", "background: #ff7f03", "background: #ff7f03", "color: #fff; background: #ff7f03;", "background: #ff7f03", "background: #ff7f03", i, void 0 !== t ? t : "");
                    console.log.apply(console, r)
                }
            } catch (e) {
                console.log(e)
            }
        }
    }, {}]
}, {}, [6, 7, 8, 9, 10, 11, 12]);

/*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */
(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,!0):function(w){if(!w.document){throw new Error("jQuery requires a window with a document")}
return factory(w)}}else{factory(global)}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var deletedIds=[];var slice=deletedIds.slice;var concat=deletedIds.concat;var push=deletedIds.push;var indexOf=deletedIds.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var version="1.11.3",jQuery=function(selector,context){return new jQuery.fn.init(selector,context)},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase()};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this)},get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]):slice.call(this)},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret},each:function(callback,args){return jQuery.each(this,callback,args)},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)}))},slice:function(){return this.pushStack(slice.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:push,sort:deletedIds.sort,splice:deletedIds.splice};jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=!1;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={}}
if(i===length){target=this;i--}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=!1;clone=src&&jQuery.isArray(src)?src:[]}else{clone=src&&jQuery.isPlainObject(src)?src:{}}
target[name]=jQuery.extend(deep,clone,copy)}else if(copy!==undefined){target[name]=copy}}}}
return target};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:!0,error:function(msg){throw new Error(msg)},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function"},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array"},isWindow:function(obj){return obj!=null&&obj==obj.window},isNumeric:function(obj){return!jQuery.isArray(obj)&&(obj-parseFloat(obj)+1)>=0},isEmptyObject:function(obj){var name;for(name in obj){return!1}
return!0},isPlainObject:function(obj){var key;if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return!1}
try{if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return!1}}catch(e){return!1}
if(support.ownLast){for(key in obj){return hasOwn.call(obj,key)}}
for(key in obj){}
return key===undefined||hasOwn.call(obj,key)},type:function(obj){if(obj==null){return obj+""}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj},globalEval:function(data){if(data&&jQuery.trim(data)){(window.execScript||function(data){window["eval"].call(window,data)})(data)}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===!1){break}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===!1){break}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===!1){break}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===!1){break}}}}
return obj},trim:function(text){return text==null?"":(text+"").replace(rtrim,"")},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr)}else{push.call(ret,arr)}}
return ret},inArray:function(elem,arr,i){var len;if(arr){if(indexOf){return indexOf.call(arr,elem,i)}
len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i}}}
return-1},merge:function(first,second){var len=+second.length,j=0,i=first.length;while(j<len){first[i++]=second[j++]}
if(len!==len){while(second[j]!==undefined){first[i++]=second[j++]}}
first.length=i;return first},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i])}}
return matches},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value)}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value)}}}
return concat.apply([],ret)},guid:1,proxy:function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp}
if(!jQuery.isFunction(fn)){return undefined}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)))};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy},now:function(){return+(new Date())},support:support});jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()});function isArraylike(obj){var length="length" in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return!1}
if(obj.nodeType===1&&length){return!0}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj}
var Sizzle=
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=!0}
return 0},MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i}}
return-1},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00)},unloadHandler=function(){setDocument()};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els))}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1}}}
function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context)}
context=context||document;results=results||[];nodeType=context.nodeType;if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results}
if(!seed&&documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results}}else{return results}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results}else if((m=match[3])&&support.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results}}
if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType!==1&&selector;if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&")}else{context.setAttribute("id",nid)}
nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i])}
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;newSelector=groups.join(",")}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results}catch(qsaError){}finally{if(!old){context.removeAttribute("id")}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed)}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()]}
return(cache[key+" "]=value)}
return cache}
function markFunction(fn){fn[expando]=!0;return fn}
function assert(fn){var div=document.createElement("div");try{return!!fn(div)}catch(e){return!1}finally{if(div.parentNode){div.parentNode.removeChild(div)}
div=null}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1}}}
return a?1:-1}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type}}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type}}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j])}}})})}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":!1};setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document}
document=doc;docElem=doc.documentElement;parent=doc.defaultView;if(parent&&parent!==parent.top){if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,!1)}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler)}}
documentIsHTML=!isXML(doc);support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className")});support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length});support.getElementsByClassName=rnative.test(doc.getElementsByClassName);support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length});if(support.getById){Expr.find.ID=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m&&m.parentNode?[m]:[]}};Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId}}}else{delete Expr.find.ID;Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId}}}
Expr.find.TAG=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag)}else if(support.qsa){return context.querySelectorAll(tag)}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem)}}
return tmp}
return results};Expr.find.CLASS=support.getElementsByClassName&&function(className,context){if(documentIsHTML){return context.getElementsByClassName(className)}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(doc.querySelectorAll))){assert(function(div){docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\f]' msallowcapture=''>"+"<option selected=''></option></select>";if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")")}
if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")")}
if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=")}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked")}
if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]")}});assert(function(div){var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=")}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled")}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:")})}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos)})}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return!0}}}
return!1};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=!0;return 0}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===doc||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1}
if(b===doc||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1}
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0}
return compare&4?-1:1}:function(a,b){if(a===b){hasDuplicate=!0;return 0}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0}else if(aup===bup){return siblingCheck(a,b)}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur)}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur)}
while(ap[i]===bp[i]){i++}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0};return doc};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements)};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem)}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context)}
return contains(context,elem)};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem)}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg)};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i)}}
while(j--){results.splice(duplicates[j],1)}}
sortInput=null;return results};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node)}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem)}}}else if(nodeType===3||nodeType===4){return elem.nodeValue}
return ret};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" "}
return match.slice(0,4)},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0])}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd")}else if(match[3]){Sizzle.error(match[0])}
return match},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr.CHILD.test(match[0])){return null}
if(match[3]){match[2]=match[4]||match[5]||""}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,!0))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess)}
return match.slice(0,3)}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return!0}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName}},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"")})},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!="}
if(!operator){return!0}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":!1}},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return!1}}
start=dir=type==="only"&&!start&&"nextSibling"}
return!0}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break}}}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1]}else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff]}
if(node===elem){break}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0)}}},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument)}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i])}}):function(elem){return fn(elem,0,args)}}
return fn}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem)}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop()}}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0}}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1}}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang)}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0}}while((elem=elem.parentNode)&&elem.nodeType===1);return!1}}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id},"root":function(elem){return elem===docElem},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex)},"enabled":function(elem){return elem.disabled===!1},"disabled":function(elem){return elem.disabled===!0},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected)},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex}
return elem.selected===!0},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return!1}}
return!0},"parent":function(elem){return!Expr.pseudos.empty(elem)},"header":function(elem){return rheader.test(elem.nodeName)},"input":function(elem){return rinputs.test(elem.nodeName)},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button"},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text")},"first":createPositionalPseudo(function(){return[0]}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1]}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument]}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i)}
return matchIndexes}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i)}
return matchIndexes}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i)}
return matchIndexes}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i)}
return matchIndexes})}};Expr.pseudos.nth=Expr.pseudos.eq;for(i in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){Expr.pseudos[i]=createInputPseudo(i)}
for(i in{submit:!0,reset:!0}){Expr.pseudos[i]=createButtonPseudo(i)}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0)}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar}
groups.push((tokens=[]))}
matched=!1;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length)}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length)}}
if(!matched){break}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0)};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value}
return selector}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml)}}}:function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return!0}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((oldCache=outerCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2])}else{outerCache[dir]=newCache;if((newCache[2]=matcher(elem,context,xml))){return!0}}}}}}}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return!1}}
return!0}:matchers[0]}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results)}
return results}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i)}}}}
return newUnmatched}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter)}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector)}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml)}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem)}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem))}}
postFinder(null,(matcherOut=[]),temp,xml)}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem)}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml)}else{push.apply(results,matcherOut)}}})}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext},implicitRelative,!0),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1},implicitRelative,!0),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)]}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens))}
matchers.push(matcher)}}
return elementMatcher(matchers)}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find.TAG("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context!==document&&context}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);break}}
if(outermost){dirruns=dirrunsUnique}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--}
if(seed){unmatched.push(elem)}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml)}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results)}}}
setMatched=condense(setMatched)}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results)}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup}
return unmatched};return bySet?markFunction(superMatcher):superMatcher}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector)}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached)}else{elementMatchers.push(cached)}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector}
return cached};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find.ID(token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results}else if(compiled){context=context.parentNode}
selector=selector.slice(tokens.shift().value.length)}
i=matchExpr.needsContext.test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results}
break}}}}(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,rsibling.test(selector)&&testContext(context.parentNode)||context);return results};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#"})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2)}})}
if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")===""})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue}})}
if(!assert(function(div){return div.getAttribute("disabled")==null})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===!0?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null}})}
return Sizzle})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not})}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not})}
if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not)}
qualifier=jQuery.filter(qualifier,elements)}
return jQuery.grep(elements,function(elem){return(jQuery.inArray(elem,qualifier)>=0)!==not})}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")"}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1}))};jQuery.fn.extend({find:function(selector){var i,ret=[],self=this,len=self.length;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return!0}}}))}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret)}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret},filter:function(selector){return this.pushStack(winnow(this,selector||[],!1))},not:function(selector){return this.pushStack(winnow(this,selector||[],!0))},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],!1).length}});var rootjQuery,document=window.document,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context){var match,elem;if(!selector){return this}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null]}else{match=rquickExpr.exec(selector)}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,!0));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match])}else{this.attr(match,context[match])}}}
return this}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector)}
this.length=1;this[0]=elem}
this.context=document;this.selector=selector;return this}}else if(!context||context.jquery){return(context||rootjQuery).find(selector)}else{return this.constructor(context).find(selector)}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this}else if(jQuery.isFunction(selector)){return typeof rootjQuery.ready!=="undefined"?rootjQuery.ready(selector):selector(jQuery)}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context}
return jQuery.makeArray(selector,this)};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:!0,contents:!0,next:!0,prev:!0};jQuery.extend({dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur)}
cur=cur[dir]}
return matched},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n)}}
return r}});jQuery.fn.extend({has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return!0}}})},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break}}}
return this.pushStack(matched.length>1?jQuery.unique(matched):matched)},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem))}
return jQuery.inArray(elem.jquery?elem[0]:elem,this)},add:function(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))))},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}});function sibling(cur,dir){do{cur=cur[dir]}while(cur&&cur.nodeType!==1);return cur}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null},parents:function(elem){return jQuery.dir(elem,"parentNode")},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until)},next:function(elem){return sibling(elem,"nextSibling")},prev:function(elem){return sibling(elem,"previousSibling")},nextAll:function(elem){return jQuery.dir(elem,"nextSibling")},prevAll:function(elem){return jQuery.dir(elem,"previousSibling")},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until)},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until)},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem)},children:function(elem){return jQuery.sibling(elem.firstChild)},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes)}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret)}
if(this.length>1){if(!guaranteedUnique[name]){ret=jQuery.unique(ret)}
if(rparentsprev.test(name)){ret=ret.reverse()}}
return this.pushStack(ret)}});var rnotwhite=(/\S+/g);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=!0});return object}
jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var firing,memory,fired,firingLength,firingIndex,firingStart,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=!0;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=!0;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===!1&&options.stopOnFalse){memory=!1;break}}
firing=!1;if(list){if(stack){if(stack.length){fire(stack.shift())}}else if(memory){list=[]}else{self.disable()}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg)}}else if(arg&&arg.length&&type!=="string"){add(arg)}})})(arguments);if(firing){firingLength=list.length}else if(memory){firingStart=start;fire(memory)}}
return this},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--}
if(index<=firingIndex){firingIndex--}}}})}
return this},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length)},empty:function(){list=[];firingLength=0;return this},disable:function(){list=stack=memory=undefined;return this},disabled:function(){return!list},lock:function(){stack=undefined;if(!memory){self.disable()}
return this},locked:function(){return!stack},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args)}else{fire(args)}}
return this},fire:function(){self.fireWith(this,arguments);return this},fired:function(){return!!fired}};return self};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state},always:function(){deferred.done(arguments).fail(arguments);return this},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments)}})});fns=null}).promise()},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString},tuples[i^1][2].disable,tuples[2][2].lock)}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this};deferred[tuple[0]+"With"]=list.fireWith});promise.promise(deferred);if(func){func.call(deferred,deferred)}
return deferred},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values)}else if(!(--remaining)){deferred.resolveWith(contexts,values)}}},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues))}else{--remaining}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues)}
return deferred.promise()}});var readyList;jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);return this};jQuery.extend({isReady:!1,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++}else{jQuery.ready(!0)}},ready:function(wait){if(wait===!0?--jQuery.readyWait:jQuery.isReady){return}
if(!document.body){return setTimeout(jQuery.ready)}
jQuery.isReady=!0;if(wait!==!0&&--jQuery.readyWait>0){return}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready")}}});function detach(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,!1);window.removeEventListener("load",completed,!1)}else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed)}}
function completed(){if(document.addEventListener||event.type==="load"||document.readyState==="complete"){detach();jQuery.ready()}}
jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready)}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed,!1);window.addEventListener("load",completed,!1)}else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);var top=!1;try{top=window.frameElement==null&&document.documentElement}catch(e){}
if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left")}catch(e){return setTimeout(doScrollCheck,50)}
detach();jQuery.ready()}})()}}}
return readyList.promise(obj)};var strundefined=typeof undefined;var i;for(i in jQuery(support)){break}
support.ownLast=i!=="0";support.inlineBlockNeedsLayout=!1;jQuery(function(){var val,div,body,container;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return}
div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom!==strundefined){div.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";support.inlineBlockNeedsLayout=val=div.offsetWidth===3;if(val){body.style.zoom=1}}
body.removeChild(container)});(function(){var div=document.createElement("div");if(support.deleteExpando==null){support.deleteExpando=!0;try{delete div.test}catch(e){support.deleteExpando=!1}}
div=null})();jQuery.acceptData=function(elem){var noData=jQuery.noData[(elem.nodeName+" ").toLowerCase()],nodeType=+elem.nodeType||1;return nodeType!==1&&nodeType!==9?!1:!noData||noData!==!0&&elem.getAttribute("classid")===noData};var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?!0:data==="false"?!1:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data}catch(e){}
jQuery.data(elem,key,data)}else{data=undefined}}
return data}
function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue}
if(name!=="toJSON"){return!1}}
return!0}
function internalData(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return}
var ret,thisCache,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&data===undefined&&typeof name==="string"){return}
if(!id){if(isNode){id=elem[internalKey]=deletedIds.pop()||jQuery.guid++}else{id=internalKey}}
if(!cache[id]){cache[id]=isNode?{}:{toJSON:jQuery.noop}}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name)}else{cache[id].data=jQuery.extend(cache[id].data,name)}}
thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={}}
thisCache=thisCache.data}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data}
if(typeof name==="string"){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)]}}else{ret=thisCache}
return ret}
function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return}
var thisCache,i,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name]}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name]}else{name=name.split(" ")}}}else{name=name.concat(jQuery.map(name,jQuery.camelCase))}
i=name.length;while(i--){delete thisCache[name[i]]}
if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return}}
if(isNode){jQuery.cleanData([elem],!0)}else if(support.deleteExpando||cache!=cache.window){delete cache[id]}else{cache[id]=null}}
jQuery.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem)},data:function(elem,name,data){return internalData(elem,name,data)},removeData:function(elem,name){return internalRemoveData(elem,name)},_data:function(elem,name,data){return internalData(elem,name,data,!0)},_removeData:function(elem,name){return internalRemoveData(elem,name,!0)}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name])}}}
jQuery._data(elem,"parsedAttrs",!0)}}
return data}
if(typeof key==="object"){return this.each(function(){jQuery.data(this,key)})}
return arguments.length>1?this.each(function(){jQuery.data(this,key,value)}):elem?dataAttr(elem,key,jQuery.data(elem,key)):undefined},removeData:function(key){return this.each(function(){jQuery.removeData(this,key)})}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data))}else{queue.push(data)}}
return queue||[]}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type)};if(fn==="inprogress"){fn=queue.shift();startLength--}
if(fn){if(type==="fx"){queue.unshift("inprogress")}
delete hooks.stop;fn.call(elem,next,hooks)}
if(!startLength&&hooks){hooks.empty.fire()}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key)})})}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--}
if(arguments.length<setter){return jQuery.queue(this[0],type)}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type)}})},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)})},clearQueue:function(type){return this.queue(type||"fx",[])},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements])}};if(typeof type!=="string"){obj=type;type=undefined}
type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve)}}
resolve();return defer.promise(obj)}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem)};var access=jQuery.access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=!0;for(i in key){jQuery.access(elems,fn,i,key[i],!0,emptyGet,raw)}}else if(value!==undefined){chainable=!0;if(!jQuery.isFunction(value)){raw=!0}
if(bulk){if(raw){fn.call(elems,value);fn=null}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value)}}}
if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)))}}}
return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet};var rcheckableType=(/^(?:checkbox|radio)$/i);(function(){var input=document.createElement("input"),div=document.createElement("div"),fragment=document.createDocumentFragment();div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";support.leadingWhitespace=div.firstChild.nodeType===3;support.tbody=!div.getElementsByTagName("tbody").length;support.htmlSerialize=!!div.getElementsByTagName("link").length;support.html5Clone=document.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>";input.type="checkbox";input.checked=!0;fragment.appendChild(input);support.appendChecked=input.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(!0).lastChild.defaultValue;fragment.appendChild(div);div.innerHTML="<input type='radio' checked='checked' name='t'/>";support.checkClone=div.cloneNode(!0).cloneNode(!0).lastChild.checked;support.noCloneEvent=!0;if(div.attachEvent){div.attachEvent("onclick",function(){support.noCloneEvent=!1});div.cloneNode(!0).click()}
if(support.deleteExpando==null){support.deleteExpando=!0;try{delete div.test}catch(e){support.deleteExpando=!1}}})();(function(){var i,eventName,div=document.createElement("div");for(i in{submit:!0,change:!0,focusin:!0}){eventName="on"+i;if(!(support[i+"Bubbles"]=eventName in window)){div.setAttribute(eventName,"t");support[i+"Bubbles"]=div.attributes[eventName].expando===!1}}
div=null})();var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return!0}
function returnFalse(){return!1}
function safeActiveElement(){try{return document.activeElement}catch(err){}}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem);if(!elemData){return}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector}
if(!handler.guid){handler.guid=jQuery.guid++}
if(!(events=elemData.events)){events=elemData.events={}}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined};eventHandle.elem=elem}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===!1){if(elem.addEventListener){elem.addEventListener(type,eventHandle,!1)}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle)}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj)}else{handlers.push(handleObj)}
jQuery.event.global[type]=!0}
elem=null},remove:function(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,!0)}
continue}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--}
if(special.remove){special.remove.call(elem,handleObj)}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===!1){jQuery.removeEvent(elem,type,elemData.handle)}
delete events[type]}}
if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem,"events")}},trigger:function(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return}
if(rfocusMorph.test(type+jQuery.event.triggered)){return}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort()}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===!1){return}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window)}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data)}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&jQuery.acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===!1){event.preventDefault()}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===!1)&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null}
jQuery.event.triggered=type;try{elem[type]()}catch(e){}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp}}}}
return event.result},dispatch:function(event){event=jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===!1){return}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===!1){event.preventDefault();event.stopPropagation()}}}}}
if(special.postDispatch){special.postDispatch.call(this,event)}
return event.result},handlers:function(event,handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!=this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==!0||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length}
if(matches[sel]){matches.push(handleObj)}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches})}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)})}
return handlerQueue},fix:function(event){if(event[jQuery.expando]){return event}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{}}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop]}
if(!event.target){event.target=originalEvent.srcElement||document}
if(event.target.nodeType===3){event.target=event.target.parentNode}
event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode}
return event}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)))}
return event}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){try{this.focus();return!1}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return!1}},delegateType:"focusout"},click:{trigger:function(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return!1}},_default:function(event){return jQuery.nodeName(event.target,"a")}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:!0,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem)}else{jQuery.event.dispatch.call(elem,e)}
if(e.isDefaultPrevented()){event.preventDefault()}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,!1)}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]===strundefined){elem[name]=null}
elem.detachEvent(name,handle)}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props)}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===!1?returnTrue:returnFalse}else{this.type=src}
if(props){jQuery.extend(this,props)}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=!0};jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return}
if(e.preventDefault){e.preventDefault()}else{e.returnValue=!1}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e){return}
if(e.stopPropagation){e.stopPropagation()}
e.cancelBubble=!0},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation()}
this.stopPropagation()}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix}
return ret}}});if(!support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return!1}
jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=!0});jQuery._data(form,"submitBubbles",!0)}})},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,!0)}}},teardown:function(){if(jQuery.nodeName(this,"form")){return!1}
jQuery.event.remove(this,"._submit")}}}
if(!support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=!0}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=!1}
jQuery.event.simulate("change",this,event,!0)})}
return!1}
jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,!0)}});jQuery._data(elem,"changeBubbles",!0)}})},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments)}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName)}}}
if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),!0)};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=jQuery._data(doc,fix);if(!attaches){doc.addEventListener(orig,handler,!0)}
jQuery._data(doc,fix,(attaches||0)+1)},teardown:function(){var doc=this.ownerDocument||this,attaches=jQuery._data(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,!0);jQuery._removeData(doc,fix)}else{jQuery._data(doc,fix,attaches)}}}})}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var type,origFn;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined}
for(type in types){this.on(type,selector,data,types[type],one)}
return this}
if(data==null&&fn==null){fn=selector;data=selector=undefined}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined}else{fn=data;data=selector;selector=undefined}}
if(fn===!1){fn=returnFalse}else if(!fn){return this}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments)};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector)})},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1)},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type])}
return this}
if(selector===!1||typeof selector==="function"){fn=selector;selector=undefined}
if(fn===!1){fn=returnFalse}
return this.each(function(){jQuery.event.remove(this,types,fn,selector)})},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)})},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,!0)}}});function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop())}}
return safeFrag}
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName!==strundefined?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!==strundefined?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem)}else{jQuery.merge(found,getAll(elem,tag))}}}
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found}
function fixDefaultChecked(elem){if(rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked}}
function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem}
function disableScript(elem){elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+elem.type;return elem}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1]}else{elem.removeAttribute("type")}
return elem}
function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"))}}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i])}}}
if(curData.data){curData.data=jQuery.extend({},curData.data)}}
function fixCloneNodeIssues(src,dest){var nodeName,e,data;if(dest.nodeType!==1){return}
nodeName=dest.nodeName.toLowerCase();if(!support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle)}
dest.removeAttribute(jQuery.expando)}
if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest)}else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML}
if(support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML}}else if(nodeName==="input"&&rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value}}else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(!0)}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild)}
if((!support.noCloneEvent||!support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0;(node=srcElements[i])!=null;++i){if(destElements[i]){fixCloneNodeIssues(node,destElements[i])}}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i])}}else{cloneCopyEvent(elem,clone)}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"))}
destElements=srcElements=node=null;return clone},buildFragment:function(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length,safe=createSafeFragment(context),nodes=[],i=0;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem)}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem))}else{tmp=tmp||safe.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild}
if(!support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]))}
if(!support.tbody){elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody)}}}
jQuery.merge(nodes,tmp.childNodes);tmp.textContent="";while(tmp.firstChild){tmp.removeChild(tmp.firstChild)}
tmp=safe.lastChild}}}
if(tmp){safe.removeChild(tmp)}
if(!support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked)}
i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(safe.appendChild(elem),"script");if(contains){setGlobalEval(tmp)}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem)}}}}
tmp=null;return safe},cleanData:function(elems,acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type)}else{jQuery.removeEvent(elem,type,data.handle)}}}
if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey]}else if(typeof elem.removeAttribute!==strundefined){elem.removeAttribute(internalKey)}else{elem[internalKey]=null}
deletedIds.push(id)}}}}}});jQuery.fn.extend({text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value))},null,value,arguments.length)},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem)}})},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild)}})},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this)}})},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling)}})},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem))}
if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"))}
elem.parentNode.removeChild(elem)}}
return this},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,!1))}
while(elem.firstChild){elem.removeChild(elem.firstChild)}
if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0}}
return this},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?!1:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)})},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(support.htmlSerialize||!rnoshimcache.test(value))&&(support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,!1));elem.innerHTML=value}}
elem=0}catch(e){}}
if(elem){this.empty().append(value)}},null,value,arguments.length)},replaceWith:function(){var arg=arguments[0];this.domManip(arguments,function(elem){arg=this.parentNode;jQuery.cleanData(getAll(this));if(arg){arg.replaceChild(elem,this)}});return arg&&(arg.length||arg.nodeType)?this:this.remove()},detach:function(selector){return this.remove(selector,!0)},domManip:function(args,callback){args=concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html())}
self.domManip(args,callback)})}
if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,!1,this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first}
if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,!0,!0);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"))}}
callback.call(this[i],node,i)}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src)}}else{jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""))}}}}
fragment=first=null}}
return this}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length-1;for(;i<=last;i++){elems=i===last?this:this.clone(!0);jQuery(insert[i])[original](elems);push.apply(ret,elems.get())}
return this.pushStack(ret)}});var iframe,elemdisplay={};function actualDisplay(name,doc){var style,elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=window.getDefaultComputedStyle&&(style=window.getDefaultComputedStyle(elem[0]))?style.display:jQuery.css(elem[0],"display");elem.detach();return display}
function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach()}
elemdisplay[nodeName]=display}
return display}(function(){var shrinkWrapBlocksVal;support.shrinkWrapBlocks=function(){if(shrinkWrapBlocksVal!=null){return shrinkWrapBlocksVal}
shrinkWrapBlocksVal=!1;var div,body,container;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return}
div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom!==strundefined){div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;"+"padding:1px;width:1px;zoom:1";div.appendChild(document.createElement("div")).style.width="5px";shrinkWrapBlocksVal=div.offsetWidth!==3}
body.removeChild(container);return shrinkWrapBlocksVal}})();var rmargin=(/^margin/);var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles,curCSS,rposition=/^(top|right|bottom|left)$/;if(window.getComputedStyle){getStyles=function(elem){if(elem.ownerDocument.defaultView.opener){return elem.ownerDocument.defaultView.getComputedStyle(elem,null)}
return window.getComputedStyle(elem,null)};curCSS=function(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name)}
if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth}}
return ret===undefined?ret:ret+""}}else if(document.documentElement.currentStyle){getStyles=function(elem){return elem.currentStyle};curCSS=function(elem,name,computed){var left,rs,rsLeft,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed[name]:undefined;if(ret==null&&style&&style[name]){ret=style[name]}
if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left;if(rsLeft){rs.left=elem.currentStyle.left}
style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){rs.left=rsLeft}}
return ret===undefined?ret:ret+""||"auto"}}
function addGetHookIf(conditionFn,hookFn){return{get:function(){var condition=conditionFn();if(condition==null){return}
if(condition){delete this.get;return}
return(this.get=hookFn).apply(this,arguments)}}}(function(){var div,style,a,pixelPositionVal,boxSizingReliableVal,reliableHiddenOffsetsVal,reliableMarginRightVal;div=document.createElement("div");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a=div.getElementsByTagName("a")[0];style=a&&a.style;if(!style){return}
style.cssText="float:left;opacity:.5";support.opacity=style.opacity==="0.5";support.cssFloat=!!style.cssFloat;div.style.backgroundClip="content-box";div.cloneNode(!0).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";support.boxSizing=style.boxSizing===""||style.MozBoxSizing===""||style.WebkitBoxSizing==="";jQuery.extend(support,{reliableHiddenOffsets:function(){if(reliableHiddenOffsetsVal==null){computeStyleTests()}
return reliableHiddenOffsetsVal},boxSizingReliable:function(){if(boxSizingReliableVal==null){computeStyleTests()}
return boxSizingReliableVal},pixelPosition:function(){if(pixelPositionVal==null){computeStyleTests()}
return pixelPositionVal},reliableMarginRight:function(){if(reliableMarginRightVal==null){computeStyleTests()}
return reliableMarginRightVal}});function computeStyleTests(){var div,body,container,contents;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return}
div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute";pixelPositionVal=boxSizingReliableVal=!1;reliableMarginRightVal=!0;if(window.getComputedStyle){pixelPositionVal=(window.getComputedStyle(div,null)||{}).top!=="1%";boxSizingReliableVal=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";contents=div.appendChild(document.createElement("div"));contents.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0";contents.style.marginRight=contents.style.width="0";div.style.width="1px";reliableMarginRightVal=!parseFloat((window.getComputedStyle(contents,null)||{}).marginRight);div.removeChild(contents)}
div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";contents=div.getElementsByTagName("td");contents[0].style.cssText="margin:0;border:0;padding:0;display:none";reliableHiddenOffsetsVal=contents[0].offsetHeight===0;if(reliableHiddenOffsetsVal){contents[0].style.display="";contents[1].style.display="none";reliableHiddenOffsetsVal=contents[0].offsetHeight===0}
body.removeChild(container)}})();jQuery.swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name]}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name]}
return ret};var ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),rrelNum=new RegExp("^([+-])=("+pnum+")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){if(name in style){return name}
var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name}}
return origName}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue}
values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display=""}
if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName))}}else{hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"))}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none"}}
return elements}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],!0,styles)}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],!0,styles)}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",!0,styles)}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],!0,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",!0,styles)}}}
return val}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=!0,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=support.boxSizing&&jQuery.css(elem,"boxSizing",!1,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name]}
if(rnumnonpx.test(val)){return val}
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);val=parseFloat(val)||0}
return(val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px"}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret}}}},cssNumber:{"columnCount":!0,"fillOpacity":!0,"flexGrow":!0,"flexShrink":!0,"fontWeight":!0,"lineHeight":!0,"opacity":!0,"order":!0,"orphans":!0,"widows":!0,"zIndex":!0,"zoom":!0},cssProps:{"float":support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number"}
if(value==null||value!==value){return}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px"}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit"}
if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value}catch(e){}}}else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,!1,extra))!==undefined){return ret}
return style[name]}},css:function(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get" in hooks){val=hooks.get(elem,!0,extra)}
if(val===undefined){val=curCSS(elem,name,styles)}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name]}
if(extra===""||extra){num=parseFloat(val);return extra===!0||jQuery.isNumeric(num)?num||0:val}
return val}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra)}):getWidthOrHeight(elem,name,extra)}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,support.boxSizing&&jQuery.css(elem,"boxSizing",!1,styles)==="border-box",styles):0)}}});if(!support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":computed?"1":""},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(value===""||currentStyle&&!currentStyle.filter){return}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity}}}
jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"])}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0]}
return expanded}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],!1,styles)}
return map}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name)},name,value,arguments.length>1)},show:function(){return showHide(this,!0)},hide:function(){return showHide(this)},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide()}
return this.each(function(){if(isHidden(this)){jQuery(this).show()}else{jQuery(this).hide()}})}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing)}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px")},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration)}else{this.pos=eased=percent}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}
if(hooks&&hooks.set){hooks.set(this)}else{Tween.propHooks._default.set(this)}
return this}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop]}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween)}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit)}else{tween.elem[tween.prop]=tween.now}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now}}};jQuery.easing={linear:function(p){return p},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2}};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){unit=unit||start[3];parts=parts||[];start=+target||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit)}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);}
if(parts){start=tween.start=+start||+target||0;tween.unit=unit;tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2]}
return tween}]};function createFxNow(){setTimeout(function(){fxNow=undefined});return(fxNow=jQuery.now())}
function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type}
if(includeWidth){attrs.opacity=attrs.width=type}
return attrs}
function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=jQuery._data(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire()}}}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire()}})})}
if(elem.nodeType===1&&("height" in props||"width" in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];display=jQuery.css(elem,"display");checkDisplay=display==="none"?jQuery._data(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){if(!support.inlineBlockNeedsLayout||defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block"}else{style.zoom=1}}}
if(opts.overflow){style.overflow="hidden";if(!support.shrinkWrapBlocks()){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2]})}}
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=!0}else{continue}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop)}else{display=undefined}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden=dataShow.hidden}}else{dataShow=jQuery._data(elem,"fxshow",{})}
if(toggle){dataShow.hidden=!hidden}
if(hidden){jQuery(elem).show()}else{anim.done(function(){jQuery(elem).hide()})}
anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop])}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0}}}}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0]}
if(index!==name){props[name]=value;delete props[index]}
hooks=jQuery.cssHooks[name];if(hooks&&"expand" in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing}}}else{specialEasing[name]=easing}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem}),tick=function(){if(stopped){return!1}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent)}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining}else{deferred.resolveWith(elem,[animation]);return!1}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(!0,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this}
stopped=!0;for(;index<length;index++){animation.tweens[index].run(1)}
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd])}else{deferred.rejectWith(elem,[animation,gotoEnd])}
return this}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation)}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)}
jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"]}else{props=props.split(" ")}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback)}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback)}else{animationPrefilters.push(callback)}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===!0){opt.queue="fx"}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this)}
if(opt.queue){jQuery.dequeue(this,opt.queue)}};return opt};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||jQuery._data(this,"finish")){anim.stop(!0)}};doAnimation.finish=doAnimation;return empty||optall.queue===!1?this.each(doAnimation):this.queue(optall.queue,doAnimation)},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd)};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined}
if(clearQueue&&type!==!1){this.queue(type||"fx",[])}
return this.each(function(){var dequeue=!0,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index])}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index])}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=!1;timers.splice(index,1)}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type)}})},finish:function(type){if(type!==!1){type=type||"fx"}
return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=!0;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,!0)}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(!0);timers.splice(index,1)}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this)}}
delete data.finish})}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,!0),speed,easing,callback)}});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)}});jQuery.timers=[];jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1)}}
if(!timers.length){jQuery.fx.stop()}
fxNow=undefined};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start()}else{jQuery.timers.pop()}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval)}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout)}})};(function(){var input,div,select,a,opt;div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a=div.getElementsByTagName("a")[0];select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px";support.getSetAttribute=div.className!=="t";support.style=/top/.test(a.getAttribute("style"));support.hrefNormalized=a.getAttribute("href")==="/a";support.checkOn=!!input.value;support.optSelected=opt.selected;support.enctype=!!document.createElement("form").enctype;select.disabled=!0;support.optDisabled=!opt.disabled;input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")==="";input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t"})();var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret}
return}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return}
if(isFunction){val=value.call(this,i,jQuery(this).val())}else{val=value}
if(val==null){val=""}else if(typeof val==="number"){val+=""}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+""})}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val}})}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:jQuery.trim(jQuery.text(elem))}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value}
values.push(value)}}
return values},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(jQuery.inArray(jQuery.valHooks.option.get(option),values)>=0){try{option.selected=optionSet=!0}catch(_){option.scrollHeight}}else{option.selected=!1}}
if(!optionSet){elem.selectedIndex=-1}
return options}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0)}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value}}});var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=support.getSetAttribute,getSetInput=support.input;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1)},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name)})}});jQuery.extend({attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return}
if(typeof elem.getAttribute===strundefined){return jQuery.prop(elem,name,value)}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook)}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name)}else if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret}else{elem.setAttribute(name,value+"");return value}}else if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret}else{ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem[propName]=!1}else{elem[jQuery.camelCase("default-"+name)]=elem[propName]=!1}}else{jQuery.attr(elem,name,"")}
elem.removeAttribute(getSetAttribute?name:propName)}}},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val}
return value}}}}});boolHook={set:function(elem,value,name){if(value===!1){jQuery.removeAttr(elem,name)}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name)}else{elem[jQuery.camelCase("default-"+name)]=elem[name]=!0}
return name}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=getSetInput&&getSetAttribute||!ruseDefault.test(name)?function(elem,name,isXML){var ret,handle;if(!isXML){handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle}
return ret}:function(elem,name,isXML){if(!isXML){return elem[jQuery.camelCase("default-"+name)]?name.toLowerCase():null}}});if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={set:function(elem,value,name){if(jQuery.nodeName(elem,"input")){elem.defaultValue=value}else{return nodeHook&&nodeHook.set(elem,value,name)}}}}
if(!getSetAttribute){nodeHook={set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode((ret=elem.ownerDocument.createAttribute(name)))}
ret.value=value+="";if(name==="value"||value===elem.getAttribute(name)){return value}}};attrHandle.id=attrHandle.name=attrHandle.coords=function(elem,name,isXML){var ret;if(!isXML){return(ret=elem.getAttributeNode(name))&&ret.value!==""?ret.value:null}};jQuery.valHooks.button={get:function(elem,name){var ret=elem.getAttributeNode(name);if(ret&&ret.specified){return ret.value}},set:nodeHook.set};jQuery.attrHooks.contenteditable={set:function(elem,value,name){nodeHook.set(elem,value===""?!1:value,name)}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]={set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value}}}})}
if(!support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText||undefined},set:function(elem,value){return(elem.style.cssText=value+"")}}}
var rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1)},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name]}catch(e){}})}});jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name]}
if(value!==undefined){return hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value)}else{return hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name]}},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1}}}});if(!support.hrefNormalized){jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name]={get:function(elem){return elem.getAttribute(name,4)}}})}
if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex}}
return null}}}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this});if(!support.enctype){jQuery.propFix.enctype="encoding"}
var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function(value){var classes,elem,cur,clazz,j,finalValue,i=0,len=this.length,proceed=typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className))})}
if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" "}}
finalValue=jQuery.trim(cur);if(elem.className!==finalValue){elem.className=finalValue}}}}
return this},removeClass:function(value){var classes,elem,cur,clazz,j,finalValue,i=0,len=this.length,proceed=arguments.length===0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className))})}
if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ")}}
finalValue=value?jQuery.trim(cur):"";if(elem.className!==finalValue){elem.className=finalValue}}}}
return this},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value)}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal)})}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className)}else{self.addClass(className)}}}else if(type===strundefined||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className)}
this.className=this.className||value===!1?"":jQuery._data(this,"__className__")||""}})},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return!0}}
return!1}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name)}});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)},bind:function(types,data,fn){return this.on(types,null,data,fn)},unbind:function(types,fn){return this.off(types,null,fn)},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn)},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn)}});var nonce=jQuery.now();var rquery=(/\?/);var rvalidtokens=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;jQuery.parseJSON=function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data+"")}
var requireNonComma,depth=null,str=jQuery.trim(data+"");return str&&!jQuery.trim(str.replace(rvalidtokens,function(token,comma,open,close){if(requireNonComma&&comma){depth=0}
if(depth===0){return token}
requireNonComma=open||comma;depth+=!close-!open;return""}))?(Function("return "+str))():jQuery.error("Invalid JSON: "+data)};jQuery.parseXML=function(data){var xml,tmp;if(!data||typeof data!=="string"){return null}
try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml")}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data)}}catch(e){xml=undefined}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data)}
return xml};var ajaxLocParts,ajaxLocation,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*"}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType.charAt(0)==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func)}else{(structure[dataType]=structure[dataType]||[]).push(func)}}}}}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=!0;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return!1}else if(seekingTransport){return!(selected=dataTypeOrTransport)}});return selected}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")}
function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key]}}
if(deep){jQuery.extend(!0,target,deep)}
return target}
function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type")}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0]}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break}
if(!firstDataType){firstDataType=type}}
finalDataType=finalDataType||firstDataType}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType)}
return responses[finalDataType]}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv]}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType)}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===!0){conv=converters[conv2]}else if(converters[conv2]!==!0){current=tmp[0];dataTypes.unshift(tmp[1])}
break}}}}
if(conv!==!0){if(conv&&s["throws"]){response=conv(response)}else{try{response=conv(response)}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}}}}}}}
return{state:"success",data:response}}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target)},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined}
options=options||{};var parts,i,cacheURL,responseHeadersString,timeoutTimer,fireGlobals,transport,responseHeaders,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2]}}
match=responseHeaders[key.toLowerCase()]}
return match==null?null:match},getAllResponseHeaders:function(){return state===2?responseHeadersString:null},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value}
return this},overrideMimeType:function(type){if(!state){s.mimeType=type}
return this},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]]}}else{jqXHR.always(map[jqXHR.status])}}
return this},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText)}
done(0,finalText);return this}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))))}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);delete s.data}
if(s.cache===!1){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL])}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL])}}
if(s.data&&s.hasContent&&s.contentType!==!1||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i])}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===!1||state===2)){return jqXHR.abort()}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i])}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport")}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s])}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout")},s.timeout)}
try{state=1;transport.send(requestHeaders,done)}catch(e){if(state<2){done(-1,e)}else{throw e}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer)}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses)}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified}}
if(status===204||s.type==="HEAD"){statusText="nocontent"}else if(status===304){statusText="notmodified"}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR])}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error])}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error])}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop")}}}
return jqXHR},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script")}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined}
return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback})}});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})};jQuery.fn.extend({wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i))})}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(!0);if(this[0].parentNode){wrap.insertBefore(this[0])}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild}
return elem}).append(this)}
return this},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i))})}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html)}else{self.append(html)}})},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html)})},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes)}}).end()}});jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0||(!support.reliableHiddenOffsets()&&((elem.style&&elem.style.display)||jQuery.css(elem,"display"))==="none")};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem)};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v)}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add)}})}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)}}else{add(prefix,obj)}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value)})}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add)}}
return s.join("&").replace(r20,"+")};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type))}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}}).get()}});jQuery.ajaxSettings.xhr=window.ActiveXObject!==undefined?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&createStandardXHR()||createActiveXHR()}:createStandardXHR;var xhrId=0,xhrCallbacks={},xhrSupported=jQuery.ajaxSettings.xhr();if(window.attachEvent){window.attachEvent("onunload",function(){for(var key in xhrCallbacks){xhrCallbacks[key](undefined,!0)}})}
support.cors=!!xhrSupported&&("withCredentials" in xhrSupported);xhrSupported=support.ajax=!!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(options){if(!options.crossDomain||support.cors){var callback;return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i]}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType)}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest"}
for(i in headers){if(headers[i]!==undefined){xhr.setRequestHeader(i,headers[i]+"")}}
xhr.send((options.hasContent&&options.data)||null);callback=function(_,isAbort){var status,statusText,responses;if(callback&&(isAbort||xhr.readyState===4)){delete xhrCallbacks[id];callback=undefined;xhr.onreadystatechange=jQuery.noop;if(isAbort){if(xhr.readyState!==4){xhr.abort()}}else{responses={};status=xhr.status;if(typeof xhr.responseText==="string"){responses.text=xhr.responseText}
try{statusText=xhr.statusText}catch(e){statusText=""}
if(!status&&options.isLocal&&!options.crossDomain){status=responses.text?200:404}else if(status===1223){status=204}}}
if(responses){complete(status,statusText,responses,xhr.getAllResponseHeaders())}};if(!options.async){callback()}else if(xhr.readyState===4){setTimeout(callback)}else{xhr.onreadystatechange=xhrCallbacks[id]=callback}},abort:function(){if(callback){callback(undefined,!0)}}}}})}
function createStandardXHR(){try{return new window.XMLHttpRequest()}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=!1}
if(s.crossDomain){s.type="GET";s.global=!1}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async=!0;if(s.scriptCharset){script.charset=s.scriptCharset}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script)}
script=null;if(!isAbort){callback(200,"success")}}};head.insertBefore(script,head.firstChild)},abort:function(){if(script){script.onload(undefined,!0)}}}}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=!0;return callback}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==!1&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName)}else if(s.jsonp!==!1){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called")}
return responseContainer[0]};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName)}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0])}
responseContainer=overwritten=undefined});return"script"}});jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null}
if(typeof context==="boolean"){keepScripts=context;context=!1}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])]}
parsed=jQuery.buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove()}
return jQuery.merge([],parsed.childNodes)};var _load=jQuery.fn.load;jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments)}
var selector,response,type,self=this,off=url.indexOf(" ");if(off>=0){selector=jQuery.trim(url.slice(off,url.length));url=url.slice(0,off)}
if(jQuery.isFunction(params)){callback=params;params=undefined}else if(params&&typeof params==="object"){type="POST"}
if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText)}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR])})}
return this};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn)}});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem}).length};var docElem=window.document.documentElement;function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:!1}
jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative"}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset)}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft}
if("using" in options){options.using.call(elem,props)}else{curElem.css(props)}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i)})}
var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box}
if(typeof elem.getBoundingClientRect!==strundefined){box=elem.getBoundingClientRect()}
win=getWindow(doc);return{top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)}},position:function(){if(!this[0]){return}
var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0];if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect()}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset()}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",!0);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",!0)}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",!0),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",!0)}},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent}
return offsetParent||docElem})}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method]}
if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop())}else{elem[method]=val}},method,val,arguments.length,null)}});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed}})});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===!0||value===!0?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name]}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name])}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra)},type,chainable?margin:undefined,chainable,null)}})});jQuery.fn.size=function(){return this.length};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery})}
var _jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery}
return jQuery};if(typeof noGlobal===strundefined){window.jQuery=window.$=jQuery}
return jQuery}))

var comAPI = {
    VERSION: "1.1.0",
    initCallbackObj: null,
    _isFullscreen: false,
    get fullscreenEnabled() {
        var enabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
        return !!enabled
    },
    fullscreen: function(fullScreenElement) {
        if (!comAPI.fullscreenEnabled) {
            return
        }
        if (!fullScreenElement) {
            fullScreenElement = document.documentElement
        }
        if (fullScreenElement.requestFullscreen) {
            fullScreenElement.requestFullscreen()
        } else if (fullScreenElement.msRequestFullscreen) {
            fullScreenElement.msRequestFullscreen()
        } else if (fullScreenElement.mozRequestFullScreen) {
            fullScreenElement.mozRequestFullScreen()
        } else if (fullScreenElement.webkitRequestFullScreen) {
            fullScreenElement.webkitRequestFullScreen()
        }
    },
    exitFullscreen: function() {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    },
    onFullscreenChanged: function(event) {
        comAPI._isFullscreen = !comAPI._isFullscreen
    }
};
comAPI.config = {
    ForJoyH5_InGameAdInterval: 30,
    ForJoyH5_InGameAdType: "0,1",
};
comAPI.resize = {
    _timerID: null,
    _queue: [],
    get sw() {
        return $(window).width()
    },
    get sh() {
        return $(window).height()
    },
    indexOf: function(callback, context) {
        var i = 0,
            len = this._queue.length;
        for (i = 0; i < len; i++) {
            var node = this._queue[i];
            if (node.callback == callback && node.context == context) {
                return i
            }
        }
        return -1
    },
    add: function(callback, context, params) {
        var index = this.indexOf(callback, context);
        if (index == -1) {
            if (params && params.constructor != Array) {
                params = [params]
            }
            this._queue.push({
                callback: callback,
                context: context,
                params: params
            })
        } else {

        }
    },
    remove: function(callbackOrIndex, context) {
        var index = -1;
        if (callbackOrIndex.constructor == Number) {
            index = callbackOrIndex
        } else {
            index = this.indexOf(callbackOrIndex, context)
        }
        if (index > -1) {
            delete this._queue[index];
            this._queue.splice(index, 1)
        } else {

        }
    },
    handler: function(event) {
        if (comAPI.resize._timerID) {
            clearTimeout(comAPI.resize._timerID)
        }
        comAPI.resize._timerID = setTimeout(comAPI.resize._onHandler, 50)
    },
    _onHandler: function(event) {
        var i = 0,
            len = comAPI.resize._queue.length;
        for (i = 0; i < len; i++) {
            var node = comAPI.resize._queue[i];
            try {
                var func = node.callback;
                var context = node.context;
                var params = node.params;
                func.apply(context, params)
            } catch (e) {
                this.remove();
            }
        }
    }
};

comAPI.ad = {
    _callbackObj: null,
    intervalID: -1,
    _lastInGameAdTime: -1,
    _loaded: false,
    _isAds: false,
    _requesting: false,
    _imaContainer: null,
    _videoContent: null,
    _adsManager: null,
    _adsLoader: null,
    _adsRequest: null,
    _finishedPre: false,
    get finishedPre() {
        return this._finishedPre
    },
    set finishedPre(value) {
        this._finishedPre = value
    },
    get adType() {
        var typeSrc = comAPI.config.ForJoyH5_PreGameAdType;
        if (comAPI.ad.finishedPre) {
            typeSrc = comAPI.config.ForJoyH5_InGameAdType
        }
        switch (typeSrc) {
            case 0:
                return "all";
                break;
            case 1:
                return "onlyskipable";
                break;
            case 2:
                return "no";
                break
        }
    },
    get adTagUrl() {
        var descriptionURL = encodeURIComponent(window.location);
        if(!comAPI.ad._isAds) {
            var _adTagUrl="https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/GameMonetize.com-ADX-AFG-Preroll&description_url=" + encodeURIComponent( window.location.href ) + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="+Math.floor(Math.random()*10000000);
        }
        else {
            localStorage.setItem("gd_tag", "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/GameMonetize.com-ADX-AFG-Preroll&description_url=" + descriptionURL + "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=");
        }
        return _adTagUrl
    },
    check: function() {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            comAPI.config.debug = true;
            return true
        }
        return true
    },
    _init: function() {
        if (comAPI.ad.intervalID == -1) {
            comAPI.ad.intervalID = setTimeout(comAPI.ad.onAdClose, 3e4)
        }
        comAPI.ad._imaContainer = $("#imaContainer")[0];
        comAPI.ad._videoContent = $("#imaVideo")[0];
        var adDisplayContainer = new google.ima.AdDisplayContainer(comAPI.ad._imaContainer, comAPI.ad._videoContent);
        adDisplayContainer.initialize();
        comAPI.ad._adsLoader = new google.ima.AdsLoader(adDisplayContainer);
        comAPI.ad._adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, comAPI.ad.onAdsManagerLoaded, false);
        comAPI.ad._adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, comAPI.ad.onAdError, false);
        comAPI.ad._videoContent.onended = comAPI.ad.contentEndedListener;
        comAPI.ad._adsRequest = new google.ima.AdsRequest;
        comAPI.ad._adsRequest.adTagUrl = comAPI.ad.adTagUrl;
        comAPI.ad._adsRequest.linearAdSlotWidth = $(window).width();
        comAPI.ad._adsRequest.linearAdSlotHeight = $(window).height();
        comAPI.ad._adsRequest.nonLinearAdSlotWidth = $(window).width();
        comAPI.ad._adsRequest.nonLinearAdSlotHeight = $(window).height();
        comAPI.ad._adsRequest.forceNonLinearFullSlot = true;
        comAPI.resize.add(comAPI.ad.resizeAd, comAPI.ad)
    },
    init: function() {
        var refer = document.referrer;
        refer = refer.substr(refer.indexOf("://") + 1);
        if ((comAPI.config.ForJoyH5_ShowPreGameAd || refer.indexOf(comAPI.config.host) == 0) && comAPI.config.ForJoyH5_stats) {
            comAPI.ad.show()
        } else {
            comAPI.ad.onAdClose()
        }
    },
    onAdsManagerLoaded: function(adsManagerLoadedEvent) {
        comAPI.ad._adsManager = adsManagerLoadedEvent.getAdsManager(comAPI.ad._videoContent);
        comAPI.ad._adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, comAPI.ad.onAdError);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, comAPI.ad.onAllAdsCompleted);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, comAPI.ad.onUserClose);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, comAPI.ad.onAdComplete);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, comAPI.ad.onAdLoaded);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, comAPI.ad.onTypeTest1);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.AD_METADATA, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, comAPI.ad.onContentResumeRequested);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.DURATION_CHANGE, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LINEAR_CHANGED, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOG, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, comAPI.ad.onTypeTest);
        comAPI.ad._adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.FULLSCREEN);
        comAPI.ad._adsManager.start()
    },
    onContentResumeRequested: function(event) {
        comAPI.ad.onAdClose();
        console.log("resume game");
    },
    onTypeTest: function(event) {},
    onTypeTest1: function(event) {
        window.sdk.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
    },
    onAdLoaded: function(event) {
        clearTimeout(comAPI.ad.intervalID);
        $(comAPI.ad._imaContainer).css("visibility", "visible");
        $(comAPI.ad._imaContainer).children(":first").css("visibility", "visible");
        comAPI.ad._loaded = true;
        var contentType = comAPI.ad._adsManager.getCurrentAd().getContentType();
        var type = 0;
        if (contentType == "text") {
            type = 0
        } else if (contentType == "image/png") {
            type = 1
        } else {
            type = 2
        }
    },
    contentEndedListener: function() {
        comAPI.ad._adsLoader.contentComplete()
    },
    onAdError: function(adErrorEvent) {
        console.warn(adErrorEvent.getError());
        comAPI.ad.onAdClose();
        window.sdk.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");

        if(comAPI.ad._isAds == false) {
            comAPI.ad._isAds = true;
            comAPI.ad._init();
            ShowAds2();
        }
    },
    onAdComplete: function(event) {},
    onAllAdsCompleted: function(event) {
        comAPI.ad.onAdClose()
    },
    onAdClose: function() {
        var type = "AD_CLOSE";
        if (comAPI.ad.finishedPre == false) {
            type = type + "_PRE";
            comAPI.ad.finishedPre = true
        }
        comAPI.ad.close();
        window.sdk.onResumeGame("Advertisement(s) are done. Start / resume the game.", "success");
    },
    onUserClose: function(event) {
        comAPI.ad.onAdClose()
    },
    resizeAd: function() {
        if (comAPI.ad._adsManager) {
            comAPI.ad._adsManager.resize($(window).width(), $(window).height(), google.ima.ViewMode.FULLSCREEN)
        }
    },
    _onFinishedAd: function() {
        var showedRAD = comAPI.ad._onExecRAD();
        if (!showedRAD) {
            comAPI.ad._onExecIAD()
        }
        comAPI.ad._callbackObj = null
    },
    _onExecIAD: function() {
        var obj = comAPI.ad._callbackObj;
        if (!obj) {
            return false
        }
        var callback = obj.callback;
        var thisObj = obj.thisObj;
        var args = obj.args;
        return true
    },
    _onExecRAD: function() {
        var obj = comAPI.ad._callbackObj;
        if (!obj) {
            return false
        }
        var callback = obj.successCallback;
        var thisObj = obj.successThis;
        var args = obj.successArgs;
        return true
    },
    getShowable: function(force) {
        if (comAPI.ad._lastInGameAdTime === -1 || force) {
            return true
        }
        var now = (new Date).getTime();
        var interval = now - comAPI.ad._lastInGameAdTime;
        if (interval >= comAPI.config.ForJoyH5_InGameAdInterval * 1e3) {
            return true
        } else {
            var least = Math.ceil(comAPI.config.ForJoyH5_InGameAdInterval - interval / 1e3);
            return false
        }
    },
    updateLastInGameAdTime: function() {
        var now = (new Date).getTime();
        comAPI.ad._lastInGameAdTime = now
    },
    show: function(callbackObj, force) {
    
        var canShow = comAPI.ad.getShowable(force);
        comAPI.ad._callbackObj = callbackObj;
        if (!canShow && callbackObj) {
            comAPI.ad._onFinishedAd();
            return
        }
        if (!comAPI.ad._adsRequest) {
            comAPI.ad._init()
        }
        if (comAPI.ad._requesting) {
            return
        }
        if (canShow || force) {
            comAPI.ad._requesting = true;
            clearTimeout(comAPI.ad.intervalID);
            comAPI.ad.intervalID = setTimeout(comAPI.ad.onAdClose, 3e4);
            $(comAPI.ad._imaContainer).css("display", "");
            comAPI.ad._adsLoader.requestAds(comAPI.ad._adsRequest);
            comAPI.ad.resizeAd()
        } else {
            comAPI.ad._onFinishedAd()
        }
    },
    close: function() {
        if (comAPI.ad._loaded == true) {
            comAPI.ad.updateLastInGameAdTime()
        }
        comAPI.ad._requesting = false;
        comAPI.ad._loaded = false;
        clearTimeout(comAPI.ad.intervalID);
        comAPI.ad._adsManager && comAPI.ad._adsManager.destroy();
        $(comAPI.ad._imaContainer).css("display", "none");
        comAPI.ad._onFinishedAd();
    }
};

 function ShowAds() 
        {
            try { if (window.location.href.indexOf("gmadstester") == -1) {

            var urlsvk = "(vkplay.ru|vkplay.com|dzen.ru)";
            var urlvk = (window.location != window.parent.location) ? document.referrer : document.location.href;
            urlsvk = new RegExp(urlsvk);
            if (urlvk.match(urlsvk)) {
            }
            else  {

            var url = (window.location != window.parent.location) ? document.referrer : document.location.href;
            try {
                var urls = "(gamemonetize.com|y8.com";
                $.getJSON("https://api.gamemonetize.com/data.json", function (data) {
                    
                $.each(data, function(i, item) {
                      urls += "|" + item.domain;
                });
                urls += ")";
                urls = new RegExp(urls);
                    if (url.match(urls) || window.location.search.indexOf("y8") > -1) {
                    }
                    else  {
                         if (comAPI.ad.getShowable()) {
                                    var obj = {
                                        callback: function() {
                                        }
                                    };
                                    comAPI.ad.show(obj, true);
                                    window.sdk.onPauseGame("Pause game requested from debugger", "warning");

                                    try {
                                    var apnd5 = '<div id="gmLoading" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="https://gamemonetize.com/gamemonetize-logo.png" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
                                    $('#imaContainer').append(apnd5);
                                    } catch (e) { }
                        } else { }
                    }
            });
        } catch (e) {
            if (url.indexOf("gamemonetize.com") != -1 || url.indexOf("y8.com") != -1 || window.location.search.indexOf("y8") > -1) {
            }
            else  {
               if (comAPI.ad.getShowable()) {
                            var obj = {
                                callback: function() {
                                }
                            };
                            comAPI.ad.show(obj, true);
                            window.sdk.onPauseGame("Pause game requested from debugger", "warning");

                            try {
                            var apnd5 = '<div id="gmLoading" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="https://gamemonetize.com/gamemonetize-logo.png" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
                            $('#imaContainer').append(apnd5);
                            } catch (e) { }
                        } else {

                        }
            }
        }
        }
        }
        } catch (e) { }
    }

  function ShowAds2() 
        {
            try { if (window.location.href.indexOf("gmadstester") == -1) {

            var urlsvk = "(vkplay.ru|vkplay.com|dzen.ru)";
            var urlvk = (window.location != window.parent.location) ? document.referrer : document.location.href;
            urlsvk = new RegExp(urlsvk);
            if (urlvk.match(urlsvk)) {
            }
            else  {

           if (comAPI.ad.getShowable()) {
                            var obj = {
                                callback: function() {
                                }
                            };
                            comAPI.ad.show(obj, true);
                            window.sdk.onPauseGame("Pause game requested from debugger", "warning");
                            try {
                            var apnd5 = '<div id="gmLoading" style="position:absolute;bottom:0;left:0;right:0;z-index:999999;"><div style="border-top: 1px solid #000;min-height: 35px;background-color: #000000;position: relative;width: 100%;"><a style="margin-top: 3px;position: absolute;right: 5px;text-decoration: none;" target="_blank" href="https://gamemonetize.com/"><span style="font-size: 13px;font-family:Helvetica,Arial,sans-serif;font-weight: 100;color: #fff;padding-right: 8px;text-decoration: none;position: relative;top: 2px;" id="loading-text-gm">Powered by</span><img style="vertical-align: top;position: relative;width: 131px;" id="gmLogo" alt="GameMonetize.com" src="https://gamemonetize.com/gamemonetize-logo.png" border="0"></a><h1 style="display:none;text-indent: -9999px;">GameMonetize.com</h1></div></div>';
                            $('#imaContainer').append(apnd5);
                            } catch (e) { }

                        } else {

                        }
                        } 
                    }
                    } catch (e) { }
        }

tContainer = document.body || document.getElementsByTagName("body")[0];
var imaContainer = document.createElement("div"); 
imaContainer.id = "imaContainer", 
imaContainer.style.position = "absolute", 
imaContainer.style.zIndex = "10000", 
imaContainer.style.top = "0", 
imaContainer.style.left = "0", 
imaContainer.style.width = "100%", 
imaContainer.style.height = "100%",
imaContainer.style.backgroundColor = "rgba(0, 0, 0, 1)",
imaContainer.style.visibility = "hidden",
imaContainer.style.overflow = "hidden";

var imaVideo = document.createElement("video");
imaVideo.id = "imaVideo";
try {
tContainer.appendChild(this.imaContainer);
this.imaContainer.appendChild(imaVideo); 
} catch (e) {
}

function promoVideo() {
    $("<style type='text/css'>.promo-container{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;position:absolute;width:100%;height:100%;top:0;left:0}.promo-display-container{flex-grow:1;position:relative}.promo-controls-container{padding:4px 0;text-align:right;visibility:hidden}.promo-display-container>div{box-sizing:border-box;width:0;height:0;min-height:100%;min-width:100%;max-width:100%;max-height:100%;overflow:hidden;position:absolute}#promo-message{box-sizing:border-box;padding:4px 16px;margin:auto;color:#fff;color:rgba(255,255,255,.8);font-family:Helvetica,Arial,sans-serif;font-size:14px;cursor:pointer;min-width:150px;float:left;text-align:left;margin-bottom:8px;font-weight:400;display:none}#promo-button{box-sizing:border-box;padding:4px 16px;margin:auto;border:1px solid rgba(255,255,255,.5);color:#fff;color:rgba(255,255,255,.8);font-family:Helvetica,Arial,sans-serif;font-size:18px;cursor:pointer;min-width:150px;margin-bottom:8px;background:#000}#promo-button:hover{background:linear-gradient(#a711b0,#821088)}#promo-button:active{background:linear-gradient(#a711b0,#821088)}#promo-button:disabled,#promo-button[disabled]{background:#000}.banner{z-index:1020;height:100%;display:flex!important;align-items:center;justify-content:center} </style>").appendTo("head");
    var number = $.now();
    var apnd = '<div id="promo" style="display:none;z-index: 1030; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;"><div class="promo-container" style="background-color: black;"> <div class="promo-display-container"> <div id="preroll_banner_container"> <div id="preroll_banner" class="banner"> <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script><div id="preroll_banner_ad_' + number + '"> <script>window.googletag=window.googletag ||{cmd: []}; googletag.cmd.push(function(){googletag.defineSlot("/21739493398/AdExchange-300x250-9", [[300, 250], [300, 600], [250, 250], [200, 200]], "preroll_banner_ad_' + number + '").addService(googletag.pubads()); googletag.enableServices(); googletag.display("preroll_banner_ad_' + number + '");}); </script> </div></div></div></div><div class="promo-controls-container" style="visibility: visible;"> <button id="promo-button">You can skip this in <span id="preroll_time_5">5</span> secs</button> <span id="promo-message">Ad will be closed in <span id="preroll_full_time">31</span> secs</span> </div></div></div>';
    $('#imaContainer').append(apnd);
    $('#imaContainer').css("visibility", "visible");
    $('#promo').show();
    
    var intervaltimer = setInterval(function(){

        if( parseInt( $("#preroll_full_time").html() ) < 1 ) {
            $('#imaContainer').css("visibility", "hidden");
            $("#promo").remove();
            clearInterval( intervaltimer );
        }

        $("#preroll_full_time").html( parseInt( $("#preroll_full_time").html() ) - 1 );


        if( parseInt( $("#preroll_time_5").html() ) < 1 ){
            $("#promo-message").show();
            $("#promo-button").html('SKIP').on('click', function(){
                clearInterval( intervaltimer );
                $('#imaContainer').css("visibility", "hidden");
                $("#promo").remove();
            });

        } else {

            $("#preroll_time_5").html( parseInt( $("#preroll_time_5").html() ) - 1 );
        }
        
    }, 1000);
}

function MobileInGame() {
    $("<style type='text/css'>.promo-container-new{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;position:absolute;width:100%;height:100%;top:0;left:0}.promo-display-container-new{flex-grow:1;position:relative}.promo-controls-container-new{padding:4px 0;text-align:right;visibility:hidden}.promo-display-container-new>div{box-sizing:border-box;width:0;height:0;min-height:100%;min-width:100%;max-width:100%;max-height:100%;overflow:hidden;position:absolute}#promo-message-new{box-sizing:border-box;padding:4px 16px;margin:auto;color:#fff;color:rgba(255,255,255,.8);font-family:Helvetica,Arial,sans-serif;font-size:14px;cursor:pointer;min-width:150px;float:left;text-align:left;margin-bottom:8px;font-weight:400;display:none}#promo-button-new{box-sizing:border-box;padding:4px 16px;margin:auto;border:1px solid rgba(255,255,255,.5);color:#fff;color:rgba(255,255,255,.8);font-family:Helvetica,Arial,sans-serif;font-size:18px;cursor:pointer;min-width:150px;margin-bottom:8px;background:#000}#promo-button-new:hover{background:linear-gradient(#a711b0,#821088)}#promo-button-new:active{background:linear-gradient(#a711b0,#821088)}#promo-button-new:disabled,#promo-button-new[disabled]{background:#000}.banner-new{z-index:1020;height:100%;display:flex!important;align-items:center;justify-content:center} </style>").appendTo("head");
    var number = $.now();
    var apnd2 = '<div id="promo-new" style="display:none;z-index: 1030; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;"><div class="promo-container-new" style="background-color: black;"> <div class="promo-display-container-new"> <div id="preroll_banner_container_new"> <div id="preroll_banner_new" class="banner"> <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script><div id="preroll_banner_ad_' + number + '"> <script>window.googletag=window.googletag ||{cmd: []}; googletag.cmd.push(function(){googletag.defineSlot("/21739493398/AdExchange-300x250-GM", [[300, 600], [300, 250], [250, 250], [200, 200], [120, 600], [320, 480]], "preroll_banner_ad_' + number + '").addService(googletag.pubads()); googletag.enableServices(); googletag.display("preroll_banner_ad_' + number + '");}); </script> </div></div></div></div><div class="promo-controls-container-new" style="visibility: visible;"> <button id="promo-button-new">You can skip this in <span id="preroll_time_5_new">5</span> secs</button> <span id="promo-message-new">Ad will be closed in <span id="preroll_full_time_new">31</span> secs</span> </div></div></div>';
    $('#imaContainer_new').append(apnd2);
    $('#imaContainer_new').css("visibility", "visible");
    $('#promo-new').show();

    var intervaltimer = setInterval(function() {

        if (parseInt($("#preroll_full_time_new").html()) < 1) {
            $('#imaContainer_new').css("visibility", "hidden");
            $("#promo-new").remove();
            clearInterval(intervaltimer);
        }

        $("#preroll_full_time_new").html(parseInt($("#preroll_full_time_new").html()) - 1);


        if (parseInt($("#preroll_time_5_new").html()) < 1) {
            $("#promo-message-new").show();
            $("#promo-button-new").html('SKIP').on('click', function() {
                clearInterval(intervaltimer);
                $('#imaContainer_new').css("visibility", "hidden");
                $("#promo-new").remove();
            });

        } else {

            $("#preroll_time_5_new").html(parseInt($("#preroll_time_5_new").html()) - 1);
        }

    }, 1000);
}

tContainer2 = document.body || document.getElementsByTagName("body")[0];
var imaContainer_new = document.createElement("div");
imaContainer_new.id = "imaContainer_new",
    imaContainer_new.style.position = "absolute",
    imaContainer_new.style.zIndex = "10000",
    imaContainer_new.style.top = "0",
    imaContainer_new.style.left = "0",
    imaContainer_new.style.width = "100%",
    imaContainer_new.style.height = "100%",
    imaContainer_new.style.backgroundColor = "rgba(0, 0, 0, 1)",
    imaContainer_new.style.visibility = "hidden",
    imaContainer_new.style.overflow = "hidden";

var imaVideo2 = document.createElement("video2");
imaVideo2.id = "imaVideo2";
try {
    tContainer2.appendChild(this.imaContainer_new);
    this.imaContainer_new.appendChild(imaVideo2);
} catch (e) {}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

try { if (window.location.href.indexOf("gmadstester") == -1) {
if (isMobile.any()) {
    try {
         var urlsvk = "(vkplay.ru|vkplay.com|dzen.ru|gamemonetize.com|y8.com|html5.gamemonetize.com";
         $.getJSON("https://api.gamemonetize.com/datax.json", function (data) {
                                        
         $.each(data, function(i, item) {
             urlsvk += "|" + item.domain;
         });
         var url = (window.location != window.parent.location) ? document.referrer : document.location.href;
         urlsvk += ")";
         urlsvk = new RegExp(urlsvk);
        if (url.match(urlsvk) || window.location.search.indexOf("y8") > -1) {
        
        }
        else  {
            MobileInGame();
        }
        });
    } catch (e) {}
}
} } catch (e) { }

var storageSupported = false;
try {  storageSupported = (window.localStorage && true); } catch (e) {}
if (storageSupported) { }
else { promoVideo(); }