import React from 'react';
import Useform from './hooks/useform';
import validate from './utils/validate';

const FormSignup = () => {
  const{handleFun,values,handleSubmit,errors} = Useform(validate);
 
  return (
    <div>
     <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create Your Account</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input 
          id="username"
           type="text" name="username" 
           className="form-input" 
           placeholder="Enter Your username"
           value={values.username}
           onChange={handleFun}
          />
          {errors.username && <p className="error">{errors.username}</p>}
          </div>
        <div className="form-inputs">
          <label htmlFor='email' className="form-label">
            Email:
          </label>
          <input
           id="email"
           type="email" name="email" 
           className="form-input" 
           placeholder="Enter Your email"
           value={values.email}
           onChange={handleFun}
           />
           {errors.email && <p className="error">{errors.email}</p>}


        </div>
        <div className="form-inputs">
          <label htmlFor='password' className="form-label">
            Password:
          </label>
          <input
           id="password"
           type="password" name="password" 
           className="form-input" 
           placeholder="Enter Your password"
           value={values.password}
           onChange={handleFun}
           />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button className='form-input-btn' type="submit">Register</button><br></br>
        <span className='form-input-login'>Already have an account? Login<a href="#">here</a>
        </span>
      </form>
     </div>

    </div>
  )
}

export default FormSignup;







/* body {
  font-family: sans-serif;
}

.form-content-right{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form label {
  margin-right: 10px;
}

.error {
  color: red;
} */


/* import React from 'react'
import Form from './component/form'
import './App.css'

function App() {
  return (
    <div>
     <Form/>
    </div>
  )
}

export default App */

