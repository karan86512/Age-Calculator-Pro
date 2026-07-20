

"use strict";

const loader = document.getElementById("loader");

const themeBtn = document.getElementById("themeBtn");

const dobInput = document.getElementById("dob");
const todayInput = document.getElementById("today");

const calculateBtn = document.getElementById("calculateBtn");

const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


window.addEventListener("load", () => {

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 900);

});


const today = new Date();

todayInput.value = today.toISOString().split("T")[0];


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.className = "fa-solid fa-sun";

    } else {

        icon.className = "fa-solid fa-moon";

    }

});


calculateBtn.addEventListener("click", calculateAge);


function calculateAge() {

    if (!dobInput.value) {

        alert("Please select your Date of Birth.");

        return;

    }

    const birthDate = new Date(dobInput.value);

    const currentDate = new Date(todayInput.value);

    if (birthDate > currentDate) {

        alert("Birth date cannot be greater than current date.");

        return;

    }

    let years =
        currentDate.getFullYear() -
        birthDate.getFullYear();

    let months =
        currentDate.getMonth() -
        birthDate.getMonth();

    let days =
        currentDate.getDate() -
        birthDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        );

        days += previousMonth.getDate();

    }

    if (months < 0) {

        years--;

        months += 12;

    }

    yearsEl.textContent = years;
    monthsEl.textContent = months;
    daysEl.textContent = days;

    updateTimeDifference(birthDate, currentDate);

}


const totalDays = document.getElementById("totalDays");
const totalWeeks = document.getElementById("totalWeeks");
const totalMonths = document.getElementById("totalMonths");

const totalHours = document.getElementById("totalHours");
const totalMinutes = document.getElementById("totalMinutes");
const totalSeconds = document.getElementById("totalSeconds");

const birthdayCountdown =
document.getElementById("birthdayCountdown");

const birthDay =
document.getElementById("birthDay");

const westernZodiac =
document.getElementById("westernZodiac");

const chineseZodiac =
document.getElementById("chineseZodiac");


function updateTimeDifference(birthDate, currentDate){

const diff=currentDate-birthDate;

const seconds=Math.floor(diff/1000);

const minutes=Math.floor(seconds/60);

const hours=Math.floor(minutes/60);

const days=Math.floor(hours/24);

const weeks=Math.floor(days/7);

const months=Math.floor(days/30.4375);

hoursEl.textContent=hours.toLocaleString();

minutesEl.textContent=minutes.toLocaleString();

secondsEl.textContent=seconds.toLocaleString();

totalDays.textContent=days.toLocaleString();

totalWeeks.textContent=weeks.toLocaleString();

totalMonths.textContent=months.toLocaleString();

totalHours.textContent=hours.toLocaleString();

totalMinutes.textContent=minutes.toLocaleString();

totalSeconds.textContent=seconds.toLocaleString();

updateBirthdayCountdown(
birthDate,
currentDate
);

updateBirthDay(
birthDate
);

updateWesternZodiac(
birthDate
);

updateChineseZodiac(
birthDate
);

}

function updateBirthdayCountdown(
birthDate,
currentDate
){

let nextBirthday=new Date(

currentDate.getFullYear(),

birthDate.getMonth(),

birthDate.getDate()

);

if(nextBirthday<currentDate){

nextBirthday.setFullYear(

currentDate.getFullYear()+1

);

}

const diff=

nextBirthday-currentDate;

const daysLeft=

Math.ceil(

diff/

(1000*60*60*24)

);

birthdayCountdown.textContent=

daysLeft+" Days";

}


function updateBirthDay(date){

const names=[

"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"

];

birthDay.textContent=

names[

date.getDay()

];

}

function updateWesternZodiac(date){

const d=date.getDate();

const m=date.getMonth()+1;

let zodiac="";

if((m==1&&d>=20)||(m==2&&d<=18)) zodiac="Aquarius";
else if((m==2&&d>=19)||(m==3&&d<=20)) zodiac="Pisces";
else if((m==3&&d>=21)||(m==4&&d<=19)) zodiac="Aries";
else if((m==4&&d>=20)||(m==5&&d<=20)) zodiac="Taurus";
else if((m==5&&d>=21)||(m==6&&d<=20)) zodiac="Gemini";
else if((m==6&&d>=21)||(m==7&&d<=22)) zodiac="Cancer";
else if((m==7&&d>=23)||(m==8&&d<=22)) zodiac="Leo";
else if((m==8&&d>=23)||(m==9&&d<=22)) zodiac="Virgo";
else if((m==9&&d>=23)||(m==10&&d<=22)) zodiac="Libra";
else if((m==10&&d>=23)||(m==11&&d<=21)) zodiac="Scorpio";
else if((m==11&&d>=22)||(m==12&&d<=21)) zodiac="Sagittarius";
else zodiac="Capricorn";

westernZodiac.textContent=zodiac;

}


