let Employee=[
    {
    empId:"Cap1",
    empName:"Sivaji",
    empPhoto:"https://images.unsplash.com/photo-1518965539400-77d851d65c43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
    empSalary:200000,
    empDesignation:"NodeJs Developer",
    empExp:"5 Years",
    empCity:"Bangalore",
    empSkils:["java","css","html","python","c"],
    },
    {
    empId:"Cap2",
    empName:"Sivaji kadapala",
    empPhoto:"https://images.unsplash.com/photo-1611356243000-7a4107a2d989?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=298&q=80",
    empSalary:300000,
    empDesignation:"ExpressJs Developer",
    empExp:"3 Years",
    empCity:"chennai",
    empSkils:["java","css","html","python","c","R","SQL"],
    },
];

 let template=document.getElementById("dynamiData");
 let output=[];
 Employee.forEach(function(emp){
     output += `
     <tr>
      <td>${emp.empId}</td>
        <td>${emp.empName}</td>
        <td><img src=${emp.empPhoto}/></td>
        <td>${emp.empSalary}</td>
        <td>${emp.empExp}</td>
        <td>${emp.empSkils}</td>
     </tr>
     `;
    });
dynamicData.innerHTML=output;


let lang={
    1:"java",
    2:"javaScript",
}
console.log(lang[1]);//if it is number use array literals
//Inside an5
let Test={
    for:"Iam for",
     if:"Iam if",
      while:"Iam while",
       try:"Iam try"
}
console.log(Test);
let age=20;
let name1="sivaji kadapala";

let salary=20000;

let designation="java developer";
let user={
    name:name1,
    age,
    salary,
    designation:"capgemini",
    name:"siva"

};
//Overridden the properties
user.name="Ravi";
user.salary=3000;
console.log(user)
//constructor way to creation the object values
let user1=new Object();
user1.new="Sivaji";
console.log(user1);
//you can use through function way to create object
function User2(name,age,designation,salary,company){
    this.name=name;
     this.age=age;
      this.designation=designation;
       this.company=company;
        this.salary=salary;


}
let sivaji=new User2("sivaji",24,"fullStack developer","TCS",400000);
console.log(sivaji);
//
function car(company,Mileage,Transmission,ABS,FogLamps,PowerWindows){
    this.company=company;
     this.Mileage=Mileage;
      this.Transmission=Transmission;
       this.ABS=ABS;
        this.FogLamps=FogLamps;
        this.PowerWindows=PowerWindows;


}
let Hyundai=new car("Hyundai",100,"Automatic","yes","Front","Front and Rear");
console.log(Hyundai);
let r={...Hyundai,...sivaji};
console.log(r)


