import {Pool} from "pg"

const con=new Pool({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Karthik@9346",
    database:"patient_feedback"

    
})

con.connect()
.then(()=>{console.log("connected")})
.catch((err)=>{console.log(err)})

export default con;