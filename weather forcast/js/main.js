// nav
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".nav");
    if (window.scrollY > 0) {
        nav.classList.add("change")
    } else {
        nav.classList.remove("change")
    }
})

// slide
window.onload = function () {
    //slide
    var pagination = document.querySelector('.swiper-pagination-bullets');
    var child1 = document.querySelector('.swiper-pagination-bullets span:nth-child(1)');
    var child7 = document.querySelector('.swiper-pagination-bullets span:nth-child(7)');
    pagination.removeChild(child1);
    pagination.removeChild(child7);
    var child_active = document.querySelector('.swiper-pagination-bullets span:nth-child(1)');
    child_active.classList.add("swiper-pagination-bullet-active");

    // card
    var card1 = document.querySelector('.main-card1');
    var card2 = document.querySelector('.main-card2');

    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // sidebar
    let sidebar = document.querySelector('.sidebar');
    let lis = sidebar.querySelectorAll('li');
    let items = document.querySelectorAll('.items')
    for (let i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].onclick = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'now';
            var index = this.getAttribute('index');
            console.log(index);
            for (var j = 0; j < items.length; j++) {
                items[j].style.display = 'none';
            }
            items[index].style.display = 'block';
        }
    }


    // main-card
    var input = document.querySelector('.input_text');
    var input_icon = document.querySelector('.input-icon');
    var card1 = document.querySelector('.main-card1');
    var card2 = document.querySelector('.main-card2');
    var card1_wrong = document.querySelector('.main-card1-wrong');
    var card2_wrong = document.querySelector('.main-card2-wrong');
    input.addEventListener("keyup", function (event) {
        if ( event.keyCode == 13 ) {
            // console.log('daocca');
            card1.style.visibility = 'visible';
            card1_wrong.style.display = 'none';
            card2.style.visibility = 'visible';
            card2_wrong.style.display = 'none';
        }
    })

    input_icon.addEventListener("click", function () {
        // console.log('daocca');
        card1.style.visibility = 'visible';
        card1_wrong.style.display = 'none';
        card2.style.visibility = 'visible';
        card2_wrong.style.display = 'none';
    })
}




