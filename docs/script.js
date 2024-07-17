let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
}

/* let carItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    carItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
} */

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    /* carItem.classList.remove('active'); */
}

/* window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
} */

let list = document.getElementsByClassName("vertical-list")
let container = document.getElementsByClassName("containers")

for(i = 0; i < container.length; i++){
    console.log(container[i])
}

for (let i = 0; i < list.length; i++) { 
    list[i].addEventListener("click", function () {
        hideAllPageContents();
        clearAllNavItemSelection();
        container[i].style.display = 'block';
 });
    
}

function hideAllPageContents() {
    for (let i = 0; i < container.length; i++) {
            container[i].style.display = 'none';
    }
}

function clearAllNavItemSelection() {
    for (let i = 0; i < list.length; i++) {
        list[i].className = 'vertical-list';
    } 
}


//Products

let list2 = document.getElementsByClassName("vertical-list2")
let container2 = document.getElementsByClassName("containers2")

for(let p = 0; p< list2.length; p++){
    list2[p].addEventListener("click", function(){
        clearAllNavItemSelection2();
        hideAllProductsContents();
        container2[p].style.display ="block"
    })
}


function hideAllProductsContents() {
    for (let p = 0; p < container2.length; p++) {
         container2[p].style.display = 'none'
    }
    } 

function clearAllNavItemSelection2() {
        for (let i = 0; i < list2.length; i++) {
            list2[i].className = 'vertical-list2';
        } 
    }
//viendo el poder del query selector