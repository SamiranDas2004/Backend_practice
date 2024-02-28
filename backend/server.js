import  express  from "express";

const jokes=[
    {
        id:1,
        content:'a joke'
    },
    {
        id:1,
        content:'a joke'
    },
    {
        id:1,
        content:'a joke'
    },
    {
        id:1,
        content:'a joke'
    },
    {
        id:1,
        content:'a joke'
    }
]

const app=express();
// app.get('/',(req,res)=>{
//     res.send('server')
// })

app.get('/api/jokes',(req,res)=>{
    res.send(jokes)
})

const port=process.env.PORT|| 3000;

app.listen(port,()=>{
    console.log(`server listen at ${port}`);
})