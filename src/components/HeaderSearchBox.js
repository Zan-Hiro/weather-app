import { useState, useEffect } from 'react';
import '../css/HeaderSearchBox.css';

const API_KEY = '86b52f45450891ccba96a01f19197865';

const HeaderSearchBox = ({setUrlData, setGetCity}) => {
	const [city, setCity] = useState('');
	

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(url)
		.then((res) => {
			if (!res.ok) {
				throw Error('could not fetch the data for that resourse');
			}
			return res.json();
		})
			.then((data) => {
			setUrlData({
				lat: data.coord.lat,
				lon: data.coord.lon,
			})
			setGetCity(city);
		})
			.catch((err) => console.log(err));

	};

	return (
		<div className='HeaderSearchBox'>
			<div className='logo-container'>
				<img
					src='https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png'
          alt='logo'
          className="logo"
				/>
			</div>

				<form className='search-form' onSubmit={handleSubmit}>
				<input type='text' name='search' placeholder='Enter a city' onChange={(e) => setCity(e.target.value)} value={city}/>
					<button type='submit'>Search</button>
				</form>

			{/* <div className='changeBtn-container'>
				<button className='changeBtn'>°C / °F</button>
			</div> */}
		</div>
	);
};

export default HeaderSearchBox;
