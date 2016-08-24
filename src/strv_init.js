/*
 *  Author: Juan Sebastian Ruiz
 *
 *  Description: This javascript is in charge of initializing the plugins,
 *               data and events that are going to bee used on the page.
 *
 */

/*
 * These are the required plugins from materialize
 *
 * require ("jquery.easing.1.3.js");
 * require("velocity.min.js");
 * require("hammer.min.js");
 * require("jquery.hammer.js");
 * require('../node_modules/materialize-css/js/initial.js');
 * require('../node_modules/materialize-css/js/buttons.js');*
 * require('../node_modules/materialize-css/js/scrollSpy.js');
 * require('../node_modules/materialize-css/js/sideNav.js');
 * require('../node_modules/materialize-css/js/pushpin.js');
 *
 * TODO solve all the unspecified dependencies of materialize so the project
 * doesn't have to load all the plugins.
 *
 **/



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
      }else{
        console.log(textbox.val());
        $('#comments-row').append('<div class="col s12 m9 card z-depth-1 push-m1 comment-card"><div class="comment"><div class="row"><div class="col s1 avatar"><img src="avatar.png"/></div><div class="comment-tag col s7"><div class="commenter-name"><span>Juan Doe</span></div><div class="comment-time"><span>4 days</span></div></div><a href="#comments" class="right reply-icon"></a></div><div class="row"><div class="comment-text col s12 l11 offset-s1"><p>'+textbox.val()+'</p></div></div></div></div>');
        textbox.val('');
        var commentNumberSpan=$('#comment-number');
        var commentNumberSpanMobile=$('#comment-number-mobile');
        var commentNumber=parseInt(commentNumberSpan.text().charAt(0)) +1;
        commentNumberSpan.text(commentNumber + ' Comments');
        commentNumberSpanMobile.text(commentNumber + ' Comments');
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
      }else{
        console.log(textbox.val());
        $('#comments-row').append('<div class="col s12 m9 card z-depth-1 push-m1 comment-card"><div class="comment"><div class="row"><div class="col s1 avatar"><img src="avatar.png"/></div><div class="comment-tag col s7"><div class="commenter-name"><span>Juan Doe</span></div><div class="comment-time"><span>4 days</span></div></div><a href="#comments" class="right reply-icon"></a></div><div class="row"><div class="comment-text col s12 l11 offset-s1"><p>'+textbox.val()+'</p></div></div></div></div>');
        textbox.val('');
        var commentNumberSpan=$('#comment-number-mobile');
        var commentNumberSpanDesktop=$('#comment-number');
        var commentNumber=parseInt(commentNumberSpan.text().charAt(0)) +1;
        commentNumberSpan.text(commentNumber + ' Comments');
        commentNumberSpanDesktop.text(commentNumber + ' Comments');
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
   $.getJSON('comments.json',function(data){

      var commentCount=data.length;
      console.log(commentCount);
      $('#comment-number').text(commentCount +' Comments');
      $('#comment-number-mobile').text(commentCount +' Comments');

     data.map(function(comment){

       var commentId=comment.id;
       var commentParent=comment.parent;
       var commentName=comment.author;
       var commentTime = "4 days";
       var commentText = comment.text;

       if(!(typeof commentParent != 'undefined')){
         $('#comments-row').append('<div class="col s12 m9 card z-depth-1 push-m1 comment-card"><div class="comment"><div class="row"><div class="col s1 avatar"><img src="avatar.png"/></div><div class="comment-tag col s7"><div class="commenter-name"><span>'+commentName+'</span></div><div class="comment-time"><span>4 days</span></div></div><a href="#comments" class="right reply-icon"></a></div><div class="row"><div class="comment-text col s12 l11 offset-s1"><p>'+commentText+'</p></div></div></div></div>');
         data.map(function(threadComment){
           if(threadComment.parent==commentId){
             $('#comments-row').append('<div class="col s12 m8 card push-m2 thread-comment-card"><div class="comment"><div class="row"><div class="col s1 avatar"><img src="avatar.png"/></div><div class="comment-tag col s7"><div class="commenter-name"><span>'+commentName+'</span></div><div class="comment-time"><span>4 days</span></div></div><a href="#comments" class="right reply-icon"></a></div><div class="row"><div class="comment-text col s12 l9 offset-s1"><p>'+commentText+'</p></div></div></div></div>');
           }
         });
       }
     });
   });
});
