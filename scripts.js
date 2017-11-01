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
    	addListeners(toolTips[i]);
    }

    function addListeners(element) {
        element.addEventListener('mouseover', function() {
        	var id = element.id;
        	var matchingDotId =  id + '--dot';
        	var matchingDot = document.getElementById(matchingDotId);

        	if (matchingDot != null) {
        		matchingDot.className = 'dot active';
        	}

            for (var i = 0; i < toolTips.length; i++) {
                toolTips[i].className = 'tooltip shrink';
                element.className = 'tooltip';
            }
        });

        element.addEventListener('mouseleave', function() {
            var id = element.id;
            var matchingDotId =  id + '--dot';
            var matchingDot = document.getElementById(matchingDotId);

            if (matchingDot != null) {
                matchingDot.className = 'dot';
            }

            for (var i = 0; i < toolTips.length; i++) {
                toolTips[i].className = 'tooltip';
            }
        });
    }

})()
