// CYCLE IMAGES

function start() {
    let rotator = document.getElementById('rotator'); 
    
    console.log(rotator);
    let images = [];
    let img1 = document.images[1];
    let img2 = document.images[2];
    let img3 = document.images[3];
    let img4 = document.images[4];
    images.push(img1, img2, img3, img4);
    console.log(rotator.src);
    let index = 0;
    let changeImage = function() {
        let length = images.length;
        rotator.src = images[index].src;
        index++;
        if (index == length) {
            index = 0;
        }
    }
    setInterval(changeImage, 3000);
}    
window.onload=function(){start()};

// UNFOLD MENU

function myFunction() {
    var x = document.getElementById("myLinks");
   if (x.style.display === "block") {
       x.style.display = "none";
   } else {
       x.style.display = "block";
   }
}


// SWITCH LANGUAGE

