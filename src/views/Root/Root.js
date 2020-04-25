import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import AboutProject from "../AboutProject/AboutProject";
import Contact from "../Contact/Contact";
import { routes } from "../../routes";
import { Provider } from "react-redux";
import store from "../../store";

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.aboutProject} component={AboutProject} />
          <Route path={routes.contact} component={Contact} />
          {/* <Route path="/UsersMails" component={UsersMails} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
