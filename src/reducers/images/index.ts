import {
  RECEIVE_IMAGEINFO_FAILURE,
  RECEIVE_IMAGEINFO_SUCCESS,
  REQUEST_IMAGEINFO,
  ImageInfoAction
} from "../../actions/images";
import { ImageInfoState } from "../../types";

export const defaultImageInfoState: ImageInfoState = {
  data: { images: [] },
  error: null,
  isLoading: false
};

const images = (
  state: ImageInfoState = defaultImageInfoState,
  action: ImageInfoAction
): ImageInfoState => {
  switch (action.type) {
    case REQUEST_IMAGEINFO:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case RECEIVE_IMAGEINFO_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    case RECEIVE_IMAGEINFO_SUCCESS:
      return {
        ...state,
        data: action.payload.response,
        error: null,
        isLoading: false
      };
    default:
      return state;
  }
};

export default images;
