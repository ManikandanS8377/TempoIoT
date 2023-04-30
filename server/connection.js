const express=require('express')
const pool=require('./database')
const cors=require('cors')
const fs = require('fs');

const app=express()
app.use(cors())
app.use(express.json())

app.get("/user",async(req,res)=>{
    try {
       await pool.query('SELECT * FROM demo_manage').then((data)=>{console.log(data)})
    } catch (err) {
        console.log(err)
    }
})

app.post("/user",async(req,res)=>{
    try {

        //getting data for enabled srevice

        const enables=req.body["checking"]
        let topicname=req.body["devicemacaddress"]

       // mqtt connection
        if(enables==="true"){
            topicname=topicname.replace(/[:\-]/g, "_");

            //TAKE COPY of the file
            const fileName=topicname+'.js';
            const fileContent=fs.readFileSync('./Copying.js')
            const filePath='copy/'+fileName
            //write the file
            fs.writeFileSync(filePath,fileContent);
        }



        
        //getting data from client side
        
        const client_id=req.body["clientid"]
        const device_name=req.body["devicename"]
        const device_mac_address=req.body["devicemacaddress"]
        const device_firmware_version=req.body["firmwareversion"]
        const mqtt_client_name=req.body["clientname"]
        const mqtt_host=req.body["host"]
        const user_name=req.body["username"]
        const passowrd=req.body["password"]
        const device_model=req.body["devicemodel"]
        const topic_name=req.body["topicname"]
        const parameter=req.body["parameter"]
        const datatype=req.body["datatype"]
        const ins='INSERT INTO demo_manage(client_id, device_name, device_mac_address, device_firmware_version, mqtt_client_name, mqtt_host, user_name, password, device_model,parameter,datatype,topic_name)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);'
        const values=[client_id,device_name,device_mac_address,device_firmware_version,mqtt_client_name,mqtt_host,user_name,passowrd,device_model,parameter,datatype,topic_name]

        //query to insert into database
        await pool.query(ins,values).then((res)=>{
            console.log(res)
        })
    } catch (err) {
        console.log(err)
    }
})


app.listen(4000,()=>{
    console.log("server is running on port 4000")
})