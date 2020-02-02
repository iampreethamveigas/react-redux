import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createReduxHistoryContext, reachify } from "redux-first-history";
import { createBrowserHistory } from "history";


import rootReducers from './reducers/index'
import mainSaga from './sagas/index'
  // const monitor = window["__SAGA_MONITOR_EXTENSION__"]
const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });


const initialSagaMiddleware = createSagaMiddleware()

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({ ...rootReducers, router: routerReducer }),
    storeEnhancer(
        applyMiddleware(initialSagaMiddleware),
        applyMiddleware(routerMiddleware)

    )
)
initialSagaMiddleware.run(mainSaga);
export const history = createReduxHistory(store);
export const reachHistory = reachify(history);

