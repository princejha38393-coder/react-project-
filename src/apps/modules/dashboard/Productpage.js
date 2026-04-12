import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Productpage() {

  const [a, b] = useState([]);

  const myapi = () => {
    axios.get('https://dummyjson.com/products?limit=50').then((d) => {
      console.log(d.data.products);
      b(d.data.products);
    });

  }
  useEffect(() => {
    myapi();
  }, [])


  return (
    <div className='container-fluid'>
      <div className='row shadow mt-2'>
        <div className='col-md-6 p-3'>
          <div class="form-check form-check-inline">
           <select className='form-select'>
            <option hidden>filter By</option>
            <option>Price</option>
            <option>Stock</option>
            <option>Brand</option>
            <option>Catgeory</option>
            
          </select>
          </div>
          <div class="form-check form-check-inline">
           <select className='form-select'>
            <option>filter By</option>
          </select>
          </div>
        </div>
        <div className='col-md-6 text-end p-3'>
          <span class="badge text-bg-secondary p-2 me-2">Table</span>
          <span class="badge text-bg-secondary p-2 me-2">Card</span>
          <span class="badge text-bg-secondary p-2 me-2">List</span>
        </div>
      </div>
      <div className='row'>

        {a.map((x) => {
          if(x.price>=50)
          {
          return (
            <div className='col-md-3 mt-2'>
              <Link to={"details/"+x.id}>
              <div class="card bg-info">
                <img src={x.thumbnail} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{x.title} </h5>
                  <h3>Rs. {x.price}</h3>
                  <p class="card-text">{x.description}</p>
                 
                </div>
              </div>
              </Link>
            </div>

          )
        }
        else
        {
          return (
            <div className='col-md-3 mt-2'>
              <Link to={"details/"+x.id}>
              <div class="card">
                <img src={x.thumbnail} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{x.title} </h5>
                  <h3>Rs. {x.price}</h3>
                  <p class="card-text">{x.description}</p>
                 
                </div>
              </div>
              </Link>
            </div>

          )
        }

        })}

      </div>


    </div>
  )
}

export default Productpage