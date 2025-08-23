import dotenv from "dotenv";
dotenv.config();

import { app } from "./app";
import connectDB from "./utils/db";

app.listen(process.env.PORT, () => {
  console.log(`Express running with PORt ${process.env.PORT}`);
  connectDB();
});
