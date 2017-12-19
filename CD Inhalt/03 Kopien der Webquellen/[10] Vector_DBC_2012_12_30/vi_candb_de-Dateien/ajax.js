
// ------------------------------------------------------------------------------------------------------
// A J A X - O B J E K T   ( A L T E   M E T H O D E)
// ------------------------------------------------------------------------------------------------------

/** 
* Liste von Indexen, die bereits von Cycon-Modulen verwendet werden.
* 
* Diese Liste ist notwendig, damit mehrere Module dasselbe XMLHTTP-Objekt
* zur selben Zeit für Anfragen verwenden können.
* 
*	1 = WBT
*	2 = Sprachpräferenz
*	3 = ...
*
*
* Die Initialisierung erfolgt dann nach folgenden Schema:
*
*	str_ajax_pfad_init[3]	= '__pfad__';
*	str_ajax_modul_id[3]	= '__modul_id__';
*	str_ajax_klasse[3]		= '__klasse__';
*	str_ajax_com[3]			= '__com__';
*	str_ajax_seite[3]		= '__seite__';
*	str_ajax_target_box[3]	= '__target__';
**/



	var XMLHTTP = null;
	var int_anzahl				= 10;
	var str_add_param			= new Array(int_anzahl);
	var str_ajax_pfad_init		= new Array(int_anzahl);
	var str_ajax_modul_id		= new Array(int_anzahl);
	var str_ajax_klasse			= new Array(int_anzahl);
	var str_ajax_com			= new Array(int_anzahl);
	var str_ajax_seite			= new Array(int_anzahl);
	var str_ajax_target_box		= new Array(int_anzahl);
	var int_ajax_index			= 0;
	
	for (i=0; i<int_anzahl; i++)
		 str_add_param[i] = "";
	
	if (window.XMLHttpRequest) {
	  XMLHTTP = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	  try {
		XMLHTTP = 
		  new ActiveXObject("Msxml2.XMLHTTP");
	  } catch (ex) {
		try {
		  XMLHTTP = 
		   new ActiveXObject("Microsoft.XMLHTTP");
		} catch (ex) {
		}
	  }
	}
	
	function daten_ausgeben()
		{
		var int_index = int_ajax_index;
		
		obj_container_ajax = document.getElementById(str_ajax_target_box[int_index]);
		
		if (XMLHTTP.readyState == 4)
			{
			if (obj_container_ajax != null)
				{
				str_temp = XMLHTTP.responseText.replace(/\+/g, " ");
				$(str_ajax_target_box[int_index]).innerHTML = '';
				$(str_ajax_target_box[int_index]).insert(unescape(str_temp));
				
				if (obj_container_ajax.innerHTML.length > 0 && str_ajax_target_box[int_index] == 'wbt-annotation-message')
					document.getElementById('wbt-box-annotation').style.display = 'block';
				else if (obj_container_ajax.innerHTML.length == 0 && str_ajax_target_box[int_index] == 'wbt-annotation-message')
					document.getElementById('wbt-box-annotation').style.display = 'none';
				}
			}
		else
			{
			if (obj_container_ajax != null)
				{
				int_height_ajax = obj_container_ajax.clientHeight;
				int_width_ajax = obj_container_ajax.clientWidth;
				// alert(str_ajax_target_box+' '+int_width_ajax+' '+int_height_ajax);
				if (int_height_ajax > 0)
					int_height_ajax = (int_height_ajax - 10) / 2;
				if (int_width_ajax > 0)
					int_width_ajax = int_width_ajax - 10;
				
				$(str_ajax_target_box[int_index]).innerHTML = '';
				$(str_ajax_target_box[int_index]).update('<div style="width:'+int_width_ajax+'px; padding-top:'+int_height_ajax+'px; padding-bottom:10px; text-align:center; vertical-align:middle;"><img src="portal/pics/layout/indicator.gif" border="0"></div>');
				}
			}
		}
	
	function get_message()
		{
		if (str_ajax_pfad_init[int_ajax_index])
			{
			var str_ajax_pfad = str_ajax_pfad_init[int_ajax_index];
			var str_ajax_param = 'modul_id='+str_ajax_modul_id[int_ajax_index]+'&klasse='+str_ajax_klasse[int_ajax_index]+'&com='+str_ajax_com[int_ajax_index]+'&seite='+str_ajax_seite[int_ajax_index];
			
			if (str_add_param[int_ajax_index] != "")
				str_ajax_param = str_ajax_param + str_add_param[int_ajax_index];
			
			int_ajax_index = int_ajax_index;
			
			XMLHTTP.open("POST", str_ajax_pfad);
			XMLHTTP.onreadystatechange = daten_ausgeben;
			XMLHTTP.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			XMLHTTP.send(str_ajax_param);
			}
		}
	
	function execute_com(str_com, int_index)
		{
		str_ajax_com[int_index] = str_com;
		int_ajax_index = int_index;
		get_message();
		str_add_param[int_index] = "";
		}
	
	function set_content_to_send(str_param, str_value, int_index)
		{
		str_value = str_value.replace(/\+/g, "[[plus]]");
		str_value = str_value.replace(/\&/g, "[[and]]");
		str_add_param[int_index] = str_add_param[int_index] + '&' + str_param + '=' + str_value;
		}
	
	function set_container_to_send(str_param, str_container, int_index)
		{
		var str_temp = "";
		str_temp = document.getElementById(str_container).value;
		set_content_to_send(str_param, str_temp, int_index);
		}


// ------------------------------------------------------------------------------------------------------
// A L L G E M E I N E S   C Y C O N   A J A X - O B J E K T   (N E U E   M E T H O D E)
// ------------------------------------------------------------------------------------------------------

