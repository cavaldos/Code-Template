import { DefaultRouter } from "./router";
import { Fragment, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>loading</h1>}>
          <Routes>
            {DefaultRouter.map((route: any, index: any) => {
              const Layout = route.Layout === null ? Fragment : route.Layout;
              const Page =
                route.component === null ? Fragment : route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            <Route
              path="*"
              element={
                <Fragment>
                  <h1>404</h1>
                </Fragment>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
