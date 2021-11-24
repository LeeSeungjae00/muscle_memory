import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const customHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    ReduxThunk.withExtraArgument({ history: customHistory })))
); // 여러개의 미들웨어를 적용 할 수 있습니다.
const persistor = persistStore(store)

ReactDOM.render(
  <BrowserRouter >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
