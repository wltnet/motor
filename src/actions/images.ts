import { ApiResponse } from "../api";

export const REQUEST_IMAGEINFO = "REQUEST_IMAGEINFO";
export const RECEIVE_IMAGEINFO_FAILURE = "RECEIVE_IMAGEINFO_FAILURE";
export const RECEIVE_IMAGEINFO_SUCCESS = "RECEIVE_IMAGEINFO_SUCCESS";

interface RequestImageInfoAction {
  type: typeof REQUEST_IMAGEINFO;
}

interface ReceiveImageInfoFailureAction {
  type: typeof RECEIVE_IMAGEINFO_FAILURE;
  payload: {
    error: string;
  };
}

interface ReceiveImageInfoSuccessAction {
  type: typeof RECEIVE_IMAGEINFO_SUCCESS;
  payload: {
    response: ApiResponse;
  };
}

export type ImageInfoAction =
  | RequestImageInfoAction
  | ReceiveImageInfoFailureAction
  | ReceiveImageInfoSuccessAction;

export const requestImageInfo = (): RequestImageInfoAction => ({
  type: REQUEST_IMAGEINFO
});

export const receiveImageInfoFailure = (
  error: string
): ReceiveImageInfoFailureAction => ({
  type: RECEIVE_IMAGEINFO_FAILURE,
  payload: { error }
});

export const receiveImageInfoSuccess = (
  response: ApiResponse
): ReceiveImageInfoSuccessAction => ({
  type: RECEIVE_IMAGEINFO_SUCCESS,
  payload: { response }
});
