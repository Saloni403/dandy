let topnav = document.querySelector(".topnav")
window.addEventListener("scroll",()=>{
    if(window.scrollY > 30){
        topnav.classList.add("scrolled")
    }
    else{
         topnav.classList.remove("scrolled")
    }
})
document.querySelector(".menuclose").addEventListener("click",()=>{
document.querySelector(".menu").style.right="-350px"
})
document.querySelector(".menuopen").addEventListener("click",()=>{
    document.querySelector(".menu").style.right="0"
})

const dropList = document.querySelector(".menu .droplist");
const subList = document.querySelector(".menu .sublist");

dropList.addEventListener("click", () => {
  subList.classList.toggle("active");
});

// document.querySelector(".bi-list-columns-reverse").addEventListener("click",()=>{
// document.querySelector("#accordionExample").classList.toggle("filteropen")
// })
// document.querySelector(".menuopen").addEventListener("click",()=>{
//     document.querySelector(".menu").style.right="0"
// })



let checkbox = document.getElementById("bulkorder")
let wholesalepack = document.getElementById("wholesalepack")
let retailpack = document.getElementById("retailpack")
checkbox.addEventListener("change",function(){
    if(this.checked){
wholesalepack.style.display="block"
retailpack.style.display="none"
console.log("checked",retailpack);

    }
    else{
        wholesalepack.style.display="none"
        retailpack.style.display="block"
        console.log("unchecked",retailpack);
    }
})