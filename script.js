let curr_img = document.getElementById('photocar');
let photocar_arr = ['/media/images/eq1.jpg', '/media/images/eq2.jpg', '/media/images/eq3.jpg', '/media/images/eq4.jpg', '/media/images/eq5.jpg', '/media/images/eq6.jpg', '/media/images/eq7.jpg', '/media/images/eq8.jpg'];

let currentIndex = 0;

function carousel() {
    curr_img.src = photocar_arr[currentIndex];
    currentIndex = (currentIndex + 1) % photocar_arr.length;
}

// Change image every 3 seconds (3000 milliseconds)
setInterval(carousel, 3000);

