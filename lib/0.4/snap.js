//
// SNAP.JS - ALPHA 0.4
//

var snap = {
	exists: true,
	version: 0.4,
	agent: navigator.userAgent,
	url: window.location.href
};
var ls = {
	set: function(nm, txt) {
		return localStorage.setItem(nm, txt);
	},
	get: function(nm) {
		return localStorage.getItem(nm);
	},
	list: function() {
		return localStorage;
	}
};
var ss = {
	set: function(nm, txt) {
		sessionStorage.setItem(nm, txt);
	},
	get: function(nm) {
		return sessionStorage.getItem(nm);
	},
	list: function() {
		return sessionStorage;
	}
};
$(document).ready(function() {
	var as = ['color', 'display', 'position'];
	for(var i = 0; i < as.length; i++) {
		$('[' + as[i] + ']').each(function() {
			$(this).css(as[i], $(this).attr(as[i]));
		});
	}
	$('[lorem]').each(function() {
		$(this).lorem(parseInt($(this).attr('lorem')));
	});
	$('sp').each(function() {
		var qu = $(this).attr('val');	
		if(typeof(qu)=='undefined') {
			$(this).html('&nbsp;');
		} else {
			for(var b = 0; b < qu; b++) {
				$(this).append('&nbsp;');
			}
		}
	});
});

//
// Variable Manipulation
//

function char(vb, lc) {
	if(typeof(vb)=='string') {
		return vb.substring(lc, lc + 1);
	} else {
		console.log('Invalid Variable Type');
	}
}

//
// Math
//

function random(nm) {
	return Math.random() * nm;
}
function floor(vb) {
	return Math.floor(vb);
}

//
// Forms
//

function name(sel, res) {
	if(typeof(res)=='undefined') {
		return $('[name=' + sel + ']');
	} else {
		
	}
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

//
// Other
//

jQuery.fn.lorem = function(nm) {
	var ipsum = [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in magna convallis, euismod ipsum tristique, aliquet elit. Mauris arcu erat, sagittis a euismod quis, viverra a ex. Quisque at mollis quam. Aliquam quis aliquam ipsum. Phasellus ut massa eget nunc auctor eleifend. Etiam enim nibh, vehicula eu dapibus finibus, dictum et quam. Vivamus tincidunt vestibulum turpis, et tempus mi tristique id. Cras sit amet metus sit amet lacus pulvinar vulputate. Quisque eget neque elementum, fringilla mauris quis, pellentesque nulla.',
		'Aut recusandae quis perspiciatis earum aperiam eum sed. Labore voluptates provident sed et. Dicta molestias et tenetur nemo eos. Molestias sit ut laborum ad minima. Fugit dolorem asperiores necessitatibus vel ratione laborum quia dolores. Eligendi corrupti omnis modi est harum. Molestias sit iusto facere laboriosam voluptas est temporibus. Eius eos velit ipsa dolor ut optio. Exercitationem aut consectetur maxime beatae. Reprehenderit laudantium voluptates quae molestias.',
		'Nostrum earum id modi quam. Enim molestiae veritatis et quia dolorem non in. Beatae nesciunt velit aperiam vel. Iusto aut quia molestias atque ex. Nulla quia officia delectus quod consequuntur enim illo sint. Quam repellat distinctio dolorem sed nihil aliquam ut molestias. Minima eos reprehenderit dolores earum blanditiis fuga sunt tempore. Sequi modi quam corporis enim rerum eaque necessitatibus animi. Quia adipisci a neque blanditiis dolorem est. Sed fugiat laboriosam deleniti qui. Et non eos vel nostrum non.',
		'Atque corrupti voluptate omnis quia et. Omnis fugiat natus nemo laborum ex eos officiis. Optio sint nam qui in. Sed cum magni veritatis pariatur voluptate in praesentium cum. Reprehenderit voluptas eum illum quasi molestias labore. Esse et enim aut est nam. Fugiat velit occaecati est unde. Eos a hic dolores fugiat velit quidem.',
		'Voluptatem cumque ut impedit architecto illo. Nam autem omnis animi modi fugit eum. Nesciunt laborum quas omnis odit dolor reiciendis aut. Quo quia est sit eveniet minima soluta ut consequatur. Architecto vitae voluptatem ipsam. Ut et mollitia eum explicabo cumque accusantium. Non accusantium et et sunt optio facere voluptatibus. Reprehenderit voluptatum consequatur ullam consectetur. Laboriosam quo quas tempora cumque rerum. Aperiam cupiditate doloremque eligendi dolores.',
		'Cupiditate ut itaque est. Voluptatem eaque omnis ut et nisi doloribus. Neque reprehenderit eos sint et magnam qui. Temporibus nulla reiciendis dicta. Facilis temporibus omnis neque et aut eveniet doloribus ipsum. Omnis voluptatibus optio asperiores alias provident quia facilis modi. Veniam modi quidem facere quo dolores qui. Dolor quia iusto quis enim ipsa.',
		'Corrupti illum quidem est quaerat consequatur. Esse quaerat eius sit. Alias neque est rerum. Ipsa et numquam vel quae eum ratione. Deserunt eum dicta numquam quia facilis nisi quia. Natus nemo voluptates laudantium est saepe pariatur libero quasi. Dicta iure ut sed natus. Omnis non quaerat exercitationem animi nesciunt sed et ad. Cupiditate corrupti omnis blanditiis non incidunt inventore laboriosam. Qui sint fuga rerum.',
		'Ad sit nulla est iure veritatis corporis est delectus. Aut laboriosam explicabo et. Ut excepturi non ducimus odit. Molestias repellat rerum eligendi. Accusamus nihil odio voluptas quasi vero ipsam numquam distinctio. Velit est qui velit dolores nulla ut. Commodi harum voluptas voluptas numquam. Ipsam accusantium quaerat amet consequuntur aliquam. Sed esse quia aut deleniti enim maiores impedit qui.'
	];
	if(typeof(nm)!='undefined') {
		if(nm > ipsum.length) {for(var k = 0; k < ipsum.length; k++) {
			$(this).append('<p>' + ipsum[k] + '</p>');
		}} else {for(var k = 0; k < nm; k++) {
			$(this).append('<p>' + ipsum[k] + '</p>');
		}}
	} else {
		$(this).append(ipsum[0]);
	}
};