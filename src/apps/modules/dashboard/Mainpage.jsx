import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Mycustomgraph } from './Graphpage';
import UserTable from './UserTable';
import Eyetable from './Eyetable';
import { useSelector,useDispatch } from 'react-redux';
import { increment,changename } from '../reduxpage/Myfunctions';

function Mainpage() {

  const [user, updateuser] = useState([]);
  const [cgreen,updategreen]=useState([]);

  const getdata = () => {
    axios.get('https://dummyjson.com/users').then((d) => {
      console.log(d.data.users);
      updateuser(d.data.users);
      
      updategreen(d.data.users.filter((e)=>{
          return e.eyeColor==="Hazel"
      }));

    })
  }
  useEffect(() => {
    getdata()
  }, []);

  const xyz =useDispatch();

  
const username = "empname";
const btn = ()=>{
  alert("welcome to parent ");
}
const abc = useSelector((a)=>a.counter.salary);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
              <h2>{abc}</h2>
              <input type='button' className='btn btn-success' value="change value" onClick={()=>xyz(increment())}/>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>

        <div className='col-md-7 mt-3'>
          <div class="card mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <Mycustomgraph/>
            </div>
          </div>
        </div>
        <div className='col-md-5 mt-3'>
          <div class="card mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <Eyetable userlist={cgreen}></Eyetable>
            </div>
          </div>
        </div>
        <div className='col-md-12 mt-3'>
          <UserTable xyz={username} myaction = {btn}></UserTable>
        </div>

      </div>
    </div>
  )
}

export default Mainpage