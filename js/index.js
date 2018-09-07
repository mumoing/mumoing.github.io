"use strict";
(function ($) {
  $(document).ready(function () {
    // To top button.
    $("#back-to-top").on("click", function () {
      $("body, html").animate({"scrollTop": 0}, 600);
    });

    $("#reward-button").on("click", function () {
      if ($("#qr").attr("aria-hidden") === "true") {
        $("#qr").attr("aria-hidden", "false");
      } else {
        $("#qr").attr("aria-hidden", "true");
      }
      $("#qr").slideToggle();
    });

    $("#nav-toggle").on("click", function () {
      if ($("#menu").attr("aria-hidden") === "true") {
        $("#menu").attr("aria-hidden", "false");
      } else {
        $("#menu").attr("aria-hidden", "true");
      }
      $("#menu").slideToggle();
    });

    // (40em - 0.6em) * 16px
    // 40 is total size and 0.4 is scroll bar size.
    // jQuery won't calculate scroll bar size. But CSS will.
    var minWidth = Math.round((40 - 0.4) * 16);
    // Auto hide main nav menus in small screen.
    if ($(window).width() <= minWidth) {
      $("#menu").hide();
      $("#menu").attr("aria-hidden", "true");
      $("#nav-toggle").attr("aria-hidden", "false");
    }
    var windowWidth = $(window).width();
    // Show menu again when window becomes bigger.
    $(window).resize(function () {
      if ($(window).width() > minWidth) {
        $("#menu").show();
        $("#menu").attr("aria-hidden", "false");
        $("#nav-toggle").attr("aria-hidden", "true");
      } else {
        // Android chrome fires resize when scroll down.
        // Because it hides address bar to enlarge window height.
        // To avoid it, check width.
        if ($(window).width() !== windowWidth) {
          $("#menu").hide();
          $("#menu").attr("aria-hidden", "true");
          $("#nav-toggle").attr("aria-hidden", "false");
          windowWidth = $(window).width();
        }
      }
    });

    $(".post img").each(function (i) {
      if ($(this).parent().prop("tagName") !== "A") {
        if (this.alt) {
          $(this).after("<span class=\"caption\">" + this.alt + "</span>");
        } else if (this.title) {
          // Hexo asset_img tag generates title instead of alt.
          $(this).after("<span class=\"caption\">" + this.title + "</span>");
        }
          $(this).wrap("<a href=\"" + this.src + "\" class=\"gallery-item\"></a>");
      } else {
        // If img is already a link, ignore it.
        $(this).parent().addClass("img-link");
      }
    });
    if (typeof lightGallery != "undefined") {
      $(".post").each(function (i, entry) {
        lightGallery(entry, {"selector": ".gallery-item"});
      });
    }
  });

  !function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);
})(jQuery);
