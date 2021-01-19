import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import VerifyEmail from './pages/VerifyEmail';
import ResetPassword from './pages/ResetPassword';
import ConfirmPasswordReset from './pages/ConfirmPasswordReset';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/activate/:uid/:token' component={VerifyEmail} />
          <Route exact path='/reset_password' component={ResetPassword} />
          <Route exact path='/password/reset/confirm/:uid/:token' component={ConfirmPasswordReset} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
