/* SiteCatalyst code version: H.24.4.
Copyright 1996-2012 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */

// timeparting config variables
s.currDateObj=new Date();
s.currYear=s.currDateObj.getFullYear();
s.dstStart="1/1/"+s.currYear;
s.dstEnd="31/12/"+s.currYear;
s.currentYear=s.currYear;
s.URLPart=new Array();

/* Plugin Config */

s.usePlugins=true
function s_doPlugins(s) {
	var csrefParam = s.getQueryParam('csref');
	var kwcidParam = s.getQueryParam('s_kwcid');

	if ((csrefParam.length == 0) && (kwcidParam.length == 0)) {
		// beide Parameter nicht gesetzt, �berpr�fe seo
		s.channelManager('seo');
		if (s._partner != "n/a" && typeof(s._partner) !== 'undefined') {
			s.eVar50=s.crossVisitParticipation(s.getValOnce("seo_"+s._keywords),'s_ev50','30','5','>','event50',1);
		}
	} else {
		// einer der beiden Parameter gesetzt
		if (csrefParam.length > 0) {
			// csref gesetzt
			s.campaign = csrefParam;
			s.eVar50=s.crossVisitParticipation(s.getValOnce(csrefParam),'s_ev50','30','5','>','event50',1);
			s.prop53=s.getAndPersistValue(csrefParam ,'s_getval',0);
		}
	}
	s.eVar28 = s.getValOnce(s.getQueryParam('pid'));
	s.clickThruQuality('csref','event51','event52');
	s.clickThruQuality('pid','event51','event52');
	s.clickThruQuality('s_kwcid','event51','event52');

	s.prop54=s.getTimeParting('h','+1');
	s.prop55=s.getTimeParting('d','+1');
	s.prop56=s.getTimeParting('w','+1');
}
s.doPlugins=s_doPlugins

/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here. */

/* DANG-3660
 * Plugin: getValOnce_v1.0
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+" v==k?'':v");

/*
 * Plugin: getQueryParam 2.3
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");


/*
 * Plugin: getTimeParting 2.0 - Set timeparting values based on time zone 
 */
s.getTimeParting=new Function("t","z","var s=this,cy;dc=new Date('1/1/2000');if(dc.getDay()!=6||dc.getMonth()!=0){return'Daten nicht verf�bar'}else{;z=parseFloat(z);var dsts=new Date(s.dstStart);var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();var days=['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];if(thisy!=s.currentYear){return'Daten nicht verf�bar'}else{;thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=days[thisd];var ap='AM';var dt='Wochentag';var mint='00';if(thismin>30){mint='30'}if(thisd==6||thisd==0){dt='Wochenende'};var timestring=thish+':'+mint;if(t=='h'){return timestring}if(t=='d'){return dow};if(t=='w'){return dt}}};");



/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");


/*
 * Plugin clickThruQuality v1.0 - campaign bounce rate
 */
s.clickThruQuality =new Function("scp","tcth_ev","cp_ev","cff_ev","cf_th",""
+"var s=this;if(s.p_fo('clickThruQuality')==1){var ev=s.events?s.even"
+"ts+',':'';if(s.getQueryParam&&s.getQueryParam(scp)){s.events=ev+tct"
+"h_ev;if(s.c_r('cf')){var tct=parseInt(s.c_r('cf'))+1;s.c_w('cf',tct"
+",0);if(tct==cf_th&&cff_ev){s.events=s.events+','+cff_ev;}}else {s.c"
+"_w('cf',1,0);}}else {if(s.c_r('cf')>=1){s.c_w('cf',0,0);s.events=ev"
+"+cp_ev;}}}");
s.p_fo=new Function("n",""
+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
+"new Object;return 1;}else {return 0;}");



/*
* Plug-in: crossVisitParticipation v1.7 - stacks values from
* specified variable in cookie and returns value
*/
s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");




/* 
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible) 
 */
s.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/* 
 * Plugin Utility: Replace v1.0 
 */
