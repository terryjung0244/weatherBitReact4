import { takeLatest, put, select } from "redux-saga/effects";

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
}

export function* weatherBitSagaWatcher() {
  
}
