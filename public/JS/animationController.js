// Hiệu ứng mạng nhện di chuyển theo chuột ở trang đầu

var pos = document.querySelector(".light");
var light = document.querySelector(".grid");

pos.addEventListener('mousemove', clip);

window.addEventListener("load", (event) => {
   startLoadPatical();
});

function startLoadPatical() {
    light.style.setProperty('--h', pos.offsetHeight + 'px');
    light.style.setProperty('--x', 50 + '%');
    light.style.setProperty('--y', 35 + '%');
}

function clip(e) {
    // console.log(pos);
    // pos.style.clipPath = 'circle(200px at' + x + 'px' + y + 'px)'
    var x = e.pageX;
    var y = e.pageY;
    // if (y <= 220) {
    //     y -= 200;
    // }
    light.style.setProperty('--h', pos.offsetHeight + 'px');
    light.style.setProperty('--x', x + 'px');
    light.style.setProperty('--y', y-200 + 'px');
}

// Hiệu ứng hiện text


