const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'tempo_iot',
<<<<<<< HEAD
  password: 'gt55tt44',
=======
  password: '12345',
>>>>>>> 47a46b42b6cc36f4d3bbf4bcf6a80766cb190ad5
  port: 5432,
})

module.exports=pool