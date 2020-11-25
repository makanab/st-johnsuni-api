
const express = require('express');
const app = express();


const rts = require('./routes/index.route');

app.use('/api',rts)



app.listen(5000,()=>{
    console.log('server started ....');
});



