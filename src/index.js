import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Context from "./contextSample/Context";
import UseState from "./useReducerSample/UseState";
import UseReducer from "./useReducerSample/UseReducer";
import Extension from "./useReducerSample/Extension";
import StyledComponentSample from "./styledComponentSample/StyledComponentSample";
import ReduxSample from "./reduxSample/reduxSample";
import ReduxToolkit from "./reduxToolkitSample/ReduxToolkit";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Context/>*/}
    {/*<UseState/>*/}
    {/*<UseReducer/>*/}
    {/*<Extension/>*/}
    {/*<StyledComponentSample/>*/}
    {/*<ReduxSample/>*/}
    <ReduxToolkit/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