s.repl=new Function("x","o","n","var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/* 
 * s.join: 1.0 - Joins an array into a string 
 */

s.join = new Function("v","p","var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/* 
 * channelManager v2.7 - Tracking External Traffic 
 */

s.channelManager=new Function("a","b","c","d","e","f","var s=this,g=new Date,h=0,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;g.setTime(g.getTime()+1800000);if(e){h=1;if(s.c_r(e))h=0;if(!s.c_w(e,1,g))s.c_w(e,1,0);if(!s.c_r(e))h=0;}i=s.referrer?s.referrer:document.referrer;i=i.toLowerCase();if(!i)j=1;else {k=i.indexOf('?')>-1?i.indexOf('?'):i.length;l=i.substring(0,k);m=s.split(i,'/');n=m[2].toLowerCase();o=s.linkInternalFilters.toLowerCase();o=s.split(o,',');for(p=0;p<o.length;p++){q=n.indexOf(o[p])==-1?'':i;if(q)break;}}if(!q&&!j){r=i;t=u=n;v='Other Natural Referrers';w=s.seList+'>'+s._extraSearchEngines;if(d==1){l=s.repl(l,'oogle','%');l=s.repl(l,'ahoo','^');i=s.repl(i,'as_q','*');}x=s.split(w,'>');for(y=0;y<x.length;y++){z=x[y];z=s.split(z,'|');A=s.split(z[0],',');for(B=0;B<A.length;B++){C=l.indexOf(A[B]);if(C>-1){if(z[2])D=u=z[2];else D=n;if(d==1){D=s.repl(D,'#',' - ');i=s.repl(i,'*','as_q');D=s.repl(D,'^','ahoo');D=s.repl(D,'%','oogle');}E=s.split(z[1],',');for(F=0;F<E.length;F++){if(i.indexOf(E[F]+'=')>-1||i.indexOf('https://www.google.')==0)G=1;H=s.getQueryParam(E[F],'',i).toLowerCase();if(G||H)break;}}if(G||H)break;}if(G||H)break;}}if(!q||f!='1'){q=s.getQueryParam(a,b);if(q){u=q;if(D)v='Paid Search';else v='Unknown Paid Channel';}if(!q&&D){u=D;v='Natural Search';}}if(j==1&&!q&&h==1)r=t=u=v='Typed/Bookmarked';I=s._channelDomain;if(I&&n){J=s.split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|');M=s.split(L[1],',');N=M.length;for(O=0;O<N;O++){P=M[O].toLowerCase();Q=n.indexOf(P);if(Q>-1){v=L[0];break;}}if(Q>-1)break;}}I=s._channelParameter;if(I){J=s.split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|');M=s.split(L[1],',');N=M.length;for(O=0;O<N;O++){Q=s.getQueryParam(M[O]);if(Q){v=L[0];break;}}if(Q)break;}}I=s._channelPattern;if(I){J=s.split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|');M=s.split(L[1],',');N=M.length;for(O=0;O<N;O++){P=M[O].toLowerCase();Q=q.toLowerCase();R=Q.indexOf(P);if(R==0){v=L[0];break;}}if(R==0)break;}}S=v?q+t+v+H:'';c=c?c:'c_m';if(c!='0')S=s.getValOnce(S,c,0);if(S){s._campaignID=q?q:'n/a';s._referrer=r?r:'n/a';s._referringDomain=t?t:'n/a';s._campaign=u?u:'n/a';s._channel=v?v:'n/a';s._partner=D?D:'n/a';s._keywords=G?H?H:'Keyword Unavailable':'n/a';}");

/* 
 * Top 130 Search Engines - Grouped 
 */

s.seList="google.,googlesyndication.com|q,as_q|Google>yahoo.com,yahoo.co.jp|p,va|Yahoo!>bing.com|q|Bing>altavista.co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc.de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|icq>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query,search|Netscape Search>reference.com|q|Reference.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.earthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search";

