const express = require("express")
const app = express();
var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }] 
}];

app.use(express.json());

//showing the kidney data
app.get("/", (req, res) => {
    const johnkidneys = users[0].kidneys;
    const number = johnkidneys.length;
    let numofhealthy = 0;
    for(let i = 0; i < johnkidneys.length; i++){
        if(johnkidneys[i].healthy){
            numofhealthy = numofhealthy + 1;
        }
    } 
    const numofunhealthy = number - numofhealthy;
    res.json({
        number,
        numofhealthy,
        numofunhealthy
    })
})

//adding kidneys
app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

//making all the unhealthy ones healthy
app.put("/", (req, res) => {
    if(isThereAtLeastOneUnhealthy()){
        for(let i = 0; i < users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({})
    }
    else{
        res.status(411).json({
            msg: "No unhealthy kidneys"
        })
    }
})

//deleting the unhealthy ones
app.delete("/", (req, res) => {
    if(isThereAtLeastOneUnhealthy()){
        const newKidneys = [];
        for(let i = 0; i < users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "Doneee"
        })
    }
    else{
        res.status(411).json({
            msg: "You have no bad kidney"
        })
    }
})

function isThereAtLeastOneUnhealthy(){
    let atLeastOne = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys.healthy){
            atLeastOne = true;
        }
    }
    return atLeastOne;
}

app.listen(3000);