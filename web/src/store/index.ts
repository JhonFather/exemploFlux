import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './ducks';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const enhancers = [...middleware];

const store = configureStore({
    reducer,
    middleware: enhancers,
});

sagaMiddleware.run(sagas);


export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export { store };
