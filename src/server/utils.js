import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import React from 'react'
import Layout from "../components/Layout";
import serialize from "serialize-javascript";
import { Helmet } from 'react-helmet';

export const render = (store, req, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Layout />
      </StaticRouter>
    </Provider>
  );

  const helmetData = Helmet.renderStatic();
  const reduxState = store.getState();


  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        ${ helmetData.title.toString() }
        ${ helmetData.meta.toString() }
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.REDUX_DATA = ${ serialize( reduxState, { isJSON: true } ) }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `
}