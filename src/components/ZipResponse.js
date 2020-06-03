import React from 'react';

function ZipResponse(props) {

    if(props.responseData === null || props.responseData === '') {
        return null;
    }

    if(props.responseData.cod === '400' || props.responseData.cod === '404') {
        setTimeout(function() { props.clearResponse();}, 20000);
        return (
            <div className="col-sm-8">
                <div className="text-danger">{ props.responseData.message }</div>
            </div>
        );
    }

    if(props.responseData.cod === 200) {
        return (
            <div className="col-sm-8">
                <table className="table table-info table-hover">
                    <tbody>
                        <tr>
                            <td>City</td>
                            <td>{props.responseData.name}</td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td>{props.responseData.main.temp}</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{props.responseData.main.pressure}</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{props.responseData.main.humidity}</td>
                        </tr>
                        <tr>
                            <td>Temperature (Min)</td>
                            <td>{props.responseData.main.temp_min}</td>
                        </tr>
                        <tr>
                            <td>Temperature (Max)</td>
                            <td>{props.responseData.main.temp_max}</td>
                        </tr>
                        <tr>
                            <td>Conditions</td>
                            <td>{props.responseData.weather[0].description}</td>
                        </tr>
                    </tbody>
                </table>
                <div id='map' style='width: 400px; height: 300px;'>
                </div>
				<script>
					mapboxgl.accessToken = 'pk.eyJ1IjoibWFuc2lsbHNtaXRod2Fpa2F0byIsImEiOiJja2F5dWo5cHkwZ2NzMnhwaTJmejQ4cGV0In0.mFF2Ye-BbHf63SpW5f8NOw';
					//var map = new mapboxgl.Map({container:'map',style:'mapbox://styles/mapbox/streets-v11'});
					var map = new mapboxgl.Map({container:'map',style:'mapbox://styles/mapbox/streets-v11'});
				</script>
            </div>
        )
    }
    return null
}
  
export default ZipResponse