// ==UserScript==
// @name GitHub: add item to missue
// @namespace missue
// @match https://github.com/*/*/issues/*
// @match https://github.com/*/*/pull/*
// @grant GM_getValue
// ==/UserScript==
parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {}
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        g5IB: [
            function (require, module, exports) {
                var t,
                    e,
                    n = (module.exports = {});
                function r() {
                    throw new Error("setTimeout has not been defined");
                }
                function o() {
                    throw new Error("clearTimeout has not been defined");
                }
                function i(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === r || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
                    try {
                        return t(e, 0);
                    } catch (n) {
                        try {
                            return t.call(null, e, 0);
                        } catch (n) {
                            return t.call(this, e, 0);
                        }
                    }
                }
                function u(t) {
                    if (e === clearTimeout) return clearTimeout(t);
                    if ((e === o || !e) && clearTimeout) return (e = clearTimeout), clearTimeout(t);
                    try {
                        return e(t);
                    } catch (n) {
                        try {
                            return e.call(null, t);
                        } catch (n) {
                            return e.call(this, t);
                        }
                    }
                }
                !(function () {
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : r;
                    } catch (n) {
                        t = r;
                    }
                    try {
                        e = "function" == typeof clearTimeout ? clearTimeout : o;
                    } catch (n) {
                        e = o;
                    }
                })();
                var c,
                    s = [],
                    l = !1,
                    a = -1;
                function f() {
                    l && c && ((l = !1), c.length ? (s = c.concat(s)) : (a = -1), s.length && h());
                }
                function h() {
                    if (!l) {
                        var t = i(f);
                        l = !0;
                        for (var e = s.length; e; ) {
                            for (c = s, s = []; ++a < e; ) c && c[a].run();
                            (a = -1), (e = s.length);
                        }
                        (c = null), (l = !1), u(t);
                    }
                }
                function m(t, e) {
                    (this.fun = t), (this.array = e);
                }
                function p() {}
                (n.nextTick = function (t) {
                    var e = new Array(arguments.length - 1);
                    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    s.push(new m(t, e)), 1 !== s.length || l || i(h);
                }),
                    (m.prototype.run = function () {
                        this.fun.apply(null, this.array);
                    }),
                    (n.title = "browser"),
                    (n.env = {}),
                    (n.argv = []),
                    (n.version = ""),
                    (n.versions = {}),
                    (n.on = p),
                    (n.addListener = p),
                    (n.once = p),
                    (n.off = p),
                    (n.removeListener = p),
                    (n.removeAllListeners = p),
                    (n.emit = p),
                    (n.prependListener = p),
                    (n.prependOnceListener = p),
                    (n.listeners = function (t) {
                        return [];
                    }),
                    (n.binding = function (t) {
                        throw new Error("process.binding is not supported");
                    }),
                    (n.cwd = function () {
                        return "/";
                    }),
                    (n.chdir = function (t) {
                        throw new Error("process.chdir is not supported");
                    }),
                    (n.umask = function () {
                        return 0;
                    });
            },
            {}
        ],
        b17p: [
            function (require, module, exports) {
                var process = require("process");
                var e = require("process");
                function r() {
                    return "object" == typeof navigator && "userAgent" in navigator
                        ? navigator.userAgent
                        : "object" == typeof e && "version" in e
                        ? `Node.js/${e.version.substr(1)} (${e.platform}; ${e.arch})`
                        : "<environment undetectable>";
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.getUserAgent = r);
            },
            { process: "g5IB" }
        ],
        CCKp: [
            function (require, module, exports) {
                function r(e, n, o, t) {
                    if ("function" != typeof o) throw new Error("method for before hook must be a function");
                    return (
                        t || (t = {}),
                        Array.isArray(n)
                            ? n.reverse().reduce(function (n, o) {
                                  return r.bind(null, e, o, n, t);
                              }, o)()
                            : Promise.resolve().then(function () {
                                  return e.registry[n]
                                      ? e.registry[n].reduce(function (r, e) {
                                            return e.hook.bind(null, r, t);
                                        }, o)()
                                      : o(t);
                              })
                    );
                }
                module.exports = r;
            },
            {}
        ],
        uLWn: [
            function (require, module, exports) {
                function n(n, r, e, t) {
                    var o = t;
                    n.registry[e] || (n.registry[e] = []),
                        "before" === r &&
                            (t = function (n, r) {
                                return Promise.resolve().then(o.bind(null, r)).then(n.bind(null, r));
                            }),
                        "after" === r &&
                            (t = function (n, r) {
                                var e;
                                return Promise.resolve()
                                    .then(n.bind(null, r))
                                    .then(function (n) {
                                        return o((e = n), r);
                                    })
                                    .then(function () {
                                        return e;
                                    });
                            }),
                        "error" === r &&
                            (t = function (n, r) {
                                return Promise.resolve()
                                    .then(n.bind(null, r))
                                    .catch(function (n) {
                                        return o(n, r);
                                    });
                            }),
                        n.registry[e].push({ hook: t, orig: o });
                }
                module.exports = n;
            },
            {}
        ],
        ZpRs: [
            function (require, module, exports) {
                function r(r, i, e) {
                    if (r.registry[i]) {
                        var t = r.registry[i]
                            .map(function (r) {
                                return r.orig;
                            })
                            .indexOf(e);
                        -1 !== t && r.registry[i].splice(t, 1);
                    }
                }
                module.exports = r;
            },
            {}
        ],
        qNwR: [
            function (require, module, exports) {
                var r = require("./lib/register"),
                    e = require("./lib/add"),
                    o = require("./lib/remove"),
                    n = Function.bind,
                    i = n.bind(n);
                function l(r, n, l) {
                    var u = i(o, null).apply(null, l ? [n, l] : [n]);
                    (r.api = { remove: u }),
                        (r.remove = u),
                        ["before", "error", "after", "wrap"].forEach(function (o) {
                            var u = l ? [n, o, l] : [n, o];
                            r[o] = r.api[o] = i(e, null).apply(null, u);
                        });
                }
                function u() {
                    var e = { registry: {} },
                        o = r.bind(null, e, "h");
                    return l(o, e, "h"), o;
                }
                function t() {
                    var e = { registry: {} },
                        o = r.bind(null, e);
                    return l(o, e), o;
                }
                var a = !1;
                function p() {
                    return (
                        a ||
                            (console.warn(
                                '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
                            ),
                            (a = !0)),
                        t()
                    );
                }
                (p.Singular = u.bind()),
                    (p.Collection = t.bind()),
                    (module.exports = p),
                    (module.exports.Hook = p),
                    (module.exports.Singular = p.Singular),
                    (module.exports.Collection = p.Collection);
            },
            { "./lib/register": "CCKp", "./lib/add": "uLWn", "./lib/remove": "ZpRs" }
        ],
        dDsU: [
            function (require, module, exports) {
                "use strict";
                function t(t) {
                    return "[object Object]" === Object.prototype.toString.call(t);
                }
                function e(e) {
                    var o, r;
                    return (
                        !1 !== t(e) &&
                        (void 0 === (o = e.constructor) ||
                            (!1 !== t((r = o.prototype)) && !1 !== r.hasOwnProperty("isPrototypeOf")))
                    );
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.isPlainObject = e);
            },
            {}
        ],
        canr: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.endpoint = void 0);
                var e = require("is-plain-object"),
                    t = require("universal-user-agent");
                function n(e) {
                    return e ? Object.keys(e).reduce((t, n) => ((t[n.toLowerCase()] = e[n]), t), {}) : {};
                }
                function r(t, n) {
                    const i = Object.assign({}, t);
                    return (
                        Object.keys(n).forEach((o) => {
                            (0, e.isPlainObject)(n[o]) && o in t
                                ? (i[o] = r(t[o], n[o]))
                                : Object.assign(i, { [o]: n[o] });
                        }),
                        i
                    );
                }
                function i(e) {
                    for (const t in e) void 0 === e[t] && delete e[t];
                    return e;
                }
                function o(e, t, o) {
                    if ("string" == typeof t) {
                        let [e, n] = t.split(" ");
                        o = Object.assign(n ? { method: e, url: n } : { url: e }, o);
                    } else o = Object.assign({}, t);
                    (o.headers = n(o.headers)), i(o), i(o.headers);
                    const s = r(e || {}, o);
                    return (
                        e &&
                            e.mediaType.previews.length &&
                            (s.mediaType.previews = e.mediaType.previews
                                .filter((e) => !s.mediaType.previews.includes(e))
                                .concat(s.mediaType.previews)),
                        (s.mediaType.previews = s.mediaType.previews.map((e) => e.replace(/-preview/, ""))),
                        s
                    );
                }
                function s(e, t) {
                    const n = /\?/.test(e) ? "&" : "?",
                        r = Object.keys(t);
                    return 0 === r.length
                        ? e
                        : e +
                              n +
                              r
                                  .map((e) =>
                                      "q" === e
                                          ? "q=" + t.q.split("+").map(encodeURIComponent).join("+")
                                          : `${e}=${encodeURIComponent(t[e])}`
                                  )
                                  .join("&");
                }
                const c = /\{[^}]+\}/g;
                function a(e) {
                    return e.replace(/^\W+|\W+$/g, "").split(/,/);
                }
                function p(e) {
                    const t = e.match(c);
                    return t ? t.map(a).reduce((e, t) => e.concat(t), []) : [];
                }
                function u(e, t) {
                    return Object.keys(e)
                        .filter((e) => !t.includes(e))
                        .reduce((t, n) => ((t[n] = e[n]), t), {});
                }
                function l(e) {
                    return e
                        .split(/(%[0-9A-Fa-f]{2})/g)
                        .map(function (e) {
                            return (
                                /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")),
                                e
                            );
                        })
                        .join("");
                }
                function d(e) {
                    return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                    });
                }
                function f(e, t, n) {
                    return (t = "+" === e || "#" === e ? l(t) : d(t)), n ? d(n) + "=" + t : t;
                }
                function h(e) {
                    return null != e;
                }
                function m(e) {
                    return ";" === e || "&" === e || "?" === e;
                }
                function g(e, t, n, r) {
                    var i = e[n],
                        o = [];
                    if (h(i) && "" !== i)
                        if ("string" == typeof i || "number" == typeof i || "boolean" == typeof i)
                            (i = i.toString()),
                                r && "*" !== r && (i = i.substring(0, parseInt(r, 10))),
                                o.push(f(t, i, m(t) ? n : ""));
                        else if ("*" === r)
                            Array.isArray(i)
                                ? i.filter(h).forEach(function (e) {
                                      o.push(f(t, e, m(t) ? n : ""));
                                  })
                                : Object.keys(i).forEach(function (e) {
                                      h(i[e]) && o.push(f(t, i[e], e));
                                  });
                        else {
                            const e = [];
                            Array.isArray(i)
                                ? i.filter(h).forEach(function (n) {
                                      e.push(f(t, n));
                                  })
                                : Object.keys(i).forEach(function (n) {
                                      h(i[n]) && (e.push(d(n)), e.push(f(t, i[n].toString())));
                                  }),
                                m(t) ? o.push(d(n) + "=" + e.join(",")) : 0 !== e.length && o.push(e.join(","));
                        }
                    else
                        ";" === t
                            ? h(i) && o.push(d(n))
                            : "" !== i || ("&" !== t && "?" !== t)
                            ? "" === i && o.push("")
                            : o.push(d(n) + "=");
                    return o;
                }
                function y(e) {
                    return { expand: b.bind(null, e) };
                }
                function b(e, t) {
                    var n = ["+", "#", ".", "/", ";", "?", "&"];
                    return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (e, r, i) {
                        if (r) {
                            let e = "";
                            const i = [];
                            if (
                                (-1 !== n.indexOf(r.charAt(0)) && ((e = r.charAt(0)), (r = r.substr(1))),
                                r.split(/,/g).forEach(function (n) {
                                    var r = /([^:\*]*)(?::(\d+)|(\*))?/.exec(n);
                                    i.push(g(t, e, r[1], r[2] || r[3]));
                                }),
                                e && "+" !== e)
                            ) {
                                var o = ",";
                                return (
                                    "?" === e ? (o = "&") : "#" !== e && (o = e), (0 !== i.length ? e : "") + i.join(o)
                                );
                            }
                            return i.join(",");
                        }
                        return l(i);
                    });
                }
                function j(e) {
                    let t,
                        n = e.method.toUpperCase(),
                        r = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"),
                        i = Object.assign({}, e.headers),
                        o = u(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]);
                    const c = p(r);
                    (r = y(r).expand(o)), /^http/.test(r) || (r = e.baseUrl + r);
                    const a = u(
                        o,
                        Object.keys(e)
                            .filter((e) => c.includes(e))
                            .concat("baseUrl")
                    );
                    if (
                        !/application\/octet-stream/i.test(i.accept) &&
                        (e.mediaType.format &&
                            (i.accept = i.accept
                                .split(/,/)
                                .map((t) =>
                                    t.replace(
                                        /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                                        `application/vnd$1$2.${e.mediaType.format}`
                                    )
                                )
                                .join(",")),
                        e.mediaType.previews.length)
                    ) {
                        const t = i.accept.match(/[\w-]+(?=-preview)/g) || [];
                        i.accept = t
                            .concat(e.mediaType.previews)
                            .map((t) => {
                                return `application/vnd.github.${t}-preview${
                                    e.mediaType.format ? `.${e.mediaType.format}` : "+json"
                                }`;
                            })
                            .join(",");
                    }
                    return (
                        ["GET", "HEAD"].includes(n)
                            ? (r = s(r, a))
                            : "data" in a
                            ? (t = a.data)
                            : Object.keys(a).length
                            ? (t = a)
                            : (i["content-length"] = 0),
                        i["content-type"] || void 0 === t || (i["content-type"] = "application/json; charset=utf-8"),
                        ["PATCH", "PUT"].includes(n) && void 0 === t && (t = ""),
                        Object.assign(
                            { method: n, url: r, headers: i },
                            void 0 !== t ? { body: t } : null,
                            e.request ? { request: e.request } : null
                        )
                    );
                }
                function v(e, t, n) {
                    return j(o(e, t, n));
                }
                function T(e, t) {
                    const n = o(e, t),
                        r = v.bind(null, n);
                    return Object.assign(r, {
                        DEFAULTS: n,
                        defaults: T.bind(null, n),
                        merge: o.bind(null, n),
                        parse: j
                    });
                }
                const w = "6.0.10",
                    O = `octokit-endpoint.js/6.0.10 ${(0, t.getUserAgent)()}`,
                    A = {
                        method: "GET",
                        baseUrl: "https://api.github.com",
                        headers: { accept: "application/vnd.github.v3+json", "user-agent": O },
                        mediaType: { format: "", previews: [] }
                    },
                    U = T(null, A);
                exports.endpoint = U;
            },
            { "is-plain-object": "dDsU", "universal-user-agent": "b17p" }
        ],
        z2hx: [
            function (require, module, exports) {
                "use strict";
                var e = function () {
                        if ("undefined" != typeof self) return self;
                        if ("undefined" != typeof window) return window;
                        if (void 0 !== t) return t;
                        throw new Error("unable to locate global object");
                    },
                    t = e();
                (module.exports = exports = t.fetch),
                    t.fetch && (exports.default = t.fetch.bind(t)),
                    (exports.Headers = t.Headers),
                    (exports.Request = t.Request),
                    (exports.Response = t.Response);
            },
            {}
        ],
        IlKR: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.Deprecation = void 0);
                class r extends Error {
                    constructor(r) {
                        super(r),
                            Error.captureStackTrace && Error.captureStackTrace(this, this.constructor),
                            (this.name = "Deprecation");
                    }
                }
                exports.Deprecation = r;
            },
            {}
        ],
        lhXj: [
            function (require, module, exports) {
                function n(e, r) {
                    if (e && r) return n(e)(r);
                    if ("function" != typeof e) throw new TypeError("need wrapper function");
                    return (
                        Object.keys(e).forEach(function (n) {
                            t[n] = e[n];
                        }),
                        t
                    );
                    function t() {
                        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                        var t = e.apply(this, n),
                            o = n[n.length - 1];
                        return (
                            "function" == typeof t &&
                                t !== o &&
                                Object.keys(o).forEach(function (n) {
                                    t[n] = o[n];
                                }),
                            t
                        );
                    }
                }
                module.exports = n;
            },
            {}
        ],
        Z8tK: [
            function (require, module, exports) {
                var e = require("wrappy");
                function r(e) {
                    var r = function () {
                        return r.called ? r.value : ((r.called = !0), (r.value = e.apply(this, arguments)));
                    };
                    return (r.called = !1), r;
                }
                function n(e) {
                    var r = function () {
                            if (r.called) throw new Error(r.onceError);
                            return (r.called = !0), (r.value = e.apply(this, arguments));
                        },
                        n = e.name || "Function wrapped with `once`";
                    return (r.onceError = n + " shouldn't be called more than once"), (r.called = !1), r;
                }
                (module.exports = e(r)),
                    (module.exports.strict = e(n)),
                    (r.proto = r(function () {
                        Object.defineProperty(Function.prototype, "once", {
                            value: function () {
                                return r(this);
                            },
                            configurable: !0
                        }),
                            Object.defineProperty(Function.prototype, "onceStrict", {
                                value: function () {
                                    return n(this);
                                },
                                configurable: !0
                            });
                    }));
            },
            { wrappy: "lhXj" }
        ],
        mGTl: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.RequestError = void 0);
                var e = require("deprecation"),
                    r = t(require("once"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                const s = (0, r.default)((e) => console.warn(e));
                class o extends Error {
                    constructor(r, t, o) {
                        super(r),
                            Error.captureStackTrace && Error.captureStackTrace(this, this.constructor),
                            (this.name = "HttpError"),
                            (this.status = t),
                            Object.defineProperty(this, "code", {
                                get: () => (
                                    s(
                                        new e.Deprecation(
                                            "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
                                        )
                                    ),
                                    t
                                )
                            }),
                            (this.headers = o.headers || {});
                        const c = Object.assign({}, o.request);
                        o.request.headers.authorization &&
                            (c.headers = Object.assign({}, o.request.headers, {
                                authorization: o.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
                            })),
                            (c.url = c.url
                                .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
                                .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]")),
                            (this.request = c);
                    }
                }
                exports.RequestError = o;
            },
            { deprecation: "IlKR", once: "Z8tK" }
        ],
        xaJC: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.request = void 0);
                var e = require("@octokit/endpoint"),
                    t = require("universal-user-agent"),
                    r = require("is-plain-object"),
                    s = o(require("node-fetch")),
                    n = require("@octokit/request-error");
                function o(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                const u = "5.4.12";
                function i(e) {
                    return e.arrayBuffer();
                }
                function a(e) {
                    ((0, r.isPlainObject)(e.body) || Array.isArray(e.body)) && (e.body = JSON.stringify(e.body));
                    let t,
                        o,
                        u = {};
                    return ((e.request && e.request.fetch) || s.default)(
                        e.url,
                        Object.assign(
                            { method: e.method, body: e.body, headers: e.headers, redirect: e.redirect },
                            e.request
                        )
                    )
                        .then((r) => {
                            (o = r.url), (t = r.status);
                            for (const e of r.headers) u[e[0]] = e[1];
                            if (204 === t || 205 === t) return;
                            if ("HEAD" === e.method) {
                                if (t < 400) return;
                                throw new n.RequestError(r.statusText, t, { headers: u, request: e });
                            }
                            if (304 === t) throw new n.RequestError("Not modified", t, { headers: u, request: e });
                            if (t >= 400)
                                return r.text().then((r) => {
                                    const s = new n.RequestError(r, t, { headers: u, request: e });
                                    try {
                                        let e = JSON.parse(s.message);
                                        Object.assign(s, e);
                                        let t = e.errors;
                                        s.message = s.message + ": " + t.map(JSON.stringify).join(", ");
                                    } catch (o) {}
                                    throw s;
                                });
                            const s = r.headers.get("content-type");
                            return /application\/json/.test(s)
                                ? r.json()
                                : !s || /^text\/|charset=utf-8$/.test(s)
                                ? r.text()
                                : i(r);
                        })
                        .then((e) => ({ status: t, url: o, headers: u, data: e }))
                        .catch((t) => {
                            if (t instanceof n.RequestError) throw t;
                            throw new n.RequestError(t.message, 500, { headers: u, request: e });
                        });
                }
                function d(e, t) {
                    const r = e.defaults(t);
                    return Object.assign(
                        function (e, t) {
                            const s = r.merge(e, t);
                            if (!s.request || !s.request.hook) return a(r.parse(s));
                            const n = (e, t) => a(r.parse(r.merge(e, t)));
                            return Object.assign(n, { endpoint: r, defaults: d.bind(null, r) }), s.request.hook(n, s);
                        },
                        { endpoint: r, defaults: d.bind(null, r) }
                    );
                }
                const c = d(e.endpoint, {
                    headers: { "user-agent": `octokit-request.js/5.4.12 ${(0, t.getUserAgent)()}` }
                });
                exports.request = c;
            },
            {
                "@octokit/endpoint": "canr",
                "universal-user-agent": "b17p",
                "is-plain-object": "dDsU",
                "node-fetch": "z2hx",
                "@octokit/request-error": "mGTl"
            }
        ],
        c9l2: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.withCustomRequest = c),
                    (exports.graphql = void 0);
                var e = require("@octokit/request"),
                    r = require("universal-user-agent");
                const t = "4.5.8";
                class s extends Error {
                    constructor(e, r) {
                        super(r.data.errors[0].message),
                            Object.assign(this, r.data),
                            Object.assign(this, { headers: r.headers }),
                            (this.name = "GraphqlError"),
                            (this.request = e),
                            Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
                    }
                }
                const a = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"],
                    n = /\/api\/v3\/?$/;
                function o(e, r, t) {
                    if ("string" == typeof r && t && "query" in t)
                        return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));
                    const o = "string" == typeof r ? Object.assign({ query: r }, t) : r,
                        u = Object.keys(o).reduce(
                            (e, r) =>
                                a.includes(r)
                                    ? ((e[r] = o[r]), e)
                                    : (e.variables || (e.variables = {}), (e.variables[r] = o[r]), e),
                            {}
                        ),
                        i = o.baseUrl || e.endpoint.DEFAULTS.baseUrl;
                    return (
                        n.test(i) && (u.url = i.replace(n, "/api/graphql")),
                        e(u).then((e) => {
                            if (e.data.errors) {
                                const r = {};
                                for (const t of Object.keys(e.headers)) r[t] = e.headers[t];
                                throw new s(u, { headers: r, data: e.data });
                            }
                            return e.data.data;
                        })
                    );
                }
                function u(r, t) {
                    const s = r.defaults(t);
                    return Object.assign((e, r) => o(s, e, r), {
                        defaults: u.bind(null, s),
                        endpoint: e.request.endpoint
                    });
                }
                const i = u(e.request, {
                    headers: { "user-agent": `octokit-graphql.js/4.5.8 ${(0, r.getUserAgent)()}` },
                    method: "POST",
                    url: "/graphql"
                });
                function c(e) {
                    return u(e, { method: "POST", url: "/graphql" });
                }
                exports.graphql = i;
            },
            { "@octokit/request": "xaJC", "universal-user-agent": "b17p" }
        ],
        DHQV: [
            function (require, module, exports) {
                "use strict";
                async function t(t) {
                    const e = 3 === t.split(/\./).length ? "app" : /^v\d+\./.test(t) ? "installation" : "oauth";
                    return { type: "token", token: t, tokenType: e };
                }
                function e(t) {
                    return 3 === t.split(/\./).length ? `bearer ${t}` : `token ${t}`;
                }
                async function n(t, n, o, r) {
                    const i = n.endpoint.merge(o, r);
                    return (i.headers.authorization = e(t)), n(i);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.createTokenAuth = void 0);
                const o = function (e) {
                    if (!e) throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
                    if ("string" != typeof e)
                        throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
                    return (
                        (e = e.replace(/^(token|bearer) +/i, "")),
                        Object.assign(t.bind(null, e), { hook: n.bind(null, e) })
                    );
                };
                exports.createTokenAuth = o;
            },
            {}
        ],
        NGhq: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.Octokit = void 0);
                var e = require("universal-user-agent"),
                    t = require("before-after-hook"),
                    s = require("@octokit/request"),
                    r = require("@octokit/graphql"),
                    o = require("@octokit/auth-token");
                const i = "3.2.4";
                class n {
                    constructor(n = {}) {
                        const u = new t.Collection(),
                            a = {
                                baseUrl: s.request.endpoint.DEFAULTS.baseUrl,
                                headers: {},
                                request: Object.assign({}, n.request, { hook: u.bind(null, "request") }),
                                mediaType: { previews: [], format: "" }
                            };
                        if (
                            ((a.headers["user-agent"] = [n.userAgent, `octokit-core.js/${i} ${(0, e.getUserAgent)()}`]
                                .filter(Boolean)
                                .join(" ")),
                            n.baseUrl && (a.baseUrl = n.baseUrl),
                            n.previews && (a.mediaType.previews = n.previews),
                            n.timeZone && (a.headers["time-zone"] = n.timeZone),
                            (this.request = s.request.defaults(a)),
                            (this.graphql = (0, r.withCustomRequest)(this.request).defaults(a)),
                            (this.log = Object.assign(
                                {
                                    debug: () => {},
                                    info: () => {},
                                    warn: console.warn.bind(console),
                                    error: console.error.bind(console)
                                },
                                n.log
                            )),
                            (this.hook = u),
                            n.authStrategy)
                        ) {
                            const { authStrategy: e, ...t } = n,
                                s = e(
                                    Object.assign(
                                        { request: this.request, log: this.log, octokit: this, octokitOptions: t },
                                        n.auth
                                    )
                                );
                            u.wrap("request", s.hook), (this.auth = s);
                        } else if (n.auth) {
                            const e = (0, o.createTokenAuth)(n.auth);
                            u.wrap("request", e.hook), (this.auth = e);
                        } else this.auth = async () => ({ type: "unauthenticated" });
                        this.constructor.plugins.forEach((e) => {
                            Object.assign(this, e(this, n));
                        });
                    }
                    static defaults(e) {
                        return class extends this {
                            constructor(...t) {
                                const s = t[0] || {};
                                super(
                                    "function" != typeof e
                                        ? Object.assign(
                                              {},
                                              e,
                                              s,
                                              s.userAgent && e.userAgent
                                                  ? { userAgent: `${s.userAgent} ${e.userAgent}` }
                                                  : null
                                          )
                                        : e(s)
                                );
                            }
                        };
                    }
                    static plugin(...e) {
                        var t;
                        const s = this.plugins;
                        return ((t = class extends this {}).plugins = s.concat(e.filter((e) => !s.includes(e)))), t;
                    }
                }
                (exports.Octokit = n), (n.VERSION = i), (n.plugins = []);
            },
            {
                "universal-user-agent": "b17p",
                "before-after-hook": "qNwR",
                "@octokit/request": "xaJC",
                "@octokit/graphql": "c9l2",
                "@octokit/auth-token": "DHQV"
            }
        ],
        ohOl: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.requestLog = t);
                const e = "1.0.2";
                function t(e) {
                    e.hook.wrap("request", (t, o) => {
                        e.log.debug("request", o);
                        const s = Date.now(),
                            r = e.request.endpoint.parse(o),
                            n = r.url.replace(o.baseUrl, "");
                        return t(o)
                            .then((t) => (e.log.info(`${r.method} ${n} - ${t.status} in ${Date.now() - s}ms`), t))
                            .catch((t) => {
                                throw (e.log.info(`${r.method} ${n} - ${t.status} in ${Date.now() - s}ms`), t);
                            });
                    });
                }
                t.VERSION = "1.0.2";
            },
            {}
        ],
        sTyu: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.paginateRest = s),
                    (exports.composePaginateRest = void 0);
                const t = "2.6.2";
                function e(t) {
                    if (!("total_count" in t.data && !("url" in t.data))) return t;
                    const e = t.data.incomplete_results,
                        n = t.data.repository_selection,
                        o = t.data.total_count;
                    delete t.data.incomplete_results, delete t.data.repository_selection, delete t.data.total_count;
                    const a = Object.keys(t.data)[0],
                        r = t.data[a];
                    return (
                        (t.data = r),
                        void 0 !== e && (t.data.incomplete_results = e),
                        void 0 !== n && (t.data.repository_selection = n),
                        (t.data.total_count = o),
                        t
                    );
                }
                function n(t, n, o) {
                    const a = "function" == typeof n ? n.endpoint(o) : t.request.endpoint(n, o),
                        r = "function" == typeof n ? n : t.request,
                        s = a.method,
                        i = a.headers;
                    let u = a.url;
                    return {
                        [Symbol.asyncIterator]: () => ({
                            async next() {
                                if (!u) return { done: !0 };
                                const t = e(await r({ method: s, url: u, headers: i }));
                                return (
                                    (u = ((t.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1]),
                                    { value: t }
                                );
                            }
                        })
                    };
                }
                function o(t, e, o, r) {
                    return (
                        "function" == typeof o && ((r = o), (o = void 0)),
                        a(t, [], n(t, e, o)[Symbol.asyncIterator](), r)
                    );
                }
                function a(t, e, n, o) {
                    return n.next().then((r) => {
                        if (r.done) return e;
                        let s = !1;
                        return (
                            (e = e.concat(
                                o
                                    ? o(r.value, function () {
                                          s = !0;
                                      })
                                    : r.value.data
                            )),
                            s ? e : a(t, e, n, o)
                        );
                    });
                }
                const r = Object.assign(o, { iterator: n });
                function s(t) {
                    return { paginate: Object.assign(o.bind(null, t), { iterator: n.bind(null, t) }) };
                }
                (exports.composePaginateRest = r), (s.VERSION = "2.6.2");
            },
            {}
        ],
        TMrI: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.restEndpointMethods = t);
                const e = {
                        actions: {
                            addSelectedRepoToOrgSecret: [
                                "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
                            ],
                            cancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"],
                            createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
                            createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
                            createRegistrationTokenForOrg: ["POST /orgs/{org}/actions/runners/registration-token"],
                            createRegistrationTokenForRepo: [
                                "POST /repos/{owner}/{repo}/actions/runners/registration-token"
                            ],
                            createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
                            createRemoveTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/remove-token"],
                            createWorkflowDispatch: [
                                "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"
                            ],
                            deleteArtifact: ["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
                            deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
                            deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
                            deleteSelfHostedRunnerFromOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}"],
                            deleteSelfHostedRunnerFromRepo: [
                                "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"
                            ],
                            deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
                            deleteWorkflowRunLogs: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],
                            disableSelectedRepositoryGithubActionsOrganization: [
                                "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"
                            ],
                            disableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"],
                            downloadArtifact: [
                                "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"
                            ],
                            downloadJobLogsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"],
                            downloadWorkflowRunLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],
                            enableSelectedRepositoryGithubActionsOrganization: [
                                "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"
                            ],
                            enableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"],
                            getAllowedActionsOrganization: ["GET /orgs/{org}/actions/permissions/selected-actions"],
                            getAllowedActionsRepository: [
                                "GET /repos/{owner}/{repo}/actions/permissions/selected-actions"
                            ],
                            getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
                            getGithubActionsPermissionsOrganization: ["GET /orgs/{org}/actions/permissions"],
                            getGithubActionsPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions"],
                            getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
                            getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
                            getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
                            getRepoPermissions: [
                                "GET /repos/{owner}/{repo}/actions/permissions",
                                {},
                                { renamed: ["actions", "getGithubActionsPermissionsRepository"] }
                            ],
                            getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
                            getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
                            getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
                            getSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"],
                            getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
                            getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
                            getWorkflowRunUsage: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"],
                            getWorkflowUsage: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"],
                            listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
                            listJobsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"],
                            listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
                            listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
                            listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
                            listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
                            listRunnerApplicationsForRepo: ["GET /repos/{owner}/{repo}/actions/runners/downloads"],
                            listSelectedReposForOrgSecret: [
                                "GET /orgs/{org}/actions/secrets/{secret_name}/repositories"
                            ],
                            listSelectedRepositoriesEnabledGithubActionsOrganization: [
                                "GET /orgs/{org}/actions/permissions/repositories"
                            ],
                            listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
                            listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
                            listWorkflowRunArtifacts: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"],
                            listWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"],
                            listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
                            reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
                            removeSelectedRepoFromOrgSecret: [
                                "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
                            ],
                            setAllowedActionsOrganization: ["PUT /orgs/{org}/actions/permissions/selected-actions"],
                            setAllowedActionsRepository: [
                                "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"
                            ],
                            setGithubActionsPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions"],
                            setGithubActionsPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions"],
                            setSelectedReposForOrgSecret: [
                                "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"
                            ],
                            setSelectedRepositoriesEnabledGithubActionsOrganization: [
                                "PUT /orgs/{org}/actions/permissions/repositories"
                            ]
                        },
                        activity: {
                            checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
                            deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
                            deleteThreadSubscription: ["DELETE /notifications/threads/{thread_id}/subscription"],
                            getFeeds: ["GET /feeds"],
                            getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
                            getThread: ["GET /notifications/threads/{thread_id}"],
                            getThreadSubscriptionForAuthenticatedUser: [
                                "GET /notifications/threads/{thread_id}/subscription"
                            ],
                            listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
                            listNotificationsForAuthenticatedUser: ["GET /notifications"],
                            listOrgEventsForAuthenticatedUser: ["GET /users/{username}/events/orgs/{org}"],
                            listPublicEvents: ["GET /events"],
                            listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
                            listPublicEventsForUser: ["GET /users/{username}/events/public"],
                            listPublicOrgEvents: ["GET /orgs/{org}/events"],
                            listReceivedEventsForUser: ["GET /users/{username}/received_events"],
                            listReceivedPublicEventsForUser: ["GET /users/{username}/received_events/public"],
                            listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
                            listRepoNotificationsForAuthenticatedUser: ["GET /repos/{owner}/{repo}/notifications"],
                            listReposStarredByAuthenticatedUser: ["GET /user/starred"],
                            listReposStarredByUser: ["GET /users/{username}/starred"],
                            listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
                            listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
                            listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
                            listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
                            markNotificationsAsRead: ["PUT /notifications"],
                            markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
                            markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
                            setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
                            setThreadSubscription: ["PUT /notifications/threads/{thread_id}/subscription"],
                            starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
                            unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
                        },
                        apps: {
                            addRepoToInstallation: [
                                "PUT /user/installations/{installation_id}/repositories/{repository_id}"
                            ],
                            checkToken: ["POST /applications/{client_id}/token"],
                            createContentAttachment: [
                                "POST /content_references/{content_reference_id}/attachments",
                                { mediaType: { previews: ["corsair"] } }
                            ],
                            createFromManifest: ["POST /app-manifests/{code}/conversions"],
                            createInstallationAccessToken: ["POST /app/installations/{installation_id}/access_tokens"],
                            deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
                            deleteInstallation: ["DELETE /app/installations/{installation_id}"],
                            deleteToken: ["DELETE /applications/{client_id}/token"],
                            getAuthenticated: ["GET /app"],
                            getBySlug: ["GET /apps/{app_slug}"],
                            getInstallation: ["GET /app/installations/{installation_id}"],
                            getOrgInstallation: ["GET /orgs/{org}/installation"],
                            getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
                            getSubscriptionPlanForAccount: ["GET /marketplace_listing/accounts/{account_id}"],
                            getSubscriptionPlanForAccountStubbed: [
                                "GET /marketplace_listing/stubbed/accounts/{account_id}"
                            ],
                            getUserInstallation: ["GET /users/{username}/installation"],
                            getWebhookConfigForApp: ["GET /app/hook/config"],
                            listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
                            listAccountsForPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"],
                            listInstallationReposForAuthenticatedUser: [
                                "GET /user/installations/{installation_id}/repositories"
                            ],
                            listInstallations: ["GET /app/installations"],
                            listInstallationsForAuthenticatedUser: ["GET /user/installations"],
                            listPlans: ["GET /marketplace_listing/plans"],
                            listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
                            listReposAccessibleToInstallation: ["GET /installation/repositories"],
                            listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
                            listSubscriptionsForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed"],
                            removeRepoFromInstallation: [
                                "DELETE /user/installations/{installation_id}/repositories/{repository_id}"
                            ],
                            resetToken: ["PATCH /applications/{client_id}/token"],
                            revokeInstallationAccessToken: ["DELETE /installation/token"],
                            suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
                            unsuspendInstallation: ["DELETE /app/installations/{installation_id}/suspended"],
                            updateWebhookConfigForApp: ["PATCH /app/hook/config"]
                        },
                        billing: {
                            getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
                            getGithubActionsBillingUser: ["GET /users/{username}/settings/billing/actions"],
                            getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
                            getGithubPackagesBillingUser: ["GET /users/{username}/settings/billing/packages"],
                            getSharedStorageBillingOrg: ["GET /orgs/{org}/settings/billing/shared-storage"],
                            getSharedStorageBillingUser: ["GET /users/{username}/settings/billing/shared-storage"]
                        },
                        checks: {
                            create: ["POST /repos/{owner}/{repo}/check-runs"],
                            createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
                            get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
                            getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
                            listAnnotations: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"],
                            listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
                            listForSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"],
                            listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
                            rerequestSuite: ["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"],
                            setSuitesPreferences: ["PATCH /repos/{owner}/{repo}/check-suites/preferences"],
                            update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]
                        },
                        codeScanning: {
                            getAlert: [
                                "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
                                {},
                                { renamedParameters: { alert_id: "alert_number" } }
                            ],
                            listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
                            listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
                            updateAlert: ["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"],
                            uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"]
                        },
                        codesOfConduct: {
                            getAllCodesOfConduct: [
                                "GET /codes_of_conduct",
                                { mediaType: { previews: ["scarlet-witch"] } }
                            ],
                            getConductCode: [
                                "GET /codes_of_conduct/{key}",
                                { mediaType: { previews: ["scarlet-witch"] } }
                            ],
                            getForRepo: [
                                "GET /repos/{owner}/{repo}/community/code_of_conduct",
                                { mediaType: { previews: ["scarlet-witch"] } }
                            ]
                        },
                        emojis: { get: ["GET /emojis"] },
                        enterpriseAdmin: {
                            disableSelectedOrganizationGithubActionsEnterprise: [
                                "DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"
                            ],
                            enableSelectedOrganizationGithubActionsEnterprise: [
                                "PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"
                            ],
                            getAllowedActionsEnterprise: [
                                "GET /enterprises/{enterprise}/actions/permissions/selected-actions"
                            ],
                            getGithubActionsPermissionsEnterprise: [
                                "GET /enterprises/{enterprise}/actions/permissions"
                            ],
                            listSelectedOrganizationsEnabledGithubActionsEnterprise: [
                                "GET /enterprises/{enterprise}/actions/permissions/organizations"
                            ],
                            setAllowedActionsEnterprise: [
                                "PUT /enterprises/{enterprise}/actions/permissions/selected-actions"
                            ],
                            setGithubActionsPermissionsEnterprise: [
                                "PUT /enterprises/{enterprise}/actions/permissions"
                            ],
                            setSelectedOrganizationsEnabledGithubActionsEnterprise: [
                                "PUT /enterprises/{enterprise}/actions/permissions/organizations"
                            ]
                        },
                        gists: {
                            checkIsStarred: ["GET /gists/{gist_id}/star"],
                            create: ["POST /gists"],
                            createComment: ["POST /gists/{gist_id}/comments"],
                            delete: ["DELETE /gists/{gist_id}"],
                            deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
                            fork: ["POST /gists/{gist_id}/forks"],
                            get: ["GET /gists/{gist_id}"],
                            getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
                            getRevision: ["GET /gists/{gist_id}/{sha}"],
                            list: ["GET /gists"],
                            listComments: ["GET /gists/{gist_id}/comments"],
                            listCommits: ["GET /gists/{gist_id}/commits"],
                            listForUser: ["GET /users/{username}/gists"],
                            listForks: ["GET /gists/{gist_id}/forks"],
                            listPublic: ["GET /gists/public"],
                            listStarred: ["GET /gists/starred"],
                            star: ["PUT /gists/{gist_id}/star"],
                            unstar: ["DELETE /gists/{gist_id}/star"],
                            update: ["PATCH /gists/{gist_id}"],
                            updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
                        },
                        git: {
                            createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
                            createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
                            createRef: ["POST /repos/{owner}/{repo}/git/refs"],
                            createTag: ["POST /repos/{owner}/{repo}/git/tags"],
                            createTree: ["POST /repos/{owner}/{repo}/git/trees"],
                            deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
                            getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
                            getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
                            getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
                            getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
                            getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
                            listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
                            updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
                        },
                        gitignore: {
                            getAllTemplates: ["GET /gitignore/templates"],
                            getTemplate: ["GET /gitignore/templates/{name}"]
                        },
                        interactions: {
                            getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
                            getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
                            getRestrictionsForYourPublicRepos: ["GET /user/interaction-limits"],
                            removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
                            removeRestrictionsForRepo: ["DELETE /repos/{owner}/{repo}/interaction-limits"],
                            removeRestrictionsForYourPublicRepos: ["DELETE /user/interaction-limits"],
                            setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
                            setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
                            setRestrictionsForYourPublicRepos: ["PUT /user/interaction-limits"]
                        },
                        issues: {
                            addAssignees: ["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
                            addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                            checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
                            create: ["POST /repos/{owner}/{repo}/issues"],
                            createComment: ["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"],
                            createLabel: ["POST /repos/{owner}/{repo}/labels"],
                            createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
                            deleteComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"],
                            deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
                            deleteMilestone: ["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"],
                            get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
                            getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
                            getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
                            getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
                            getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
                            list: ["GET /issues"],
                            listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
                            listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
                            listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
                            listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
                            listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
                            listEventsForTimeline: [
                                "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
                                { mediaType: { previews: ["mockingbird"] } }
                            ],
                            listForAuthenticatedUser: ["GET /user/issues"],
                            listForOrg: ["GET /orgs/{org}/issues"],
                            listForRepo: ["GET /repos/{owner}/{repo}/issues"],
                            listLabelsForMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"],
                            listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
                            listLabelsOnIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                            listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
                            lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
                            removeAllLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                            removeAssignees: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
                            removeLabel: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"],
                            setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                            unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
                            update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
                            updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
                            updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
                            updateMilestone: ["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]
                        },
                        licenses: {
                            get: ["GET /licenses/{license}"],
                            getAllCommonlyUsed: ["GET /licenses"],
                            getForRepo: ["GET /repos/{owner}/{repo}/license"]
                        },
                        markdown: {
                            render: ["POST /markdown"],
                            renderRaw: [
                                "POST /markdown/raw",
                                { headers: { "content-type": "text/plain; charset=utf-8" } }
                            ]
                        },
                        meta: {
                            get: ["GET /meta"],
                            getOctocat: ["GET /octocat"],
                            getZen: ["GET /zen"],
                            root: ["GET /"]
                        },
                        migrations: {
                            cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
                            deleteArchiveForAuthenticatedUser: [
                                "DELETE /user/migrations/{migration_id}/archive",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            deleteArchiveForOrg: [
                                "DELETE /orgs/{org}/migrations/{migration_id}/archive",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            downloadArchiveForOrg: [
                                "GET /orgs/{org}/migrations/{migration_id}/archive",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            getArchiveForAuthenticatedUser: [
                                "GET /user/migrations/{migration_id}/archive",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
                            getImportStatus: ["GET /repos/{owner}/{repo}/import"],
                            getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
                            getStatusForAuthenticatedUser: [
                                "GET /user/migrations/{migration_id}",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            getStatusForOrg: [
                                "GET /orgs/{org}/migrations/{migration_id}",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            listForAuthenticatedUser: [
                                "GET /user/migrations",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            listForOrg: ["GET /orgs/{org}/migrations", { mediaType: { previews: ["wyandotte"] } }],
                            listReposForOrg: [
                                "GET /orgs/{org}/migrations/{migration_id}/repositories",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            listReposForUser: [
                                "GET /user/migrations/{migration_id}/repositories",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
                            setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
                            startForAuthenticatedUser: ["POST /user/migrations"],
                            startForOrg: ["POST /orgs/{org}/migrations"],
                            startImport: ["PUT /repos/{owner}/{repo}/import"],
                            unlockRepoForAuthenticatedUser: [
                                "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            unlockRepoForOrg: [
                                "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            updateImport: ["PATCH /repos/{owner}/{repo}/import"]
                        },
                        orgs: {
                            blockUser: ["PUT /orgs/{org}/blocks/{username}"],
                            checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
                            checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
                            checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
                            convertMemberToOutsideCollaborator: ["PUT /orgs/{org}/outside_collaborators/{username}"],
                            createInvitation: ["POST /orgs/{org}/invitations"],
                            createWebhook: ["POST /orgs/{org}/hooks"],
                            deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
                            get: ["GET /orgs/{org}"],
                            getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
                            getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
                            getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
                            getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
                            list: ["GET /organizations"],
                            listAppInstallations: ["GET /orgs/{org}/installations"],
                            listBlockedUsers: ["GET /orgs/{org}/blocks"],
                            listForAuthenticatedUser: ["GET /user/orgs"],
                            listForUser: ["GET /users/{username}/orgs"],
                            listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
                            listMembers: ["GET /orgs/{org}/members"],
                            listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
                            listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
                            listPendingInvitations: ["GET /orgs/{org}/invitations"],
                            listPublicMembers: ["GET /orgs/{org}/public_members"],
                            listWebhooks: ["GET /orgs/{org}/hooks"],
                            pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
                            removeMember: ["DELETE /orgs/{org}/members/{username}"],
                            removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
                            removeOutsideCollaborator: ["DELETE /orgs/{org}/outside_collaborators/{username}"],
                            removePublicMembershipForAuthenticatedUser: [
                                "DELETE /orgs/{org}/public_members/{username}"
                            ],
                            setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
                            setPublicMembershipForAuthenticatedUser: ["PUT /orgs/{org}/public_members/{username}"],
                            unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
                            update: ["PATCH /orgs/{org}"],
                            updateMembershipForAuthenticatedUser: ["PATCH /user/memberships/orgs/{org}"],
                            updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
                            updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"]
                        },
                        projects: {
                            addCollaborator: [
                                "PUT /projects/{project_id}/collaborators/{username}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            createCard: [
                                "POST /projects/columns/{column_id}/cards",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            createColumn: [
                                "POST /projects/{project_id}/columns",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            createForAuthenticatedUser: [
                                "POST /user/projects",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            createForOrg: ["POST /orgs/{org}/projects", { mediaType: { previews: ["inertia"] } }],
                            createForRepo: [
                                "POST /repos/{owner}/{repo}/projects",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            delete: ["DELETE /projects/{project_id}", { mediaType: { previews: ["inertia"] } }],
                            deleteCard: [
                                "DELETE /projects/columns/cards/{card_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            deleteColumn: [
                                "DELETE /projects/columns/{column_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            get: ["GET /projects/{project_id}", { mediaType: { previews: ["inertia"] } }],
                            getCard: [
                                "GET /projects/columns/cards/{card_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            getColumn: ["GET /projects/columns/{column_id}", { mediaType: { previews: ["inertia"] } }],
                            getPermissionForUser: [
                                "GET /projects/{project_id}/collaborators/{username}/permission",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listCards: [
                                "GET /projects/columns/{column_id}/cards",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listCollaborators: [
                                "GET /projects/{project_id}/collaborators",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listColumns: [
                                "GET /projects/{project_id}/columns",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listForOrg: ["GET /orgs/{org}/projects", { mediaType: { previews: ["inertia"] } }],
                            listForRepo: [
                                "GET /repos/{owner}/{repo}/projects",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listForUser: ["GET /users/{username}/projects", { mediaType: { previews: ["inertia"] } }],
                            moveCard: [
                                "POST /projects/columns/cards/{card_id}/moves",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            moveColumn: [
                                "POST /projects/columns/{column_id}/moves",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            removeCollaborator: [
                                "DELETE /projects/{project_id}/collaborators/{username}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            update: ["PATCH /projects/{project_id}", { mediaType: { previews: ["inertia"] } }],
                            updateCard: [
                                "PATCH /projects/columns/cards/{card_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            updateColumn: [
                                "PATCH /projects/columns/{column_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ]
                        },
                        pulls: {
                            checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
                            create: ["POST /repos/{owner}/{repo}/pulls"],
                            createReplyForReviewComment: [
                                "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"
                            ],
                            createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
                            createReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
                            deletePendingReview: [
                                "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
                            ],
                            deleteReviewComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
                            dismissReview: [
                                "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"
                            ],
                            get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
                            getReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
                            getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
                            list: ["GET /repos/{owner}/{repo}/pulls"],
                            listCommentsForReview: [
                                "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"
                            ],
                            listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
                            listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
                            listRequestedReviewers: [
                                "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
                            ],
                            listReviewComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
                            listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
                            listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
                            merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
                            removeRequestedReviewers: [
                                "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
                            ],
                            requestReviewers: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
                            submitReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"],
                            update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
                            updateBranch: [
                                "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
                                { mediaType: { previews: ["lydian"] } }
                            ],
                            updateReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
                            updateReviewComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]
                        },
                        rateLimit: { get: ["GET /rate_limit"] },
                        reactions: {
                            createForCommitComment: [
                                "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            createForIssue: [
                                "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            createForIssueComment: [
                                "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            createForPullRequestReviewComment: [
                                "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            createForTeamDiscussionCommentInOrg: [
                                "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            createForTeamDiscussionInOrg: [
                                "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForCommitComment: [
                                "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForIssue: [
                                "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForIssueComment: [
                                "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForPullRequestComment: [
                                "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForTeamDiscussion: [
                                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForTeamDiscussionComment: [
                                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteLegacy: [
                                "DELETE /reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } },
                                {
                                    deprecated:
                                        "octokit.reactions.deleteLegacy() is deprecated, see https://docs.github.com/v3/reactions/#delete-a-reaction-legacy"
                                }
                            ],
                            listForCommitComment: [
                                "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            listForIssue: [
                                "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            listForIssueComment: [
                                "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            listForPullRequestReviewComment: [
                                "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            listForTeamDiscussionCommentInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            listForTeamDiscussionInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ]
                        },
                        repos: {
                            acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"],
                            addAppAccessRestrictions: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                                {},
                                { mapToData: "apps" }
                            ],
                            addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
                            addStatusCheckContexts: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                                {},
                                { mapToData: "contexts" }
                            ],
                            addTeamAccessRestrictions: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                                {},
                                { mapToData: "teams" }
                            ],
                            addUserAccessRestrictions: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                                {},
                                { mapToData: "users" }
                            ],
                            checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
                            checkVulnerabilityAlerts: [
                                "GET /repos/{owner}/{repo}/vulnerability-alerts",
                                { mediaType: { previews: ["dorian"] } }
                            ],
                            compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
                            createCommitComment: ["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
                            createCommitSignatureProtection: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                                { mediaType: { previews: ["zzzax"] } }
                            ],
                            createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
                            createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
                            createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
                            createDeploymentStatus: ["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
                            createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
                            createForAuthenticatedUser: ["POST /user/repos"],
                            createFork: ["POST /repos/{owner}/{repo}/forks"],
                            createInOrg: ["POST /orgs/{org}/repos"],
                            createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
                            createPagesSite: [
                                "POST /repos/{owner}/{repo}/pages",
                                { mediaType: { previews: ["switcheroo"] } }
                            ],
                            createRelease: ["POST /repos/{owner}/{repo}/releases"],
                            createUsingTemplate: [
                                "POST /repos/{template_owner}/{template_repo}/generate",
                                { mediaType: { previews: ["baptiste"] } }
                            ],
                            createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
                            declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"],
                            delete: ["DELETE /repos/{owner}/{repo}"],
                            deleteAccessRestrictions: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
                            ],
                            deleteAdminBranchProtection: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
                            ],
                            deleteBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"],
                            deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
                            deleteCommitSignatureProtection: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                                { mediaType: { previews: ["zzzax"] } }
                            ],
                            deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
                            deleteDeployment: ["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"],
                            deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
                            deleteInvitation: ["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"],
                            deletePagesSite: [
                                "DELETE /repos/{owner}/{repo}/pages",
                                { mediaType: { previews: ["switcheroo"] } }
                            ],
                            deletePullRequestReviewProtection: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
                            ],
                            deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
                            deleteReleaseAsset: ["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"],
                            deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
                            disableAutomatedSecurityFixes: [
                                "DELETE /repos/{owner}/{repo}/automated-security-fixes",
                                { mediaType: { previews: ["london"] } }
                            ],
                            disableVulnerabilityAlerts: [
                                "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
                                { mediaType: { previews: ["dorian"] } }
                            ],
                            downloadArchive: [
                                "GET /repos/{owner}/{repo}/zipball/{ref}",
                                {},
                                { renamed: ["repos", "downloadZipballArchive"] }
                            ],
                            downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
                            downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
                            enableAutomatedSecurityFixes: [
                                "PUT /repos/{owner}/{repo}/automated-security-fixes",
                                { mediaType: { previews: ["london"] } }
                            ],
                            enableVulnerabilityAlerts: [
                                "PUT /repos/{owner}/{repo}/vulnerability-alerts",
                                { mediaType: { previews: ["dorian"] } }
                            ],
                            get: ["GET /repos/{owner}/{repo}"],
                            getAccessRestrictions: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
                            ],
                            getAdminBranchProtection: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
                            ],
                            getAllStatusCheckContexts: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
                            ],
                            getAllTopics: ["GET /repos/{owner}/{repo}/topics", { mediaType: { previews: ["mercy"] } }],
                            getAppsWithAccessToProtectedBranch: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
                            ],
                            getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
                            getBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection"],
                            getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
                            getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
                            getCollaboratorPermissionLevel: [
                                "GET /repos/{owner}/{repo}/collaborators/{username}/permission"
                            ],
                            getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
                            getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
                            getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
                            getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
                            getCommitSignatureProtection: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                                { mediaType: { previews: ["zzzax"] } }
                            ],
                            getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
                            getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
                            getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
                            getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
                            getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
                            getDeploymentStatus: [
                                "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"
                            ],
                            getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
                            getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
                            getPages: ["GET /repos/{owner}/{repo}/pages"],
                            getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
                            getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
                            getPullRequestReviewProtection: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
                            ],
                            getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
                            getReadme: ["GET /repos/{owner}/{repo}/readme"],
                            getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
                            getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
                            getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
                            getStatusChecksProtection: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
                            ],
                            getTeamsWithAccessToProtectedBranch: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
                            ],
                            getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
                            getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
                            getUsersWithAccessToProtectedBranch: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
                            ],
                            getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
                            getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
                            getWebhookConfigForRepo: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"],
                            listBranches: ["GET /repos/{owner}/{repo}/branches"],
                            listBranchesForHeadCommit: [
                                "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
                                { mediaType: { previews: ["groot"] } }
                            ],
                            listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
                            listCommentsForCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
                            listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
                            listCommitStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],
                            listCommits: ["GET /repos/{owner}/{repo}/commits"],
                            listContributors: ["GET /repos/{owner}/{repo}/contributors"],
                            listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
                            listDeploymentStatuses: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
                            listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
                            listForAuthenticatedUser: ["GET /user/repos"],
                            listForOrg: ["GET /orgs/{org}/repos"],
                            listForUser: ["GET /users/{username}/repos"],
                            listForks: ["GET /repos/{owner}/{repo}/forks"],
                            listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
                            listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
                            listLanguages: ["GET /repos/{owner}/{repo}/languages"],
                            listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
                            listPublic: ["GET /repositories"],
                            listPullRequestsAssociatedWithCommit: [
                                "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
                                { mediaType: { previews: ["groot"] } }
                            ],
                            listReleaseAssets: ["GET /repos/{owner}/{repo}/releases/{release_id}/assets"],
                            listReleases: ["GET /repos/{owner}/{repo}/releases"],
                            listTags: ["GET /repos/{owner}/{repo}/tags"],
                            listTeams: ["GET /repos/{owner}/{repo}/teams"],
                            listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
                            merge: ["POST /repos/{owner}/{repo}/merges"],
                            pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
                            removeAppAccessRestrictions: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                                {},
                                { mapToData: "apps" }
                            ],
                            removeCollaborator: ["DELETE /repos/{owner}/{repo}/collaborators/{username}"],
                            removeStatusCheckContexts: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                                {},
                                { mapToData: "contexts" }
                            ],
                            removeStatusCheckProtection: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
                            ],
                            removeTeamAccessRestrictions: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                                {},
                                { mapToData: "teams" }
                            ],
                            removeUserAccessRestrictions: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                                {},
                                { mapToData: "users" }
                            ],
                            replaceAllTopics: [
                                "PUT /repos/{owner}/{repo}/topics",
                                { mediaType: { previews: ["mercy"] } }
                            ],
                            requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
                            setAdminBranchProtection: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
                            ],
                            setAppAccessRestrictions: [
                                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                                {},
                                { mapToData: "apps" }
                            ],
                            setStatusCheckContexts: [
                                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                                {},
                                { mapToData: "contexts" }
                            ],
                            setTeamAccessRestrictions: [
                                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                                {},
                                { mapToData: "teams" }
                            ],
                            setUserAccessRestrictions: [
                                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                                {},
                                { mapToData: "users" }
                            ],
                            testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
                            transfer: ["POST /repos/{owner}/{repo}/transfer"],
                            update: ["PATCH /repos/{owner}/{repo}"],
                            updateBranchProtection: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection"],
                            updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
                            updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
                            updateInvitation: ["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"],
                            updatePullRequestReviewProtection: [
                                "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
                            ],
                            updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
                            updateReleaseAsset: ["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"],
                            updateStatusCheckPotection: [
                                "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
                                {},
                                { renamed: ["repos", "updateStatusCheckProtection"] }
                            ],
                            updateStatusCheckProtection: [
                                "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
                            ],
                            updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
                            updateWebhookConfigForRepo: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"],
                            uploadReleaseAsset: [
                                "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
                                { baseUrl: "https://uploads.github.com" }
                            ]
                        },
                        search: {
                            code: ["GET /search/code"],
                            commits: ["GET /search/commits", { mediaType: { previews: ["cloak"] } }],
                            issuesAndPullRequests: ["GET /search/issues"],
                            labels: ["GET /search/labels"],
                            repos: ["GET /search/repositories"],
                            topics: ["GET /search/topics", { mediaType: { previews: ["mercy"] } }],
                            users: ["GET /search/users"]
                        },
                        secretScanning: {
                            getAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"],
                            listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
                            updateAlert: ["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]
                        },
                        teams: {
                            addOrUpdateMembershipForUserInOrg: [
                                "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"
                            ],
                            addOrUpdateProjectPermissionsInOrg: [
                                "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            addOrUpdateRepoPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
                            checkPermissionsForProjectInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            checkPermissionsForRepoInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
                            create: ["POST /orgs/{org}/teams"],
                            createDiscussionCommentInOrg: [
                                "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
                            ],
                            createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
                            deleteDiscussionCommentInOrg: [
                                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
                            ],
                            deleteDiscussionInOrg: [
                                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
                            ],
                            deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
                            getByName: ["GET /orgs/{org}/teams/{team_slug}"],
                            getDiscussionCommentInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
                            ],
                            getDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
                            getMembershipForUserInOrg: ["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"],
                            list: ["GET /orgs/{org}/teams"],
                            listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
                            listDiscussionCommentsInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
                            ],
                            listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
                            listForAuthenticatedUser: ["GET /user/teams"],
                            listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
                            listPendingInvitationsInOrg: ["GET /orgs/{org}/teams/{team_slug}/invitations"],
                            listProjectsInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/projects",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
                            removeMembershipForUserInOrg: [
                                "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"
                            ],
                            removeProjectInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"],
                            removeRepoInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
                            updateDiscussionCommentInOrg: [
                                "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
                            ],
                            updateDiscussionInOrg: [
                                "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
                            ],
                            updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
                        },
                        users: {
                            addEmailForAuthenticated: ["POST /user/emails"],
                            block: ["PUT /user/blocks/{username}"],
                            checkBlocked: ["GET /user/blocks/{username}"],
                            checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
                            checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
                            createGpgKeyForAuthenticated: ["POST /user/gpg_keys"],
                            createPublicSshKeyForAuthenticated: ["POST /user/keys"],
                            deleteEmailForAuthenticated: ["DELETE /user/emails"],
                            deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}"],
                            deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}"],
                            follow: ["PUT /user/following/{username}"],
                            getAuthenticated: ["GET /user"],
                            getByUsername: ["GET /users/{username}"],
                            getContextForUser: ["GET /users/{username}/hovercard"],
                            getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}"],
                            getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}"],
                            list: ["GET /users"],
                            listBlockedByAuthenticated: ["GET /user/blocks"],
                            listEmailsForAuthenticated: ["GET /user/emails"],
                            listFollowedByAuthenticated: ["GET /user/following"],
                            listFollowersForAuthenticatedUser: ["GET /user/followers"],
                            listFollowersForUser: ["GET /users/{username}/followers"],
                            listFollowingForUser: ["GET /users/{username}/following"],
                            listGpgKeysForAuthenticated: ["GET /user/gpg_keys"],
                            listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
                            listPublicEmailsForAuthenticated: ["GET /user/public_emails"],
                            listPublicKeysForUser: ["GET /users/{username}/keys"],
                            listPublicSshKeysForAuthenticated: ["GET /user/keys"],
                            setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility"],
                            unblock: ["DELETE /user/blocks/{username}"],
                            unfollow: ["DELETE /user/following/{username}"],
                            updateAuthenticated: ["PATCH /user"]
                        }
                    },
                    r = "4.4.1";
                function s(e, r) {
                    const s = {};
                    for (const [t, i] of Object.entries(r))
                        for (const [r, n] of Object.entries(i)) {
                            const [i, a, p] = n,
                                [c, l] = i.split(/ /),
                                m = Object.assign({ method: c, url: l }, a);
                            s[t] || (s[t] = {});
                            const u = s[t];
                            p ? (u[r] = o(e, t, r, m, p)) : (u[r] = e.request.defaults(m));
                        }
                    return s;
                }
                function o(e, r, s, o, t) {
                    const i = e.request.defaults(o);
                    return Object.assign(function (...o) {
                        let n = i.endpoint.merge(...o);
                        if (t.mapToData)
                            return (n = Object.assign({}, n, { data: n[t.mapToData], [t.mapToData]: void 0 })), i(n);
                        if (t.renamed) {
                            const [o, i] = t.renamed;
                            e.log.warn(`octokit.${r}.${s}() has been renamed to octokit.${o}.${i}()`);
                        }
                        if ((t.deprecated && e.log.warn(t.deprecated), t.renamedParameters)) {
                            const n = i.endpoint.merge(...o);
                            for (const [o, i] of Object.entries(t.renamedParameters))
                                o in n &&
                                    (e.log.warn(
                                        `"${o}" parameter is deprecated for "octokit.${r}.${s}()". Use "${i}" instead`
                                    ),
                                    i in n || (n[i] = n[o]),
                                    delete n[o]);
                            return i(n);
                        }
                        return i(...o);
                    }, i);
                }
                function t(r) {
                    return s(r, e);
                }
                t.VERSION = "4.4.1";
            },
            {}
        ],
        SSed: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.Octokit = void 0);
                var t = require("@octokit/core"),
                    e = require("@octokit/plugin-request-log"),
                    o = require("@octokit/plugin-paginate-rest"),
                    i = require("@octokit/plugin-rest-endpoint-methods");
                const r = "18.0.12",
                    s = t.Octokit.plugin(e.requestLog, i.restEndpointMethods, o.paginateRest).defaults({
                        userAgent: "octokit-rest.js/18.0.12"
                    });
                exports.Octokit = s;
            },
            {
                "@octokit/core": "NGhq",
                "@octokit/plugin-request-log": "ohOl",
                "@octokit/plugin-paginate-rest": "sTyu",
                "@octokit/plugin-rest-endpoint-methods": "TMrI"
            }
        ],
        m9AG: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.createClient = void 0);
                const e = require("@octokit/rest"),
                    t = async () => {
                        var t;
                        const r = await GM_getValue("token");
                        if (!r)
                            throw new Error("token is not defined, please set your GitHub Token to missue userscript.");
                        const o = await GM_getValue("owner"),
                            s = await GM_getValue("repo"),
                            i = null !== (t = await GM_getValue("label")) && void 0 !== t ? t : "CR";
                        if (!o || !s)
                            throw new Error(
                                "owner/repo is not defined, please set your GitHub Token to missue userscript."
                            );
                        const a = new e.Octokit({ auth: r });
                        return {
                            createIssue: (e, t) =>
                                a.issues.create({ owner: o, repo: s, title: e, body: "Refs " + t, labels: [i] })
                        };
                    };
                exports.createClient = t;
            },
            { "@octokit/rest": "SSed" }
        ],
        bUQO: [
            function (require, module, exports) {
                "use strict";
                function t(n, r) {
                    t = function (t, e) {
                        return new a(t, void 0, e);
                    };
                    var u = o(RegExp),
                        c = RegExp.prototype,
                        i = new WeakMap();
                    function a(t, e, n) {
                        var r = u.call(this, t, e);
                        return i.set(r, n || i.get(t)), r;
                    }
                    function l(t, e) {
                        var n = i.get(e);
                        return Object.keys(n).reduce(function (e, r) {
                            return (e[r] = t[n[r]]), e;
                        }, Object.create(null));
                    }
                    return (
                        e(a, u),
                        (a.prototype.exec = function (t) {
                            var e = c.exec.call(this, t);
                            return e && (e.groups = l(e, this)), e;
                        }),
                        (a.prototype[Symbol.replace] = function (t, e) {
                            if ("string" == typeof e) {
                                var n = i.get(this);
                                return c[Symbol.replace].call(
                                    this,
                                    t,
                                    e.replace(/\$<([^>]+)>/g, function (t, e) {
                                        return "$" + n[e];
                                    })
                                );
                            }
                            if ("function" == typeof e) {
                                var r = this;
                                return c[Symbol.replace].call(this, t, function () {
                                    var t = [];
                                    return (
                                        t.push.apply(t, arguments),
                                        "object" != typeof t[t.length - 1] && t.push(l(t, r)),
                                        e.apply(this, t)
                                    );
                                });
                            }
                            return c[Symbol.replace].call(this, t, e);
                        }),
                        t.apply(this, arguments)
                    );
                }
                function e(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, {
                        constructor: { value: t, writable: !0, configurable: !0 }
                    })),
                        e && a(t, e);
                }
                function n(t, e) {
                    return !e || ("object" != typeof e && "function" != typeof e) ? r(t) : e;
                }
                function r(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                function o(t) {
                    var e = "function" == typeof Map ? new Map() : void 0;
                    return (o = function (t) {
                        if (null === t || !i(t)) return t;
                        if ("function" != typeof t)
                            throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== e) {
                            if (e.has(t)) return e.get(t);
                            e.set(t, n);
                        }
                        function n() {
                            return u(t, arguments, l(this).constructor);
                        }
                        return (
                            (n.prototype = Object.create(t.prototype, {
                                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 }
                            })),
                            a(n, t)
                        );
                    })(t);
                }
                function u(t, e, n) {
                    return (u = c()
                        ? Reflect.construct
                        : function (t, e, n) {
                              var r = [null];
                              r.push.apply(r, e);
                              var o = new (Function.bind.apply(t, r))();
                              return n && a(o, n.prototype), o;
                          }).apply(null, arguments);
                }
                function c() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                function i(t) {
                    return -1 !== Function.toString.call(t).indexOf("[native code]");
                }
                function a(t, e) {
                    return (a =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        })(t, e);
                }
                function l(t) {
                    return (l = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          })(t);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 });
                const s = require("./github-data");
                !(async function () {
                    const e = t(
                            /^https:\/\/github.com\/([\x2D\.0-9A-Z_a-z]+)\/([\x2D\.0-9A-Z_a-z]+)\/((issues|pull))\/([0-9]+)/,
                            { owner: 1, repo: 2, type: 3, number: 5 }
                        ),
                        n = window.location.href.match(e);
                    if (!n) return;
                    const r = n[0],
                        o = document.querySelector(".thread-subscription-status"),
                        u = document.createElement("button");
                    (u.textContent = "Add to My missue"),
                        (u.className = "btn btn-block btn-sm thread-subscribe-button"),
                        u.addEventListener("click", () => {
                            (u.textContent = "Progressing..."),
                                (u.disabled = !0),
                                (async () => {
                                    var t;
                                    const e = await s.createClient(),
                                        n =
                                            null === (t = document.querySelector(".js-issue-title")) || void 0 === t
                                                ? void 0
                                                : t.textContent;
                                    return e.createIssue(n, r);
                                })()
                                    .then(() => {
                                        u.textContent = "Added";
                                    })
                                    .catch((t) => {
                                        console.error(t), (u.textContent = "Error: Retry"), (u.disabled = !1);
                                    });
                        }),
                        null == o || o.append(u);
                })();
            },
            { "./github-data": "m9AG" }
        ]
    },
    {},
    ["bUQO"],
    null
);
