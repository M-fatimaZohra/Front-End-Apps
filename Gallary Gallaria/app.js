let galleryItems = document.querySelectorAll(".main-gallery .img-item");
let galleryPreview = document.querySelectorAll(
  ".main-gallery .img-item .img-preview"
);
let image = document.querySelector(".open-image #display");
let closeb = document.querySelector("#close-button");
let next = document.querySelector("#next");
let previous = document.querySelector("#previous");
let imageName = document.querySelector(".name");


let currentIndex = 0;

galleryPreview.forEach((element) => {
  //urls
  element.addEventListener("click", () => {
    currentIndex = Array.from(galleryPreview).indexOf(element);
    console.log("current: " + currentIndex);
    let object = element;
    //  console.log( object)
    //   console.log(element.src)

    let imgDir = object.src; // real image
    let imgName = object.alt; //alt text or ve can use as image name
      imageName.textContent = imgName;
    document.querySelector(".data").style.visibility ="visible"

    document.querySelector(".preview-box").style.visibility = "visible";

    image.src = imgDir;
    image.alt = imgName;
  

   
  });
});

closeb.addEventListener("click", () => {
  document.querySelector(".preview-box").style.visibility = "hidden";
  document.querySelector(".data").style.visibility ="hidden"
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryPreview.length;
  let nextObject = galleryPreview[currentIndex];

  let imgDir = nextObject.src;
  let imgName = nextObject.alt;
   imageName.textContent = imgName;

  image.src = imgDir;
  image.alt = imgName;
});

previous.addEventListener("click", () => {
  currentIndex = (currentIndex - 1) % galleryPreview.length;

  let nextObject = galleryPreview[currentIndex];
 
  if (currentIndex < 0) {
    document.querySelector(".preview-box").style.visibility = "hidden";
    document.querySelector(".data").style.visibility ="hidden"
  }

  let imgDir = nextObject.src;
  let imgName = nextObject.alt;
imageName.textContent = imgName;

  image.src = imgDir;
  image.alt = imgName;
});
