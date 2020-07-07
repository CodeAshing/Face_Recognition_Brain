import React, { useState } from 'react'
import { Provider } from './Context'

export const GlobalState = (props) => {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [box, setBox] = useState({})
    const [user, setUser] = useState({
        id:'',
        name: '',
        email:'',
        entries:0,
        joined: ''})

    const onInputChange=(event)=>{
        setInput(event.target.value)
    }
    const value=[input,setInput,onInputChange,
        imageUrl,setImageUrl,box,
        setBox,user,setUser]
    
    return (
        <Provider value={value}>
            {props.children}
        </Provider>
    )
}
