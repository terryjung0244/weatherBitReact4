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
        draft.weatherBitApiResult = {...draft.weatherBitApiResult, processing: true, processed: false, message: 'Api Call', result: null}
        break;
      case WEATHER_API_CALL_ACTION_SUCCESS:
        draft.weatherBitApiResult = {...draft.weatherBitApiResult, processing: false, processed: true, message: 'Successed Api Call', result: null}
        break;
      case WEATHER_API_CALL_ACTION_FAILURE:
        draft.weatherBitApiResult = {...draft.weatherBitApiResult, processing: false, processed: false, message: 'Unsuccessed Api Call', result: null}
        break;
      default:
      return state;
  }
})
}