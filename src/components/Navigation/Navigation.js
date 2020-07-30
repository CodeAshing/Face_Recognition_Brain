import React from 'react'

const Navigation = ({route, setRoute}) => {
    return (           
        route!=='signin' && (
            <nav className='' 
            onClick={()=> setRoute('signin')} 
            style={{display:'flex', justifyContent:'flex-end'}}>             
                <p onClick={()=> setRoute('signin')}
                 className='f3 link dim white underline dib pa3 pointer'>
                    {route==='home'? 'Sign out': 'Sign In'}
                </p>
            </nav>
        
        )
    )
}
export default Navigation
