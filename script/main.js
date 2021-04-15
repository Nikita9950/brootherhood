
$(document).ready(function(){
  $("#carousel_1").owlCarousel({
  	items: 1,
  	loop: true,
  	dots: false,
  	margin: 100,
  	nav: true,
  	autoplay : true,
  	autoplayTimeout : 5000

  });
});



$(document).ready(function(){
  $('.active_header>li>a').click(function(e){
    e.preventDefault()
    $('.active_header>li>a').removeClass('active')
    $('.tabs__content').removeClass('tab_item-active')

    $(this).addClass('active') 
    $($(this).attr('href')).addClass('tab_item-active')
  })
})


$(document).ready(function(){
	$(".my_ul_style_2>li:first-child").mouseover(function() {
		$(".in_symbol>p:first-child").css('right','0px')
	  });
	$(".my_ul_style_2>li:first-child").mouseout(function() {
		$(".in_symbol>p:first-child").css('right','-300px')
	  });
});

$(document).ready(function(){
	$(".my_ul_style_2>li:nth-child(2)").mouseover(function() {
		$(".in_symbol>p:nth-child(2)").css('right','0px')
	  });
	$(".my_ul_style_2>li:nth-child(2)").mouseout(function() {
		$(".in_symbol>p:nth-child(2)").css('right','-500px')
	  });
});

$(document).ready(function(){
	$(".my_ul_style_2>li:last-child").mouseover(function() {
		$(".in_symbol>p:last-child").css('right','0px')
	  });
	$(".my_ul_style_2>li:last-child").mouseout(function() {
		$(".in_symbol>p:last-child").css('right','-500px')
	  });
});



// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 49.443049, lng: 32.058230};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 6, center: uluru, styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]});

  // The marker, positioned at Uluru
  var kha = {lat: 50.007089, lng: 36.225469}
  var marker = new google.maps.Marker({
  	position: kha,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var kyiv = {lat: 50.447884, lng: 30.514791}
  	var marker = new google.maps.Marker({
  	position: kyiv,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var poltava = {lat: 49.580982, lng: 34.544923}
  	var marker = new google.maps.Marker({
  	position: poltava,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var lviv = {lat: 49.840130,  lng: 24.026184}
  	var marker = new google.maps.Marker({
  	position: lviv,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var chernovtsy = {lat: 48.289256, lng: 25.936503}
  	var marker = new google.maps.Marker({
  	position: chernovtsy,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var vinnitsa = {lat: 49.232886, lng: 28.470455}
  	var marker = new google.maps.Marker({
  	position: vinnitsa,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var zhytomyr = {lat: 50.256328, lng: 28.658505}
  	var marker = new google.maps.Marker({
  	position: zhytomyr,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var chernigov = {lat: 51.498548, lng: 31.276420}
  	var marker = new google.maps.Marker({
  	position: chernigov,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var summy = {lat: 50.927402, lng: 34.808812}
  	var marker = new google.maps.Marker({
  	position: summy,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var cherkassy = {lat: 49.443049, lng: 32.058230}
  	var marker = new google.maps.Marker({
  	position: cherkassy,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var kirovograd = {lat: 48.506276, lng: 32.260746}
  	var marker = new google.maps.Marker({
  	position: kirovograd,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var kremenchug = {lat: 49.063417, lng: 33.408831}
  	var marker = new google.maps.Marker({
  	position: kremenchug,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var kryvoy_rog = {lat: 47.910681, lng: 33.387003}
  	var marker = new google.maps.Marker({
  	position: kryvoy_rog,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var odessa = {lat: 46.488075, lng: 30.717378}
  	var marker = new google.maps.Marker({
  	position: odessa,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var nikolaev = {lat: 46.972336, lng: 31.989521}
  	var marker = new google.maps.Marker({
  	position: nikolaev,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var kherson = {lat: 46.630125, lng: 32.615996}
  	var marker = new google.maps.Marker({
  	position: kherson,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var drepr = {lat: 48.462070, lng: 35.043190}
  	var marker = new google.maps.Marker({
  	position: drepr,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var zaporizhya = {lat: 47.841248, lng: 35.143990}
  	var marker = new google.maps.Marker({
  	position: zaporizhya,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var mariypol = {lat: 47.096523, lng: 37.537682}
  	var marker = new google.maps.Marker({
  	position: mariypol,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var lugansk = {lat: 48.578750, lng: 39.302732}
  	var marker = new google.maps.Marker({
  	position: lugansk,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});

  	var donetsk = {lat: 48.013706, lng: 37.805966}
  	var marker = new google.maps.Marker({
  	position: donetsk,
  	map: map,
  	icon: {
			url: "image/icon_map.png",
		}
  	});
}



