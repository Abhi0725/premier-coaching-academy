jQuery(document).ready(function(){

$('a[href="#"]').click(function(e){
  e.preventDefault();							
});

$('#pca-menu').change(function(){
  goto = $(this).val();
  goto = "http://localhost:1337/xampp/makar2014/homedir/public_html/pre/"+goto+".html";
  window.location.href=goto;
});

var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;
 
            //interval between items (in milliseconds)
            var itemInterval = 5000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 0;
 
            //count number of items
            var numberOfItems = $('.rotating-item').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(2000);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
	
	});

//////////// Map //////////////
	function initialize() {
	var myLatlng = new google.maps.LatLng(28.4025353,77.3190742);
	var mapOptions = {
	zoom: 15,
	center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

// Disabled Map Scroll in Contact Page 
	map.setOptions({'scrollwheel': true});

	var styles = [
	{
	stylers: [
	{ saturation: 0 }
	]
	},{
	featureType: "road",
	elementType: "geometry",
	stylers: [
	{ lightness: -8 },
	{ visibility: "simplified" }
	]
	},{
	featureType: "road",
	elementType: "labels",
	}
	];
	map.setOptions({styles: styles});

// Google Map Maker 
	var marker = new google.maps.Marker({
	position: myLatlng,
	map: map,
	});
	}

	google.maps.event.addDomListener(window, 'load', initialize);
