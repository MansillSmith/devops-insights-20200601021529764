import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import './App.css';

function App() {
	return (
		<div className="App">
			<AppHeader />
			<AppContainer />
			<div id="map"></div>
			<script>
				function initMap(){
					var options = {
						zoom: 8,
						center:{lat:175.28,lng:-37.78}
					}
					var map = new google.maps.Map(document.getElementById('map'),options);
				}
			</script>
			<script async defer
				src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB54eVXdlUoy9t9GkcgUQsm7RujVuz8XIo&callback=initMap">
			</script>
		</div>
	);
}

export default App;
