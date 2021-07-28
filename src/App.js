import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Comp from './Comp';
import Test from './Test';

function RedirectWithStatus({ from, to, status }) {
  return (
    <Route
      render={({ staticContext }) => {
        // there is no `staticContext` on the client, so
        // we need to guard against that here
        if (staticContext) staticContext.status = status;
        return <Redirect from={from} to={to} />;
      }}
    />
  );
}

function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}

function NotFound() {
  return (
    <Status code={404}>
      <div>
        <h1>Sorry, can't find that.</h1>
      </div>
    </Status>
  );
}

function App() {
  return (
    <div>
      App!
      <ul>
        <li><Link to='/Comp'>Comp</Link></li>
        <li><Link to='/Test'>Test</Link></li>
        <li><Link to='/11'>Test Redirect</Link></li>
        <li><Link to='/22'>Comp Redirect</Link></li>
      </ul>
      <Switch>
        <Route path='/' exact>test app!</Route>
        <RedirectWithStatus status={301} from="/11" to="/Test" />
        <RedirectWithStatus status={302} from="/22" to="/Comp" />
        <Route path='/Test' component={Test}></Route>
        <Route path='/Comp' component={Comp}></Route>
      </Switch>
    </div>
  );
}

export default App;
