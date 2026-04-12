import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar ,Tooltip,XAxis} from 'recharts';


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Graphpage() {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 bg-dark g-0'>
          <BarChart
            style={{ width: '100%', maxHeight: '500px', aspectRatio: 1.618 }}
            responsive
            data={data}
          >
            <Bar dataKey="uv" fill="#d88484" />
            <Bar dataKey="pv" fill="#ff0000" />
            <Bar dataKey="amt" fill="#bd3535" />
            <Tooltip/>
          </BarChart>
        </div>
      </div>
    </div>
  )
}

export default Graphpage


export function Mycustomgraph()
{
  const [dt,updt]=useState([])
  const mydata = ()=>{
    axios.get('http://localhost:8700/sales').then((d)=>{
      updt(d.data)
      console.log(d.data)
    })
  }

 useEffect(()=>{
  mydata()
 },[]) 


return(
  <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 bg-dark g-0'>
          <BarChart
            style={{ width: '100%', maxHeight: '400px', aspectRatio: 1.618 }}
            responsive
            data={dt}
          >
            <Bar dataKey="price" fill="#d88484" />
            <Bar dataKey="discount" fill="#00cdf1" />
            <Tooltip/>
          </BarChart>
        </div>
      </div>
    </div>
)
}
