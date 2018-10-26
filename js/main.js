/*
 * Template Name: Resume - Responsive Resume Template
 * Author: Tran Toan (Sky Albert)
 * Author URL: http://www.facebook.com/trantoan.960
 * Version: 1.0.0
 */
(function ($) {
    "use strict";
    // // Portfolio subpage filters
    // function portfolio_init() {
    //     var portfolio_grid = $('#portfolio_grid'),
    //         portfolio_filter = $('#portfolio_filters');

    //     if (portfolio_grid) {

    //         portfolio_grid.shuffle({
    //             speed: 450,
    //             itemSelector: 'figure'
    //         });

    //         $('.site-main-menu').on("click", "a", function (e) {
    //             portfolio_grid.shuffle('update');
    //         });


    //         portfolio_filter.on("click", ".filter", function (e) {
    //             portfolio_grid.shuffle('update');
    //             e.preventDefault();
    //             $('#portfolio_filters .filter').parent().removeClass('active');
    //             $(this).parent().addClass('active');
    //             portfolio_grid.shuffle('shuffle', $(this).attr('data-group'));
    //         });

    //     }
    // }
    // // /Portfolio subpage filters

    // Hide Mobile menu
    function mobileMenuHide() {
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
            $('#site_header').addClass('mobile__menu__hide');
        }
    }
    // /Hide Mobile menu


    //On Window load & Resize
    $(window)
        .on('load', function () { //Load
            // Animation on Page Loading
            // $(".preloader").fadeOut("slow");

            // initializing page transition.
            var ptPage = $('.subpages');
            if (ptPage[0]) {
                PageTransitions.init({
                    menu: 'ul.site__main__menu',
                });
            }
        })
        .on('resize', function () { //Resize
            mobileMenuHide();
        });


    // On Document Load
    $( document ).ready(function() {
        // Mobile menu
        $('.menu__toggle').on("click", function (event) {
            $('#site_header').toggleClass('mobile__menu__hide');
        });

        // Mobile menu hide on main menu item click
        $('.site__main__menu').on("click", "a", function (e) {
            mobileMenuHide();
        });

        // Setup Custom tilt effect
        $('.tilt-effect').tilt({});
    });
})(jQuery);