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
