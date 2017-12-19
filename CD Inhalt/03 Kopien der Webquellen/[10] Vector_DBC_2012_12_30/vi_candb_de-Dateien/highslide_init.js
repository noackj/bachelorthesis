/**
 * Init
 */
hs.graphicsDir = 'portal/skripts/highslide/graphics/';
hs.outlineType = 'rounded-white';
//hs.wrapperClassName = 'draggable-header no-footer';
hs.wrapperClassName = 'draggable-header';
hs.allowSizeReduction = false;
hs.align = 'center';
hs.headingText = ' ';
hs.showCredits = false;

//own settings 
hs.preserveContent = false;
hs.swfOptions = {
	version:  "7",
	params: {allowFullScreen: 'true'}
};

/**
 * Function to set headingText from an iframe (from the popup content)
 * 
 * @param	string	txt	The heading text
 * @return	void
 */
function parentSetHeadingText(txt) {
	var count = 0;
	new PeriodicalExecuter(function(pe) {
		var hs = parent.hs;
		var exp = hs.getExpander();
		if(exp) {
			exp.heading.innerHTML = txt;
			pe.stop();
		}else if(count >= 50) {
			pe.stop();
		}
		count++;
	}, 0.1);
}