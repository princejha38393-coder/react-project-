import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Productdetailspage() {
    const {id} = useParams();

   const [pro,usepro] = useState({});

  const myapi = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
      console.log(d.data);
      usepro(d.data);
    });

  }
  useEffect(() => {
    myapi();
  }, [])

  return (
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-3'>
            <img src={pro.thumbnail} alt={pro.id}/>
        </div>
        <div className='col-md-9 pt-3'>
        <h2>{pro.title}</h2>
          <p className="text-muted">{pro.category}</p>
          <p>{pro.description}</p>

          <h4 className="text-primary">
            ₹{pro.price}
            <small className="text-secondary ms-2">
              ({pro.discountPercentage}% off)
            </small>
          </h4>

         {pro.reviews && pro.reviews.length > 0 && (
        <div className="mt-4">
          <h5>Reviews:</h5>
          {pro.reviews.map((r, idx) => (
            <div key={idx} className="border-top pt-2">
              <p className="mb-1">
                <strong>{r.reviewerName}</strong> – ⭐ {r.rating}
              </p>
              <p className="mb-0">{r.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    
   </div>
  )
}

export default Productdetailspage