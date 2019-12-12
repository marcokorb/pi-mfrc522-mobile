
import { UPDATE_HOST, READ_TAG} from './constants/types';

export const initialState = {
  hostName: 'http://192.168.100.33:5000'
  //hostName: 'http://10.10.55.103:5000'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_HOST:
      return {
        ...state,
        hostName: action.hostName
      };
    case READ_TAG:
      return {
        ...state,
        tags: [...state.tags, action.tag]
      };
      
    default:
      return state;
  }
};