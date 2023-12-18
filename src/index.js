import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { productReducer } from './store/reducers/product';
import { messageReducer } from './store/reducers/message';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {store} from './app/store'
import { BrowserRouter } from 'react-router-dom';

// const store = createStore(
//   combineReducers({ product: productReducer, mes: messageReducer }),//אפשר בעזרתו לחבר מספר רידוסרים לסטייט אחד
//   composeWithDevTools(applyMiddleware(thunk))//מאפשר לראות את הסטייט כולו בדיבאג בדפדפן
//   // רק אם נתיקן את הספריה הזאת ונתקין את התוסף בדפדפן
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
