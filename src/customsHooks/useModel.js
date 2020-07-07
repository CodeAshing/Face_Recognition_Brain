import Clarifai from 'clarifai'

const Model = (input,setImgUrl,setBox,user,setUser) => {  
  

  const app=new Clarifai.App({
    apiKey:'3a879ad121ef4d19b77a4b0d465a18f1'
  })

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
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    .then((respone)=>{ 
      if(respone){
        fetch('http://localhost:3001/image',{
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
      }
      setBox(calculateFaceLocation(respone))})
    .catch(error=> console.log(error))
      
}
export default Model
