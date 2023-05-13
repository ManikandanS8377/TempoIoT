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
        const data=req.body
        const enables=req.body["checking"]


       // mqtt connection
        if(enables==="true"){

            let topicname=req.body["devicemacaddress"]
            topicname=topicname.replace(/[:\-]/g, "_")
            
            //TAKE COPY of the file
            const fileName=topicname+'.js';
            const fileContent=fs.readFileSync('./Copying.js')
            const filePath='copy/'+fileName
           // write the file
            fs.writeFileSync(filePath,fileContent);
            console.log(data)

            let allData=[]
            allData = JSON.parse(fs.readFileSync('allData.json', 'utf8'));
            allData.push(data);
            fs.writeFileSync('allData.json', JSON.stringify(allData));

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
        const concatenatedValues=req.body["concatenatedValues"]
        const is_service_enabled=req.body["checking"];
        const ins='INSERT INTO device_management(device_name, device_mac_address, device_firmware_version,device_model,is_service_enabled)VALUES($1,$2,$3,$4,$5);'
        const values=[device_name,device_mac_address,device_firmware_version,device_model,is_service_enabled]
        const ins1='INSERT INTO network_protocol(client_id,username,password,host) VALUES ($1,$2,$3,$3)';
        const values1=[client_id,user_name,passowrd,mqtt_host];
        const ins2='INSERT INTO device_data_collection(device_parameters) VALUES ($1)';
        const values2=[concatenatedValues]

        //query to insert into database
        await pool.query(ins,values).then((res)=>{
            console.log(res)
        })
        await pool.query(ins1,values1).then((res)=>{
            console.log(res)
        })
        await pool.query(ins2,values2).then((res)=>{
            console.log(res)
        })
    } catch (err) {
        console.log(err)
    }
})


app.listen(4000,()=>{
    console.log("server is running on port 4000")
})