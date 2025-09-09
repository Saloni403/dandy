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

const dropList = document.querySelector(".menu .droplist");
const subList = document.querySelector(".menu .sublist");

dropList.addEventListener("click", () => {
  subList.classList.toggle("active");
});


function addToCart(){
  alert("Item is added to your cart")
  event.stopPropagation();
}
function addToWishlist(el, event){
    event.stopPropagation(); // prevent product redirect
    if(el.classList.contains("bi-heart")){
        el.classList.remove("bi-heart");
        el.classList.add("bi-heart-fill");
        el.style.color = "rgb(251, 4, 127)"; // fill color
        alert("Item is added to your wishlist")
    }
    else{
        el.classList.remove("bi-heart-fill");
        el.classList.add("bi-heart");
        el.style.color = ""; // reset color
        alert("Item is removed from your wishlist")
    }
}






