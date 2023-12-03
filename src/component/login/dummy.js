import './Login.css'
import {useForm} from 'react-hook-form'
function Add (){
    const {register,handleSubmit,formState:{errors}}=useForm()
     console.log(errors)
    return(
        <div>
            <form onSubmit={handleSubmit((data)=>
                console.log(data)
                )}>
            <div className='container'>
            <div className="item">
                <h1>LOGIN</h1>
                <div className="item1">
                    <input type="text" {...register("name",{required:"Name is required"})}placeholder="Enter your Name"/>
                    {errors.name ? <span>{errors.name.message}</span> : null}

                </div>.
                <div className="item1"> 
                     <input type="email" {...register("email",{required:"Email is required"})}placeholder="Enter your Email Address"/>
                     {errors.email ? <span>{errors.email.message}</span> : null}

                </div >
                 <div className="item1"> 
                     <input type="password" {...register("password",{required:"Password is required",minLength:{
                        value:8,
                        message:"length should be 8"}})}placeholder="Enter your Password"/>
                    {errors.password ? <span>{errors.password.message}</span> : null}

                </div>
                <div className="item2">
                    <p>forgot password?</p>
                    <button>LOGIN</button>
                    <button>SIGN UP</button>
                </div>
                
            </div>
            </div>
            </form>
        </div>
    )
}
export default Add;