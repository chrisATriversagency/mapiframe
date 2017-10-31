(function() {

    var toolTips = document.querySelectorAll('.tooltip');

    for (var i = 0; i < toolTips.length; i++) {
    	activeDot(toolTips[i]);
    	removeActiveDot(toolTips[i]);
    }

    function activeDot(element) {
        element.addEventListener('mouseover', function() {
        	var id = element.id;
        	var matchingDotId =  id + '--dot';
        	var matchingDot = document.getElementById(matchingDotId);

        	matchingDot.className = 'dot active';

        });
    }

    function removeActiveDot(element) {
        element.addEventListener('mouseleave', function() {
        	var id = element.id;
        	var matchingDotId =  id + '--dot';
        	var matchingDot = document.getElementById(matchingDotId);

        	matchingDot.className = 'dot';

        });
    }


})()