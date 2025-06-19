/*
Template Name: Pillarix - Multipurpose Website Template
Author: Askbootstrap
Author URI: https://themeforest.net/user/askbootstrap
Version: 1.0
*/
/*
-- Page Loading
-- Count Down Date
-- Back To Top
-- AOS Animation 
-- Quantity Button
*/

(function ($) {
  "use strict";

 

  // Count Down Date
  document.addEventListener("DOMContentLoaded", function () {
    var daysElement = document.getElementById("days");
    var hoursElement = document.getElementById("hours");
    var minutesElement = document.getElementById("minutes");
    var secondsElement = document.getElementById("seconds");
    var countdownElement = document.getElementById("countdown");

    if (
      !daysElement ||
      !hoursElement ||
      !minutesElement ||
      !secondsElement ||
      !countdownElement
    ) {
      return;
    }

    var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysElement.innerHTML = days;
      hoursElement.innerHTML = hours;
      minutesElement.innerHTML = minutes;
      secondsElement.innerHTML = seconds;

      if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = "EXPIRED";
      }
    }, 1000);
  });

  // Back To Top
  // var backButton = document.createElement("button");
  // backButton.id = "back-to-top";
  // backButton.title = "Go to top";
  // backButton.textContent = "Top";
  // document.body.appendChild(backButton);
  // window.onscroll = function () {
  //     scrollFunction();
  // };
  // function scrollFunction() {
  //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //         backButton.style.display = "block";
  //     } else {
  //         backButton.style.display = "none";
  //     }
  // }
  // backButton.onclick = function () {
  //     document.body.scrollTop = 0;
  //     document.documentElement.scrollTop = 0;
  // };

  // AOS Animation
  AOS.init();
  AOS.refresh();

  // Quantity Button
  document.addEventListener("DOMContentLoaded", function () {
    const productRows = document.querySelectorAll(".product-row");
    productRows.forEach(function (row) {
      const quantityInput = row.querySelector(".quantity-input");
      const decrementBtn = row.querySelector(".decrement-btn");
      const incrementBtn = row.querySelector(".increment-btn");
      decrementBtn.addEventListener("click", function () {
        decrementQuantity(quantityInput);
      });
      incrementBtn.addEventListener("click", function () {
        incrementQuantity(quantityInput);
      });
    });

    function decrementQuantity(input) {
      let currentQuantity = parseInt(input.value, 10);
      if (currentQuantity > 1) {
        input.value = currentQuantity - 1;
      }
    }

    function incrementQuantity(input) {
      let currentQuantity = parseInt(input.value, 10);
      input.value = currentQuantity + 1;
    }
  });
})(window.jQuery);

/**
 * Init swiper slider with 1 slide at once in desktop view
 */ new Swiper(".slides-1", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 13000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  on: {
    init: function () {
      document.querySelectorAll(".swiper-no-swiping").forEach(function (el) {
        el.addEventListener("click", function (event) {
          event.stopPropagation();
        });
      });
    },
  },
});

// /Whatsapp script

function validateForm() {
  var name = document.getElementById("inputName1").value;
  var email = document.getElementById("inputEmail3").value;
  var service = document.getElementById("inputServices4").value;
  var phone = document.getElementById("inputPhone2").value;
  var message = document.getElementById("inputParagraph6").value;

  if (
    name.trim() === "" ||
    email.trim() === "" ||
    service.trim() === "" ||
    phone.trim() === "" ||
    message.trim() === ""
  ) {
    Swal.fire({
      icon: "warning",
      title: "حقول فارغة",
      text: "يرجى ملء جميع الحقول قبل الإرسال.",
      confirmButtonText: "حسناً",
      customClass: {
        popup: "swal2-custom-popup",
      },
    });
  } else {
    sendWhatsApp();
  }
}

function sendWhatsApp() {
  const name = document.getElementById("inputName1").value;
  const phone = document.getElementById("inputPhone2").value;
  const email = document.getElementById("inputEmail3").value;
  const service = document.getElementById("inputServices4").value;
  const message = document.getElementById("inputParagraph6").value;

  const whatsappNumber = "+966503057752";
  const text = `الاسم: ${name}%0Aالجوال: ${phone}%0Aالايميل: ${email}%0Aالخدمة: ${service}%0Aالرسالة: ${message}`;

  const url = `https://wa.me/${whatsappNumber}?text=${text}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  // الحصول على جميع الروابط داخل القائمة
  const menuLinks = document.querySelectorAll(".menu-link .nav-link");
  // الحصول على العنصر الخاص بـ close-mnue
  const closeButton = document.querySelector(".close-mnue");

  // إضافة مستمع حدث لكل رابط
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // محاكاة الضغط على زر الإغلاق
      closeButton.click();
    });
  });
});
// /Whatsapp script

// curYr
var date = new Date();
var year = date.getFullYear();
document.getElementById("curYr").innerHTML = year;


 // التمرير إلى أعلى الصفحة عند الضغط على الزر
 function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}
let backtotop = document.querySelector('.back-to-top');
console.log(backtotop)
if (backtotop) {
  const toggleBacktotop = () => {
      if (window.scrollY > 100) {
          backtotop.classList.add('active')
      } else {
          backtotop.classList.remove('active')
      }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}

// WhatsApp popup
document.addEventListener('DOMContentLoaded', function () {
    const whatsappIcon = document.querySelector('.whatsapp-icon');

    if (whatsappIcon) {
        whatsappIcon.addEventListener('click', function () {
            Swal.fire({
                title: 'إرسال رسالة عبر WhatsApp',
                input: 'textarea',
                inputLabel: 'رسالتك',
                inputPlaceholder: 'اكتب رسالتك هنا...',
                showCancelButton: true,
                confirmButtonText: 'إرسال',
                cancelButtonText: 'إلغاء',
                inputValidator: (value) => {
                    if (!value) {
                        return 'يرجى كتابة رسالة!';
                    }
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const message = result.value;
                    const whatsappNumber = "+966503057752";
                    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank');
                }
            });
        });
    }

      
});

   /**
         * Preloader
         */
   document.addEventListener("DOMContentLoaded", function () {
    let preloader = document.querySelector("#preloader-active");
    if (preloader) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 2000); // مدة سنتين (2000ms)
      });
    }
  });