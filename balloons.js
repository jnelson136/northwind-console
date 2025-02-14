document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });

    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function (e) {
        if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");

            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInDown") :
                elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });

    const randomizeAnim = [
        "animate__rubberBand",
        "animate__swing",
        "animate__wobble",
        "animate__pulse",
        "animate__flash"
    ]

    const randomAnim = randomizeAnim[Math.floor(Math.random() * randomizeAnim.length)];
    const randomHappyBirthday = document.querySelector(".greeting");

    randomHappyBirthday.classList.add("animate__animated", randomAnim);

    document.getElementById("submit").addEventListener('click', function() {
        const selectedBalloon = [...document.querySelectorAll(".form-check-input")].some(checkbox => checkbox.checked);
        if(!selectedBalloon) {
            const showToast = document.getElementById('liveToast');
            const newToast = new bootstrap.Toast(showToast);

            newToast.show();
        }
    });

    document.getElementById("checkAll").addEventListener('click', function() {
        const checkBoxes = document.querySelectorAll(".form-check-input");
        const checked = [...checkBoxes].every(checkbox => checkbox.checked);

        checkBoxes.forEach(checkbox => checkbox.checked = !checked);

        checkBoxes.forEach(checkbox => {
            const element = document.getElementById(checkbox.id + 'Img');
            element.style.visibility = checkbox.checked ? "visible" : "hidden";
        });
    });

    const h1Element = document.querySelector('.greeting');

    document.querySelectorAll('.form-check-input, .form-check-label').forEach(checkbox => {

        checkbox.addEventListener('mouseover', function() {
            let id = checkbox.id || checkbox.getAttribute('for');

            switch (id) {
                case 'red':
                    h1Element.style.color = 'red';
                    break;
                case 'green':
                    h1Element.style.color = 'green';
                    break;
                case 'blue':
                    h1Element.style.color = 'blue';
            }
        });

        checkbox.addEventListener('mouseout', function() {
            h1Element.style.color = 'gray';
        });
    });
});