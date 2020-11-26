
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodypaser = require('body-parser');
const app = express();
const rts = require('./routes/index.route');

app.use(bodypaser.json());
app.use(bodypaser.urlencoded({extended:true}));
app.use(cors());
app.use('/api',rts)



app.listen(process.env.PORT,()=>{
    console.log('server started ....');
});



