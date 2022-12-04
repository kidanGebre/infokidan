var body = document.querySelector('body');
var shape1 = document.querySelector('.shape1');
var shape2 = document.querySelector('.shape2');
var shape3 = document.querySelector('.shape3');
var nameme = document.querySelector("#name");
if (body) {
    function changeColor() {
        var colors = ['darkslategrey', ' #9E1030', '#8D9440', '#755139', '#616247'];
        var randomColor = Math.floor(Math.random() * colors.length);
        var color = colors[randomColor];
        body.style.backgroundColor = color;
        if (nameme) {
            if (color == '#8D9440') {
                nameme.style.color = 'white';
            } else {
                nameme.style.color = '#fc7e00'
            }
        }

        shape1.style.backgroundColor = color;
        shape2.style.backgroundColor = color;
        shape3.style.backgroundColor = color;
    }

    //for case one
    body.addEventListener('click', changeColor)
    //for case two 
    setInterval(changeColor, 10000);
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//display the choosen image and scroll effect

var imagerow = document.querySelector(".imagerow");
if (imagerow) {
    var images = imagerow.getElementsByTagName('img');
}
var shower = document.querySelector('.shower img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var caption = document.getElementById('caption');

if (images) {
    images[0].style.opacity = 1;
    last = images.length - 1;
    for (var image of images) {
        image.addEventListener('click', function (e) {
            shower.src = e.target.src;
            if (caption) {
                caption.innerHTML = e.target.alt;
            }
            for (let i = 0; i < images.length; i++) {
                images[i].style.opacity = 0.7;
            }
            e.target.style.opacity = 1;
        })
    }

    next.addEventListener('click', function () {
        imagerow.append(images[0]);
        opacityChanger(images);
    });


    prev.addEventListener('click', function () {
        imagerow.prepend(images[last]);
        opacityChanger(images);
    })
}


function opacityChanger(n) {
    for (let i = 0; i < n.length; i++) {
        n[i].style.opacity = 0.7;
    }
    n[0].style.opacity = 1;
    shower.src = n[0].src;
    if (caption) {
        caption.innerHTML = e.target.alt;
    }
}
///////////////////////////////////////////////////////////////////////////////////////
//for video control part

var btns = document.querySelectorAll('.btn');
var fullbtns = document.querySelectorAll('.btnfull');
var autoplays = document.querySelectorAll('#autoplay');

if (btns) {
    for (var btn of btns) {
        btn.addEventListener('click', function (e) {
            var video = e.target.parentNode.previousElementSibling;
            if (video.paused) {
                video.play();
                e.target.innerHTML = "Pause";
            }
            else {
                video.pause();
                e.target.innerHTML = "Play";
            }
        })
    }
}
if (fullbtns) {
    for (var fullbtn of fullbtns) {
        fullbtn.addEventListener('click', function (e) {
            var video = e.target.parentNode.previousElementSibling;
            openFullscreen(video);
        })
    }
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
/* for page selected */




/*
var photoshopcaller = document.getElementById('photoshopcaller');
var photoshop = document.getElementById('photoshop');
var home = document.getElementById('home');
var home1 = document.getElementById('home1');
var homewidth = home.getBoundingClientRect().width;
home.style.marginLeft = "0px";

photoshopcaller.onclick = function () {
    home.style.marginLeft = -1 * homewidth + 'px';
    console.log(home.style.marginLeft);
}
home1.onclick = function () {
    home.style.marginLeft = '0px';
    console.log(home.style.marginLeft);
}
*/

