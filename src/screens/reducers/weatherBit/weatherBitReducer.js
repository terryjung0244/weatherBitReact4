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
        console.log(action.payload)
        break;
      case WEATHER_API_CALL_ACTION_SUCCESS:
        console.log("success")
        break;
      case WEATHER_API_CALL_ACTION_FAILURE:
        console.log('failure')
        break;
      default:
      return state;
  }
})
}