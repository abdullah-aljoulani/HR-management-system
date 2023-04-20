'use strict'

let newArr = []

function getItems() {
    let loc = localStorage.getItem("allEmployee")

        newArr = JSON.parse(loc)

    
}
getItems()


const sumNums = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        sum += arr[i].Salary
    }


    return sum ;
}


function avarSalery(arr){

if (sumNums() == 0){
    return 0
}

    return sumNums()/arr.length ;

}




function render() {
    const container = document.getElementById("tableE")
    container.innerHTML = "";


    const firstChild = document.createElement("div")
    container.appendChild(firstChild)
    firstChild.classList.add("firstChild")

    //table
    const NewTable = document.createElement("table")
    firstChild.appendChild(NewTable)
    NewTable.setAttribute("border", "5")
    NewTable.setAttribute("width", "100%")


    //tr
    const tREow = document.createElement("tr")
    NewTable.appendChild(tREow)
    tREow.classList.add("trRow")

    //th
    const TH1 = document.createElement("th")
    tREow.appendChild(TH1)
    TH1.textContent = "Department"

    const TH2 = document.createElement("th")
    tREow.appendChild(TH2)
    TH2.textContent = "Number employees"

    const TH3 = document.createElement("th")
    tREow.appendChild(TH3)
    TH3.textContent = "Average salary"

    const TH4 = document.createElement("th")
    tREow.appendChild(TH4)
    TH4.textContent = "Total salary"


    let totalSalaryAd = 0;
    let numberOfEmpAd = 0;

    let totalSalaryMa = 0;
    let numberOfEmpMA = 0;

    let totalSalaryDv = 0;
    let numberOfEmpDv = 0;

    let totalSalaryFi = 0;
    let numberOfEmpFi = 0;



for (let i=0 ; i < newArr.length ; i++){

if(newArr[i].Department ==="Administration" ){

    totalSalaryAd += newArr[i].Salary;
    numberOfEmpAd ++


}else if (newArr[i].Department === "Marketing"){
    totalSalaryMa += newArr[i].Salary;
    numberOfEmpMA ++

}else if (newArr[i].Department === "Development"){

    totalSalaryDv += newArr[i].Salary;
    
    numberOfEmpDv++

}else if (newArr[i].Department === "Finance"){

    totalSalaryFi += newArr[i].Salary;
    
    numberOfEmpFi ++
}

    }


    let avaAD = totalSalaryAd/numberOfEmpAd

    if (Number.isNaN(avaAD))
    {
        avaAD = 0
    }

    const Administration = document.createElement("tr")
    NewTable.appendChild(Administration)

    const Administration2 = document.createElement("td")
    Administration.appendChild(Administration2)
        Administration2.textContent = "Administration"


    const adArr2 = document.createElement("td")
    Administration.appendChild(adArr2)
    
    adArr2.textContent =numberOfEmpAd


    const adArr3 = document.createElement("td")
    Administration.appendChild(adArr3)
    adArr3.textContent = avaAD


    const adArr4 = document.createElement("td")
    Administration.appendChild(adArr4)
    adArr4.textContent =totalSalaryAd
    


let avaMa = totalSalaryMa/numberOfEmpMA
    
if (Number.isNaN(avaMa))
{
    avaMa = 0
}


    const Marketing = document.createElement("tr")
    NewTable.appendChild(Marketing)

    const Marketing2 = document.createElement("td")
    Marketing.appendChild(Marketing2)
    Marketing2.textContent = "Marketing"



    const Marketing3 = document.createElement("td")
    Marketing.appendChild(Marketing3)
    Marketing3.textContent =numberOfEmpMA

    const Marketing4 = document.createElement("td")
    Marketing.appendChild(Marketing4)

    Marketing4.textContent = avaMa


    const Marketing5 = document.createElement("td")
    Marketing.appendChild(Marketing5)

    Marketing5.textContent =totalSalaryMa



    let avaDe = totalSalaryDv/numberOfEmpDv
    if (Number.isNaN(avaDe))
    {
        avaDe = 0
    }
    const devlo = document.createElement("tr")
    NewTable.appendChild(devlo)

    const devlo2 = document.createElement("td")
    devlo.appendChild(devlo2)
    devlo2.textContent = "Development"


    const devlo3 = document.createElement("td")
    devlo.appendChild(devlo3)
    devlo3.textContent =numberOfEmpDv

    const devlo4 = document.createElement("td")
    devlo.appendChild(devlo4)
    devlo4.textContent = avaDe


    const devlo5 = document.createElement("td")
    devlo.appendChild(devlo5)
    devlo5.textContent =totalSalaryDv


    let avafi= totalSalaryFi/numberOfEmpFi
    if (Number.isNaN(avafi))
    {
        avafi = 0
    }
    const Finance = document.createElement("tr")
    NewTable.appendChild(Finance)

    const Finance2 = document.createElement("td")
    Finance.appendChild(Finance2)
    Finance2.textContent = "Finance"




    const Financ3 = document.createElement("td")
    Finance.appendChild(Financ3)
    Financ3.textContent =numberOfEmpFi


    const Finance4 = document.createElement("td")
    Finance.appendChild(Finance4)
    Finance4.textContent = avafi

    const Finance5 = document.createElement("td")
    Finance.appendChild(Finance5)

    Finance5.textContent =totalSalaryFi


    



    const Total = document.createElement("tr")
    NewTable.appendChild(Total)

    const Total2 = document.createElement("td")
    Total.appendChild(Total2)
    Total2.textContent = "Total "



    const Total3 = document.createElement("td")
    Total.appendChild(Total3)
    Total3.textContent = (numberOfEmpAd + numberOfEmpMA + numberOfEmpDv + numberOfEmpFi)
    


    const Total4 = document.createElement("td")
    Total.appendChild(Total4)
    Total4.textContent = (avaAD + avaMa +avaDe +avafi)/newArr.length

    const Total5 = document.createElement("td")
    Total.appendChild(Total5)

Total5.textContent = (totalSalaryAd +totalSalaryMa +totalSalaryDv +totalSalaryFi)

}

render();