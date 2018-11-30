
/**
 * Immediately-invoked function expression that configures and instantiates a lyftWebButton.
 * @param {Object} options object for configuring the button (see README.md)
 */
var OPTIONS = {
	scriptSrc: 'assets/javascript/lyftWebButton.min.js',
	namespace: '',
	clientId: 'PLLQE1Zpid_L',
	clientToken: 'vxUWN3naZ4cE4PZ61hmoM2M2XcH6nrU6TeO8ClmVdv5TPVJODUn0YpJR98DLqojmIunQueZUyu0mu6TzaLyf1qNVyWpzJUfJUmqj6WYHh4RTQwlbwmLsmo8=',
	location: {
		pickup: {},
		destination: {
			latitude: '37.7604',
			longitude: '-122.4132',
		},
	},
	parentElement: document.getElementById('lyft-web-button-parent'),
	queryParams: {
		credits: ''
	},
	theme: 'mulberry-dark small',
};
(function (t) {
	var n = this.window,
		e = this.document;
	n.lyftInstanceIndex = n.lyftInstanceIndex || 0;
	var a = t.parentElement,
		c = e.createElement("script");
	c.async = !0, c.onload = function () {
		n.lyftInstanceIndex++;
		var e = t.namespace ? "lyftWebButton" + t.namespace + n.lyftInstanceIndex : "lyftWebButton" + n.lyftInstanceIndex;
		n[e] = n.lyftWebButton, t.objectName = e, n[e].initialize(t)
	}, c.src = t.scriptSrc, a.insertBefore(c, a.childNodes[0])
}).call(this, OPTIONS); 
