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