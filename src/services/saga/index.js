import { all } from 'redux-saga/effects';
import { weatherBitSagaWatcher } from '../../screens/reducers/weatherbit/weatherSaga';

export default function* rootSaga() {
  yield all([
    weatherBitSagaWatcher()
  ])
};