import express from "express"
import { routeUser } from "./Routes/categories.routes"

const app = express()
app.use(express.json())

app.use('', routeUser)

export default app
