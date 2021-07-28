import http from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter, Switch, Route } from "react-router-dom";

import App from "./App.js";

http
  .createServer((req, res) => {
    const context = {};
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    if (context.url) {      
      console.log(context);
      res.writeHead(302, {
        Location: context.url
      });
      res.end();
    } else {
      res.write(`
      <!doctype html>
      <div id="app">${html}</div>
    `);
      res.end();
    }
  })
  .listen(3000);

// const http = require("http");

// const React = require("react");
// const ReactDOMServer = require("react-dom/server");
// const StaticRouter = require("react-router-dom");

// // const App = require("./App.js");
// // const Comp = require("./Comp.js");

// http
//   .createServer((req, res) => {
//     const context = {};

//     // const html = ReactDOMServer.renderToString(
//     //   <StaticRouter location={req.url} context={context}>
//     //     <Comp />
//     //   </StaticRouter>
//     // );

//     const html = "test";

//     if (context.url) {
//       res.writeHead(301, {
//         Location: context.url
//       });
//       res.end();
//     } else {
//       res.write(`
//       <!doctype html>
//       <div id="app">${html}</div>
//     `);
//       res.end();
//     }
//   })
//   .listen(3000);