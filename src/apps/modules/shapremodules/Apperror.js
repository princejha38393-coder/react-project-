import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Apperror() {
  const nav= new String(window.location.pathname);
  const path = nav.split("/");
  console.log(path);
  console.log(nav);

  if(path[1]==="dashboard")
  {
    return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 text-center p-5 errorpage1'>
                <h1>404</h1>
                <p>Page Note Found</p>
                <Link to="/dashboard" className="btn btn-success">Back to Login</Link>
                
            </div>
        </div>
    </div>
  )

  }
  else
  {
    return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 text-center p-5 errorpage'>
                <h1>404</h1>
                <p>Page Note Found</p>
                <Link to="/usermanagement" className="btn btn-danger">Back to Login</Link>
                
            </div>
        </div>
    </div>
  )
  }

  
}

export default Apperror