import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "flashcardsdb",
    password: "MahRei@43",
    port: 5432
})

pool
    .connect()
    .then(() => {
        console.log("Database is connected.")
    })
    .catch((error) => {
        console.error("Database failed to connect: " + error)
    })

export default {pool}