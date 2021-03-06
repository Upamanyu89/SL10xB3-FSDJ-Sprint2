import express = require('express');
import bodyParser = require('body-parser');
const app: express.Application = express();
const port=3000;
app.get("/",(req,res)=>{
	res.send("Hello World");
})
app.listen(port,function(){
	console.log(`app is started on ${port}`);
})