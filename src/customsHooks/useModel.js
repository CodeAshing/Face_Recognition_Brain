const Model = (input,setImgUrl,setBox,user,setUser) => {    
    const calculateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box
    const image=document.getElementById('inputImage')
    const width=Number(image.width)
    const height=Number(image.height)
    
    return{
      leftCol: clarifaiFace.left_col *width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow :height - (clarifaiFace.bottom_row *height)  
    }
  }
    setImgUrl(input)
     fetch('https://afternoon-retreat-89463.herokuapp.com/imageUrl',{
      method:'post',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify({
        input:input
      })
    })
    .then(response=>response.json())
    .then((respone)=>{ 
      if(respone){
        fetch('https://afternoon-retreat-89463.herokuapp.com/image',{
          method:'put',
          headers:{'content-Type':'application/json'},
          body:JSON.stringify({
            id:user.id
          })
        })
        .then(respone=>respone.json())
        .then(count=>{
          setUser({
            ...user,
            entries:count}
          )
        })
        .catch(console.log)
      }
      setBox(calculateFaceLocation(respone))})
    .catch(error=> console.log(error))
      
}
export default Model
