function fd(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const o in r)
				if (o !== 'default' && !(o in e)) {
					const i = Object.getOwnPropertyDescriptor(r, o);
					i &&
						Object.defineProperty(
							e,
							o,
							i.get ? i : { enumerable: !0, get: () => r[o] },
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
	);
}
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
	new MutationObserver((o) => {
		for (const i of o)
			if (i.type === 'childList')
				for (const l of i.addedNodes)
					l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(o) {
		const i = {};
		return (
			o.integrity && (i.integrity = o.integrity),
			o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
			o.crossorigin === 'use-credentials'
				? (i.credentials = 'include')
				: o.crossorigin === 'anonymous'
				? (i.credentials = 'omit')
				: (i.credentials = 'same-origin'),
			i
		);
	}
	function r(o) {
		if (o.ep) return;
		o.ep = !0;
		const i = n(o);
		fetch(o.href, i);
	}
})();
var za =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
		? window
		: typeof global < 'u'
		? global
		: typeof self < 'u'
		? self
		: {};
function dd(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var or = {},
	pd = {
		get exports() {
			return or;
		},
		set exports(e) {
			or = e;
		},
	},
	jo = {},
	U = {},
	hd = {
		get exports() {
			return U;
		},
		set exports(e) {
			U = e;
		},
	},
	V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kr = Symbol.for('react.element'),
	md = Symbol.for('react.portal'),
	yd = Symbol.for('react.fragment'),
	gd = Symbol.for('react.strict_mode'),
	vd = Symbol.for('react.profiler'),
	wd = Symbol.for('react.provider'),
	zd = Symbol.for('react.context'),
	Sd = Symbol.for('react.forward_ref'),
	xd = Symbol.for('react.suspense'),
	kd = Symbol.for('react.memo'),
	Cd = Symbol.for('react.lazy'),
	Ks = Symbol.iterator;
function Ed(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Ks && e[Ks]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var Sa = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	xa = Object.assign,
	ka = {};
function Ln(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = ka),
		(this.updater = n || Sa);
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
Ln.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ca() {}
Ca.prototype = Ln.prototype;
function Hl(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = ka),
		(this.updater = n || Sa);
}
var Vl = (Hl.prototype = new Ca());
Vl.constructor = Hl;
xa(Vl, Ln.prototype);
Vl.isPureReactComponent = !0;
var Ys = Array.isArray,
	Ea = Object.prototype.hasOwnProperty,
	Wl = { current: null },
	Na = { key: !0, ref: !0, __self: !0, __source: !0 };
function _a(e, t, n) {
	var r,
		o = {},
		i = null,
		l = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (l = t.ref),
		t.key !== void 0 && (i = '' + t.key),
		t))
			Ea.call(t, r) && !Na.hasOwnProperty(r) && (o[r] = t[r]);
	var s = arguments.length - 2;
	if (s === 1) o.children = n;
	else if (1 < s) {
		for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
		o.children = u;
	}
	if (e && e.defaultProps)
		for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
	return {
		$$typeof: kr,
		type: e,
		key: i,
		ref: l,
		props: o,
		_owner: Wl.current,
	};
}
function Nd(e, t) {
	return {
		$$typeof: kr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function bl(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === kr;
}
function _d(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Xs = /\/+/g;
function si(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? _d('' + e.key)
		: t.toString(36);
}
function Xr(e, t, n, r, o) {
	var i = typeof e;
	(i === 'undefined' || i === 'boolean') && (e = null);
	var l = !1;
	if (e === null) l = !0;
	else
		switch (i) {
			case 'string':
			case 'number':
				l = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case kr:
					case md:
						l = !0;
				}
		}
	if (l)
		return (
			(l = e),
			(o = o(l)),
			(e = r === '' ? '.' + si(l, 0) : r),
			Ys(o)
				? ((n = ''),
				  e != null && (n = e.replace(Xs, '$&/') + '/'),
				  Xr(o, t, n, '', function (a) {
						return a;
				  }))
				: o != null &&
				  (bl(o) &&
						(o = Nd(
							o,
							n +
								(!o.key || (l && l.key === o.key)
									? ''
									: ('' + o.key).replace(Xs, '$&/') + '/') +
								e,
						)),
				  t.push(o)),
			1
		);
	if (((l = 0), (r = r === '' ? '.' : r + ':'), Ys(e)))
		for (var s = 0; s < e.length; s++) {
			i = e[s];
			var u = r + si(i, s);
			l += Xr(i, t, n, u, o);
		}
	else if (((u = Ed(e)), typeof u == 'function'))
		for (e = u.call(e), s = 0; !(i = e.next()).done; )
			(i = i.value), (u = r + si(i, s++)), (l += Xr(i, t, n, u, o));
	else if (i === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.',
			))
		);
	return l;
}
function Or(e, t, n) {
	if (e == null) return e;
	var r = [],
		o = 0;
	return (
		Xr(e, r, '', '', function (i) {
			return t.call(n, i, o++);
		}),
		r
	);
}
function Pd(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				},
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var Se = { current: null },
	Gr = { transition: null },
	Rd = {
		ReactCurrentDispatcher: Se,
		ReactCurrentBatchConfig: Gr,
		ReactCurrentOwner: Wl,
	};
