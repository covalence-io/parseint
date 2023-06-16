(function () {
    var btn = document.getElementById('btn');

    if (!btn) {
        console.log('No button :(');
        return;
    }

    btn.addEventListener('click', function () {
        console.log(parseInt(4));
        console.log(parseInt({}));
        console.log(parseInt({ toString: () => '10', valueOf: () => '5' }));
        console.log(parseInt(0.01)); // => '0.01'
        console.log(2/999999999);
        console.log(parseInt(2/999999999));
        console.log(Number({ toString: () => '10', valueOf: () => '5' }));
    }, false);
})();