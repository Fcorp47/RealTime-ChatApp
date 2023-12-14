const express = require("express");
const cors = require('cors');
const axios = require("axios");

const app = express()
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async(req, res) =>{
    const {username} = req.body;

    try{
            const response = await axios.put('https://api.chatengine.io/users/',
                {username: username, secret: username, first_name: username},
                {headers: {"private-key": "b6f12f4a-f3ef-489b-800a-23fb2193721a"} }
            )
            return res.status(response.status).json(response.data)
    }
    catch(e){
            return res.status(e.response.status).json(e.response.data) 
    } 

    //b6f12f4a-f3ef-489b-800a-23fb2193721a

    return res.json({username: username, secret: "sha256..."})
});

app.listen(3001, ()=>{
    console.log("server is running");
});