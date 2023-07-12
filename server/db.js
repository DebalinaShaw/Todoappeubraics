const Pool = require("pg").Pool;

const pool = new Pool ({ 
    user: "perntodo_imvj_user",
    password: "EtJkolpp1daMj45eMOHupp7FIonGRK17",
    host: "dpg-cin4c415rnur6sc0eqp0-a",
    port: 5432,
    database: "perntodo_imvj"
});

module.exports = pool;