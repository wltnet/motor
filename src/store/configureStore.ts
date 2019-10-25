import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Store
} from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import reducers from "../reducers";

export const defaultState = {
  images: {
    data: {},
    error: null,
    isLoading: false
  }
};

interface StoreConfig {
  store: Store;
  sagaMiddleware: SagaMiddleware<{}>;
}

export const configureStore = (initialState = defaultState): StoreConfig => {
  const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

  const middleware: Middleware[] = [sagaMiddleware];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== "production") {
    /* eslint-disable-next-line no-underscore-dangle,@typescript-eslint/no-explicit-any */
    if (
      typeof window !== "undefined" &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) {
      /* eslint-disable-next-line no-underscore-dangle,@typescript-eslint/no-explicit-any */
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return { store, sagaMiddleware };
};

export default configureStore;
