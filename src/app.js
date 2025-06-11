import express from 'express';

const app=express();

app.get('/',(req,res,next)=>{
    res.status(200).send(`Welcome to the Node Express Application in ${process.env.APP_ENV} environment on port ${process.env.PORT}`);
})


app.listen(process.env.PORT,()=>{
    console.log(process.env['api-key'])
    console.log(`server in ${process.env.APP_ENV} environment listening on port ${process.env.PORT}`);
})