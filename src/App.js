import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <p>home</p>
          <Link to="/test">test</Link>
        </Route>
        <Route exact path="/test">
          <p>test</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
