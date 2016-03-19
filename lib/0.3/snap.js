//
// SNAP.JS
//

var document = window.document;
var snap = {
	agent: navigator.userAgent,
	url: window.location.href
};
var ls = {
	set: function(nm, txt) {
		localStorage.setItem(nm, txt);
	},
	get: function(nm) {
		return localStorage.getItem(nm);
	}
};
var ss = {
	set: function(nm, txt) {
		sessionStorage.setItem(nm, txt);
	},
	get: function(nm) {
		return sessionStorage.getItem(nm);
	}
};

var arr = [];
var obj = {};
var str = '';
var num = 0;

$(document).ready(function() {
	for(var i = 0; i < as.length; i++) {
	var as = ['color', 'display', 'align', 'top', 'right', 'bottom', 'left', 'position'];
		$('[' + as[i] + ']').css(as[i], $(this).attr(as[i]));
	}
}

//
// Variable Manipulation
//

function char(vb, loc) {
	if(typeof(vb) == 'string') {
		return vb.substring(loc, loc + 1);
	} else {
		console.log('Invalid Variable Type');
	}
}
function random(lo, hi) {
	if(typeof(hi)=='undefined') {
		return Math.floor(Math.random * lo);
	} else {
		var dif = hi - lo;
		return Math.floor((Math.random * dif) + hi);
	}
}
function floor(vb) {
	return Math.floor(vb);
}


//
// Forms
//

function val(sel, res) {
	if(typeof(res)=='undefined') {
		return $('[name="' + sel + '"]').val();
	} else {
		$('[name="' + sel + '"]').val(res);
	}
}
function name(sel) {
	return $('[name="' + sel + '"]');
}
function ph(sel, res) {
	if(typeof(res)=='undefined') {
		return $('[name="' + sel + '"]').attr('placeholder');
	} else {
		$('[name="' + sel + '"]').attr('placeholder', res);
	}
}
function selectify(vb, nm) {
	var res = $(nm);
	if(Array.isArray(vb)) {
		for(var i = 0; i < vb.length; i++) {
			var val = vb[i];
			res.append('<option val="' + val + '">' + val + '</option>');
		}
	} else {
		var keys = Object.keys(vb);
		for(var i = 0; i < keys.length; i++) {
			var val = keys[i];
			var txt = vb[val];
			console.log(val, txt);
			res.append('<option val="' + val + '">' + txt + '</option>');
		}
	}
}
function type(sel) {
	return $('[name=' + sel + ']').attr(type);
}

//
// DOM
//

function clear() {
	$(this).innerHTML('');
}
function remove() {
	$(this).outerHTML('');
}