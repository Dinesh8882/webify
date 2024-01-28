function menu(){
let nav1 = document.querySelector(".navbar1")
let btn = document.querySelector(".ri-menu-line")
let navlist = document.querySelector(".nav-list1")
let bool = 0;
btn.addEventListener("click",function(){
        if(bool === 0){
            nav1.style.height = "200px"
            bool = 1;
        }
        else if(bool === 1){
            nav1.style.height = "0px"
            bool = 0;
        }
})
}
function count(i,a){
    let h1 = document.querySelectorAll(".boxright .box h1");
    let cout = 0;
    let couting = setInterval(() => {
        cout = cout+2;
        h1[i].innerHTML = cout + "+";
        if(cout == a){
            clearInterval(couting)
        }
    }, 1);
}
menu();
count(0,900)
count(1,500)
count(2,770)
count(3,1000)























