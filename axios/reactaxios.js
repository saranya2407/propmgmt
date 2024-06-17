import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Axios = () =>{
    const[data,setData] = useState([])

    useEffect(()=>{
        const getData = () => {
          axios.get("https://jsonplaceholder.typicode.com/users")
          .then(response => {
            setData(response.data)
          })
          .catch(error => {
            console.error("error fetching data",error);
          })
        }
        getData();
        
      },[])
      const myFun = myFun =>{
        alert("please wait...");
      }

     
    
    return (
        
<div>
<button onClick={myFun}>click</button>
        {data.map(item => (
          <div key={item.id}>
          <h3>{item.id}</h3>
          <h3>{item.name}</h3>
         
            </div>
        ))}
        </div>
    
  )
}

export default Axios