window.onload = function(){

}

window.addEventListener('scroll',function(e){
    // 스크롤 바  최상단이 y좌표 0이다.
    let y = parseInt(window.scrollY);
    let pic = document.getElementById('pic');
    let menu = document.querySelector('#menu');
    console.log(y);
    const size = 1200;
    // if(y < 1*size){
    //     pic.src = 'img/big0.jpg';
    // }
    // if(y > 1*size){
    //     pic.src = 'img/big1.jpg';
    // }
    // if(y > 2*size){
    //     pic.src = 'img/big2.jpg';
    // }
    // if(y > 3*size){
    //     pic.src = 'img/big3.jpg';
    // }
    // if(y > 4*size){
    //     pic.src = 'img/big4.jpg';
    // }
    if(y>0){
        pic.src = 'img/big0.jpg';
        menu.style.background='black';

    }
    if(y<1200){
        pic.src = 'img/big0.jpg';
        menu.style.background='none';

    }
    if(y>1200){
        pic.src = 'img/big1.jpg';

    }
    if(y>2400){
        pic.src = 'img/big2.jpg';

    }
    if(y>3600){
        pic.src = 'img/big3.jpg';

    }
    if(y>4800){
        pic.src = 'img/big4.jpg';

    }
})