import {
  REQUEST_IMAGEINFO,
  receiveImageInfoFailure,
  receiveImageInfoSuccess
} from "../../actions/images";
import { call, put, takeLatest, Effect } from "redux-saga/effects";
import { images } from "../../api";

export const fetchImageInfo = function* fetchImageInfo(): IterableIterator<
  Effect
> {
  try {
    const response = yield call(images.get);

    if (response) {
      yield put(receiveImageInfoSuccess(response));
    }
  } catch (error) {
    yield put(receiveImageInfoFailure(error.message));
  }
};

export default takeLatest(REQUEST_IMAGEINFO, fetchImageInfo);
