import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from './container/Layout/Layout';
import Login from './container/pages/Login/Login';
import SignUp from './container/pages/SignUp/SignUp';
import AddExpense from './container/pages/AddExpense/AddExpense';
import ViewExpense from './container/pages/viewExpense/ViewExpense';
import Logout from './container/pages/Logout/Logout';
import Home from './container/pages/Home/Home';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/signup' component={SignUp} />
          <Route path= '/viewExpense' component={ViewExpense} />
          <Route path='/addExpense' component={AddExpense} />
          <Route path='/' component={Home} />
        </Switch>
      </Layout>
      
    </div>
  );
}

export default App;
