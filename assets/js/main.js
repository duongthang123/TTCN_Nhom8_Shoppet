

// toggle menu
const menu__mobile = document.getElementById("menu__mobile");
const list = document.getElementById("header__nav-list");


let isToggleOn = false;

menu__mobile.addEventListener("click", function() {
    list.classList.toggle("show__mobile");
    isToggleOn = !isToggleOn;
})


//hiển thị submenu
const menuParent = document.querySelector(".header__nav-parent");

menuParent.addEventListener("click", function(){
    list.classList.add("block");
});


// active category
// const categorys = document.querySelectorAll(".category__list .category__item_link");



// for(let i=0; i<categorys.length; i++) {
//     categorys[i].addEventListener("click", function(e){
//         e.preventDefault();
//         categorys.forEach((other) => {
//             other.classList.remove("category__item_link--active");
//         });
//         categorys[i].classList.add("category__item_link--active");
//     });
// }

// active menu

const menus = document.querySelectorAll(".header__nav-item");

// for(let i = 0; i< menus.length; i++) {
//     menus[i].addEventListener("click", function(e) {
    //         e.preventDefault();
    //         // e.defaultPrevented();
    //         menus.forEach((other) => {
        //             other.classList.remove("header__nav-item--active");
        //         });
        //         menus[i].classList.add("header__nav-item--active");
        //     })
        // }
        
    menus.forEach((menu) => {
        menu.addEventListener("click", function(e){
            // e.preventDefault();
            const menuLink = menu.querySelector(".header__nav-link");
            console.log(menuLink.href);
            
            menus.forEach((other) => {
                other.classList.remove("header__nav-item--active");
            });
            menu.classList.add("header__nav-item--active");
            window.location.href = menuLink.href;
    });
}); 


// model

const deleteItem = document.getElementById("delete");
console.log(deleteItem);

// deleteItem.addEventListener("click", () => {
//     console.log("1");
// });
const model = document.getElementById("model");
const closeModel = document.getElementById("close__model");
const modelContainer = document.getElementById("model__container");
function showModel() {
    model.classList.add("open");
}

function hideModel() {
    model.classList.remove("open");
}

deleteItem.addEventListener("click", showModel);

closeModel.addEventListener('click', hideModel);
model.addEventListener('click', hideModel);
modelContainer.addEventListener('click', (e)=> {
    e.stopPropagation();
})
