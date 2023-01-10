// Lưu tất cả những global state (redux, ...)import { configureStore } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const rootReducer = {

};

export const appStore = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middleware,
  ],
});

sagaMiddleware.run(mySaga);