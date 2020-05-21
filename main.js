/**
* Template Name: Imperial - v2.0.0
* Template URL: https://bootstrapmade.com/imperial-free-onepage-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow', function() {
      $(this).remove();
    });
  });

  // Banner rotating texts
  $("#banner .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 3000
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });
   
  //Nav search bar
/*  if ($('#nav-menu-1').length) {
    var $mobile_nav = $('#nav-menu-1').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });
    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });
    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }*/
  

  // Sticky header on all pages
  $(document).ready(function($){
    var headerwrap = $('#header-sticky-wrapper');
    var burgermenu = $('#side-menu-toggle');
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        var topDist = 790;
        if( scroll > topDist ) {
            headerwrap.addClass('is-sticky');
            burgermenu.addClass('is-sticky');
        }
        else {
            headerwrap.removeClass('is-sticky');
            burgermenu.removeClass('is-sticky');
        }
    });

});

// Show side menu on click on the burger menu and change burger menu logo into X
$('#side-menu-toggle').on('click', function() {
    $('#side-menu').toggleClass('hidden');
    if($('.burger-menu-line-1').css("transform") == 'none') {
      $('.burger-menu-line-1').css("transform","translateY(8px) translateX(230px) rotate(225deg)");
    } else {
        $('.burger-menu-line-1').css("transform", "");
    }
    if($('.burger-menu-line-2').css("transform") == 'none') {
      $('.burger-menu-line-2').css("transform","scale(0)");
    } else {
        $('.burger-menu-line-2').css("transform","");
    }
    if($('.burger-menu-line-3').css("transform") == 'none') {
      $('.burger-menu-line-3').css("transform","translateY(-8px) translateX(230px) rotate(-225deg)");
    } else {
        $('.burger-menu-line-3').css("transform","" );
    }
  });
// Hide side menu on click on the close CTA or outside of the menu
$(document).on('click', function(event) {
  if (!($(event.target).is('#side-menu-toggle')) && !($(event.target).is('#side-menu'))) {
    if(!$('#side-menu').hasClass('hidden')) {
      $('#side-menu').addClass('hidden');
      $('.burger-menu-line-1').css("transform","");
      $('.burger-menu-line-2').css("transform","");
      $('.burger-menu-line-3').css("transform","");
    }
  }
})

  
 /* $(document).on('click',function(event) {
    if ($(event.target).is('#side-menu-toggle')) {
      // Show side menu on click on the burger menu
      $('#side-menu').removeClass('hidden');
      $('.fa-times').removeClass('hidden');
      $('#side-menu-toggle').addClass('hidden');
      console.log('burger menu click')
    } else if (!($(event.target).is('#side-menu')) || !($(event.target).is('#side-menu-toggle'))) {
      // Hide side menu on click on the close CTA or outside of the menu
        $('#side-menu').addClass('hidden');
        $('.fa-times').addClass('hidden');
        $('#side-menu-toggle').removeClass('hidden');
        console.log('outside')
      }
  });
*/
  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;
        if ($('#header').length) {
          top_space = $('#header').outerHeight();
        }
        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');
        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 120;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight() - 90;

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('menu-active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active');
      }
      if (cur_pos < 200) {
        $(".nav-menu li:first").addClass('menu-active');
      }
    });
  });

  // Navigation toggle : black when header is sticky
/*  $(window).scroll(function() {
    if ($(this).scrollTop() > 790) {
      $('.fa-bars').attr('style', "color: #000000");
    } else {
      $('.fa-bars').attr('style', "color: #ffffff");
    }
  });*/

  //Search feature
  $(function(){ 
    $('.search-button').click(function () {
      // 1- Text toggles between Recherche and Annuler
      $('.name-search').text(function(i, text){
        return text === "Recherche" ? "Annuler" : "Recherche";
      });
      // 2- Logo toggles between fa-search and fa-times
      $('.fa-search.tobechanged').toggleClass('fa-times');
      // 3- Search-bar-mobile-tablet appears/disappears
      $('#header-menu-search').toggleClass('hidden');
    })
  });


  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);


