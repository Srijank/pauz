import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import Login from "./components/Login";

import Home from "./components/Home";
import Connect from "./components/Connect";
import AddPost from "./components/AddPost";
import Profile from "./components/Profile";

import Alert from "./components/Alert";
import Loading from "./components/Loading";

import UnknownPage from "./components/UnknownPage";

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    alert: state.alert,
  };
};

const App = (props) => {
  return (
    <Router>
      <div className="App">
        {props.loading && <Loading />}
        {props.alert && <Alert />}

        <Switch>
          <PublicRoute component={Signup} path="/signup" exact />
          <PublicRoute component={Login} path="/login" exact />
          <PublicRoute component={LandingPage} path="/" exact />

          <PrivateRoute component={Home} path="/home" exact />
          <PrivateRoute component={Connect} path="/connect" exact />
          <PrivateRoute component={AddPost} path="/addpost" exact />
          <PrivateRoute
            component={Profile}
            path="/profile/:username"
            exact
          />
          <Route component={UnknownPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps, null)(App);
