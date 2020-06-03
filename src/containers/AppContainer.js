import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import ZipResponse from '../components/ZipResponse';
import Zip from '../components/Zip';

function AppContainer(props) {

    const [responseData, setResponseData] = useState('');

    const handleZipChange = async (zipValue) => {
        //console.log(`--------- fetchData called zip:${zipValue}`);
        //console.log(`api.openweathermap.org/data/2.5/weather?q=${zipValue},nz&appid=6b7b471967dd0851d0010cdecf28f829&units=metric`);
        //const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=imperial&zip=${zipValue},us`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${zipValue},nz`)
        const json = await res.json()
        //console.log(json);
        //console.log(json);
        setResponseData(json);
    }

    const clearResponse = () => {
        setResponseData('');
    }

    return (
        <div>
            <div className="row mt-4">
                <div className="col-sm-4"></div>
                <Zip onZipChange={handleZipChange} clearResponse={clearResponse}/>
                <div className="col-sm-4"></div>
            </div>
            <div id="map" style="height:400px;width:100%;"></div>
			<script>
				function initMap(){
					var options = {
						zoom:8,
						center:{lat:175.27,lng:37.78}
					}
					var map = new google.maps.Map(document.getElementById('map'),options);
				}
			</script>
			<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB54eVXdlUoy9t9GkcgUQsm7RujVuz8XIo&callback=initMap"></script>
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <ZipResponse responseData={responseData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>    
        </div>
    );
}
  
export default AppContainer