// LOG-IN / SIGN-UP MODAL
// Show selected form
$(document).ready(function(){

  $(".popup-tab-create").click(function(){ //When user clicks on "S'inscrire"
    //1. In the header, make "popup-tab-login" inactive
    $(".popup-tab-login").removeClass("active");
    $(".popup-tab-login h6").removeClass("popup-active-tab");
    $(".popup-tab-login h6").addClass("popup-inactive-tab");
    //2. In the header, make "popup-tab-create" active
    $(".popup-tab-create").addClass("active");
    $(".popup-tab-create h6").removeClass("popup-inactive-tab");
    $(".popup-tab-create h6").addClass("popup-active-tab");
    //3. Adapt the length of the popup-block
    $(".popup-block").removeClass("login");
    $(".popup-block").addClass("create");
    //4. In the popup-content, show content for popup-tab-create
    $(".popup-content-login").removeClass("show");
    $(".popup-content-login").addClass("hide");
    $(".popup-content-create").removeClass("hide");
    $(".popup-content-create").addClass("show");
  })
  $(".popup-subscription-link").click(function(){ //When user clicks on "Créez un compte"
    //1. In the header, make "popup-tab-login" inactive
    $(".popup-tab-login").removeClass("active");
    $(".popup-tab-login h6").removeClass("popup-active-tab");
    $(".popup-tab-login h6").addClass("popup-inactive-tab");
    //2. In the header, make "popup-tab-create" active
    $(".popup-tab-create").addClass("active");
    $(".popup-tab-create h6").removeClass("popup-inactive-tab");
    $(".popup-tab-create h6").addClass("popup-active-tab");
    //3. Adapt the length of the popup-block
    $(".popup-block").removeClass("login");
    $(".popup-block").addClass("create");
    //4. In the popup-content, show content for popup-tab-create
    $(".popup-content-login").removeClass("show");
    $(".popup-content-login").addClass("hide");
    $(".popup-content-create").removeClass("hide");
    $(".popup-content-create").addClass("show");
  })
  $(".popup-tab-login").click(function(){ //When user clicks on "Se connecter"
    //1. In the header, make "popup-tab-create" inactive
    $(".popup-tab-create").removeClass("active");
    $(".popup-tab-create h6").removeClass("popup-active-tab");
    $(".popup-tab-create h6").addClass("popup-inactive-tab");
    //2. In the header, make "popup-tab-login" active
    $(".popup-tab-login").addClass("active");
    $(".popup-tab-login h6").removeClass("popup-inactive-tab");
    $(".popup-tab-login h6").addClass("popup-active-tab");
    //3. Adapt the length of the popup-block
    $(".popup-block").removeClass("create");
    $(".popup-block").addClass("login");
    //4.In the popup-content, show content for popup-tab-login
    $(".popup-content-create").removeClass("show");
    $(".popup-content-create").addClass("hide");
    $(".popup-content-login").removeClass("hide");
    $(".popup-content-login").addClass("show");
  })
  $(".popup-connection-link").click(function(){ //When user clicks on "Connectez-vous"
    //1. In the header, make "popup-tab-create" inactive
    $(".popup-tab-create").removeClass("active");
    $(".popup-tab-create h6").removeClass("popup-active-tab");
    $(".popup-tab-create h6").addClass("popup-inactive-tab");
    //2. In the header, make "popup-tab-login" active
    $(".popup-tab-login").addClass("active");
    $(".popup-tab-login h6").removeClass("popup-inactive-tab");
    $(".popup-tab-login h6").addClass("popup-active-tab");
    //3. Adapt the length of the popup-block
    $(".popup-block").removeClass("create");
    $(".popup-block").addClass("login");
    //4.In the popup-content, show content for popup-tab-login
    $(".popup-content-create").removeClass("show");
    $(".popup-content-create").addClass("hide");
    $(".popup-content-login").removeClass("hide");
    $(".popup-content-login").addClass("show");
  })
})

