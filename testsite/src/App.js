import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/signUp/signUp";
import SignUpBusiness from "./pages/signUpBusiness/signUpBusiness";
import SignIn from "./pages/signIn/signIn";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/signupbusiness" exact component={SignUpBusiness} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
