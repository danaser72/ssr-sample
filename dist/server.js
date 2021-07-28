"use strict";

var _http = _interopRequireDefault(require("http"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./App.js"));

var _Comp = _interopRequireDefault(require("./Comp.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_http.default.createServer((req, res) => {
  const context = {};

  const html = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: context
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    exact: true,
    component: _App.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/Comp",
    component: _Comp.default
  }))));

  if (context.url) {
    res.writeHead(301, {
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
}).listen(3000); // const http = require("http");
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