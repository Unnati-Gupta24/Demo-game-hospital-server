const express =require("express");
const app = express();

var users = [{
    name: 'John',
    kidneys: [
    {
        healthy: true
    },{
        healthy: false
    }]
}]

app.use(express.json());

app.get("/",(req,res)=>{
    const johnkidney = users[0].kidneys
    const number = johnkidney.length;
    res.json({
        johnkidney,
        number
    })
});

app.post("/",(req,res)=>{
    console.log(req.body)
    const health = req.body.health;
    users[0].kidneys.push({
        healthy: health,
    })
    res.json({
        msg:'done'
    })
});

//removing all unhealthy kidney
app.delete("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
});

//creates an array of healthy kidney
app.put("/",(req,res)=>{
    let newkidney = []
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newkidney.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newkidney
    res.json({msg: "done"})
});

app.listen(4050,()=>{
    console.log("hi")
});

