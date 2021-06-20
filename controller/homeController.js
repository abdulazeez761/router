const homeRout = require('../routes/homeRout')
 exports.getHome =(req , res)=>{
    
    let  data=[
        
        {id:'1', name:'Artifical intellgencd', category:'IT', pic:"../assets/imges/it.jpg"},
        {id:'2', name:'ORGANIC Chemistry', category:'chemistry', pic:"../assets/imges/chem.jpg"},
        {id:'3', name:'Advanced Physics', category:'PHYSICS', pic:"../assets/imges/phx.jpg"},
        {id:'4', name:'it book', category:'IT', pic:"../assets/imges/it2.jpg"}
    ]
      
        res.render('../view/home' , {data:data})
   
 }