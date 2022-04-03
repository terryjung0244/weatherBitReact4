import { takeLatest, put, select, take } from "redux-saga/effects";
import { WEATHER_ACTION_CONST } from "../../../services/const/actionConst";

const {
  WEATHER_API_CALL_ACTION,
} = WEATHER_ACTION_CONST;

const addDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000)
  })
};

//d46fe6f3b2e44fb8b52873c21312b71f
//https://api.weatherbit.io/v2.0/current?city=""&country=""&key=""
//GET

function* getApiResult (action) {
  console.log("sagasaga")
}

export function* weatherBitSagaWatcher() {
  yield takeLatest(WEATHER_API_CALL_ACTION, getApiResult)
}
