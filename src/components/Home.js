import classes from './Home.module.css'
import { useState } from 'react';
const Home=(props)=>{
const[input,setinput]=useState(props.data);
const[filtersearch,setfiltersearch]=useState('')
 function listening(event){
  //console.log(event.target.value)
  if(event.target.value===''){
    setinput(props.data);
    return;
  }

   else{
       setfiltersearch(event.target.value);
      //console.log(filtersearch);
   }
    const filter=props.data.filter((item)=>{
         if(item.includes(filtersearch)){return item;}
           

         
    
         
    })
     setinput(filter)
      

  }
    
  
return <div>
      <nav className={classes.nav}>
       <li className={classes.product}>Products</li> 
       <li className={classes.input}><input type="text" placeholder='serch-by-product-name' onChange={listening}></input></li>
       <li>Cart</li>
       
       </nav>
     <section>
        <ul className={classes.design}>
          {input.map((res)=>{
           return  <li className={classes.list}>
               {res}
             </li>
            
          })}
          
        
      </ul> 
      
     </section>

     </div>
    
}
 export default Home;