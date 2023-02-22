import express from "express";
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/:file_name', (req, res) => {
    let {file_name}=req.params
    res.download(file_name)
})

app.listen(5000, () => { console.log("connected") })