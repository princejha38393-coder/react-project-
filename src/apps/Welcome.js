import React from 'react'
import { myapplist } from './assets/datalist';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className='container applist'>

      <div className='row'>
        <div className='col-12 text-center p-3'>
          <p className='h1 fw-bold'>List of Modules</p>
        </div>
      </div>

      <div className='row'>
        {myapplist.map((c, index) => {
          return (
            <div
              key={index}
              className='col-sm-3 mt-4'
            >
              <Link
                to={c.approuting}
                className={`card border-0 p-4 text-center shadow-lg rounded-4 text-decoration-none ${c.appthems}`}
              >

                {/* IMAGE */}
                <div className='d-flex justify-content-center'>
                  <img
                    src={c.appicon}
                    alt={c.appname}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain"
                    }}
                  />
                </div>

                {/* TITLE */}
                <h5 className='mt-3 text-white fw-bold'>
                  {c.appname}
                </h5>

              </Link>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Welcome