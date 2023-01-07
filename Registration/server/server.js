const express= require('express')
const app=express()
var mysql=require('mysql');
const cor=require('cors'); 
app.use(cor());
app.use(express.json());
app.use(express.urlencoded())

//function dataBase(db){
    const db=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'main_db'
       });
    
app.post('/register',(req,res,next)=>{  
    const name=req.body.us;
    const email=req.body.ms;
    const password=req.body.ps;
    const message=req.body.gs;
    //var con=dataBase("main_db")
    db.query("INSERT INTO customer(name,email,password,message) VALUES(?,?,?,?)",[name,email,password,message],(err,result)=>{
        if(err){
            console.log(err);
          }else{
            res.send("Values Inserted");
          }
          })
        })
        
        app.get("/viewdata",(req,res)=>{
            var con=mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'',
                database:'main_db'
               });
               con.connect((err)=>{
                   if(err) throw console.error(err);
                   console.log("connected");
               });
           // var con=dataBase("main_db");
                
                var sl="SELECT * FROM customer";
                con.query(sl,(err,result)=>{
                  //noderes.render('viewdata',{'data':result})
                  console.log(result)
                  res.send (result);
                })
            })


app.post('/log',(req,res,next)=>{  
    var name=req.body.us;
    var password=req.body.ps;

    var con=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'main_db'
       });

       con.connect((err)=>{
        if(err) throw console.error(err);
        console.log("connected");
    
    var sql="select * from customer where name='"+name+"'AND password='"+password+"'";
    var x=con.query(sql,(err,result,next)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(true) 
        }
        else{
            res.send(false)
        }
    })
})
});
 


app.listen(9000,()=>{
    console.log('server running http://localhost:9000/');
})
  
    