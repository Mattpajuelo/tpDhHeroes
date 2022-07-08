const express = require('express'); 
const { normalize } = require('path');
let path = require('path')

const port=3030;
const app = express()

app.use(express.static(path.join(__dirname,'/DH-Heroes/public/')))

app.get('/', (req, res) => {  res.sendFile(path.join(__dirname,'/DH-Heroes/view','index.html') )})
app.get('/babbage', (req, res) => {  res.sendFile(path.join(__dirname,'/DH-Heroes/view','babbage.html') )})
app.get('/berners-lee', (req, res) => {  res.sendFile(path.join(__dirname,'/DH-Heroes/view','berners-lee.html') )})
app.get('/clarke', (req, res) => {  res.sendFile(path.join(__dirname,'/DH-Heroes/view','clarke.html') )})
app.get('/', (req, res) => {  res.sendFile(path.join(__dirname,'/DH-Heroes/view','index.html') )})
app.get('/', (req, res) => {  res.sendFile(path.join(__dirname,'/DH-Heroes/view','index.html') )})
app.get('/', (req, res) => {  res.sendFile(path.join(__dirname,'/DH-Heroes/view','index.html') )})
app.get('/', (req, res) => {  res.sendFile(path.join(__dirname,'/DH-Heroes/view','index.html') )})

app.listen(port, () => console.log("Servidor levantado correctamente"));
normalize