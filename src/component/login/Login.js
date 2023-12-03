import '../login/Login.css'
import '../table/Table.css'

import React, { useState } from 'react'




function Table(){
    const Data = [
        {
        name:"dinesh",
        email:"dineshdinu@gmail.com",
        password:"1234567890"
    }
];
    const [List , setList] = useState(Data);
    const [editlist,setEditlist] = useState(null);

    function Delete(id){
        const newList = List.filter((a)=>{
            return a.id !== id;
        })
        setList(newList);
    }

    function Edit(id){
            setEditlist(id)
    }
    return( 
        <div>
            <Login setList={setList} editList={editlist} setEditlist={setEditlist}/>
            <table>  
                {
                List.map((e)=>{
                    return(
                      
                    <tr>
                        {/* <td>Id : {e.id}</td> */}
                        <td>Name : {e.name}</td>
                        <td>Email : {e.email}</td>
                        <td>Password : {e.password}</td>
                        <button className='btn' onClick={()=>Edit(e.id)}>Edit</button>
                        <button className='btn' onClick={()=>Delete(e.id)}>Delete</button>
                    </tr>
                    
                )})
            }
            </table>
            
        </div>
    )
}





function Login({setList,editList,setEditlist}){ 
    function Random(){
        return (
           parseInt( Math.random()*1000000000)
        )
    }
   function handleSubmit1(e){
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        if(editList!==null){
            setList((PrevList)=>PrevList.map((item)=>
                item.id===PrevList.id?{...item.id,name,email,password}:item
            ))

            setEditlist(null); 
            
        }
        else if(name && email && password){
            const listData = {
                id:Random(),
                name,
                email,
                password
            }
            setList((PrevList)=>{
                return PrevList.concat(listData)
            })
        }
        else{
            alert("Please fill all the input fields")
        }

        e.target.elements.name.value = "";
        e.target.elements.email.value = "";
        e.target.elements.password.value = "";
    }
    return(
        <div>
            <section className="login-container">
                <div className="container">
                    <div className="row">
                        <div className="col6">
                            <div className="form-sec">
                            <form onSubmit={handleSubmit1}>
                                <h2>Login</h2>
                                <input type="text" id="name1" name='name' placeholder="Enter the name"  />
                                <input type="email" id="email1" name='email' placeholder="Enter the Email" />
                                <input type="password"  id="password1" name='password' placeholder="Enter the password" />

                                <button className='forget-sec'>forget password ?</button>
                                
                                <div className='flex'>
                                    <button type="submit">{editList!==null?"update":"login"}</button>
                                    {/* <button className='alink'>Sign Up</button> */}
                                </div>
                             </form>   
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Table;