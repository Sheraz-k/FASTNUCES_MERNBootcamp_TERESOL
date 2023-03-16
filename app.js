const express =require('express')

const app = express();

const port = 3005;

app.get('/',(req,res)=>{
    res.send('my work is done ==> ab tum jano our tumara kaam me chala');
})

app.listen(port, ()=> {
    console.log(`server is running at: http://localhost:${port}`)
})