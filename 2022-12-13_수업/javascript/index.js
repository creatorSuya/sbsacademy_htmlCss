let y, pic, menu;
let at1_rightBtn, disp, at1_leftBtn, count=1, at1_pic;

window.onload=function() {
    at1_pic=document.getElementById("at1_pic");
    disp=document.querySelector(".disp");
    at1_rightBtn=document.querySelector(".at1_rightBtn");
    at1_rightBtn.addEventListener("click", function() {        
        count=count+1;  console.log(count);
        disp.innerHTML = count + " / 5";
        at1_pic.src="img/big"+count+".jpg";
    })
}
window.addEventListener("scroll",function() {
    y= parseInt( window.scrollY );
    console.log( y );
    pic=document.querySelector(".pic");
    menu=this.document.querySelector(".menu");
    if(y>0) {
        pic.scr="img/big1.jpg";
        menu.style.background = "black";
    }
    if(y<1200) {
        pic.src="img/big0.jpg";
    }
    if(y>1200) {
        pic.src="img/big2.jpg";
    }
    if(y>2400) {
        pic.src="img/big3.jpg";
    }
    if(y>3600) {
        pic.src="img/big4.jpg";
    }
    if(y>4800) {
        pic.src="img/big5.jpg";
    }
})