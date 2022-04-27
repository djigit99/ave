const cards__info = [
    {
        price: 88.99,
        mphoto: "sells/photo_1.png",
        mphoto_b: "sells/photo_1_back.png",
    },
    {
        price: 47.5,
        mphoto: "sells/photo_2.png",
        mphoto_b: "sells/photo_2_back.png",
    },
    {
        price: 88.99,
        mphoto: "sells/photo_3_cut.png",
        mphoto_b: "sells/photo_3_cut_back.png",
    },
    {
        price: 69.95,
        mphoto: "sells/photo_4_cut.png",
        mphoto_b: "sells/photo_4_cut_back.png",
    },
    {
        price: 29.95,
        mphoto: "sells/photo_5.png",
        mphoto_b: "sells/photo_5_back.png",
    },
    {
        price: 34.79,
        mphoto: "sells/photo_6.png",
        mphoto_b: "sells/photo_6_back.png",
    },
];

const ff = function () {
    for (let i = 1; i <= 6; i++) {
        const mphoto = document.getElementById("sells_photo_" + i);
        const thumb_front_img = document.getElementById("thumb_front_" + i);
        const thumb_back_img = document.getElementById("thumb_back_" + i);
        const card__expanded = document.getElementById(`card-${i}__expanded`);

        thumb_front_img.addEventListener("click", function () {
            thumb_front_img.classList.add("thumb--active");
            thumb_back_img.classList.remove("thumb--active");

            // TODO: need to think how to build the image container for "wide" images
            mphoto.src = `images/${cards__info[i - 1].mphoto.replace(
                "_cut",
                ""
            )}`; // dirty hack.
        });

        thumb_back_img.addEventListener("click", function () {
            thumb_back_img.classList.add("thumb--active");
            thumb_front_img.classList.remove("thumb--active");

            mphoto.src = `images/${cards__info[i - 1].mphoto_b.replace(
                "_cut",
                ""
            )}`; // dirty hack.
        });

        card__expanded.addEventListener("click", function (event) {
            if (card__expanded !== event.target) return;

            modal.open(cards__info[i - 1]);
        });
    }
};

const modal__overlay = document.getElementById("modal__overlay");

modal__overlay.addEventListener("click", function (event) {
    if (
        modal__overlay !== event.target &&
        modal__overlay.firstElementChild !== event.target
    )
        return;

    modal.close();
});

ff();
