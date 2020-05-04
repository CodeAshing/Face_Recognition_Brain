import React from 'react'

const Register = ({setRoute}) => {
    return (
        <article className="br3 panel ba dark-gray b--black-10 mv4 w-120 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80 ">
        <form className="measure tc ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0 ">Register</legend> 
                <div className="mt3">  
                    <label className="db fw6 lh-copy f6" for="name">Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" />
                </div>
                <div className="mt3">  
                    <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
            </fieldset>
            <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" 
                onClick={()=>setRoute('home')} value="Register"/>
                
            </div>
        </form>
        </main>
    </article>
    )
}

export default Register
