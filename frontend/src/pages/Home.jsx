import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
function Home() {


    const navigate = useNavigate();

  return (
    <>



    {/* Beanding and moto */}
    <div className="container mt-4 col-md-6">
  <h2><span class="text-success">Best Logistic Company in India</span></h2>
  <p class="lead">
    Our mission is to connect businesses and individuals with affordable and timely transportation services. We strive to exceed customer expectations by delivering exceptional value and building long-lasting relationships.
  </p>
</div>



    <hr />

    {/* Our Services */}
    <div className='container'>
        <h2>Our Services</h2>
        
  <div className='row'>


  <div class="card col-md-5  m-2" >
  <img src="https://images.pexels.com/photos/6348093/pexels-photo-6348093.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">B2C</h5>
    <p class="card-text">Are you an individual who want to transport something from one place to other if yes then click enter below</p>
    <Link type='btn' className='btn btn-success' to="/b2c" >Enter</Link>
  </div>
    </div>

    <div class="card col-md-5 m-2" >
  <img src="https://imgs.search.brave.com/bPKr4RTmT7L6a7f5DzyIfby0lV6NihLS67RYY7vRbDw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MTQzNzYyMS9waG90/by9wYWNraW5nLXN0/YXRpb25zLWluLWZ1/bGZpbGxtZW50LWNl/bnRlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cmE2dXV4/alBpVW8zS0xDM00x/dVJHbWE0cGp5WkU4/U0Zod3Viai04dWFU/TT0" class=" " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">B2B</h5>
    <p class="card-text">Are you a Bussiness who want to transport something from one place to other is yes then click enter below</p>
    <Link type='btn' className='btn btn-success' to="/b2b">Enter</Link>
  </div>
    </div>

  </div>


    </div>



{/* footer */}

<footer class="footer position-fixed bottom-0 w-100 py-3 bg-success">
  <div class="container">
    <span class="text-muted">&copy; 2024 Sabka Vahan</span>
  </div>
</footer>
    </>
  )
}

export default Home