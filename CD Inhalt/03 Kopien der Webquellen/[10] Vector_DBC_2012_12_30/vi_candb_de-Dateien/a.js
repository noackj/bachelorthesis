
function et_getProtocol()
{
	return ('https:' == document.location.protocol ? 'https:' : 'http:' );
}

if(typeof(et_proxy_redirect) == 'undefined' || typeof(et_proxy_redirect) == 'unknown' || et_proxy_redirect == '')
{
	var et_server = et_getProtocol() + '//www.etracker.de';
	var et_vm_server = et_getProtocol() + '//www.etracker.de/vm';
	var et_vv_server = et_getProtocol() + '//visitorvoice.etracker.com/';
	var et_code_server = et_getProtocol() + '//code.etracker.com';
}
else
{
	var et_server = et_proxy_redirect;
	var et_vm_server = et_proxy_redirect + '/vm';
	var et_vv_server = et_proxy_redirect + '/vv/';
	var et_code_server = et_proxy_redirect;
}
		
// etracker plugin detection
function et_pd(){var head=document.getElementsByTagName('head')[0]||document.documentElement;for(et_pd_i=10;et_pd_i<=et_pd_maxjs;et_pd_i++){var a=document.createElement('script');a.setAttribute('language', 'JavaScript'+(et_pd_i/10));a.text='et_pd_v='+(et_pd_i/10)+';';head.insertBefore(a, head.firstChild);}et_pd_a[++et_pd_z]="Javascript "+et_pd_v;et_pd_js=et_pd_v;if((et_pd_ag.indexOf('msie')>=0)&&(et_pd_ag.indexOf('win')>=0)&&(et_pd_ag.indexOf('opera')<0)){et_pd_etpl=new Array(et_pd_eta+"4",et_pd_etp+"1",et_pd_eta+"5",et_pd_etp+"5",et_pd_eta+"6",et_pd_etp+"6",et_pd_eta+"6",et_pd_etp+"7",et_pd_eta+"7",et_pd_etp+"8",et_pd_eta+"8",et_pd_etp+"9",et_pd_eta+"9","GBDetect.Detect.1","Adobe SVG Viewer","Adobe.SVGCtl","Java"+et_pd_eti,"JavaSoft.JavaBeansBridge.1","Java"+et_pd_eti+" 1.4","8AD9C840-044E-11D1-B3E9-00805F499D93",et_pd_etr,"IERPCtl.IERPCtl",et_pd_etr+" 4","RealVideo.RealVideo(tm) ActiveX Control (32-bit)",et_pd_etr+" 5","RealPlayer."+et_pd_etr+" ActiveX Control (32-bit)",et_pd_etr+" G2","rmocx.RealPlayer G2 Control","RealJukebox IE Plugin","IERJCtl.IERJCtl.1","VRML Viewer 2.0","90A7533D-88FE-11D0-9DBE-0000C0411FC3",et_pd_etm,"6BF52A52-394A-11D3-B153-00C04F79FAA6",et_pd_etm,"22D6F312-B0F6-11D0-94AB-0080C74C7E95",et_pd_etq+et_pd_eti,et_pd_etq+"CheckObject."+et_pd_etq+"Check.1");function actXDet(cid){try{if(document.body.addBehavior){var cv=document.body.getComponentVersion("{"+cid+"}","ComponentID");}else{var cv=0;}}catch(e){var cv=0;}if(cv)while((et_pd_k=cv.indexOf(","))>=0)cv=cv.substr(0,et_pd_k)+'.'+cv.substr(et_pd_k+1);return cv;}function newActX(ax){var o=false;try{if(document.body.addBehavior)eval('try{o=new ActiveXObject("'+ax+'")}catch(e){};');}catch(e){;}return o;}if(typeof et_checkqt!=et_pd_ud)if(et_pd_v=newActX((et_pd_s=et_pd_etq+"Check")+"Object."+et_pd_s+".1"))et_pd_a[++et_pd_z]=et_pd_etq+et_pd_eti+" "+((et_pd_v.QuickTimeVersion).toString(16)/1000000);if(typeof et_pd_et_checkrp!=et_pd_ud)if(et_pd_v=newActX("rmocx.RealPlayer G2 Control"))et_pd_a[++et_pd_z]=et_pd_etr+" G2 "+(et_pd_v.GetVersionInfo());try{if(document.body.addBehavior)document.body.addBehavior("#default#clientCaps");}catch(e){;}et_pd_i=et_pd_etpl.length;while(--et_pd_i>0)if((et_pd_v=actXDet(et_pd_etpl[et_pd_i--]))!=null){et_pd_etp=et_pd_etpl[et_pd_i];et_pd_k=et_pd_etp.lastIndexOf(" ");if(et_pd_k)et_pd_etp=et_pd_etp.substr(0,et_pd_k);et_pd_k=et_pd_z+1;while((--et_pd_k)&&(et_pd_a[et_pd_k].indexOf(et_pd_etp)<0)){};if(et_pd_k==0)et_pd_a[++et_pd_z]=et_pd_etpl[et_pd_i]+((et_pd_v==0)?'':(' '+et_pd_v));}if(!(et_pd_v=actXDet("D27CDB6E-AE6D-11CF-96B8-444553540000"))){et_pd_s=et_pl+"Flash.";for(et_pd_v=et_pd_maxfl;et_pd_v--;){if(newActX(et_pd_s+et_pd_s+et_pd_v))break;};if(et_pd_ag.indexOf("webtv/2.5")>=0)et_pd_v=3;else if(et_pd_ag.indexOf("webtv")>=0)et_pd_v=2;}if(et_pd_v)et_pd_a[++et_pd_z]=et_pl+" Flash "+et_pd_v;for(et_pd_v=et_pd_maxsh;et_pd_v--;){if(newActX("SWCtl.SWCtl."+et_pd_v)){et_pd_a[++et_pd_z]=et_pl+" for Director "+et_pd_v;break;}};var et_sili = newActX("AgControl.AgControl");if(et_sili){for(et_pd_v=et_pd_maxsl;et_pd_v--;){if(et_sili.IsVersionSupported(et_pd_v+".0")){et_pd_a[++et_pd_z]="Silverlight "+et_pd_v+".0";break;}}};}else{var pl=navigator.plugins,d,n;if(pl&&(et_pd_i=pl.length)){et_pd_etpl=new Array('acrobat','activex','java','movie','movieplayer','pdf','quicktime','real','shockwave','svg','silverlight');while(et_pd_i--){lcname=pl[et_pd_i].name.toLowerCase();n=et_pd_etpl.length;while(n--){if(lcname.indexOf(et_pd_etpl[n])>=0){et_pd_etp=pl[et_pd_i].name;et_pd_etq=pl[et_pd_i].description;if(et_pd_etp.indexOf(et_pd_etr+' G')>=0){et_pd_s=et_pd_etp.indexOf('(tm) G')+5;et_pd_etp=et_pd_etp.substring(0,et_pd_etp.indexOf(' ',et_pd_s));}et_pd_k=et_pd_z+1;while((--et_pd_k)&&(et_pd_a[et_pd_k].indexOf(et_pd_etp)<0)){};if(!et_pd_k){et_pd_v='';et_pd_s=1000;for(et_pd_k=0;et_pd_k<10;et_pd_k++){d=et_pd_etq.indexOf(et_pd_k);if(d>=0&&d<et_pd_s){et_pd_s=d;}}if(et_pd_s<1000){if((d=et_pd_etq.indexOf(' ',et_pd_s))<0)d=et_pd_etq.length;et_pd_v=et_pd_etq.substring(et_pd_s,d);}et_pd_v = et_pd_v.replace(/\"/,"");if(et_pd_etp.indexOf(et_pl+' Flash')>=0){et_pd_k=et_pd_etq.split(" ");for(d=0;d<et_pd_k.length;++d){if(isNaN(parseInt(et_pd_k[d], 10)))continue;et_pd_v=et_pd_k[d];if(typeof(et_pd_k[d+2])!=et_pd_ud)et_pd_v=et_pd_v+'r'+et_pd_k[d+2].substring(1);break;}}if(et_pd_etp.indexOf('Silverlight')>=0){et_pd_etp=et_pd_etp.replace(/Plug-In/, '');}et_pd_a[++et_pd_z]=et_pd_etp+((et_pd_v=='')?'':(' '+et_pd_v));}}}}}}if(typeof(_gaUserPrefs)!='undefined'&&typeof(_gaUserPrefs)!='unknown'&&((typeof(_gaUserPrefs.ioo)=='function'&&_gaUserPrefs.ioo())||(typeof(_gaUserPrefs.ioo)=='boolean'&&_gaUserPrefs.ioo))){et_pd_a[++et_pd_z]='Google Analytics Opt-out';}et_pl='';while(et_pd_z){et_pl+=et_pd_a[et_pd_z--]+((et_pd_z)?';':'');}}
// etracker plugin detection end
	
// etracker v3.0
	
function et_pQ( param ) 
{
	var et_ll, et_fl, et_rS; 
	var et_qS = document.location.search; 
	var et_pV = ''; 

	if( et_qS.length > 1 )
	{ 
		et_qS = et_qS.substr(1);
		et_fl = et_qS.indexOf(param);
		
		if(et_fl!=-1)
		{
			et_fl += param.length + 1;
			et_ll = et_qS.indexOf('&', et_fl ); 
			
			if( et_ll== - 1 ) 
				et_ll = et_qS.length;
			
			et_pV = et_qS.substring(et_fl,et_ll);
			
			et_rS = new RegExp(' ','g'); 
			et_pV = et_pV.replace( et_rS,'+' );
			et_fl = et_pV.indexOf('=',0); 
			et_pV = et_pV.substring ( et_fl+1 ); 
		}
	}
	return et_pV;  
}

function et_cPQ()
{
	if((et_tc=et_pQ( 'et_cid' ))&&(et_tl=et_pQ('et_lid'))) 
		et_up+='&et'+'_cid=' + et_tc +  '&et_lid='  + et_tl;
	
	if(et_sub)
		et_up += '&et_sub='+et_sub;
	else if( et_tsub=et_pQ( 'et_sub' ))
		et_up += '&et_sub='+et_tsub; 
	
	if(et_pse)
		et_up+='&et_pse='+et_pse;
	else if(et_tmp = et_pQ('et_pse'))
		et_up += '&et_pse='+et_tmp;
		
	if(et_tt = et_pQ('et_target')||et_target!='')
	{
		et_tv=et_pQ('et_tval');
		et_to=et_pQ('et_tonr');
		et_ts=et_pQ('et_tsale');
	}
	
	if(et_qsem = et_pQ('et_sem'))
		et_sem = et_qsem;
}

function et_eC(param)
{
	et_secureId = param;
	
	et_gp='';

	if(et_referrer=='')
	{
		var et_ref = escape(document.referrer); 
	
		if(et_js>=1.3)
			eval('try{ if (typeof(top.document)=="object") et_ref=escape( top.document.referrer);}catch(e){et_ref=\'\';}');
	} 
	else
		var et_ref = escape(et_referrer);

	if(et_sem=='1')
		et_gp+='&et_sem=1';
		
	et_gp += '&swidth='+et_sw+'&sheight='+et_sh+'&siwidth=' + et_iw + '&'+'siheight='+et_ih+'&scookie='+et_co+'&scolor=' +et_sc;

	if(typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown')
	{
		et_gp+='&et_pagename=' + escape(et_pagename.substr(0, et_maxValueLength));
		et_easy = 0;
	}

	if( et_easy )
		et_gp+='&et_easy=1'; 

	if(et_areas!='')
		et_gp +='&et_areas=' + escape(et_areas.substr(0, et_maxValueLength));
	
	if('' == et_target) 
	{
		et_target = ''; 
		et_tval = '0';
		et_tonr = '0'; 
		et_tsale = 0; 
	} 

	et_gp += '&'+'et_target=' + escape( et_tt.length ? et_tt : et_target ) +',' + ( et_tv ? et_tv: et_tval ) + ',' + ( et_to ? et_to : et_tonr )+ ','+(et_ts ? et_ts : et_tsale )+','+( typeof( et_cust ) == 'number' ? et_cust : 0 );
	
	if(et_lpage)
		et_gp += '&et_lpage='+et_lpage;
	
	if(et_se!='')
		et_gp +='&et_se='+et_se;
		
	if( et_trig!='' )
		et_gp+='&et_trig='+et_trig;
	
	if(et_basket!='')
		et_gp += '&et_basket=' + escape(et_basket); 

	if( et_url ) 
		et_gp += '&et_url=' + et_url; 
	else
	{
		var et=document.location.href.split('?'); 
		et_gp += '&et_url='+escape( et[0] );
	}

	et_gp+='&slang='+et_la; 

	if(et_tag!='')
		et_gp+='&et_tag='+et_tag; 
	
	if(et_organisation!= '') 
		et_gp += '&et_organisation=' + et_organisation; 
	
	if(et_demographic!='')
		et_gp+='&et_demographic='+et_demographic;

	if(et_ssid!='')
		et_gp+='&et_ssid='+et_ssid;

	if(et_ip!='')
		et_gp+='&et_ip='+et_ip;

	if(et_subid!='')
		et_gp+='&et_subid='+et_subid;
		
	if(et_ref!='')
		et_gp+='&ref='+et_ref;

	if(typeof(et_pl) != 'undefined' && typeof(et_pl) != 'unknown' && et_pl!='' ) 
		et_gp +='&p='+escape(et_pl);
		
	var et_dt = new Date(); 
	var et_tzOffset = et_dt.getTimezoneOffset()
		
	et_imageSrc = et_server + '/' + et_cntScript + '?v=' + et_ver + '&java=y&tc='+et_dt.getTime()+'&et_tz=' + et_tzOffset + '&et=' + et_secureId + '&et_ilevel=' + et_ilevel + et_gp + et_up;
	et_imageSrc = et_imageSrc.substr(0, et_maxUrlLength);
	
	if(et_first)
	{
		var et_image=new Object();
		et_image.src = et_imageSrc;
		
		et_anchor = document.createElement('a');   
		et_anchor.href = et_referer + param; 
		et_anchor.target = '_blank';
		et_anchor.innerHTML = '<img style="border:0px;" alt="" src="'+et_image.src+'">';
	
		et_first = false;
		if(true || et_optInActive)
		{
			var body = document.getElementsByTagName('body')[0]; 
			body.insertBefore(et_anchor, body.lastChild);
		}
		else
		{
			document.write('<p id="et_image" style="display:none;"></p>');
			document.getElementById('et_image').parentNode.appendChild(et_anchor);
		}
	}
	else
	{
		var et_image=new Image();
		et_image.src = et_imageSrc;
	}
}


function et_pEc()
{
	var s = document.createElement('script');
	s.setAttribute('language', 'JavaScript1.3');
	s.text = 'et_js=1.3';
	var head = document.getElementsByTagName('head')[0] || document.documentElement;
	head.insertBefore(s, head.firstChild);

	et_sw = screen.width;
	et_sh = screen.height;
	et_co =( navigator.cookieEnabled == true ? 1:(navigator.cookieEnabled==false ? 2: 0 ));
	
	if( navigator.language )
		et_la = navigator.language; 
	else if ( navigator.userLanguage ) 
		et_la = navigator.userLanguage;
	
	et_sc = (( screen.pixelDepth ) ? screen.pixelDepth : screen.colorDepth ); 
	
	if ( et_js >= 1.3 )
	{
		eval('try{et_iw=top.innerWidth;et_ih=top.innerHeight;}catch(e){et_iw=window.innerWidth;et_ih=window.innerHeight;}');
	}
	if(typeof(et_iw) =='undefined')
	{
		eval('if(document.documentElement&&document.documentElement.clientHeight){et_iw=document.documentElement.clientWidth;et_ih=document.documentElement.clientHeight;}else if(document.body){et_iw = document.body.clientWidth; et_ih = document.body.clientHeight; }' ) ; 
	}
}

function et_eC_Wrapper( param,et_pn,et_ar,et_il,et_ur,et_ta,et_tv,et_to,et_ts,et_cu,et_ba,et_lp,et_tr,et_tg,et_sb)
{
    et_up = '';
    var secureKey;

    if(!param.length)
	{
		et_pagename     = param.et_pagename     ? escape(param.et_pagename)     : '';
		et_areas        = param.et_areas        ? escape(param.et_areas)        : '';
		et_ilevel       = param.et_ilevel       ? escape(param.et_ilevel)       : 0; 
		et_url          = param.et_url          ? escape(param.et_url)          : '';
		et_target       = param.et_target       ? escape(param.et_target)       : '';
		et_tval         = param.et_tval         ? escape(param.et_tval)         : '';
		et_tonr         = param.et_tonr         ? escape(param.et_tonr)         : ''; 
		et_tsale        = param.et_tsale        ? escape(param.et_tsale)        : 0;
		et_cust         = (param.et_cust && typeof(param.et_cust) == 'number') ? param.et_cust : 0;
		et_basket       = param.et_basket       ? escape(param.et_basket)       : ''; 
		et_lpage        = param.et_lpage        ? escape(param.et_lpage)        : '';
		et_trig         = param.et_trigger      ? escape(param.et_trigger)      : '';
		et_tag          = param.et_tag          ? escape(param.et_tag)          : '';
		et_organisation = param.et_organisation ? escape(param.et_organisation) : '';
		et_demographic  = param.et_demographic  ? escape(param.et_demographic)  : '';
        et_sub          = param.et_sub          ? escape(param.et_sub)          : '';

		secureKey = param.et_et;
	}
	else
	{
		if(et_pn == 'null') et_pn = '';
 		if(et_ar == 'null') et_ar = '';
 		if(et_il == 'null') et_il = 0;
 		if(et_ur == 'null') et_ur = '';
 		if(et_ta == 'null') et_ta = '';
 		if(et_tv == 'null') et_tv = '';
 		if(et_to == 'null') et_to = '';
 		if(et_ts == 'null') et_ts = 0;
 		if(et_cu == 'null' || typeof(et_cu) != 'number') et_cu = 0;
 		if(et_ba == 'null') et_ba = '';
 		if(et_lp == 'null') et_lp = '';
 		if(et_tr == 'null') et_tr = '';
 		if(et_tg == 'null') et_tg = '';
 		if(et_sb == 'null') et_sb = '';
 	
		et_pagename     = et_pn ? escape(et_pn): '';
		et_areas        = et_ar ? escape(et_ar) : '';
		et_ilevel       = et_il ? escape(et_il) : 0; 
		et_url          = et_ur ? escape(et_ur) : '';
		et_target       = et_ta ? escape(et_ta) : '';
		et_tval         = et_tv ? escape(et_tv) : '';
		et_tonr         = et_to ? escape(et_to) : ''; 
		et_tsale        = et_ts ? escape(et_ts) : 0;
		et_cust         = et_cu ? et_cu : 0;
		et_basket       = et_ba ? escape(et_ba) : ''; 
		et_lpage        = et_lp ? escape(et_lp) : '';
		et_trig         = et_tr ? escape(et_tr) : '';
		et_tag          = et_tg ? escape(et_tg) : '';
        et_sub          = et_sb ? escape(et_sb) : '';

        secureKey = param;
	} 
	
	if(et_sub)
		et_up = '&et_sub='+et_sub;
	et_eC(secureKey);
}

// etracker end

// etracker overlay detection

function et_initLinks () 
{
	for (var i=0; i < et_d.links.length; i++)
	{
		et_d.links[i].position = i;
		et_addEvent(et_d.links[i], 'mousedown', et_getLink);
	}

	if(et_links)
	{	
		for (var i=0; i < et_d.getElementsByTagName('input').length; i++)
		{
			if(et_d.getElementsByTagName('input')[i].type != 'hidden')
			{
				et_d.getElementsByTagName('input')[i].position = i;
				et_addEvent(et_d.getElementsByTagName('input')[i], 'mousedown', et_getInput);
			}
		}
	
		for (var i=0; i < et_d.getElementsByTagName('select').length; i++)
		{
			et_d.getElementsByTagName('select')[i].position = i;
			et_addEvent(et_d.getElementsByTagName('select')[i], 'mousedown', et_getSelect);
		}
	}

	et_addEvent(document, 'mousedown', et_getBaseLink);
}	

function et_recursiveNode( n )
{
	var a = '';

	if(!n.hasChildNodes())
	{
		try
		{
			if(n.hasAttribute('src') && n.src)
				return n.src;
			else if(n.hasAttribute('data') && n.data)
				return n.data;
			else if(n.hasAttribute('tagName') && n.tagName)
				return n.tagName;
		}
		catch(e)
		{
			if(n.src)
				return n.src;
			else if(n.tagName)
				return n.tagName;
		}
		return '';
	}

	for(var i=0; i<n.childNodes.length; i++)
		a = a + et_recursiveNode(n.childNodes[i]);
	
	return et_strReplaceNode(a);
}

function et_getLink( e )
{
	var a = '';

	if(!e) e = window.event;
	if(e.srcElement) a = e.srcElement; else if(this) a = this;
	while(a && a.tagName && a.tagName.toLowerCase()!='a' && a.tagName.toLowerCase()!='area')
	{
		if(a.parentElement)
			a=a.parentElement;
		else
			break;
	}

	var h = a.href;

	et_getScrollPosition();
	et_toppos += e.clientY;
	et_leftpos += e.clientX;

	et_gauged = 1;
	et_sendData( a, et_strReplace(h), et_recursiveNode(a), a.position, et_leftpos, et_toppos, et_sendloc, 'a');
}

function et_getBaseLink( e )
{
	if(et_gauged)
	{
		et_gauged = 0;
		return 0;
	}
	if(!e) e = window.event;

	var a = et_d.links[0];

	et_getScrollPosition();
	et_toppos += e.clientY;
	et_leftpos += e.clientX;

	et_sendData( a, 0, 0, 0, et_leftpos, et_toppos, et_sendloc, 'b');
}

function et_getInput( e )
{
	var a = '';

	if(!e) e = window.event;
	if(e.srcElement) a = e.srcElement; else if(this) a = this;

	while(a && a.tagName && a.tagName.toLowerCase()!='input')
	{
		if(a.parentElement)
			a=a.parentElement;
		else
			break;
	}

	et_getScrollPosition();
	et_toppos += e.clientY;
	et_leftpos += e.clientX;

	et_gauged = 1;
	et_sendData( a, a.name, a.type+''+(a.type=='radio'?a.value:''), a.position, et_leftpos, et_toppos, et_sendloc, 'i');
}

function et_getSelect( e )
{
	var a = '';
	if(!e) e = window.event;
	if(e.srcElement) a = e.srcElement; else if(this) a = this;

	while(a && a.tagName && a.tagName.toLowerCase()!='select')
	{
		if(a.parentElement)
			a=a.parentElement;
		else
			break;
	}

	et_getScrollPosition();
	et_toppos += e.clientY;
	et_leftpos += e.clientX;

	et_gauged = 1;
	et_sendData( a, a.name, a.length+'', a.position, et_leftpos, et_toppos, et_sendloc, 's');
}

function et_sendData( a, n, c, p, x, y, s, t )
{
	if(!et_random(et_overlayLimit))
	{
		return 0;
	}
	
	var ix = 0, cx = 0;
	var iy = 0, cy = 0;
	var l = a;
	var i = 0;
	var j = 0;
	var k = 0;
	var b;
	var maxDepth = 1024;
	var depth = 0;
	
	while( a && a.tagName && (a.tagName.toLowerCase() != 'body') && (depth <= maxDepth) )
	{
		ix += a.offsetLeft;
		cx += ( a.clientLeft && !isNaN(a.clientLeft) ? a.clientLeft : 0 );
		iy += a.offsetTop;
		cy += ( a.clientTop && !isNaN(a.clientTop) ? a.clientTop : 0 );
		a=a.offsetParent;
		depth++;
	}
	
	if(a && a.offsetLeft)
	{
		ix += a.offsetLeft;
		iy += a.offsetTop;
	}

	if(l && l.tagName && l.tagName && l.tagName.toLowerCase()=='area')
	{
		var d = l;
		ix = 0;
		iy = 0;

		for(i=0;i<et_d.getElementsByTagName('map').length;i++)
			for(j=0;j<et_d.getElementsByTagName('map')[i].areas.length;j++)
				if(d == et_d.getElementsByTagName('map')[i].areas[j])
					for(k=0;k<et_d.images.length;k++)
						if(et_d.images[k].useMap && et_d.images[k].useMap.match(et_d.getElementsByTagName('map')[i].name))
							b = et_d.images[k];

		while( b && b.tagName && b.tagName.toLowerCase() != 'body' )
		{
			iy += b.offsetTop;
			ix += b.offsetLeft;

			cx += ( b.clientLeft && !isNaN(b.clientLeft) ? b.clientLeft : 0 );
			cy += ( b.clientTop && !isNaN(b.clientTop) ? b.clientTop : 0 );

			b=b.offsetParent;
		}
	}

	if(!et_safari)
	{
		x = (x - ix) - ( cx * et_direction );
		y = (y - iy) - ( cy * et_direction );
	}
	else
	{
		x = (x - ix);
		y = (y - iy);
	}

	var domain = window.location.protocol + '//' +  window.location.host;
	
	var oh = escape(domain + et_spPage(window.location.pathname) + et_spPage(s));

	if(typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown')
	{
		var easy = 0;
		var pagename = et_pagename;
	}
	else
	{
		var easy = 1;
		var pagename = '';
	}
		
	var m = et_d.links.length + ( et_links ? et_d.getElementsByTagName('input').length + et_d.getElementsByTagName('select').length : 0 );
	
	par = 'et='+et_et+'&n='+oh+'&i='+escape(pagename)+'&easy='+easy+'&p='+p+'&m='+m+'&h='+et_divHash(n)+'&c='+et_divHash(c)+'&x='+x+'&y='+y+'&t='+t;

	var et_i = new Image ();
	et_i.src = et_cntHost + 'cnt_links.php?' + par + '&tm=' + new Date().getTime();
}

function et_divHash(a)
{
	if(a)
	{
		var m = 654321;
		var h = a.charCodeAt(0) % m;
		for(var i = 1; i<a.length; i++)
	   		h = (h * 128 + a.charCodeAt(i)) % m;
		return h;
	}
	return '';
}

function et_strReplace(a)
{
	if(a)
	{
		a = et_spLink(a);
		var b = '';
		b = a.toString().replace(/http[s]*:\/\/[^\/]+\//gi, '');
		if(!b) return a;
		a = b.replace(/\s/gi, '');
		return a;
	}
	return '';
}

function et_strReplaceNode(a)
{
	if(a)
	{
		var b = '';
		b = a.toString().replace(/http[s]*:\/\/[^\/]+\//gi, '');
		if(!b) return a;
		a = b.replace(/\s/gi, '');
		return a;
	}
	return '';
}

function et_startOverlay()
{
	if (typeof(et_makeOverlay) != 'undefined')
	{
		if (typeof(document.readyState) == 'undefined' || document.readyState == 'complete' || document.readyState == 'loaded')
			et_makeOverlay();
		else
			et_addEvent( window, 'load', et_makeOverlay);
	}
}

function et_getScrollPosition()
{
	et_toppos = 0;
	et_leftpos = 0;
	if(window.pageYOffset)
	{
		et_toppos = window.pageYOffset;
		et_leftpos = window.pageXOffset;
	}
	else if(et_d.documentElement.scrollTop)
	{
		et_toppos = et_d.documentElement.scrollTop;
		et_leftpos = et_d.documentElement.scrollLeft;
	}
	else if(et_d.body.scrollTop) 
	{
		et_toppos = et_d.body.scrollTop;
		et_leftpos = et_d.body.scrollLeft;
	}
}

function et_getPageSize( a )
{
	et_px, et_py = 0;
	var y, checkSize = 0, anch;

	if (et_d.body.scrollHeight > et_d.body.offsetHeight)
	{
		et_py = et_d.body.scrollHeight;
	}
	else
	{
		et_py = et_d.body.offsetHeight;
	}
	
	if (et_d.body.scrollWidth > et_d.body.offsetWidth)
	{
		et_px = et_d.body.scrollWidth;
	}
	else
	{
		et_px = et_d.body.offsetWidth;
	}

	if(screen.width > et_px)
		et_px = screen.width;

	if(screen.height > et_py)
		et_py = screen.height;

	if(et_d.documentElement.clientHeight)
	{
		if(et_d.documentElement.clientHeight > et_py)
			et_py = et_d.documentElement.clientHeight;
	}
	else if(et_d.body.clientHeight)
	{
		if(et_d.body.clientHeight > et_py)
			et_py = et_d.body.clientHeight;
	}
	else if(window.innerHeight)
	{
		if(window.innerHeight > et_py)
			et_py = window.innerHeight;
	}

	if( a )
	{
		if(et_px < et_d.getElementById('et_img_pos').offsetLeft)
			et_px = et_d.getElementById('et_img_pos').offsetLeft;
		if(et_py < et_d.getElementById('et_img_pos').offsetTop)
			et_py = et_d.getElementById('et_img_pos').offsetTop;

		for (var i=0; i < document.links.length; i++)
		{
			y = 0;
			anch = document.links[i];
			while( anch && anch.tagName && anch.tagName.toLowerCase() != 'body' )
			{
				y += anch.offsetTop + ( !et_safari && anch.clientTop && !isNaN(anch.clientTop) ? (anch.clientTop * et_direction) : 0 );
				anch=anch.offsetParent;
			}
		
			if(et_py >= y)
				et_py = et_py;
			else
			{
				et_py = y;
				checkSize = true;				
			} 
		}
		if(checkSize)
			et_py += 500;
	}

	return '&x='+et_px+'&y='+et_py;
}
// etracker overlay detection end

function etEvent(secure,host) 
{
	var self = this;
	var etHost = host;
	var etSrc = '/eventcnt.php?';
	var etSecure = secure;
	var timers = new Array();
	var events = new Array();
	var eventsIndex = 0;

	this.setSecureKey = function(secure)
	{
		etSecure = secure;
		timers = new Array();
	}
	
	var sendEvent = function(object)
	{
		var et_parameters = '';

		if(object.category)
			et_parameters += '&et_cat=' + escape(object.category); 

		if(object.item)
			et_parameters += '&et_item=' + escape(object.item); 

		if(object.action)
			et_parameters += '&et_action=' + escape(object.action); 

		if(object.tags)
			et_parameters += '&et_tags=' + escape(object.tags); 

		if(object.value)
			et_parameters += '&et_value=' + escape(object.value); 

		if(typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown')
		{
			et_parameters += '&et_pagename=' + escape(et_pagename);
			et_parameters += '&et_easy=0';
		}
		else
		{
			et_parameters += '&et_easy=1';
		}

		if(typeof(et_url) != 'undefined' && typeof(et_url) != 'unknown' && et_url) 
			et_parameters += '&et_url=' + et_url; 
		else
		{
			et=document.location.href.split('?'); 
			et_parameters += '&et_url='+escape(et[0]);
		}
			
		if(typeof(et_sc) == 'undefined' || typeof(et_sc) == 'unknown')
			et_sc = (( screen.pixelDepth ) ? screen.pixelDepth : screen.colorDepth);
			
		
		if(typeof(et_sw) == 'undefined' || typeof(et_sw) == 'unknown')
			et_sw = screen.width;

		et_parameters += '&scolor=' + escape(et_sc);
		et_parameters += '&swidth=' + escape(et_sw);
			
		et_tm = new Date();
		
		events[eventsIndex++] = etHost + etSrc + 'v=3.0' + et_parameters + '&et=' + etSecure + '&java=y' + '&et_tm=' + et_tm.getTime();

		if(true)
		{
			__sendStoredEvents();
		}
		
	};
	
	var __sendStoredEvents = function()
	{
		for(var i = 0; i<events.length; i++)
		{
			var et_image = new Image();
			et_image.src = events[i];
		}

		events = new Array();
		eventsIndex = 0;
	}
	
	this.sendStoredEvents = function()
	{
		__sendStoredEvents();
	}
	
	this.eventStart = function(category, item, action, tags, value)
	{
		timers[category+item] = new Object();
		timers[category+item]['start'] = new Date().getTime();
		timers[category+item]['tags'] = tags;
		sendEvent({category:category, item:item, action:action, tags:tags, value:value});
	}

	this.eventStop = function(category, item, action, value)
	{
		this.__eventStop(category, item, action, value, null, true);
	}
	
	this.__eventStop = function(category, item, action, value, playtimeEvent, clear)
	{
		var eventStarted = timers[category+item] ? timers[category+item]['start'] : false;
		if(eventStarted)
		{
			var now = new Date().getTime();
			var playtime = now - eventStarted;

			var tags = timers[category+item]['tags'];
			
			if(clear)
				timers[category+item] = null;
			
			if(playtimeEvent)
				sendEvent({category:category, item:item, action:playtimeEvent, tags:tags, value:playtime});
				
			sendEvent({category:category, item:item, action:action, tags:tags, value:value});
		}
	}

	this.download = function(name, tags, value){sendEvent({category:'ET_EVENT_DOWNLOAD', item:name, action:'ET_EVENT_DOWNLOAD', tags:tags, value:value});}
	this.click = function(name, tags, value){sendEvent({category:'ET_EVENT_CLICK', item:name, action:'ET_EVENT_CLICK', tags:tags, value:value});}
	this.link = function(name, tags, value){sendEvent({category:'ET_EVENT_LINK', item:name, action:'ET_EVENT_LINK', tags:tags, value:value});}
	this.loginSuccess = function(name, tags, value){sendEvent({category:'ET_EVENT_LOGIN', item:name, action:'ET_EVENT_LOGIN_SUCCESS', tags:tags, value:value});}
	this.loginFailure = function(name, tags, value){sendEvent({category:'ET_EVENT_LOGIN', item:name, action:'ET_EVENT_LOGIN_FAILURE', tags:tags, value:value});}
	this.logout = function(name, tags, value){sendEvent({category:'ET_EVENT_LOGIN', item:name, action:'ET_EVENT_LOGOUT', tags:tags, value:value});}
	this.audioStart = function(name, tags, value){this.eventStart('ET_EVENT_AUDIO', name, 'ET_EVENT_AUDIO_START', tags, value);}
	this.audioStop = function(name, value){this.__eventStop('ET_EVENT_AUDIO', name, 'ET_EVENT_AUDIO_STOP', value, 'ET_EVENT_AUDIO_PLAYTIME', true);}
	this.audioPause = function(name, value){this.__eventStop('ET_EVENT_AUDIO', name, 'ET_EVENT_AUDIO_PAUSE', value, 'ET_EVENT_AUDIO_PLAYTIME', true);}
	this.audioMute = function(name, value){this.__eventStop('ET_EVENT_AUDIO', name, 'ET_EVENT_AUDIO_MUTE', value, 'ET_EVENT_AUDIO_PLAYTIME', false);}
	this.audioSeek = function(name, value){this.__eventStop('ET_EVENT_AUDIO', name, 'ET_EVENT_AUDIO_SEEK', value, 'ET_EVENT_AUDIO_PLAYTIME', false);}
	this.audioNext = function(name, value){this.__eventStop('ET_EVENT_AUDIO', name, 'ET_EVENT_AUDIO_NEXT', value, 'ET_EVENT_AUDIO_PLAYTIME', false);}
	this.audioPrevious = function(name, value){this.__eventStop('ET_EVENT_AUDIO', name, 'ET_EVENT_AUDIO_PREVIOUS', value, 'ET_EVENT_AUDIO_PLAYTIME', false);}
	this.audioPlaytime = function(name, tags, value){sendEvent({category:'ET_EVENT_AUDIO', item:name, action:'ET_EVENT_AUDIO_PLAYTIME', tags:tags, value:value});}
	this.videoStart = function(name, tags, value){this.eventStart('ET_EVENT_VIDEO', name, 'ET_EVENT_VIDEO_START', tags, value);}
	this.videoStop = function(name, value){this.__eventStop('ET_EVENT_VIDEO', name, 'ET_EVENT_VIDEO_STOP', value, 'ET_EVENT_VIDEO_PLAYTIME', true);}
	this.videoPause = function(name, value){this.__eventStop('ET_EVENT_VIDEO', name, 'ET_EVENT_VIDEO_PAUSE', value, 'ET_EVENT_VIDEO_PLAYTIME', true);}
	this.videoMute = function(name, value){this.__eventStop('ET_EVENT_VIDEO', name, 'ET_EVENT_VIDEO_MUTE', value, 'ET_EVENT_VIDEO_PLAYTIME', false);}
	this.videoSeek = function(name, value){this.__eventStop('ET_EVENT_VIDEO', name, 'ET_EVENT_VIDEO_SEEK', value, 'ET_EVENT_VIDEO_PLAYTIME', false);}
	this.videoNext = function(name, value){this.__eventStop('ET_EVENT_VIDEO', name, 'ET_EVENT_VIDEO_NEXT', value, 'ET_EVENT_VIDEO_PLAYTIME', false);}
	this.videoPrevious = function(name, value){this.__eventStop('ET_EVENT_VIDEO', name, 'ET_EVENT_VIDEO_PREVIOUS', value, 'ET_EVENT_VIDEO_PLAYTIME', false);}
	this.videoPlaytime = function(name, tags, value){sendEvent({category:'ET_EVENT_VIDEO', item:name, action:'ET_EVENT_VIDEO_PLAYTIME', tags:tags, value:value});}
	this.videoFullsize = function(name, tags, value){sendEvent({category:'ET_EVENT_VIDEO', item:name, action:'ET_EVENT_VIDEO_FULLSIZE', tags:tags, value:value});}
	this.videoRestore = function(name, tags, value){sendEvent({category:'ET_EVENT_VIDEO', item:name, action:'ET_EVENT_VIDEO_RESTORE', tags:tags, value:value});}
	this.galleryView = function(name, tags, value){sendEvent({category:'ET_EVENT_GALLERY', item:name, action:'ET_EVENT_GALLERY_VIEW', tags:tags, value:value});}
	this.galleryZoom = function(name, tags, value){sendEvent({category:'ET_EVENT_GALLERY', item:name, action:'ET_EVENT_GALLERY_ZOOM', tags:tags, value:value});}
	this.galleryNext = function(name, tags, value){sendEvent({category:'ET_EVENT_GALLERY', item:name, action:'ET_EVENT_GALLERY_NEXT', tags:tags, value:value});}
	this.galleryPrevious = function(name, tags, value){sendEvent({category:'ET_EVENT_GALLERY', item:name, action:'ET_EVENT_GALLERY_PREVIOUS', tags:tags, value:value});}

}

var et_optInActive = false;
var et_doEvents = false;

function et_getDeliveryHash()
{
	return 'bZVRWDxfd0ABL+IeNDpK6g==';
}

function et_escape(param)
{
	return escape(param);
}

function et_console(message)
{
	if(typeof(console) != 'undefined' && typeof(console) != 'unknown')
	{
		console.log(message);
	}
}

function et_debug(param)
{	
}

function et_addEvent(e, t, f, u) 
{
	if (e.addEventListener) {
		e.addEventListener(t, f, u);
		return 1;
	}
	else if (e.attachEvent) {
		var r = e.attachEvent('on' + t, f);
		return r;
	}
	else 
		e['on' + t] = f;
}

function et_random(value)
{
	if(value >= Math.round(Math.random()*100))
		return true;
	else
		return false;
}

function et_md5(a){function b(a,b){var c=a[0],h=a[1],i=a[2],j=a[3];c=d(c,h,i,j,b[0],7,-680876936);j=d(j,c,h,i,b[1],12,-389564586);i=d(i,j,c,h,b[2],17,606105819);h=d(h,i,j,c,b[3],22,-1044525330);c=d(c,h,i,j,b[4],7,-176418897);j=d(j,c,h,i,b[5],12,1200080426);i=d(i,j,c,h,b[6],17,-1473231341);h=d(h,i,j,c,b[7],22,-45705983);c=d(c,h,i,j,b[8],7,1770035416);j=d(j,c,h,i,b[9],12,-1958414417);i=d(i,j,c,h,b[10],17,-42063);h=d(h,i,j,c,b[11],22,-1990404162);c=d(c,h,i,j,b[12],7,1804603682);j=d(j,c,h,i,b[13],12,-40341101);i=d(i,j,c,h,b[14],17,-1502002290);h=d(h,i,j,c,b[15],22,1236535329);c=e(c,h,i,j,b[1],5,-165796510);j=e(j,c,h,i,b[6],9,-1069501632);i=e(i,j,c,h,b[11],14,643717713);h=e(h,i,j,c,b[0],20,-373897302);c=e(c,h,i,j,b[5],5,-701558691);j=e(j,c,h,i,b[10],9,38016083);i=e(i,j,c,h,b[15],14,-660478335);h=e(h,i,j,c,b[4],20,-405537848);c=e(c,h,i,j,b[9],5,568446438);j=e(j,c,h,i,b[14],9,-1019803690);i=e(i,j,c,h,b[3],14,-187363961);h=e(h,i,j,c,b[8],20,1163531501);c=e(c,h,i,j,b[13],5,-1444681467);j=e(j,c,h,i,b[2],9,-51403784);i=e(i,j,c,h,b[7],14,1735328473);h=e(h,i,j,c,b[12],20,-1926607734);c=f(c,h,i,j,b[5],4,-378558);j=f(j,c,h,i,b[8],11,-2022574463);i=f(i,j,c,h,b[11],16,1839030562);h=f(h,i,j,c,b[14],23,-35309556);c=f(c,h,i,j,b[1],4,-1530992060);j=f(j,c,h,i,b[4],11,1272893353);i=f(i,j,c,h,b[7],16,-155497632);h=f(h,i,j,c,b[10],23,-1094730640);c=f(c,h,i,j,b[13],4,681279174);j=f(j,c,h,i,b[0],11,-358537222);i=f(i,j,c,h,b[3],16,-722521979);h=f(h,i,j,c,b[6],23,76029189);c=f(c,h,i,j,b[9],4,-640364487);j=f(j,c,h,i,b[12],11,-421815835);i=f(i,j,c,h,b[15],16,530742520);h=f(h,i,j,c,b[2],23,-995338651);c=g(c,h,i,j,b[0],6,-198630844);j=g(j,c,h,i,b[7],10,1126891415);i=g(i,j,c,h,b[14],15,-1416354905);h=g(h,i,j,c,b[5],21,-57434055);c=g(c,h,i,j,b[12],6,1700485571);j=g(j,c,h,i,b[3],10,-1894986606);i=g(i,j,c,h,b[10],15,-1051523);h=g(h,i,j,c,b[1],21,-2054922799);c=g(c,h,i,j,b[8],6,1873313359);j=g(j,c,h,i,b[15],10,-30611744);i=g(i,j,c,h,b[6],15,-1560198380);h=g(h,i,j,c,b[13],21,1309151649);c=g(c,h,i,j,b[4],6,-145523070);j=g(j,c,h,i,b[11],10,-1120210379);i=g(i,j,c,h,b[2],15,718787259);h=g(h,i,j,c,b[9],21,-343485551);a[0]=n(c,a[0]);a[1]=n(h,a[1]);a[2]=n(i,a[2]);a[3]=n(j,a[3])}function c(a,b,c,d,e,f){b=n(n(b,a),n(d,f));return n(b<<e|b>>>32-e,c)}function d(a,b,d,e,f,g,h){return c(b&d|~b&e,a,b,f,g,h)}function e(a,b,d,e,f,g,h){return c(b&e|d&~e,a,b,f,g,h)}function f(a,b,d,e,f,g,h){return c(b^d^e,a,b,f,g,h)}function g(a,b,d,e,f,g,h){return c(d^(b|~e),a,b,f,g,h)}function h(a){txt="";var c=a.length,d=[1732584193,-271733879,-1732584194,271733878],e;for(e=64;e<=a.length;e+=64){b(d,i(a.substring(e-64,e)))}a=a.substring(e-64);var f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<a.length;e++)f[e>>2]|=a.charCodeAt(e)<<(e%4<<3);f[e>>2]|=128<<(e%4<<3);if(e>55){b(d,f);for(e=0;e<16;e++)f[e]=0}f[14]=c*8;b(d,f);return d}function i(a){var b=[],c;for(c=0;c<64;c+=4){b[c>>2]=a.charCodeAt(c)+(a.charCodeAt(c+1)<<8)+(a.charCodeAt(c+2)<<16)+(a.charCodeAt(c+3)<<24)}return b}function k(a){var b="",c=0;for(;c<4;c++)b+=j[a>>c*8+4&15]+j[a>>c*8&15];return b}function l(a){for(var b=0;b<a.length;b++)a[b]=k(a[b]);return a.join("")}function m(a){return l(h(a))}function n(a,b){return a+b&4294967295}var j="0123456789abcdef".split("");if(m("hello")!="5d41402abc4b2a76b9719d911017c592"){function n(a,b){var c=(a&65535)+(b&65535),d=(a>>16)+(b>>16)+(c>>16);return d<<16|c&65535}}return m(a)}

var JSON;JSON||(JSON={});(function(){function k(a){return 10>a?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function m(a,j){var c,d,h,n,g=e,f,b=j[a];b&&"object"===typeof b&&"function"===typeof b.toJSON&&(b=b.toJSON(a));"function"===typeof i&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?""+b:"null";case "boolean":case "null":return""+b;case "object":if(!b)return"null";e+=l;f=[];if("[object Array]"===Object.prototype.toString.apply(b)){n=b.length;for(c=0;c<n;c+=1)f[c]=m(c,b)||"null";h=0===f.length?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&"object"===typeof i){n=i.length;for(c=0;c<n;c+=1)"string"===typeof i[c]&&(d=i[c],(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h);h=0===f.length?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+"}";e=g;return h}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,l,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,j,c){var d;l=e="";if("number"===typeof c)for(d=0;d<c;d+=1)l+=" ";else"string"===typeof c&&(l=c);if((i=j)&&"function"!==typeof j&&("object"!==typeof j||"number"!==typeof j.length))throw Error("JSON.stringify");return m("",{"":a})});"function"!==typeof JSON.parse&&(JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&"object"===typeof b)for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),void 0!==f?b[g]=f:delete b[g]);return e.call(a,d,b)}var d,a=""+a;q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),"function"===typeof e?c({"":d},""):d;throw new SyntaxError("JSON.parse");})})();
					
function unicodeToUTF8ByteArray(s)
{
	 // transforms the given string to UTF8
	return unescape( encodeURIComponent( s ) );
}
// plugin detection;
var et_pd_maxjs	= 19;
var et_pd_maxfl	= 15;
var et_pd_maxsh	= 15;
var et_pd_maxqt	= 15;
var et_pd_maxsl = 4;
var et_pd_v		= 1.0;
var et_pd_js	= 0;
var et_pd_ag	= navigator.userAgent.toLowerCase();
var et_pd_z		= 0;
var et_pd_a		= new Array(30);
var et_pd_etpl;
var et_pd_eta	= "Adobe Acrobat ";
var et_pd_eti	= " Plug-in";
var et_pd_etm	= "Windows Media Video";
var et_pd_etp	= "PDF.PdfCtrl.";
var et_pd_etq	= "QuickTime";
var et_pd_etr	= "RealPlayer(tm)";
var et_pl	= "Shockwave";
var et_pd_i;
var et_pd_k;
var et_pd_s;
var et_pd_ud		= 'undefined';
var et_blockPlugin  = false;
// target parameters	
var et_target       = '';
var et_tval         = '';
var et_tonr         = '';
var et_tsale        = 0;
var et_cust         = 0;
var et_basket       = '';

// campaign parameters
var et_lpage        = '';
var et_trig         = '';
var et_se           = '';

// basis parameters
var et_easy         = 1;
var et_areas        = '';
var et_ilevel       = 1;
var et_url          = '';
var et_tag          = '';
var et_organisation = '';
var et_demographic  = '';
var et_ssid         = '';
var et_ip           = '';
var et_sem          = '';

// fetch url parameter
var et_referer      = et_server + '/app?et=';
var et_cntScript    = 'cnt.php';
var et_ver          = '3.0';
var et_secureId     = 'S093em';
var et_subid        = '';
var et_la           = '';
var et_js           = 1;
var et_co           = '';
var et_iw           = '';
var et_sh           = '';
var et_sw           = '';
var et_ih           = '';
var et_up           = '';
var et_sc           = 'na';
var et_gp           = '';
var et_tc           = '';
var et_tv           = '';
var et_to           = '';
var et_ts           = '';
var et_tl           = '';
var et_tt           = '';
var et_tsub         = '';
var et_tmp          = '';
var et_sub          = '';
var et_pse          = '';
var et_first		= true;
var et_referrer		= '';
var et_maxUrlLength = 8190;
var et_maxValueLength = 255;

var et_host		= et_getProtocol() + '//application.etracker.com/';
var et_cntHost	= et_server + '/';
var et_et   	= 'S093em';
var et_ibrowse  = 0;
var et_ibrowsev = 99;
var et_ie6	  = 0;
var et_safari   = 0;
var et_o		= 0;
var et_ff	   = 1;



var et_location, et_top, et_sendloc;
try
{
	et_location = top.location.hash;
	et_sendloc = top.location.search;
	et_top = top.location;
}
catch(e)
{
	et_location = window.location.hash;
	et_sendloc = window.location.search;
	et_top = window.location;
}
function et_spLink( url )
{
	if(!url) return '';
	url = url.replace(/#.*/gi, '');
	
	var includes = new Array('seite','wbt_ls_seite_id','root','wbt_ls_kapitel_id');
	var host = url.replace(/\?.*/gi, '');
	var query = url.replace(/.*\?/gi, '').split('&');
	var query_export = '';

	for(var i = 0; i < query.length; i++)for(var j=0; j < includes.length; j++)
		if(query[i].indexOf(includes[j]) == 0 &&(query[i].length == includes[j].length ||query[i].substr(includes[j].length,1) == '='))
			query_export += '&' + query[i];
	
	query = query_export ? '?' + query_export.substr(1) : '';

	return host+query.replace(/&/gi, '%26');
}

function et_spPage( url ) 
{
	return et_spLink( url ); 
}

var et_links		= 1;
var et_toppos		= 0;
var et_leftpos	  	= 0;
var et_overlay		= 0;
var et_search		= et_spPage(window.location.search);
var et_thisHref	 	= et_spPage(window.location.pathname) + et_search;
var et_gauged		= 0;
var et_px, et_py;
var et_direction	= 1;
var et_d			= document;
var et_blockOverlay = false;
var et_overlayLimit = 100;

function et_iO()
{
	if(et_location.match(/.et_overlay=0/gi))
	{
		et_d.cookie='et_overlay=0 ;path=/';
	}
	else if((et_location.match(/.et_overlay=1/gi))||(et_d.cookie.match(/et_overlay=1/))||(et_d.cookie.match(/et_overlay=2/)))
	{
		if( et_location.match(/et_h=1/gi) )
			et_overlay = 2;
		else if( et_location.match(/et_h=0/gi) )
			et_overlay = 1;
		else if(et_d.cookie.match(/et_overlay/))
		{
			if( et_d.cookie.match(/et_overlay=2/) )
				et_overlay = 2;
			else
				et_overlay = 1;
		}

		et_liveSwitch = '';
		if((et_sendloc.match(/et_liveSwitch/gi))||(et_d.cookie.match(/et_liveSwitch/gi)))
		{
			if((et_sendloc.match(/et_liveSwitch=1/gi))||(et_d.cookie.match(/et_liveSwitch=1/gi)))
				et_liveSwitch = '&live=1';
			else if((et_sendloc.match(/et_liveSwitch=0/gi))||(et_d.cookie.match(/et_liveSwitch=0/gi)))
				et_liveSwitch = '&live=0';
			else if((et_sendloc.match(/et_liveSwitch=2/gi))||(et_d.cookie.match(/et_liveSwitch=2/gi)))
				et_liveSwitch = '&live=2';
		}

		et_d.cookie='et_overlay='+et_overlay+' ;path=/';
	
		var et_stylesheet = et_d.createElement('link');
		et_stylesheet.type='text/css';
		et_stylesheet.rel='stylesheet';
		et_stylesheet.href=et_host+'et_overlay_show.php?et='+et_et+'&style=1&t='+new Date().getTime();
		et_stylesheet.media='screen,projection,print';
		var head = et_d.getElementsByTagName('head')[0] || et_d.documentElement;
		head.insertBefore(et_stylesheet, head.firstChild);

		et_getPageSize(0);
		et_div = et_d.createElement('div');
		et_div.id = 'et_div';
		et_div.style.zIndex = '1000000';
		et_div.style.position = et_o?'fixed':'absolute';
		et_div.style.display = 'block';
		et_div.style.top = '0px';
		et_div.style.left = '0px';
		et_div.style.opacity = '0.5';
		et_div.style.KhtmlOpacity = '0.5';
		et_div.style.height = '1px';
		
		if(et_d.compatMode == 'BackCompat' && et_ibrowse)
		{
			et_div.style.width = et_d.body.scrollWidth;
		}
		else
		{
			et_div.style.width = '100%';
		}
	
		et_div_progress = et_d.createElement('div');
		et_div_progress.id = 'et_div_progress';
		et_div_progress.className = 'et_div_progress';
		et_div_progress.style.position = (et_ie6?'absolute':'fixed');
		if(et_d.compatMode == 'BackCompat' && et_ibrowse)
		{
			et_div_progress.style.position = 'absolute';
			et_div_progress.style.margin = '0px auto 0px auto';
		}
		et_div_progress.innerHTML = '<div id=\"et_div_progress_info\" class=\"et_div_progress_info\">LOADING...</div>';

		if(et_ie6)
			et_div.innerHTML = '<div id=\"et_div_heatmap\" style=\"visibility:visible;filter:Alpha(opacity=50);width:'+et_px+'px;z-index:1;height:'+(et_py+50)+'px;background-color:#000;\"><img id=\"et_heatmapimage\" style=\"height:'+(et_py+50)+'px;width:1px;visibility:visible;\" src=\"http://www.etracker.com/static/images/1px.gif\"></div>';
		else
			et_div.innerHTML = '<div id=\"et_div_heatmap\" style=\"filter:Alpha(opacity=50);position:fixed;top:0px;left:0px;visibility:visible;width:100%;height:'+(et_py+50)+'px;background-color:#000;\"></div><img id=\"et_heatmapimage\" style=\"filter:Alpha(opacity=60);position:absolute;top:0px;left:0px;height:'+(et_py+50)+'px;width:1px;visibility:hidden;background-color:#000;\" src=\"http://www.etracker.com/static/images/1px.gif\">';
	
	
		et_d.getElementsByTagName('body')[0].insertBefore(et_div, et_d.getElementsByTagName('body')[0].firstChild);
		et_d.getElementsByTagName('body')[0].insertBefore(et_div_progress, et_d.getElementById('et_div'));

		if(typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown')
		{
			var easy = 0;
			var pagename = et_pagename;
		}
		else
		{
			var easy = 1;
			var pagename = '';
		}
 
		var url = et_host+'et_overlay_show.php'+'?et='+et_et+'&n='+escape(et_thisHref)+'&i='+escape(pagename)+'&easy='+easy+'&o=' + et_overlay + et_liveSwitch +'&t='+new Date().getTime(); 
		etc_loadScript(url, et_startOverlay);
	}
	
	if(!et_overlay)
		document.readyState == 'complete' || document.readyState == 'loaded' ? et_initLinks() : et_addEvent( window, 'load', et_initLinks );
}

function etc_loadScript(url, callback) {
		var head = document.getElementsByTagName("head")[0] || document.documentElement;
		var script = document.createElement("script");
		script.src = url;
 		
		var done = false;
		script.onload = script.onreadystatechange = function() {
			if(!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				script.onload = script.onreadystatechange = null;
				head.removeChild( script );
				callback();
			}
		};
		head.insertBefore(script, head.firstChild);
}


ET_Event = new etEvent('S093em', et_server);
function _etc()
{
	var c = "";


	if(!et_blockPlugin)
		et_pd();

	et_cPQ();
	et_pEc();
	et_eC('S093em');
	if(!et_blockOverlay)
		et_iO();
	
	var x = document.createElement('div');
	x.innerHTML = c;
	document.getElementsByTagName('body')[0].appendChild(x);
	}
if (typeof et_params == 'undefined') {
	et_params = function() {};	
}
et_params();
_etc();
