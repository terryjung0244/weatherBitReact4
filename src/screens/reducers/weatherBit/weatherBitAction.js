import { WEATHER_ACTION_CONST } from "../../../services/const/actionConst";

const {
  WEATHER_API_CALL_ACTION,
  WEATHER_API_CALL_ACTION_SUCCESS,
  WEATHER_API_CALL_ACTION_FAILURE
} = WEATHER_ACTION_CONST;

export const weatherReducerWeatherApiCallAction = (city) => {
  return {
    type: WEATHER_API_CALL_ACTION, payload: city
  }
}

export const weatherReducerWeatherApiCallActionSuccess = (SuccessData) => {
  return {
    type: WEATHER_API_CALL_ACTION_SUCCESS, payload: SuccessData
  }
}

export const weatherReducerWeatherApiCallActionFailure = (FailureData) => {
  return {
    type: WEATHER_API_CALL_ACTION_FAILURE, payload: FailureData
  }
}