import express from 'express';
import { render } from './utils';
import createStore, { initializeSession } from "../store";
import { matchPath } from "react-router-dom";
import routes from "../routes";

const app = express();
app.use(express.static('public'));

app.get('*', function (req, res) {
	const store = createStore();
	store.dispatch(initializeSession());
	let context = {};

	const dataRequirements =
	routes.filter( route => matchPath( req.url, route ) ) // filter matching paths
		.map( route => route.component ) // map to components
		.filter( comp => comp.serverFetch ) // check if components have data requirement
		.map( comp => store.dispatch( comp.serverFetch( ) ) ); // dispatch data requirement

	Promise.all( dataRequirements ).then( ( ) => {
		res.writeHead( 200, { "Content-Type": "text/html" } );
		const html = render(store, req, context)
		res.end(html);
	});
});

const server = app.listen(3000);