const filterRout = require('../routes/filtertRout')
 exports.getFIlter =(req , res)=>{
    
    let  data=[
        
        {id:'1', name:'Artifical intellgencd', category:'IT', pic:"../assets/imges/it.jpg"},
        {id:'2', name:'ORGANIC Chemistry', category:'chemistry', pic:"../assets/imges/chem.jpg"},
        {id:'3', name:'Advanced Physics', category:'PHYSICS', pic:"../assets/imges/phx.jpg"},
        {id:'4', name:'it book', category:'IT', pic:"../assets/imges/it2.jpg"}
    ]
        
        let temp = [];
        
        if(Object.keys(req.query).length == 0) {
            //console.log('all')
                res.render('home', {data:data})
                console.log('data')   
            } else {
               // console.log('not')
                for(let i = 0; i < Object.keys(data).length; i++){
                    if(data[i]['category'] == req.query.category){
                        temp.push(data[i])
                        
                     
                    } 
                    
                }
                
                res.render('../view/home' , {data:temp})
            } 
            
           
        
   
 }