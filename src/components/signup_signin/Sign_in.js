import React, { useState } from 'react'
import './Signup.css'
import {NavLink} from 'react-router-dom'
const Sign_in = () => {

    const [logdata,setData]=useState({
        email:"",
        password:""
    })


    const adddata=(e)=>{
        const {name,value}=e.target;
        console.log(logdata)
        setData(()=>{
            return {
                ...logdata,
                [name]:value
            }
        })
    }


    const senddata=()=>{

    }
    return (
        <>
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="" ></img>
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={adddata}
                                value={logdata.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={logdata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn" onClick={senddata}
                         >Continue</button>
                    </form>
                    {/* <ToastContainer /> */}
                </div>
                <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                    <button> 
                         <NavLink to="/signup">Create your Amazon Account</NavLink>
                         </button>
                </div>
            </div>

        </section>
        </>
    )
}

export default Sign_in