const navbar = document.getElementById("navbar");
let activeItem = document.getElementById("introNavBar");

navbar.addEventListener("click",function(event){
    const clickedItem = event.target.closest(".nav-link");

    if(!clickedItem) return;

    activeItem.classList.remove("nav-link--active");
    
    clickedItem.classList.add("nav-link--active");
    activeItem = clickedItem;
});