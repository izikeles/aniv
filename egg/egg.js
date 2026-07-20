const eggs=document.querySelectorAll(".egg");

const modal=document.querySelector(".modal");

const title=document.getElementById("monthTitle");

const text=document.getElementById("monthText");

const image=document.getElementById("monthImage");

const close=document.getElementById("close");

const memories={

January:{
text:"Our first month ❤️",
img:"images/jan.jpg"
},

February:{
text:"Valentine memories ❤️",
img:"images/feb.jpg"
},

March:{
text:"Fun adventures together.",
img:"images/mar.jpg"
},

April:{
text:"Laughs and dates.",
img:"images/apr.jpg"
},

May:{
text:"Every day with you is special.",
img:"images/may.jpg"
},

June:{
text:"Halfway through our first year!",
img:"images/jun.jpg"
},

"July ❤️":{
text:"Happy Anniversary ❤️",
img:"images/jul.jpg"
},

August:{
text:"New memories.",
img:"images/aug.jpg"
},

September:{
text:"Growing together.",
img:"images/sep.jpg"
},

October:{
text:"Spooky season together 🎃",
img:"images/oct.jpg"
},

November:{
text:"Thankful for you.",
img:"images/nov.jpg"
},

December:{
text:"Christmas together 🎄",
img:"images/dec.jpg"
}

};

eggs.forEach(egg=>{

egg.onclick=()=>{

let month=egg.dataset.month;

title.innerHTML=month;

text.innerHTML=memories[month].text;

image.src=memories[month].img;

modal.style.display="flex";

}

});

close.onclick=()=>{

modal.style.display="none";

}

window.onclick=(e)=>{

if(e.target==modal)

modal.style.display="none";

}