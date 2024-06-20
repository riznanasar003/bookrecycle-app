import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>

    <div className="container">
        <div className="row">
        <center>
                <h1>WELCOME !</h1>
                <h6>Sign in to continue</h6>
                </center>
                <div class="text-center">
  <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg" class="rounded" alt="..." height="500px"/>
</div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">EMAIL ID</label>
                    <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">PASSWORD</label>
                    <input type="password" name="" id="" className="form-control" />

                    </div>
                    <center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <button className="btn btn-primary">LOGIN</button>

                    </div>
                    </center>
                </div>
                <br/>
                    <center>
                        <p>New User? <Link to="/signup">Click here</Link></p>
                        </center>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Login