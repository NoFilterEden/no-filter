$(".carosual").slick({dots:!1,infinite:!1,speed:300,slidesToShow:10,slidesToScroll:1,prevArrow:'<i class="far fa-angle-left left"></i>',nextArrow:'<i class="far fa-angle-right right"></i>',autoplay:!1,responsive:[{breakpoint:991,settings:{slidesToShow:6,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:575,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:1}}]}),$(".video-carsual").slick({dots:!0,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:3,prevArrow:'<i class="fas fa-caret-left"></i>',nextArrow:'<i class="fas fa-caret-right"></i>',autoplay:!1,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$('[data-toggle="slide-collapse"]').on("click",function(){$navMenuCont=$($(this).data("target")),$navMenuCont.animate({width:"toggle"},350),$(".main-wraper").toggleClass("active"),$(".overlay-full").toggleClass("active")}),tinymce.init({selector:".tinyMCE",height:280}),$(".chosen-select").chosen({disable_search_threshold:10}),$(".description-arrow").click(function(){$(".video__description").toggleClass("active")}),$(".__up,.__down,.follow,.suscribe").click(function(){$(this).toggleClass("active")}),$(".archive").click(function(){$(this).toggleClass("show")});
//# sourceMappingURL=custom-dist.js.map



/* jQuery created by Arup */

$(document).ready(function(){$(function(){$(".singel-video-post").slice(0,4).show(),$("#loadMore").on("click",function(n){n.preventDefault(),$(".singel-video-post:hidden").slice(0,4).slideDown(),0==$(".singel-video-post:hidden").length&&$("#load").fadeOut("slow")})}),$(function(){$(".singel-chann").slice(0,6).show(),$("#loadMore0").on("click",function(n){n.preventDefault(),$(".singel-chann:hidden").slice(0,3).slideDown(),0==$(".singel-chann:hidden").length&&$("#load").fadeOut("slow")})}),$(function(){$(".sin-vid-po").slice(0,6).show(),$("#loadMore1").on("click",function(n){n.preventDefault(),$(".sin-vid-po:hidden").slice(0,3).slideDown(),0==$(".sin-vid-po:hidden").length&&$("#load").fadeOut("slow")})}),$(function(){$(".plist-video-post").slice(0,6).show(),$("#loadMore2").on("click",function(n){n.preventDefault(),$(".plist-video-post:hidden").slice(0,3).slideDown(),0==$(".plist-video-post:hidden").length&&$("#load").fadeOut("slow")})}),$(function(){$(".following").click(function(){$(this).css("z-index","-9")})}),$(function(){$(".subscribing").click(function(){$(this).css("z-index","-9")})}),$(function(){$("#followBtn").click(function(){$(".follow-text").html("FOLLOWING"),$("#plusfollow").removeClass("fa-bell").addClass("fa-check")})}),$(function(){$("#subscribeBtn").click(function(){$(".subs-text").html("SUBSCRIBED"),$("#plus1").removeClass("fa-user-plus").addClass("fa-check")})}),$(function(){$(".cra-list").click(function(){$(".create-list").show()}),$(".clos , .ook").click(function(){$(".create-list").hide()})}),$(document).mouseup(function(n){var e=$(".create-list");e.is(n.target)||0!==e.has(n.target).length||e.hide()}),$(".dropdown-submenu a.test").on("click",function(n){$(this).next("ul").toggle(),n.stopPropagation(),n.preventDefault()})});