import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./apps/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./output.css";
import "./apps/assets/global.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import User_login from "./apps/modules/users/auth/User_login";
import User_register from "./apps/modules/users/auth/User_register";
import User_edit from "./apps/modules/users/auth/User_edite";
import User_view from "./apps/modules/users/auth/User_view";

import Profile from "./apps/modules/users/Profile";
import ForgotPassword from "./apps/modules/users/ForgotPassword";
import ResetPassword from "./apps/modules/users/ResetPassword";
import ProtectedRoute from "./apps/modules/users/ProtectedRoute";

import Apperror from "./apps/modules/shapremodules/Apperror";
import Applandingpage from "./apps/modules/dashboard/Applandingpage";
import Mainpage from "./apps/modules/dashboard/Mainpage";
import Graphpage from "./apps/modules/dashboard/Graphpage";
import Productpage from "./apps/modules/dashboard/Productpage";
import Productdetailspage from "./apps/modules/dashboard/Productdetailspage";

import { Provider } from "react-redux";
import { actionstore } from "./apps/modules/reduxpage/Mystore";
import Reduxwebpage from "./apps/modules/reduxpage/Reduxwebpage";
import Mycanander from "./apps/modules/dashboard/Mycanander";

const Lazypage = lazy(() =>
  import("./apps/modules/dashboard/Lazypage")
);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <Provider store={actionstore}>
      <BrowserRouter>
        <Routes>

          {/* Welcome Page */}
          <Route path="/" element={<Welcome />} />

          {/* Login Routes */}
          <Route
            path="usermanagement"
            element={<User_login />}
          />

          <Route
            path="adminmanagement"
            element={<User_login />}
          />

          <Route
            path="salesmanagement"
            element={<User_login />}
          />

          <Route
            path="invoicemanagement"
            element={<User_login />}
          />

          {/* Register Route */}
          <Route
            path="usermanagement/register"
            element={<User_register />}
          />

          {/* Forgot Password Route */}
          <Route
            path="forgot-password"
            element={<ForgotPassword />}
          />

          {/* Reset Password Route */}
          <Route
            path="reset-password/:token"
            element={<ResetPassword />}
          />

          {/* User Dashboard */}
          <Route
            path="dashboard"
            element={<Applandingpage />}
          >
            <Route path="" element={<Mainpage />} />

            <Route
              path="graph"
              element={<Graphpage />}
            />

            <Route
              path="product"
              element={<Productpage />}
            />

            <Route
              path="product/details/:id"
              element={<Productdetailspage />}
            />

            <Route
              path="redux"
              element={<Reduxwebpage />}
            />

            <Route
              path="edituser/:id"
              element={<User_edit />}
            />

            <Route
              path="viewuser/:id"
              element={<User_view />}
            />

            <Route
              path="profile"
              element={<Profile />}
            />

            <Route
              path="fullcalander"
              element={<Mycanander />}
            />

            <Route
              path="lazypage"
              element={
                <Suspense
                  fallback={
                    <h1 className="myloader">
                      loading Content...
                    </h1>
                  }
                >
                  <Lazypage />
                </Suspense>
              }
            />
          </Route>

          {/* Admin Dashboard */}
          <Route
            path="admin-dashboard"
            element={<Applandingpage />}
          >
            <Route path="" element={<Mainpage />} />
          </Route>

          {/* Sales Dashboard */}
          <Route
            path="sales-dashboard"
            element={<Applandingpage />}
          >
            <Route path="" element={<Mainpage />} />
          </Route>

          {/* Invoice Dashboard */}
          <Route
            path="invoice-dashboard"
            element={<Applandingpage />}
          >
            <Route path="" element={<Mainpage />} />
          </Route>

          {/* Error Page */}
          <Route
            path="*"
            element={<Apperror />}
          />

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);