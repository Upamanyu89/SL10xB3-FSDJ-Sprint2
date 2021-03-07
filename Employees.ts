 class Employee{
	private email: string;
	private name: string;
	constructor(email: string,name:string)
	{
		this.email=email;
		this.name=name;
	}
	public setName(name:string):void
	{
		this.name=name;
	}
	public setEmail(email:string):void
	{
		this.email=email;
	}
	public getEmail():string
	{
		return this.email;
	}
	public getName():string
	{
		return this.name;
	}
	public display():void {
		console.log(`email ${this.email} :Name :${this.name}`);
	}
}
export default class Employees{
	private static employeeList: Employee[]=[];
	public static addEmployee(email: string,name:string)
	{
		let emp= new Employee(email,name);
		Employees.employeeList.push(emp);
		
	}
	public static getAllEmployees():Employee[]
	{
		return Employees.employeeList;
	}
	public static updateEmployee(email: string,name:string)
	{
		Employees.employeeList.filter(emp=> emp.getName()==name).map(emp=>{emp.setName(name);emp.setEmail(email)});
		
	}
	public static deleteEmployee(email: string,name:string)
	{
	Employees.employeeList = Employees.employeeList.filter(emp=> emp.getName()!=name);
		
	}
}