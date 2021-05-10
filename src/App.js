import { useEffect, useState } from 'react';
import HeaderSearchBox from './components/HeaderSearchBox';
import WeatherdataContainer from './components/WeatherdataContainer';

const API_KEY = '86b52f45450891ccba96a01f19197865';

function App() {

	const [urlData, setUrlData] = useState({
		lat: 35.6895,
		lon: 139.6917,
	});

	const [weatherData, setWeatherData] = useState(null);
	const [getCity, setGetCity] = useState('tokyo');

	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${urlData.lat}&lon=${urlData.lon}&exclude=minutely&appid=${API_KEY}`;

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error('could not fetch the data for that resourse');
				}
				return res.json();
			})
			.then((data) => {
				setWeatherData(data)
			})
			.catch((err) => console.log(err));
	}, [urlData]);

	return (
		<div className='App'>
			<HeaderSearchBox setUrlData={setUrlData} setGetCity={setGetCity}/>
			<WeatherdataContainer weatherData={weatherData} getCity={getCity}/>
		</div>
	);
}

export default App;