function updateChineseZodiac(date){

const animals=[

"Rat",
"Ox",
"Tiger",
"Rabbit",
"Dragon",
"Snake",
"Horse",
"Goat",
"Monkey",
"Rooster",
"Dog",
"Pig"

];

const year=date.getFullYear();

const index=(year-4)%12;

chineseZodiac.textContent=

animals[index];

}

const shareBtn = document.getElementById("shareBtn");
const printBtn = document.getElementById("printBtn");
const pdfBtn = document.getElementById("pdfBtn");
const toast = document.getElementById("toast");


function showToast(message){

    if(!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2500);

}


function saveDOB(){

    localStorage.setItem(

        "ageCalculatorDOB",

        dobInput.value

    );

}


window.addEventListener("DOMContentLoaded",()=>{

    const savedDOB=

    localStorage.getItem("ageCalculatorDOB");

    if(savedDOB){

        dobInput.value=savedDOB;

    }

});


calculateBtn.addEventListener("click",()=>{

    saveDOB();

});


async function shareResult(){

    const text = `
🎂 Age Calculator Result

Years : ${yearsEl.textContent}
Months : ${monthsEl.textContent}
Days : ${daysEl.textContent}

Western Zodiac : ${westernZodiac.textContent}
Chinese Zodiac : ${chineseZodiac.textContent}

Birthday In : ${birthdayCountdown.textContent}
`;

    if(navigator.share){

        try{

            await navigator.share({

                title:"Age Calculator Pro",

                text:text

            });

            showToast("Result Shared");

        }

        catch(err){

            console.log(err);

        }

    }else{

        navigator.clipboard.writeText(text);

        showToast("Copied to Clipboard");

    }

}


function printResult(){

    window.print();

}

function downloadPDF(){

    window.print();

}


shareBtn.addEventListener(

    "click",

    shareResult

);

printBtn.addEventListener(

    "click",

    printResult

);

pdfBtn.addEventListener(

    "click",

    downloadPDF

);


const savedTheme = localStorage.getItem("theme");

if(savedTheme==="light"){

    document.body.classList.add("light-mode");

    themeBtn.querySelector("i").className="fa-solid fa-sun";

}

themeBtn.addEventListener("click",()=>{

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");

    }else{

        localStorage.setItem("theme","dark");

    }

});


const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


let liveTimer=null;

function startLiveCounter(){

    if(liveTimer){

        clearInterval(liveTimer);

    }

    if(!dobInput.value){

        return;

    }

    liveTimer=setInterval(()=>{

        const birthDate=new Date(dobInput.value);

        const now=new Date();

        updateTimeDifference(

            birthDate,

            now

        );

    },1000);

}

calculateBtn.addEventListener(

    "click",

    startLiveCounter

);


function animateNumber(element,target){

    let start=0;

    const duration=500;

    const step=Math.max(1,Math.floor(target/30));

    const timer=setInterval(()=>{

        start+=step;

        if(start>=target){

            start=target;

            clearInterval(timer);

        }

        element.textContent=start.toLocaleString();

    },duration/30);

}


function checkBirthday(){

    if(!dobInput.value){

        return;

    }

    const birthDate=new Date(dobInput.value);

    const now=new Date();

    if(

        birthDate.getDate()===now.getDate()

        &&

        birthDate.getMonth()===now.getMonth()

    ){

        showToast("🎉 Happy Birthday!");

    }

}

window.addEventListener(

    "load",

    checkBirthday

);


dobInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        calculateBtn.click();

    }

});

todayInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        calculateBtn.click();

    }

});


window.addEventListener("load",()=>{

    if(dobInput.value){

        calculateAge();

        startLiveCounter();

    }

});


console.log(

"%cAge Calculator Pro V2",

"color:#00D4FF;font-size:18px;font-weight:bold;"

);

console.log(

"Developed Successfully 🚀"

);