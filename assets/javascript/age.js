var cookies;

var QueryString = function () {
	
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");

	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = pair[1];
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [query_string[pair[0]], pair[1]];
			query_string[pair[0]] = arr;
		} else {
			query_string[pair[0]].push(pair[1]);
		}
	}
	return query_string;
}();
/**
* Returns the value of the cookie name.
* @param {string} name
* @returns {string}
*/
function readCookie(name, c, C, i) {

	if (cookies) { return cookies[name]; }
	c = document.cookie.split('; ');
	cookies = {};
	for (i = c.length - 1; i >= 0; i--) {
		C = c[i].split('=');
		cookies[C[0]] = C[1];
	}
	return cookies[name];
}
/**
* Checks if the cookie
* @param {string} url
* @returns {string}
*/
function checkAge(url) {

	var laChCookie = readCookie('nameOfCookie');
	if (!laChCookie) {
		window.location.href = 'index.html=' + encodeURIComponent(url);
	}
	return laChCookie;
}
/**
* Sets the cookie cname with value cvallue for expiring in exdays
* and redirects to url.
* @param {string} cname
* @param {string} cvalue
* @param {string} exdays
* @param {string} url
* @returns {}
*/
function setCookie(cname, cvalue, exdays, url) {

	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();

	document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
	domain = "index.html";
	if (!url) {
		url = "index.html";
	}
	window.location.href = decodeURIComponent(url);
}