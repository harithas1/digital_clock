const date = document.getElementById("date")
const month = document.getElementById("month")
const year = document.getElementById("year")

const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second = document.querySelector("#second")


// days
const sun = document.getElementById("sun")
const mon = document.getElementById("mon")
const tue = document.getElementById("tue")
const wed = document.getElementById("wed")
const thu = document.getElementById("thu")
const fri = document.getElementById("fri")
const sat = document.getElementById("sat")


// ampm

const am = document.getElementById("am")
const pm = document.getElementById("pm")


let today = new Date()
date.innerText = today.getDate()
month.innerText = ((today.getMonth()+1)<10?"0":"")+(today.getMonth()+1)
year.innerText = (today.getFullYear())%2000

setInterval(()=>{
    let today= new Date();
    hour.innerHTML=(today.getHours()<10?"0":"")+today.getHours();
    minute.innerHTML=(today.getMinutes()<10?"0":"")+today.getMinutes();
    second.innerHTML=(today.getSeconds()<10?"0":"")+today.getSeconds();
},1000)



const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

function day(){
    if(today.getDay()==0){
        sun.click()
    }
    else if(today.getDay()==1){
        mon.click()
    }
    else if(today.getDay()==2){
        tue.click()
    }
    else if(today.getDay()==3){
        wed.click()
    }
    else if(today.getDay()==4){
        thu.click()
    }
    else if(today.getDay()==5){
        fri.click()
    }
    else if(today.getDay()==6){
        sat.click()
    }
}

day()




function amPm(){
    if(hour<12){
        am.click()
    }else{
        pm.click()
    }
}

amPm()









