import { all } from 'redux-saga/effects';
import { weatherBitSagaWatcher } from '../../screens/reducers/weatherBit/weatherBitSaga';

export default function* rootSaga() {
  yield all([
    weatherBitSagaWatcher()
  ])
};