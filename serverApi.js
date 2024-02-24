import express from 'express'
const app =express()
import db from "./server/BD/mySql.js";

const runServer = ()=>{
app.get('/',async (req ,res)=>{
  await db.getList().then(datos =>{

    res.json({mdj:'hiak',datos})
  }
    )
  
  
  
})

app.listen(3000 ,()=>{
 
  console.log('tu servidor corriendo ');
  
})

}

export default runServer