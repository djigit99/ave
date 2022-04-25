const sells_block = document.querySelectorAll(".cards__item");


const photo5 = document.getElementById("sells_photo5");

const thumb_front_img = document.getElementById("thumb_front_5");
const thumb_back_img = document.getElementById("thumb_back_5");

thumb_front_img.addEventListener('click', function () {
    thumb_front_img.classList.add('thumb--active');
    thumb_back_img.classList.remove('thumb--active');

    photo5.src = "images/sells/photo_5.png";
});

thumb_back_img.addEventListener('click', function () {
    thumb_back_img.classList.add('thumb--active');
    thumb_front_img.classList.remove('thumb--active');
    
    photo5.src = "images/sells/photo_5_back.png";
});
