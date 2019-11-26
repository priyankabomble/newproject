var express = require("express");
var mysql = require("mysql");
var Joi =require("joi");
var config = require("config");
var router = express();


var connection = mysql.createConnection({
    "host": config.get("host"),
    "database": config.get("database"),
    "user": config.get("user"),
    "password": config.get("password")
});

router.use(express.json());
connection.connect();

router.get('/',(req,res)=>{
    connection.query("select * from Employee",(err,result)=>{
        if(err==null)
        {
            res.send(JSON.stringify(result));
        }
        else{
            res.send(JSON.stringify(err));
        }
    });

});

 router.post('/',(req,res)=>{
     var validatationResult = validation(req);
     if(validatationResult.error == null)
     {
     var No = req.body.No;
     var Name = req.body.Name;
     var Age = req.body.Age;

     var querytext =`insert into Employee values(${No},'${Name}',${Age})`
   connection.query(querytext,(err,result)=>{
        if(err==null)
        {
           res.send(JSON.stringify(result));
         }
        else{
            res.send(JSON.stringify(err));
       }
    });
     }
     else{
       res.send(JSON.stringify(validatationResult.error));  
     }
 });

 function validation(req)
 {
   var validationschema={
      No: Joi.number().required(),
      Name: Joi.string().required(),
      Age:Joi.number().min(18).max(60).required()
   };
   return Joi.validate(req.body,validationschema);
 }
 router.put('/:No',(req,res)=>{
    var No = req.params.No;
    var Name = req.body.Name;
    var Age = req.body.Age;

    var querytext =`update Employee set Name ='${Name}',Age=${Age} where No=${No}`
  connection.query(querytext,(err,result)=>{
       if(err==null)
       {
          res.send(JSON.stringify(result));
        }
       else{
           res.send(JSON.stringify(err));
      }
   });

});
router.delete('/:No',(req,res)=>{
    var No = req.params.No;
    

    var querytext =`delete from Employee where No=${No}`
  connection.query(querytext,(err,result)=>{
       if(err==null)
       {
          res.send(JSON.stringify(result));
        }
       else{
           res.send(JSON.stringify(err));
      }
   });

});
router.get('/:No',(req,res)=>{
    var No = req.params.No;
    

    var querytext =`select * from Employee where No=${No}`
  connection.query(querytext,(err,result)=>{
       if(err==null)
       {
          res.send(JSON.stringify(result));
        }
       else{
           res.send(JSON.stringify(err));
      }
   });

});
module.exports=router;

