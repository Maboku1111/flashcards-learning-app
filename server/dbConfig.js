import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "flashcardsdb",
    password: "MahRei@43",
    port: 5432
})

client 
    .connect()
    .then(() => {
        console.log('Databse is connected.');
    })
    .catch((error) => {
        console.error('Databse connection failed: ' + error);
    })

export {client};