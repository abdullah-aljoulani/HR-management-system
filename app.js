
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
    max = 0;
    min = 0 ;
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
    return Math.random() * (max - min) + min;
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