// Show/hide password -> login form
$("#popup-content-login-input-password-show").click(function() {
  var password_input = document.getElementById("popup-content-login-input-password");
  if (password_input.type == 'password') {
    password_input.type = 'text';
    $("#popup-content-login-input-password-show").removeClass('fa-eye');
    $("#popup-content-login-input-password-show").addClass('fa-eye-slash');
  } else {
    password_input.type = 'password';
    $("#popup-content-login-input-password-show").removeClass('fa-eye-slash');
    $("#popup-content-login-input-password-show").addClass('fa-eye');
  }
})
// Show/hide password -> sign-up form
$("#popup-content-create-input-password-show").click(function() {
  var password_input = document.getElementById("popup-content-create-input-password");
  if (password_input.type == 'password') {
    password_input.type = 'text';
    $("#popup-content-create-input-password-show").removeClass('fa-eye');
    $("#popup-content-create-input-password-show").addClass('fa-eye-slash');
  } else {
    password_input.type = 'password';
    $("#popup-content-create-input-password-show").removeClass('fa-eye-slash');
    $("#popup-content-create-input-password-show").addClass('fa-eye');
  }
})

// Validate login form
document.getElementById("popup_login_form").onsubmit = function() {
  var email = document.forms["popup_login_form"]["email"].value;
  var regex_email = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$")
  var password = document.forms["popup_login_form"]["password"].value;
  var submit = true;

  if (email == null || email == "") {
    document.getElementById("popup_content_login_email_error").innerHTML = "Indiquez votre adresse mail";
    $("#popup-content-login-input-email").addClass("error");
    submit = false;
  }
  if (regex_email.test(email)) {
  } else {
    document.getElementById("popup_content_login_email_error").innerHTML = "Veuillez saisir une adresse mail valide";
    $("#popup-content-login-input-email").addClass("error");
    submit = false;
  }
  if (password == null || password == "") {
    document.getElementById("popup_content_login_password_error").innerHTML = "Entrez votre mot de passe";
    $("#popup-content-login-input-password").addClass("error");
    submit = false;
  }
  return submit
}
/*function removeWarning() {
  document.getElementById("popup_content_login_" + this.id + "_error").innerHTML = "";
}
document.getElementById("popup-content-login-input-email").onkeyup = removeWarning;
document.getElementById("popup-content-login-input-password").onkeyup = removeWarning;*/

// Validate sign-up form
document.getElementById("popup_create_form").onsubmit = function() {
  var username = document.forms["popup_create_form"]["username"].value;
  var regex_username = new RegExp("^[a-zA-Z0-9_\\-]")
  var email = document.forms["popup_create_form"]["email"].value;
  var regex_email = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$")
  var password = document.forms["popup_create_form"]["password"].value;
  var regex_password = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");
  var submit = true;

  if (username == null || username == "") {
    document.getElementById("popup_content_create_username_error").innerHTML = "Entrez un nom d'utilisateur";
    $("#popup-content-create-input-username").addClass("error");
    submit = false;
  }
  if (regex_username.test(username)) {
  } else {
    document.getElementById("popup_content_create_username_error").innerHTML = "Votre nom d'utilisateur ne peut contenir que des lettres, des chiffres et les symboles suivants : - et _";
    $("#popup-content-create-input-username").addClass("error");
    submit = false;
  }
  if (email == null || email == "") {
    document.getElementById("popup_content_create_email_error").innerHTML = "Indiquez votre adresse mail";
    $("#popup-content-create-input-email").addClass("error");
    submit = false;
  }
  if (regex_email.test(email)) {
  } else {
    document.getElementById("popup_content_create_email_error").innerHTML = "Veuillez saisir une adresse mail valide";
    $("#popup-content-create-input-email").addClass("error");
    submit = false;
  }
  if (password == null || password == "") {
    document.getElementById("popup_content_create_password_error").innerHTML = "Entrez votre mot de passe";
    $("#popup-content-create-input-password").addClass("error");
    submit = false;
  }
  if (regex_password.test(password)) {
    document.getElementById("popup_content_create_password_error").innerHTML = "Votre mot de passe doit contenir 8 caractères, dont 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial";
    $("#popup-content-create-input-password").addClass("error");
    submit = false;
  }
  return submit
}
/*function removeWarning() {
  document.getElementById("popup_content_create_" + this.id + "_error").innerHTML = "";
}
document.getElementById("popup-content-create-input-username").onkeyup = removeWarning;
document.getElementById("popup-content-create-input-email").onkeyup = removeWarning;
document.getElementById("popup-content-create-input-password").onkeyup = removeWarning;*/