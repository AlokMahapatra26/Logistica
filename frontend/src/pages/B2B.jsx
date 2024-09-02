import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function B2B() {
    const navigate = useNavigate();

    const [formData , setFormData] = useState({
       
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
        const response = await fetch('http://localhost:3000/sign-in', {
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
          alert(response.statusText)
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };


    

    return (
        <>
      <div className="container col-md-4">
        <h1 className="mt-4 mb-4">Enter Courier Details</h1>

        <form onSubmit={handleSubmit}>
          
         
        <div>
        <div className="mb-3">   

<input
  type="text"
  className="form-control"
  id="senderName"
  placeholder="your name"
  name="senderName"
  value={formData.senderName}
  onChange={handleChange}   

/>
</div>

<div className="mb-3">
<input
  type="text"
  className="form-control"
  id="senderAddress"
  placeholder="your address"
  name="senderAddress"   

  value={formData.senderAddress}
  onChange={handleChange}
/>
</div>   

<div className="mb-3">
<input
  type="Number"
  className="form-control"
  id="senderContact"
  placeholder="your contact"
  name="senderContact"   

  value={formData.password}
  onChange={handleChange}
/>
</div> 
        </div>

          <div>
        <div className="mb-3">   

<input
  type="text"
  className="form-control"
  id="receiverName"
  placeholder="receiver name"
  name="receiverName"
  value={formData.senderName}
  onChange={handleChange}   

/>
</div>

<div className="mb-3">
<input
  type="text"
  className="form-control"
  id="receiverAddress"
  placeholder="receiver address"
  name="receiverAddress"   

  value={formData.senderAddress}
  onChange={handleChange}
/>
</div>   

<div className="mb-3">
<input
  type="Number"
  className="form-control"
  id="receiverContact"
  placeholder="receiver contact"
  name="receiverContact"   

  value={formData.password}
  onChange={handleChange}
/>
</div> 
        </div> 

        <div>
        <div className="mb-3">   

<input
  type="text"
  className="form-control"
  id="senderName"
  placeholder="your name"
  name="senderName"
  value={formData.senderName}
  onChange={handleChange}   

/>
</div>

<div className="mb-3">
<input
  type="text"
  className="form-control"
  id="senderAddress"
  placeholder="your address"
  name="senderAddress"   

  value={formData.senderAddress}
  onChange={handleChange}
/>
</div>   

<div className="mb-3">
<input
  type="Number"
  className="form-control"
  id="senderContact"
  placeholder="your contact"
  name="senderContact"   

  value={formData.password}
  onChange={handleChange}
/>
</div> 
        </div>

        <div>
        <div className="mb-3">   

<input
  type="text"
  className="form-control"
  id="senderName"
  placeholder="your name"
  name="senderName"
  value={formData.senderName}
  onChange={handleChange}   

/>
</div>

<div className="mb-3">
<input
  type="text"
  className="form-control"
  id="senderAddress"
  placeholder="your address"
  name="senderAddress"   

  value={formData.senderAddress}
  onChange={handleChange}
/>
</div>   

<div className="mb-3">
<input
  type="Number"
  className="form-control"
  id="senderContact"
  placeholder="your contact"
  name="senderContact"   

  value={formData.password}
  onChange={handleChange}
/>
</div> 
        </div>


         

          <button type="submit" className="btn btn-primary">
            Send Request
          </button>
        </form>
      </div>
    </>
       )
}

export default B2B