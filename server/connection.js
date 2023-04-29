const express=require('express')
const pool=require('./database')
const cors=require('cors')

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
        const ins='INSERT INTO demo_manage(client_id, device_name, device_mac_address, device_firmware_version, mqtt_client_name, mqtt_host, user_name, password, device_model)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9);'
        const values=[client_id,device_name,device_mac_address,device_firmware_version,mqtt_client_name,mqtt_host,user_name,passowrd,device_model]

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