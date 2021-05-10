import TodaysWeatherContainer from './TodaysWeatherContainer';
import WeatherTextContainer from './WeatherTextContainer';
import DetailTodaysWeatherContainer from './DetailTodaysWeatherContainer';
import WeeklyWeatherContainer from './WeeklyWeatherContainer';

const WeatherdataContainer = ({ weatherData, getCity}) => {
	return (
		<div className='WeatherdataContainer'>
			<TodaysWeatherContainer weatherData={weatherData} getCity={getCity}/>
			<WeatherTextContainer weatherData={weatherData}/>
			<DetailTodaysWeatherContainer weatherData={weatherData}/>
			<WeeklyWeatherContainer weatherData={weatherData}/>
		</div>
	);
};

export default WeatherdataContainer;
