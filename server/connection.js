const express = require('express')
const pool = require('./database')
const cors = require('cors')
const fs = require('fs');
const app = express()
app.use(cors())
app.use(express.json())

// get data from device management page to device edit page
app.get('/edit_device_detials/:id', async (req, res) => {
    try {
        const { id } = req.params
        const datas = await pool.query(' SELECT * FROM device_management JOIN network_protocol ON device_management.device_id = network_protocol.device_id JOIN device_data_collection ON  device_management.device_id = device_data_collection.device_id WHERE device_management.r_no = $1', [id]);
        res.json(datas.rows);
        console.log(datas.rows)
    } catch (err) {
        console.log(err)
    }
});

// get data from device management page to device edit page
app.get('/edit_site_detials/:id', async (req, res) => {
    try {
        const { id } = req.params
        const datas = await pool.query('SELECT * FROM site_management WHERE site_management.r_no = $1', [id]);
        res.json(datas.rows);
    } catch (err) {
        console.log(err)
    }
});



//GET REQUEST TO SHOW ALL THE DATA IN REACT PAGE
app.get("/user", async (req, res) => {
    try {
        const datas = await pool.query('SELECT * FROM device_management ORDER BY r_no')
        res.json(datas.rows);
    } catch (err) {
        console.log(err)
    }
})


app.get("/network", async (req, res) => {
    try {
        const datas = await pool.query('SELECT * FROM network_protocol ORDER BY r_no')
        res.json(datas.rows);
    } catch (err) {
        console.log(err)
    }
})

//GET REQUEST TO SHOW ALL THE DATA IN REACT PAGE
app.get("/site", async (req, res) => {
    try {
        const sites = await pool.query('SELECT * FROM site_management ORDER BY r_no');
        res.json(sites.rows);
    } catch (err) {
        console.log(err);
    }
});


//remove duplicate values in site_company
app.get("/site_company", async (req, res) => {
    try {
        const query = "SELECT DISTINCT company_name FROM site_management";
        const companyNames = await pool.query(query);
        res.json(companyNames.rows);
    } catch (err) {
        console.log(err);
    }
});

//remove duplicate admin
app.get("/site_admin", async (req, res) => {
    try {
        const query = "SELECT new_site_admin_name, MAX(site_admin_email) AS site_admin_email FROM site_management GROUP BY new_site_admin_name;"
        const adminNames = await pool.query(query);
        res.json(adminNames.rows);
    } catch (err) {
        console.log(err);
    }
});

//distinct for device model drop down
app.get("/device_modeldata", async (req, res) => {
    try {
        const query = "SELECT DISTINCT device_model FROM device_management";
        const deviceModel = await pool.query(query);
        res.json(deviceModel.rows);
    } catch (err) {
        console.log(err);
    }
});

//distinct for device model drop down
app.get("/device_datedata", async (req, res) => {
    try {
        const query = "SELECT DISTINCT last_updated_on FROM device_management";
        const deviceDate = await pool.query(query);
        res.json(deviceDate.rows);
    } catch (err) {
        console.log(err);
    }
});

//distinct for device name drop down
app.get("/device_namedata", async (req, res) => {
    try {
        const query = "SELECT DISTINCT device_name FROM device_management";
        const deviceNames = await pool.query(query);
        res.json(deviceNames.rows);
    } catch (err) {
        console.log(err);
    }
});




//PUT REQUEST TO UPDATE THE DATA IN DB
app.put("/userdata/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { devicestatus } = req.body;
        await pool.query('UPDATE device_management SET  device_status=$1 WHERE r_no=$2', [devicestatus, id])
    } catch (err) {
        console.log(err)
    }
})
app.put("/edit_device_detials", async (req, res) => {
    try {
        const devicename = req.body["devicename"];
        const devicemodel = req.body["devicemodel"];
        const devicemacaddress = req.body["devicemacaddress"];
        await pool.query('UPDATE device_management SET device_name=$1, device_model=$2 WHERE device_mac_address=$3', [devicename,devicemodel,devicemacaddress])
    } catch (err) {
        console.log(err)
    }
})


app.put("/edit_site_detials", async (req, res) => {
    try {
    const company_name = req.body["company_name"];
    const site_name = req.body["site_name"];
    const site_location = req.body["site_location"];
    const site_address = req.body["site_address"]; 
        await pool.query('UPDATE site_management SET company_name=$1, site_name=$2,site_location=$3 WHERE site_address=$4', [company_name,site_name,site_location,site_address])
    } catch (err) {
        console.log(err)
    }
})

