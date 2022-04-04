import produce from 'immer';
import { WEATHER_ACTION_CONST } from "../../../services/const/actionConst";

const {
  WEATHER_API_CALL_ACTION,
  WEATHER_API_CALL_ACTION_SUCCESS,
  WEATHER_API_CALL_ACTION_FAILURE
} = WEATHER_ACTION_CONST;

const initState = {
  weatherBitApiResult: {
    processing: false,
    processed: false,
    message: '',
    result: null
  }

}

export default function weatherBitReducer(state = initState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case WEATHER_API_CALL_ACTION:
        draft.weatherBitApiResult = {...draft.weatherBitApiResult, processing: true, processed: false, message: 'Call Api', result: null}
        break;
      case WEATHER_API_CALL_ACTION_SUCCESS:
        draft.weatherBitApiResult = {...draft.weatherBitApiResult, processing: false, processed: true, message: 'Called Api Successfuly', result: action.payload}
        break;
      case WEATHER_API_CALL_ACTION_FAILURE:
        draft.weatherBitApiResult = {...draft.weatherBitApiResult, processing: false, processed: false, message: 'Called Api Unsuccessfuly', result: action.payload}
        break;
      default:
      return state;
  }
})
}