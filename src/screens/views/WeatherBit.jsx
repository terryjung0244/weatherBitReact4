import React from 'react';
import { cityList } from '../../cityList';
import { useSelector, useDispatch } from 'react-redux';
import { weatherReducerWeatherApiCallAction } from '../reducers/weatherBit/weatherBitAction';
import LoadingComponent from './reusable/LoadingComponent';

const WeatherBit = () => {

  const weatherReducerConnector = useSelector(state => state.weatherBitReducer)

  const dispatch = useDispatch()

  const onClickCity = (city) => {
    dispatch(weatherReducerWeatherApiCallAction(city))
  }

  console.log(weatherReducerConnector.weatherBitApiResult.processing)
  console.log(weatherReducerConnector.weatherBitApiResult.result)

  return (
    <div>
      <div>
        {cityList.map((city, index) => {
          return (
            <div key={city.cityName} onClick={()=> onClickCity(city)}>
              {city.cityName}
            </div>
          )
        })}
      </div>
      <div>
      {(weatherReducerConnector.weatherBitApiResult.result !== null)
        ?
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{ fontWeight: 'bold', marginTop: '30px'}}>
              {weatherReducerConnector.weatherBitApiResult.result.cityName}
            </div>
            <div>
              Temp: {weatherReducerConnector.weatherBitApiResult.result.cityTemp}
            </div>
            <div>
              Desc: {weatherReducerConnector.weatherBitApiResult.result.cityWeather.desc}
            </div>
            <img style={{width: '100px'}} src={`https://www.weatherbit.io/static/img/icons/${weatherReducerConnector.weatherBitApiResult.result.cityWeather.icon}.png`} alt="weather icon" />
          </div>
        :
          null
        }
      </div>
      <div>
        {(weatherReducerConnector.weatherBitApiResult.processing === true)
        ?
          <LoadingComponent/>
        :
          null
        }
      </div>
      
    </div>
  )
}

export default WeatherBit
