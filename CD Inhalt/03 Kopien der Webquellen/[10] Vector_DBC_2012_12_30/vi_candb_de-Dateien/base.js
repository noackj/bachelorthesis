
/*
 * Initialization after page was loaded.
 */
document.observe("dom:loaded", function() {
	/*
	 * Bookmarkable Highslide-Popups
	 */
	var locWithoutHash = String(window.location).replace(window.location.hash, '');
	
	// User defined event to open a highslide popup
	document.observe("highslide:open", function(event) {
		var elem = event.memo.elem;
		var rel = elem.readAttribute('rel');
		var options = (rel.length >= 23 ? elem.readAttribute('rel').substring(23).gsub("'", '"').evalJSON() : {});
		options.src = elem.readAttribute('href').split('#!')[1];
		if(!options.objectType) {
			hs.expand(null, options);
		}else {
			hs.htmlExpand(null, options);
		}
	});
	
	// Process bookmarkable (and crawlable) highslide popup links
	if($$('.highslide[rel|=highslide-bookmarkable]')) {
		// Edit href - add current location as prefix and join 
		// them with #! like [current_page]#![href_value]
		// Expl.: http://domain.tld/current_page.html#!popup_page.html
		$$('.highslide[rel|=highslide-bookmarkable]').each(function(e) {
			var href = e.readAttribute('href');
			if(href.indexOf('#') == -1) {
				href = locWithoutHash + '#!' + href;
				e.writeAttribute('href', href);
			}
		});
		
		// Add click handler
		$$('.highslide[rel|=highslide-bookmarkable]').invoke('observe', 'click', function(event) {
			document.fire('highslide:open', {"elem": this});
			event.stop();
		});
		
		// Open a bookmarked popup automatically if available
		var openElem = $$('.highslide[rel|=highslide-bookmarkable]').detect(function(n){return n.readAttribute('href') == window.location;});
		if(openElem) {
			document.fire('highslide:open', {"elem": openElem});
		}
	}
	
	
	/*
	 * Page feedback
	 */
	// Hide elements by js so they will shown as default if js was disabled
	if($('page-feedback-opener')) {
		$('page-feedback-opener').toggleClassName('open');
	}
	if($('page-feedback-form')) {
		$('page-feedback-form').hide();
	}
	if($('feedback-kommentar')) {
		$('feedback-kommentar').hide();
	}
	
	// Show/hide feedback form
	if($('page-feedback-opener')) {
		$('page-feedback-opener').observe('click', function(event) {
			this.toggleClassName('open');
			$('page-feedback-form').toggle();
		});
	}
	
	// Show comment field of feedback form
	if($$('#page-feedback-form input[type=radio]')) {
		$$('#page-feedback-form input[type=radio]').invoke('observe', 'click', function(event) {
			$('feedback-kommentar').show();
		});
	}
	
	/*
	 * Glossar
	 */
	// Search for words with glossar tooltips and create them
	$$('.has-glossar-tooltip').each(createGlossarTooltip);
	
	//...next
});


/*
 * Create function for glossar tooltips
 */
function createGlossarTooltip(s) {
	var title = s.readAttribute('title');
	s.writeAttribute('title', false);
	s.observe('mouseover', function(event) {
		var tooltip = $('glossar-tooltip');
		if(!tooltip) {
			tooltip = new Element('div', {'id' : 'glossar-tooltip'});
			$($$('body')[0]).insert(tooltip);
		}
		tooltip.update(title).appear({'duration' : 0.2, 'from' : 0, 'to' : 1});
	});
	s.observe('mousemove', function(event) {
		if($('glossar-tooltip')) {
			$('glossar-tooltip').setStyle({'left' : (event.pointerX() + 20) + 'px', 'top' : (event.pointerY() + 20) + 'px'});
		}
	});
	s.observe('mouseout', function(event) {
		if($('glossar-tooltip')) {
			$('glossar-tooltip').fade({'duration' : 0.1, 'from' : 1, 'to' : 0});
		}
	});
}

/* 28.09.2012
 * tme
 * Navigation für mobile Geräte aus/einblenden
 */	
 
function navSwitch(type) {
	
	if(type=="show") {
		document.getElementById('page-navigation').style.display = "block";
		document.getElementById('navSwitchHide').style.display = "block";
		document.getElementById('navSwitchShow').style.display = "none";
	} else {
		document.getElementById('page-navigation').style.display = "none";
		document.getElementById('navSwitchHide').style.display = "none";
		document.getElementById('navSwitchShow').style.display = "block";
	}
}
