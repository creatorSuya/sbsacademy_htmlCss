let img1, img2, igm3, img4, img5, img6;
let pic;

let add, sub, count=0, counter;  // 전역변수
let ok;



window.onload=function() {
    pic=document.getElementById("pic");
    img1=document.getElementById("img1");
    img2=document.getElementById("img2");
    img3=document.getElementById("img3");
    img4=document.getElementById("img4");
    img5=document.getElementById("img5");
    img6=document.getElementById("img6");

    img1.onclick=function() { pic.src="img/img1.png";  }
    img2.onclick=function() { pic.src="img/img2.png";  }
    img3.onclick=function() { pic.src="img/img3.png";  }
    img4.onclick=function() { pic.src="img/img4.png";  }
    img5.onclick=function() { pic.src="img/img5.png";  }
    img6.onclick=function() { pic.src="img/img6.png";  }

    
    add=document.getElementById("add");
    counter=document.getElementById("counter");
    add.onclick=function() {        
        // console.log( count );
        count = count + 1;
        counter.innerHTML = count;
    }
/*
    sub.onclick=function() {  // 익명함수(함수에 이름이 없는 것)
        count=count-1;
        counter.innerHTML = count;
    }
*/
    sub=document.getElementById("sub");
    sub.addEventListener("click", sub_func);

    ok=document.getElementById("ok");
    ok.addEventListener("click", ok_func);
    
}
function sub_func() {   // 함수 선언(정의)
    count=count-1;
    counter.innerHTML = count;
}
function ok_func() {
    
}