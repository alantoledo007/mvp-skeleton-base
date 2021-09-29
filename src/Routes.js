import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PATH_ROUTES } from '@/constants';
import Error404Page from '@/pages/Error404Page';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import ProfilePage from '@/pages/ProfilePage';
import AccountPage from '@/pages/AccountPage';
import IndexPage from '@/pages/IndexPage';
import useUser from '@/hooks/useUser';
import ResetPasswordPage from '@/pages/ResetPasswordPage';
import UpdatePasswordPage from '@/pages/UpdatePasswordPage';
import UpdateEmailPage from '@/pages/UpdateEmailPage';
import HomePage from '@/pages/HomePage';
import AppLayout from './layouts/AppLayout';

export default function Routes() {
  const user = useUser();
  return (
    <BrowserRouter>
      <AppLayout>
        <Switch>
          {user.isUnknow && <Route path="*">cargando...</Route>}
          <Route exact path={PATH_ROUTES.index} component={IndexPage} />
          {renderRoutes(unauth_routes, user)}
          {renderRoutes(auth_routes, user)}
          <Route path="*" component={Error404Page} />
        </Switch>
      </AppLayout>
    </BrowserRouter>
  );
}

const renderRoutes = (routes_config, user) => {
  return routes_config.map((item) => (
    <Route key={item.path} {...item} component={item.component(user)} />
  ));
};

const unauthHandler = (Component) => (user) =>
  !user.isAuthenticated ? Component : () => <Redirect to={PATH_ROUTES.home} />;

const authHandler = (Component) => (user) =>
  user.isAuthenticated ? Component : () => <Redirect to={PATH_ROUTES.login} />;

const unauth_routes = [
  {
    exact: true,
    component: unauthHandler(LoginPage),
    path: PATH_ROUTES.login,
  },
  {
    exact: true,
    component: unauthHandler(RegisterPage),
    path: PATH_ROUTES.register,
  },
  {
    exact: true,
    component: unauthHandler(ResetPasswordPage),
    path: PATH_ROUTES.reset_password,
  },
];

const auth_routes = [
  {
    exact: true,
    component: authHandler(HomePage),
    path: PATH_ROUTES.home,
  },
  {
    exact: true,
    component: authHandler(ProfilePage),
    path: PATH_ROUTES.profile,
  },
  {
    exact: true,
    component: authHandler(AccountPage),
    path: PATH_ROUTES.account.index,
  },
  {
    exact: true,
    component: authHandler(UpdatePasswordPage),
    path: PATH_ROUTES.account.update_password,
  },
  {
    exact: true,
    component: authHandler(UpdateEmailPage),
    path: PATH_ROUTES.account.update_email,
  },
];
