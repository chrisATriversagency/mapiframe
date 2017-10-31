(function() {

    var toolTips = document.querySelectorAll('.tooltip');
    var waterUtilities = document.getElementById('water-utilities');
    var blueMap = document.getElementById('blue-svg');

    if (waterUtilities != null) {
    	waterUtilities.addEventListener('mouseover', function() {
    		blueMap.style.opacity = '1';
    	});

    	waterUtilities.addEventListener('mouseleave', function() {
    		blueMap.style.opacity = '0';
    	});
    }

    for (var i = 0; i < toolTips.length; i++) {
    	console.log(document.getElementById(toolTips[i].id + '--dot'));
    	activeDot(toolTips[i]);
    	removeActiveDot(toolTips[i]);
    }

    function activeDot(element) {
        element.addEventListener('mouseover', function() {
        	var id = element.id;
        	var matchingDotId =  id + '--dot';
        	var matchingDot = document.getElementById(matchingDotId);

        	if (matchingDot != null) {
        		matchingDot.className = 'dot active';
        	}
        });
    }

    function removeActiveDot(element) {
        element.addEventListener('mouseleave', function() {
        	var id = element.id;
        	var matchingDotId =  id + '--dot';
        	var matchingDot = document.getElementById(matchingDotId);

        	if (matchingDot != null) {
        		matchingDot.className = 'dot';
        	}
        });
    }


})()