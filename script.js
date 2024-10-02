function calculateAge(){
    const dobInput= document.getElementById('dob').value;
    if(dobInput==='')
    {
        document.getElementById('result').innerHTML= 'Please Select valid date';
        return;
    }

const dob = new Date(dobInput);
const today = new Date();

let ageYears = today.getFullYear()-dob.getFullYear();
let ageMonths = today.getMonth()-dob.getMonth();
let ageDays = today.getDate()-dob.getDate();

if(ageMonths<0)
{
    ageYears--;
    ageMonths+=12;
}
if(ageDays<0){
    ageMonths--;
    const prevMonth=new Date(today.getFullYear(),today.getMonth(),0);
    ageDays += prevMonth.getDate();
}
document.getElementById('result').innerHTML=
`you are ${ageYears}  years,${ageMonths} Months and  ${ageDays} days old`;
}