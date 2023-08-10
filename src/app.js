const express = require("express");
const app = express();
const path = require("path");

//para decirle donde se encuentran nuestro archivos estaticos
app.use(express.static("public"));
const port= process.env.PORT || 3002;
app.listen(port,()=> "Servidor escuchando en el puerto 3002");


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"));
});
app.get("/contacto",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/contacto.html"));
});