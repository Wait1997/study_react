import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import BasicLayout from '../Layouts/BasicLayout';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Tone from '../Table/Tone';
import Ttwo from '../Table/Ttwo';

// 统一管理所有路由
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route
          path='/'
          render={props => (
            <BasicLayout {...props}>
              <Switch>
                <Route path='/dashboard/:name' render={props => <Dashboard {...props} />} />
                <Route path='/table'>
                  <Switch>
                    <Route path='/table/one' render={props => <Tone {...props} />} />
                    <Route path='/table/one' render={props => <Ttwo {...props} />} />
                    <Redirect from='/table' to='/table/one' />
                  </Switch>
                </Route>
                <Redirect from='/' to='/dashboard/xiong' />
              </Switch>
            </BasicLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
