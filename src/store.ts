import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import init from './sagas/init';
import { watchFetchRecentRecipesRequest } from './sagas/recipes';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchFetchRecentRecipesRequest);
sagaMiddleware.run(init);
