let color1 = document.querySelector(".Color1");
let color2 = document.querySelector(".Color2");

function Change()
{
    document.body.style.background =  "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
}

color1.addEventListener("input", Change);
color2.addEventListener("input", Change);