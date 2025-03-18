import React, { Suspense, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLoading from "./components/PageLoading";
import { useTheme } from "@mui/material";
import { routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider


const App = () => {
  const theme = useTheme();

  return (
    <Router>
      {/* <AuthProvider> */}
       
          {" "}
          {/* Now both contexts are wrapped */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          
          <RenderRoutes data={routes} />
      
      {/* </AuthProvider> */}
    </Router>
  );
};

export default App;

function RenderRoutes({ data }) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        {data.map((route, i) => {
          const Component = route.component;
          const Layout = route.layout || Fragment;
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}
