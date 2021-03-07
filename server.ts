import express = require('express');
import bodyParser = require('body-parser');
import Employees from './Employees';
const app: express.Application = express();
const port=3000;
app.use(bodyParser.json());
app.get("/",(req,res)=>{
	res.send("Hello World");
})
app.get('/employees',(req,res)=>{
	res.json({'employees':Employees.getAllEmployees()});
})
app.post('/employees',(req,res)=>{
	
	Employees.addEmployee(req.body['email'],req.body['name']);
	res.json({'msg':'Successfully Added'});
})
app.put('/employees',(req,res)=>{
	
	Employees.updateEmployee(req.body['email'],req.body['name']);
	res.json({'msg':'Successfully updated'});
})
app.delete('/employees',(req,res)=>{
    Employees.deleteEmployee(req.body['email'],req.body['name']);
    res.json({ 'msg': 'Successfully deleted'});
});
app.listen(port,function(){
	console.log(`app is started on ${port}`);
})