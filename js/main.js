(async () => {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll("img.lazyload");
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {

        const images = document.querySelectorAll("img.lazyload");
        images.forEach(img => {
            img.src = img.dataset.src;
        });

    }
})();

$('#chooseCity').on('click', () => {
    if (screen.width <= '800') {
        if ($('.b-chooseCity .container .flex').hasClass('active')) {

            $('.b-chooseCity .container').css('height', `${12}px`);
            $('.b-chooseCity .container .flex').toggleClass('active');
            $('#chooseCity span').toggleClass('active');

        } else {
            let h = $('.b-chooseCity .container .flex').height();
            $('.b-chooseCity .container').css('height', `${h + 20}px`)
            $('.b-chooseCity .container .flex').toggleClass('active');
            $('#chooseCity span').toggleClass('active');
        }


    }


});
for (let b = 1; b <= $(".b-chooseCity .container li").length; b++){
    $(".b-chooseCity .container li:nth-child("+ b +")").css("animation-delay", (b*0.2) +"s");
}




$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");
}