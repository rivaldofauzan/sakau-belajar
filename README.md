bisi folder mfenya nggak kebuka, yg diubah di index.sjx:

import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import LearnerLayout from "./containers/sakau-belajar/local/learner-dashboard/src/layouts/Learner.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={`/learner`} component={LearnerLayout} />
      <Redirect from={`/`} to="/learner/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


