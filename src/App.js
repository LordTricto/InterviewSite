import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import SignUp from "./pages/signUp/signUp";
import SignUpBusiness from "./pages/signUpBusiness/signUpBusiness";
import SignIn from "./pages/signIn/signIn";
import Dashboard from "./pages/dashboard/dashboard";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={SignUp} />
          <Route path="/signupbusiness" exact component={SignUpBusiness} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
