import React from "react";
import '../registration/Registration.css';
// import {useForm} from 'react-hook-form'


function Registration(){
    // const {register,handleSubmit} = useForm();
    
    return(
        <div>
            
            <section className="registration-container">
                <div className="container">
                    <div className="row">
                        <div className="col6">
                            <div className="registration-sec">
                                <h1>Registration Form</h1>
                                <form>
                                    <input type="text" id="name2" name="name1" placeholder="Enter Your Name" />
                                    
                                    <input type="email" id="email2" name="email1" placeholder="Enter Your email" />
                                    
                                    <input type="number" id="number2" name="mobilenumber" placeholder="Enter Your Mobile Number" />
                                    
                                    <input type="Password" id="Password2" name="Password1" placeholder="Enter Your Password" />
                                    
                                    <input type="Password" id="cPassword2" name="cPassword1" placeholder="Confirm password" />

                                    <button type="submit" className="reg-sec">Register</button>
                                </form>
                                

                                <h2>Already have an account? <button className="signin-sec">SignIn</button></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registration;