const productCOntroller = require('../routes/productRout')
exports.getpPoduct = (req,res)=>{
    
   
        let  data=[
        
            {id:'1', title:'Artifical intellgencd', description:'this book for it ',pric:'45' ,pic:"../assets/imges/it.jpg"},
            {id:'2', title:'ORGANIC Chemistry', description:'this book for chemistry',pric:'25' , pic:"../assets/imges/chem.jpg"},
            {id:'3', title:'Advanced Physics', description:'this book PHYSICS', pric:'15' ,pic:"../assets/imges/phx.jpg"},
            {id:'4', title:'it book', description:'this book for IT', pric:'40',pic:"../assets/imges/it2.jpg"}
        ]
    let bookData= [];
    const id = req.params.id;
    
    
         for(let i =0 ; i < Object.keys(data).length; i++){
            if(data[i]['id']==id){
                bookData.push(data[i])
                
            }
         }
         res.render('../view/product', {
            bookData:bookData
         })
        
       
}