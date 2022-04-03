import { WEATHER_ACTION_CONST } from "../../../services/const/actionConst";

const {
  WEATHER_API_CALL_ACTION
} = WEATHER_ACTION_CONST;

export const weatherReducerWeatherApiCallAction = () => {
  return {
    type: WEATHER_API_CALL_ACTION, payload: ''
  }
}