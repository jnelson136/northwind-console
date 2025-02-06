document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('discount-row').addEventListener('click', function (e) {
        if (e.target.classList.contains('discount')) {
            e.preventDefault();
            document.getElementById('product').innerHTML = e.target.dataset['product'];

            const product = e.target.dataset.product;
            const discount = e.target.dataset.discount;
            const code = e.target.dataset.code;

            document.getElementById('product').innerHTML = product;
            document.getElementById('discount').innerHTML = discount;
            document.getElementById('discount-code').innerHTML = code;

            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === "Escape") {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
        }
    });
});
