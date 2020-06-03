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
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB54eVXdlUoy9t9GkcgUQsm7RujVuz8XIo&callback=initMap"></script>
	<script type="text/JavaScript" src="/map.js"></script>
	</div>
	);
}

export default App;
