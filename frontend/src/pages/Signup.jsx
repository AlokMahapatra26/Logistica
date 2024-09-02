import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Signup() {


    const navigate = useNavigate();

    const [formData , setFormData] = useState({
        name : '',
        username:'',
        email:'',
        password:''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const response = await fetch('http://localhost:3000/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',   
  
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Handle successful signup
          console.log('Signup successful!'); 
          navigate("/")
            
  
        } else {
          // Handle error
          console.error('Signup failed:', response.statusText);
          alert("Something went wrong")
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };


    

    return (
        <>
      <div className="container col-md-4">
        <h1 className="mt-4 mb-4">Signup Now</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="username"
              name="username"
              value={formData.username}
              onChange={handleChange}   

            />
          </div>

          <div className="mb-3">   

            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleChange}   

            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              name="password"   

              value={formData.password}
              onChange={handleChange}
            />
          </div>   


          Already have an Account? <Link to="/signin">signin</Link><br /><br />

          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </>
       )
}

export default Signup