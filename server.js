
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const app = express();


const rts = require('./routes/index.route');

app.use('/api',rts)



app.listen(process.env.PORT,()=>{
    console.log('server started ....');
});



