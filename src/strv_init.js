/*
 *  Author: Juan Sebastian Ruiz
 *
 *  Description: This javascript is in charge of initializing the plugins,
 *               data and events that are going to bee used on the page.
 *
 */
// var $ = jQuery = require('jquery');
// require('../node_modules/materialize-css/js/initial.js');
// require('../node_modules/materialize-css/js/jquery.easing.1.3.js');
// require('../node_modules/materialize-css/js/hammer.min.js');
// require('../node_modules/materialize-css/js/buttons.js');
// require('../node_modules/materialize-css/js/scrollSpy.js');
// require('../node_modules/materialize-css/js/sideNav.js');
// require('../node_modules/materialize-css/js/waves.js');
// require('../node_modules/materialize-css/js/pushpin.js');




$(document).ready(function() {
  //Initializing materialize-css plugins
  //Scroll Tracking plugin, used on the Navigation bar.
  $(".scrollspy").scrollSpy();
  //Initializing the navigation menu for mobile
  $(".button-collapse").sideNav({
    edge : "right",
    closeOnClick : true
  });
  //Fixed positioning plugin, used to stylize the navbar after certain scroll
  $(".pushpin-nav-bar").pushpin({
    top : "32"
  });

  /*
   *Adding onClick events to the send button both desktop and mobile, when the
   *user clicks the send button, if the comment textbox is empty,the class
   *red-placeholder is added to it, Also, the class send-button-error is added
   *to the send button to change its image. Both classes are only added if they
   *were presen't before.
   */
  $('#send-button').click(function() {
      var textbox = $('#comment-textbox');
      var button = $('#send-button');
      if (textbox.val() == null || textbox.val() == "") {
          textbox.attr("placeholder", "Ooh man! Just write your comment here!");
          if (!textbox.hasClass('red-placeholder')) {
              textbox.addClass('red-placeholder');
          }
          if (!button.hasClass('send-button-error')) {
              button.addClass('send-button-error');
          }
          return false;
      }
  });
  $('#send-button-mobile').click(function() {
      var textbox = $('#comment-textbox-mobile');
      var button = $('#send-button-mobile');
      if (textbox.val() == null || textbox.val() == "") {
          textbox.attr("placeholder", "Just write your comment here!");
          if (!textbox.hasClass('red-placeholder')) {
              textbox.addClass('red-placeholder');
          }
          if (!button.hasClass('send-button-error')) {
             button.addClass('send-button-error');
          }
          return false;
      }
  });

  /*
   *Adding input event for the comment textbox both desktop and mobile, when the
   *user starts typing on the comment textbox the system checks if the error
   *classes are present in both the input and the send button, and removes them.
   *The placeholder for the input is not changed.
   */
  $('#comment-textbox').bind('input', function(){
    var textbox = $('#comment-textbox');
    var button = $('#send-button');
    if(button.hasClass('send-button-error')){
      button.removeClass('send-button-error')
    }
    if(textbox.hasClass('red-placeholder')){
      textbox.removeClass('red-placeholder')
    }
  });
  $('#comment-textbox-mobile').bind('input', function(){
    var textbox = $('#comment-textbox-mobile');
    var button = $('#send-button-mobile');
    if(button.hasClass('send-button-error')){
      button.removeClass('send-button-error')
    }
    if(textbox.hasClass('red-placeholder')){
      textbox.removeClass('red-placeholder')
    }
  });

  /*
   *Retrieving the comments from a json file, iterating through each comment,
   *if the comment is a parent comment (as opposed to a threaded one), it is
   *printed on the page, in that same step the json file is searched again for
   *its son comments so they can be printed right below it. This is done for all
   *comments on the file.
   */

});
