let navItems = document.querySelectorAll(".nav-items");

for (let i = 0; i < navItems.length; i++) {
    navItems[0].style.backgroundColor = "#cf6fc1";
    navItems[1].style.backgroundColor = "#6db4c4";
    navItems[2].style.backgroundColor = "#4876c0";
    navItems[3].style.backgroundColor = "#c55050";
    navItems[4].style.backgroundColor = "#fff";
}

let inp = document.querySelectorAll(".block-input");
let p = document.querySelectorAll(".block-p");

for (let i = 0; i < inp.length; i++) {
        inp[i].addEventListener("blur", function(){
            inp[i].style.display = "none";
            p[i].innerHTML = inp[i].value;
        })  
}

// let pages = document.querySelectorAll(".s4-pages");

// for (let i = 0; i < pages.length; i++) {
//     pages[i].addEventListener("click", function(){
//         pages[i].style.display = "flex";
//         pages[i].style.justifyContent = "center";
//         pages[i].style.columnGap = "10px";
//         pages[i].style.backgroundColor = "white"
//         pages[i].style.width = "40px";
//         pages[i].style.height = "5px";
//     })
// }

let a = document.querySelector(".section1-a");

a.addEventListener("click", function(e){
    a.style.top = "0px";
    a.style.left = "30px"
    e.preventDefault();
});
a.addEventListener("dblclick", function(e){
    a.style.top = "153px";
    a.style.left = "30px"
    e.preventDefault();
});


let btn = document.querySelector(".section5-btn");
let inps = document.querySelectorAll(".section5-inps");
let s5Div = document.querySelector(".section5-div");

btn.addEventListener("click", function(e){
    e.preventDefault();
    for (let i = 0; i < inps.length; i++) {
        if (inps.value !== "") {
            s5Div.style.left = "50%";
        }
    }
});

s5Div.addEventListener("click", function(){
    s5Div.style.left = "150%";
});