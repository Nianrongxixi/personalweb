window.addEventListener('load', function() {
    var more = document.querySelector('.more');
    var close = document.querySelector('.close');
    var samllNav = document.querySelector('#smallNav');

    more.addEventListener('click', function() {
        more.style.display = 'none';
        close.style.display = 'block';
        samllNav.style.display = 'block';

    })
    close.addEventListener('click', function() {
        more.style.display = 'block';
        close.style.display = 'none';
        samllNav.style.display = 'none';
    })

    var contact = document.querySelector('.contact');
    var email = document.querySelector('.email');
    contact.addEventListener('mouseover', function() {
        email.style.display = 'block';
    });
    contact.addEventListener('mouseleave', function() {
        email.style.display = 'none';
    });

    function animation(obj, target, callback) {
        clearInterval(obj.timer);

        obj.timer = setInterval(function() {

            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                // callback && callback();
            }

            obj.style.left = obj.offsetLeft + step + 'px';


        }, 15);
    };
})