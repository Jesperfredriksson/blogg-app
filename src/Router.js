import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blogghome from "./Blogghome";
import Newpost from "./Newpost";
import aboutme from "./aboutme";
import contactme from "./contactme";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Blogghome} />
      <Route exact path="/newpost" component={Newpost} />
      <Route exact path="/about" component={aboutme} />
      <Route exact path="/contact" component={contactme} />
    </Switch>
  </BrowserRouter>
);

export default Router;
