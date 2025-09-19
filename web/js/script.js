let topnav = document.querySelector(".topnav")
window.addEventListener("scroll",()=>{
    if(window.scrollY){
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



const favicon = document.createElement('link');
    favicon.rel = 'icon'; // Set the relationship to 'icon'
    favicon.type = 'image/png'; // Specify the type of the favicon
    favicon.href = 'web/images/dndylogo.png';
 document.head.appendChild(favicon);

let instagram=document.querySelectorAll(".bi-instagram")
instagram.forEach((insta)=>{
insta.addEventListener("click",()=>{
    window.open("https://www.instagram.com/dy_trending_collection/", "_blank");
})
})

let whatsapp=document.querySelectorAll(".bi-whatsapp")
whatsapp.forEach((wapp)=>{
wapp.addEventListener("click",()=>{
    window.open("https://wa.me/919818464679", "_blank");
})
})

let facebook=document.querySelectorAll(".bi-facebook")
facebook.forEach((fb)=>{
fb.addEventListener("click",()=>{
    window.open("https://www.fb.com", "_blank");
})
})

let twitter=document.querySelectorAll(".bi-twitter-x")
twitter.forEach((twit)=>{
twit.addEventListener("click",()=>{
    window.open("https://www.twitter.com", "_blank");
})
})



let call=document.querySelectorAll(".bi-telephone")
call.forEach((parent)=>{
let parentDiv = parent.parentElement
console.log(parentDiv);
parentDiv.style.cursor= "pointer"
parentDiv.addEventListener("click",()=>{
    window.location.href="tel:+919818464679"
})
})

let email=document.querySelectorAll(".bi-envelope")
email.forEach((mail)=>{
let parentDiv = mail.parentElement
console.log(parentDiv);
parentDiv.style.cursor= "pointer"
parentDiv.addEventListener("click",()=>{
     window.location.href = "mailto:info@d&ytrending.com"; 
})
})
