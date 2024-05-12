import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Ragister.css';


const Login = () => {
  const navi = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData)
    await axios.post("http://localhost:4001/api/login",formData)
    .then((res)=> {
     localStorage.setItem("token",res.data.token)
     localStorage.setItem("name",res.data.name)
    alert(res.data.message)
    navi("/")
    window.location.reload()
    })
    setFormData({
      email: '',
      password: '',
    })
 
  };

  return (
    <div className='form'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password}onChange={handleChange}required/>
        </div>        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
