import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Ragister.css';


const Register = () => {
const navi = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
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
    await axios.post("https://e-commerce-backend-ten-gules.vercel.app/register",formData)
    .then((res)=> {
      
    alert(res.data.message)
    navi("/login")
    })
    setFormData({
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
    })
    // Here you can send the form data to your backend or handle it as needed
    // console.log(formData);
  };

  return (
    <div className='form'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
 <label>Name:</label>
  <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password}onChange={handleChange}required/>
        </div>        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
