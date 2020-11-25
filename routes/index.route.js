const route = require('express').Router();
const fs = require('fs');


const db = fs.readFileSync('./db.json');
let db_schema = JSON.parse(db);


   route.get('/by_course_code/:qcode',async (req,res,next)=>{
     let q = req.params.qcode;
     let data = await db_schema.courses.filter(n=> n.course_code === q);
     res.json(data);    
       
   });

   route.get('/by_title/:qtitle',async (req,res,next)=>{
    let q = req.params.qtitle;
    let data = await db_schema.courses.filter(n=> n.title === q);
    res.json(data); 
    
       
   });

route.get('/by_instructor/:qname',async (req,res,next)=>{
    let q = req.params.qname;
    let data = await db_schema.courses.filter(n=> n.instructor === q);
    res.json(data); 
    
       
});



route.get('/by_level/:qlevel',async (req,res,next)=>{
    let q = req.params.qlevel;
     let data = await db_schema.courses.filter(n=> n.course_level === q);
     res.json(data); 
    
       
});


route.get('/combined_query/:qname/:qlevel',async (req,res,next)=>{

    let qname = req.params.qname;
    let qlevel = req.params.qlevel;

    let data = await db_schema.courses.filter(n=> (n.instructor === qname && n.course_level === qlevel));
    res.json(data); 
    
       
});







module.exports = route;