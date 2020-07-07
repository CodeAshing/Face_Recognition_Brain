import React, { useState, useContext } from 'react'
import { context } from '../../context/Context'

const Register = ({setRoute}) => {
    
    const [,,,,,,,,setUser]=useContext(context)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')    
    const [password, setPassword] = useState('')

    const onSubmtChange=()=>{        
        fetch('http://localhost:3001/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:email,
                password:password,
                name:name
            })
        })
        .then(response=>response.json())
        .then(user=>{
            setUser({
                id:user[0].id,
                name: user[0].name,
                email:user[0].email,
                entries:user[0].entries,
                joined:user[0].joined 
            })
            if(user){
                setRoute('home')                
            }
        })
    }
    return (
        <article className="br3 panel ba dark-gray b--black-10 mv4 w-120 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80 ">
        <form className="measure tc ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0 ">Register</legend> 
                <div className="mt3">  
                    <label className="db fw6 lh-copy f6" >Name</label>
                    <input onChange={event=>{
                        setName(event.target.value)
                    }} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" />
                </div>
                <div className="mt3">  
                    <label className="db fw6 lh-copy f6" >Email</label>
                    <input onChange={event=>{
                        setEmail(event.target.value)
                    }} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" >Password</label>
                    <input onChange={event=>{
                        setPassword(event.target.value)
                    }} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
            </fieldset>
            <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" 
                onClick={event=>{
                    event.preventDefault()
                    onSubmtChange()
                }} value="Register"/>
                
            </div>
        </form>
        </main>
    </article>
    )
}

export default Register
