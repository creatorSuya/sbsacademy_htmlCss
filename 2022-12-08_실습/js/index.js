let img1, img2, img3, img4, img5, img6;
let pic;
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
};
