window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	var translate = navigator.mozL10n.get;

	navigator.mozL10n.once(start);

	function start() {
		var title = document.getElementById('title');
		title.textContent = translate('app_title');

		setup();
	}

	function setup() {

	}

});



function setConnection() {
	
}