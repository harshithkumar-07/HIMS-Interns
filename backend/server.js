import express from "express"
import "dotenv/config.js"
import cors from "cors"
import patient_feedback from "./routes/feedback.Routes.js"

import patient_complaints from "./routes/complaints.Routes.js"
const app=express()
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT || 3000

import con from "./db.js"

const app=express()
app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: false,
  }),
);
app.use(express.json())

app.use("/uploads", express.static("uploads"));

const PORT=process.env.PORT || 3000


app.use("/feedback",patient_feedback)
app.use("/complaints",patient_complaints)
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})