//PUT REQUEST TO UPDATE THE DATA IN DB
app.put("/sitedata/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { site_status } = req.body;
        // console.log("ih")
        await pool.query('UPDATE site_management SET  site_status=$1 WHERE r_no=$2', [site_status, id])
    } catch (err) {
        console.log(err)
    }
})



//DELETE REQUEST TO DELETE THE DATA IN DB
app.delete("/user", async (req, res) => {
    try {
        const datas = await pool.query('DELETE FROM device_management WHERE  r_no=$1', [r_no])
    } catch (err) {
        console.log(err)
    }

})


//PUT REQUEST TO STORE THE DATA FROM THE REACT TO DB
app.post("/user", async (req, res) => {
    try {

        //getting data for enabled srevice
        const data = req.body
        const enables = req.body["checking"]


        // mqtt connection
        if (enables === "true") {

            let topicname = req.body["devicemacaddress"]
            topicname = topicname.replace(/[:\-]/g, "_")

            //TAKE COPY of the file
            const fileName = topicname + '.js';
            const fileContent = fs.readFileSync('./Copying.js')
            const filePath = 'copy/' + fileName
            // write the file
            fs.writeFileSync(filePath, fileContent);

            let allData = []
            allData = JSON.parse(fs.readFileSync('allData.json', 'utf8'));
            allData.push(data);
            fs.writeFileSync('allData.json', JSON.stringify(allData));

        }


        //getting data from client side
        const client_id = req.body["clientid"]
        const device_name = req.body["devicename"]
        const device_status = req.body["devicestatus"]
        const device_mac_address = req.body["devicemacaddress"]
        const device_firmware_version = req.body["firmwareversion"]
        const mqtt_client_name = req.body["clientname"]
        const mqtt_host = req.body["host"]
        const user_name = req.body["username"]
        const password = req.body["password"]
        const device_model = req.body["devicemodel"]
        const topic_name = req.body["topicname"]
        const concatenatedValues = req.body["concatenatedValues"]
        const is_service_enabled = req.body["checking"];
        // console.log(user_name,password,mqtt_host)
        // console.log()


        //connection to device_management
        const ins = 'INSERT INTO device_management (device_name, device_mac_address, device_firmware_version, device_model, is_service_enabled) VALUES ($1, $2, $3, $4, $5) RETURNING device_id';
        const values = [device_name, device_mac_address, device_firmware_version, device_model, is_service_enabled];

        // Connection to network_protocol
        const ins1 = 'INSERT INTO network_protocol (device_id, client_id, username, password, host) VALUES ($1, $2, $3, $4, $5)';
        const values1 = [null, client_id, user_name, password, mqtt_host];

        //device_data_collection
        const ins2 = 'INSERT INTO device_data_collection(device_id,device_parameters) VALUES ($1,$2)';
        const values2 = [null,concatenatedValues]

        // Execute the first query to insert into device_management
        const result = await pool.query(ins, values);
        const device_id = result.rows[0].device_id;

        // Update the device_id value in the second query
        values1[0] = device_id;
        values2[0] = device_id;

        //  insert into network_protocol
        await pool.query(ins1, values1);

        //connection to device_data_collection
        await pool.query(ins2, values2)

    } catch (err) {
        console.log(err)
    }
})

//PUT REQUEST TO STORE THE DATA FROM THE REACT TO DB
app.post("/site", async (req, res) => {
    // Data for site_management
    const company_name = req.body["company_name"];
    const site_name = req.body["site_name"];
    const site_status = req.body["site_status"]
    const site_admin_email = req.body["site_admin_email"];
    const site_location = req.body["site_location"];
    const site_address = req.body["site_address"];
    const site_admin_name = req.body["site_admin_name"];
    const new_site_admin_name = req.body["new_site_admin_name"]; // Corrected variable name
    const site_id = req.body["site_id"];
    const industry = req.body["industry"];
    // console.log(company_name);

    // Connection to Site_management
    const ins3 = 'INSERT INTO site_management(company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    const values3 = [company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry];

    // Query to insert into database
    try {
        const result = await pool.query(ins3, values3);
        console.log(result);
        res.status(200).json({ message: "Site data inserted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});



app.listen(4000, () => {
    console.log("server is running on port 4000")
})