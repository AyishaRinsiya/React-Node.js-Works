const express= require('express')
const app=express()
var mysql=require('mysql');
const cor=require('cors'); 
app.use(cor());
app.use(express.json());
app.use(express.urlencoded())

      //function dataBase(){
      const db=mysql.createConnection({
         host:'localhost',
         user:'root',
         password:'',
         database:'main_db'
        });
       // con.connect((err)=>{
         //   if(err) throw console.error(err);
          //  console.log("connected");
           //});
          // return con;
    //}
        app.post('/create',(req,res,next)=>{
            const name=req.body.us;
            const password=req.body.ps;
            const email=req.body.ms;
           // var con=dataBase("main_db");
            
          
         db.query("INSERT INTO view(name,password,email)VALUES(?,?,?)",[name,password,email],(err,result)=>{
          if(err){
            console.log(err);
          }else{
            res.send("Values Inserted");
          }
          })
        })

        //view data

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
                
                var sl="SELECT * FROM view";
                con.query(sl,(err,result)=>{
                  //noderes.render('viewdata',{'data':result})
                  console.log(result)
                  res.send (result);
                })
            })

            //delete

            app.get('/delete/:id',(req,res,next)=>{
                var con=dataBase("main_db") 
            var id=req.params.id;
            console.log(id)

            con.connect((err)=>{
                if(err) throw console.error(err);
                console.log("connected");
            });
            var sql="DELETE FROM reg WHERE id='"+id+"'";
            con.query(sql,(err,result)=>{
                if(err)throw err;
                console.log("data Deleted");
                res.redirect('/viewdata')
            })
        })

        //edit

        app.get('/edit/:id',(req,res,next)=>{
            var con=dataBase("main_db")
        var id=req.params.id;
            console.log(id)

        con.connect((err)=>{
            if(err) throw err;
            console.log("connected");
        });
        var sl="SELECT * FROM reg WHERE id='"+id+"'";
        con.query(sl,(err,result,field)=>{
            if(err) throw err;
            res.render('edit',{'data':result})
        })
    })

    //update

        app.post('/update',(req,res,next)=>{ 
            var name=req.body.us;
            var password=req.body.ps;
            var email=req.body.ms;
            var id=req.body.id;
            var con=dataBase("main_db")
            con.connect((err)=>{
                if(err) throw err;
                console.log("connected")
            });
            var sql="UPDATE reg SET  name='"+name+"',password='"+password+"',email='"+email+"' WHERE id='"+id+"'";
            con.query(sql,(err,result,field)=>{
                if(err) throw err;
                res.redirect('/viewdata')
            })
        })

         app.listen(9000,()=>{
            console.log('server running http://localhost:9000/');
        });
    