/**
* Stapel mit bereits erzeugten AJAX-Objekten
*/
var _ajax_objects = new Array();


/**
* Beispiel (zum testen einfach einkommentieren)
*/
/*
var test_obj = new CyconAJAX('eindeutiger_schluessel', 'POST');
var test_params = [
	['modul_id',			23],
	['klasse',				'stellenausschreibungen'],
	['com',					'get_search_amount'],
	['seite',				'vi_jobs_uebersicht_neu_de']
];
function test_handler() {
	var test_message = test_obj.getResponseMessage();
	if(test_message != '') {
		alert('Message: '+test_message);
	}
}
test_obj.sendRequest('/loader_ajax.php', test_params, test_handler);
*/


/**
* AJAX-Objekt laden und in einem Stapel speichern
*/
function get_AJAX(object_key) {
	
	var XMLHTTP = null;
	
	if(object_key != undefined) {
		// Prüfen, ob für den genannten Schlüssel bereits 
		// ein AJAX-Objekt existiert und dieses zurückgeben.
		if(_ajax_objects.length > 0) {
			for(var i = 0; i < _ajax_objects.length; i++) {
				if(_ajax_objects[i].name == object_key) {
					return _ajax_objects[i].obj;
				}
			}
		}
		
		// Neues AJAX-Objekt erstellen
		if(window.XMLHttpRequest) {
			XMLHTTP = new XMLHttpRequest();
		}else if(window.ActiveXObject) {
			try {
				XMLHTTP = new ActiveXObject("Msxml2.XMLHTTP");
			}catch (ex) {
				try {
					XMLHTTP = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (ex) {
					//=> Ignored
				}
			}
		}
		
		// Neu erstelltes AJAX-Objekt registrieren
		if(XMLHTTP != null) {
			_ajax_objects[_ajax_objects.length] = {'name': object_key, 'obj': XMLHTTP};
			return _ajax_objects[_ajax_objects.length - 1].obj;
		}else {
			return false;
		}
	}else {
		return false;
	}
} // get_AJAX()


/**
* Allgemeine AJAX-Klasse zur Verwendung in Cycon
* 
* @param	object_key			Eindeutiger Objektschlüssel (required)
* @param	request_method		Gewünschte Anfragemethode, GET oder POST (optional)
* @return	void
*/
function CyconAJAX(object_key, request_method) {
	
	// Public
	// ------------------------------------------------------------------------------------------------
	this.object_key = object_key;
	this.request_method = (typeof request_method != 'undefined' ? request_method.toUpperCase() : "GET");
	this.AJAX = get_AJAX(this.object_key);
	this.responseMessage = '';
	
	/**
	* Gibt das Anfrageergebnis zurück, sobald verfügbar.
	* @return	responseMessage	Das Ergebnis der Anfrage
	*/
	this.getResponseMessage = function() {
		this.getResult();
		return this.responseMessage;
	} // getResponseMessage()
	
	/**
	* Holt das Anfrageergebnis (sobald verfügbar) und speichert es in 'this.responseMessage'.
	* @return	this
	*/
	this.getResult = function() {
		if(this.AJAX) {
			if(this.AJAX.readyState == 4) {
				var str_result_message = this.AJAX.responseText.replace(/\+/g, " ");
				this.responseMessage = unescape(str_result_message);
			}
		}
		return this;
	} // getResult()
	
	/**
	* Zeigt das Anfrageergebnis in einem beliebigen Html-Element (z.B. DIV)
	* @param	elem_id	Die ID des html-Elements, in dem das Ergebnis angezeigt 
	* 					werden soll (otional, Default: 'ajax_message')
	* @return	this
	*/
	this.showResult = function(elem_id) {
		_showResult(elem_id);
		return this;
	} // showResult()
	
	/**
	* Sendet eine beliebige Anfrage
	* @param	loader				Pfad zum abfragenden Loader (z.B. "/loader_ajax.php")
	* @param	request_params		Abfrage-Parameter. 
	*								Die Parameter müssen dabei in folgender Form angegeben werden:
	*									var params = [
	*										['modul_id',			1],
	*										['modul_verzeichnis',	'downloadcenter'],
	*										['klasse',				'downloadcenter'],
	*										['com',					'get_search_amount'],
	*										['seite',				'vi_downloadcenter_de']
	*									];
	* @param	response_handler	Funktion, welche vom ReadyStateChange-Handler des AJAX-Objektes 
	*								aufgerufen werden soll (Optional).
	* @return	this
	*/
	this.sendRequest = function(loader, request_params, response_handler) {
		var temp = new Array();
		var params = '';
		if(typeof request_params != 'undefined' && request_params.length > 0) {
			for(var i = 0; i < request_params.length; i++) {
				temp[i] = request_params[i][0]+"="+request_params[i][1];
			}
		}
		if(temp.length > 0) {
			params = temp.join("&");
		}
		
		this.AJAX.open(this.request_method, loader);
		
		if(typeof response_handler != 'undefined') {
			this.AJAX.onreadystatechange = response_handler;
		}else {
			this.AJAX.onreadystatechange = _showResult;
		}
		
		if(this.request_method == 'POST') {
			this.AJAX.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		}
		
		this.AJAX.send(params);
		
		return this;
	} // sendRequest()
	
	// Private
	// ------------------------------------------------------------------------------------------------
	var _this = this;
	
	// Interner Standard-Responsehandler
	function _showResult(elem_id) {
		_this.getResult();
		var elem_id = (typeof elem_id != 'undefined' ? elem_id : "ajax_message");
		var message_container = document.getElementById(elem_id);
		if(message_container && _this.responseMessage != '') {
			message_container.innerHTML = _this.responseMessage;
		}
	} // _showResult()
	
} // CyconAJAX()