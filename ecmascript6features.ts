class Main
{
constructor()
{}
public utilFun()
{
let msg='Hello World';
const index=0;
let display=()=>{
console.log(`Line ${index} :: ${msg}`);
}
display();
}
}
let main = new Main();
main.utilFun();