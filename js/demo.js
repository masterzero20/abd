/*
Template Name: Pillarix - Multipurpose Website Template
Author: Askbootstrap
Author URI: https://themeforest.net/user/askbootstrap
Version: 1.0
*/
/*
-- Index Demo Bottom Navbar
-- Index Demo Header Typed
*/

(function($) {
  "use strict";

    // Index Demo Page Scrolling
    window.addEventListener('DOMContentLoaded', event => {
        const mainNav = document.body.querySelector('#mainNav');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                rootMargin: '0px 0px',
            });
        };
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function(responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    });

    // Index Demo Header Typed
    var typed = new Typed('#element', {
        strings: ["Application 📱",
            "Artist 🎨",
            "Business 🎯",
            "Consultant 💼",
            "Car Service 🚗",
            "Catering 🔪",
            "Charity 👏",
            "Cleaning Service ✨",
            "Fashion 👗",
            "Flowers 🌸",
            "Furniture 🏢",
            "Gadgets 🎧",
            "Home Decor 🎄",
            "Lawyer 🎓",
            "Modern Shop 👠",
            "News 📰",
            "Pat 🐶",
            "Portfolio 👔",
            "Recipes 🍱",
            "Renovation 🏠",
            "Restaurant 🍕",
            "Review ⭐",
            "The Barber Shop 💇",
            "Travel 🌏",
            "Web Agency 🚀",
            "Wedding 💑",
            "Wood 🍶",
            "Yoga 🏃",
            "Music 🎸",
            "Architecture 📐",
            "Bank 🏦",
            "Software 💻"
        ],
        typeSpeed: 50,
        loop: true
    });
  
})(window.jQuery);