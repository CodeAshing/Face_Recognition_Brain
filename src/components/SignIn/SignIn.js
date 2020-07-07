import React, { useState, useContext } from 'react'
import { context } from '../../context/Context'
export const SignIn = ({route,setRoute}) => {    
    const [SignInEmail, setSignInEmail] = useState('')
    const [SignInPassword, setSignInPassword] = useState('')    
    const {8:setUser}=useContext(context)
    const onSubmitChange=()=>{ 
        
        fetch('http://localhost:3001/signin',{
            method:'post',
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify({
                email:SignInEmail,
                password:SignInPassword
            })      
        })
        .then(respone=>respone.json())
        .then(data=>{        
            if(data.login === 'success'){
                setUser({
                    id:data.user.id,
                    name: data.user.name,
                    email:data.user.email,
                    entries:data.user.entries,
                    joined:data.user.joined 
                })
            setRoute('home')  
            }                
        })    
    }
    
    return (
            <article className="br3 panel ba dark-gray b--black-10 mv4 w-120 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80 ">
                <form className="measure tc ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0 ">Sign In</legend>
                        <div className="mt3">  
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={event=>
                            setSignInEmail(event.target.value)
                            } 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={event=>
                            setSignInPassword(event.target.value)}/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" 
                        onClick={(e)=>{
                        e.preventDefault()
                        onSubmitChange()}} 
                        value="Sign in"/>
                        
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={()=>setRoute('register')}
                        className="f6 link dim black db pointer">Register</p>
                    </div>
                </form>
              </main>
            </article>
    )
}
