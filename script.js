let photos = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg"];
let slide = 0;


/**
 * render all images.
 * 
 */
function render() {
    let mainBodyArea = document.getElementById("mainBody");
    mainBodyArea.innerHTML = "";

    for (let i = 0; i < photos.length; i++) {
        const photoGalla = photos[i];

        mainBodyArea.innerHTML += /*html*/ `
        <img onclick="openImage(${i})" src="${photoGalla}" alt="">`;
    }
}


/**
 * zoom in the current image.
 * @param {number} i 
 * 
 */
function openImage(i) {
    document.getElementById("open").classList.remove("dNone");

    let showImage = document.getElementById("showImage");
    showImage.innerHTML = /*html*/ `
        <img class="closeIcon" onclick="closeImage()" src="img/x-mark.png" alt="">
        <div class="flex">
            <img class="arrowLeft" onclick="imageLeft(${i})"src="img/arrow-left.png" alt="">
            <img class="mainImage" id="imageSlide"src="${photos[i]}" alt="">
            <img class="arrowRight" onclick="imageRight(${i})" src="img/arrow-right.png" alt="">
        </div>`;
}


/**
 * close the current image.
 * 
 */
function closeImage() {
    document.getElementById("open").classList.add("dNone");
}


/**
 * image slide to right.
 * 
 */
function imageRight() {
    slide += 1;
    if (slide >= photos.length) {
        slide = 0;
    }
    document.getElementById("imageSlide").src = photos[slide];
}


/**
 * image slide to left.
 * 
 */
function imageLeft() {
    slide -= 1;
    if (slide >= photos.length)
        slide = 0;
    if (slide < 0)
        slide = photos.length - 1;
    document.getElementById("imageSlide").src = photos[slide];
}