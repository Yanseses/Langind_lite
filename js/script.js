$(document).ready(function(){
    const burgerBtn = $('.js-header_burger'),
        listMenu = $('.js-list-menu');

    $('body').removeClass('no-js');

    burgerBtn.on('click', openMobilMenu);

    function openMobilMenu(e) {
        e.preventDefault();

        let expanded = burgerBtn.attr('aria-expanded'),
            label = burgerBtn.attr('aria-label');

            if (listMenu.is(':hidden')) {
                expanded = true;
                label = 'Меню развернуто';
                burgerBtn.attr('aria-expanded', expanded);
                burgerBtn.attr('aria-label', label);

                listMenu.addClass('mobil-menu__active');
            } else {
                expanded = false;
                label = 'Меню свернуто';
                burgerBtn.attr('aria-expanded', expanded);
                burgerBtn.attr('aria-label', label);

                listMenu.removeClass('mobil-menu__active');
                }
    }
});