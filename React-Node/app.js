const express= require('express')
const app=express()
var mysql=require('mysql');
const cor=require('cors'); //cor is a library used to interact with react
app.use(cor());
app.use(express.json());
app.use(express.urlencoded())

    
        const db=mysql.createConnection({
         host:'localhost',
         user:'root',
         password:'',
         database:'main_db'
        });
        
        app.post('/create',(req,res,next)=>{
            const name=req.body.us;
            const password=req.body.ps;
            const email=req.body.ms;
          
         db.query("INSERT INTO reg(name,password,email)VALUES(?,?,?)",[name,password,email],(err,result)=>{
          if(err){
            console.log(err);
          }else{
            res.send("Values Inserted");
          }
          })
        })
         app.listen(9000,()=>{
            console.log('server running http://localhost:9000/');
        });
    