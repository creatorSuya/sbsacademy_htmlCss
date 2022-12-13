let img1, img2, img3, img4, img5, img6;
let pic;
let add,
  sub,
  count = 0,
  counter,
  ok;

window.onload = () => {
  pic = document.getElementById("pic");
  img1 =
    document.getElementById("img1");
  img1.onclick = (e) => {
    pic.src = "img/pizza1.png";
  };
  img2 =
    document.getElementById("img2");
  img2.onclick = (e) => {
    pic.src = "img/pizza2.png";
  };
  img3 =
    document.getElementById("img3");
  img3.onclick = (e) => {
    pic.src = "img/pizza3.png";
  };
  img4 =
    document.getElementById("img4");
  img4.onclick = (e) => {
    pic.src = "img/pizza4.png";
  };
  img5 =
    document.getElementById("img5");
  img5.onclick = (e) => {
    pic.src = "img/pizza5.png";
  };
  img6 =
    document.getElementById("img6");
  img6.onclick = (e) => {
    pic.src = "img/pizza6.png";
  };

  add = document.getElementById("add");
  sub = document.getElementById("sub");
  counter =
    document.getElementById("counter");
  counter.innerHTML = 0;

  let addClick = function (e) {
    count++;
    counter.innerHTML = 1;
  };

  let subClick = function (e) {
    count--;
    counter.innerHTML = count;
  };

  add.addEventListener(
    "click",
    addClick
  );
  add.addEventListener(
    "click",
    subClick
  );
  const ok_func = () => {
    alert("주문완료");
  };
  ok = document.getElementById("ok");
  ok.addEventListener("click", () => {
    ok_func();
  });
};
