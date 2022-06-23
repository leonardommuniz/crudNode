import express  from "express";
var app = express()

import { allRoutes } from "./routes.js";

const port = 3000

app.use(express.json())
app.use(allRoutes)

app.use((req, res, next) => {
  console.log('LOGGED')
  next()
})


app.listen(port)