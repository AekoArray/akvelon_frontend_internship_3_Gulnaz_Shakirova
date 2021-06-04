let index = 2;
const images = ["https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg",
"https://i.pinimg.com/originals/5a/df/1b/5adf1b97742a65d0a3c98299c545570b.jpg",
"https://st.depositphotos.com/1899425/1623/i/600/depositphotos_16232649-stock-photo-moraine-lake-sunrise-colorful-landscape.jpg",
"https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg",
"https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"];

let img = document.getElementById("image");
let rightButton = document.getElementsByTagName("button")[0];
let leftButton = document.getElementsByTagName("button")[1];

img.src = images[index];

function rightClick() {
    index++;
    if(index >= images.length - 1){
        rightButton.style.visibility = "hidden";
    } else {
        rightButton.style.visibility = "visible";
        leftButton.style.visibility = "visible";
    }
    img.src = images[index];
}

function leftClick() {
    index--;
    if(index <= 0){
        leftButton.style.visibility = "hidden";
    } else {
        rightButton.style.visibility = "visible";
        leftButton.style.visibility = "visible";
    }
    img.src = images[index];
}
