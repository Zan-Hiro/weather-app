import '../css/WeatherTextContainer.css';

const WeatherTextContainer = ({ weatherData }) => {
	return ( weatherData &&
		<div className='WeatherTextContainer'>
			<p>
				Today:{' '}
				<span className='WeatherTextContainer-weather'> {weatherData.daily[0].weather[0].description}</span>.
				The high will be{' '}
				<span className='WeatherTextContainer-max-temp'>
					{' '}
					{(weatherData.daily[0].temp.max - 273.15).toFixed(0)}°
				</span>
				. The low tonight will be{' '}
				<span className='WeatherTextContainer-min-temp'>
					{' '}
					{(weatherData.daily[0].temp.min - 273.15).toFixed(0)}°
				</span>{' '}
				.
			</p>
		</div>
	);
};

export default WeatherTextContainer;
