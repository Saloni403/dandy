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