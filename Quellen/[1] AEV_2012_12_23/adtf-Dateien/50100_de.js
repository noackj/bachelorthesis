
if (typeof audi_ngw == 'undefined') {
	audi_ngw = {};
}
audi_ngw.configurator = {};

audi_ngw.configurator.accxParseParams = function (params) {
	paramArray = params.split(",")
	paramsHash = new Array();
	for(p in paramArray) {
		if (!isNaN(p)) {
	  	keyValue = paramArray[p].split("=");
	  	paramsHash[keyValue[0]] = keyValue[1];
	  }
	}
	return paramsHash;
};
// open the Configurator with params
audi_ngw.configurator.openACCx = function (paramsAsString) {
if(paramsAsString.indexOf("http") == 0) {
	params = new Array();
	params["url"] = paramsAsString;
} else {
	params = audi_ngw.configurator.accxParseParams(paramsAsString);
}
var accxURL = "http://konfigurator.audi.de/entry?";
var mandant = "mandant=accx-de";

var s = "scrollbars=yes,directories=no,menubar=no,toolbar=no,width=1014,height=700,status=yes,resizable=yes";

var vc = "";
var pr = "";
var next = "next=carline-page";

if ('undefined' != typeof params['url']) {
	accxURL = params['url'];
} else {
	if ('undefined' != typeof params['carline']) {
		vc = "vc=" + params['carline'];
		if ('undefined' == typeof params['target']) {
			next = "next=model-page"
		}
	}
	if ('undefined' != typeof params['model']) {
		pr = "pr=" + params['model'];
		if ('undefined' == typeof params['target']) {
			next = "next=exterior-page"
		}
	}
	if ('undefined' != typeof params['target']) {
		next="next=" + params['target'];
	}
	if ('undefined' != typeof params['exteriorcolour']) {
		pr +="|" + params['exteriorcolour'];
	}
	if ('undefined' != typeof params['interiorcolour']) {
		pr +="|" + params['interiorcolour'];
	}
	if ('undefined' != typeof params['rims']) {
		pr +="|" + params['rims'];
	}
	if ('undefined' != typeof params['addprstring']) {
		pr +="|" + params['addprstring'];
		if (pr.indexOf("undefined|") > -1) {
			pr = pr.replace(/undefined\|/g, "");
		}
	}
	if (pr && pr.indexOf("pr=") === -1) {
		pr = "pr=" + pr;
	}
	if (pr) {
		var foundColorExpr = pr.match(/F14 [0-9A-Z]{4}/g);
		if (foundColorExpr && foundColorExpr.length > 1) {
			pr = pr.replace(foundColorExpr[1], "");
		}
	}
	var partnerUrlParam = audi_ngw.configurator.getPartnerUrlParam();
	if (!partnerUrlParam) {
		if ('undefined' != typeof params['partner']) {
			partnerUrlParam = "&partner=" + params['partner'];
		}
	}

	var fuel = "";
	if ('undefined' != typeof params['fuel']) {
		fuel = "&v_fuel=" + params['fuel'];
	}

	accxURL += mandant + "&" + vc + "&" + pr + "&" + next + partnerUrlParam + fuel;
}
var sat=window.open(accxURL,"AK4SATELLIT",s);
sat.focus();
};

audi_ngw.configurator.open_with_carline = function(carline) {
	var params = "carline=" + carline
	audi_ngw.configurator.openACCx(params);
};

audi_ngw.configurator.open_with_model = function(model, extcolor, rims) {
	p = "model=" + model;
	if('undefined' != typeof extcolor) {
		p += ",exteriorcolour=" + extcolor
	}
	if('undefined' != typeof rims) {
		p += ",rims=" + rims
	}
	audi_ngw.configurator.openACCx(p);
};

audi_ngw.configurator.accxParseParams = function (params) {
	paramArray = params.split(",")
	paramsHash = new Array();
	for(p in paramArray) {
		if (!isNaN(p)) {
			keyValue = paramArray[p].split("=");
			paramsHash[keyValue[0]] = keyValue[1];
		}
	}
	return paramsHash;
};

audi_ngw.configurator.open = function (paramsAsString) {
	paramsAsString += ",target=model-page";
	audi_ngw.configurator.openACCx(paramsAsString);
};

audi_ngw.configurator.getPartnerUrlParam = function () {
	var partnerUrlParam = "";

	var url = document.URL;
	if (!url) {
		url = document.referrer;
	}
	if (url) {
		var expr = /\/de_partner\/p_([0-9]{5})\//;
		var result = expr.exec(url);
		var id = RegExp.$1;
		if (id) {
			partnerUrlParam = "&partner=" + id;
		}
	}
	
	return partnerUrlParam;
};