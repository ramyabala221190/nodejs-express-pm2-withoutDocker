import express from 'express';

const app=express();

app.get('/',(req,res,next)=>{
    res.status(200).send(`Welcome to Express Application in ${process.env.APP_ENV} environment on port ${process.env.PORT}`);
})


app.listen(process.env.PORT,()=>{
    console.log(process.env['api-key']);// just logged so that we confirm that the key from the correct file is logged
    console.log(`server in ${process.env.APP_ENV} environment listening on port ${process.env.PORT}`);
})