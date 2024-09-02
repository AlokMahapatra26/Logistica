import React from 'react'
import { useNavigate } from 'react-router';
function Logout() {

    const navigate = useNavigate();

    const   
    handleLogout = async () => {
        console.log("h")
       try {
         const response = await fetch('http://localhost:3000/log-out', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
         });
   
         if (response.ok)   
    {
           // Handle successful logout
           console.log('Logout successful!');
           navigate('/signin'); // Redirect to the login page
         } else {
           // Handle error
           console.error('Logout failed:', response.statusText);
         }
       } catch (error) {
         console.error('Error:', error);
       }
     };

  return (
    <div>
        <h2 className='mx-4'>Are you sure you wanna logout ???</h2>
        <button type="button" className='btn btn-danger mx-4' onClick={handleLogout}>FUCKING YEAH</button>
        <button type='button' className='btn btn-success mx-4'>NO</button>
    </div>
  )
}

export default Logout