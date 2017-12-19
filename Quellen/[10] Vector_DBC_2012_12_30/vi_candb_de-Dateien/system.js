// ----------------------------------------------------------------------------------------
// Funktionen für den Mouseovereffekt / Layer Ein- und Ausblendefunktionen.
// ----------------------------------------------------------------------------------------

	function MM_preloadImages() 
		{ //v3.0
	  	var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	    	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
		if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
		}
	
	function MM_swapImage() 
		{ //v3.0
		  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
		   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
		}
	
	function MM_swapImgRestore() 
		{ //v3.0
	  	var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
		}
		
	function MM_findObj(n, d) 
		{ //v3.0
	  	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	    	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
		  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
		  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
		}
	
	function MM_showHideLayers()
		{ //v3.0
	  	var i,p,v,obj,args=MM_showHideLayers.arguments;
		  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
		    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
		    obj.visibility=v; }
		}


// ----------------------------------------------------------------------------------------
// Systemfunktionen
// ----------------------------------------------------------------------------------------


   // Eine Liste aller geöffneten Popups
   var PopupList = new Array();
   
   //
   // Öffnen eines Fensters.
   //
	function js_popup(str_url, str_name, str_window, int_width, int_height, int_x, int_y, str_features)
	   	{
	    str_features = str_features + ',width=' + int_width + ',height=' + int_height;
	   
		if (int_x=='false')
	   	  str_features = str_features + ',left=' + ((screen.width - int_width) / 2) + ',top=' + ((screen.height - int_height) / 2);
	    else
	   	  str_features = str_features + ',left=' + int_x + ',top=' + int_y;
	    
		if (PopupList[str_window] && PopupList[str_window].closed == false)
			PopupList[str_window].close();
		
		obj_window = window.open(str_url, str_window, str_features);
		PopupList[str_window] = obj_window;
		obj_window.focus();
		}

   //
   // Rahmen um ein Feld an oder aus schalten.
   //
	function js_rahmen()
		{
		var element = window.event.srcElement;
		element.className = (element.className == 'rahmen_aus' ? 'rahmen_an' : 'rahmen_aus');
		}

   //
   // Macht alle Seitenobjekte für die Maus unselektierbar.
   //
	function js_make_unselect()
		{	
		for (i=0; i < document.all.length; i++)
				document.all(i).unselectable = "on";
		}
	
   //
   // Hebt die Funktion js_make_unselect() für gewünschte Objekte wieder auf.
   //
	function js_make_select(id)
		{	
		eval(id).unselectable = "off";
		}

   //
   // Aktiviert oder deaktiviert eine Checkbox.
   //
	function js_checkbox_switch(name)
		{
		document.form.elements[name].checked = !document.form.elements[name].checked;
		}

   //
   // Aktiviert oder deaktiviert alle Checkboxen.
   //
	function js_checkboxen_alle(name)
		{
		for (var x = 0; x < document.forms[0].elements.length; x++)
			{
			var obj = document.forms[0].elements[x];
			
			if (obj.name != name)
				obj.checked = document.form.elements[name].checked;
			}
		}

   //
   // Öffnet zwei Fenster gleichzeitig.
   //
	function js_zwei_frames(url_1, f_1, url_2, f_2)
	   {  
	   	parent.frames[f_1].location.href=url_1;
	    parent.frames[f_2].location.href=url_2;
	   }
	   
   //
   // Bildertausch in Aufklappboxen
   //
	function js_switch(id, bild) {
		if(document.getElementById(id).style.display != "none") {
		
		} else {
			var iconID = id.replace("zelle-","icon-");
			document.getElementById(iconID).src="https://www.vector.com/portal/medien/vector_group/logos_icons_symbols/" + bild;
		}
	}

