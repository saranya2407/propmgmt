import React, { useState } from 'react';

const Useform = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
    
  const [errors, setErrors] = useState({});

  const handleFun = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
        
      ...prevValues,
      [name]: value,
        
        }));
    };
  const handleSubmit = (e) =>{
    e.preventDefault();

    setErrors(validate(values));
};
 return{handleFun,values,handleSubmit,errors};
};

export default Useform;


// import React from 'react'
// import Form from './component/form'
// import './App.css'

// function App() {
//   return (
//     <div>
//      <Form/>
//     </div>
//   )
// }

// export default App 




// body {
//   font-family: sans-serif;
// }

// .form-content-right{
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// }
// .form label {
//   margin-right: 10px;
// }

// .error {
//   color: red;
// } 


