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





// range price
    const rangeInputmax = document.getElementById('range1');
    const rangeOutputmax = document.getElementById('rangeValuemax');
    rangeOutputmax.textContent = "Min: 500 - Max: " + rangeInputmax.value;
    rangeInputmax.addEventListener('input', function () {
      rangeOutputmax.textContent ="Min: 500 - Max: " + this.value;
    });







     // filter 
document.querySelector(".bi-list-columns-reverse").addEventListener("click",()=>{
document.querySelector("#accordionExample").classList.toggle("filteropen")
})