// ----------------------------------------------------------------------------------------
// Funktionen für die Positionierung
// ----------------------------------------------------------------------------------------

	//
	// Rechte Koordinate eines Elements
	//
	function js_getRight(obj_element)
		{
		if (obj_element.offsetWidth)
			return obj_element.offsetWidth + js_getLeft(obj_element);
		else
			return 20 + js_getLeft(obj_element);
		}
	
	//
	// Linke Koordinate eines Elements
	//
	function js_getLeft(obj_element)
		{
		if (obj_element.offsetParent)
			return js_getLeft(obj_element.offsetParent)+obj_element.offsetLeft
		else
			return obj_element.offsetLeft;
		}
	
	//
	// Untere Koordinate eines Elements
	//
	function js_getBottom(obj_element)
		{
		if (obj_element.offsetHeight)
			return obj_element.offsetHeight + js_getTop(obj_element);
		else
			return 20 + js_getTop(obj_element);
		}
	
	//
	// Obere Koordinate eines Elements
	//
	function js_getTop(obj_element)
		{
		if (obj_element.offsetParent)
			return js_getTop(obj_element.offsetParent)+obj_element.offsetTop
		else
			return obj_element.offsetTop;
		}
	   
// ----------------------------------------------------------------------------------------
// Displayfunktionen
// ----------------------------------------------------------------------------------------

	// 
	// Öffnet und schliesst einen DIV Abschnitt. Für IE und NS ab Version 6.
	//
	function js_display(nr, status_erzwungen)
		{
		// Für IE und NS6.
		if (document.getElementById)
			{
			if(!status_erzwungen)
				{
				current = (document.getElementById(nr).style.display == 'block') ? 'none' : 'block';
				}
			else
				{
				if(status_erzwungen == 'an' ) current = 'block';
				if(status_erzwungen == 'aus') current = 'none';
				}
			
			document.getElementById(nr).style.display = current;
			}
		
		// 
		else if (document.all)
			{
			if(!status_erzwungen)
				{
				current = (document.all[nr].style.display == 'block') ? 'none' : 'block'
				}
			else
				{
				if(status_erzwungen == 'an' ) current = 'block';
				if(status_erzwungen == 'aus') current = 'none';
				}
			
			document.all[nr].style.display = current;
			}
		
		//
		else if (document.layers)
			{
			var i = parseInt(nr.substr(nr.length-1,1));
			var replacing = heights[i-1];
			if (shown[i])
				{
				shown[i] = false;
				replacing = -replacing;
				document.layers[nr].visibility = 'hide';
				document.layers[nr].top = safe;
				}
			else
				{
				shown[i] = true;
				document.layers[nr].visibility = 'show';
				var tempname = 'header' + i;
				document.layers[nr].top = document.layers[tempname].top + headerheight;
				}
			for (j=(i+1);j<=max;j++)
				{
				name1 = 'header' + j;
				document.layers[name1].top += replacing;
				if (shown[j])
					{
					name2 = 'number' + j;
					document.layers[name2].top += replacing;
					}
				}
			}
		// else alert ('This link does not work in your browser.');
		} // js_display()

	// 
	// Wechselt einen src aus
	// Erwartet im Moment absolute Pfade (Mozilla gibt bei document.getElementById(nr).src
	// eine URL zurück)
	//
	function js_change_src(nr, wert1, wert2)
		{
		// Für IE und NS6.
		if (document.getElementById)
			{
			current = (document.getElementById(nr).src == wert1) ? wert2 : wert1;

			document.getElementById(nr).src = current;
			}
		
		// 
		else if (document.all)
			{
			current = (document.all[nr].src == wert1) ? wert2 : wert1
			
			document.all[nr].src = current;
			}
		
		// else alert ('This link does not work in your browser.');
		} // js_change_src()
		
		
	// 21.10.05 aer: dynamische Formulare: Funktion, die abhängige Felder ein-/ausblendet
	// Parameter: - Name des Formularfeldes (Auswahlliste)
	//            - System-IDs _aller_ abhängigen Formularfelder (da am Anfang alle ausgeblendet werden)
	function formgenabhaengig(selectname, idintern, abhaengigids)
		{
//		alert('in formgenabhaengig. '+selectname);		
		// zuerst alle abhaengigen FOrmular-Elemente verstecken
		var alleabhaengigen = abhaengigids.split(",");
		for (var i = 0; i < alleabhaengigen.length; i++)
			document.getElementById("abhaengig"+alleabhaengigen[i]).style.display='none';			
		// gewählten Eintrag ermitteln
		var gewaehlt = '';
		for (i = 0; i < document.forms['form'].elements[selectname].length; ++i)
		    if (document.forms['form'].elements[selectname].options[i].selected == true)
				gewaehlt = document.forms['form'].elements[selectname].options[i].value;	
		for (var i = 0; i < abhaengig.length; i++)			
			{
			for (var Eigenschaft in abhaengig[i])	
				{
				// alert('Eigenschaft '+Eigenschaft+' mit Wert: '+abhaengig[i][Eigenschaft]+'. Gewählt: '+idintern+gewaehlt);
				
				if (Eigenschaft == idintern+gewaehlt)
					{
					var zwisch = abhaengig[i][Eigenschaft];
					var allezwisch = zwisch.split(",");
					for (var j = 0; j < allezwisch.length; j++)					
						document.getElementById("abhaengig"+allezwisch[j]).style.display='block';
					}				
				} // for
			} // for
		} // formgenabhaengig()
		
	function anzeigenAbhaengigeFelderRadio(anzeigenIds, idWertEltern)
		{
			// Erstmal alle abhängigen Felder ausblenden
			var ids = anzeigenIds.split(",");
			for (var i = 0; i < ids.length; i++) {
				if (document.getElementById("abhaengig"+ids[i])) {
					document.getElementById("abhaengig"+ids[i]).style.display = 'none';			
				}
			}
			
			if (idWertEltern != '') {
				// Nun das richtige abhängige Feld anzeigen
				for (var i = 0; i < abhaengig.length; i++)			
					{
					for (var eigenschaft in abhaengig[i])	
						{
						// alert ("Prüfe "+eigenschaft+" mit Wert "+idWertEltern);
						
						if (eigenschaft == idWertEltern)
							{
							var zwisch = abhaengig[i][eigenschaft];
							var allezwisch = zwisch.split(",");
							for (var j = 0; j < allezwisch.length; j++)					
								document.getElementById("abhaengig"+allezwisch[j]).style.display='block';
							}				
						} // for
					} // for
				}
		}
		
	function anzeigenAbhaengigeFelder(input, anzeigenIds, idWertEltern)
		{
			// if (input.checked)
			//	alert ("checked");
			
			if (idWertEltern != '') {
				// Nun das richtige abhängige Feld anzeigen
				for (var i = 0; i < abhaengig.length; i++)			
					{
					for (var eigenschaft in abhaengig[i])	
						{
						// alert ("Prüfe "+eigenschaft+" mit Wert "+idWertEltern);
						var zwisch = abhaengig[i][eigenschaft];
						var allezwisch = zwisch.split(",");
						
						if (eigenschaft == idWertEltern)
							{
							for (var j = 0; j < allezwisch.length; j++)
								{
								if (input.checked)
									document.getElementById("abhaengig"+allezwisch[j]).style.display = 'block';
								else
									document.getElementById("abhaengig"+allezwisch[j]).style.display = 'none';
								}
							}			
						}
					}
				}
		}
		
// ----------------------------------------------------------------------------------------
// Flash-Element-Funktion (IE update) 
// ----------------------------------------------------------------------------------------

function CreateFlashControl(DivID, strHtml)
{
	var d = document.getElementById(DivID);
  	d.innerHTML = strHtml;
}



// ----------------------------------------------------------------------------------------
// Funktion zum Nachladen weiterer Events über windows.onload
// ----------------------------------------------------------------------------------------
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}



