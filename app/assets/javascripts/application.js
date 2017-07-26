// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require materialize-sprockets

// (function($) {
// 		$(function() {
// $(".dropdown-button").dropdown();
// 		}); // End Document Ready
// })(jQuery); // End of jQuery name space

// #######
// #######
$( document ).ready(function(){
    $(".button-collapse").sideNav(); 
  })
        
$(document).ready(function(){
      $('.parallax').parallax();
    });

   $(document).ready(function(){
      $('.carousel').carousel();
    });


     $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    //$('#modal1').modal('open');
    $('#modal1').modal('close');
  });

//     // Next slide
// $('.carousel').carousel('next');
// $('.carousel').carousel('next', 3); // Move next n times.

// // Previous slide
// $('.carousel').carousel('prev');
// $('.carousel').carousel('prev', 4); // Move prev n times.

// // Set to nth slide
// $('.carousel').carousel('set', 4);

// // Destroy carousel
// $('.carousel').carousel('destroy');


$(document).ready(function(){
     $('.carousel').carousel({
           dist:0,
           shift:0,
           padding:20,
     });

   });

   $(document).ready(function(){
      $('.collapsible').collapsible();
    });


$(document).ready(function(){
     $('.slider').slider();
   });

