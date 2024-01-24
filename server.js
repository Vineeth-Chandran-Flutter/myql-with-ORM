import express from "express";
import userRoute from "./routes/user_route.js";
import sequelize from "./config/connect_db.js";

const app=express();

app.use(express.json());

app.use("/",userRoute)

app.listen(3000,async ()=>{
     console.log("server started");
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
});