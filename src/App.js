import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';

import ProtectedRoute from './helpers/protected-route';

import Login from './pages/login';
import SignUp from './pages/signup';
import NotFound from './pages/not-found';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';

export default function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.PROFILE} component={Profile} />
          <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
            <Dashboard />
          </ProtectedRoute>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