V.Children = {
	map: Or,
	forEach: function (e, t, n) {
		Or(
			e,
			function () {
				t.apply(this, arguments);
			},
			n,
		);
	},
	count: function (e) {
		var t = 0;
		return (
			Or(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Or(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!bl(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.',
			);
		return e;
	},
};
V.Component = Ln;
V.Fragment = yd;
V.Profiler = vd;
V.PureComponent = Hl;
V.StrictMode = gd;
V.Suspense = xd;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
V.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.',
		);
	var r = xa({}, e.props),
		o = e.key,
		i = e.ref,
		l = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (l = Wl.current)),
			t.key !== void 0 && (o = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var s = e.type.defaultProps;
		for (u in t)
			Ea.call(t, u) &&
				!Na.hasOwnProperty(u) &&
				(r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		s = Array(u);
		for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
		r.children = s;
	}
	return { $$typeof: kr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
V.createContext = function (e) {
	return (
		(e = {
			$$typeof: zd,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: wd, _context: e }),
		(e.Consumer = e)
	);
};
V.createElement = _a;
V.createFactory = function (e) {
	var t = _a.bind(null, e);
	return (t.type = e), t;
};
V.createRef = function () {
	return { current: null };
};
V.forwardRef = function (e) {
	return { $$typeof: Sd, render: e };
};
V.isValidElement = bl;
V.lazy = function (e) {
	return { $$typeof: Cd, _payload: { _status: -1, _result: e }, _init: Pd };
};
V.memo = function (e, t) {
	return { $$typeof: kd, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
	var t = Gr.transition;
	Gr.transition = {};
	try {
		e();
	} finally {
		Gr.transition = t;
	}
};
V.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
V.useCallback = function (e, t) {
	return Se.current.useCallback(e, t);
};
V.useContext = function (e) {
	return Se.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
	return Se.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
	return Se.current.useEffect(e, t);
};
V.useId = function () {
	return Se.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
	return Se.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
	return Se.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
	return Se.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
	return Se.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
	return Se.current.useReducer(e, t, n);
};
V.useRef = function (e) {
	return Se.current.useRef(e);
};
V.useState = function (e) {
	return Se.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
	return Se.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
	return Se.current.useTransition();
};
V.version = '18.2.0';
(function (e) {
	e.exports = V;
})(hd);
const Pa = dd(U),
	$i = fd({ __proto__: null, default: Pa }, [U]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld = U,
	Td = Symbol.for('react.element'),
	Od = Symbol.for('react.fragment'),
	Md = Object.prototype.hasOwnProperty,
	Dd = Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Id = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ra(e, t, n) {
	var r,
		o = {},
		i = null,
		l = null;
	n !== void 0 && (i = '' + n),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (l = t.ref);
	for (r in t) Md.call(t, r) && !Id.hasOwnProperty(r) && (o[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
	return {
		$$typeof: Td,
		type: e,
		key: i,
		ref: l,
		props: o,
		_owner: Dd.current,
	};
}
jo.Fragment = Od;
jo.jsx = Ra;
jo.jsxs = Ra;
(function (e) {
	e.exports = jo;
})(pd);
const Zt = or.Fragment,
	y = or.jsx,
	$ = or.jsxs;
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fo() {
	return (
		(fo = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		fo.apply(this, arguments)
	);
}
var Bt;
(function (e) {
	(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Bt || (Bt = {}));
const Gs = 'popstate';
function Ad(e) {
	e === void 0 && (e = {});
	function t(r, o) {
		let { pathname: i, search: l, hash: s } = r.location;
		return ji(
			'',
			{ pathname: i, search: l, hash: s },
			(o.state && o.state.usr) || null,
			(o.state && o.state.key) || 'default',
		);
	}
	function n(r, o) {
		return typeof o == 'string' ? o : La(o);
	}
	return Ud(t, n, null, e);
}
function Ql(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Fd() {
	return Math.random().toString(36).substr(2, 8);
}
function Js(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function ji(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		fo(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? Ta(t) : t,
			{ state: n, key: (t && t.key) || r || Fd() },
		)
	);
}
function La(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e;
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	);
}
function Ta(e) {
	let t = {};
	if (e) {
		let n = e.indexOf('#');
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf('?');
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function Ud(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: o = document.defaultView, v5Compat: i = !1 } = r,
		l = o.history,
		s = Bt.Pop,
		u = null,
		a = d();
	a == null && ((a = 0), l.replaceState(fo({}, l.state, { idx: a }), ''));
	function d() {
		return (l.state || { idx: null }).idx;
	}
	function h() {
		s = Bt.Pop;
		let D = d(),
			f = D == null ? null : D - a;
		(a = D), u && u({ action: s, location: v.location, delta: f });
	}
	function m(D, f) {
		s = Bt.Push;
		let c = ji(v.location, D, f);
		n && n(c, D), (a = d() + 1);
		let p = Js(c, a),
			S = v.createHref(c);
		try {
			l.pushState(p, '', S);
		} catch {
			o.location.assign(S);
		}
		i && u && u({ action: s, location: v.location, delta: 1 });
	}
	function w(D, f) {
		s = Bt.Replace;
		let c = ji(v.location, D, f);
		n && n(c, D), (a = d());
		let p = Js(c, a),
			S = v.createHref(c);
		l.replaceState(p, '', S),
			i && u && u({ action: s, location: v.location, delta: 0 });
	}
	function g(D) {
		let f = o.location.origin !== 'null' ? o.location.origin : o.location.href,
			c = typeof D == 'string' ? D : La(D);
		return (
			Ql(
				f,
				'No window.location.(origin|href) available to create URL for href: ' +
					c,
			),
			new URL(c, f)
		);
	}
	let v = {
		get action() {
			return s;
		},
		get location() {
			return e(o, l);
		},
		listen(D) {
			if (u) throw new Error('A history only accepts one active listener');
			return (
				o.addEventListener(Gs, h),
				(u = D),
				() => {
					o.removeEventListener(Gs, h), (u = null);
				}
			);
		},
		createHref(D) {
			return t(o, D);
		},
		createURL: g,
		encodeLocation(D) {
			let f = g(D);
			return { pathname: f.pathname, search: f.search, hash: f.hash };
		},
		push: m,
		replace: w,
		go(D) {
			return l.go(D);
		},
	};
	return v;
}
var Zs;
(function (e) {
	(e.data = 'data'),
		(e.deferred = 'deferred'),
		(e.redirect = 'redirect'),
		(e.error = 'error');
})(Zs || (Zs = {}));
function $d(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
const jd = ['post', 'put', 'patch', 'delete'];
[...jd];
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bd(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Hd = typeof Object.is == 'function' ? Object.is : Bd,
	{ useState: Vd, useEffect: Wd, useLayoutEffect: bd, useDebugValue: Qd } = $i;
function Kd(e, t, n) {
	const r = t(),
		[{ inst: o }, i] = Vd({ inst: { value: r, getSnapshot: t } });
	return (
		bd(() => {
			(o.value = r), (o.getSnapshot = t), ui(o) && i({ inst: o });
		}, [e, r, t]),
		Wd(
			() => (
				ui(o) && i({ inst: o }),
				e(() => {
					ui(o) && i({ inst: o });
				})
			),
			[e],
		),
		Qd(r),
		r
	);
}
function ui(e) {
	const t = e.getSnapshot,
		n = e.value;
	try {
		const r = t();
		return !Hd(n, r);
	} catch {
		return !0;
	}
}
function Yd(e, t, n) {
	return t();
}
const Xd =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	Gd = !Xd,
	Jd = Gd ? Yd : Kd;
'useSyncExternalStore' in $i && ((e) => e.useSyncExternalStore)($i);
const Zd = U.createContext(null),
	Kl = U.createContext(null);
function Oa() {
	return U.useContext(Kl) != null;
}
function qd() {
	return Oa() || Ql(!1), U.useContext(Kl).location;
}
var qs;
(function (e) {
	(e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator');
})(qs || (qs = {}));
var eu;
(function (e) {
	(e.UseBlocker = 'useBlocker'),
		(e.UseLoaderData = 'useLoaderData'),
		(e.UseActionData = 'useActionData'),
		(e.UseRouteError = 'useRouteError'),
		(e.UseNavigation = 'useNavigation'),
		(e.UseRouteLoaderData = 'useRouteLoaderData'),
		(e.UseMatches = 'useMatches'),
		(e.UseRevalidator = 'useRevalidator');
})(eu || (eu = {}));
function ep(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: o = Bt.Pop,
		navigator: i,
		static: l = !1,
	} = e;
	Oa() && Ql(!1);
	let s = t.replace(/^\/*/, '/'),
		u = U.useMemo(() => ({ basename: s, navigator: i, static: l }), [s, i, l]);
	typeof r == 'string' && (r = Ta(r));
	let {
			pathname: a = '/',
			search: d = '',
			hash: h = '',
			state: m = null,
			key: w = 'default',
		} = r,
		g = U.useMemo(() => {
			let v = $d(a, s);
			return v == null
				? null
				: {
						location: { pathname: v, search: d, hash: h, state: m, key: w },
						navigationType: o,
				  };
		}, [s, a, d, h, m, w, o]);
	return g == null
		? null
		: U.createElement(
				Zd.Provider,
				{ value: u },
				U.createElement(Kl.Provider, { children: n, value: g }),
		  );
}
var tu;
(function (e) {
	(e[(e.pending = 0)] = 'pending'),
		(e[(e.success = 1)] = 'success'),
		(e[(e.error = 2)] = 'error');
})(tu || (tu = {}));
new Promise(() => {});
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tp(e) {
	let { basename: t, children: n, window: r } = e,
		o = U.useRef();
	o.current == null && (o.current = Ad({ window: r, v5Compat: !0 }));
	let i = o.current,
		[l, s] = U.useState({ action: i.action, location: i.location });
	return (
		U.useLayoutEffect(() => i.listen(s), [i]),
		U.createElement(ep, {
			basename: t,
			children: n,
			location: l.location,
			navigationType: l.action,
			navigator: i,
		})
	);
}
var nu;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmitImpl = 'useSubmitImpl'),
		(e.UseFetcher = 'useFetcher');
})(nu || (nu = {}));
var ru;
(function (e) {
	(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration');
})(ru || (ru = {}));
const ai = {
		BUSINESS_NOT_FOUND: { message: 'Review link does not exist' },
		SERVER_ERROR: { message: 'Server error, please try again later' },
	},
	Ma = [1, 2, 3, 4, 5],
	Bi = [
		'cozy-bg-red-500 cozy-text-light-neutral-25',
		'cozy-bg-orange-500 cozy-text-light-neutral-25',
		'cozy-bg-yellow-500 cozy-text-light-neutral-25',
		'cozy-bg-green-500 cozy-text-light-neutral-25',
		'cozy-bg-branding-primary-500 cozy-text-light-neutral-25',
	];
function Yl(e, t) {
	return e === 0
		? t('')
		: e > 0 && e <= 1
		? t('Terrible')
		: e <= 2
		? t('Bad')
		: e <= 3
		? t('Okay')
		: e <= 4
		? t('Good')
		: t('Excellent');
}
function np(e) {
	return e <= 1
		? 'What went wrong? How can this company improve? Remember to be honest, helpful and constructive.'
		: e <= 2
		? 'What do like or dislike? What is this company doing well, or how can they improve? Remember to be honest, helpful and constructive.'
		: e <= 5
		? 'What made your experience great? What is this company doing well? Remember to be honest, helpful and constructive.'
		: null;
}
function ge(e, t) {
	return e || (typeof t < 'u' || t !== null ? t : '-');
}
function po(e, t = 300) {
	return (n) => {
		e.id ||
			(e.id = setTimeout(() => {
				e.call(this, n), clearTimeout(e.id), (e.id = null);
			}, t));
	};
}
function rp(e) {
	return ai[e] ? ai[e].setMessage : ai.SERVER_ERROR.message;
}
function Da(e, t) {
	return function () {
		return e.apply(t, arguments);
	};
}
const { toString: Ia } = Object.prototype,
	{ getPrototypeOf: Xl } = Object,
	Gl = ((e) => (t) => {
		const n = Ia.call(t);
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
	})(Object.create(null)),
	ht = (e) => ((e = e.toLowerCase()), (t) => Gl(t) === e),
	Bo = (e) => (t) => typeof t === e,
	{ isArray: Tn } = Array,
	ir = Bo('undefined');
function op(e) {
	return (
		e !== null &&
		!ir(e) &&
		e.constructor !== null &&
		!ir(e.constructor) &&
		Mt(e.constructor.isBuffer) &&
		e.constructor.isBuffer(e)
	);
}
const Aa = ht('ArrayBuffer');
function ip(e) {
	let t;
	return (
		typeof ArrayBuffer < 'u' && ArrayBuffer.isView
			? (t = ArrayBuffer.isView(e))
			: (t = e && e.buffer && Aa(e.buffer)),
		t
	);
}
const lp = Bo('string'),
	Mt = Bo('function'),
	Fa = Bo('number'),
	Jl = (e) => e !== null && typeof e == 'object',
	sp = (e) => e === !0 || e === !1,
	Jr = (e) => {
		if (Gl(e) !== 'object') return !1;
		const t = Xl(e);
		return (
			(t === null ||
				t === Object.prototype ||
				Object.getPrototypeOf(t) === null) &&
			!(Symbol.toStringTag in e) &&
			!(Symbol.iterator in e)
		);
	},
	up = ht('Date'),
	ap = ht('File'),
	cp = ht('Blob'),
	fp = ht('FileList'),
	dp = (e) => Jl(e) && Mt(e.pipe),
	pp = (e) => {
		const t = '[object FormData]';
		return (
			e &&
			((typeof FormData == 'function' && e instanceof FormData) ||
				Ia.call(e) === t ||
				(Mt(e.toString) && e.toString() === t))
		);
	},
	hp = ht('URLSearchParams'),
	mp = (e) =>
		e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Cr(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e === null || typeof e > 'u') return;
	let r, o;
	if ((typeof e != 'object' && (e = [e]), Tn(e)))
		for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
	else {
		const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
			l = i.length;
		let s;
		for (r = 0; r < l; r++) (s = i[r]), t.call(null, e[s], s, e);
	}
}
function Ua(e, t) {
	t = t.toLowerCase();
	const n = Object.keys(e);
	let r = n.length,
		o;
	for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
	return null;
}
const $a = (() =>
		typeof globalThis < 'u'
			? globalThis
			: typeof self < 'u'
			? self
			: typeof window < 'u'
			? window
			: global)(),
	ja = (e) => !ir(e) && e !== $a;
function Hi() {
	const { caseless: e } = (ja(this) && this) || {},
		t = {},
		n = (r, o) => {
			const i = (e && Ua(t, o)) || o;
			Jr(t[i]) && Jr(r)
				? (t[i] = Hi(t[i], r))
				: Jr(r)
				? (t[i] = Hi({}, r))
				: Tn(r)
				? (t[i] = r.slice())
				: (t[i] = r);
		};
	for (let r = 0, o = arguments.length; r < o; r++)
		arguments[r] && Cr(arguments[r], n);
	return t;
}
const yp = (e, t, n, { allOwnKeys: r } = {}) => (
		Cr(
			t,
			(o, i) => {
				n && Mt(o) ? (e[i] = Da(o, n)) : (e[i] = o);
			},
			{ allOwnKeys: r },
		),
		e
	),
	gp = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
	vp = (e, t, n, r) => {
		(e.prototype = Object.create(t.prototype, r)),
			(e.prototype.constructor = e),
			Object.defineProperty(e, 'super', { value: t.prototype }),
			n && Object.assign(e.prototype, n);
	},
	wp = (e, t, n, r) => {
		let o, i, l;
		const s = {};
		if (((t = t || {}), e == null)) return t;
		do {
			for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
				(l = o[i]), (!r || r(l, e, t)) && !s[l] && ((t[l] = e[l]), (s[l] = !0));
			e = n !== !1 && Xl(e);
		} while (e && (!n || n(e, t)) && e !== Object.prototype);
		return t;
	},
	zp = (e, t, n) => {
		(e = String(e)),
			(n === void 0 || n > e.length) && (n = e.length),
			(n -= t.length);
		const r = e.indexOf(t, n);
		return r !== -1 && r === n;
	},
	Sp = (e) => {
		if (!e) return null;
		if (Tn(e)) return e;
		let t = e.length;
		if (!Fa(t)) return null;
		const n = new Array(t);
		for (; t-- > 0; ) n[t] = e[t];
		return n;
	},
	xp = (
		(e) => (t) =>
			e && t instanceof e
	)(typeof Uint8Array < 'u' && Xl(Uint8Array)),
	kp = (e, t) => {
		const r = (e && e[Symbol.iterator]).call(e);
		let o;
		for (; (o = r.next()) && !o.done; ) {
			const i = o.value;
			t.call(e, i[0], i[1]);
		}
	},
	Cp = (e, t) => {
		let n;
		const r = [];
		for (; (n = e.exec(t)) !== null; ) r.push(n);
		return r;
	},
	Ep = ht('HTMLFormElement'),
	Np = (e) =>
		e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
			return r.toUpperCase() + o;
		}),
	ou = (
		({ hasOwnProperty: e }) =>
		(t, n) =>
			e.call(t, n)
	)(Object.prototype),
	_p = ht('RegExp'),
	Ba = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			r = {};
		Cr(n, (o, i) => {
			t(o, i, e) !== !1 && (r[i] = o);
		}),
			Object.defineProperties(e, r);
	},
	Pp = (e) => {
		Ba(e, (t, n) => {
			if (Mt(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
				return !1;
			const r = e[n];
			if (Mt(r)) {
				if (((t.enumerable = !1), 'writable' in t)) {
					t.writable = !1;
					return;
				}
				t.set ||
					(t.set = () => {
						throw Error("Can not rewrite read-only method '" + n + "'");
					});
			}
		});
	},
	Rp = (e, t) => {
		const n = {},
			r = (o) => {
				o.forEach((i) => {
					n[i] = !0;
				});
			};
		return Tn(e) ? r(e) : r(String(e).split(t)), n;
	},
	Lp = () => {},
	Tp = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
	ci = 'abcdefghijklmnopqrstuvwxyz',
	iu = '0123456789',
	Ha = { DIGIT: iu, ALPHA: ci, ALPHA_DIGIT: ci + ci.toUpperCase() + iu },
	Op = (e = 16, t = Ha.ALPHA_DIGIT) => {
		let n = '';
		const { length: r } = t;
		for (; e--; ) n += t[(Math.random() * r) | 0];
		return n;
	};
function Mp(e) {
	return !!(
		e &&
		Mt(e.append) &&
		e[Symbol.toStringTag] === 'FormData' &&
		e[Symbol.iterator]
	);
}
const Dp = (e) => {
		const t = new Array(10),
			n = (r, o) => {
				if (Jl(r)) {
					if (t.indexOf(r) >= 0) return;
					if (!('toJSON' in r)) {
						t[o] = r;
						const i = Tn(r) ? [] : {};
						return (
							Cr(r, (l, s) => {
								const u = n(l, o + 1);
								!ir(u) && (i[s] = u);
							}),
							(t[o] = void 0),
							i
						);
					}
				}
				return r;
			};
		return n(e, 0);
	},
	z = {
		isArray: Tn,
		isArrayBuffer: Aa,
		isBuffer: op,
		isFormData: pp,
		isArrayBufferView: ip,
		isString: lp,
		isNumber: Fa,
		isBoolean: sp,
		isObject: Jl,
		isPlainObject: Jr,
		isUndefined: ir,
		isDate: up,
		isFile: ap,
		isBlob: cp,
		isRegExp: _p,
		isFunction: Mt,
		isStream: dp,
		isURLSearchParams: hp,
		isTypedArray: xp,
		isFileList: fp,
		forEach: Cr,
		merge: Hi,
		extend: yp,
		trim: mp,
		stripBOM: gp,
		inherits: vp,
		toFlatObject: wp,
		kindOf: Gl,
		kindOfTest: ht,
		endsWith: zp,
		toArray: Sp,
		forEachEntry: kp,
		matchAll: Cp,
		isHTMLForm: Ep,
		hasOwnProperty: ou,
		hasOwnProp: ou,
		reduceDescriptors: Ba,
		freezeMethods: Pp,
		toObjectSet: Rp,
		toCamelCase: Np,
		noop: Lp,
		toFiniteNumber: Tp,
		findKey: Ua,
		global: $a,
		isContextDefined: ja,
		ALPHABET: Ha,
		generateString: Op,
		isSpecCompliantForm: Mp,
		toJSONObject: Dp,
	};
function W(e, t, n, r, o) {
	Error.call(this),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack),
		(this.message = e),
		(this.name = 'AxiosError'),
		t && (this.code = t),
		n && (this.config = n),
		r && (this.request = r),
		o && (this.response = o);
}
z.inherits(W, Error, {
	toJSON: function () {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: z.toJSONObject(this.config),
			code: this.code,
			status:
				this.response && this.response.status ? this.response.status : null,
		};
	},
});
const Va = W.prototype,
	Wa = {};
[
	'ERR_BAD_OPTION_VALUE',
	'ERR_BAD_OPTION',
	'ECONNABORTED',
	'ETIMEDOUT',
	'ERR_NETWORK',
	'ERR_FR_TOO_MANY_REDIRECTS',
	'ERR_DEPRECATED',
	'ERR_BAD_RESPONSE',
	'ERR_BAD_REQUEST',
	'ERR_CANCELED',
	'ERR_NOT_SUPPORT',
	'ERR_INVALID_URL',
].forEach((e) => {
	Wa[e] = { value: e };
});
Object.defineProperties(W, Wa);
Object.defineProperty(Va, 'isAxiosError', { value: !0 });
W.from = (e, t, n, r, o, i) => {
	const l = Object.create(Va);
	return (
		z.toFlatObject(
			e,
			l,
			function (u) {
				return u !== Error.prototype;
			},
			(s) => s !== 'isAxiosError',
		),
		W.call(l, e.message, t, n, r, o),
		(l.cause = e),
		(l.name = e.name),
		i && Object.assign(l, i),
		l
	);
};
const Ip = null;
function Vi(e) {
	return z.isPlainObject(e) || z.isArray(e);
}
function ba(e) {
	return z.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function lu(e, t, n) {
	return e
		? e
				.concat(t)
				.map(function (o, i) {
					return (o = ba(o)), !n && i ? '[' + o + ']' : o;
				})
				.join(n ? '.' : '')
		: t;
}
function Ap(e) {
	return z.isArray(e) && !e.some(Vi);
}
const Fp = z.toFlatObject(z, {}, null, function (t) {
	return /^is[A-Z]/.test(t);
});
function Ho(e, t, n) {
	if (!z.isObject(e)) throw new TypeError('target must be an object');
	(t = t || new FormData()),
		(n = z.toFlatObject(
			n,
			{ metaTokens: !0, dots: !1, indexes: !1 },
			!1,
			function (v, D) {
				return !z.isUndefined(D[v]);
			},
		));
	const r = n.metaTokens,
		o = n.visitor || d,
		i = n.dots,
		l = n.indexes,
		u = (n.Blob || (typeof Blob < 'u' && Blob)) && z.isSpecCompliantForm(t);
	if (!z.isFunction(o)) throw new TypeError('visitor must be a function');
	function a(g) {
		if (g === null) return '';
		if (z.isDate(g)) return g.toISOString();
		if (!u && z.isBlob(g))
			throw new W('Blob is not supported. Use a Buffer instead.');
		return z.isArrayBuffer(g) || z.isTypedArray(g)
			? u && typeof Blob == 'function'
				? new Blob([g])
				: Buffer.from(g)
			: g;
	}
	function d(g, v, D) {
		let f = g;
		if (g && !D && typeof g == 'object') {
			if (z.endsWith(v, '{}'))
				(v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
			else if (
				(z.isArray(g) && Ap(g)) ||
				((z.isFileList(g) || z.endsWith(v, '[]')) && (f = z.toArray(g)))
			)
				return (
					(v = ba(v)),
					f.forEach(function (p, S) {
						!(z.isUndefined(p) || p === null) &&
							t.append(
								l === !0 ? lu([v], S, i) : l === null ? v : v + '[]',
								a(p),
							);
					}),
					!1
				);
		}
		return Vi(g) ? !0 : (t.append(lu(D, v, i), a(g)), !1);
	}
	const h = [],
		m = Object.assign(Fp, {
			defaultVisitor: d,
			convertValue: a,
			isVisitable: Vi,
		});
	function w(g, v) {
		if (!z.isUndefined(g)) {
			if (h.indexOf(g) !== -1)
				throw Error('Circular reference detected in ' + v.join('.'));
			h.push(g),
				z.forEach(g, function (f, c) {
					(!(z.isUndefined(f) || f === null) &&
						o.call(t, f, z.isString(c) ? c.trim() : c, v, m)) === !0 &&
						w(f, v ? v.concat(c) : [c]);
				}),
				h.pop();
		}
	}
	if (!z.isObject(e)) throw new TypeError('data must be an object');
	return w(e), t;
}
function su(e) {
	const t = {
		'!': '%21',
		"'": '%27',
		'(': '%28',
		')': '%29',
		'~': '%7E',
		'%20': '+',
		'%00': '\0',
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
		return t[r];
	});
}
function Zl(e, t) {
	(this._pairs = []), e && Ho(e, this, t);
}
const Qa = Zl.prototype;
Qa.append = function (t, n) {
	this._pairs.push([t, n]);
};
Qa.toString = function (t) {
	const n = t
		? function (r) {
				return t.call(this, r, su);
		  }
		: su;
	return this._pairs
		.map(function (o) {
			return n(o[0]) + '=' + n(o[1]);
		}, '')
		.join('&');
};
function Up(e) {
	return encodeURIComponent(e)
		.replace(/%3A/gi, ':')
		.replace(/%24/g, '$')
		.replace(/%2C/gi, ',')
		.replace(/%20/g, '+')
		.replace(/%5B/gi, '[')
		.replace(/%5D/gi, ']');
}
function Ka(e, t, n) {
	if (!t) return e;
	const r = (n && n.encode) || Up,
		o = n && n.serialize;
	let i;
	if (
		(o
			? (i = o(t, n))
			: (i = z.isURLSearchParams(t) ? t.toString() : new Zl(t, n).toString(r)),
		i)
	) {
		const l = e.indexOf('#');
		l !== -1 && (e = e.slice(0, l)),
			(e += (e.indexOf('?') === -1 ? '?' : '&') + i);
	}
	return e;
}
class $p {
	constructor() {
		this.handlers = [];
	}
	use(t, n, r) {
		return (
			this.handlers.push({
				fulfilled: t,
				rejected: n,
				synchronous: r ? r.synchronous : !1,
				runWhen: r ? r.runWhen : null,
			}),
			this.handlers.length - 1
		);
	}
	eject(t) {
		this.handlers[t] && (this.handlers[t] = null);
	}
	clear() {
		this.handlers && (this.handlers = []);
	}
	forEach(t) {
		z.forEach(this.handlers, function (r) {
			r !== null && t(r);
		});
	}
}
const uu = $p,
	Ya = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1,
	},
	jp = typeof URLSearchParams < 'u' ? URLSearchParams : Zl,
	Bp = typeof FormData < 'u' ? FormData : null,
	Hp = typeof Blob < 'u' ? Blob : null,
	Vp = (() => {
		let e;
		return typeof navigator < 'u' &&
			((e = navigator.product) === 'ReactNative' ||
				e === 'NativeScript' ||
				e === 'NS')
			? !1
			: typeof window < 'u' && typeof document < 'u';
	})(),
	Wp = (() =>
		typeof WorkerGlobalScope < 'u' &&
		self instanceof WorkerGlobalScope &&
		typeof self.importScripts == 'function')(),
	tt = {
		isBrowser: !0,
		classes: { URLSearchParams: jp, FormData: Bp, Blob: Hp },
		isStandardBrowserEnv: Vp,
		isStandardBrowserWebWorkerEnv: Wp,
		protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
	};
function bp(e, t) {
	return Ho(
		e,
		new tt.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (n, r, o, i) {
					return tt.isNode && z.isBuffer(n)
						? (this.append(r, n.toString('base64')), !1)
						: i.defaultVisitor.apply(this, arguments);
				},
			},
			t,
		),
	);
}
function Qp(e) {
	return z
		.matchAll(/\w+|\[(\w*)]/g, e)
		.map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function Kp(e) {
	const t = {},
		n = Object.keys(e);
	let r;
	const o = n.length;
	let i;
	for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
	return t;
}
function Xa(e) {
	function t(n, r, o, i) {
		let l = n[i++];
		const s = Number.isFinite(+l),
			u = i >= n.length;
		return (
			(l = !l && z.isArray(o) ? o.length : l),
			u
				? (z.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !s)
				: ((!o[l] || !z.isObject(o[l])) && (o[l] = []),
				  t(n, r, o[l], i) && z.isArray(o[l]) && (o[l] = Kp(o[l])),
				  !s)
		);
	}
	if (z.isFormData(e) && z.isFunction(e.entries)) {
		const n = {};
		return (
			z.forEachEntry(e, (r, o) => {
				t(Qp(r), o, n, 0);
			}),
			n
		);
	}
	return null;
}
const Yp = { 'Content-Type': void 0 };
function Xp(e, t, n) {
	if (z.isString(e))
		try {
			return (t || JSON.parse)(e), z.trim(e);
		} catch (r) {
			if (r.name !== 'SyntaxError') throw r;
		}
	return (n || JSON.stringify)(e);
}
const Vo = {
	transitional: Ya,
	adapter: ['xhr', 'http'],
	transformRequest: [
		function (t, n) {
			const r = n.getContentType() || '',
				o = r.indexOf('application/json') > -1,
				i = z.isObject(t);
			if ((i && z.isHTMLForm(t) && (t = new FormData(t)), z.isFormData(t)))
				return o && o ? JSON.stringify(Xa(t)) : t;
			if (
				z.isArrayBuffer(t) ||
				z.isBuffer(t) ||
				z.isStream(t) ||
				z.isFile(t) ||
				z.isBlob(t)
			)
				return t;
			if (z.isArrayBufferView(t)) return t.buffer;
			if (z.isURLSearchParams(t))
				return (
					n.setContentType(
						'application/x-www-form-urlencoded;charset=utf-8',
						!1,
					),
					t.toString()
				);
			let s;
			if (i) {
				if (r.indexOf('application/x-www-form-urlencoded') > -1)
					return bp(t, this.formSerializer).toString();
				if ((s = z.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
					const u = this.env && this.env.FormData;
					return Ho(
						s ? { 'files[]': t } : t,
						u && new u(),
						this.formSerializer,
					);
				}
			}
			return i || o ? (n.setContentType('application/json', !1), Xp(t)) : t;
		},
	],
	transformResponse: [
		function (t) {
			const n = this.transitional || Vo.transitional,
				r = n && n.forcedJSONParsing,
				o = this.responseType === 'json';
			if (t && z.isString(t) && ((r && !this.responseType) || o)) {
				const l = !(n && n.silentJSONParsing) && o;
				try {
					return JSON.parse(t);
				} catch (s) {
					if (l)
						throw s.name === 'SyntaxError'
							? W.from(s, W.ERR_BAD_RESPONSE, this, null, this.response)
							: s;
				}
			}
			return t;
		},
	],
	timeout: 0,
	xsrfCookieName: 'XSRF-TOKEN',
	xsrfHeaderName: 'X-XSRF-TOKEN',
	maxContentLength: -1,
	maxBodyLength: -1,
	env: { FormData: tt.classes.FormData, Blob: tt.classes.Blob },
	validateStatus: function (t) {
		return t >= 200 && t < 300;
	},
	headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
z.forEach(['delete', 'get', 'head'], function (t) {
	Vo.headers[t] = {};
});
z.forEach(['post', 'put', 'patch'], function (t) {
	Vo.headers[t] = z.merge(Yp);
});
const ql = Vo,
	Gp = z.toObjectSet([
		'age',
		'authorization',
		'content-length',
		'content-type',
		'etag',
		'expires',
		'from',
		'host',
		'if-modified-since',
		'if-unmodified-since',
		'last-modified',
		'location',
		'max-forwards',
		'proxy-authorization',
		'referer',
		'retry-after',
		'user-agent',
	]),
	Jp = (e) => {
		const t = {};
		let n, r, o;
		return (
			e &&
				e
					.split(
						`
`,
					)
					.forEach(function (l) {
						(o = l.indexOf(':')),
							(n = l.substring(0, o).trim().toLowerCase()),
							(r = l.substring(o + 1).trim()),
							!(!n || (t[n] && Gp[n])) &&
								(n === 'set-cookie'
									? t[n]
										? t[n].push(r)
										: (t[n] = [r])
									: (t[n] = t[n] ? t[n] + ', ' + r : r));
					}),
			t
		);
	},
	au = Symbol('internals');
function An(e) {
	return e && String(e).trim().toLowerCase();
}
function Zr(e) {
	return e === !1 || e == null ? e : z.isArray(e) ? e.map(Zr) : String(e);
}
function Zp(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; (r = n.exec(e)); ) t[r[1]] = r[2];
	return t;
}
function qp(e) {
	return /^[-_a-zA-Z]+$/.test(e.trim());
}
function fi(e, t, n, r, o) {
	if (z.isFunction(r)) return r.call(this, t, n);
	if ((o && (t = n), !!z.isString(t))) {
		if (z.isString(r)) return t.indexOf(r) !== -1;
		if (z.isRegExp(r)) return r.test(t);
	}
}
function e0(e) {
	return e
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function t0(e, t) {
	const n = z.toCamelCase(' ' + t);
	['get', 'set', 'has'].forEach((r) => {
		Object.defineProperty(e, r + n, {
			value: function (o, i, l) {
				return this[r].call(this, t, o, i, l);
			},
			configurable: !0,
		});
	});
}
class Wo {
	constructor(t) {
		t && this.set(t);
	}
	set(t, n, r) {
		const o = this;
		function i(s, u, a) {
			const d = An(u);
			if (!d) throw new Error('header name must be a non-empty string');
			const h = z.findKey(o, d);
			(!h || o[h] === void 0 || a === !0 || (a === void 0 && o[h] !== !1)) &&
				(o[h || u] = Zr(s));
		}
		const l = (s, u) => z.forEach(s, (a, d) => i(a, d, u));
		return (
			z.isPlainObject(t) || t instanceof this.constructor
				? l(t, n)
				: z.isString(t) && (t = t.trim()) && !qp(t)
				? l(Jp(t), n)
				: t != null && i(n, t, r),
			this
		);
	}
	get(t, n) {
		if (((t = An(t)), t)) {
			const r = z.findKey(this, t);
			if (r) {
				const o = this[r];
				if (!n) return o;
				if (n === !0) return Zp(o);
				if (z.isFunction(n)) return n.call(this, o, r);
				if (z.isRegExp(n)) return n.exec(o);
				throw new TypeError('parser must be boolean|regexp|function');
			}
		}
	}
	has(t, n) {
		if (((t = An(t)), t)) {
			const r = z.findKey(this, t);
			return !!(r && this[r] !== void 0 && (!n || fi(this, this[r], r, n)));
		}
		return !1;
	}
	delete(t, n) {
		const r = this;
		let o = !1;
		function i(l) {
			if (((l = An(l)), l)) {
				const s = z.findKey(r, l);
				s && (!n || fi(r, r[s], s, n)) && (delete r[s], (o = !0));
			}
		}
		return z.isArray(t) ? t.forEach(i) : i(t), o;
	}
	clear(t) {
		const n = Object.keys(this);
		let r = n.length,
			o = !1;
		for (; r--; ) {
			const i = n[r];
			(!t || fi(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
		}
		return o;
	}
	normalize(t) {
		const n = this,
			r = {};
		return (
			z.forEach(this, (o, i) => {
				const l = z.findKey(r, i);
				if (l) {
					(n[l] = Zr(o)), delete n[i];
					return;
				}
				const s = t ? e0(i) : String(i).trim();
				s !== i && delete n[i], (n[s] = Zr(o)), (r[s] = !0);
			}),
			this
		);
	}
	concat(...t) {
		return this.constructor.concat(this, ...t);
	}
	toJSON(t) {
		const n = Object.create(null);
		return (
			z.forEach(this, (r, o) => {
				r != null && r !== !1 && (n[o] = t && z.isArray(r) ? r.join(', ') : r);
			}),
			n
		);
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
	}
	get [Symbol.toStringTag]() {
		return 'AxiosHeaders';
	}
	static from(t) {
		return t instanceof this ? t : new this(t);
	}
	static concat(t, ...n) {
		const r = new this(t);
		return n.forEach((o) => r.set(o)), r;
	}
	static accessor(t) {
		const r = (this[au] = this[au] = { accessors: {} }).accessors,
			o = this.prototype;
		function i(l) {
			const s = An(l);
			r[s] || (t0(o, l), (r[s] = !0));
		}
		return z.isArray(t) ? t.forEach(i) : i(t), this;
	}
}
Wo.accessor([
	'Content-Type',
	'Content-Length',
	'Accept',
	'Accept-Encoding',
	'User-Agent',
	'Authorization',
]);
z.freezeMethods(Wo.prototype);
z.freezeMethods(Wo);
const ut = Wo;
function di(e, t) {
	const n = this || ql,
		r = t || n,
		o = ut.from(r.headers);
	let i = r.data;
	return (
		z.forEach(e, function (s) {
			i = s.call(n, i, o.normalize(), t ? t.status : void 0);
		}),
		o.normalize(),
		i
	);
}
function Ga(e) {
	return !!(e && e.__CANCEL__);
}
function Er(e, t, n) {
	W.call(this, e ?? 'canceled', W.ERR_CANCELED, t, n),
		(this.name = 'CanceledError');
}
z.inherits(Er, W, { __CANCEL__: !0 });
function n0(e, t, n) {
	const r = n.config.validateStatus;
	!n.status || !r || r(n.status)
		? e(n)
		: t(
				new W(
					'Request failed with status code ' + n.status,
					[W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][
						Math.floor(n.status / 100) - 4
					],
					n.config,
					n.request,
					n,
				),
		  );
}
const r0 = tt.isStandardBrowserEnv
	? (function () {
			return {
				write: function (n, r, o, i, l, s) {
					const u = [];
					u.push(n + '=' + encodeURIComponent(r)),
						z.isNumber(o) && u.push('expires=' + new Date(o).toGMTString()),
						z.isString(i) && u.push('path=' + i),
						z.isString(l) && u.push('domain=' + l),
						s === !0 && u.push('secure'),
						(document.cookie = u.join('; '));
				},
				read: function (n) {
					const r = document.cookie.match(
						new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'),
					);
					return r ? decodeURIComponent(r[3]) : null;
				},
				remove: function (n) {
					this.write(n, '', Date.now() - 864e5);
				},
			};
	  })()
	: (function () {
			return {
				write: function () {},
				read: function () {
					return null;
				},
				remove: function () {},
			};
	  })();
function o0(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function i0(e, t) {
	return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Ja(e, t) {
	return e && !o0(t) ? i0(e, t) : t;
}
const l0 = tt.isStandardBrowserEnv
	? (function () {
			const t = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement('a');
			let r;
			function o(i) {
				let l = i;
				return (
					t && (n.setAttribute('href', l), (l = n.href)),
					n.setAttribute('href', l),
					{
						href: n.href,
						protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
						host: n.host,
						search: n.search ? n.search.replace(/^\?/, '') : '',
						hash: n.hash ? n.hash.replace(/^#/, '') : '',
						hostname: n.hostname,
						port: n.port,
						pathname:
							n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
					}
				);
			}
			return (
				(r = o(window.location.href)),
				function (l) {
					const s = z.isString(l) ? o(l) : l;
					return s.protocol === r.protocol && s.host === r.host;
				}
			);
	  })()
	: (function () {
			return function () {
				return !0;
			};
	  })();
function s0(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
	return (t && t[1]) || '';
}
function u0(e, t) {
	e = e || 10;
	const n = new Array(e),
		r = new Array(e);
	let o = 0,
		i = 0,
		l;
	return (
		(t = t !== void 0 ? t : 1e3),
		function (u) {
			const a = Date.now(),
				d = r[i];
			l || (l = a), (n[o] = u), (r[o] = a);
			let h = i,
				m = 0;
			for (; h !== o; ) (m += n[h++]), (h = h % e);
			if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - l < t)) return;
			const w = d && a - d;
			return w ? Math.round((m * 1e3) / w) : void 0;
		}
	);
}
function cu(e, t) {
	let n = 0;
	const r = u0(50, 250);
	return (o) => {
		const i = o.loaded,
			l = o.lengthComputable ? o.total : void 0,
			s = i - n,
			u = r(s),
			a = i <= l;
		n = i;
		const d = {
			loaded: i,
			total: l,
			progress: l ? i / l : void 0,
			bytes: s,
			rate: u || void 0,
			estimated: u && l && a ? (l - i) / u : void 0,
			event: o,
		};
		(d[t ? 'download' : 'upload'] = !0), e(d);
	};
}
const a0 = typeof XMLHttpRequest < 'u',
	c0 =
		a0 &&
		function (e) {
			return new Promise(function (n, r) {
				let o = e.data;
				const i = ut.from(e.headers).normalize(),
					l = e.responseType;
				let s;
				function u() {
					e.cancelToken && e.cancelToken.unsubscribe(s),
						e.signal && e.signal.removeEventListener('abort', s);
				}
				z.isFormData(o) &&
					(tt.isStandardBrowserEnv || tt.isStandardBrowserWebWorkerEnv) &&
					i.setContentType(!1);
				let a = new XMLHttpRequest();
				if (e.auth) {
					const w = e.auth.username || '',
						g = e.auth.password
							? unescape(encodeURIComponent(e.auth.password))
							: '';
					i.set('Authorization', 'Basic ' + btoa(w + ':' + g));
				}
				const d = Ja(e.baseURL, e.url);
				a.open(e.method.toUpperCase(), Ka(d, e.params, e.paramsSerializer), !0),
					(a.timeout = e.timeout);
				function h() {
					if (!a) return;
					const w = ut.from(
							'getAllResponseHeaders' in a && a.getAllResponseHeaders(),
						),
						v = {
							data:
								!l || l === 'text' || l === 'json'
									? a.responseText
									: a.response,
							status: a.status,
							statusText: a.statusText,
							headers: w,
							config: e,
							request: a,
						};
					n0(
						function (f) {
							n(f), u();
						},
						function (f) {
							r(f), u();
						},
						v,
					),
						(a = null);
				}
				if (
					('onloadend' in a
						? (a.onloadend = h)
						: (a.onreadystatechange = function () {
								!a ||
									a.readyState !== 4 ||
									(a.status === 0 &&
										!(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
									setTimeout(h);
						  }),
					(a.onabort = function () {
						a &&
							(r(new W('Request aborted', W.ECONNABORTED, e, a)), (a = null));
					}),
					(a.onerror = function () {
						r(new W('Network Error', W.ERR_NETWORK, e, a)), (a = null);
					}),
					(a.ontimeout = function () {
						let g = e.timeout
							? 'timeout of ' + e.timeout + 'ms exceeded'
							: 'timeout exceeded';
						const v = e.transitional || Ya;
						e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
							r(
								new W(
									g,
									v.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
									e,
									a,
								),
							),
							(a = null);
					}),
					tt.isStandardBrowserEnv)
				) {
					const w =
						(e.withCredentials || l0(d)) &&
						e.xsrfCookieName &&
						r0.read(e.xsrfCookieName);
					w && i.set(e.xsrfHeaderName, w);
				}
				o === void 0 && i.setContentType(null),
					'setRequestHeader' in a &&
						z.forEach(i.toJSON(), function (g, v) {
							a.setRequestHeader(v, g);
						}),
					z.isUndefined(e.withCredentials) ||
						(a.withCredentials = !!e.withCredentials),
					l && l !== 'json' && (a.responseType = e.responseType),
					typeof e.onDownloadProgress == 'function' &&
						a.addEventListener('progress', cu(e.onDownloadProgress, !0)),
					typeof e.onUploadProgress == 'function' &&
						a.upload &&
						a.upload.addEventListener('progress', cu(e.onUploadProgress)),
					(e.cancelToken || e.signal) &&
						((s = (w) => {
							a &&
								(r(!w || w.type ? new Er(null, e, a) : w),
								a.abort(),
								(a = null));
						}),
						e.cancelToken && e.cancelToken.subscribe(s),
						e.signal &&
							(e.signal.aborted ? s() : e.signal.addEventListener('abort', s)));
				const m = s0(d);
				if (m && tt.protocols.indexOf(m) === -1) {
					r(new W('Unsupported protocol ' + m + ':', W.ERR_BAD_REQUEST, e));
					return;
				}
				a.send(o || null);
			});
		},
	qr = { http: Ip, xhr: c0 };
z.forEach(qr, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, 'name', { value: t });
		} catch {}
		Object.defineProperty(e, 'adapterName', { value: t });
	}
});
const f0 = {
	getAdapter: (e) => {
		e = z.isArray(e) ? e : [e];
		const { length: t } = e;
		let n, r;
		for (
			let o = 0;
			o < t && ((n = e[o]), !(r = z.isString(n) ? qr[n.toLowerCase()] : n));
			o++
		);
		if (!r)
			throw r === !1
				? new W(
						`Adapter ${n} is not supported by the environment`,
						'ERR_NOT_SUPPORT',
				  )
				: new Error(
						z.hasOwnProp(qr, n)
							? `Adapter '${n}' is not available in the build`
							: `Unknown adapter '${n}'`,
				  );
		if (!z.isFunction(r)) throw new TypeError('adapter is not a function');
		return r;
	},
	adapters: qr,
};
function pi(e) {
	if (
		(e.cancelToken && e.cancelToken.throwIfRequested(),
		e.signal && e.signal.aborted)
	)
		throw new Er(null, e);
}
function fu(e) {
	return (
		pi(e),
		(e.headers = ut.from(e.headers)),
		(e.data = di.call(e, e.transformRequest)),
		['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
			e.headers.setContentType('application/x-www-form-urlencoded', !1),
		f0
			.getAdapter(e.adapter || ql.adapter)(e)
			.then(
				function (r) {
					return (
						pi(e),
						(r.data = di.call(e, e.transformResponse, r)),
						(r.headers = ut.from(r.headers)),
						r
					);
				},
				function (r) {
					return (
						Ga(r) ||
							(pi(e),
							r &&
								r.response &&
								((r.response.data = di.call(
									e,
									e.transformResponse,
									r.response,
								)),
								(r.response.headers = ut.from(r.response.headers)))),
						Promise.reject(r)
					);
				},
			)
	);
}
const du = (e) => (e instanceof ut ? e.toJSON() : e);
function xn(e, t) {
	t = t || {};
	const n = {};
	function r(a, d, h) {
		return z.isPlainObject(a) && z.isPlainObject(d)
			? z.merge.call({ caseless: h }, a, d)
			: z.isPlainObject(d)
			? z.merge({}, d)
			: z.isArray(d)
			? d.slice()
			: d;
	}
	function o(a, d, h) {
		if (z.isUndefined(d)) {
			if (!z.isUndefined(a)) return r(void 0, a, h);
		} else return r(a, d, h);
	}
	function i(a, d) {
		if (!z.isUndefined(d)) return r(void 0, d);
	}
	function l(a, d) {
		if (z.isUndefined(d)) {
			if (!z.isUndefined(a)) return r(void 0, a);
		} else return r(void 0, d);
	}
	function s(a, d, h) {
		if (h in t) return r(a, d);
		if (h in e) return r(void 0, a);
	}
	const u = {
		url: i,
		method: i,
		data: i,
		baseURL: l,
		transformRequest: l,
		transformResponse: l,
		paramsSerializer: l,
		timeout: l,
		timeoutMessage: l,
		withCredentials: l,
		adapter: l,
		responseType: l,
		xsrfCookieName: l,
		xsrfHeaderName: l,
		onUploadProgress: l,
		onDownloadProgress: l,
		decompress: l,
		maxContentLength: l,
		maxBodyLength: l,
		beforeRedirect: l,
		transport: l,
		httpAgent: l,
		httpsAgent: l,
		cancelToken: l,
		socketPath: l,
		responseEncoding: l,
		validateStatus: s,
		headers: (a, d) => o(du(a), du(d), !0),
	};
	return (
		z.forEach(Object.keys(e).concat(Object.keys(t)), function (d) {
			const h = u[d] || o,
				m = h(e[d], t[d], d);
			(z.isUndefined(m) && h !== s) || (n[d] = m);
		}),
		n
	);
}
const Za = '1.3.4',
	es = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
	(e, t) => {
		es[e] = function (r) {
			return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
		};
	},
);
const pu = {};
es.transitional = function (t, n, r) {
	function o(i, l) {
		return (
			'[Axios v' +
			Za +
			"] Transitional option '" +
			i +
			"'" +
			l +
			(r ? '. ' + r : '')
		);
	}
	return (i, l, s) => {
		if (t === !1)
			throw new W(
				o(l, ' has been removed' + (n ? ' in ' + n : '')),
				W.ERR_DEPRECATED,
			);
		return (
			n &&
				!pu[l] &&
				((pu[l] = !0),
				console.warn(
					o(
						l,
						' has been deprecated since v' +
							n +
							' and will be removed in the near future',
					),
				)),
			t ? t(i, l, s) : !0
		);
	};
};
function d0(e, t, n) {
	if (typeof e != 'object')
		throw new W('options must be an object', W.ERR_BAD_OPTION_VALUE);
	const r = Object.keys(e);
	let o = r.length;
	for (; o-- > 0; ) {
		const i = r[o],
			l = t[i];
		if (l) {
			const s = e[i],
				u = s === void 0 || l(s, i, e);
			if (u !== !0)
				throw new W('option ' + i + ' must be ' + u, W.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new W('Unknown option ' + i, W.ERR_BAD_OPTION);
	}
}
const Wi = { assertOptions: d0, validators: es },
	gt = Wi.validators;
class ho {
	constructor(t) {
		(this.defaults = t),
			(this.interceptors = { request: new uu(), response: new uu() });
	}
	request(t, n) {
		typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
			(n = xn(this.defaults, n));
		const { transitional: r, paramsSerializer: o, headers: i } = n;
		r !== void 0 &&
			Wi.assertOptions(
				r,
				{
					silentJSONParsing: gt.transitional(gt.boolean),
					forcedJSONParsing: gt.transitional(gt.boolean),
					clarifyTimeoutError: gt.transitional(gt.boolean),
				},
				!1,
			),
			o !== void 0 &&
				Wi.assertOptions(
					o,
					{ encode: gt.function, serialize: gt.function },
					!0,
				),
			(n.method = (n.method || this.defaults.method || 'get').toLowerCase());
		let l;
		(l = i && z.merge(i.common, i[n.method])),
			l &&
				z.forEach(
					['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
					(g) => {
						delete i[g];
					},
				),
			(n.headers = ut.concat(l, i));
		const s = [];
		let u = !0;
		this.interceptors.request.forEach(function (v) {
			(typeof v.runWhen == 'function' && v.runWhen(n) === !1) ||
				((u = u && v.synchronous), s.unshift(v.fulfilled, v.rejected));
		});
		const a = [];
		this.interceptors.response.forEach(function (v) {
			a.push(v.fulfilled, v.rejected);
		});
		let d,
			h = 0,
			m;
		if (!u) {
			const g = [fu.bind(this), void 0];
			for (
				g.unshift.apply(g, s),
					g.push.apply(g, a),
					m = g.length,
					d = Promise.resolve(n);
				h < m;

			)
				d = d.then(g[h++], g[h++]);
			return d;
		}
		m = s.length;
		let w = n;
		for (h = 0; h < m; ) {
			const g = s[h++],
				v = s[h++];
			try {
				w = g(w);
			} catch (D) {
				v.call(this, D);
				break;
			}
		}
		try {
			d = fu.call(this, w);
		} catch (g) {
			return Promise.reject(g);
		}
		for (h = 0, m = a.length; h < m; ) d = d.then(a[h++], a[h++]);
		return d;
	}
	getUri(t) {
		t = xn(this.defaults, t);
		const n = Ja(t.baseURL, t.url);
		return Ka(n, t.params, t.paramsSerializer);
	}
}
z.forEach(['delete', 'get', 'head', 'options'], function (t) {
	ho.prototype[t] = function (n, r) {
		return this.request(
			xn(r || {}, { method: t, url: n, data: (r || {}).data }),
		);
	};
});
z.forEach(['post', 'put', 'patch'], function (t) {
	function n(r) {
		return function (i, l, s) {
			return this.request(
				xn(s || {}, {
					method: t,
					headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
					url: i,
					data: l,
				}),
			);
		};
	}
	(ho.prototype[t] = n()), (ho.prototype[t + 'Form'] = n(!0));
});
const eo = ho;
class ts {
	constructor(t) {
		if (typeof t != 'function')
			throw new TypeError('executor must be a function.');
		let n;
		this.promise = new Promise(function (i) {
			n = i;
		});
		const r = this;
		this.promise.then((o) => {
			if (!r._listeners) return;
			let i = r._listeners.length;
			for (; i-- > 0; ) r._listeners[i](o);
			r._listeners = null;
		}),
			(this.promise.then = (o) => {
				let i;
				const l = new Promise((s) => {
					r.subscribe(s), (i = s);
				}).then(o);
				return (
					(l.cancel = function () {
						r.unsubscribe(i);
					}),
					l
				);
			}),
			t(function (i, l, s) {
				r.reason || ((r.reason = new Er(i, l, s)), n(r.reason));
			});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(t) {
		if (this.reason) {
			t(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
	}
	unsubscribe(t) {
		if (!this._listeners) return;
		const n = this._listeners.indexOf(t);
		n !== -1 && this._listeners.splice(n, 1);
	}
	static source() {
		let t;
		return {
			token: new ts(function (o) {
				t = o;
			}),
			cancel: t,
		};
	}
}
const p0 = ts;
function h0(e) {
	return function (n) {
		return e.apply(null, n);
	};
}
function m0(e) {
	return z.isObject(e) && e.isAxiosError === !0;
}
const bi = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
};
Object.entries(bi).forEach(([e, t]) => {
	bi[t] = e;
});
const y0 = bi;
function qa(e) {
	const t = new eo(e),
		n = Da(eo.prototype.request, t);
	return (
		z.extend(n, eo.prototype, t, { allOwnKeys: !0 }),
		z.extend(n, t, null, { allOwnKeys: !0 }),
		(n.create = function (o) {
			return qa(xn(e, o));
		}),
		n
	);
}
const le = qa(ql);
le.Axios = eo;
le.CanceledError = Er;
le.CancelToken = p0;
le.isCancel = Ga;
le.VERSION = Za;
le.toFormData = Ho;
le.AxiosError = W;
le.Cancel = le.CanceledError;
le.all = function (t) {
	return Promise.all(t);
};
le.spread = h0;
le.isAxiosError = m0;
le.mergeConfig = xn;
le.AxiosHeaders = ut;
le.formToJSON = (e) => Xa(z.isHTMLForm(e) ? new FormData(e) : e);
le.HttpStatusCode = y0;
le.default = le;
const ec = le,
	g0 = 'https://dev.cozy-cost.just.engineer',
	tc = ec.create({ baseURL: g0 });
ec.interceptors.response.use(
	function (e) {
		return e;
	},
	function (e) {
		return (
			e.response.status === 404 && console.log(404),
			console.log(e),
			Promise.reject(e)
		);
	},
);
const Nr = ({ size: e = 16 }) =>
		$('svg', {
			className: 'cozy-animate-spin',
			xmlns: 'http://www.w3.org/2000/svg',
			fill: 'none',
			viewBox: '0 0 24 24',
			height: e,
			width: e,
			children: [
				y('circle', {
					cx: '12',
					cy: '12',
					r: '10',
					stroke: 'currentColor',
					strokeWidth: '4',
					style: { opacity: 0.25 },
				}),
				y('path', {
					fill: 'currentColor',
					d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
					style: { opacity: 0.75 },
				}),
			],
		}),
	v0 = ({ size: e = 48 }) =>
		$('svg', {
			width: e,
			height: e,
			viewBox: '0 0 48 48',
			fill: 'none',
			xmlns: 'http://www.w3.org/2000/svg',
			children: [
				y('path', {
					d: 'M25.06 40.84H12.42C6.1 40.84 4 36.64 4 32.42V15.58C4 9.26 6.1 7.16 12.42 7.16H25.06C31.38 7.16 33.48 9.26 33.48 15.58V32.42C33.48 38.74 31.36 40.84 25.06 40.84Z',
					stroke: '#6B778C',
					strokeWidth: '2',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}),
				y('path', {
					d: 'M39.0405 34.2L33.4805 30.3V17.68L39.0405 13.78C41.7605 11.88 44.0005 13.04 44.0005 16.38V31.62C44.0005 34.96 41.7605 36.12 39.0405 34.2Z',
					stroke: '#6B778C',
					strokeWidth: '2',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}),
				y('path', {
					d: 'M23 22C24.6569 22 26 20.6569 26 19C26 17.3431 24.6569 16 23 16C21.3431 16 20 17.3431 20 19C20 20.6569 21.3431 22 23 22Z',
					stroke: '#6B778C',
					strokeWidth: '2',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}),
				y('path', {
					d: 'M33 34L25.6037 29.2391C24.4185 28.4768 22.7082 28.5631 21.643 29.4405L21.148 29.8576C19.9778 30.8213 18.0874 30.8213 16.9172 29.8576L10.6762 24.7228C9.50595 23.7591 7.61562 23.7591 6.44542 24.7228L4 26.7364',
					stroke: '#6B778C',
					strokeWidth: '2',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}),
			],
		}),
	w0 = ({ size: e = 20 }) =>
		y('svg', {
			width: e,
			height: e,
			viewBox: '0 0 20 20',
			fill: 'none',
			xmlns: 'http://www.w3.org/2000/svg',
			children: y('path', {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				d: 'M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM6.26035 6.26035C6.60748 5.91322 7.1703 5.91322 7.51743 6.26035L10 8.74222L12.4826 6.26035C12.803 5.93992 13.3072 5.91527 13.6559 6.18641L13.7397 6.26035C14.0868 6.60748 14.0868 7.1703 13.7397 7.51743L11.2578 10L13.7397 12.4826C14.0601 12.803 14.0847 13.3072 13.8136 13.6559L13.7397 13.7397C13.3925 14.0868 12.8297 14.0868 12.4826 13.7397L10 11.2578L7.51743 13.7397C7.197 14.0601 6.69279 14.0847 6.34409 13.8136L6.26035 13.7397C5.91322 13.3925 5.91322 12.8297 6.26035 12.4826L8.74222 10L6.26035 7.51743C5.93992 7.197 5.91527 6.69279 6.18641 6.34409L6.26035 6.26035Z',
				fill: 'white',
			}),
		}),
	On = ({ width: e = 44, height: t = 14 }) =>
		$('svg', {
			width: e,
			height: t,
			viewBox: '0 0 44 14',
			fill: 'none',
			xmlns: 'http://www.w3.org/2000/svg',
			children: [
				y('path', {
					d: 'M6.17688 2.5396C6.17688 2.97263 5.95795 3.18834 5.5209 3.18834C5.33429 3.18834 5.18079 3.1484 5.06123 3.0693C4.94086 2.9902 4.81968 2.81843 4.69689 2.55478C4.55309 2.24319 4.3996 2.03945 4.23641 1.94118C4.07403 1.84371 3.86156 1.79418 3.60062 1.79418C2.95515 1.79418 2.46316 2.05943 2.12467 2.58993C1.78537 3.12043 1.61652 3.89462 1.61652 4.91248C1.61652 5.76176 1.8298 6.44646 2.25635 6.96578C2.6829 7.4851 3.25405 7.74555 3.96901 7.74555C4.7801 7.74555 5.42234 7.49468 5.89736 6.99374L5.93695 6.97776C5.98542 6.97776 6.03147 7.00812 6.07671 7.06884C6.12195 7.12956 6.14538 7.19668 6.14538 7.27098C6.14538 7.37644 5.98946 7.5586 5.67763 7.81666C5.36579 8.07552 5.02407 8.27046 4.65326 8.40229C4.28246 8.53412 3.88903 8.60043 3.47298 8.60043C2.51809 8.60043 1.70054 8.25369 1.02032 7.5602C0.340108 6.86751 0 5.99026 0 4.93005C0 3.86985 0.356265 3.01098 1.06799 2.32228C1.78052 1.63359 2.62473 1.29004 3.60062 1.29004C4.32043 1.29004 4.93036 1.41228 5.42881 1.65756C5.92726 1.90283 6.17688 2.19685 6.17688 2.5396Z',
					fill: '#E94C89',
				}),
				y('path', {
					d: 'M13.6431 4.99317C13.6431 6.04299 13.2974 6.90666 12.6058 7.58497C11.9143 8.26327 11.0184 8.60203 9.9181 8.60203C8.81779 8.60203 7.92107 8.26168 7.22712 7.58097C6.53317 6.90027 6.18579 6.0382 6.18579 4.99317C6.18579 3.94815 6.53559 3.05013 7.2352 2.34625C7.9348 1.64158 8.8291 1.29004 9.9181 1.29004C11.0071 1.29004 11.907 1.64078 12.6018 2.34226C13.2958 3.04373 13.6431 3.92737 13.6431 4.99317ZM12.0266 4.97719C12.0266 4.01206 11.8384 3.24028 11.4627 2.66264C11.0863 2.08499 10.5708 1.79577 9.91406 1.79577C9.25727 1.79577 8.74832 2.08579 8.37024 2.66583C7.99135 3.24667 7.80232 4.01686 7.80232 4.97639C7.80232 5.93593 7.98893 6.69014 8.36216 7.2518C8.73539 7.81347 9.25323 8.0947 9.91406 8.0947C10.5749 8.0947 11.0927 7.81666 11.466 7.25979C11.8392 6.70372 12.0258 5.94232 12.0258 4.97639',
					fill: '#E94C89',
				}),
				y('path', {
					d: 'M19.6771 6.82163C19.362 7.62058 19.2901 7.83869 19.1624 8.3644C18.7941 8.30128 17.5669 8.26932 16.0789 8.26932C14.4995 8.26932 13.5527 8.30048 13.2384 8.3644C13.1366 8.3644 13.0865 8.30687 13.0865 8.19182L13.1108 8.12152L17.4708 2.13658H15.5344C15.1983 2.13658 14.8768 2.26042 14.5706 2.50809C14.2636 2.75657 14.2062 2.86123 14.0762 2.99066C13.9841 3.08094 13.8968 3.11849 13.8282 3.11689C13.6949 3.1153 13.6278 3.07455 13.6278 2.99066C13.98 2.08705 14.0519 1.87373 14.1424 1.46387C14.409 1.52698 15.2088 1.55894 16.5426 1.55894C18.0945 1.55894 19.0122 1.52778 19.2949 1.46387C19.3798 1.46387 19.4234 1.52139 19.4234 1.63644L19.4072 1.71474L15.0706 7.6757H17.4708C17.8069 7.6757 18.4289 7.55187 18.7383 7.30339C18.8829 7.18595 19.1826 6.82402 19.1447 6.86557C19.257 6.74253 19.3329 6.69539 19.4767 6.69539C19.61 6.69539 19.6771 6.73774 19.6771 6.82163Z',
					fill: '#E94C89',
				}),
				y('path', {
					d: 'M20.7627 14L23.1096 8.26915L20.9453 3.31566C20.7474 2.8323 20.5058 2.47676 20.3814 2.32896C20.2069 2.12203 20.0987 2.01417 19.8676 1.94706C19.7852 1.92309 19.7052 1.83601 19.7085 1.7609C19.7141 1.61629 19.7489 1.54359 19.8296 1.54359C20.0365 1.54359 19.9904 1.55957 20.2885 1.59073C20.6222 1.62269 20.9146 1.63787 21.1675 1.63787C21.4203 1.63787 21.7233 1.62189 22.0916 1.59073C22.4301 1.55877 22.2597 1.54359 22.4786 1.54359C22.5634 1.54359 22.6345 1.58993 22.6345 1.71297C22.6345 1.81124 22.5675 1.88075 22.4851 1.91031C22.1732 2.02136 22.0916 2.20672 22.0916 2.45599C22.0916 2.63096 22.1652 2.91778 22.3114 3.31566L23.7502 6.72878L25.1284 3.31566C25.2601 3.01526 25.3263 2.76678 25.3263 2.57184C25.3263 2.23948 25.1542 2.06291 24.7285 1.92229C24.6566 1.89832 24.5694 1.84879 24.5734 1.7649C24.579 1.66343 24.6162 1.54279 24.701 1.54279C24.9256 1.54279 25.0258 1.55877 25.3013 1.58993C25.5711 1.62189 25.8159 1.63707 26.0364 1.63707C26.1463 1.63707 26.3248 1.62428 26.5728 1.59712C26.9138 1.56037 26.7401 1.54199 26.9493 1.54199C27.0374 1.54199 27.1093 1.57874 27.1093 1.72415C27.1093 1.81044 27.0471 1.88394 26.9469 1.94626C26.8136 2.02935 26.5858 2.19154 26.5009 2.30339C26.3434 2.50952 26.156 2.80513 25.9209 3.31486L21.51 13.9992',
					fill: '#E94C89',
				}),
				y('path', {
					d: 'M32.4411 2.5404C32.4411 2.97343 32.2222 3.18914 31.7851 3.18914C31.5985 3.18914 31.445 3.1492 31.3255 3.0701C31.2051 2.991 31.0839 2.81923 30.9611 2.55558C30.8173 2.24399 30.6638 2.04025 30.5006 1.94198C30.3383 1.84451 30.1258 1.79498 29.8649 1.79498C29.2194 1.79498 28.7274 2.06023 28.3889 2.59073C28.0496 3.12123 27.8808 3.89542 27.8808 4.91328C27.8808 5.76256 28.094 6.44726 28.5206 6.96658C28.9471 7.4859 29.5183 7.74635 30.2324 7.74635C31.0435 7.74635 31.6858 7.49548 32.1608 6.99454L32.2012 6.97856C32.2497 6.97856 32.2957 7.00892 32.3409 7.06964C32.3862 7.13036 32.4088 7.19748 32.4088 7.27178C32.4088 7.37724 32.2529 7.5594 31.9402 7.81746C31.6284 8.07632 31.2867 8.27126 30.9167 8.40309C30.5459 8.53492 30.1525 8.60123 29.7364 8.60123C28.7815 8.60123 27.964 8.25449 27.2838 7.561C26.6035 6.86751 26.2634 5.99026 26.2634 4.93006C26.2634 3.86985 26.6189 3.01098 27.3314 2.32228C28.0431 1.63359 28.8874 1.29004 29.8641 1.29004C30.5839 1.29004 31.1938 1.41228 31.6922 1.65756C32.1907 1.90283 32.4403 2.19685 32.4403 2.5396',
					fill: '#E94C89',
				}),
				y('path', {
					d: 'M39.9074 4.99317C39.9074 6.04299 39.5616 6.90666 38.8701 7.58497C38.1786 8.26327 37.2827 8.60203 36.1832 8.60203C35.0837 8.60203 34.1862 8.26168 33.4914 7.58097C32.7975 6.90027 32.4501 6.0382 32.4501 4.99317C32.4501 3.94815 32.7999 3.05013 33.4995 2.34625C34.1991 1.64158 35.0934 1.29004 36.1824 1.29004C37.2714 1.29004 38.1713 1.64078 38.8653 2.34226C39.5592 3.04373 39.9066 3.92737 39.9066 4.99317M38.2901 4.97719C38.2901 4.01206 38.1018 3.24028 37.7262 2.66264C37.3505 2.08499 36.8343 1.79577 36.1775 1.79577C35.5207 1.79577 35.0118 2.08579 34.6329 2.66583C34.254 3.24667 34.0642 4.01686 34.0642 4.97639C34.0642 5.93593 34.2516 6.69014 34.624 7.2518C34.9972 7.81347 35.5151 8.0947 36.1767 8.0947C36.8384 8.0947 37.3554 7.81666 37.7286 7.25979C38.1018 6.70372 38.2885 5.94232 38.2885 4.97639',
					fill: '#E94C89',
				}),
				y('path', {
					d: 'M43.445 2.06546C43.445 2.34989 43.3756 2.4929 43.2374 2.4929L42.0499 2.42978V6.22799C42.0499 7.22029 42.2575 7.71564 42.9724 7.71564C43.4152 7.71564 43.3691 7.61257 43.7318 7.40724C43.7747 7.40724 43.8126 7.43521 43.8482 7.49033C43.8829 7.54546 43.8999 7.60458 43.8999 7.6685C43.8999 7.80033 44.0009 7.97849 43.6042 8.2022C43.2075 8.4259 43.0613 8.53856 42.5661 8.53856C41.9594 8.53856 41.4747 8.3556 41.1128 7.98888C40.7508 7.62216 40.5699 7.138 40.5699 6.53639V6.46528L40.6022 2.61993C40.6022 2.47213 40.5384 2.39863 40.4099 2.39863H39.8016C39.6845 2.39863 39.6255 2.33071 39.6255 2.19649C39.6255 2.09263 39.6732 2.01513 39.7693 1.9632C40.5085 1.52857 41.1515 0.917372 41.6993 0.12801C41.7582 0.0433209 41.8326 0.000976562 41.923 0.000976562C42.0717 0.000976562 42.146 0.0433209 42.146 0.12801L42.0822 1.63962H43.2382C43.3764 1.63962 43.4459 1.78184 43.4459 2.06706',
					fill: '#E94C89',
				}),
			],
		}),
	mo = ({ size: e = 24 }) =>
		y('svg', {
			width: e,
			height: e,
			viewBox: '0 0 24 24',
			fill: 'none',
			xmlns: 'http://www.w3.org/2000/svg',
			children: y('path', {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				d: 'M8.25854 5.26169C7.94498 5.57905 7.91673 6.07531 8.17328 6.42527L8.17883 6.43284L8.252 6.51863L13.5191 11.8499L8.25854 17.1746C7.94499 17.4919 7.91673 17.9882 8.17328 18.3382L8.17883 18.3457L8.25201 18.4315L8.25854 18.4381C8.5721 18.7555 9.0624 18.7841 9.40817 18.5244L9.41565 18.5188L9.50041 18.4447L15.392 12.4817C15.7056 12.1643 15.7338 11.6681 15.4773 11.3181L15.4717 11.3105L15.3985 11.2247L9.50695 5.26169C9.16221 4.91277 8.60328 4.91277 8.25854 5.26169Z',
				fill: 'currentColor',
			}),
		}),
	z0 = ({ images: e, handleSetImages: t, handleRemoveImage: n }) =>
		$('div', {
			style: { color: '#6B778C' },
			children: [
				y('p', {
					className: 'cozy-text-caption-1 cozy-font-medium',
					children: 'Would you like to add photos or videos',
				}),
				$('div', {
					className: 'cozy-mt-2 cozy-flex cozy-flex-wrap cozy-gap-4',
					children: [
						(e == null ? void 0 : e.length) > 0
							? y(Zt, {
									children: e.map((r) =>
										$(
											'div',
											{
												className: 'cozy-relative',
												children: [
													y('div', {
														className:
															'cozy-flex cozy-flex-col cozy-items-center cozy-justify-center',
														style: {
															position: 'absolute',
															zIndex: 10,
															right: 6,
															top: 6,
														},
														onClick: n(r.id),
														children: y('i', { children: y(w0, {}) }),
													}),
													y('img', {
														src: URL.createObjectURL(r.image),
														alt: 'avatar',
														style: {
															maxWidth: 106,
															minWidth: 106,
															aspectRatio: 1,
															overflow: 'hidden',
															objectFit: 'cover',
															borderRadius: '.5rem',
														},
													}),
												],
											},
											r.id,
										),
									),
							  })
							: null,
						y('div', {
							className: `cozy-w-full ${e.length === 5 && 'cozy-hidden'}`,
							children: $('label', {
								htmlFor: 'avatar',
								children: [
									y('div', {
										className:
											'cozy-flex cozy-w-full cozy-items-center cozy-justify-center cozy-p-6 cozy-text-center',
										style: {
											outline: '1px dashed #C1C7D0',
											borderRadius: '.5rem',
										},
										children: $('div', {
											className:
												'cozy-relative cozy-flex cozy-flex-col cozy-items-center cozy-gap-2',
											children: [
												y('i', { children: y(v0, {}) }),
												$('div', {
													children: [
														y('p', {
															className: 'cozy-font-semibold',
															children: 'Drag file here or browse.',
														}),
														y('p', {
															className: 'cozy-text-body-2',
															children: 'Supported files: jpg, png, mp4',
														}),
													],
												}),
											],
										}),
									}),
									y('input', {
										id: 'avatar',
										type: 'file',
										accept: 'image/*',
										className: 'cozy-hidden',
										onChange: t,
									}),
								],
							}),
						}),
					],
				}),
			],
		}),
	nc = ({ size: e = 28 }) =>
		y('svg', {
			width: e,
			height: e,
			viewBox: '0 0 20 20',
			xmlns: 'http://www.w3.org/2000/svg',
			children: y('path', {
				d: 'M10 4L11.3471 8.1459H15.7063L12.1796 10.7082L13.5267 14.8541L10 12.2918L6.47329 14.8541L7.82037 10.7082L4.29366 8.1459H8.65292L10 4Z',
				fill: 'currentColor',
			}),
		}),
	S0 = ({ handleClick: e }) => {
		const [t, n] = U.useState(null),
			r = U.useRef(!0),
			o = U.useCallback(
				(a) =>
					r.current
						? 'cozy-bg-white cozy-text-light-neutral-300'
						: a <= t
						? Bi[t]
						: 'cozy-bg-white cozy-text-light-neutral-300',
				[t, r],
			),
			i = U.useCallback(
				(a) => (a <= t ? `cozy-group-hover:${Bi[t]}` : ''),
				[t],
			),
			l = (a) => () => {
				(r.current = !1), e(a), n(a);
			},
			s = (a) => () => {
				(r.current = !1), n(a);
			},
			u = (a) => () => {
				(r.current = !1), n(a);
			};
		return y('div', {
			className: 'cozy-group cozy-flex cozy-w-fit cozy-items-center cozy-gap-2',
			children: Ma.map((a, d) =>
				y(
					'button',
					{
						onClick: l(d),
						onMouseOver: s(d),
						onMouseOut: u(d),
						className: 'cozy-cozy-pr-1.5 last-of-type:cozy-pr-0',
						children: y('div', {
							className: `cozy-h-10 cozy-w-10 cozy-rounded-sm cozy-border ${o(
								d,
							)} cozy-duration-75 hover:cozy-scale-105 ${i(d)}`,
							children: y('i', { children: y(nc, { size: 40 }) }),
						}),
					},
					d,
				),
			),
		});
	},
	x0 = () => {
		const [e, t] = U.useState(''),
			[n, r] = U.useState(0),
			[o, i] = U.useState(!1),
			[l, s] = U.useState(!1),
			[u, a] = U.useState(!1),
			d = {
				star: '',
				review: '',
				images: [],
				date: '',
				title: '',
				name: '',
				email: '',
			};
		function h(_, E) {
			switch (E.type) {
				case 'INPUT_STAR':
					return { ..._, star: E.payload };
				case 'INPUT_REVIEW':
					return { ..._, review: E.payload };
				case 'INPUT_IMAGES':
					return { ..._, images: [..._.images, E.payload] };
				case 'REMOVE_IMAGE':
					return { ..._, images: _.images.filter((x) => x.id !== E.payload) };
				case 'INPUT_EXPERIENCE_DATE':
					return { ..._, date: E.payload };
				case 'INPUT_TITLE':
					return { ..._, title: E.payload };
				case 'INPUT_NAME':
					return { ..._, name: E.payload };
				case 'INPUT_EMAIL':
					return { ..._, email: E.payload };
				case 'RESET':
					return d;
			}
			throw Error('Unknown action: ' + E.type);
		}
		const [m, w] = U.useReducer(h, d),
			{
				title: g,
				review: v,
				name: D,
				email: f,
				date: c,
				images: p,
				star: S,
			} = m,
			N = [
				{
					id: 0,
					type: 'date',
					name: 'date',
					label: 'Date of experience',
					action: 'INPUT_EXPERIENCE_DATE',
					value: c,
					placeholder: '',
					required: !1,
				},
				{
					id: 1,
					type: 'text',
					name: 'title',
					label: 'Give your review a title',
					action: 'INPUT_TITLE',
					value: g,
					placeholder: 'e.g. This service is awesome!',
					required: !0,
				},
				{
					id: 2,
					type: 'text',
					name: 'name',
					label: 'Your name',
					action: 'INPUT_NAME',
					value: D,
					placeholder: 'e.g. John',
					required: !0,
				},
				{
					id: 3,
					type: 'text',
					name: 'name',
					label: 'Your email',
					action: 'INPUT_EMAIL',
					value: f,
					placeholder: 'e.g. john@gmail.com',
					required: !0,
				},
			],
			R = (_) => {
				r(_), i(!0), Yl(_ + 1, t), w({ type: 'INPUT_STAR', payload: _ });
			},
			T = (_) => (E) => {
				w({ type: _, payload: E.target.value });
			},
			[I, j] = U.useState(0),
			A = (_) => {
				_.preventDefault(),
					w({
						type: 'INPUT_IMAGES',
						payload: { image: _.target.files[0], id: I },
					}),
					j(I + 1);
			},
			se = (_) => () => {
				w({ type: 'REMOVE_IMAGE', payload: _ });
			},
			Ge = () => {
				window.location.reload(!1), w({ type: 'RESET' });
			},
			F = qd();
		let L;
		F && F.search
			? (L = new URLSearchParams(F == null ? void 0 : F.search).get(
					'businessUuid',
			  ))
			: (L = F.pathname.replace('/profile/', ''));
		async function P(_) {
			var E, x;
			if ((_.preventDefault(), !L)) return null;
			try {
				const C = await tc.post(`/api/v1/business/reviews/${L}`, {
					title: m == null ? void 0 : m.title,
					content: m == null ? void 0 : m.review,
					star: (m == null ? void 0 : m.star) + 1,
					created_by: m == null ? void 0 : m.name,
					email: m == null ? void 0 : m.email,
					date: m == null ? void 0 : m.date,
				});
				s(!0),
					console.log('🚀 ~ file: usePostAxios.jsx:13 ~ postData ~ res:', C);
			} catch (C) {
				console.log(
					111,
					(x =
						(E = C == null ? void 0 : C.response) == null ? void 0 : E.data) ==
						null
						? void 0
						: x.message,
				),
					a(C.response.data.message);
			}
		}
		return y(Zt, {
			children: $('div', {
				className: 'cozy-rounded-2xl cozy-bg-light-neutral-50 cozy-p-6',
				children: [
					l
						? null
						: $('div', {
								className:
									'cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-space-y-3 cozy-text-center',
								children: [
									y('h4', {
										className:
											'cozy-text-title-1 cozy-font-semibold cozy-text-light-neutral-800',
										children: 'Write a review',
									}),
									y(S0, { rating: n, handleClick: R, message: e }),
								],
						  }),
					u
						? y('p', {
								className: 'cozy-rounded-md',
								style: { background: '#FBECEC', color: '#C43C3C' },
								children: rp(u),
						  })
						: null,
					o &&
						y('form', {
							onSubmit: P,
							children: l
								? $('div', {
										children: [
											y('p', { children: 'Thank you for your feedback!' }),
											y('button', {
												onClick: Ge,
												className: 'cozy-text-title-2 cozy-font-semibold',
												style: { color: '#4F3CC8', marginTop: '0.5rem' },
												children: 'Submit another review',
											}),
										],
								  })
								: $('div', {
										className: 'cozy-flex cozy-flex-col cozy-gap-8',
										style: { marginTop: '3.25rem' },
										children: [
											$('label', {
												htmlFor: 'review',
												className:
													'cozy-text-caption-1 cozy-font-medium cozy-text-light-neutral-700',
												children: [
													'Tell us more about your experience',
													y('textarea', {
														id: 'review',
														type: 'text',
														onChange: T('INPUT_REVIEW'),
														value: v,
														className:
															'cozy-font cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-400 cozy-p-4 placeholder:cozy-text-light-neutral-600 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2',
														rows: 5,
														placeholder: np(S),
														required: !0,
													}),
												],
											}),
											y(z0, {
												images: p,
												handleSetImages: A,
												handleRemoveImage: se,
											}),
											N.map((_) =>
												$(
													'label',
													{
														className:
															'cozy-text-caption-1 cozy-font-medium cozy-text-light-neutral-700',
														htmlFor: _.name,
														children: [
															_.label,
															y('input', {
																type: _.type,
																id: _.name,
																name: _.name,
																onChange: T(_.action),
																value: _.value,
																placeholder: _.placeholder,
																className:
																	'cozy-font cozy-mt-1 cozy-w-full cozy-rounded cozy-border cozy-border-light-neutral-300 cozy-p-3 cozy-text-body-2 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2',
																required: _.required,
															}),
														],
													},
													_.id,
												),
											),
											y('button', {
												type: 'submit',
												className:
													'cozy-flex cozy-border cozy-border-branding-primary-500 cozy-bg-branding-primary-500 cozy-font-semibold cozy-text-light-neutral-25 hover:cozy-cursor-pointer hover:cozy-border-branding-primary-600 hover:cozy-bg-branding-primary-600 focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2 active:cozy-bg-branding-primary-700 disabled:cozy-border-light-neutral-300 disabled:cozy-bg-light-neutral-300 disabled:cozy-text-light-neutral-500',
												style: {
													padding: '0.75rem 1.5rem',
													minWidth: '150px',
													alignSelf: 'center',
													borderRadius: '8px',
													marginTop: '1.25rem',
												},
												children: 'Submit review',
											}),
										],
								  }),
						}),
				],
			}),
		});
	},
	k0 = () =>
		$('button', {
			className:
				'cozy-flex cozy-items-center cozy-justify-center cozy-gap-2 cozy-border-2 cozy-border-branding-primary-400 cozy-p-2 cozy-text-center cozy-text-body-1 cozy-text-light-neutral-800 cozy-duration-150 hover:cozy-cursor-pointer hover:cozy-bg-branding-primary-100 hover:cozy-shadow-sm focus:cozy-outline-none focus:cozy-ring-2 focus:cozy-ring-branding-primary-400 focus:cozy-ring-offset-2',
			style: { borderRadius: '8px', alignItems: 'end' },
			children: [
				y('span', { children: 'Review us on' }),
				y('i', { children: y(On, { width: 50, height: 20 }) }),
			],
		}),
	Mn = (e) => {
		const [t, n] = U.useState(''),
			[r, o] = U.useState(''),
			[i, l] = U.useState(!0);
		U.useEffect(() => {
			e && s();
		}, [e]);
		async function s() {
			if (!e) return null;
			try {
				l(!0);
				const u = await tc.get(
					`/api/v1/business/widgets/${e}/stats?type=review`,
				);
				n(u.data);
			} catch (u) {
				console.log(u), o(u);
			} finally {
				l(!1);
			}
		}
		return { data: t, error: r, isLoading: i };
	},
	rc = ({
		withoutMessage: e,
		messageLarge: t,
		rating: n,
		numberOfReviews: r,
	}) => {
		const [o, i] = U.useState('');
		return (
			U.useEffect(() => {
				Yl(n, i);
			}, [n]),
			$(Zt, {
				children: [
					!e &&
						y('p', {
							className: `${
								t ? 'cozy-text-heading-3' : ''
							} text-light-neutral-800 cozy-font-medium`,
							children: o,
						}),
					y('div', {
						className: 'cozy-flex cozy-gap-1.5',
						children: y(oc, { rating: n }),
					}),
					t &&
						$('a', {
							href: '/',
							className:
								'cozy-text-body-2 cozy-underline cozy-underline-offset-2',
							children: [r, ' reviews'],
						}),
				],
			})
		);
	},
	oc = ({ rating: e, small: t }) => {
		const [n, r] = U.useState(0);
		U.useEffect(() => {
			r(e);
		}, [e]);
		const o = U.useCallback(
			(i) => (i <= n ? Bi[Math.round(n) - 1] : 'cozy-bg-zinc-200'),
			[n],
		);
		return y(Zt, {
			children: Ma.map((i, l) =>
				y(
					'button',
					{
						children: y('div', {
							className: `${o(l)} cozy-duration-75 hover:cozy-scale-105`,
							style: { color: 'white', borderRadius: t ? '2px' : '4px' },
							children: y('i', { children: y(nc, { size: t ? 20 : 28 }) }),
						}),
					},
					l,
				),
			),
		});
	},
	ns = ({ withoutMessage: e, rating: t }) => {
		const [n, r] = U.useState('');
		return (
			U.useEffect(() => {
				Yl(t, r);
			}, [t]),
			$('div', {
				className:
					'cozy-flex cozy-w-full cozy-items-center cozy-gap-2 md:cozy-w-auto',
				children: [
					!e &&
						y('p', {
							className:
								'cozy-hidden cozy-font-medium cozy-text-light-neutral-800 md:cozy-block',
							children: n,
						}),
					y('div', {
						className: 'cozy-flex cozy-gap-1',
						children: y(oc, { rating: t, small: !0 }),
					}),
				],
			})
		);
	},
	C0 = ({ id: e }) => {
		var o, i, l, s, u;
		const { data: t, error: n, isLoading: r } = Mn(`${e}`);
		return n
			? y('p', { className: 'cozy-opacity-60', children: ' Stats not found' })
			: r
			? y('i', {
					className: 'cozy-text-branding-primary-500',
					children: y(Nr, {}),
			  })
			: $('div', {
					className:
						'cozy-flex cozy-w-full cozy-flex-wrap cozy-items-center cozy-gap-2 cozy-p-2 cozy-py-4',
					children: [
						$('div', {
							className:
								'cozy-flex cozy-flex-wrap cozy-items-center cozy-gap-2',
							children: [
								y(ns, {
									rating: ge(
										(o = t == null ? void 0 : t.data) == null
											? void 0
											: o.cozy_score,
										0,
									),
									numberOfReviews: ge(
										(l =
											(i = t == null ? void 0 : t.data) == null
												? void 0
												: i.review_overview) == null
											? void 0
											: l.total,
										0,
									),
								}),
								$('p', {
									className:
										'cozy-hidden cozy-w-fit cozy-min-w-fit cozy-text-light-neutral-800 md:cozy-block',
									children: [
										ge(
											(u =
												(s = t == null ? void 0 : t.data) == null
													? void 0
													: s.review_overview) == null
												? void 0
												: u.cozy_score,
											0,
										),
										' ',
										'out of 5',
									],
								}),
							],
						}),
						y('a', {
							href: '/',
							children: y('i', { children: y(On, { width: 50, height: 20 }) }),
						}),
					],
			  });
	},
	E0 = () =>
		$('p', {
			className:
				'cozy-flex cozy-justify-center cozy-gap-2 cozy-font-medium cozy-text-light-neutral-800',
			style: { alignItems: 'end' },
			children: [
				'See our reviews on',
				y('span', {
					children: y('i', { children: y(On, { width: 50, height: 20 }) }),
				}),
			],
		}),
	N0 = ({ withScore: e, id: t }) => {
		var i, l, s, u, a;
		const { data: n, error: r, isLoading: o } = Mn(`${t}`);
		return $(Zt, {
			children: [
				r &&
					y('p', {
						className: 'cozy-opacity-60',
						children: ' Stats not found',
					}),
				o &&
					y('i', {
						className: 'cozy-text-branding-primary-500',
						children: y(Nr, {}),
					}),
				n &&
					$('div', {
						className: 'cozy-flex cozy-flex-wrap cozy-items-center cozy-gap-2',
						children: [
							y(ns, {
								rating: ge(
									(i = n == null ? void 0 : n.data) == null
										? void 0
										: i.cozy_score,
									0,
								),
								numberOfReviews: ge(
									(s =
										(l = n == null ? void 0 : n.data) == null
											? void 0
											: l.review_overview) == null
										? void 0
										: s.total,
									0,
								),
							}),
							e &&
								$('p', {
									className:
										'cozy-hidden cozy-w-fit cozy-min-w-fit cozy-text-light-neutral-800 md:cozy-block',
									children: [
										ge(
											(a =
												(u = n == null ? void 0 : n.data) == null
													? void 0
													: u.review_overview) == null
												? void 0
												: a.cozy_score,
											0,
										),
										' ',
										'out of 5',
									],
								}),
						],
					}),
			],
		});
	},
	_0 = ({ id: e }) =>
		$('div', {
			className: 'cozy-flex cozy-items-center cozy-gap-2 cozy-p-2 cozy-py-4',
			children: [
				y(N0, { id: e }),
				y('div', {
					children: y('a', {
						href: '/',
						children: y('i', { children: y(On, { width: 50, height: 20 }) }),
					}),
				}),
			],
		}),
	ic = ({ intent: e, id: t }) => {
		var i, l, s, u;
		const { data: n, error: r, isLoading: o } = Mn(`${t}`);
		return $(Zt, {
			children: [
				r &&
					y('p', {
						className: 'cozy-opacity-60 ',
						children: ' Rating not found',
					}),
				o &&
					y('i', {
						className: 'cozy-text-branding-primary-500',
						children: y(Nr, {}),
					}),
				n &&
					$('div', {
						className: `cozy-flex cozy-flex-col cozy-gap-3 cozy-p-3 ${
							e === 'center'
								? 'cozy-items-center cozy-justify-center cozy-text-center'
								: ''
						}`,
						children: [
							y('i', { children: y(On, { width: 100, height: 40 }) }),
							y(rc, {
								withoutMessage: !0,
								rating: ge(
									(i = n == null ? void 0 : n.data) == null
										? void 0
										: i.cozy_score,
								),
								numberOfReviews: ge(
									(l = n == null ? void 0 : n.data) == null
										? void 0
										: l.review_overview.total,
									0,
								),
							}),
							$('div', {
								className: 'cozy-flex cozy-gap-1.5 cozy-text-body-2',
								children: [
									$('p', {
										children: [
											'Cozy score:',
											' ',
											y('span', {
												className: 'cozy-font-medium',
												children: ge(
													(s = n == null ? void 0 : n.data) == null
														? void 0
														: s.cozy_score,
												),
											}),
										],
									}),
									'•',
									$('a', {
										href: '/',
										className: 'cozy-underline cozy-underline-offset-2',
										children: [
											y('span', {
												className: 'cozy-font-medium',
												children: ge(
													(u = n == null ? void 0 : n.data) == null
														? void 0
														: u.review_overview.total,
													0,
												),
											}),
											' ',
											'reviews',
										],
									}),
								],
							}),
						],
					}),
			],
		});
	},
	P0 = ({ id: e }) => y(ic, { id: e });
var Qi = {},
	R0 = {
		get exports() {
			return Qi;
		},
		set exports(e) {
			Qi = e;
		},
	};
(function (e, t) {
	(function (n, r) {
		e.exports = r();
	})(za, function () {
		var n = 1e3,
			r = 6e4,
			o = 36e5,
			i = 'millisecond',
			l = 'second',
			s = 'minute',
			u = 'hour',
			a = 'day',
			d = 'week',
			h = 'month',
			m = 'quarter',
			w = 'year',
			g = 'date',
			v = 'Invalid Date',
			D =
				/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
			f =
				/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
			c = {
				name: 'en',
				weekdays:
					'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
				months:
					'January_February_March_April_May_June_July_August_September_October_November_December'.split(
						'_',
					),
				ordinal: function (F) {
					var L = ['th', 'st', 'nd', 'rd'],
						P = F % 100;
					return '[' + F + (L[(P - 20) % 10] || L[P] || L[0]) + ']';
				},
			},
			p = function (F, L, P) {
				var _ = String(F);
				return !_ || _.length >= L
					? F
					: '' + Array(L + 1 - _.length).join(P) + F;
			},
			S = {
				s: p,
				z: function (F) {
					var L = -F.utcOffset(),
						P = Math.abs(L),
						_ = Math.floor(P / 60),
						E = P % 60;
					return (L <= 0 ? '+' : '-') + p(_, 2, '0') + ':' + p(E, 2, '0');
				},
				m: function F(L, P) {
					if (L.date() < P.date()) return -F(P, L);
					var _ = 12 * (P.year() - L.year()) + (P.month() - L.month()),
						E = L.clone().add(_, h),
						x = P - E < 0,
						C = L.clone().add(_ + (x ? -1 : 1), h);
					return +(-(_ + (P - E) / (x ? E - C : C - E)) || 0);
				},
				a: function (F) {
					return F < 0 ? Math.ceil(F) || 0 : Math.floor(F);
				},
				p: function (F) {
					return (
						{ M: h, y: w, w: d, d: a, D: g, h: u, m: s, s: l, ms: i, Q: m }[
							F
						] ||
						String(F || '')
							.toLowerCase()
							.replace(/s$/, '')
					);
				},
				u: function (F) {
					return F === void 0;
				},
			},
			N = 'en',
			R = {};
		R[N] = c;
		var T = function (F) {
				return F instanceof se;
			},
			I = function F(L, P, _) {
				var E;
				if (!L) return N;
				if (typeof L == 'string') {
					var x = L.toLowerCase();
					R[x] && (E = x), P && ((R[x] = P), (E = x));
					var C = L.split('-');
					if (!E && C.length > 1) return F(C[0]);
				} else {
					var O = L.name;
					(R[O] = L), (E = O);
				}
				return !_ && E && (N = E), E || (!_ && N);
			},
			j = function (F, L) {
				if (T(F)) return F.clone();
				var P = typeof L == 'object' ? L : {};
				return (P.date = F), (P.args = arguments), new se(P);
			},
			A = S;
		(A.l = I),
			(A.i = T),
			(A.w = function (F, L) {
				return j(F, { locale: L.$L, utc: L.$u, x: L.$x, $offset: L.$offset });
			});
		var se = (function () {
				function F(P) {
					(this.$L = I(P.locale, null, !0)), this.parse(P);
				}
				var L = F.prototype;
				return (
					(L.parse = function (P) {
						(this.$d = (function (_) {
							var E = _.date,
								x = _.utc;
							if (E === null) return new Date(NaN);
							if (A.u(E)) return new Date();
							if (E instanceof Date) return new Date(E);
							if (typeof E == 'string' && !/Z$/i.test(E)) {
								var C = E.match(D);
								if (C) {
									var O = C[2] - 1 || 0,
										B = (C[7] || '0').substring(0, 3);
									return x
										? new Date(
												Date.UTC(
													C[1],
													O,
													C[3] || 1,
													C[4] || 0,
													C[5] || 0,
													C[6] || 0,
													B,
												),
										  )
										: new Date(
												C[1],
												O,
												C[3] || 1,
												C[4] || 0,
												C[5] || 0,
												C[6] || 0,
												B,
										  );
								}
							}
							return new Date(E);
						})(P)),
							(this.$x = P.x || {}),
							this.init();
					}),
					(L.init = function () {
						var P = this.$d;
						(this.$y = P.getFullYear()),
							(this.$M = P.getMonth()),
							(this.$D = P.getDate()),
							(this.$W = P.getDay()),
							(this.$H = P.getHours()),
							(this.$m = P.getMinutes()),
							(this.$s = P.getSeconds()),
							(this.$ms = P.getMilliseconds());
					}),
					(L.$utils = function () {
						return A;
					}),
					(L.isValid = function () {
						return this.$d.toString() !== v;
					}),
					(L.isSame = function (P, _) {
						var E = j(P);
						return this.startOf(_) <= E && E <= this.endOf(_);
					}),
					(L.isAfter = function (P, _) {
						return j(P) < this.startOf(_);
					}),
					(L.isBefore = function (P, _) {
						return this.endOf(_) < j(P);
					}),
					(L.$g = function (P, _, E) {
						return A.u(P) ? this[_] : this.set(E, P);
					}),
					(L.unix = function () {
						return Math.floor(this.valueOf() / 1e3);
					}),
					(L.valueOf = function () {
						return this.$d.getTime();
					}),
					(L.startOf = function (P, _) {
						var E = this,
							x = !!A.u(_) || _,
							C = A.p(P),
							O = function (tn, ke) {
								var yt = A.w(
									E.$u ? Date.UTC(E.$y, ke, tn) : new Date(E.$y, ke, tn),
									E,
								);
								return x ? yt : yt.endOf(a);
							},
							B = function (tn, ke) {
								return A.w(
									E.toDate()[tn].apply(
										E.toDate('s'),
										(x ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ke),
									),
									E,
								);
							},
							H = this.$W,
							te = this.$M,
							pe = this.$D,
							Re = 'set' + (this.$u ? 'UTC' : '');
						switch (C) {
							case w:
								return x ? O(1, 0) : O(31, 11);
							case h:
								return x ? O(1, te) : O(0, te + 1);
							case d:
								var Le = this.$locale().weekStart || 0,
									Je = (H < Le ? H + 7 : H) - Le;
								return O(x ? pe - Je : pe + (6 - Je), te);
							case a:
							case g:
								return B(Re + 'Hours', 0);
							case u:
								return B(Re + 'Minutes', 1);
							case s:
								return B(Re + 'Seconds', 2);
							case l:
								return B(Re + 'Milliseconds', 3);
							default:
								return this.clone();
						}
					}),
					(L.endOf = function (P) {
						return this.startOf(P, !1);
					}),
					(L.$set = function (P, _) {
						var E,
							x = A.p(P),
							C = 'set' + (this.$u ? 'UTC' : ''),
							O = ((E = {}),
							(E[a] = C + 'Date'),
							(E[g] = C + 'Date'),
							(E[h] = C + 'Month'),
							(E[w] = C + 'FullYear'),
							(E[u] = C + 'Hours'),
							(E[s] = C + 'Minutes'),
							(E[l] = C + 'Seconds'),
							(E[i] = C + 'Milliseconds'),
							E)[x],
							B = x === a ? this.$D + (_ - this.$W) : _;
						if (x === h || x === w) {
							var H = this.clone().set(g, 1);
							H.$d[O](B),
								H.init(),
								(this.$d = H.set(g, Math.min(this.$D, H.daysInMonth())).$d);
						} else O && this.$d[O](B);
						return this.init(), this;
					}),
					(L.set = function (P, _) {
						return this.clone().$set(P, _);
					}),
					(L.get = function (P) {
						return this[A.p(P)]();
					}),
					(L.add = function (P, _) {
						var E,
							x = this;
						P = Number(P);
						var C = A.p(_),
							O = function (te) {
								var pe = j(x);
								return A.w(pe.date(pe.date() + Math.round(te * P)), x);
							};
						if (C === h) return this.set(h, this.$M + P);
						if (C === w) return this.set(w, this.$y + P);
						if (C === a) return O(1);
						if (C === d) return O(7);
						var B = ((E = {}), (E[s] = r), (E[u] = o), (E[l] = n), E)[C] || 1,
							H = this.$d.getTime() + P * B;
						return A.w(H, this);
					}),
					(L.subtract = function (P, _) {
						return this.add(-1 * P, _);
					}),
					(L.format = function (P) {
						var _ = this,
							E = this.$locale();
						if (!this.isValid()) return E.invalidDate || v;
						var x = P || 'YYYY-MM-DDTHH:mm:ssZ',
							C = A.z(this),
							O = this.$H,
							B = this.$m,
							H = this.$M,
							te = E.weekdays,
							pe = E.months,
							Re = function (ke, yt, li, Tr) {
								return (ke && (ke[yt] || ke(_, x))) || li[yt].slice(0, Tr);
							},
							Le = function (ke) {
								return A.s(O % 12 || 12, ke, '0');
							},
							Je =
								E.meridiem ||
								function (ke, yt, li) {
									var Tr = ke < 12 ? 'AM' : 'PM';
									return li ? Tr.toLowerCase() : Tr;
								},
							tn = {
								YY: String(this.$y).slice(-2),
								YYYY: this.$y,
								M: H + 1,
								MM: A.s(H + 1, 2, '0'),
								MMM: Re(E.monthsShort, H, pe, 3),
								MMMM: Re(pe, H),
								D: this.$D,
								DD: A.s(this.$D, 2, '0'),
								d: String(this.$W),
								dd: Re(E.weekdaysMin, this.$W, te, 2),
								ddd: Re(E.weekdaysShort, this.$W, te, 3),
								dddd: te[this.$W],
								H: String(O),
								HH: A.s(O, 2, '0'),
								h: Le(1),
								hh: Le(2),
								a: Je(O, B, !0),
								A: Je(O, B, !1),
								m: String(B),
								mm: A.s(B, 2, '0'),
								s: String(this.$s),
								ss: A.s(this.$s, 2, '0'),
								SSS: A.s(this.$ms, 3, '0'),
								Z: C,
							};
						return x.replace(f, function (ke, yt) {
							return yt || tn[ke] || C.replace(':', '');
						});
					}),
					(L.utcOffset = function () {
						return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
					}),
					(L.diff = function (P, _, E) {
						var x,
							C = A.p(_),
							O = j(P),
							B = (O.utcOffset() - this.utcOffset()) * r,
							H = this - O,
							te = A.m(this, O);
						return (
							(te =
								((x = {}),
								(x[w] = te / 12),
								(x[h] = te),
								(x[m] = te / 3),
								(x[d] = (H - B) / 6048e5),
								(x[a] = (H - B) / 864e5),
								(x[u] = H / o),
								(x[s] = H / r),
								(x[l] = H / n),
								x)[C] || H),
							E ? te : A.a(te)
						);
					}),
					(L.daysInMonth = function () {
						return this.endOf(h).$D;
					}),
					(L.$locale = function () {
						return R[this.$L];
					}),
					(L.locale = function (P, _) {
						if (!P) return this.$L;
						var E = this.clone(),
							x = I(P, _, !0);
						return x && (E.$L = x), E;
					}),
					(L.clone = function () {
						return A.w(this.$d, this);
					}),
					(L.toDate = function () {
						return new Date(this.valueOf());
					}),
					(L.toJSON = function () {
						return this.isValid() ? this.toISOString() : null;
					}),
					(L.toISOString = function () {
						return this.$d.toISOString();
					}),
					(L.toString = function () {
						return this.$d.toUTCString();
					}),
					F
				);
			})(),
			Ge = se.prototype;
		return (
			(j.prototype = Ge),
			[
				['$ms', i],
				['$s', l],
				['$m', s],
				['$H', u],
				['$W', a],
				['$M', h],
				['$y', w],
				['$D', g],
			].forEach(function (F) {
				Ge[F[1]] = function (L) {
					return this.$g(L, F[0], F[1]);
				};
			}),
			(j.extend = function (F, L) {
				return F.$i || (F(L, se, j), (F.$i = !0)), j;
			}),
			(j.locale = I),
			(j.isDayjs = T),
			(j.unix = function (F) {
				return j(1e3 * F);
			}),
			(j.en = R[N]),
			(j.Ls = R),
			(j.p = {}),
			j
		);
	});
})(R0);
const lc = Qi;
var Ki = {},
	L0 = {
		get exports() {
			return Ki;
		},
		set exports(e) {
			Ki = e;
		},
	};
(function (e, t) {
	(function (n, r) {
		e.exports = r();
	})(za, function () {
		return function (n, r, o) {
			n = n || {};
			var i = r.prototype,
				l = {
					future: 'in %s',
					past: '%s ago',
					s: 'a few seconds',
					m: 'a minute',
					mm: '%d minutes',
					h: 'an hour',
					hh: '%d hours',
					d: 'a day',
					dd: '%d days',
					M: 'a month',
					MM: '%d months',
					y: 'a year',
					yy: '%d years',
				};
			function s(a, d, h, m) {
				return i.fromToBase(a, d, h, m);
			}
			(o.en.relativeTime = l),
				(i.fromToBase = function (a, d, h, m, w) {
					for (
						var g,
							v,
							D,
							f = h.$locale().relativeTime || l,
							c = n.thresholds || [
								{ l: 's', r: 44, d: 'second' },
								{ l: 'm', r: 89 },
								{ l: 'mm', r: 44, d: 'minute' },
								{ l: 'h', r: 89 },
								{ l: 'hh', r: 21, d: 'hour' },
								{ l: 'd', r: 35 },
								{ l: 'dd', r: 25, d: 'day' },
								{ l: 'M', r: 45 },
								{ l: 'MM', r: 10, d: 'month' },
								{ l: 'y', r: 17 },
								{ l: 'yy', d: 'year' },
							],
							p = c.length,
							S = 0;
						S < p;
						S += 1
					) {
						var N = c[S];
						N.d && (g = m ? o(a).diff(h, N.d, !0) : h.diff(a, N.d, !0));
						var R = (n.rounding || Math.round)(Math.abs(g));
						if (((D = g > 0), R <= N.r || !N.r)) {
							R <= 1 && S > 0 && (N = c[S - 1]);
							var T = f[N.l];
							w && (R = w('' + R)),
								(v =
									typeof T == 'string' ? T.replace('%d', R) : T(R, d, N.l, D));
							break;
						}
					}
					if (d) return v;
					var I = D ? f.future : f.past;
					return typeof I == 'function' ? I(v) : I.replace('%s', v);
				}),
				(i.to = function (a, d) {
					return s(a, d, this, !0);
				}),
				(i.from = function (a, d) {
					return s(a, d, this);
				});
			var u = function (a) {
				return a.$u ? o.utc() : o();
			};
			(i.toNow = function (a) {
				return this.to(u(this), a);
			}),
				(i.fromNow = function (a) {
					return this.from(u(this), a);
				});
		};
	});
})(L0);
const T0 = Ki,
	O0 = ({ ...e }) =>
		y('svg', {
			width: '24',
			height: '24',
			viewBox: '0 0 24 24',
			fill: 'none',
			xmlns: 'http://www.w3.org/2000/svg',
			...e,
			children: y('path', {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				d: 'M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75ZM16.662 9.34951C16.9931 9.01841 16.9931 8.4816 16.662 8.1505C16.3309 7.8194 15.7941 7.8194 15.463 8.1505L9.96875 13.6447L7.7245 11.4005C7.39341 11.0694 6.85659 11.0694 6.5255 11.4005C6.1944 11.7316 6.1944 12.2684 6.5255 12.5995L9.36925 15.4433C9.70034 15.7744 10.2372 15.7744 10.5683 15.4433L16.662 9.34951Z',
				fill: '#9199A7',
			}),
		});
lc.extend(T0);
const sc = ({ item: e, postsPerSlide: t, hasBackground: n }) => {
		var r;
		return y('div', {
			className: 'cozy-relative cozy-px-2',
			style: { minWidth: `calc(100% / ${t})` },
			children: y('div', {
				className: `${n ? 'cozy-rounded-xl cozy-bg-light-neutral-100' : ''}`,
				children: $('div', {
					className: 'cozy-flex cozy-flex-col cozy-gap-3 cozy-p-4',
					children: [
						$('div', {
							className:
								'cozy-flex cozy-flex-wrap cozy-gap-3 sm:cozy-items-center',
							children: [
								y(ns, {
									withoutMessage: !0,
									rating: ge(e == null ? void 0 : e.star),
								}),
								((r = e == null ? void 0 : e.created_by) == null
									? void 0
									: r.is_verified) &&
									$('div', {
										className: 'cozy-flex cozy-gap-0.5 cozy-opacity-60',
										children: [
											y(O0, { className: 'cozy-h-5 cozy-w-5' }),
											y('p', {
												className: 'cozy-text-body-2',
												children: 'Verified',
											}),
										],
									}),
							],
						}),
						y('a', {
							href: '/',
							children: y('h4', {
								className:
									'cozy-text-title-2 cozy-font-medium cozy-text-light-neutral-800 cozy-line-clamp-2',
								children: ge(e == null ? void 0 : e.title),
							}),
						}),
						y('p', {
							className: 'cozy-line-clamp-5',
							children: ge(e == null ? void 0 : e.content),
						}),
						$('div', {
							className:
								'cozy-font cozy-flex cozy-items-end cozy-gap-2 cozy-text-body-2 cozy-text-light-neutral-700',
							children: [
								$('p', {
									className: 'cozy-font-medium',
									style: { textTransform: 'capitalize' },
									children: [ge(e == null ? void 0 : e.created_by), ','],
								}),
								y('p', {
									className: 'cozy-opacity-80',
									children: lc(e == null ? void 0 : e.created_at).fromNow(),
								}),
							],
						}),
					],
				}),
			}),
		});
	},
	M0 = ({ slides: e }) => {
		const t = e == null ? void 0 : e.length,
			[n, r] = U.useState(0),
			[o] = U.useState(1);
		async function i() {
			n === t - o ? r(0) : r((s) => s + 1);
		}
		async function l() {
			r(n === 0 ? t - o : (s) => s - 1);
		}
		return $('div', {
			className: 'cozy-relative cozy-flex',
			children: [
				y('button', {
					className:
						'cozy-self-stretch disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40',
					style: { transform: 'rotate(180deg)' },
					onClick: po(() => l(), 200),
					disabled: n === 0,
					children: y('i', { children: y(mo, {}) }),
				}),
				y('div', {
					className: 'cozy-overflow-hidden',
					children: y('div', {
						className:
							'cozy-flex cozy-items-center cozy-transition-transform cozy-duration-500 cozy-ease-in-out',
						style: { transform: `translateX(-${n * (100 / o)}%)` },
						children:
							e == null
								? void 0
								: e.map((s) => y(sc, { item: s, postsPerSlide: o }, s.id)),
					}),
				}),
				y('button', {
					className:
						'cozy-self-stretch disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40',
					onClick: po(() => i(), 200),
					disabled: n === Math.ceil(t / o) - 1,
					children: y('i', { children: y(mo, {}) }),
				}),
			],
		});
	},
	uc = ({ id: e }) => {
		var o, i, l, s, u;
		const { data: t, error: n } = Mn(`${e}`);
		let r;
		return (
			((i = (o = t == null ? void 0 : t.data) == null ? void 0 : o.reviews) ==
			null
				? void 0
				: i.length) > 0
				? (r =
						(s =
							(l = t == null ? void 0 : t.data) == null ? void 0 : l.reviews) ==
						null
							? void 0
							: s.filter((a) => a.reply_id === 0))
				: (r = (u = t == null ? void 0 : t.data) == null ? void 0 : u.reviews),
			$('div', {
				children: [
					n &&
						y('p', {
							className: 'cozy-opacity-60',
							children: ' Reviews not found',
						}),
					t && y(M0, { slides: r }),
				],
			})
		);
	},
	D0 = ({ id: e }) =>
		$('div', {
			className:
				'cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-gap-3',
			children: [
				y(ic, { intent: 'center', id: e }),
				y('div', {
					className: 'cozy-mx-auto cozy-w-full lg:cozy-max-w-3xl',
					children: y(uc, { id: e }),
				}),
			],
		}),
	I0 = ({ id: e }) => {
		var o, i, l;
		const { data: t, error: n, isLoading: r } = Mn(`${e}`);
		return n
			? y('p', { className: 'cozy-opacity-60', children: ' Stats not found' })
			: r
			? y('i', {
					className: 'cozy-text-branding-primary-500',
					children: y(Nr, {}),
			  })
			: $('div', {
					className:
						'cozy-flex cozy-flex-col cozy-items-center cozy-gap-4 sm:cozy-flex-row',
					children: [
						$('div', {
							className:
								'cozy-flex cozy-flex-col cozy-items-center cozy-justify-center cozy-gap-3 cozy-self-stretch cozy-p-3 cozy-px-3',
							children: [
								y(rc, {
									messageLarge: !0,
									rating: ge(
										(o = t == null ? void 0 : t.data) == null
											? void 0
											: o.cozy_score,
										0,
									),
									numberOfReviews: ge(
										(l =
											(i = t == null ? void 0 : t.data) == null
												? void 0
												: i.review_overview) == null
											? void 0
											: l.total,
										0,
									),
								}),
								y(On, { width: 100, height: 40 }),
							],
						}),
						y('div', {
							className: 'cozy-w-full sm:cozy-max-w-sm',
							children: y(uc, { id: e }),
						}),
					],
			  });
	};
function A0() {
	const [e, t] = U.useState({ width: void 0, height: void 0 });
	return (
		U.useEffect(() => {
			function n() {
				t({ width: window.innerWidth, height: window.innerHeight });
			}
			return (
				window.addEventListener('resize', n),
				n(),
				() => window.removeEventListener('resize', n)
			);
		}, []),
		e
	);
}
const F0 = ({ slides: e }) => {
		const t = e == null ? void 0 : e.length,
			[n, r] = U.useState(0),
			[o, i] = U.useState(null),
			l = A0();
		U.useEffect(() => {
			l.width < 640 ? i(1) : i(2);
		}, [l]);
		async function s() {
			r((a) => a + 1);
		}
		async function u() {
			r((a) => a - 1);
		}
		return $('div', {
			className: 'cozy-relative cozy-mx-auto cozy-flex cozy-w-full',
			children: [
				y('button', {
					className:
						'cozy-self-stretch disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40',
					style: { transform: 'rotate(180deg)' },
					onClick: po(() => u(), 200),
					disabled: n === 0,
					children: y('i', { children: y(mo, {}) }),
				}),
				y('div', {
					className: 'cozy-overflow-hidden',
					children: y('div', {
						className:
							'cozy-flex cozy-items-center cozy-transition-transform cozy-duration-500 cozy-ease-in-out',
						style: { transform: `translateX(-${n * (100 / o)}%)` },
						children:
							e == null
								? void 0
								: e.map((a) =>
										y(
											sc,
											{ item: a, postsPerSlide: o, hasBackground: !0 },
											a.id,
										),
								  ),
					}),
				}),
				y('button', {
					className:
						'cozy-self-stretch disabled:cozy-cursor-not-allowed disabled:cozy-opacity-40',
					onClick: po(() => s(), 200),
					disabled: n === t - o,
					children: y('i', { children: y(mo, {}) }),
				}),
			],
		});
	},
	U0 = ({ id: e }) => {
		var i, l, s, u, a;
		const { data: t, error: n, isLoading: r } = Mn(`${e}`);
		let o;
		return (
			((l = (i = t == null ? void 0 : t.data) == null ? void 0 : i.reviews) ==
			null
				? void 0
				: l.length) > 0
				? (o =
						(u =
							(s = t == null ? void 0 : t.data) == null ? void 0 : s.reviews) ==
						null
							? void 0
							: u.filter((d) => d.reply_id === 0))
				: (o = (a = t == null ? void 0 : t.data) == null ? void 0 : a.reviews),
			$('div', {
				children: [
					n &&
						y('p', {
							className: 'cozy-opacity-60',
							children: ' Reviews not found',
						}),
					r &&
						y('i', {
							className: 'cozy-text-branding-primary-500',
							children: y(Nr, {}),
						}),
					t && y(F0, { slides: o }),
				],
			})
		);
	},
	$0 = ({ intent: e, id: t }) =>
		y(Zt, {
			children: [
				{ id: 1, intent: 'evaluate', component: y(x0, { id: t }) },
				{ id: 2, intent: 'review-button', component: y(k0, { id: t }) },
				{ id: 3, intent: 'horizontal', component: y(C0, { id: t }) },
				{ id: 4, intent: 'micro-review-count', component: y(E0, { id: t }) },
				{ id: 5, intent: 'micro-star', component: y(_0, { id: t }) },
				{ id: 6, intent: 'mini', component: y(P0, { id: t }) },
				{ id: 7, intent: 'review-carousel', component: y(I0, { id: t }) },
				{ id: 8, intent: 'mini-carousel', component: y(D0, { id: t }) },
				{ id: 9, intent: 'review-slider', component: y(U0, { id: t }) },
			]
				.filter((r) => r.intent === e)
				.map((r) =>
					y('div', { className: 'cozy-w-full', children: r.component }, r.id),
				),
		});
var Yi = {},
	j0 = {
		get exports() {
			return Yi;
		},
		set exports(e) {
			Yi = e;
		},
	},
	Ie = {},
	Xi = {},
	B0 = {
		get exports() {
			return Xi;
		},
		set exports(e) {
			Xi = e;
		},
	},
	ac = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(x, C) {
		var O = x.length;
		x.push(C);
		e: for (; 0 < O; ) {
			var B = (O - 1) >>> 1,
				H = x[B];
			if (0 < o(H, C)) (x[B] = C), (x[O] = H), (O = B);
			else break e;
		}
	}
	function n(x) {
		return x.length === 0 ? null : x[0];
	}
	function r(x) {
		if (x.length === 0) return null;
		var C = x[0],
			O = x.pop();
		if (O !== C) {
			x[0] = O;
			e: for (var B = 0, H = x.length, te = H >>> 1; B < te; ) {
				var pe = 2 * (B + 1) - 1,
					Re = x[pe],
					Le = pe + 1,
					Je = x[Le];
				if (0 > o(Re, O))
					Le < H && 0 > o(Je, Re)
						? ((x[B] = Je), (x[Le] = O), (B = Le))
						: ((x[B] = Re), (x[pe] = O), (B = pe));
				else if (Le < H && 0 > o(Je, O)) (x[B] = Je), (x[Le] = O), (B = Le);
				else break e;
			}
		}
		return C;
	}
	function o(x, C) {
		var O = x.sortIndex - C.sortIndex;
		return O !== 0 ? O : x.id - C.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var i = performance;
		e.unstable_now = function () {
			return i.now();
		};
	} else {
		var l = Date,
			s = l.now();
		e.unstable_now = function () {
			return l.now() - s;
		};
	}
	var u = [],
		a = [],
		d = 1,
		h = null,
		m = 3,
		w = !1,
		g = !1,
		v = !1,
		D = typeof setTimeout == 'function' ? setTimeout : null,
		f = typeof clearTimeout == 'function' ? clearTimeout : null,
		c = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function p(x) {
		for (var C = n(a); C !== null; ) {
			if (C.callback === null) r(a);
			else if (C.startTime <= x)
				r(a), (C.sortIndex = C.expirationTime), t(u, C);
			else break;
			C = n(a);
		}
	}
	function S(x) {
		if (((v = !1), p(x), !g))
			if (n(u) !== null) (g = !0), _(N);
			else {
				var C = n(a);
				C !== null && E(S, C.startTime - x);
			}
	}
	function N(x, C) {
		(g = !1), v && ((v = !1), f(I), (I = -1)), (w = !0);
		var O = m;
		try {
			for (
				p(C), h = n(u);
				h !== null && (!(h.expirationTime > C) || (x && !se()));

			) {
				var B = h.callback;
				if (typeof B == 'function') {
					(h.callback = null), (m = h.priorityLevel);
					var H = B(h.expirationTime <= C);
					(C = e.unstable_now()),
						typeof H == 'function' ? (h.callback = H) : h === n(u) && r(u),
						p(C);
				} else r(u);
				h = n(u);
			}
			if (h !== null) var te = !0;
			else {
				var pe = n(a);
				pe !== null && E(S, pe.startTime - C), (te = !1);
			}
			return te;
		} finally {
			(h = null), (m = O), (w = !1);
		}
	}
	var R = !1,
		T = null,
		I = -1,
		j = 5,
		A = -1;
	function se() {
		return !(e.unstable_now() - A < j);
	}
	function Ge() {
		if (T !== null) {
			var x = e.unstable_now();
			A = x;
			var C = !0;
			try {
				C = T(!0, x);
			} finally {
				C ? F() : ((R = !1), (T = null));
			}
		} else R = !1;
	}
	var F;
	if (typeof c == 'function')
		F = function () {
			c(Ge);
		};
	else if (typeof MessageChannel < 'u') {
		var L = new MessageChannel(),
			P = L.port2;
		(L.port1.onmessage = Ge),
			(F = function () {
				P.postMessage(null);
			});
	} else
		F = function () {
			D(Ge, 0);
		};
	function _(x) {
		(T = x), R || ((R = !0), F());
	}
	function E(x, C) {
		I = D(function () {
			x(e.unstable_now());
		}, C);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (x) {
			x.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			g || w || ((g = !0), _(N));
		}),
		(e.unstable_forceFrameRate = function (x) {
			0 > x || 125 < x
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
				  )
				: (j = 0 < x ? Math.floor(1e3 / x) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return m;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(u);
		}),
		(e.unstable_next = function (x) {
			switch (m) {
				case 1:
				case 2:
				case 3:
					var C = 3;
					break;
				default:
					C = m;
			}
			var O = m;
			m = C;
			try {
				return x();
			} finally {
				m = O;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (x, C) {
			switch (x) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					x = 3;
			}
			var O = m;
			m = x;
			try {
				return C();
			} finally {
				m = O;
			}
		}),
		(e.unstable_scheduleCallback = function (x, C, O) {
			var B = e.unstable_now();
			switch (
				(typeof O == 'object' && O !== null
					? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? B + O : B))
					: (O = B),
				x)
			) {
				case 1:
					var H = -1;
					break;
				case 2:
					H = 250;
					break;
				case 5:
					H = 1073741823;
					break;
				case 4:
					H = 1e4;
					break;
				default:
					H = 5e3;
			}
			return (
				(H = O + H),
				(x = {
					id: d++,
					callback: C,
					priorityLevel: x,
					startTime: O,
					expirationTime: H,
					sortIndex: -1,
				}),
				O > B
					? ((x.sortIndex = O),
					  t(a, x),
					  n(u) === null &&
							x === n(a) &&
							(v ? (f(I), (I = -1)) : (v = !0), E(S, O - B)))
					: ((x.sortIndex = H), t(u, x), g || w || ((g = !0), _(N))),
				x
			);
		}),
		(e.unstable_shouldYield = se),
		(e.unstable_wrapCallback = function (x) {
			var C = m;
			return function () {
				var O = m;
				m = C;
				try {
					return x.apply(this, arguments);
				} finally {
					m = O;
				}
			};
		});
})(ac);
(function (e) {
	e.exports = ac;
})(B0);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cc = U,
	De = Xi;
function k(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var fc = new Set(),
	lr = {};
function qt(e, t) {
	kn(e, t), kn(e + 'Capture', t);
}
function kn(e, t) {
	for (lr[e] = t, e = 0; e < t.length; e++) fc.add(t[e]);
}
var ct = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	Gi = Object.prototype.hasOwnProperty,
	H0 =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	hu = {},
	mu = {};
function V0(e) {
	return Gi.call(mu, e)
		? !0
		: Gi.call(hu, e)
		? !1
		: H0.test(e)
		? (mu[e] = !0)
		: ((hu[e] = !0), !1);
}
function W0(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function b0(e, t, n, r) {
	if (t === null || typeof t > 'u' || W0(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function xe(e, t, n, r, o, i, l) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = o),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = l);
}
var de = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		de[e] = new xe(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	de[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	de[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	de[e] = new xe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		de[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	de[e] = new xe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	de[e] = new xe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	de[e] = new xe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	de[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var rs = /[\-:]([a-z])/g;
function os(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(rs, os);
		de[t] = new xe(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(rs, os);
		de[t] = new xe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(rs, os);
	de[t] = new xe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	de[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new xe(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	de[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function is(e, t, n, r) {
	var o = de.hasOwnProperty(t) ? de[t] : null;
	(o !== null
		? o.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(b0(t, n, o, r) && (n = null),
		r || o === null
			? V0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: o.mustUseProperty
			? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
			: ((t = o.attributeName),
			  (r = o.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((o = o.type),
					  (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mt = cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Mr = Symbol.for('react.element'),
	rn = Symbol.for('react.portal'),
	on = Symbol.for('react.fragment'),
	ls = Symbol.for('react.strict_mode'),
	Ji = Symbol.for('react.profiler'),
	dc = Symbol.for('react.provider'),
	pc = Symbol.for('react.context'),
	ss = Symbol.for('react.forward_ref'),
	Zi = Symbol.for('react.suspense'),
	qi = Symbol.for('react.suspense_list'),
	us = Symbol.for('react.memo'),
	wt = Symbol.for('react.lazy'),
	hc = Symbol.for('react.offscreen'),
	yu = Symbol.iterator;
function Fn(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (yu && e[yu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var q = Object.assign,
	hi;
function bn(e) {
	if (hi === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			hi = (t && t[1]) || '';
		}
	return (
		`
` +
		hi +
		e
	);
}
var mi = !1;
function yi(e, t) {
	if (!e || mi) return '';
	mi = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (a) {
					var r = a;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (a) {
					r = a;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (a) {
				r = a;
			}
			e();
		}
	} catch (a) {
		if (a && r && typeof a.stack == 'string') {
			for (
				var o = a.stack.split(`
`),
					i = r.stack.split(`
`),
					l = o.length - 1,
					s = i.length - 1;
				1 <= l && 0 <= s && o[l] !== i[s];

			)
				s--;
			for (; 1 <= l && 0 <= s; l--, s--)
				if (o[l] !== i[s]) {
					if (l !== 1 || s !== 1)
						do
							if ((l--, s--, 0 > s || o[l] !== i[s])) {
								var u =
									`
` + o[l].replace(' at new ', ' at ');
								return (
									e.displayName &&
										u.includes('<anonymous>') &&
										(u = u.replace('<anonymous>', e.displayName)),
									u
								);
							}
						while (1 <= l && 0 <= s);
					break;
				}
		}
	} finally {
		(mi = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? bn(e) : '';
}
function Q0(e) {
	switch (e.tag) {
		case 5:
			return bn(e.type);
		case 16:
			return bn('Lazy');
		case 13:
			return bn('Suspense');
		case 19:
			return bn('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = yi(e.type, !1)), e;
		case 11:
			return (e = yi(e.type.render, !1)), e;
		case 1:
			return (e = yi(e.type, !0)), e;
		default:
			return '';
	}
}
function el(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case on:
			return 'Fragment';
		case rn:
			return 'Portal';
		case Ji:
			return 'Profiler';
		case ls:
			return 'StrictMode';
		case Zi:
			return 'Suspense';
		case qi:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case pc:
				return (e.displayName || 'Context') + '.Consumer';
			case dc:
				return (e._context.displayName || 'Context') + '.Provider';
			case ss:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case us:
				return (
					(t = e.displayName || null), t !== null ? t : el(e.type) || 'Memo'
				);
			case wt:
				(t = e._payload), (e = e._init);
				try {
					return el(e(t));
				} catch {}
		}
	return null;
}
function K0(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return el(t);
		case 8:
			return t === ls ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function Dt(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function mc(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function Y0(e) {
	var t = mc(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var o = n.get,
			i = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return o.call(this);
				},
				set: function (l) {
					(r = '' + l), i.call(this, l);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (l) {
					r = '' + l;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Dr(e) {
	e._valueTracker || (e._valueTracker = Y0(e));
}
function yc(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = mc(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function yo(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function tl(e, t) {
	var n = t.checked;
	return q({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function gu(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Dt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function gc(e, t) {
	(t = t.checked), t != null && is(e, 'checked', t, !1);
}
function nl(e, t) {
	gc(e, t);
	var n = Dt(t.value),
		r = t.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? rl(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && rl(e, t.type, Dt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function vu(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n);
}
function rl(e, t, n) {
	(t !== 'number' || yo(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Qn = Array.isArray;
function yn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
		for (n = 0; n < e.length; n++)
			(o = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== o && (e[n].selected = o),
				o && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + Dt(n), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === n) {
				(e[o].selected = !0), r && (e[o].defaultSelected = !0);
				return;
			}
			t !== null || e[o].disabled || (t = e[o]);
		}
		t !== null && (t.selected = !0);
	}
}
function ol(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
	return q({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function wu(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(k(92));
			if (Qn(n)) {
				if (1 < n.length) throw Error(k(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: Dt(n) };
}
function vc(e, t) {
	var n = Dt(t.value),
		r = Dt(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function zu(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function wc(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function il(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? wc(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var Ir,
	zc = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, o) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, o);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t;
		else {
			for (
				Ir = Ir || document.createElement('div'),
					Ir.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Ir.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function sr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Xn = {
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
	X0 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Xn).forEach(function (e) {
	X0.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xn[t] = Xn[e]);
	});
});
function Sc(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Xn.hasOwnProperty(e) && Xn[e])
		? ('' + t).trim()
		: t + 'px';
}
function xc(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				o = Sc(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
		}
}
var G0 = q(
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
	},
);
function ll(e, t) {
	if (t) {
		if (G0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(k(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(k(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(k(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(k(62));
	}
}
function sl(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var ul = null;
function as(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var al = null,
	gn = null,
	vn = null;
function Su(e) {
	if ((e = Rr(e))) {
		if (typeof al != 'function') throw Error(k(280));
		var t = e.stateNode;
		t && ((t = Xo(t)), al(e.stateNode, e.type, t));
	}
}
function kc(e) {
	gn ? (vn ? vn.push(e) : (vn = [e])) : (gn = e);
}
function Cc() {
	if (gn) {
		var e = gn,
			t = vn;
		if (((vn = gn = null), Su(e), t)) for (e = 0; e < t.length; e++) Su(t[e]);
	}
}
function Ec(e, t) {
	return e(t);
}
function Nc() {}
var gi = !1;
function _c(e, t, n) {
	if (gi) return e(t, n);
	gi = !0;
	try {
		return Ec(e, t, n);
	} finally {
		(gi = !1), (gn !== null || vn !== null) && (Nc(), Cc());
	}
}
function ur(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Xo(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
	return n;
}
var cl = !1;
if (ct)
	try {
		var Un = {};
		Object.defineProperty(Un, 'passive', {
			get: function () {
				cl = !0;
			},
		}),
			window.addEventListener('test', Un, Un),
			window.removeEventListener('test', Un, Un);
	} catch {
		cl = !1;
	}
function J0(e, t, n, r, o, i, l, s, u) {
	var a = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, a);
	} catch (d) {
		this.onError(d);
	}
}
var Gn = !1,
	go = null,
	vo = !1,
	fl = null,
	Z0 = {
		onError: function (e) {
			(Gn = !0), (go = e);
		},
	};
function q0(e, t, n, r, o, i, l, s, u) {
	(Gn = !1), (go = null), J0.apply(Z0, arguments);
}
function eh(e, t, n, r, o, i, l, s, u) {
	if ((q0.apply(this, arguments), Gn)) {
		if (Gn) {
			var a = go;
			(Gn = !1), (go = null);
		} else throw Error(k(198));
		vo || ((vo = !0), (fl = a));
	}
}
function en(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Pc(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function xu(e) {
	if (en(e) !== e) throw Error(k(188));
}
function th(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = en(e)), t === null)) throw Error(k(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var o = n.return;
		if (o === null) break;
		var i = o.alternate;
		if (i === null) {
			if (((r = o.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (o.child === i.child) {
			for (i = o.child; i; ) {
				if (i === n) return xu(o), e;
				if (i === r) return xu(o), t;
				i = i.sibling;
			}
			throw Error(k(188));
		}
		if (n.return !== r.return) (n = o), (r = i);
		else {
			for (var l = !1, s = o.child; s; ) {
				if (s === n) {
					(l = !0), (n = o), (r = i);
					break;
				}
				if (s === r) {
					(l = !0), (r = o), (n = i);
					break;
				}
				s = s.sibling;
			}
			if (!l) {
				for (s = i.child; s; ) {
					if (s === n) {
						(l = !0), (n = i), (r = o);
						break;
					}
					if (s === r) {
						(l = !0), (r = i), (n = o);
						break;
					}
					s = s.sibling;
				}
				if (!l) throw Error(k(189));
			}
		}
		if (n.alternate !== r) throw Error(k(190));
	}
	if (n.tag !== 3) throw Error(k(188));
	return n.stateNode.current === n ? e : t;
}
function Rc(e) {
	return (e = th(e)), e !== null ? Lc(e) : null;
}
function Lc(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Lc(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Tc = De.unstable_scheduleCallback,
	ku = De.unstable_cancelCallback,
	nh = De.unstable_shouldYield,
	rh = De.unstable_requestPaint,
	ne = De.unstable_now,
	oh = De.unstable_getCurrentPriorityLevel,
	cs = De.unstable_ImmediatePriority,
	Oc = De.unstable_UserBlockingPriority,
	wo = De.unstable_NormalPriority,
	ih = De.unstable_LowPriority,
	Mc = De.unstable_IdlePriority,
	bo = null,
	nt = null;
function lh(e) {
	if (nt && typeof nt.onCommitFiberRoot == 'function')
		try {
			nt.onCommitFiberRoot(bo, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Ke = Math.clz32 ? Math.clz32 : ah,
	sh = Math.log,
	uh = Math.LN2;
function ah(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((sh(e) / uh) | 0)) | 0;
}
var Ar = 64,
	Fr = 4194304;
function Kn(e) {
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
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
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
function zo(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		o = e.suspendedLanes,
		i = e.pingedLanes,
		l = n & 268435455;
	if (l !== 0) {
		var s = l & ~o;
		s !== 0 ? (r = Kn(s)) : ((i &= l), i !== 0 && (r = Kn(i)));
	} else (l = n & ~o), l !== 0 ? (r = Kn(l)) : i !== 0 && (r = Kn(i));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & o) &&
		((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Ke(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
	return r;
}
function ch(e, t) {
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
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function fh(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			o = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;

	) {
		var l = 31 - Ke(i),
			s = 1 << l,
			u = o[l];
		u === -1
			? (!(s & n) || s & r) && (o[l] = ch(s, t))
			: u <= t && (e.expiredLanes |= s),
			(i &= ~s);
	}
}
function dl(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Dc() {
	var e = Ar;
	return (Ar <<= 1), !(Ar & 4194240) && (Ar = 64), e;
}
function vi(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function _r(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Ke(t)),
		(e[t] = n);
}
function dh(e, t) {
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
		var o = 31 - Ke(n),
			i = 1 << o;
		(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
	}
}
function fs(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Ke(n),
			o = 1 << r;
		(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
	}
}
var Q = 0;
function Ic(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ac,
	ds,
	Fc,
	Uc,
	$c,
	pl = !1,
	Ur = [],
	Et = null,
	Nt = null,
	_t = null,
	ar = new Map(),
	cr = new Map(),
	St = [],
	ph =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' ',
		);
function Cu(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			Et = null;
			break;
		case 'dragenter':
		case 'dragleave':
			Nt = null;
			break;
		case 'mouseover':
		case 'mouseout':
			_t = null;
			break;
		case 'pointerover':
		case 'pointerout':
			ar.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			cr.delete(t.pointerId);
	}
}
function $n(e, t, n, r, o, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [o],
		  }),
		  t !== null && ((t = Rr(t)), t !== null && ds(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  o !== null && t.indexOf(o) === -1 && t.push(o),
		  e);
}
function hh(e, t, n, r, o) {
	switch (t) {
		case 'focusin':
			return (Et = $n(Et, e, t, n, r, o)), !0;
		case 'dragenter':
			return (Nt = $n(Nt, e, t, n, r, o)), !0;
		case 'mouseover':
			return (_t = $n(_t, e, t, n, r, o)), !0;
		case 'pointerover':
			var i = o.pointerId;
			return ar.set(i, $n(ar.get(i) || null, e, t, n, r, o)), !0;
		case 'gotpointercapture':
			return (
				(i = o.pointerId), cr.set(i, $n(cr.get(i) || null, e, t, n, r, o)), !0
			);
	}
	return !1;
}
function jc(e) {
	var t = Ht(e.target);
	if (t !== null) {
		var n = en(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Pc(n)), t !== null)) {
					(e.blockedOn = t),
						$c(e.priority, function () {
							Fc(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function to(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = hl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(ul = r), n.target.dispatchEvent(r), (ul = null);
		} else return (t = Rr(n)), t !== null && ds(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Eu(e, t, n) {
	to(e) && n.delete(t);
}
function mh() {
	(pl = !1),
		Et !== null && to(Et) && (Et = null),
		Nt !== null && to(Nt) && (Nt = null),
		_t !== null && to(_t) && (_t = null),
		ar.forEach(Eu),
		cr.forEach(Eu);
}
function jn(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		pl ||
			((pl = !0),
			De.unstable_scheduleCallback(De.unstable_NormalPriority, mh)));
}
function fr(e) {
	function t(o) {
		return jn(o, e);
	}
	if (0 < Ur.length) {
		jn(Ur[0], e);
		for (var n = 1; n < Ur.length; n++) {
			var r = Ur[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Et !== null && jn(Et, e),
			Nt !== null && jn(Nt, e),
			_t !== null && jn(_t, e),
			ar.forEach(t),
			cr.forEach(t),
			n = 0;
		n < St.length;
		n++
	)
		(r = St[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < St.length && ((n = St[0]), n.blockedOn === null); )
		jc(n), n.blockedOn === null && St.shift();
}
var wn = mt.ReactCurrentBatchConfig,
	So = !0;
function yh(e, t, n, r) {
	var o = Q,
		i = wn.transition;
	wn.transition = null;
	try {
		(Q = 1), ps(e, t, n, r);
	} finally {
		(Q = o), (wn.transition = i);
	}
}
function gh(e, t, n, r) {
	var o = Q,
		i = wn.transition;
	wn.transition = null;
	try {
		(Q = 4), ps(e, t, n, r);
	} finally {
		(Q = o), (wn.transition = i);
	}
}
function ps(e, t, n, r) {
	if (So) {
		var o = hl(e, t, n, r);
		if (o === null) Pi(e, t, r, xo, n), Cu(e, r);
		else if (hh(o, e, t, n, r)) r.stopPropagation();
		else if ((Cu(e, r), t & 4 && -1 < ph.indexOf(e))) {
			for (; o !== null; ) {
				var i = Rr(o);
				if (
					(i !== null && Ac(i),
					(i = hl(e, t, n, r)),
					i === null && Pi(e, t, r, xo, n),
					i === o)
				)
					break;
				o = i;
			}
			o !== null && r.stopPropagation();
		} else Pi(e, t, r, null, n);
	}
}
var xo = null;
function hl(e, t, n, r) {
	if (((xo = null), (e = as(r)), (e = Ht(e)), e !== null))
		if (((t = en(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Pc(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (xo = e), null;
}
function Bc(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (oh()) {
				case cs:
					return 1;
				case Oc:
					return 4;
				case wo:
				case ih:
					return 16;
				case Mc:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var kt = null,
	hs = null,
	no = null;
function Hc() {
	if (no) return no;
	var e,
		t = hs,
		n = t.length,
		r,
		o = 'value' in kt ? kt.value : kt.textContent,
		i = o.length;
	for (e = 0; e < n && t[e] === o[e]; e++);
	var l = n - e;
	for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
	return (no = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ro(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function $r() {
	return !0;
}
function Nu() {
	return !1;
}
function Ae(e) {
	function t(n, r, o, i, l) {
		(this._reactName = n),
			(this._targetInst = o),
			(this.type = r),
			(this.nativeEvent = i),
			(this.target = l),
			(this.currentTarget = null);
		for (var s in e)
			e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
		return (
			(this.isDefaultPrevented = (
				i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
			)
				? $r
				: Nu),
			(this.isPropagationStopped = Nu),
			this
		);
	}
	return (
		q(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = $r));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = $r));
			},
			persist: function () {},
			isPersistent: $r,
		}),
		t
	);
}
var Dn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	ms = Ae(Dn),
	Pr = q({}, Dn, { view: 0, detail: 0 }),
	vh = Ae(Pr),
	wi,
	zi,
	Bn,
	Qo = q({}, Pr, {
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
		getModifierState: ys,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== Bn &&
						(Bn && e.type === 'mousemove'
							? ((wi = e.screenX - Bn.screenX), (zi = e.screenY - Bn.screenY))
							: (zi = wi = 0),
						(Bn = e)),
				  wi);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : zi;
		},
	}),
	_u = Ae(Qo),
	wh = q({}, Qo, { dataTransfer: 0 }),
	zh = Ae(wh),
	Sh = q({}, Pr, { relatedTarget: 0 }),
	Si = Ae(Sh),
	xh = q({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	kh = Ae(xh),
	Ch = q({}, Dn, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Eh = Ae(Ch),
	Nh = q({}, Dn, { data: 0 }),
	Pu = Ae(Nh),
	_h = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	Ph = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	Rh = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function Lh(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Rh[e]) ? !!t[e] : !1;
}
function ys() {
	return Lh;
}
var Th = q({}, Pr, {
		key: function (e) {
			if (e.key) {
				var t = _h[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = ro(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? Ph[e.keyCode] || 'Unidentified'
				: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ys,
		charCode: function (e) {
			return e.type === 'keypress' ? ro(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? ro(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	Oh = Ae(Th),
	Mh = q({}, Qo, {
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
	}),
	Ru = Ae(Mh),
	Dh = q({}, Pr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ys,
	}),
	Ih = Ae(Dh),
	Ah = q({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Fh = Ae(Ah),
	Uh = q({}, Qo, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	$h = Ae(Uh),
	jh = [9, 13, 27, 32],
	gs = ct && 'CompositionEvent' in window,
	Jn = null;
ct && 'documentMode' in document && (Jn = document.documentMode);
var Bh = ct && 'TextEvent' in window && !Jn,
	Vc = ct && (!gs || (Jn && 8 < Jn && 11 >= Jn)),
	Lu = String.fromCharCode(32),
	Tu = !1;
function Wc(e, t) {
	switch (e) {
		case 'keyup':
			return jh.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function bc(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ln = !1;
function Hh(e, t) {
	switch (e) {
		case 'compositionend':
			return bc(t);
		case 'keypress':
			return t.which !== 32 ? null : ((Tu = !0), Lu);
		case 'textInput':
			return (e = t.data), e === Lu && Tu ? null : e;
		default:
			return null;
	}
}
function Vh(e, t) {
	if (ln)
		return e === 'compositionend' || (!gs && Wc(e, t))
			? ((e = Hc()), (no = hs = kt = null), (ln = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return Vc && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Wh = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
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
function Ou(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Wh[e.type] : t === 'textarea';
}
function Qc(e, t, n, r) {
	kc(r),
		(t = ko(t, 'onChange')),
		0 < t.length &&
			((n = new ms('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Zn = null,
	dr = null;
function bh(e) {
	rf(e, 0);
}
function Ko(e) {
	var t = an(e);
	if (yc(t)) return e;
}
function Qh(e, t) {
	if (e === 'change') return t;
}
var Kc = !1;
if (ct) {
	var xi;
	if (ct) {
		var ki = 'oninput' in document;
		if (!ki) {
			var Mu = document.createElement('div');
			Mu.setAttribute('oninput', 'return;'),
				(ki = typeof Mu.oninput == 'function');
		}
		xi = ki;
	} else xi = !1;
	Kc = xi && (!document.documentMode || 9 < document.documentMode);
}
function Du() {
	Zn && (Zn.detachEvent('onpropertychange', Yc), (dr = Zn = null));
}
function Yc(e) {
	if (e.propertyName === 'value' && Ko(dr)) {
		var t = [];
		Qc(t, dr, e, as(e)), _c(bh, t);
	}
}
function Kh(e, t, n) {
	e === 'focusin'
		? (Du(), (Zn = t), (dr = n), Zn.attachEvent('onpropertychange', Yc))
		: e === 'focusout' && Du();
}
function Yh(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return Ko(dr);
}
function Xh(e, t) {
	if (e === 'click') return Ko(t);
}
function Gh(e, t) {
	if (e === 'input' || e === 'change') return Ko(t);
}
function Jh(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == 'function' ? Object.is : Jh;
function pr(e, t) {
	if (Xe(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var o = n[r];
		if (!Gi.call(t, o) || !Xe(e[o], t[o])) return !1;
	}
	return !0;
}
function Iu(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Au(e, t) {
	var n = Iu(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Iu(n);
	}
}
function Xc(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Xc(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Gc() {
	for (var e = window, t = yo(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = yo(e.document);
	}
	return t;
}
function vs(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function Zh(e) {
	var t = Gc(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Xc(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && vs(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var o = n.textContent.length,
					i = Math.min(r.start, o);
				(r = r.end === void 0 ? i : Math.min(r.end, o)),
					!e.extend && i > r && ((o = r), (r = i), (i = o)),
					(o = Au(n, i));
				var l = Au(n, r);
				o &&
					l &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== o.node ||
						e.anchorOffset !== o.offset ||
						e.focusNode !== l.node ||
						e.focusOffset !== l.offset) &&
					((t = t.createRange()),
					t.setStart(o.node, o.offset),
					e.removeAllRanges(),
					i > r
						? (e.addRange(t), e.extend(l.node, l.offset))
						: (t.setEnd(l.node, l.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var qh = ct && 'documentMode' in document && 11 >= document.documentMode,
	sn = null,
	ml = null,
	qn = null,
	yl = !1;
function Fu(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	yl ||
		sn == null ||
		sn !== yo(r) ||
		((r = sn),
		'selectionStart' in r && vs(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(qn && pr(qn, r)) ||
			((qn = r),
			(r = ko(ml, 'onSelect')),
			0 < r.length &&
				((t = new ms('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = sn))));
}
function jr(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var un = {
		animationend: jr('Animation', 'AnimationEnd'),
		animationiteration: jr('Animation', 'AnimationIteration'),
		animationstart: jr('Animation', 'AnimationStart'),
		transitionend: jr('Transition', 'TransitionEnd'),
	},
	Ci = {},
	Jc = {};
ct &&
	((Jc = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete un.animationend.animation,
		delete un.animationiteration.animation,
		delete un.animationstart.animation),
	'TransitionEvent' in window || delete un.transitionend.transition);
function Yo(e) {
	if (Ci[e]) return Ci[e];
	if (!un[e]) return e;
	var t = un[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Jc) return (Ci[e] = t[n]);
	return e;
}
var Zc = Yo('animationend'),
	qc = Yo('animationiteration'),
	ef = Yo('animationstart'),
	tf = Yo('transitionend'),
	nf = new Map(),
	Uu =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' ',
		);
function At(e, t) {
	nf.set(e, t), qt(t, [e]);
}
for (var Ei = 0; Ei < Uu.length; Ei++) {
	var Ni = Uu[Ei],
		e1 = Ni.toLowerCase(),
		t1 = Ni[0].toUpperCase() + Ni.slice(1);
	At(e1, 'on' + t1);
}
At(Zc, 'onAnimationEnd');
At(qc, 'onAnimationIteration');
At(ef, 'onAnimationStart');
At('dblclick', 'onDoubleClick');
At('focusin', 'onFocus');
At('focusout', 'onBlur');
At(tf, 'onTransitionEnd');
kn('onMouseEnter', ['mouseout', 'mouseover']);
kn('onMouseLeave', ['mouseout', 'mouseover']);
kn('onPointerEnter', ['pointerout', 'pointerover']);
kn('onPointerLeave', ['pointerout', 'pointerover']);
qt(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(
		' ',
	),
);
qt(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' ',
	),
);
qt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
qt(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
qt(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
qt(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var Yn =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' ',
		),
	n1 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Yn));
function $u(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), eh(r, t, void 0, e), (e.currentTarget = null);
}
function rf(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			o = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var l = r.length - 1; 0 <= l; l--) {
					var s = r[l],
						u = s.instance,
						a = s.currentTarget;
					if (((s = s.listener), u !== i && o.isPropagationStopped())) break e;
					$u(o, s, a), (i = u);
				}
			else
				for (l = 0; l < r.length; l++) {
					if (
						((s = r[l]),
						(u = s.instance),
						(a = s.currentTarget),
						(s = s.listener),
						u !== i && o.isPropagationStopped())
					)
						break e;
					$u(o, s, a), (i = u);
				}
		}
	}
	if (vo) throw ((e = fl), (vo = !1), (fl = null), e);
}
function Y(e, t) {
	var n = t[Sl];
	n === void 0 && (n = t[Sl] = new Set());
	var r = e + '__bubble';
	n.has(r) || (of(t, e, 2, !1), n.add(r));
}
function _i(e, t, n) {
	var r = 0;
	t && (r |= 4), of(n, e, r, t);
}
var Br = '_reactListening' + Math.random().toString(36).slice(2);
function hr(e) {
	if (!e[Br]) {
		(e[Br] = !0),
			fc.forEach(function (n) {
				n !== 'selectionchange' && (n1.has(n) || _i(n, !1, e), _i(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Br] || ((t[Br] = !0), _i('selectionchange', !1, t));
	}
}
function of(e, t, n, r) {
	switch (Bc(t)) {
		case 1:
			var o = yh;
			break;
		case 4:
			o = gh;
			break;
		default:
			o = ps;
	}
	(n = o.bind(null, t, n, e)),
		(o = void 0),
		!cl ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(o = !0),
		r
			? o !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: o })
				: e.addEventListener(t, n, !0)
			: o !== void 0
			? e.addEventListener(t, n, { passive: o })
			: e.addEventListener(t, n, !1);
}
function Pi(e, t, n, r, o) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var l = r.tag;
			if (l === 3 || l === 4) {
				var s = r.stateNode.containerInfo;
				if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
				if (l === 4)
					for (l = r.return; l !== null; ) {
						var u = l.tag;
						if (
							(u === 3 || u === 4) &&
							((u = l.stateNode.containerInfo),
							u === o || (u.nodeType === 8 && u.parentNode === o))
						)
							return;
						l = l.return;
					}
				for (; s !== null; ) {
					if (((l = Ht(s)), l === null)) return;
					if (((u = l.tag), u === 5 || u === 6)) {
						r = i = l;
						continue e;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
	_c(function () {
		var a = i,
			d = as(n),
			h = [];
		e: {
			var m = nf.get(e);
			if (m !== void 0) {
				var w = ms,
					g = e;
				switch (e) {
					case 'keypress':
						if (ro(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						w = Oh;
						break;
					case 'focusin':
						(g = 'focus'), (w = Si);
						break;
					case 'focusout':
						(g = 'blur'), (w = Si);
						break;
					case 'beforeblur':
					case 'afterblur':
						w = Si;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						w = _u;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						w = zh;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						w = Ih;
						break;
					case Zc:
					case qc:
					case ef:
						w = kh;
						break;
					case tf:
						w = Fh;
						break;
					case 'scroll':
						w = vh;
						break;
					case 'wheel':
						w = $h;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						w = Eh;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						w = Ru;
				}
				var v = (t & 4) !== 0,
					D = !v && e === 'scroll',
					f = v ? (m !== null ? m + 'Capture' : null) : m;
				v = [];
				for (var c = a, p; c !== null; ) {
					p = c;
					var S = p.stateNode;
					if (
						(p.tag === 5 &&
							S !== null &&
							((p = S),
							f !== null && ((S = ur(c, f)), S != null && v.push(mr(c, S, p)))),
						D)
					)
						break;
					c = c.return;
				}
				0 < v.length &&
					((m = new w(m, g, null, n, d)), h.push({ event: m, listeners: v }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((m = e === 'mouseover' || e === 'pointerover'),
					(w = e === 'mouseout' || e === 'pointerout'),
					m &&
						n !== ul &&
						(g = n.relatedTarget || n.fromElement) &&
						(Ht(g) || g[ft]))
				)
					break e;
				if (
					(w || m) &&
					((m =
						d.window === d
							? d
							: (m = d.ownerDocument)
							? m.defaultView || m.parentWindow
							: window),
					w
						? ((g = n.relatedTarget || n.toElement),
						  (w = a),
						  (g = g ? Ht(g) : null),
						  g !== null &&
								((D = en(g)), g !== D || (g.tag !== 5 && g.tag !== 6)) &&
								(g = null))
						: ((w = null), (g = a)),
					w !== g)
				) {
					if (
						((v = _u),
						(S = 'onMouseLeave'),
						(f = 'onMouseEnter'),
						(c = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((v = Ru),
							(S = 'onPointerLeave'),
							(f = 'onPointerEnter'),
							(c = 'pointer')),
						(D = w == null ? m : an(w)),
						(p = g == null ? m : an(g)),
						(m = new v(S, c + 'leave', w, n, d)),
						(m.target = D),
						(m.relatedTarget = p),
						(S = null),
						Ht(d) === a &&
							((v = new v(f, c + 'enter', g, n, d)),
							(v.target = p),
							(v.relatedTarget = D),
							(S = v)),
						(D = S),
						w && g)
					)
						t: {
							for (v = w, f = g, c = 0, p = v; p; p = nn(p)) c++;
							for (p = 0, S = f; S; S = nn(S)) p++;
							for (; 0 < c - p; ) (v = nn(v)), c--;
							for (; 0 < p - c; ) (f = nn(f)), p--;
							for (; c--; ) {
								if (v === f || (f !== null && v === f.alternate)) break t;
								(v = nn(v)), (f = nn(f));
							}
							v = null;
						}
					else v = null;
					w !== null && ju(h, m, w, v, !1),
						g !== null && D !== null && ju(h, D, g, v, !0);
				}
			}
			e: {
				if (
					((m = a ? an(a) : window),
					(w = m.nodeName && m.nodeName.toLowerCase()),
					w === 'select' || (w === 'input' && m.type === 'file'))
				)
					var N = Qh;
				else if (Ou(m))
					if (Kc) N = Gh;
					else {
						N = Yh;
						var R = Kh;
					}
				else
					(w = m.nodeName) &&
						w.toLowerCase() === 'input' &&
						(m.type === 'checkbox' || m.type === 'radio') &&
						(N = Xh);
				if (N && (N = N(e, a))) {
					Qc(h, N, n, d);
					break e;
				}
				R && R(e, m, a),
					e === 'focusout' &&
						(R = m._wrapperState) &&
						R.controlled &&
						m.type === 'number' &&
						rl(m, 'number', m.value);
			}
			switch (((R = a ? an(a) : window), e)) {
				case 'focusin':
					(Ou(R) || R.contentEditable === 'true') &&
						((sn = R), (ml = a), (qn = null));
					break;
				case 'focusout':
					qn = ml = sn = null;
					break;
				case 'mousedown':
					yl = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(yl = !1), Fu(h, n, d);
					break;
				case 'selectionchange':
					if (qh) break;
				case 'keydown':
				case 'keyup':
					Fu(h, n, d);
			}
			var T;
			if (gs)
				e: {
					switch (e) {
						case 'compositionstart':
							var I = 'onCompositionStart';
							break e;
						case 'compositionend':
							I = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							I = 'onCompositionUpdate';
							break e;
					}
					I = void 0;
				}
			else
				ln
					? Wc(e, n) && (I = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (I = 'onCompositionStart');
			I &&
				(Vc &&
					n.locale !== 'ko' &&
					(ln || I !== 'onCompositionStart'
						? I === 'onCompositionEnd' && ln && (T = Hc())
						: ((kt = d),
						  (hs = 'value' in kt ? kt.value : kt.textContent),
						  (ln = !0))),
				(R = ko(a, I)),
				0 < R.length &&
					((I = new Pu(I, e, null, n, d)),
					h.push({ event: I, listeners: R }),
					T ? (I.data = T) : ((T = bc(n)), T !== null && (I.data = T)))),
				(T = Bh ? Hh(e, n) : Vh(e, n)) &&
					((a = ko(a, 'onBeforeInput')),
					0 < a.length &&
						((d = new Pu('onBeforeInput', 'beforeinput', null, n, d)),
						h.push({ event: d, listeners: a }),
						(d.data = T)));
		}
		rf(h, t);
	});
}
function mr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function ko(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var o = e,
			i = o.stateNode;
		o.tag === 5 &&
			i !== null &&
			((o = i),
			(i = ur(e, n)),
			i != null && r.unshift(mr(e, i, o)),
			(i = ur(e, t)),
			i != null && r.push(mr(e, i, o))),
			(e = e.return);
	}
	return r;
}
function nn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function ju(e, t, n, r, o) {
	for (var i = t._reactName, l = []; n !== null && n !== r; ) {
		var s = n,
			u = s.alternate,
			a = s.stateNode;
		if (u !== null && u === r) break;
		s.tag === 5 &&
			a !== null &&
			((s = a),
			o
				? ((u = ur(n, i)), u != null && l.unshift(mr(n, u, s)))
				: o || ((u = ur(n, i)), u != null && l.push(mr(n, u, s)))),
			(n = n.return);
	}
	l.length !== 0 && e.push({ event: t, listeners: l });
}
var r1 = /\r\n?/g,
	o1 = /\u0000|\uFFFD/g;
function Bu(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			r1,
			`
`,
		)
		.replace(o1, '');
}
function Hr(e, t, n) {
	if (((t = Bu(t)), Bu(e) !== t && n)) throw Error(k(425));
}
function Co() {}
var gl = null,
	vl = null;
function wl(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var zl = typeof setTimeout == 'function' ? setTimeout : void 0,
	i1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Hu = typeof Promise == 'function' ? Promise : void 0,
	l1 =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Hu < 'u'
			? function (e) {
					return Hu.resolve(null).then(e).catch(s1);
			  }
			: zl;
function s1(e) {
	setTimeout(function () {
		throw e;
	});
}
function Ri(e, t) {
	var n = t,
		r = 0;
	do {
		var o = n.nextSibling;
		if ((e.removeChild(n), o && o.nodeType === 8))
			if (((n = o.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(o), fr(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = o;
	} while (n);
	fr(t);
}
function Pt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function Vu(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var In = Math.random().toString(36).slice(2),
	et = '__reactFiber$' + In,
	yr = '__reactProps$' + In,
	ft = '__reactContainer$' + In,
	Sl = '__reactEvents$' + In,
	u1 = '__reactListeners$' + In,
	a1 = '__reactHandles$' + In;
function Ht(e) {
	var t = e[et];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[ft] || n[et])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Vu(e); e !== null; ) {
					if ((n = e[et])) return n;
					e = Vu(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Rr(e) {
	return (
		(e = e[et] || e[ft]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function an(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(k(33));
}
function Xo(e) {
	return e[yr] || null;
}
var xl = [],
	cn = -1;
function Ft(e) {
	return { current: e };
}
function X(e) {
	0 > cn || ((e.current = xl[cn]), (xl[cn] = null), cn--);
}
function K(e, t) {
	cn++, (xl[cn] = e.current), (e.current = t);
}
var It = {},
	ve = Ft(It),
	Ne = Ft(!1),
	Kt = It;
function Cn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return It;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var o = {},
		i;
	for (i in n) o[i] = t[i];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		o
	);
}
function _e(e) {
	return (e = e.childContextTypes), e != null;
}
function Eo() {
	X(Ne), X(ve);
}
function Wu(e, t, n) {
	if (ve.current !== It) throw Error(k(168));
	K(ve, t), K(Ne, n);
}
function lf(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var o in r) if (!(o in t)) throw Error(k(108, K0(e) || 'Unknown', o));
	return q({}, n, r);
}
function No(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
		(Kt = ve.current),
		K(ve, e),
		K(Ne, Ne.current),
		!0
	);
}
function bu(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(k(169));
	n
		? ((e = lf(e, t, Kt)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  X(Ne),
		  X(ve),
		  K(ve, e))
		: X(Ne),
		K(Ne, n);
}
var it = null,
	Go = !1,
	Li = !1;
function sf(e) {
	it === null ? (it = [e]) : it.push(e);
}
function c1(e) {
	(Go = !0), sf(e);
}
function Ut() {
	if (!Li && it !== null) {
		Li = !0;
		var e = 0,
			t = Q;
		try {
			var n = it;
			for (Q = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(it = null), (Go = !1);
		} catch (o) {
			throw (it !== null && (it = it.slice(e + 1)), Tc(cs, Ut), o);
		} finally {
			(Q = t), (Li = !1);
		}
	}
	return null;
}
var fn = [],
	dn = 0,
	_o = null,
	Po = 0,
	Fe = [],
	Ue = 0,
	Yt = null,
	lt = 1,
	st = '';
function $t(e, t) {
	(fn[dn++] = Po), (fn[dn++] = _o), (_o = e), (Po = t);
}
function uf(e, t, n) {
	(Fe[Ue++] = lt), (Fe[Ue++] = st), (Fe[Ue++] = Yt), (Yt = e);
	var r = lt;
	e = st;
	var o = 32 - Ke(r) - 1;
	(r &= ~(1 << o)), (n += 1);
	var i = 32 - Ke(t) + o;
	if (30 < i) {
		var l = o - (o % 5);
		(i = (r & ((1 << l) - 1)).toString(32)),
			(r >>= l),
			(o -= l),
			(lt = (1 << (32 - Ke(t) + o)) | (n << o) | r),
			(st = i + e);
	} else (lt = (1 << i) | (n << o) | r), (st = e);
}
function ws(e) {
	e.return !== null && ($t(e, 1), uf(e, 1, 0));
}
function zs(e) {
	for (; e === _o; )
		(_o = fn[--dn]), (fn[dn] = null), (Po = fn[--dn]), (fn[dn] = null);
	for (; e === Yt; )
		(Yt = Fe[--Ue]),
			(Fe[Ue] = null),
			(st = Fe[--Ue]),
			(Fe[Ue] = null),
			(lt = Fe[--Ue]),
			(Fe[Ue] = null);
}
var Me = null,
	Oe = null,
	G = !1,
	Qe = null;
function af(e, t) {
	var n = $e(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qu(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Me = e), (Oe = Pt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Me = e), (Oe = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Yt !== null ? { id: lt, overflow: st } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = $e(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Me = e),
					  (Oe = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function kl(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cl(e) {
	if (G) {
		var t = Oe;
		if (t) {
			var n = t;
			if (!Qu(e, t)) {
				if (kl(e)) throw Error(k(418));
				t = Pt(n.nextSibling);
				var r = Me;
				t && Qu(e, t)
					? af(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (G = !1), (Me = e));
			}
		} else {
			if (kl(e)) throw Error(k(418));
			(e.flags = (e.flags & -4097) | 2), (G = !1), (Me = e);
		}
	}
}
function Ku(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Me = e;
}
function Vr(e) {
	if (e !== Me) return !1;
	if (!G) return Ku(e), (G = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !wl(e.type, e.memoizedProps))),
		t && (t = Oe))
	) {
		if (kl(e)) throw (cf(), Error(k(418)));
		for (; t; ) af(e, t), (t = Pt(t.nextSibling));
	}
	if ((Ku(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(k(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							Oe = Pt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			Oe = null;
		}
	} else Oe = Me ? Pt(e.stateNode.nextSibling) : null;
	return !0;
}
function cf() {
	for (var e = Oe; e; ) e = Pt(e.nextSibling);
}
function En() {
	(Oe = Me = null), (G = !1);
}
function Ss(e) {
	Qe === null ? (Qe = [e]) : Qe.push(e);
}
var f1 = mt.ReactCurrentBatchConfig;
function We(e, t) {
	if (e && e.defaultProps) {
		(t = q({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var Ro = Ft(null),
	Lo = null,
	pn = null,
	xs = null;
function ks() {
	xs = pn = Lo = null;
}
function Cs(e) {
	var t = Ro.current;
	X(Ro), (e._currentValue = t);
}
function El(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function zn(e, t) {
	(Lo = e),
		(xs = pn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Ee = !0), (e.firstContext = null));
}
function Be(e) {
	var t = e._currentValue;
	if (xs !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), pn === null)) {
			if (Lo === null) throw Error(k(308));
			(pn = e), (Lo.dependencies = { lanes: 0, firstContext: e });
		} else pn = pn.next = e;
	return t;
}
var Vt = null;
function Es(e) {
	Vt === null ? (Vt = [e]) : Vt.push(e);
}
function ff(e, t, n, r) {
	var o = t.interleaved;
	return (
		o === null ? ((n.next = n), Es(t)) : ((n.next = o.next), (o.next = n)),
		(t.interleaved = n),
		dt(e, r)
	);
}
function dt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var zt = !1;
function Ns(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function df(e, t) {
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
function at(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Rt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), b & 2)) {
		var o = r.pending;
		return (
			o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
			(r.pending = t),
			dt(e, n)
		);
	}
	return (
		(o = r.interleaved),
		o === null ? ((t.next = t), Es(r)) : ((t.next = o.next), (o.next = t)),
		(r.interleaved = t),
		dt(e, n)
	);
}
function oo(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), fs(e, n);
	}
}
function Yu(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var o = null,
			i = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var l = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
			} while (n !== null);
			i === null ? (o = i = t) : (i = i.next = t);
		} else o = i = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: o,
			lastBaseUpdate: i,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function To(e, t, n, r) {
	var o = e.updateQueue;
	zt = !1;
	var i = o.firstBaseUpdate,
		l = o.lastBaseUpdate,
		s = o.shared.pending;
	if (s !== null) {
		o.shared.pending = null;
		var u = s,
			a = u.next;
		(u.next = null), l === null ? (i = a) : (l.next = a), (l = u);
		var d = e.alternate;
		d !== null &&
			((d = d.updateQueue),
			(s = d.lastBaseUpdate),
			s !== l &&
				(s === null ? (d.firstBaseUpdate = a) : (s.next = a),
				(d.lastBaseUpdate = u)));
	}
	if (i !== null) {
		var h = o.baseState;
		(l = 0), (d = a = u = null), (s = i);
		do {
			var m = s.lane,
				w = s.eventTime;
			if ((r & m) === m) {
				d !== null &&
					(d = d.next =
						{
							eventTime: w,
							lane: 0,
							tag: s.tag,
							payload: s.payload,
							callback: s.callback,
							next: null,
						});
				e: {
					var g = e,
						v = s;
					switch (((m = t), (w = n), v.tag)) {
						case 1:
							if (((g = v.payload), typeof g == 'function')) {
								h = g.call(w, h, m);
								break e;
							}
							h = g;
							break e;
						case 3:
							g.flags = (g.flags & -65537) | 128;
						case 0:
							if (
								((g = v.payload),
								(m = typeof g == 'function' ? g.call(w, h, m) : g),
								m == null)
							)
								break e;
							h = q({}, h, m);
							break e;
						case 2:
							zt = !0;
					}
				}
				s.callback !== null &&
					s.lane !== 0 &&
					((e.flags |= 64),
					(m = o.effects),
					m === null ? (o.effects = [s]) : m.push(s));
			} else
				(w = {
					eventTime: w,
					lane: m,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null,
				}),
					d === null ? ((a = d = w), (u = h)) : (d = d.next = w),
					(l |= m);
			if (((s = s.next), s === null)) {
				if (((s = o.shared.pending), s === null)) break;
				(m = s),
					(s = m.next),
					(m.next = null),
					(o.lastBaseUpdate = m),
					(o.shared.pending = null);
			}
		} while (1);
		if (
			(d === null && (u = h),
			(o.baseState = u),
			(o.firstBaseUpdate = a),
			(o.lastBaseUpdate = d),
			(t = o.shared.interleaved),
			t !== null)
		) {
			o = t;
			do (l |= o.lane), (o = o.next);
			while (o !== t);
		} else i === null && (o.shared.lanes = 0);
		(Gt |= l), (e.lanes = l), (e.memoizedState = h);
	}
}
function Xu(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				o = r.callback;
			if (o !== null) {
				if (((r.callback = null), (r = n), typeof o != 'function'))
					throw Error(k(191, o));
				o.call(r);
			}
		}
}
var pf = new cc.Component().refs;
function Nl(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : q({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Jo = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? en(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = ze(),
			o = Tt(e),
			i = at(r, o);
		(i.payload = t),
			n != null && (i.callback = n),
			(t = Rt(e, i, o)),
			t !== null && (Ye(t, e, o, r), oo(t, e, o));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = ze(),
			o = Tt(e),
			i = at(r, o);
		(i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = Rt(e, i, o)),
			t !== null && (Ye(t, e, o, r), oo(t, e, o));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = ze(),
			r = Tt(e),
			o = at(n, r);
		(o.tag = 2),
			t != null && (o.callback = t),
			(t = Rt(e, o, r)),
			t !== null && (Ye(t, e, r, n), oo(t, e, r));
	},
};
function Gu(e, t, n, r, o, i, l) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, i, l)
			: t.prototype && t.prototype.isPureReactComponent
			? !pr(n, r) || !pr(o, i)
			: !0
	);
}
function hf(e, t, n) {
	var r = !1,
		o = It,
		i = t.contextType;
	return (
		typeof i == 'object' && i !== null
			? (i = Be(i))
			: ((o = _e(t) ? Kt : ve.current),
			  (r = t.contextTypes),
			  (i = (r = r != null) ? Cn(e, o) : It)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Jo),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = o),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function Ju(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Jo.enqueueReplaceState(t, t.state, null);
}
function _l(e, t, n, r) {
	var o = e.stateNode;
	(o.props = n), (o.state = e.memoizedState), (o.refs = pf), Ns(e);
	var i = t.contextType;
	typeof i == 'object' && i !== null
		? (o.context = Be(i))
		: ((i = _e(t) ? Kt : ve.current), (o.context = Cn(e, i))),
		(o.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == 'function' && (Nl(e, t, i, n), (o.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function' ||
			(typeof o.UNSAFE_componentWillMount != 'function' &&
				typeof o.componentWillMount != 'function') ||
			((t = o.state),
			typeof o.componentWillMount == 'function' && o.componentWillMount(),
			typeof o.UNSAFE_componentWillMount == 'function' &&
				o.UNSAFE_componentWillMount(),
			t !== o.state && Jo.enqueueReplaceState(o, o.state, null),
			To(e, n, o, r),
			(o.state = e.memoizedState)),
		typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Hn(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(k(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(k(147, e));
			var o = r,
				i = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === i
				? t.ref
				: ((t = function (l) {
						var s = o.refs;
						s === pf && (s = o.refs = {}),
							l === null ? delete s[i] : (s[i] = l);
				  }),
				  (t._stringRef = i),
				  t);
		}
		if (typeof e != 'string') throw Error(k(284));
		if (!n._owner) throw Error(k(290, e));
	}
	return e;
}
function Wr(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			k(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e,
			),
		))
	);
}
function Zu(e) {
	var t = e._init;
	return t(e._payload);
}
function mf(e) {
	function t(f, c) {
		if (e) {
			var p = f.deletions;
			p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
		}
	}
	function n(f, c) {
		if (!e) return null;
		for (; c !== null; ) t(f, c), (c = c.sibling);
		return null;
	}
	function r(f, c) {
		for (f = new Map(); c !== null; )
			c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
		return f;
	}
	function o(f, c) {
		return (f = Ot(f, c)), (f.index = 0), (f.sibling = null), f;
	}
	function i(f, c, p) {
		return (
			(f.index = p),
			e
				? ((p = f.alternate),
				  p !== null
						? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
						: ((f.flags |= 2), c))
				: ((f.flags |= 1048576), c)
		);
	}
	function l(f) {
		return e && f.alternate === null && (f.flags |= 2), f;
	}
	function s(f, c, p, S) {
		return c === null || c.tag !== 6
			? ((c = Fi(p, f.mode, S)), (c.return = f), c)
			: ((c = o(c, p)), (c.return = f), c);
	}
	function u(f, c, p, S) {
		var N = p.type;
		return N === on
			? d(f, c, p.props.children, S, p.key)
			: c !== null &&
			  (c.elementType === N ||
					(typeof N == 'object' &&
						N !== null &&
						N.$$typeof === wt &&
						Zu(N) === c.type))
			? ((S = o(c, p.props)), (S.ref = Hn(f, c, p)), (S.return = f), S)
			: ((S = co(p.type, p.key, p.props, null, f.mode, S)),
			  (S.ref = Hn(f, c, p)),
			  (S.return = f),
			  S);
	}
	function a(f, c, p, S) {
		return c === null ||
			c.tag !== 4 ||
			c.stateNode.containerInfo !== p.containerInfo ||
			c.stateNode.implementation !== p.implementation
			? ((c = Ui(p, f.mode, S)), (c.return = f), c)
			: ((c = o(c, p.children || [])), (c.return = f), c);
	}
	function d(f, c, p, S, N) {
		return c === null || c.tag !== 7
			? ((c = Qt(p, f.mode, S, N)), (c.return = f), c)
			: ((c = o(c, p)), (c.return = f), c);
	}
	function h(f, c, p) {
		if ((typeof c == 'string' && c !== '') || typeof c == 'number')
			return (c = Fi('' + c, f.mode, p)), (c.return = f), c;
		if (typeof c == 'object' && c !== null) {
			switch (c.$$typeof) {
				case Mr:
					return (
						(p = co(c.type, c.key, c.props, null, f.mode, p)),
						(p.ref = Hn(f, null, c)),
						(p.return = f),
						p
					);
				case rn:
					return (c = Ui(c, f.mode, p)), (c.return = f), c;
				case wt:
					var S = c._init;
					return h(f, S(c._payload), p);
			}
			if (Qn(c) || Fn(c))
				return (c = Qt(c, f.mode, p, null)), (c.return = f), c;
			Wr(f, c);
		}
		return null;
	}
	function m(f, c, p, S) {
		var N = c !== null ? c.key : null;
		if ((typeof p == 'string' && p !== '') || typeof p == 'number')
			return N !== null ? null : s(f, c, '' + p, S);
		if (typeof p == 'object' && p !== null) {
			switch (p.$$typeof) {
				case Mr:
					return p.key === N ? u(f, c, p, S) : null;
				case rn:
					return p.key === N ? a(f, c, p, S) : null;
				case wt:
					return (N = p._init), m(f, c, N(p._payload), S);
			}
			if (Qn(p) || Fn(p)) return N !== null ? null : d(f, c, p, S, null);
			Wr(f, p);
		}
		return null;
	}
	function w(f, c, p, S, N) {
		if ((typeof S == 'string' && S !== '') || typeof S == 'number')
			return (f = f.get(p) || null), s(c, f, '' + S, N);
		if (typeof S == 'object' && S !== null) {
			switch (S.$$typeof) {
				case Mr:
					return (f = f.get(S.key === null ? p : S.key) || null), u(c, f, S, N);
				case rn:
					return (f = f.get(S.key === null ? p : S.key) || null), a(c, f, S, N);
				case wt:
					var R = S._init;
					return w(f, c, p, R(S._payload), N);
			}
			if (Qn(S) || Fn(S)) return (f = f.get(p) || null), d(c, f, S, N, null);
			Wr(c, S);
		}
		return null;
	}
	function g(f, c, p, S) {
		for (
			var N = null, R = null, T = c, I = (c = 0), j = null;
			T !== null && I < p.length;
			I++
		) {
			T.index > I ? ((j = T), (T = null)) : (j = T.sibling);
			var A = m(f, T, p[I], S);
			if (A === null) {
				T === null && (T = j);
				break;
			}
			e && T && A.alternate === null && t(f, T),
				(c = i(A, c, I)),
				R === null ? (N = A) : (R.sibling = A),
				(R = A),
				(T = j);
		}
		if (I === p.length) return n(f, T), G && $t(f, I), N;
		if (T === null) {
			for (; I < p.length; I++)
				(T = h(f, p[I], S)),
					T !== null &&
						((c = i(T, c, I)), R === null ? (N = T) : (R.sibling = T), (R = T));
			return G && $t(f, I), N;
		}
		for (T = r(f, T); I < p.length; I++)
			(j = w(T, f, I, p[I], S)),
				j !== null &&
					(e && j.alternate !== null && T.delete(j.key === null ? I : j.key),
					(c = i(j, c, I)),
					R === null ? (N = j) : (R.sibling = j),
					(R = j));
		return (
			e &&
				T.forEach(function (se) {
					return t(f, se);
				}),
			G && $t(f, I),
			N
		);
	}
	function v(f, c, p, S) {
		var N = Fn(p);
		if (typeof N != 'function') throw Error(k(150));
		if (((p = N.call(p)), p == null)) throw Error(k(151));
		for (
			var R = (N = null), T = c, I = (c = 0), j = null, A = p.next();
			T !== null && !A.done;
			I++, A = p.next()
		) {
			T.index > I ? ((j = T), (T = null)) : (j = T.sibling);
			var se = m(f, T, A.value, S);
			if (se === null) {
				T === null && (T = j);
				break;
			}
			e && T && se.alternate === null && t(f, T),
				(c = i(se, c, I)),
				R === null ? (N = se) : (R.sibling = se),
				(R = se),
				(T = j);
		}
		if (A.done) return n(f, T), G && $t(f, I), N;
		if (T === null) {
			for (; !A.done; I++, A = p.next())
				(A = h(f, A.value, S)),
					A !== null &&
						((c = i(A, c, I)), R === null ? (N = A) : (R.sibling = A), (R = A));
			return G && $t(f, I), N;
		}
		for (T = r(f, T); !A.done; I++, A = p.next())
			(A = w(T, f, I, A.value, S)),
				A !== null &&
					(e && A.alternate !== null && T.delete(A.key === null ? I : A.key),
					(c = i(A, c, I)),
					R === null ? (N = A) : (R.sibling = A),
					(R = A));
		return (
			e &&
				T.forEach(function (Ge) {
					return t(f, Ge);
				}),
			G && $t(f, I),
			N
		);
	}
	function D(f, c, p, S) {
		if (
			(typeof p == 'object' &&
				p !== null &&
				p.type === on &&
				p.key === null &&
				(p = p.props.children),
			typeof p == 'object' && p !== null)
		) {
			switch (p.$$typeof) {
				case Mr:
					e: {
						for (var N = p.key, R = c; R !== null; ) {
							if (R.key === N) {
								if (((N = p.type), N === on)) {
									if (R.tag === 7) {
										n(f, R.sibling),
											(c = o(R, p.props.children)),
											(c.return = f),
											(f = c);
										break e;
									}
								} else if (
									R.elementType === N ||
									(typeof N == 'object' &&
										N !== null &&
										N.$$typeof === wt &&
										Zu(N) === R.type)
								) {
									n(f, R.sibling),
										(c = o(R, p.props)),
										(c.ref = Hn(f, R, p)),
										(c.return = f),
										(f = c);
									break e;
								}
								n(f, R);
								break;
							} else t(f, R);
							R = R.sibling;
						}
						p.type === on
							? ((c = Qt(p.props.children, f.mode, S, p.key)),
							  (c.return = f),
							  (f = c))
							: ((S = co(p.type, p.key, p.props, null, f.mode, S)),
							  (S.ref = Hn(f, c, p)),
							  (S.return = f),
							  (f = S));
					}
					return l(f);
				case rn:
					e: {
						for (R = p.key; c !== null; ) {
							if (c.key === R)
								if (
									c.tag === 4 &&
									c.stateNode.containerInfo === p.containerInfo &&
									c.stateNode.implementation === p.implementation
								) {
									n(f, c.sibling),
										(c = o(c, p.children || [])),
										(c.return = f),
										(f = c);
									break e;
								} else {
									n(f, c);
									break;
								}
							else t(f, c);
							c = c.sibling;
						}
						(c = Ui(p, f.mode, S)), (c.return = f), (f = c);
					}
					return l(f);
				case wt:
					return (R = p._init), D(f, c, R(p._payload), S);
			}
			if (Qn(p)) return g(f, c, p, S);
			if (Fn(p)) return v(f, c, p, S);
			Wr(f, p);
		}
		return (typeof p == 'string' && p !== '') || typeof p == 'number'
			? ((p = '' + p),
			  c !== null && c.tag === 6
					? (n(f, c.sibling), (c = o(c, p)), (c.return = f), (f = c))
					: (n(f, c), (c = Fi(p, f.mode, S)), (c.return = f), (f = c)),
			  l(f))
			: n(f, c);
	}
	return D;
}
var Nn = mf(!0),
	yf = mf(!1),
	Lr = {},
	rt = Ft(Lr),
	gr = Ft(Lr),
	vr = Ft(Lr);
function Wt(e) {
	if (e === Lr) throw Error(k(174));
	return e;
}
function _s(e, t) {
	switch ((K(vr, t), K(gr, e), K(rt, Lr), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : il(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = il(t, e));
	}
	X(rt), K(rt, t);
}
function _n() {
	X(rt), X(gr), X(vr);
}
function gf(e) {
	Wt(vr.current);
	var t = Wt(rt.current),
		n = il(t, e.type);
	t !== n && (K(gr, e), K(rt, n));
}
function Ps(e) {
	gr.current === e && (X(rt), X(gr));
}
var J = Ft(0);
function Oo(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Ti = [];
function Rs() {
	for (var e = 0; e < Ti.length; e++)
		Ti[e]._workInProgressVersionPrimary = null;
	Ti.length = 0;
}
var io = mt.ReactCurrentDispatcher,
	Oi = mt.ReactCurrentBatchConfig,
	Xt = 0,
	Z = null,
	oe = null,
	ue = null,
	Mo = !1,
	er = !1,
	wr = 0,
	d1 = 0;
function he() {
	throw Error(k(321));
}
function Ls(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Xe(e[n], t[n])) return !1;
	return !0;
}
function Ts(e, t, n, r, o, i) {
	if (
		((Xt = i),
		(Z = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(io.current = e === null || e.memoizedState === null ? y1 : g1),
		(e = n(r, o)),
		er)
	) {
		i = 0;
		do {
			if (((er = !1), (wr = 0), 25 <= i)) throw Error(k(301));
			(i += 1),
				(ue = oe = null),
				(t.updateQueue = null),
				(io.current = v1),
				(e = n(r, o));
		} while (er);
	}
	if (
		((io.current = Do),
		(t = oe !== null && oe.next !== null),
		(Xt = 0),
		(ue = oe = Z = null),
		(Mo = !1),
		t)
	)
		throw Error(k(300));
	return e;
}
function Os() {
	var e = wr !== 0;
	return (wr = 0), e;
}
function qe() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return ue === null ? (Z.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function He() {
	if (oe === null) {
		var e = Z.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = oe.next;
	var t = ue === null ? Z.memoizedState : ue.next;
	if (t !== null) (ue = t), (oe = e);
	else {
		if (e === null) throw Error(k(310));
		(oe = e),
			(e = {
				memoizedState: oe.memoizedState,
				baseState: oe.baseState,
				baseQueue: oe.baseQueue,
				queue: oe.queue,
				next: null,
			}),
			ue === null ? (Z.memoizedState = ue = e) : (ue = ue.next = e);
	}
	return ue;
}
function zr(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function Mi(e) {
	var t = He(),
		n = t.queue;
	if (n === null) throw Error(k(311));
	n.lastRenderedReducer = e;
	var r = oe,
		o = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (o !== null) {
			var l = o.next;
			(o.next = i.next), (i.next = l);
		}
		(r.baseQueue = o = i), (n.pending = null);
	}
	if (o !== null) {
		(i = o.next), (r = r.baseState);
		var s = (l = null),
			u = null,
			a = i;
		do {
			var d = a.lane;
			if ((Xt & d) === d)
				u !== null &&
					(u = u.next =
						{
							lane: 0,
							action: a.action,
							hasEagerState: a.hasEagerState,
							eagerState: a.eagerState,
							next: null,
						}),
					(r = a.hasEagerState ? a.eagerState : e(r, a.action));
			else {
				var h = {
					lane: d,
					action: a.action,
					hasEagerState: a.hasEagerState,
					eagerState: a.eagerState,
					next: null,
				};
				u === null ? ((s = u = h), (l = r)) : (u = u.next = h),
					(Z.lanes |= d),
					(Gt |= d);
			}
			a = a.next;
		} while (a !== null && a !== i);
		u === null ? (l = r) : (u.next = s),
			Xe(r, t.memoizedState) || (Ee = !0),
			(t.memoizedState = r),
			(t.baseState = l),
			(t.baseQueue = u),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		o = e;
		do (i = o.lane), (Z.lanes |= i), (Gt |= i), (o = o.next);
		while (o !== e);
	} else o === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Di(e) {
	var t = He(),
		n = t.queue;
	if (n === null) throw Error(k(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		o = n.pending,
		i = t.memoizedState;
	if (o !== null) {
		n.pending = null;
		var l = (o = o.next);
		do (i = e(i, l.action)), (l = l.next);
		while (l !== o);
		Xe(i, t.memoizedState) || (Ee = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(n.lastRenderedState = i);
	}
	return [i, r];
}
function vf() {}
function wf(e, t) {
	var n = Z,
		r = He(),
		o = t(),
		i = !Xe(r.memoizedState, o);
	if (
		(i && ((r.memoizedState = o), (Ee = !0)),
		(r = r.queue),
		Ms(xf.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (ue !== null && ue.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Sr(9, Sf.bind(null, n, r, o, t), void 0, null),
			ae === null)
		)
			throw Error(k(349));
		Xt & 30 || zf(n, t, o);
	}
	return o;
}
function zf(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Z.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Z.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Sf(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), kf(t) && Cf(e);
}
function xf(e, t, n) {
	return n(function () {
		kf(t) && Cf(e);
	});
}
function kf(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Xe(e, n);
	} catch {
		return !0;
	}
}
function Cf(e) {
	var t = dt(e, 1);
	t !== null && Ye(t, e, 1, -1);
}
function qu(e) {
	var t = qe();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: zr,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = m1.bind(null, Z, e)),
		[t.memoizedState, e]
	);
}
function Sr(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Z.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Z.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function Ef() {
	return He().memoizedState;
}
function lo(e, t, n, r) {
	var o = qe();
	(Z.flags |= e),
		(o.memoizedState = Sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Zo(e, t, n, r) {
	var o = He();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (oe !== null) {
		var l = oe.memoizedState;
		if (((i = l.destroy), r !== null && Ls(r, l.deps))) {
			o.memoizedState = Sr(t, n, i, r);
			return;
		}
	}
	(Z.flags |= e), (o.memoizedState = Sr(1 | t, n, i, r));
}
function ea(e, t) {
	return lo(8390656, 8, e, t);
}
function Ms(e, t) {
	return Zo(2048, 8, e, t);
}
function Nf(e, t) {
	return Zo(4, 2, e, t);
}
function _f(e, t) {
	return Zo(4, 4, e, t);
}
function Pf(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function Rf(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Zo(4, 4, Pf.bind(null, t, e), n)
	);
}
function Ds() {}
function Lf(e, t) {
	var n = He();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ls(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Tf(e, t) {
	var n = He();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ls(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Of(e, t, n) {
	return Xt & 21
		? (Xe(n, t) || ((n = Dc()), (Z.lanes |= n), (Gt |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n));
}
function p1(e, t) {
	var n = Q;
	(Q = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Oi.transition;
	Oi.transition = {};
	try {
		e(!1), t();
	} finally {
		(Q = n), (Oi.transition = r);
	}
}
function Mf() {
	return He().memoizedState;
}
function h1(e, t, n) {
	var r = Tt(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Df(e))
	)
		If(t, n);
	else if (((n = ff(e, t, n, r)), n !== null)) {
		var o = ze();
		Ye(n, e, r, o), Af(n, t, r);
	}
}
function m1(e, t, n) {
	var r = Tt(e),
		o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Df(e)) If(t, o);
	else {
		var i = e.alternate;
		if (
			e.lanes === 0 &&
			(i === null || i.lanes === 0) &&
			((i = t.lastRenderedReducer), i !== null)
		)
			try {
				var l = t.lastRenderedState,
					s = i(l, n);
				if (((o.hasEagerState = !0), (o.eagerState = s), Xe(s, l))) {
					var u = t.interleaved;
					u === null
						? ((o.next = o), Es(t))
						: ((o.next = u.next), (u.next = o)),
						(t.interleaved = o);
					return;
				}
			} catch {
			} finally {
			}
		(n = ff(e, t, o, r)),
			n !== null && ((o = ze()), Ye(n, e, r, o), Af(n, t, r));
	}
}
function Df(e) {
	var t = e.alternate;
	return e === Z || (t !== null && t === Z);
}
function If(e, t) {
	er = Mo = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function Af(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), fs(e, n);
	}
}
var Do = {
		readContext: Be,
		useCallback: he,
		useContext: he,
		useEffect: he,
		useImperativeHandle: he,
		useInsertionEffect: he,
		useLayoutEffect: he,
		useMemo: he,
		useReducer: he,
		useRef: he,
		useState: he,
		useDebugValue: he,
		useDeferredValue: he,
		useTransition: he,
		useMutableSource: he,
		useSyncExternalStore: he,
		useId: he,
		unstable_isNewReconciler: !1,
	},
	y1 = {
		readContext: Be,
		useCallback: function (e, t) {
			return (qe().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Be,
		useEffect: ea,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				lo(4194308, 4, Pf.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return lo(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return lo(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = qe();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = qe();
			return (
				(t = n !== void 0 ? n(t) : t),
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
				(e = e.dispatch = h1.bind(null, Z, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = qe();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: qu,
		useDebugValue: Ds,
		useDeferredValue: function (e) {
			return (qe().memoizedState = e);
		},
		useTransition: function () {
			var e = qu(!1),
				t = e[0];
			return (e = p1.bind(null, e[1])), (qe().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Z,
				o = qe();
			if (G) {
				if (n === void 0) throw Error(k(407));
				n = n();
			} else {
				if (((n = t()), ae === null)) throw Error(k(349));
				Xt & 30 || zf(r, t, n);
			}
			o.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(o.queue = i),
				ea(xf.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				Sr(9, Sf.bind(null, r, i, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = qe(),
				t = ae.identifierPrefix;
			if (G) {
				var n = st,
					r = lt;
				(n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = wr++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = d1++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	g1 = {
		readContext: Be,
		useCallback: Lf,
		useContext: Be,
		useEffect: Ms,
		useImperativeHandle: Rf,
		useInsertionEffect: Nf,
		useLayoutEffect: _f,
		useMemo: Tf,
		useReducer: Mi,
		useRef: Ef,
		useState: function () {
			return Mi(zr);
		},
		useDebugValue: Ds,
		useDeferredValue: function (e) {
			var t = He();
			return Of(t, oe.memoizedState, e);
		},
		useTransition: function () {
			var e = Mi(zr)[0],
				t = He().memoizedState;
			return [e, t];
		},
		useMutableSource: vf,
		useSyncExternalStore: wf,
		useId: Mf,
		unstable_isNewReconciler: !1,
	},
	v1 = {
		readContext: Be,
		useCallback: Lf,
		useContext: Be,
		useEffect: Ms,
		useImperativeHandle: Rf,
		useInsertionEffect: Nf,
		useLayoutEffect: _f,
		useMemo: Tf,
		useReducer: Di,
		useRef: Ef,
		useState: function () {
			return Di(zr);
		},
		useDebugValue: Ds,
		useDeferredValue: function (e) {
			var t = He();
			return oe === null ? (t.memoizedState = e) : Of(t, oe.memoizedState, e);
		},
		useTransition: function () {
			var e = Di(zr)[0],
				t = He().memoizedState;
			return [e, t];
		},
		useMutableSource: vf,
		useSyncExternalStore: wf,
		useId: Mf,
		unstable_isNewReconciler: !1,
	};
function Pn(e, t) {
	try {
		var n = '',
			r = t;
		do (n += Q0(r)), (r = r.return);
		while (r);
		var o = n;
	} catch (i) {
		o =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack;
	}
	return { value: e, source: t, stack: o, digest: null };
}
function Ii(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pl(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var w1 = typeof WeakMap == 'function' ? WeakMap : Map;
function Ff(e, t, n) {
	(n = at(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			Ao || ((Ao = !0), (Ul = r)), Pl(e, t);
		}),
		n
	);
}
function Uf(e, t, n) {
	(n = at(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var o = t.value;
		(n.payload = function () {
			return r(o);
		}),
			(n.callback = function () {
				Pl(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(n.callback = function () {
				Pl(e, t),
					typeof r != 'function' &&
						(Lt === null ? (Lt = new Set([this])) : Lt.add(this));
				var l = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: l !== null ? l : '',
				});
			}),
		n
	);
}
function ta(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new w1();
		var o = new Set();
		r.set(t, o);
	} else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
	o.has(n) || (o.add(n), (e = M1.bind(null, e, t, n)), t.then(e, e));
}
function na(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function ra(e, t, n, r, o) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = o), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = at(-1, 1)), (t.tag = 2), Rt(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var z1 = mt.ReactCurrentOwner,
	Ee = !1;
function we(e, t, n, r) {
	t.child = e === null ? yf(t, null, n, r) : Nn(t, e.child, n, r);
}
function oa(e, t, n, r, o) {
	n = n.render;
	var i = t.ref;
	return (
		zn(t, o),
		(r = Ts(e, t, n, r, i, o)),
		(n = Os()),
		e !== null && !Ee
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  pt(e, t, o))
			: (G && n && ws(t), (t.flags |= 1), we(e, t, r, o), t.child)
	);
}
function ia(e, t, n, r, o) {
	if (e === null) {
		var i = n.type;
		return typeof i == 'function' &&
			!Hs(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), $f(e, t, i, r, o))
			: ((e = co(n.type, null, r, t, t.mode, o)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((i = e.child), !(e.lanes & o))) {
		var l = i.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : pr), n(l, r) && e.ref === t.ref)
		)
			return pt(e, t, o);
	}
	return (
		(t.flags |= 1),
		(e = Ot(i, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function $f(e, t, n, r, o) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (pr(i, r) && e.ref === t.ref)
			if (((Ee = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
				e.flags & 131072 && (Ee = !0);
			else return (t.lanes = e.lanes), pt(e, t, o);
	}
	return Rl(e, t, n, r, o);
}
function jf(e, t, n) {
	var r = t.pendingProps,
		o = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				K(mn, Te),
				(Te |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = i !== null ? i.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					K(mn, Te),
					(Te |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = i !== null ? i.baseLanes : n),
				K(mn, Te),
				(Te |= r);
		}
	else
		i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
			K(mn, Te),
			(Te |= r);
	return we(e, t, o, n), t.child;
}
function Bf(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Rl(e, t, n, r, o) {
	var i = _e(n) ? Kt : ve.current;
	return (
		(i = Cn(t, i)),
		zn(t, o),
		(n = Ts(e, t, n, r, i, o)),
		(r = Os()),
		e !== null && !Ee
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  pt(e, t, o))
			: (G && r && ws(t), (t.flags |= 1), we(e, t, n, o), t.child)
	);
}
function la(e, t, n, r, o) {
	if (_e(n)) {
		var i = !0;
		No(t);
	} else i = !1;
	if ((zn(t, o), t.stateNode === null))
		so(e, t), hf(t, n, r), _l(t, n, r, o), (r = !0);
	else if (e === null) {
		var l = t.stateNode,
			s = t.memoizedProps;
		l.props = s;
		var u = l.context,
			a = n.contextType;
		typeof a == 'object' && a !== null
			? (a = Be(a))
			: ((a = _e(n) ? Kt : ve.current), (a = Cn(t, a)));
		var d = n.getDerivedStateFromProps,
			h =
				typeof d == 'function' ||
				typeof l.getSnapshotBeforeUpdate == 'function';
		h ||
			(typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof l.componentWillReceiveProps != 'function') ||
			((s !== r || u !== a) && Ju(t, l, r, a)),
			(zt = !1);
		var m = t.memoizedState;
		(l.state = m),
			To(t, r, l, o),
			(u = t.memoizedState),
			s !== r || m !== u || Ne.current || zt
				? (typeof d == 'function' && (Nl(t, n, d, r), (u = t.memoizedState)),
				  (s = zt || Gu(t, n, s, r, m, u, a))
						? (h ||
								(typeof l.UNSAFE_componentWillMount != 'function' &&
									typeof l.componentWillMount != 'function') ||
								(typeof l.componentWillMount == 'function' &&
									l.componentWillMount(),
								typeof l.UNSAFE_componentWillMount == 'function' &&
									l.UNSAFE_componentWillMount()),
						  typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = u)),
				  (l.props = r),
				  (l.state = u),
				  (l.context = a),
				  (r = s))
				: (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(l = t.stateNode),
			df(e, t),
			(s = t.memoizedProps),
			(a = t.type === t.elementType ? s : We(t.type, s)),
			(l.props = a),
			(h = t.pendingProps),
			(m = l.context),
			(u = n.contextType),
			typeof u == 'object' && u !== null
				? (u = Be(u))
				: ((u = _e(n) ? Kt : ve.current), (u = Cn(t, u)));
		var w = n.getDerivedStateFromProps;
		(d =
			typeof w == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function') ||
			(typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof l.componentWillReceiveProps != 'function') ||
			((s !== h || m !== u) && Ju(t, l, r, u)),
			(zt = !1),
			(m = t.memoizedState),
			(l.state = m),
			To(t, r, l, o);
		var g = t.memoizedState;
		s !== h || m !== g || Ne.current || zt
			? (typeof w == 'function' && (Nl(t, n, w, r), (g = t.memoizedState)),
			  (a = zt || Gu(t, n, a, r, m, g, u) || !1)
					? (d ||
							(typeof l.UNSAFE_componentWillUpdate != 'function' &&
								typeof l.componentWillUpdate != 'function') ||
							(typeof l.componentWillUpdate == 'function' &&
								l.componentWillUpdate(r, g, u),
							typeof l.UNSAFE_componentWillUpdate == 'function' &&
								l.UNSAFE_componentWillUpdate(r, g, u)),
					  typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof l.componentDidUpdate != 'function' ||
							(s === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 4),
					  typeof l.getSnapshotBeforeUpdate != 'function' ||
							(s === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = g)),
			  (l.props = r),
			  (l.state = g),
			  (l.context = u),
			  (r = a))
			: (typeof l.componentDidUpdate != 'function' ||
					(s === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 4),
			  typeof l.getSnapshotBeforeUpdate != 'function' ||
					(s === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return Ll(e, t, n, r, i, o);
}
function Ll(e, t, n, r, o, i) {
	Bf(e, t);
	var l = (t.flags & 128) !== 0;
	if (!r && !l) return o && bu(t, n, !1), pt(e, t, i);
	(r = t.stateNode), (z1.current = t);
	var s =
		l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && l
			? ((t.child = Nn(t, e.child, null, i)), (t.child = Nn(t, null, s, i)))
			: we(e, t, s, i),
		(t.memoizedState = r.state),
		o && bu(t, n, !0),
		t.child
	);
}
function Hf(e) {
	var t = e.stateNode;
	t.pendingContext
		? Wu(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Wu(e, t.context, !1),
		_s(e, t.containerInfo);
}
function sa(e, t, n, r, o) {
	return En(), Ss(o), (t.flags |= 256), we(e, t, n, r), t.child;
}
var Tl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ol(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Vf(e, t, n) {
	var r = t.pendingProps,
		o = J.current,
		i = !1,
		l = (t.flags & 128) !== 0,
		s;
	if (
		((s = l) ||
			(s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
		s
			? ((i = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (o |= 1),
		K(J, o & 1),
		e === null)
	)
		return (
			Cl(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((l = r.children),
				  (e = r.fallback),
				  i
						? ((r = t.mode),
						  (i = t.child),
						  (l = { mode: 'hidden', children: l }),
						  !(r & 1) && i !== null
								? ((i.childLanes = 0), (i.pendingProps = l))
								: (i = ti(l, r, 0, null)),
						  (e = Qt(e, r, n, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = Ol(n)),
						  (t.memoizedState = Tl),
						  e)
						: Is(t, l))
		);
	if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
		return S1(e, t, l, r, s, o, n);
	if (i) {
		(i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
		var u = { mode: 'hidden', children: r.children };
		return (
			!(l & 1) && t.child !== o
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = u),
				  (t.deletions = null))
				: ((r = Ot(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
			s !== null ? (i = Ot(s, i)) : ((i = Qt(i, l, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(l = e.child.memoizedState),
			(l =
				l === null
					? Ol(n)
					: {
							baseLanes: l.baseLanes | n,
							cachePool: null,
							transitions: l.transitions,
					  }),
			(i.memoizedState = l),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = Tl),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = Ot(i, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Is(e, t) {
	return (
		(t = ti({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function br(e, t, n, r) {
	return (
		r !== null && Ss(r),
		Nn(t, e.child, null, n),
		(e = Is(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function S1(e, t, n, r, o, i, l) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Ii(Error(k(422)))), br(e, t, l, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = r.fallback),
			  (o = t.mode),
			  (r = ti({ mode: 'visible', children: r.children }, o, 0, null)),
			  (i = Qt(i, o, l, null)),
			  (i.flags |= 2),
			  (r.return = t),
			  (i.return = t),
			  (r.sibling = i),
			  (t.child = r),
			  t.mode & 1 && Nn(t, e.child, null, l),
			  (t.child.memoizedState = Ol(l)),
			  (t.memoizedState = Tl),
			  i);
	if (!(t.mode & 1)) return br(e, t, l, null);
	if (o.data === '$!') {
		if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
		return (r = s), (i = Error(k(419))), (r = Ii(i, r, void 0)), br(e, t, l, r);
	}
	if (((s = (l & e.childLanes) !== 0), Ee || s)) {
		if (((r = ae), r !== null)) {
			switch (l & -l) {
				case 4:
					o = 2;
					break;
				case 16:
					o = 8;
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
					o = 32;
					break;
				case 536870912:
					o = 268435456;
					break;
				default:
					o = 0;
			}
			(o = o & (r.suspendedLanes | l) ? 0 : o),
				o !== 0 &&
					o !== i.retryLane &&
					((i.retryLane = o), dt(e, o), Ye(r, e, o, -1));
		}
		return Bs(), (r = Ii(Error(k(421)))), br(e, t, l, r);
	}
	return o.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = D1.bind(null, e)),
		  (o._reactRetry = t),
		  null)
		: ((e = i.treeContext),
		  (Oe = Pt(o.nextSibling)),
		  (Me = t),
		  (G = !0),
		  (Qe = null),
		  e !== null &&
				((Fe[Ue++] = lt),
				(Fe[Ue++] = st),
				(Fe[Ue++] = Yt),
				(lt = e.id),
				(st = e.overflow),
				(Yt = t)),
		  (t = Is(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function ua(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), El(e.return, t, n);
}
function Ai(e, t, n, r, o) {
	var i = e.memoizedState;
	i === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: o,
		  })
		: ((i.isBackwards = t),
		  (i.rendering = null),
		  (i.renderingStartTime = 0),
		  (i.last = r),
		  (i.tail = n),
		  (i.tailMode = o));
}
function Wf(e, t, n) {
	var r = t.pendingProps,
		o = r.revealOrder,
		i = r.tail;
	if ((we(e, t, r.children, n), (r = J.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && ua(e, n, t);
				else if (e.tag === 19) ua(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((K(J, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (o) {
			case 'forwards':
				for (n = t.child, o = null; n !== null; )
					(e = n.alternate),
						e !== null && Oo(e) === null && (o = n),
						(n = n.sibling);
				(n = o),
					n === null
						? ((o = t.child), (t.child = null))
						: ((o = n.sibling), (n.sibling = null)),
					Ai(t, !1, o, n, i);
				break;
			case 'backwards':
				for (n = null, o = t.child, t.child = null; o !== null; ) {
					if (((e = o.alternate), e !== null && Oo(e) === null)) {
						t.child = o;
						break;
					}
					(e = o.sibling), (o.sibling = n), (n = o), (o = e);
				}
				Ai(t, !0, n, null, i);
				break;
			case 'together':
				Ai(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function so(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Gt |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(k(153));
	if (t.child !== null) {
		for (
			e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = Ot(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function x1(e, t, n) {
	switch (t.tag) {
		case 3:
			Hf(t), En();
			break;
		case 5:
			gf(t);
			break;
		case 1:
			_e(t.type) && No(t);
			break;
		case 4:
			_s(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				o = t.memoizedProps.value;
			K(Ro, r._currentValue), (r._currentValue = o);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (K(J, J.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Vf(e, t, n)
					: (K(J, J.current & 1),
					  (e = pt(e, t, n)),
					  e !== null ? e.sibling : null);
			K(J, J.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Wf(e, t, n);
				t.flags |= 128;
			}
			if (
				((o = t.memoizedState),
				o !== null &&
					((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
				K(J, J.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), jf(e, t, n);
	}
	return pt(e, t, n);
}
var bf, Ml, Qf, Kf;
bf = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Ml = function () {};
Qf = function (e, t, n, r) {
	var o = e.memoizedProps;
	if (o !== r) {
		(e = t.stateNode), Wt(rt.current);
		var i = null;
		switch (n) {
			case 'input':
				(o = tl(e, o)), (r = tl(e, r)), (i = []);
				break;
			case 'select':
				(o = q({}, o, { value: void 0 })),
					(r = q({}, r, { value: void 0 })),
					(i = []);
				break;
			case 'textarea':
				(o = ol(e, o)), (r = ol(e, r)), (i = []);
				break;
			default:
				typeof o.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = Co);
		}
		ll(n, r);
		var l;
		n = null;
		for (a in o)
			if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
				if (a === 'style') {
					var s = o[a];
					for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
				} else
					a !== 'dangerouslySetInnerHTML' &&
						a !== 'children' &&
						a !== 'suppressContentEditableWarning' &&
						a !== 'suppressHydrationWarning' &&
						a !== 'autoFocus' &&
						(lr.hasOwnProperty(a)
							? i || (i = [])
							: (i = i || []).push(a, null));
		for (a in r) {
			var u = r[a];
			if (
				((s = o != null ? o[a] : void 0),
				r.hasOwnProperty(a) && u !== s && (u != null || s != null))
			)
				if (a === 'style')
					if (s) {
						for (l in s)
							!s.hasOwnProperty(l) ||
								(u && u.hasOwnProperty(l)) ||
								(n || (n = {}), (n[l] = ''));
						for (l in u)
							u.hasOwnProperty(l) &&
								s[l] !== u[l] &&
								(n || (n = {}), (n[l] = u[l]));
					} else n || (i || (i = []), i.push(a, n)), (n = u);
				else
					a === 'dangerouslySetInnerHTML'
						? ((u = u ? u.__html : void 0),
						  (s = s ? s.__html : void 0),
						  u != null && s !== u && (i = i || []).push(a, u))
						: a === 'children'
						? (typeof u != 'string' && typeof u != 'number') ||
						  (i = i || []).push(a, '' + u)
						: a !== 'suppressContentEditableWarning' &&
						  a !== 'suppressHydrationWarning' &&
						  (lr.hasOwnProperty(a)
								? (u != null && a === 'onScroll' && Y('scroll', e),
								  i || s === u || (i = []))
								: (i = i || []).push(a, u));
		}
		n && (i = i || []).push('style', n);
		var a = i;
		(t.updateQueue = a) && (t.flags |= 4);
	}
};
Kf = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Vn(e, t) {
	if (!G)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function me(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags & 14680064),
				(r |= o.flags & 14680064),
				(o.return = e),
				(o = o.sibling);
	else
		for (o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags),
				(r |= o.flags),
				(o.return = e),
				(o = o.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function k1(e, t, n) {
	var r = t.pendingProps;
	switch ((zs(t), t.tag)) {
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
			return me(t), null;
		case 1:
			return _e(t.type) && Eo(), me(t), null;
		case 3:
			return (
				(r = t.stateNode),
				_n(),
				X(Ne),
				X(ve),
				Rs(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Vr(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Qe !== null && (Bl(Qe), (Qe = null)))),
				Ml(e, t),
				me(t),
				null
			);
		case 5:
			Ps(t);
			var o = Wt(vr.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Qf(e, t, n, r, o),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(k(166));
					return me(t), null;
				}
				if (((e = Wt(rt.current)), Vr(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (((r[et] = t), (r[yr] = i), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							Y('cancel', r), Y('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							Y('load', r);
							break;
						case 'video':
						case 'audio':
							for (o = 0; o < Yn.length; o++) Y(Yn[o], r);
							break;
						case 'source':
							Y('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							Y('error', r), Y('load', r);
							break;
						case 'details':
							Y('toggle', r);
							break;
						case 'input':
							gu(r, i), Y('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!i.multiple }),
								Y('invalid', r);
							break;
						case 'textarea':
							wu(r, i), Y('invalid', r);
					}
					ll(n, i), (o = null);
					for (var l in i)
						if (i.hasOwnProperty(l)) {
							var s = i[l];
							l === 'children'
								? typeof s == 'string'
									? r.textContent !== s &&
									  (i.suppressHydrationWarning !== !0 &&
											Hr(r.textContent, s, e),
									  (o = ['children', s]))
									: typeof s == 'number' &&
									  r.textContent !== '' + s &&
									  (i.suppressHydrationWarning !== !0 &&
											Hr(r.textContent, s, e),
									  (o = ['children', '' + s]))
								: lr.hasOwnProperty(l) &&
								  s != null &&
								  l === 'onScroll' &&
								  Y('scroll', r);
						}
					switch (n) {
						case 'input':
							Dr(r), vu(r, i, !0);
							break;
						case 'textarea':
							Dr(r), zu(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof i.onClick == 'function' && (r.onclick = Co);
					}
					(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(l = o.nodeType === 9 ? o : o.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = wc(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = l.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = l.createElement(n, { is: r.is }))
								: ((e = l.createElement(n)),
								  n === 'select' &&
										((l = e),
										r.multiple
											? (l.multiple = !0)
											: r.size && (l.size = r.size)))
							: (e = l.createElementNS(e, n)),
						(e[et] = t),
						(e[yr] = r),
						bf(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((l = sl(n, r)), n)) {
							case 'dialog':
								Y('cancel', e), Y('close', e), (o = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								Y('load', e), (o = r);
								break;
							case 'video':
							case 'audio':
								for (o = 0; o < Yn.length; o++) Y(Yn[o], e);
								o = r;
								break;
							case 'source':
								Y('error', e), (o = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								Y('error', e), Y('load', e), (o = r);
								break;
							case 'details':
								Y('toggle', e), (o = r);
								break;
							case 'input':
								gu(e, r), (o = tl(e, r)), Y('invalid', e);
								break;
							case 'option':
								o = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(o = q({}, r, { value: void 0 })),
									Y('invalid', e);
								break;
							case 'textarea':
								wu(e, r), (o = ol(e, r)), Y('invalid', e);
								break;
							default:
								o = r;
						}
						ll(n, o), (s = o);
						for (i in s)
							if (s.hasOwnProperty(i)) {
								var u = s[i];
								i === 'style'
									? xc(e, u)
									: i === 'dangerouslySetInnerHTML'
									? ((u = u ? u.__html : void 0), u != null && zc(e, u))
									: i === 'children'
									? typeof u == 'string'
										? (n !== 'textarea' || u !== '') && sr(e, u)
										: typeof u == 'number' && sr(e, '' + u)
									: i !== 'suppressContentEditableWarning' &&
									  i !== 'suppressHydrationWarning' &&
									  i !== 'autoFocus' &&
									  (lr.hasOwnProperty(i)
											? u != null && i === 'onScroll' && Y('scroll', e)
											: u != null && is(e, i, u, l));
							}
						switch (n) {
							case 'input':
								Dr(e), vu(e, r, !1);
								break;
							case 'textarea':
								Dr(e), zu(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + Dt(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(i = r.value),
									i != null
										? yn(e, !!r.multiple, i, !1)
										: r.defaultValue != null &&
										  yn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof o.onClick == 'function' && (e.onclick = Co);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return me(t), null;
		case 6:
			if (e && t.stateNode != null) Kf(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
				if (((n = Wt(vr.current)), Wt(rt.current), Vr(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[et] = t),
						(i = r.nodeValue !== n) && ((e = Me), e !== null))
					)
						switch (e.tag) {
							case 3:
								Hr(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Hr(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[et] = t),
						(t.stateNode = r);
			}
			return me(t), null;
		case 13:
			if (
				(X(J),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (G && Oe !== null && t.mode & 1 && !(t.flags & 128))
					cf(), En(), (t.flags |= 98560), (i = !1);
				else if (((i = Vr(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(k(318));
						if (
							((i = t.memoizedState),
							(i = i !== null ? i.dehydrated : null),
							!i)
						)
							throw Error(k(317));
						i[et] = t;
					} else
						En(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					me(t), (i = !1);
				} else Qe !== null && (Bl(Qe), (Qe = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || J.current & 1 ? ie === 0 && (ie = 3) : Bs())),
				  t.updateQueue !== null && (t.flags |= 4),
				  me(t),
				  null);
		case 4:
			return (
				_n(), Ml(e, t), e === null && hr(t.stateNode.containerInfo), me(t), null
			);
		case 10:
			return Cs(t.type._context), me(t), null;
		case 17:
			return _e(t.type) && Eo(), me(t), null;
		case 19:
			if ((X(J), (i = t.memoizedState), i === null)) return me(t), null;
			if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
				if (r) Vn(i, !1);
				else {
					if (ie !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((l = Oo(e)), l !== null)) {
								for (
									t.flags |= 128,
										Vn(i, !1),
										r = l.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(i = n),
										(e = r),
										(i.flags &= 14680066),
										(l = i.alternate),
										l === null
											? ((i.childLanes = 0),
											  (i.lanes = e),
											  (i.child = null),
											  (i.subtreeFlags = 0),
											  (i.memoizedProps = null),
											  (i.memoizedState = null),
											  (i.updateQueue = null),
											  (i.dependencies = null),
											  (i.stateNode = null))
											: ((i.childLanes = l.childLanes),
											  (i.lanes = l.lanes),
											  (i.child = l.child),
											  (i.subtreeFlags = 0),
											  (i.deletions = null),
											  (i.memoizedProps = l.memoizedProps),
											  (i.memoizedState = l.memoizedState),
											  (i.updateQueue = l.updateQueue),
											  (i.type = l.type),
											  (e = l.dependencies),
											  (i.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return K(J, (J.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					i.tail !== null &&
						ne() > Rn &&
						((t.flags |= 128), (r = !0), Vn(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = Oo(l)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Vn(i, !0),
							i.tail === null && i.tailMode === 'hidden' && !l.alternate && !G)
						)
							return me(t), null;
					} else
						2 * ne() - i.renderingStartTime > Rn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Vn(i, !1), (t.lanes = 4194304));
				i.isBackwards
					? ((l.sibling = t.child), (t.child = l))
					: ((n = i.last),
					  n !== null ? (n.sibling = l) : (t.child = l),
					  (i.last = l));
			}
			return i.tail !== null
				? ((t = i.tail),
				  (i.rendering = t),
				  (i.tail = t.sibling),
				  (i.renderingStartTime = ne()),
				  (t.sibling = null),
				  (n = J.current),
				  K(J, r ? (n & 1) | 2 : n & 1),
				  t)
				: (me(t), null);
		case 22:
		case 23:
			return (
				js(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Te & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: me(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(k(156, t.tag));
}
function C1(e, t) {
	switch ((zs(t), t.tag)) {
		case 1:
			return (
				_e(t.type) && Eo(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				_n(),
				X(Ne),
				X(ve),
				Rs(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Ps(t), null;
		case 13:
			if ((X(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(k(340));
				En();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return X(J), null;
		case 4:
			return _n(), null;
		case 10:
			return Cs(t.type._context), null;
		case 22:
		case 23:
			return js(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Qr = !1,
	ye = !1,
	E1 = typeof WeakSet == 'function' ? WeakSet : Set,
	M = null;
function hn(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				ee(e, t, r);
			}
		else n.current = null;
}
function Dl(e, t, n) {
	try {
		n();
	} catch (r) {
		ee(e, t, r);
	}
}
var aa = !1;
function N1(e, t) {
	if (((gl = So), (e = Gc()), vs(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var o = r.anchorOffset,
						i = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, i.nodeType;
					} catch {
						n = null;
						break e;
					}
					var l = 0,
						s = -1,
						u = -1,
						a = 0,
						d = 0,
						h = e,
						m = null;
					t: for (;;) {
						for (
							var w;
							h !== n || (o !== 0 && h.nodeType !== 3) || (s = l + o),
								h !== i || (r !== 0 && h.nodeType !== 3) || (u = l + r),
								h.nodeType === 3 && (l += h.nodeValue.length),
								(w = h.firstChild) !== null;

						)
							(m = h), (h = w);
						for (;;) {
							if (h === e) break t;
							if (
								(m === n && ++a === o && (s = l),
								m === i && ++d === r && (u = l),
								(w = h.nextSibling) !== null)
							)
								break;
							(h = m), (m = h.parentNode);
						}
						h = w;
					}
					n = s === -1 || u === -1 ? null : { start: s, end: u };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (vl = { focusedElem: e, selectionRange: n }, So = !1, M = t; M !== null; )
		if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (M = e);
		else
			for (; M !== null; ) {
				t = M;
				try {
					var g = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (g !== null) {
									var v = g.memoizedProps,
										D = g.memoizedState,
										f = t.stateNode,
										c = f.getSnapshotBeforeUpdate(
											t.elementType === t.type ? v : We(t.type, v),
											D,
										);
									f.__reactInternalSnapshotBeforeUpdate = c;
								}
								break;
							case 3:
								var p = t.stateNode.containerInfo;
								p.nodeType === 1
									? (p.textContent = '')
									: p.nodeType === 9 &&
									  p.documentElement &&
									  p.removeChild(p.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(k(163));
						}
				} catch (S) {
					ee(t, t.return, S);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (M = e);
					break;
				}
				M = t.return;
			}
	return (g = aa), (aa = !1), g;
}
function tr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var o = (r = r.next);
		do {
			if ((o.tag & e) === e) {
				var i = o.destroy;
				(o.destroy = void 0), i !== void 0 && Dl(t, n, i);
			}
			o = o.next;
		} while (o !== r);
	}
}
function qo(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
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
function Il(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function Yf(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Yf(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[et], delete t[yr], delete t[Sl], delete t[u1], delete t[a1])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Xf(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ca(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Xf(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Al(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = Co));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Al(e, t, n), e = e.sibling; e !== null; ) Al(e, t, n), (e = e.sibling);
}
function Fl(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Fl(e, t, n), e = e.sibling; e !== null; ) Fl(e, t, n), (e = e.sibling);
}
var ce = null,
	be = !1;
function vt(e, t, n) {
	for (n = n.child; n !== null; ) Gf(e, t, n), (n = n.sibling);
}
function Gf(e, t, n) {
	if (nt && typeof nt.onCommitFiberUnmount == 'function')
		try {
			nt.onCommitFiberUnmount(bo, n);
		} catch {}
	switch (n.tag) {
		case 5:
			ye || hn(n, t);
		case 6:
			var r = ce,
				o = be;
			(ce = null),
				vt(e, t, n),
				(ce = r),
				(be = o),
				ce !== null &&
					(be
						? ((e = ce),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: ce.removeChild(n.stateNode));
			break;
		case 18:
			ce !== null &&
				(be
					? ((e = ce),
					  (n = n.stateNode),
					  e.nodeType === 8
							? Ri(e.parentNode, n)
							: e.nodeType === 1 && Ri(e, n),
					  fr(e))
					: Ri(ce, n.stateNode));
			break;
		case 4:
			(r = ce),
				(o = be),
				(ce = n.stateNode.containerInfo),
				(be = !0),
				vt(e, t, n),
				(ce = r),
				(be = o);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!ye &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				o = r = r.next;
				do {
					var i = o,
						l = i.destroy;
					(i = i.tag),
						l !== void 0 && (i & 2 || i & 4) && Dl(n, t, l),
						(o = o.next);
				} while (o !== r);
			}
			vt(e, t, n);
			break;
		case 1:
			if (
				!ye &&
				(hn(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (s) {
					ee(n, t, s);
				}
			vt(e, t, n);
			break;
		case 21:
			vt(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((ye = (r = ye) || n.memoizedState !== null), vt(e, t, n), (ye = r))
				: vt(e, t, n);
			break;
		default:
			vt(e, t, n);
	}
}
function fa(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new E1()),
			t.forEach(function (r) {
				var o = I1.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(o, o));
			});
	}
}
function Ve(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var o = n[r];
			try {
				var i = e,
					l = t,
					s = l;
				e: for (; s !== null; ) {
					switch (s.tag) {
						case 5:
							(ce = s.stateNode), (be = !1);
							break e;
						case 3:
							(ce = s.stateNode.containerInfo), (be = !0);
							break e;
						case 4:
							(ce = s.stateNode.containerInfo), (be = !0);
							break e;
					}
					s = s.return;
				}
				if (ce === null) throw Error(k(160));
				Gf(i, l, o), (ce = null), (be = !1);
				var u = o.alternate;
				u !== null && (u.return = null), (o.return = null);
			} catch (a) {
				ee(o, t, a);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Jf(t, e), (t = t.sibling);
}
function Jf(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Ve(t, e), Ze(e), r & 4)) {
				try {
					tr(3, e, e.return), qo(3, e);
				} catch (v) {
					ee(e, e.return, v);
				}
				try {
					tr(5, e, e.return);
				} catch (v) {
					ee(e, e.return, v);
				}
			}
			break;
		case 1:
			Ve(t, e), Ze(e), r & 512 && n !== null && hn(n, n.return);
			break;
		case 5:
			if (
				(Ve(t, e),
				Ze(e),
				r & 512 && n !== null && hn(n, n.return),
				e.flags & 32)
			) {
				var o = e.stateNode;
				try {
					sr(o, '');
				} catch (v) {
					ee(e, e.return, v);
				}
			}
			if (r & 4 && ((o = e.stateNode), o != null)) {
				var i = e.memoizedProps,
					l = n !== null ? n.memoizedProps : i,
					s = e.type,
					u = e.updateQueue;
				if (((e.updateQueue = null), u !== null))
					try {
						s === 'input' && i.type === 'radio' && i.name != null && gc(o, i),
							sl(s, l);
						var a = sl(s, i);
						for (l = 0; l < u.length; l += 2) {
							var d = u[l],
								h = u[l + 1];
							d === 'style'
								? xc(o, h)
								: d === 'dangerouslySetInnerHTML'
								? zc(o, h)
								: d === 'children'
								? sr(o, h)
								: is(o, d, h, a);
						}
						switch (s) {
							case 'input':
								nl(o, i);
								break;
							case 'textarea':
								vc(o, i);
								break;
							case 'select':
								var m = o._wrapperState.wasMultiple;
								o._wrapperState.wasMultiple = !!i.multiple;
								var w = i.value;
								w != null
									? yn(o, !!i.multiple, w, !1)
									: m !== !!i.multiple &&
									  (i.defaultValue != null
											? yn(o, !!i.multiple, i.defaultValue, !0)
											: yn(o, !!i.multiple, i.multiple ? [] : '', !1));
						}
						o[yr] = i;
					} catch (v) {
						ee(e, e.return, v);
					}
			}
			break;
		case 6:
			if ((Ve(t, e), Ze(e), r & 4)) {
				if (e.stateNode === null) throw Error(k(162));
				(o = e.stateNode), (i = e.memoizedProps);
				try {
					o.nodeValue = i;
				} catch (v) {
					ee(e, e.return, v);
				}
			}
			break;
		case 3:
			if (
				(Ve(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					fr(t.containerInfo);
				} catch (v) {
					ee(e, e.return, v);
				}
			break;
		case 4:
			Ve(t, e), Ze(e);
			break;
		case 13:
			Ve(t, e),
				Ze(e),
				(o = e.child),
				o.flags & 8192 &&
					((i = o.memoizedState !== null),
					(o.stateNode.isHidden = i),
					!i ||
						(o.alternate !== null && o.alternate.memoizedState !== null) ||
						(Us = ne())),
				r & 4 && fa(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((ye = (a = ye) || d), Ve(t, e), (ye = a)) : Ve(t, e),
				Ze(e),
				r & 8192)
			) {
				if (
					((a = e.memoizedState !== null),
					(e.stateNode.isHidden = a) && !d && e.mode & 1)
				)
					for (M = e, d = e.child; d !== null; ) {
						for (h = M = d; M !== null; ) {
							switch (((m = M), (w = m.child), m.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									tr(4, m, m.return);
									break;
								case 1:
									hn(m, m.return);
									var g = m.stateNode;
									if (typeof g.componentWillUnmount == 'function') {
										(r = m), (n = m.return);
										try {
											(t = r),
												(g.props = t.memoizedProps),
												(g.state = t.memoizedState),
												g.componentWillUnmount();
										} catch (v) {
											ee(r, n, v);
										}
									}
									break;
								case 5:
									hn(m, m.return);
									break;
								case 22:
									if (m.memoizedState !== null) {
										pa(h);
										continue;
									}
							}
							w !== null ? ((w.return = m), (M = w)) : pa(h);
						}
						d = d.sibling;
					}
				e: for (d = null, h = e; ; ) {
					if (h.tag === 5) {
						if (d === null) {
							d = h;
							try {
								(o = h.stateNode),
									a
										? ((i = o.style),
										  typeof i.setProperty == 'function'
												? i.setProperty('display', 'none', 'important')
												: (i.display = 'none'))
										: ((s = h.stateNode),
										  (u = h.memoizedProps.style),
										  (l =
												u != null && u.hasOwnProperty('display')
													? u.display
													: null),
										  (s.style.display = Sc('display', l)));
							} catch (v) {
								ee(e, e.return, v);
							}
						}
					} else if (h.tag === 6) {
						if (d === null)
							try {
								h.stateNode.nodeValue = a ? '' : h.memoizedProps;
							} catch (v) {
								ee(e, e.return, v);
							}
					} else if (
						((h.tag !== 22 && h.tag !== 23) ||
							h.memoizedState === null ||
							h === e) &&
						h.child !== null
					) {
						(h.child.return = h), (h = h.child);
						continue;
					}
					if (h === e) break e;
					for (; h.sibling === null; ) {
						if (h.return === null || h.return === e) break e;
						d === h && (d = null), (h = h.return);
					}
					d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
				}
			}
			break;
		case 19:
			Ve(t, e), Ze(e), r & 4 && fa(e);
			break;
		case 21:
			break;
		default:
			Ve(t, e), Ze(e);
	}
}
function Ze(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Xf(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(k(160));
			}
			switch (r.tag) {
				case 5:
					var o = r.stateNode;
					r.flags & 32 && (sr(o, ''), (r.flags &= -33));
					var i = ca(e);
					Fl(e, i, o);
					break;
				case 3:
				case 4:
					var l = r.stateNode.containerInfo,
						s = ca(e);
					Al(e, s, l);
					break;
				default:
					throw Error(k(161));
			}
		} catch (u) {
			ee(e, e.return, u);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function _1(e, t, n) {
	(M = e), Zf(e);
}
function Zf(e, t, n) {
	for (var r = (e.mode & 1) !== 0; M !== null; ) {
		var o = M,
			i = o.child;
		if (o.tag === 22 && r) {
			var l = o.memoizedState !== null || Qr;
			if (!l) {
				var s = o.alternate,
					u = (s !== null && s.memoizedState !== null) || ye;
				s = Qr;
				var a = ye;
				if (((Qr = l), (ye = u) && !a))
					for (M = o; M !== null; )
						(l = M),
							(u = l.child),
							l.tag === 22 && l.memoizedState !== null
								? ha(o)
								: u !== null
								? ((u.return = l), (M = u))
								: ha(o);
				for (; i !== null; ) (M = i), Zf(i), (i = i.sibling);
				(M = o), (Qr = s), (ye = a);
			}
			da(e);
		} else
			o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (M = i)) : da(e);
	}
}
function da(e) {
	for (; M !== null; ) {
		var t = M;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ye || qo(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !ye)
								if (n === null) r.componentDidMount();
								else {
									var o =
										t.elementType === t.type
											? n.memoizedProps
											: We(t.type, n.memoizedProps);
									r.componentDidUpdate(
										o,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var i = t.updateQueue;
							i !== null && Xu(t, i, r);
							break;
						case 3:
							var l = t.updateQueue;
							if (l !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Xu(t, l, n);
							}
							break;
						case 5:
							var s = t.stateNode;
							if (n === null && t.flags & 4) {
								n = s;
								var u = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										u.autoFocus && n.focus();
										break;
									case 'img':
										u.src && (n.src = u.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var a = t.alternate;
								if (a !== null) {
									var d = a.memoizedState;
									if (d !== null) {
										var h = d.dehydrated;
										h !== null && fr(h);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(k(163));
					}
				ye || (t.flags & 512 && Il(t));
			} catch (m) {
				ee(t, t.return, m);
			}
		}
		if (t === e) {
			M = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (M = n);
			break;
		}
		M = t.return;
	}
}
function pa(e) {
	for (; M !== null; ) {
		var t = M;
		if (t === e) {
			M = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (M = n);
			break;
		}
		M = t.return;
	}
}
function ha(e) {
	for (; M !== null; ) {
		var t = M;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						qo(4, t);
					} catch (u) {
						ee(t, n, u);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var o = t.return;
						try {
							r.componentDidMount();
						} catch (u) {
							ee(t, o, u);
						}
					}
					var i = t.return;
					try {
						Il(t);
					} catch (u) {
						ee(t, i, u);
					}
					break;
				case 5:
					var l = t.return;
					try {
						Il(t);
					} catch (u) {
						ee(t, l, u);
					}
			}
		} catch (u) {
			ee(t, t.return, u);
		}
		if (t === e) {
			M = null;
			break;
		}
		var s = t.sibling;
		if (s !== null) {
			(s.return = t.return), (M = s);
			break;
		}
		M = t.return;
	}
}
var P1 = Math.ceil,
	Io = mt.ReactCurrentDispatcher,
	As = mt.ReactCurrentOwner,
	je = mt.ReactCurrentBatchConfig,
	b = 0,
	ae = null,
	re = null,
	fe = 0,
	Te = 0,
	mn = Ft(0),
	ie = 0,
	xr = null,
	Gt = 0,
	ei = 0,
	Fs = 0,
	nr = null,
	Ce = null,
	Us = 0,
	Rn = 1 / 0,
	ot = null,
	Ao = !1,
	Ul = null,
	Lt = null,
	Kr = !1,
	Ct = null,
	Fo = 0,
	rr = 0,
	$l = null,
	uo = -1,
	ao = 0;
function ze() {
	return b & 6 ? ne() : uo !== -1 ? uo : (uo = ne());
}
function Tt(e) {
	return e.mode & 1
		? b & 2 && fe !== 0
			? fe & -fe
			: f1.transition !== null
			? (ao === 0 && (ao = Dc()), ao)
			: ((e = Q),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bc(e.type))),
			  e)
		: 1;
}
function Ye(e, t, n, r) {
	if (50 < rr) throw ((rr = 0), ($l = null), Error(k(185)));
	_r(e, n, r),
		(!(b & 2) || e !== ae) &&
			(e === ae && (!(b & 2) && (ei |= n), ie === 4 && xt(e, fe)),
			Pe(e, r),
			n === 1 && b === 0 && !(t.mode & 1) && ((Rn = ne() + 500), Go && Ut()));
}
function Pe(e, t) {
	var n = e.callbackNode;
	fh(e, t);
	var r = zo(e, e === ae ? fe : 0);
	if (r === 0)
		n !== null && ku(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && ku(n), t === 1))
			e.tag === 0 ? c1(ma.bind(null, e)) : sf(ma.bind(null, e)),
				l1(function () {
					!(b & 6) && Ut();
				}),
				(n = null);
		else {
			switch (Ic(r)) {
				case 1:
					n = cs;
					break;
				case 4:
					n = Oc;
					break;
				case 16:
					n = wo;
					break;
				case 536870912:
					n = Mc;
					break;
				default:
					n = wo;
			}
			n = ld(n, qf.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function qf(e, t) {
	if (((uo = -1), (ao = 0), b & 6)) throw Error(k(327));
	var n = e.callbackNode;
	if (Sn() && e.callbackNode !== n) return null;
	var r = zo(e, e === ae ? fe : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Uo(e, r);
	else {
		t = r;
		var o = b;
		b |= 2;
		var i = td();
		(ae !== e || fe !== t) && ((ot = null), (Rn = ne() + 500), bt(e, t));
		do
			try {
				T1();
				break;
			} catch (s) {
				ed(e, s);
			}
		while (1);
		ks(),
			(Io.current = i),
			(b = o),
			re !== null ? (t = 0) : ((ae = null), (fe = 0), (t = ie));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((o = dl(e)), o !== 0 && ((r = o), (t = jl(e, o)))), t === 1)
		)
			throw ((n = xr), bt(e, 0), xt(e, r), Pe(e, ne()), n);
		if (t === 6) xt(e, r);
		else {
			if (
				((o = e.current.alternate),
				!(r & 30) &&
					!R1(o) &&
					((t = Uo(e, r)),
					t === 2 && ((i = dl(e)), i !== 0 && ((r = i), (t = jl(e, i)))),
					t === 1))
			)
				throw ((n = xr), bt(e, 0), xt(e, r), Pe(e, ne()), n);
			switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(k(345));
				case 2:
					jt(e, Ce, ot);
					break;
				case 3:
					if (
						(xt(e, r), (r & 130023424) === r && ((t = Us + 500 - ne()), 10 < t))
					) {
						if (zo(e, 0) !== 0) break;
						if (((o = e.suspendedLanes), (o & r) !== r)) {
							ze(), (e.pingedLanes |= e.suspendedLanes & o);
							break;
						}
						e.timeoutHandle = zl(jt.bind(null, e, Ce, ot), t);
						break;
					}
					jt(e, Ce, ot);
					break;
				case 4:
					if ((xt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, o = -1; 0 < r; ) {
						var l = 31 - Ke(r);
						(i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
					}
					if (
						((r = o),
						(r = ne() - r),
						(r =
							(120 > r
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
								: 1960 * P1(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = zl(jt.bind(null, e, Ce, ot), r);
						break;
					}
					jt(e, Ce, ot);
					break;
				case 5:
					jt(e, Ce, ot);
					break;
				default:
					throw Error(k(329));
			}
		}
	}
	return Pe(e, ne()), e.callbackNode === n ? qf.bind(null, e) : null;
}
function jl(e, t) {
	var n = nr;
	return (
		e.current.memoizedState.isDehydrated && (bt(e, t).flags |= 256),
		(e = Uo(e, t)),
		e !== 2 && ((t = Ce), (Ce = n), t !== null && Bl(t)),
		e
	);
}
function Bl(e) {
	Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function R1(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var o = n[r],
						i = o.getSnapshot;
					o = o.value;
					try {
						if (!Xe(i(), o)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function xt(e, t) {
	for (
		t &= ~Fs,
			t &= ~ei,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Ke(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function ma(e) {
	if (b & 6) throw Error(k(327));
	Sn();
	var t = zo(e, 0);
	if (!(t & 1)) return Pe(e, ne()), null;
	var n = Uo(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = dl(e);
		r !== 0 && ((t = r), (n = jl(e, r)));
	}
	if (n === 1) throw ((n = xr), bt(e, 0), xt(e, t), Pe(e, ne()), n);
	if (n === 6) throw Error(k(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		jt(e, Ce, ot),
		Pe(e, ne()),
		null
	);
}
function $s(e, t) {
	var n = b;
	b |= 1;
	try {
		return e(t);
	} finally {
		(b = n), b === 0 && ((Rn = ne() + 500), Go && Ut());
	}
}
function Jt(e) {
	Ct !== null && Ct.tag === 0 && !(b & 6) && Sn();
	var t = b;
	b |= 1;
	var n = je.transition,
		r = Q;
	try {
		if (((je.transition = null), (Q = 1), e)) return e();
	} finally {
		(Q = r), (je.transition = n), (b = t), !(b & 6) && Ut();
	}
}
function js() {
	(Te = mn.current), X(mn);
}
function bt(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), i1(n)), re !== null))
		for (n = re.return; n !== null; ) {
			var r = n;
			switch ((zs(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Eo();
					break;
				case 3:
					_n(), X(Ne), X(ve), Rs();
					break;
				case 5:
					Ps(r);
					break;
				case 4:
					_n();
					break;
				case 13:
					X(J);
					break;
				case 19:
					X(J);
					break;
				case 10:
					Cs(r.type._context);
					break;
				case 22:
				case 23:
					js();
			}
			n = n.return;
		}
	if (
		((ae = e),
		(re = e = Ot(e.current, null)),
		(fe = Te = t),
		(ie = 0),
		(xr = null),
		(Fs = ei = Gt = 0),
		(Ce = nr = null),
		Vt !== null)
	) {
		for (t = 0; t < Vt.length; t++)
			if (((n = Vt[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var o = r.next,
					i = n.pending;
				if (i !== null) {
					var l = i.next;
					(i.next = o), (r.next = l);
				}
				n.pending = r;
			}
		Vt = null;
	}
	return e;
}
function ed(e, t) {
	do {
		var n = re;
		try {
			if ((ks(), (io.current = Do), Mo)) {
				for (var r = Z.memoizedState; r !== null; ) {
					var o = r.queue;
					o !== null && (o.pending = null), (r = r.next);
				}
				Mo = !1;
			}
			if (
				((Xt = 0),
				(ue = oe = Z = null),
				(er = !1),
				(wr = 0),
				(As.current = null),
				n === null || n.return === null)
			) {
				(ie = 1), (xr = t), (re = null);
				break;
			}
			e: {
				var i = e,
					l = n.return,
					s = n,
					u = t;
				if (
					((t = fe),
					(s.flags |= 32768),
					u !== null && typeof u == 'object' && typeof u.then == 'function')
				) {
					var a = u,
						d = s,
						h = d.tag;
					if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
						var m = d.alternate;
						m
							? ((d.updateQueue = m.updateQueue),
							  (d.memoizedState = m.memoizedState),
							  (d.lanes = m.lanes))
							: ((d.updateQueue = null), (d.memoizedState = null));
					}
					var w = na(l);
					if (w !== null) {
						(w.flags &= -257),
							ra(w, l, s, i, t),
							w.mode & 1 && ta(i, a, t),
							(t = w),
							(u = a);
						var g = t.updateQueue;
						if (g === null) {
							var v = new Set();
							v.add(u), (t.updateQueue = v);
						} else g.add(u);
						break e;
					} else {
						if (!(t & 1)) {
							ta(i, a, t), Bs();
							break e;
						}
						u = Error(k(426));
					}
				} else if (G && s.mode & 1) {
					var D = na(l);
					if (D !== null) {
						!(D.flags & 65536) && (D.flags |= 256),
							ra(D, l, s, i, t),
							Ss(Pn(u, s));
						break e;
					}
				}
				(i = u = Pn(u, s)),
					ie !== 4 && (ie = 2),
					nr === null ? (nr = [i]) : nr.push(i),
					(i = l);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var f = Ff(i, u, t);
							Yu(i, f);
							break e;
						case 1:
							s = u;
							var c = i.type,
								p = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof c.getDerivedStateFromError == 'function' ||
									(p !== null &&
										typeof p.componentDidCatch == 'function' &&
										(Lt === null || !Lt.has(p))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var S = Uf(i, s, t);
								Yu(i, S);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			rd(n);
		} catch (N) {
			(t = N), re === n && n !== null && (re = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function td() {
	var e = Io.current;
	return (Io.current = Do), e === null ? Do : e;
}
function Bs() {
	(ie === 0 || ie === 3 || ie === 2) && (ie = 4),
		ae === null || (!(Gt & 268435455) && !(ei & 268435455)) || xt(ae, fe);
}
function Uo(e, t) {
	var n = b;
	b |= 2;
	var r = td();
	(ae !== e || fe !== t) && ((ot = null), bt(e, t));
	do
		try {
			L1();
			break;
		} catch (o) {
			ed(e, o);
		}
	while (1);
	if ((ks(), (b = n), (Io.current = r), re !== null)) throw Error(k(261));
	return (ae = null), (fe = 0), ie;
}
function L1() {
	for (; re !== null; ) nd(re);
}
function T1() {
	for (; re !== null && !nh(); ) nd(re);
}
function nd(e) {
	var t = id(e.alternate, e, Te);
	(e.memoizedProps = e.pendingProps),
		t === null ? rd(e) : (re = t),
		(As.current = null);
}
function rd(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = C1(n, t)), n !== null)) {
				(n.flags &= 32767), (re = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ie = 6), (re = null);
				return;
			}
		} else if (((n = k1(n, t, Te)), n !== null)) {
			re = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			re = t;
			return;
		}
		re = t = e;
	} while (t !== null);
	ie === 0 && (ie = 5);
}
function jt(e, t, n) {
	var r = Q,
		o = je.transition;
	try {
		(je.transition = null), (Q = 1), O1(e, t, n, r);
	} finally {
		(je.transition = o), (Q = r);
	}
	return null;
}
function O1(e, t, n, r) {
	do Sn();
	while (Ct !== null);
	if (b & 6) throw Error(k(327));
	n = e.finishedWork;
	var o = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(k(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(dh(e, i),
		e === ae && ((re = ae = null), (fe = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Kr ||
			((Kr = !0),
			ld(wo, function () {
				return Sn(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = je.transition), (je.transition = null);
		var l = Q;
		Q = 1;
		var s = b;
		(b |= 4),
			(As.current = null),
			N1(e, n),
			Jf(n, e),
			Zh(vl),
			(So = !!gl),
			(vl = gl = null),
			(e.current = n),
			_1(n),
			rh(),
			(b = s),
			(Q = l),
			(je.transition = i);
	} else e.current = n;
	if (
		(Kr && ((Kr = !1), (Ct = e), (Fo = o)),
		(i = e.pendingLanes),
		i === 0 && (Lt = null),
		lh(n.stateNode),
		Pe(e, ne()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
	if (Ao) throw ((Ao = !1), (e = Ul), (Ul = null), e);
	return (
		Fo & 1 && e.tag !== 0 && Sn(),
		(i = e.pendingLanes),
		i & 1 ? (e === $l ? rr++ : ((rr = 0), ($l = e))) : (rr = 0),
		Ut(),
		null
	);
}
function Sn() {
	if (Ct !== null) {
		var e = Ic(Fo),
			t = je.transition,
			n = Q;
		try {
			if (((je.transition = null), (Q = 16 > e ? 16 : e), Ct === null))
				var r = !1;
			else {
				if (((e = Ct), (Ct = null), (Fo = 0), b & 6)) throw Error(k(331));
				var o = b;
				for (b |= 4, M = e.current; M !== null; ) {
					var i = M,
						l = i.child;
					if (M.flags & 16) {
						var s = i.deletions;
						if (s !== null) {
							for (var u = 0; u < s.length; u++) {
								var a = s[u];
								for (M = a; M !== null; ) {
									var d = M;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											tr(8, d, i);
									}
									var h = d.child;
									if (h !== null) (h.return = d), (M = h);
									else
										for (; M !== null; ) {
											d = M;
											var m = d.sibling,
												w = d.return;
											if ((Yf(d), d === a)) {
												M = null;
												break;
											}
											if (m !== null) {
												(m.return = w), (M = m);
												break;
											}
											M = w;
										}
								}
							}
							var g = i.alternate;
							if (g !== null) {
								var v = g.child;
								if (v !== null) {
									g.child = null;
									do {
										var D = v.sibling;
										(v.sibling = null), (v = D);
									} while (v !== null);
								}
							}
							M = i;
						}
					}
					if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (M = l);
					else
						e: for (; M !== null; ) {
							if (((i = M), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										tr(9, i, i.return);
								}
							var f = i.sibling;
							if (f !== null) {
								(f.return = i.return), (M = f);
								break e;
							}
							M = i.return;
						}
				}
				var c = e.current;
				for (M = c; M !== null; ) {
					l = M;
					var p = l.child;
					if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (M = p);
					else
						e: for (l = c; M !== null; ) {
							if (((s = M), s.flags & 2048))
								try {
									switch (s.tag) {
										case 0:
										case 11:
										case 15:
											qo(9, s);
									}
								} catch (N) {
									ee(s, s.return, N);
								}
							if (s === l) {
								M = null;
								break e;
							}
							var S = s.sibling;
							if (S !== null) {
								(S.return = s.return), (M = S);
								break e;
							}
							M = s.return;
						}
				}
				if (
					((b = o), Ut(), nt && typeof nt.onPostCommitFiberRoot == 'function')
				)
					try {
						nt.onPostCommitFiberRoot(bo, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(Q = n), (je.transition = t);
		}
	}
	return !1;
}
function ya(e, t, n) {
	(t = Pn(n, t)),
		(t = Ff(e, t, 1)),
		(e = Rt(e, t, 1)),
		(t = ze()),
		e !== null && (_r(e, 1, t), Pe(e, t));
}
function ee(e, t, n) {
	if (e.tag === 3) ya(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				ya(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(Lt === null || !Lt.has(r)))
				) {
					(e = Pn(n, e)),
						(e = Uf(t, e, 1)),
						(t = Rt(t, e, 1)),
						(e = ze()),
						t !== null && (_r(t, 1, e), Pe(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function M1(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = ze()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ae === e &&
			(fe & n) === n &&
			(ie === 4 || (ie === 3 && (fe & 130023424) === fe && 500 > ne() - Us)
				? bt(e, 0)
				: (Fs |= n)),
		Pe(e, t);
}
function od(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Fr), (Fr <<= 1), !(Fr & 130023424) && (Fr = 4194304))
			: (t = 1));
	var n = ze();
	(e = dt(e, t)), e !== null && (_r(e, t, n), Pe(e, n));
}
function D1(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), od(e, n);
}
function I1(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				o = e.memoizedState;
			o !== null && (n = o.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(k(314));
	}
	r !== null && r.delete(t), od(e, n);
}
var id;
id = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ne.current) Ee = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Ee = !1), x1(e, t, n);
			Ee = !!(e.flags & 131072);
		}
	else (Ee = !1), G && t.flags & 1048576 && uf(t, Po, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			so(e, t), (e = t.pendingProps);
			var o = Cn(t, ve.current);
			zn(t, n), (o = Ts(null, t, r, e, o, n));
			var i = Os();
			return (
				(t.flags |= 1),
				typeof o == 'object' &&
				o !== null &&
				typeof o.render == 'function' &&
				o.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  _e(r) ? ((i = !0), No(t)) : (i = !1),
					  (t.memoizedState =
							o.state !== null && o.state !== void 0 ? o.state : null),
					  Ns(t),
					  (o.updater = Jo),
					  (t.stateNode = o),
					  (o._reactInternals = t),
					  _l(t, r, e, n),
					  (t = Ll(null, t, r, !0, i, n)))
					: ((t.tag = 0), G && i && ws(t), we(null, t, o, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(so(e, t),
					(e = t.pendingProps),
					(o = r._init),
					(r = o(r._payload)),
					(t.type = r),
					(o = t.tag = F1(r)),
					(e = We(r, e)),
					o)
				) {
					case 0:
						t = Rl(null, t, r, e, n);
						break e;
					case 1:
						t = la(null, t, r, e, n);
						break e;
					case 11:
						t = oa(null, t, r, e, n);
						break e;
					case 14:
						t = ia(null, t, r, We(r.type, e), n);
						break e;
				}
				throw Error(k(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : We(r, o)),
				Rl(e, t, r, o, n)
			);
		case 1:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : We(r, o)),
				la(e, t, r, o, n)
			);
		case 3:
			e: {
				if ((Hf(t), e === null)) throw Error(k(387));
				(r = t.pendingProps),
					(i = t.memoizedState),
					(o = i.element),
					df(e, t),
					To(t, r, null, n);
				var l = t.memoizedState;
				if (((r = l.element), i.isDehydrated))
					if (
						((i = {
							element: r,
							isDehydrated: !1,
							cache: l.cache,
							pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
							transitions: l.transitions,
						}),
						(t.updateQueue.baseState = i),
						(t.memoizedState = i),
						t.flags & 256)
					) {
						(o = Pn(Error(k(423)), t)), (t = sa(e, t, r, n, o));
						break e;
					} else if (r !== o) {
						(o = Pn(Error(k(424)), t)), (t = sa(e, t, r, n, o));
						break e;
					} else
						for (
							Oe = Pt(t.stateNode.containerInfo.firstChild),
								Me = t,
								G = !0,
								Qe = null,
								n = yf(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((En(), r === o)) {
						t = pt(e, t, n);
						break e;
					}
					we(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				gf(t),
				e === null && Cl(t),
				(r = t.type),
				(o = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(l = o.children),
				wl(r, o) ? (l = null) : i !== null && wl(r, i) && (t.flags |= 32),
				Bf(e, t),
				we(e, t, l, n),
				t.child
			);
		case 6:
			return e === null && Cl(t), null;
		case 13:
			return Vf(e, t, n);
		case 4:
			return (
				_s(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Nn(t, null, r, n)) : we(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : We(r, o)),
				oa(e, t, r, o, n)
			);
		case 7:
			return we(e, t, t.pendingProps, n), t.child;
		case 8:
			return we(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return we(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(o = t.pendingProps),
					(i = t.memoizedProps),
					(l = o.value),
					K(Ro, r._currentValue),
					(r._currentValue = l),
					i !== null)
				)
					if (Xe(i.value, l)) {
						if (i.children === o.children && !Ne.current) {
							t = pt(e, t, n);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var s = i.dependencies;
							if (s !== null) {
								l = i.child;
								for (var u = s.firstContext; u !== null; ) {
									if (u.context === r) {
										if (i.tag === 1) {
											(u = at(-1, n & -n)), (u.tag = 2);
											var a = i.updateQueue;
											if (a !== null) {
												a = a.shared;
												var d = a.pending;
												d === null
													? (u.next = u)
													: ((u.next = d.next), (d.next = u)),
													(a.pending = u);
											}
										}
										(i.lanes |= n),
											(u = i.alternate),
											u !== null && (u.lanes |= n),
											El(i.return, n, t),
											(s.lanes |= n);
										break;
									}
									u = u.next;
								}
							} else if (i.tag === 10) l = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((l = i.return), l === null)) throw Error(k(341));
								(l.lanes |= n),
									(s = l.alternate),
									s !== null && (s.lanes |= n),
									El(l, n, t),
									(l = i.sibling);
							} else l = i.child;
							if (l !== null) l.return = i;
							else
								for (l = i; l !== null; ) {
									if (l === t) {
										l = null;
										break;
									}
									if (((i = l.sibling), i !== null)) {
										(i.return = l.return), (l = i);
										break;
									}
									l = l.return;
								}
							i = l;
						}
				we(e, t, o.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(o = t.type),
				(r = t.pendingProps.children),
				zn(t, n),
				(o = Be(o)),
				(r = r(o)),
				(t.flags |= 1),
				we(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(o = We(r, t.pendingProps)),
				(o = We(r.type, o)),
				ia(e, t, r, o, n)
			);
		case 15:
			return $f(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : We(r, o)),
				so(e, t),
				(t.tag = 1),
				_e(r) ? ((e = !0), No(t)) : (e = !1),
				zn(t, n),
				hf(t, r, o),
				_l(t, r, o, n),
				Ll(null, t, r, !0, e, n)
			);
		case 19:
			return Wf(e, t, n);
		case 22:
			return jf(e, t, n);
	}
	throw Error(k(156, t.tag));
};
function ld(e, t) {
	return Tc(e, t);
}
function A1(e, t, n, r) {
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
function $e(e, t, n, r) {
	return new A1(e, t, n, r);
}
function Hs(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function F1(e) {
	if (typeof e == 'function') return Hs(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === ss)) return 11;
		if (e === us) return 14;
	}
	return 2;
}
function Ot(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = $e(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function co(e, t, n, r, o, i) {
	var l = 2;
	if (((r = e), typeof e == 'function')) Hs(e) && (l = 1);
	else if (typeof e == 'string') l = 5;
	else
		e: switch (e) {
			case on:
				return Qt(n.children, o, i, t);
			case ls:
				(l = 8), (o |= 8);
				break;
			case Ji:
				return (
					(e = $e(12, n, t, o | 2)), (e.elementType = Ji), (e.lanes = i), e
				);
			case Zi:
				return (e = $e(13, n, t, o)), (e.elementType = Zi), (e.lanes = i), e;
			case qi:
				return (e = $e(19, n, t, o)), (e.elementType = qi), (e.lanes = i), e;
			case hc:
				return ti(n, o, i, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case dc:
							l = 10;
							break e;
						case pc:
							l = 9;
							break e;
						case ss:
							l = 11;
							break e;
						case us:
							l = 14;
							break e;
						case wt:
							(l = 16), (r = null);
							break e;
					}
				throw Error(k(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = $e(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
	);
}
function Qt(e, t, n, r) {
	return (e = $e(7, e, r, t)), (e.lanes = n), e;
}
function ti(e, t, n, r) {
	return (
		(e = $e(22, e, r, t)),
		(e.elementType = hc),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Fi(e, t, n) {
	return (e = $e(6, e, null, t)), (e.lanes = n), e;
}
function Ui(e, t, n) {
	return (
		(t = $e(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function U1(e, t, n, r, o) {
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
		(this.eventTimes = vi(0)),
		(this.expirationTimes = vi(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = vi(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = o),
		(this.mutableSourceEagerHydrationData = null);
}
function Vs(e, t, n, r, o, i, l, s, u) {
	return (
		(e = new U1(e, t, n, s, u)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = $e(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Ns(i),
		e
	);
}
function $1(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: rn,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function sd(e) {
	if (!e) return It;
	e = e._reactInternals;
	e: {
		if (en(e) !== e || e.tag !== 1) throw Error(k(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (_e(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(k(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (_e(n)) return lf(e, n, t);
	}
	return t;
}
function ud(e, t, n, r, o, i, l, s, u) {
	return (
		(e = Vs(n, r, !0, e, o, i, l, s, u)),
		(e.context = sd(null)),
		(n = e.current),
		(r = ze()),
		(o = Tt(n)),
		(i = at(r, o)),
		(i.callback = t ?? null),
		Rt(n, i, o),
		(e.current.lanes = o),
		_r(e, o, r),
		Pe(e, r),
		e
	);
}
function ni(e, t, n, r) {
	var o = t.current,
		i = ze(),
		l = Tt(o);
	return (
		(n = sd(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = at(i, l)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Rt(o, t, l)),
		e !== null && (Ye(e, o, l, i), oo(e, o, l)),
		l
	);
}
function $o(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function ga(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Ws(e, t) {
	ga(e, t), (e = e.alternate) && ga(e, t);
}
function j1() {
	return null;
}
var ad =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function bs(e) {
	this._internalRoot = e;
}
ri.prototype.render = bs.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(k(409));
	ni(e, t, null, null);
};
ri.prototype.unmount = bs.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Jt(function () {
			ni(null, e, null, null);
		}),
			(t[ft] = null);
	}
};
function ri(e) {
	this._internalRoot = e;
}
ri.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Uc();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++);
		St.splice(n, 0, e), n === 0 && jc(e);
	}
};
function Qs(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function oi(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function va() {}
function B1(e, t, n, r, o) {
	if (o) {
		if (typeof r == 'function') {
			var i = r;
			r = function () {
				var a = $o(l);
				i.call(a);
			};
		}
		var l = ud(t, r, e, 0, null, !1, !1, '', va);
		return (
			(e._reactRootContainer = l),
			(e[ft] = l.current),
			hr(e.nodeType === 8 ? e.parentNode : e),
			Jt(),
			l
		);
	}
	for (; (o = e.lastChild); ) e.removeChild(o);
	if (typeof r == 'function') {
		var s = r;
		r = function () {
			var a = $o(u);
			s.call(a);
		};
	}
	var u = Vs(e, 0, !1, null, null, !1, !1, '', va);
	return (
		(e._reactRootContainer = u),
		(e[ft] = u.current),
		hr(e.nodeType === 8 ? e.parentNode : e),
		Jt(function () {
			ni(t, u, n, r);
		}),
		u
	);
}
function ii(e, t, n, r, o) {
	var i = n._reactRootContainer;
	if (i) {
		var l = i;
		if (typeof o == 'function') {
			var s = o;
			o = function () {
				var u = $o(l);
				s.call(u);
			};
		}
		ni(t, l, e, o);
	} else l = B1(n, t, e, o, r);
	return $o(l);
}
Ac = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Kn(t.pendingLanes);
				n !== 0 &&
					(fs(t, n | 1), Pe(t, ne()), !(b & 6) && ((Rn = ne() + 500), Ut()));
			}
			break;
		case 13:
			Jt(function () {
				var r = dt(e, 1);
				if (r !== null) {
					var o = ze();
					Ye(r, e, 1, o);
				}
			}),
				Ws(e, 1);
	}
};
ds = function (e) {
	if (e.tag === 13) {
		var t = dt(e, 134217728);
		if (t !== null) {
			var n = ze();
			Ye(t, e, 134217728, n);
		}
		Ws(e, 134217728);
	}
};
Fc = function (e) {
	if (e.tag === 13) {
		var t = Tt(e),
			n = dt(e, t);
		if (n !== null) {
			var r = ze();
			Ye(n, e, t, r);
		}
		Ws(e, t);
	}
};
Uc = function () {
	return Q;
};
$c = function (e, t) {
	var n = Q;
	try {
		return (Q = e), t();
	} finally {
		Q = n;
	}
};
al = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((nl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var o = Xo(r);
						if (!o) throw Error(k(90));
						yc(r), nl(r, o);
					}
				}
			}
			break;
		case 'textarea':
			vc(e, n);
			break;
		case 'select':
			(t = n.value), t != null && yn(e, !!n.multiple, t, !1);
	}
};
Ec = $s;
Nc = Jt;
var H1 = { usingClientEntryPoint: !1, Events: [Rr, an, Xo, kc, Cc, $s] },
	Wn = {
		findFiberByHostInstance: Ht,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	V1 = {
		bundleType: Wn.bundleType,
		version: Wn.version,
		rendererPackageName: Wn.rendererPackageName,
		rendererConfig: Wn.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: mt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Rc(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Wn.findFiberByHostInstance || j1,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Yr.isDisabled && Yr.supportsFiber)
		try {
			(bo = Yr.inject(V1)), (nt = Yr);
		} catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H1;
Ie.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Qs(t)) throw Error(k(200));
	return $1(e, t, null, n);
};
Ie.createRoot = function (e, t) {
	if (!Qs(e)) throw Error(k(299));
	var n = !1,
		r = '',
		o = ad;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
		(t = Vs(e, 1, !1, null, null, n, !1, r, o)),
		(e[ft] = t.current),
		hr(e.nodeType === 8 ? e.parentNode : e),
		new bs(t)
	);
};
Ie.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(k(188))
			: ((e = Object.keys(e).join(',')), Error(k(268, e)));
	return (e = Rc(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
	return Jt(e);
};
Ie.hydrate = function (e, t, n) {
	if (!oi(t)) throw Error(k(200));
	return ii(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
	if (!Qs(e)) throw Error(k(405));
	var r = (n != null && n.hydratedSources) || null,
		o = !1,
		i = '',
		l = ad;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (o = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
		(t = ud(t, null, e, 1, n ?? null, o, !1, i, l)),
		(e[ft] = t.current),
		hr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(o = n._getVersion),
				(o = o(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, o])
					: t.mutableSourceEagerHydrationData.push(n, o);
	return new ri(t);
};
Ie.render = function (e, t, n) {
	if (!oi(t)) throw Error(k(200));
	return ii(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
	if (!oi(e)) throw Error(k(40));
	return e._reactRootContainer
		? (Jt(function () {
				ii(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[ft] = null);
				});
		  }),
		  !0)
		: !1;
};
Ie.unstable_batchedUpdates = $s;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!oi(n)) throw Error(k(200));
	if (e == null || e._reactInternals === void 0) throw Error(k(38));
	return ii(e, t, n, !1, r);
};
Ie.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
	function t() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
			} catch (n) {
				console.error(n);
			}
	}
	t(), (e.exports = Ie);
})(j0);
var cd,
	wa = Yi;
(cd = wa.createRoot), wa.hydrateRoot;
(() => {
	const e = document.getElementsByClassName('root');
	for (let t = 0; t < e.length; t++) {
		let n = e[t].dataset.review,
			r = e[t].dataset.businessid;
		if (!e[t].classList.contains('root-rendered')) {
			let o = e[t].attachShadow({ mode: 'open' });
			if (
				(e[t].classList.add('root-rendered'),
				!document.getElementById('cozy-widget-style'))
			) {
				let l = document.createElement('style');
				l.setAttribute('id', 'cozy-widget-style'),
					(l.textContent = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit, font-family: "Poppins", font-weight: 400}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:;--tw-brightness:;--tw-contrast:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-saturate:;--tw-sepia:;--tw-drop-shadow:;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:;--tw-brightness:;--tw-contrast:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-saturate:;--tw-sepia:;--tw-drop-shadow:;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}.cozy-font-regular {font-weight: 400;}.cozy-font-medium {font-weight: 500;}.cozy-font-semibold {font-weight: 600;}.cozy-font-bold {font-weight: 700;}.cozy-absolute{position:absolute}.cozy-relative{position:relative}.cozy-inset-0{top:0;right:0;bottom:0;left:0}.cozy-bottom-0{bottom:0}.cozy-left-0{left:0}.cozy-right-0{right:0}.cozy-right-2{right:.5rem}.cozy-top-0{top:0}.cozy-top-1\\/2{top:50%}.cozy-mx-auto{margin-left:auto;margin-right:auto}.cozy-ml-2{margin-left:.5rem}.cozy-mt-5{margin-top:1rem}.cozy-mt-1{margin-top:.25rem}.cozy-mt-2{margin-top:.5rem}.cozy-flex{display:flex}.cozy-grid{display:grid}.cozy-hidden{display:none}.cozy-h-5{height:1.25rem}.cozy-h-10{height:2.5rem}.cozy-h-full{height:100%}.cozy-min-h-\\[200px\\]{min-height:200px}.cozy-min-h-screen{min-height:100vh}.cozy-w-10\\/12{width:83.333333%}.cozy-w-11\\/12{width:91.666667%}.cozy-w-5{width:1.25rem}.cozy-w-10{width:2.5rem}.cozy-w-fit{width:-moz-fit-content;width:fit-content}.cozy-w-full{width:100%}.cozy-min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.cozy-min-w-full{min-width:100%}.cozy-max-w-3xl{max-width:48rem}.cozy-max-w-xs{max-width:20rem}.-cozy-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cozy-cursor-pointer{cursor:pointer}.cozy-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.cozy-flex-col{flex-direction:column}.cozy-flex-wrap{flex-wrap:wrap}.cozy-items-end{align-items:flex-end}.cozy-items-center{align-items:center}.cozy-justify-center{justify-content:center}.cozy-gap-0{gap:0}.cozy-gap-0\\.5{gap:.125rem}.cozy-gap-1{gap:.25rem}.cozy-gap-1\\.5{gap:.375rem}.cozy-gap-12{gap:3rem}.cozy-gap-2{gap:.5rem}.cozy-gap-3{gap:.75rem}.cozy-gap-4{gap:1rem}.cozy-gap-5{gap:1.25rem}.cozy-gap-8{gap:2rem}.cozy-space-y-2>:not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse))}.cozy-space-y-3 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));}.cozy-space-y-5>:not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.cozy-self-stretch{align-self:stretch}.cozy-overflow-hidden{overflow:hidden}.cozy-overflow-x-scroll{overflow-x:scroll}.cozy-overflow-x-hidden {overflow-x: hidden;}.cozy-rounded-2xl{border-radius:1rem}.cozy-rounded{border-radius:.25rem}.cozy-rounded-md{border-radius:.375rem}.cozy-rounded-sm{border-radius:.125rem}.cozy-border{border-width:1px}.cozy-border-2{border-width:2px}.cozy-border-slate-300{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.cozy-border-branding-primary-500 {--tw-border-opacity: 1;border-color: rgb(233 76 137 / var(--tw-border-opacity));}.cozy-border-branding-primary-400 {--tw-border-opacity: 1;border-color: rgb(233 76 137 / var(--tw-border-opacity));}.cozy-bg-branding-primary-500 {--tw-bg-opacity: 1;background-color: rgb(233 76 137 / var(--tw-bg-opacity));}.hover\\:cozy-bg-branding-primary-600:hover{--tw-border-opacity: 1;background-color: rgb(219 71 129 / var(--tw-border-opacity));}.cozy-bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.cozy-bg-light{--tw-bg-opacity:1;background-color:rgb(247 247 248 / var(--tw-bg-opacity))}.cozy-bg-light-neutral-50 {--tw-bg-opacity: 1;background-color: rgb(247 247 248 / var(--tw-bg-opacity));}.cozy-bg-light-neutral-100 {--tw-bg-opacity: 1;background-color: rgb(241 242 244 / var(--tw-bg-opacity));}.cozy-bg-orange-500{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity))}.cozy-bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.cozy-bg-slate-50{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity))}.cozy-bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.cozy-bg-yellow-500{--tw-bg-opacity:1;background-color:rgb(234 179 8 / var(--tw-bg-opacity))}.cozy-bg-zinc-200{--tw-bg-opacity:1;background-color:rgb(228 228 231 / var(--tw-bg-opacity))}.cozy-text-light-neutral-300 {--tw-text-opacity: 1;color: rgb(223 225 230 / var(--tw-text-opacity));}.cozy-text-light-neutral-25 {--tw-text-opacity: 1;color: rgb(255 255 255 / var(--tw-text-opacity));}.cozy-fill-light-neutral-700{fill:#6b778c}.cozy-fill-none{fill:none}.cozy-p-2{padding:.5rem}.cozy-p-3{padding:.75rem}.cozy-p-4{padding:1rem}.cozy-px-3{padding-left:.75rem;padding-right:.75rem}.cozy-px-2{padding-left:.5rem;padding-right:.5rem}.cozy-px-4{padding-left:1rem;padding-right:1rem}.cozy-py-1{padding-top:.25rem;padding-bottom:.25rem}.cozy-py-2{padding-top:.5rem;padding-bottom:.5rem}.cozy-py-4{padding-top:1rem;padding-bottom:1rem}.cozy-p-6{padding:1.5rem}.cozy-py-8{padding-top:2rem;padding-bottom:2rem}.cozy-pr-1{padding-right:.25rem}.cozy-pt-2{padding-top:.5rem}.cozy-text-center{text-align:center}.cozy-text-2xl{font-size:1.5rem;line-height:2rem}.cozy-text-body-2{font-size:1rem;line-height:1.5rem}.cozy-text-title-2{font-size:1.125rem;line-height:1.75rem}.cozy-text-title-1{font-size:1.5rem;line-height:2rem}.cozy-text-caption-1{font-size:1rem;line-height:1.5rem}.cozy-text-body-2{font-size: 2rem/* 32px */;line-height: 2.5rem/* 40px */;letter-spacing: 0.01em;}.cozy-text-body-2{font-size:.875rem;line-height:1.25rem}.cozy-text-xl{font-size:1.25rem;line-height:1.75rem}.cozy-font-bold{font-weight:700}.cozy-uppercase{text-transform:uppercase}.cozy-text-light-neutral-700{--tw-text-opacity:1;color:rgb(107 119 140 / var(--tw-text-opacity))}.cozy-text-branding-primary-500{--tw-text-opacity:1;color:rgb(233 76 137 / var(--tw-text-opacity))}.cozy-bg-branding-primary-500{--tw-border-opacity:1;color:rgb(233 76 137 / var(--tw-border-opacity))}.cozy-text-light-neutral-800 {--tw-text-opacity: 1;color: rgb(37 56 88 / var(--tw-text-opacity));}.cozy-text-light-neutral-25{--tw-text-opacity:1;color:rgb(247 247 248 / var(--tw-text-opacity))}.cozy-underline{text-decoration-line:underline}.cozy-underline-offset-2{text-underline-offset:2px}.cozy-opacity-0{opacity:0}.cozy-opacity-60{opacity:.6}.cozy-opacity-80{opacity:.8}.cozy-shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / .1),0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.cozy-outline{outline-style:solid}.cozy-ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.cozy-ring-brand{--tw-ring-opacity:1;--tw-ring-color:rgb(233 76 137 / var(--tw-ring-opacity))}.cozy-transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.cozy-transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.cozy-duration-150{transition-duration:150ms}.cozy-duration-200{transition-duration:200ms}.cozy-duration-500{transition-duration:500ms}.cozy-duration-75{transition-duration:75ms}.cozy-ease-in-out{transition-timing-function:cubic-bezier(0.4,0,0.2,1)}.last-of-type\\:cozy-pr-0:last-of-type{padding-right:0}.hover\\:cozy-scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:cozy-scale-125:hover{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:cozy-cursor-pointer:hover{cursor:pointer}.hover\\:cozy-bg-black-500:hover{--tw-bg-opacity:1;background-color:rgb(179 186 197 / var(--tw-bg-opacity))}.hover\\:cozy-bg-branding-primary-500:hover{--tw-bg-opacity:1;background-color:rgb(233 76 137 / var(--tw-bg-opacity))}.hover\\:cozy-bg-branding-primary-100:hover{--tw-bg-opacity:1;background-color:rgb(253 242 247 / var(--tw-bg-opacity))}.hover\\:cozy-shadow-md:hover{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / .1),0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:cozy-shadow-sm:hover{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:cozy-ring-light-neutral-300:hover{--tw-ring-opacity:1;--tw-ring-color:rgb(193 199 208 / var(--tw-ring-opacity))}.focus\\:cozy-bg-white:focus{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.focus\\:cozy-ring-offset-2:focus{--tw-ring-offset-width:2px;}.focus\\:cozy-outline-none:focus{outline: 2px solid transparent;outline-offset: 2px;}.focus\\:cozy-ring-2:focus {--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}.focus\\:cozy-ring-branding-primary-400:focus {--tw-ring-opacity: 1;--tw-ring-color: rgb(240 130 172 / var(--tw-ring-opacity));}.disabled\\:cozy-cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cozy-opacity-20:disabled{opacity:.2}.disabled\\:cozy-opacity-40:disabled{opacity:.4}.cozy-group:hover .group-hover\\:cozy-opacity-50{opacity:.5}.cozy-min-w-\\[50\\%\\]{min-width:50%}@media(min-width:640px){.sm\\:cozy-block {display: block;}.sm\\:cozy-hidden{display: hidden;}.sm\\:-cozy-left-8{left:-2rem}.sm\\:-cozy-right-8{right:-2rem}.sm\\:cozy-min-w-\\[50\\%\\]{min-width:50%}.sm\\:cozy-max-w-sm{max-width:24rem}.sm\\:cozy-max-w-xl{max-width:36rem}.sm\\:cozy-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:cozy-flex-row{flex-direction:row}.sm\\:cozy-bg-light{--tw-bg-opacity:1;background-color:rgb(247 247 248 / var(--tw-bg-opacity))}}@media(min-width:768px){.md\\:cozy-block{display:block}.md\\:cozy-w-auto{width:auto}.md\\:cozy-flex-row {flex-direction: row;}.md\\:cozy-min-w-\\[45\\%\\]{min-width:50%}}@media(min-width:1024px){.lg\\:cozy-max-w-3xl{max-width:48rem}}.lg\\:cozy-max-w-full {max-width: 100%;}.cozy-line-clamp-2{overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}.cozy-line-clamp-5{overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 5;}.cozy-self-stretch { align-self: stretch;}.cozy-leading-6 {line-height: 1.5rem/* 24px */;}@keyframes cozy-spin {to {transform: rotate(360deg);}}.cozy-animate-spin {animation: cozy-spin 1s linear infinite;}`),
					o.appendChild(l);
			}
			cd(o).render(
				y(Pa.StrictMode, {
					children: y(tp, {
						children: y('div', {
							className: 'cozy-font cozy-leading-6 cozy-text-light-neutral-800',
							children: y($0, { intent: n, id: r }),
						}),
					}),
				}),
			);
		}
	}
})();
