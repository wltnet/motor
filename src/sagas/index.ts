import { Saga } from "redux-saga";
import { all, Effect } from "redux-saga/effects";
import images from "./images";

const rootSaga: Saga = function* rootSaga(): IterableIterator<Effect> {
  yield all([images]);
};

export default rootSaga;
