import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginRoute from "../routes/Home/HomeRoute";
import QuestionDetails from "../routes/QuestionDetails";
import Layout from "./Layout";
import { useDispatch } from "react-redux";
import { getUsers } from "../actions/users";
import AddQuestion from "./AddQuestion";
import NotFound from "../routes/NotFound";
import ProtectedRoute from "../helpers/ProtectedRoute";
import LeaderBoard from "../routes/LeaderBoard";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="wrapper">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={LoginRoute} />
            <ProtectedRoute exact path="/add" component={AddQuestion} />
            <ProtectedRoute exact path="/leaderboard" component={LeaderBoard} />
            <ProtectedRoute
              exact
              path="/question/:id"
              component={QuestionDetails}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
