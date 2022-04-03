import React from 'react';
import { cityList } from '../../cityList';
import { useSelector, useDispatch } from 'react-redux';
import { weatherReducerWeatherApiCallAction } from '../reducers/weatherBit/weatherBitAction';

const WeatherBit = () => {

  const weatherReducerConnector = useSelector(state => state.weatherBitReducer)

  const dispatch = useDispatch()

  const onClickCity = (city) => {
    dispatch(weatherReducerWeatherApiCallAction(city))
  }

  console.log(weatherReducerConnector.weatherBitApiResult)

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
      
    </div>
  )
}

export default WeatherBit
