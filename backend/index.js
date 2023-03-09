const express= require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mysql=require('mysql2');


const app=express();

app.use(cors());

app.use(bodyparser.json());

app.listen(3000,()=>{
    console.log("2nd server is running on port 3000");
});

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'userinfo',
    port:3306
});


db.connect(err=>{
    if(err){
        console.log("error");
    }
    console.log('Database connected successfully');
});

app.get('/users',(req,res)=>{
    console.log('get all users');
    let qrr='SELECT * FROM users';
    db.query(qrr,(err,results)=>{
        if (err) {
            console.log(err,' error');
            res.status(500).send({ error: 'Error fetching users' });
        } else {
            if (results.length>0) {
                res.send({
                    message:'All users Data',
                    data:results
                });
            } else {
                res.status(404).send({ error: 'No users found...' });
            }
        }
    });
});

app.get("/user/:id", (req, res) => {
    // console.log(req.params.id);
    let id = req.params.id; 
    let qrr = `SELECT * FROM users where id=${id}`;
    db.query(qrr, (err, result) => {
      if (err) {
        console.log(err + " err");
      } else if (result.length > 0) {
        res.send({
          message: `get user data whose id is ${id}`,
          data: result,
        });
      } else {
        res.send({
          message: `id ${id} is not found`,
        });
      }
    });
    
  });
  


  app.post("/user",(req,res)=>{
    // console.log(req.body);
    let Name=req.body.name;
    let Id=req.body.id;
    let Email=req.body.email;
    let qrr=`INSERT INTO users (id, name, email) VALUES ('${Id}','${Name}','${Email}')`;
    db.query(qrr,(err,result)=>{
       if (err) {
        console.log(err+" error");
       }
       else{
        res.send({
            message:'data added succesfully',
            data:result
        });
       }
    });
});


app.put("/user/:id",(req,res)=>{
    
    let id=req.params.id;
   
    let Id=req.body.id;
    let name=req.body.name;
    let email=req.body.email;
   
    let qrr=`UPDATE users SET id = '${Id}', name='${name}', email= '${email}' WHERE id ='${id}' `;
    db.query(qrr,(err,result)=>{
      if (err) {
        console.log(err+" error");
      }
      else{
         res.send({
          message:'data updated usccesfully',
          data:result
         });
      }
    });
  });

  app.delete("/user/:id",(req,res)=>{
    console.log("working");
    let uid=req.params.id;
    let qrr=`DELETE FROM users where id='${uid}'`;
    db.query(qrr,(err,result)=>{
      if (err) {
        console.log(err+" error");
      }else{ 
        res.send({
          message:`data deleted of user id ${uid}`, 
          data:result
        });
      }
    });
    }); 
