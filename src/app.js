const express = require("express");
const app = express();
const path = require("path");

//para decirle donde se encuentran nuestro archivos estaticos
app.use(express.static("public"));
const port= process.env.PORT || 3003;
app.listen(port,()=> "Servidor escuchando en el puerto 3003");


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"));
});

app.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/registro.html"));
});
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"));
});