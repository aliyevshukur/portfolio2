import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Home, Projects, Contact } from "./views";
import { LeftNavigation } from "./components";
import { NotFound } from "./views/NotFound.js";

export const RootNavigation = withRouter(() => {
  return (
    <>
      <LeftNavigation />
      <Route
        render={({ location }) => (
          <TransitionGroup
            childFactory={(child) =>
              React.cloneElement(child, {
                classNames:
                  location.state?.routes.indexOf(location.pathname) >
                  location.state?.prevScreen
                    ? "slide-down"
                    : "slide-up",
              })
            }
            component={null}
          >
            <CSSTransition timeout={1000} key={location.key}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  );
});
