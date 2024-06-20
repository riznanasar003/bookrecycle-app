import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <center>
                        <h1>HEY !</h1>
                        <h6>Create a new account</h6>
                    </center>
                    <br /><br /><br />
                    <div class="text-center">
                        <img src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" class="rounded" alt="..." height="400px" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">

                                <label htmlFor="" className="form-label">USERNAME</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">


                                <label htmlFor="" className="form-label">EMAIL ID</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">


                                <label htmlFor="" className="form-label">PHONE NO</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">

                                <label htmlFor="" className="form-label">GENDER</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">

                                <label htmlFor="" className="form-label">PASSWORD</label>
                                <input type="password" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">

                                <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                                <input type="password" name="" id="" className="form-control" />

                            </div>
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">

                                    <button className="btn btn-primary">REGISTER</button>

                                </div>
                            </center>
                        </div>
                        <br/>
                    <center>
                    <p>Back to Login <Link to="/">Login</Link></p>
                    </center>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp