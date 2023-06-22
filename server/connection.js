const express = require('express')
const pool = require('./database')
const cors = require('cors')
const fs = require('fs');

const app = express()
app.use(cors())
app.use(express.json())


//GET REQUEST TO SHOW ALL THE DATA IN REACT PAGE
app.get("/user", async (req, res) => {
    try {
       const datas= await pool.query('SELECT * FROM device_management')
        res.json(datas.rows);
    } catch (err) {
        console.log(err)
    }
})


//PUT REQUEST TO UPDATE THE DATA IN DB
app.put("/user/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const {devicestatus}=req.body;
        console.log("ih")
        await pool.query('UPDATE device_management SET  device_status=$1 WHERE r_no=$2',[devicestatus,id])
    } catch (err) {
        console.log(err)
    }
})


//DELETE REQUEST TO DELETE THE DATA IN DB
app.delete("/user",async(req,res)=>{
    try {
        const datas=await pool.query('DELETE FROM device_management WHERE  r_no=$1',[r_no])
    } catch (err) {
        console.log(err)
    }
    
})


//PUT REQUEST TO STORE THE DATA FROM THE REACT TO DB
app.post("/user", async (req, res) => {
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
        const device_status=req.body["devicestatus"]
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

        //connection to device_management
        const ins='INSERT INTO device_management(device_status,device_name, device_mac_address, device_firmware_version,device_model,is_service_enabled)VALUES($1,$2,$3,$4,$5);'
        const values=[device_status,device_name,device_mac_address,device_firmware_version,device_model,is_service_enabled]

        //connection to network_protocol
        const ins1='INSERT INTO network_protocol(client_id,username,password,host) VALUES ($1,$2,$3,$3)';
        const values1=[client_id,user_name,passowrd,mqtt_host];

        //connection to device_data_collection
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


app.listen(4000, () => {
    console.log("server is running on port 4000")
})