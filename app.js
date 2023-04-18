'use strict'

function EmployeeInfo (EmployeeID,FullName, Department,
    Level,ImageURL){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
}


let person1 = new EmployeeInfo (1000,"Ghazi samer","Administration","Senior","")
let person2 = new EmployeeInfo (1001,"Lana Ali","Finance","Senior","")
let person3 = new EmployeeInfo (1002,"Tamara Ayoub","Marketing","Senior","")
let person4 = new EmployeeInfo (1003,"Safi Walid","Administration","Mid-Senior","")
let person5 = new EmployeeInfo (1004,"Omar Zaid","Development","Senior","")
let person6 = new EmployeeInfo (1005,"Rana Saleh","Development","Junior","")
let person7 = new EmployeeInfo (1006,"Hadi Ahmad","Finance","Mid-Senior","")

EmployeeInfo.prototype.Salary = function(){
    let max = 0;
    let min = 0 ;
    if(this.Level === "Senior"){
        max=2000
        min=1500
    }else if(this.Level === "Mid-Senior"){
        max=1500
        min=1000
    }else if (this.Level === "Junior"){
        max=1000
        min=500
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function netSalary(salary){
    return salary*0.075
}


EmployeeInfo.prototype.information= function(){
    let info =`EmployeeID ${this.EmployeeID} , the full Name is ${this.FullName} , Department : ${this.Department} ,
    the level is ${this.Level}, and the salary is ${this.Salary()}`
    return info
}

EmployeeInfo.prototype.nameSalary = function(){
    let p =`${this.FullName} and the salary is ${this.Salary()}`
    return p
}

let arrEmployee = [person1,person2,person3,person4,person5,person6,person7]

for (let i = 0; i < arrEmployee.length ; i ++ ){
    const para = document.createElement("p");
    para.innerText = arrEmployee[i].information()
    document.getElementById("employee-object").appendChild(para);

    const para2 = document.createElement("p");
    para2.innerText = arrEmployee[i].nameSalary()
    document.getElementById("employee-object").appendChild(para2);

    const para3 = document.createElement("p");
    para3.innerText = `the net salary for this employee is :- ${netSalary(arrEmployee[i].Salary())}`
    document.getElementById("employee-object").appendChild(para3);

    const br = document.createElement("br");
    document.getElementById("employee-object").appendChild(br);

    const hr = document.createElement("hr");
    document.getElementById("employee-object").appendChild(hr);
}



function Employee( FullName, Department, Level, ImageURL ) {
    this.id = 0
    this.FullName = FullName
    this.Department = Department
    this.level = Level
    this.ImageURL = ImageURL
    this.Salary = 0
    }


    Employee.prototype.calculateSalary = function () {
    if (this.level === "Junior") {
      this.Salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500) * (1 - 0.07);
    }

    else if (this.level === "Mid-Senior") {
      this.Salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000) * (1 - 0.07);
    }
    if (this.level === "Senior") {
      this.Salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500) * (1 - 0.07);
    }
    return this.Salary
    }

    Employee.prototype.render = function () {

    const container = document.getElementById("info")

    const divEle = document.createElement("div")
    container.appendChild(divEle)

    const theName = document.createElement("h1")
    divEle.appendChild(theName)
    theName.textContent = this.FullName

    const newImg = document.createElement("img")
    divEle.appendChild(newImg)
    newImg.setAttribute("src", this.ImageURL)


    const deparTment = document.createElement("p")
    divEle.appendChild(deparTment)
    deparTment.textContent = this.Department

    const level = document.createElement("p")
    divEle.appendChild(level)
    level.textContent = this.level

    const theSalary = document.createElement("p")
    divEle.appendChild(theSalary)
    theSalary.textContent =`salary is : ${Math.floor(this.Salary)}$`

    const theId = document.createElement("p")
    divEle.appendChild(theId)
    theId.textContent = `id is : ${this.id}`
    }

    Employee.prototype.idNum = function(){

    this.id =Math.floor(Math.random()*100)
    
    return this.id
    }

    function addNewInfo (event){
    event.preventDefault();

    let newNAme =event.target.fullname.value
    let dep = event.target.Department.value
    let lev = event.target.level.value
    let Imagg = event.target.imgUrl.value 




    const final= new Employee (newNAme,dep,lev,Imagg)

    final.calculateSalary()
    final.idNum()
    final.render()

}

    const fullInformation = document.getElementById("employeeData")
    fullInformation.addEventListener("submit", addNewInfo);


