import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from "../components/Layout";
import createStore from "../store";
// import "../App.css";

const store = createStore( window.REDUX_DATA );

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  )
};

ReactDom.hydrate(<App />, document.getElementById('root'));
