
window.addEventListener('DOMContentLoaded', function () {
   
const carouselInner = document.querySelector(".carousel-inner");

for(let i = 2; i < 17 ; i++){
    // create new carousel item div
    var newCarouselItem = document.createElement("div");
    newCarouselItem.className = "carousel-item ";

    // create img tag for carousel item
    var newCarouselImg = document.createElement("img");
    newCarouselImg.className = "d-block w-100 carousel-img";         //set class name for img tag
    newCarouselImg.src = `./img/carousel/1 (${i}).jpg`;    //set src for img tag

    // append img to Item
    newCarouselItem.append(newCarouselImg);
    // append Item to carousel
    carouselInner.append(newCarouselItem)
}
  })