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
  Route,
} from "react-router-dom";

// ✅ Correct Component Names
import UserLogin from "./apps/modules/users/auth/UserLogin";
import UserRegister from "./apps/modules/users/auth/UserRegister";
import UserEdit from "./apps/modules/users/auth/UserEdit";
import UserView from "./apps/modules/users/auth/UserView";

import Profile from "./apps/modules/users/Profile";
import ForgotPassword from "./apps/modules/users/ForgotPassword";
import ResetPassword from "./apps/modules/users/ResetPassword";

// ❌ Remove if not using
// import ProtectedRoute from "./apps/modules/users/ProtectedRoute";

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

          {/* Home */}
          <Route path="/" element={<Welcome />} />

          {/* Login Routes */}
          <Route
            path="usermanagement"
            element={<UserLogin />}
          />

          <Route
            path="adminmanagement"
            element={<UserLogin />}
          />

          <Route
            path="salesmanagement"
            element={<UserLogin />}
          />

          <Route
            path="invoicemanagement"
            element={<UserLogin />}
          />

          {/* Register */}
          <Route
            path="usermanagement/register"
            element={<UserRegister />}
          />

          {/* Forgot Password */}
          <Route
            path="forgot-password"
            element={<ForgotPassword />}
          />

          {/* Reset Password */}
          <Route
            path="reset-password/:token"
            element={<ResetPassword />}
          />

          {/* Dashboard */}
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
              element={<UserEdit />}
            />

            <Route
              path="viewuser/:id"
              element={<UserView />}
            />

            <Route
              path="profile"
              element={<Profile />}
            />

            <Route
              path="fullcalander"
              element={<Mycanander />}
            />

            <Route th="lazypage"element={<Suspense fallback={
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

          {/* Error */}
          <Route
            path="*"
            element={<Apperror />}
          />

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);