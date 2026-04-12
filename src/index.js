import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './apps/Welcome';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./output.css";
import "./apps/assets/global.css";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import User_login from './apps/modules/users/auth/User_login';
import User_registor from './apps/modules/users/auth/User_registor';
import Apperror from './apps/modules/shapremodules/Apperror';
import Applandingpage from './apps/modules/dashboard/Applandingpage';
import Mainpage from './apps/modules/dashboard/Mainpage';
import Graphpage from './apps/modules/dashboard/Graphpage';
import Productpage from './apps/modules/dashboard/Productpage';
import Productdetailspage from './apps/modules/dashboard/Productdetailspage';
import { Provider } from 'react-redux';
import { actionstore } from './apps/modules/reduxpage/Mystore';
import Reduxwebpage from './apps/modules/reduxpage/Reduxwebpage';
import Mycanander from './apps/modules/dashboard/Mycanander';
// import Lazypage from './apps/modules/dashboard/Lazypage';
const Lazypage = lazy(()=>import('./apps/modules/dashboard/Lazypage'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={actionstore}>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='usermanagement' element={<User_login/>}></Route>
          <Route path='usermanagement/registor' element={<User_registor/>}></Route>
          <Route path='dashboard' element={<Applandingpage/>}>
              <Route path='' element={<Mainpage/>}/>  
              <Route path='graph' element={<Graphpage/>}/>
              <Route path='product' element={<Productpage/>}/>
              <Route path='product/details/:id' element={<Productdetailspage/>}/>
              <Route path='redux' element={<Reduxwebpage/>}/>
              <Route path='lazypage' element={
                <Suspense fallback={<h1 className='myloader'>loading Content...</h1>}>
                  <Lazypage/>
                </Suspense>
              }></Route>
              <Route path='fullcalander' element={<Mycanander/>}/>
            <Route path='*' element={<Apperror/>}></Route>
          </Route>
          <Route path='*' element={<Apperror/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);