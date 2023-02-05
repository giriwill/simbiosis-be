import express from 'express';
import cors from 'cors';
import IjazahRoute from './routes/IjazahRoute.js'

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(IjazahRoute);

app.listen(5001, () =>  console.log("Server running on port 5001"));