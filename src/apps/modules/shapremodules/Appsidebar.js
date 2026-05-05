import React from "react";
import { Link } from "react-router-dom";

function Appsidebar() {
  return (
    <div className="flex-shrink-0 p-3">

      <Link
        to="/dashboard"
        className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
      >
        <span className="fs-5 fw-semibold">
          Collapsible
        </span>
      </Link>

      <ul className="list-unstyled ps-0">

        {/* Home Section */}
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
          >
            Home
          </button>

          <div
            className="collapse show"
            id="home-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">

              <li>
                <Link
                  to="/dashboard"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="graph"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Graph
                </Link>
              </li>

              <li>
                <Link
                  to="product"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="redux"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Redux Page
                </Link>
              </li>

              <li>
                <Link
                  to="lazypage"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Lazy Page
                </Link>
              </li>

              <li>
                <Link
                  to="fullcalander"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Calendar
                </Link>
              </li>

            </ul>
          </div>
        </li>

        {/* Dashboard Section */}
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
          >
            Dashboard
          </button>

          <div
            className="collapse"
            id="dashboard-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">

              <li>
                <Link
                  to="contactus"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="datafooter"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Data Footer
                </Link>
              </li>

              <li>
                <Link
                  to="details"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Details
                </Link>
              </li>

              <li>
                <Link
                  to="eyetable"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Eye Table
                </Link>
              </li>

            </ul>
          </div>
        </li>

        {/* Orders Section */}
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
          >
            Orders
          </button>

          <div
            className="collapse"
            id="orders-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">

              <li>
                <Link
                  to="mydata"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  My Data
                </Link>
              </li>

              <li>
                <Link
                  to="propspage"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Props Page
                </Link>
              </li>

            </ul>
          </div>
        </li>

        <li className="border-top my-3"></li>

        {/* Account Section */}
        <li className="mb-1">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#account-collapse"
          >
            Account
          </button>

          <div
            className="collapse"
            id="account-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">

              <li>
                <Link
                  to="profile"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Sign Out
                </Link>
              </li>

            </ul>
          </div>
        </li>

      </ul>
    </div>
  );
}

export default Appsidebar;