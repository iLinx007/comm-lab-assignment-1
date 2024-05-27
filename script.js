let curr_img = document.getElementById('photocar');
let photocar_arr = ['eq1.jpg', 'eq2.jpg', 'eq3.jpg', 'eq4.jpg', 'eq5.jpg', 'eq6.jpg', 'eq7.jpg', 'eq8.jpg'];

let currentIndex = 0;

function carousel() {
    curr_img.src = photocar_arr[currentIndex];
    currentIndex = (currentIndex + 1) % photocar_arr.length;
}

// Change image every 3 seconds (3000 milliseconds)
setInterval(carousel, 3000);

