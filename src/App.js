import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import TextField from 'components/shared/TextField';
import AppWrapper from 'components/AppWrapper';

export default function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <p>home</p>
            <Link to="/test">test</Link>
          </Route>
          <Route exact path="/test">
            <p>test</p>
            <TextField
              label="hola"
              error="error message"
              helperText="helper text"
              helperWithError
              inputProps={{ defaultValue: 'hola' }}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  );
}
