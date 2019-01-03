import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blogghome from "./Blogghome";
import Newpost from "./Newpost";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Blogghome} />
      <Route exact path="/newpost" component={Newpost} />
    </Switch>
  </BrowserRouter>
);

export default Router;
