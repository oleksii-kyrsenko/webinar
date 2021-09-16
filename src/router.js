import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Loader } from "./components/Loader";
const Web1 = lazy(() => import("./pages/Web1"));
const Web2 = lazy(() => import("./pages/Web2"));
const Page404 = lazy(() => import("./pages/Page404"));

const Router = () => {
  const renderLoader = () => <Loader />;

  return (
    <Suspense fallback={renderLoader()}>
      <Switch>
        <Route exact path="/web1" component={Web1} />
        <Route exact path="/web2" component={Web2} />
        <Route path="*" component={Page404} />
      </Switch>
    </Suspense>
  );
};

export default Router;
