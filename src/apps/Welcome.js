import React from 'react'
import { FcBusinessman } from "react-icons/fc";
import { myapplist } from './assets/datalist';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className='container applist'>
      <div className='row'>
        <div className='col-12 text-center p-3'>
          <p className='h1'>List of Modules</p>
        </div>
      </div>
      {/* <div className='row'>
        <div className='col-sm-3 mt-3'>
          <a href='#' className='card border p-3 bg-light text-center shadow'>
            <h1><FcBusinessman/></h1>
          <h5>user management</h5>
          </a>
        </div>
      <div className='col-sm-3 mt-3'>
          <a href='#' className='card border p-3 bg-light text-center shadow'>
            <h1><FcBusinessman/></h1>
          <h5>user management</h5>
          </a>
        </div>
        <div className='col-sm-3 mt-3'>
          <a href='#' className='card border p-3 bg-light text-center shadow'>
            <h1><FcBusinessman/></h1>
          <h5>user management</h5>
          </a>
        </div>
        <div className='col-sm-3 mt-3'>
          <a href='#' className='card border p-3 bg-light text-center shadow'>
            <h1><FcBusinessman/></h1>
          <h5>user management</h5>
          </a>
        </div>
        <div className='col-sm-3 mt-3'>
          <a href='#' className='card border p-3 bg-light text-center shadow'>
            <h1><FcBusinessman/></h1>
          <h5>user management</h5>
          </a>
        </div>
        <div className='col-sm-3 mt-3'>
          <a href='#' className='card border p-3 bg-light text-center shadow'>
            <h1><FcBusinessman/></h1>
          <h5>user management</h5>
          </a>
        </div>
        <div className='col-sm-3 mt-3'>
          <a href='#' className='card border p-3 bg-light text-center shadow'>
            <h1><FcBusinessman/></h1>
          <h5>user management</h5>
          </a>
        </div>

      </div> */}

      <div className='row'>
        {myapplist.map((c) => {
          return (
            <div className='col-sm-3 mt-3'>
              <Link to={c.approuting} className={`card border p-3 text-center shadow ${c.appthems}`}>
                <h1><FcBusinessman /></h1>
                <h5>{c.appname}</h5>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Welcome