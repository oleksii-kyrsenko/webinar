import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Loader } from "./components/Loader";
const Webinar = lazy(() => import("./pages/Webinar"));
const XCode = lazy(() => import("./pages/XCode"));
const XCuiTests = lazy(() => import("./pages/XCuiTests"));
const Page404 = lazy(() => import("./pages/Page404"));

const Router = () => {
  const renderLoader = () => <Loader />;

  return (
    <Suspense fallback={renderLoader()}>
      <Switch>
        <Route exact path="/webinar" component={Webinar} />
        <Route exact path="/xcode" component={XCode} />
        <Route exact path="/xcuitests" component={XCuiTests} />
        <Route path="*" component={Page404} />
      </Switch>
    </Suspense>
  );
};

export default Router;
