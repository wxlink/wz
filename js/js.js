/**
 * Minified by jsDelivr using Terser v5.7.1.
 * Original file: /gh/appexplore/cdn@master/jianavi@v2.3/js/js.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function setCookie(t,e){var i=new Date;i.setTime(i.getTime()+31104e6),document.cookie=escape(t)+"="+escape(e)+";expires="+i.toGMTString()}function getCookie(t){var e,i=new RegExp("(^| )"+escape(t)+"=([^;]*)(;|$)");return(e=document.cookie.match(i))?unescape(e[2]):null}function delCookie(t){var e=new Date;e.setTime(e.getTime()-1);var i=getCookie(t);null!=i&&(document.cookie=t+"="+i+";expires="+e.toGMTString())}function zyd_show(){$(".zdy_name").val(""),$(".zdy_link").val(""),"1"==$(".zdy_button").attr("data")?($(".i_r_edit").hide(),$(".zdy_button").attr("data","0")):($(".i_r_edit").show(),$(".zdy_button").attr("data","1"))}function zdy_close(){document.querySelector(".zdy").style.display="none",$(".i_r_edit").hide()}function zdy_false(){document.querySelector(".zdy").style.display="none",$(".i_r_edit").hide()}function zyd_edit(t){document.querySelector(".zdy").style.display="block";var e=$($($(".jj-list-con li")[t]).children("a"));$(".zdy_name").val(e.html()),$(".zdy_link").val(e.attr("href")),$(".zdy").attr("date",t)}function zdy_true(){$(".i_r_edit").hide(),document.querySelector(".zdy").style.display="none";var t=$(".zdy_name").val(),e=$(".zdy_link").val();setCookie("zdylink_"+$(".zdy").attr("date"),t+"_fg_"+e),c_init()}function c_init(){for(var t=document.cookie.split(";"),e=0;e<t.length;e++){var i=t[e].split("=");if("order_list"!=i[0].toString().trim()){var o=unescape(i[0].trim());if(i[0].toString().trim().indexOf("zdylink_")>-1){1;var n=$(".jj-list-con li")[o.replace("zdylink_","")];if(n){var l=getCookie(o).split("_fg_");$($(n).children("a")).attr("href",l[1]),$($(n).children("a")).html(l[0])}}}}}function s_r(t){delCookie(t.trim())}window.onload=function(){c_init();for(var t=$("._b li"),e=t.length-1;e>=0;e--)$(t[e]).append('<div class="i_r_edit" onclick="zyd_edit(\''+e+"');\"></div>")};var sllTop,_hmt=_hmt||[];!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?b556d06a5110a1a17fa2ceb5cb8a4acb";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),$((function(){function t(){var t=document.getElementsByTagName("html")[0].getBoundingClientRect().width,e=document.getElementsByTagName("html")[0];e.style.fontSize=t>640?"40px":t/16+"px"}t(),$(window).resize((function(){t()}))}));var divsTop=330;function tlistTop(){var t=document.getElementsByClassName("fa-caret-right");if(0===t.length)return!1;arr1=[];for(var e=0;e<=4;e++)thisHeight=document.getElementsByClassName("sethome-con")[e].offsetTop+divsTop-80,arr1.push(thisHeight);sllTop>=arr1[0]&&(t[0].style.opacity=1,t[1].style.opacity=0,t[2].style.opacity=0,t[3].style.opacity=0,t[4].style.opacity=0),sllTop>=arr1[1]&&(t[0].style.opacity=0,t[1].style.opacity=1,t[2].style.opacity=0,t[3].style.opacity=0,t[4].style.opacity=0),sllTop>=arr1[2]&&(t[0].style.opacity=0,t[1].style.opacity=0,t[2].style.opacity=1,t[3].style.opacity=0,t[4].style.opacity=0),sllTop>=arr1[3]&&(t[0].style.opacity=0,t[1].style.opacity=0,t[2].style.opacity=0,t[3].style.opacity=1,t[4].style.opacity=0),sllTop>=arr1[4]&&(t[0].style.opacity=0,t[1].style.opacity=0,t[2].style.opacity=0,t[3].style.opacity=0,t[4].style.opacity=1)}function _search_(){for(var t=document.cookie.split(";"),e=0;e<t.length;e++){var i=t[e].split("=");if("order_list"!=i[0].toString().trim()){var o=unescape(i[0].trim());if(i[0].toString().trim().indexOf("_search_")>-1){var n=getCookie(o).split("_nln_");$(".baidu form").attr("action",n[1]),$(".this_s").html(n[0]),$("#kw-2").attr("name",n[2]),$(".Select-box-2 ul").css("height","48px")}}}}function cls(){for(var t=document.getElementsByTagName("INPUT"),e=0;e<t.length;e++)"text"==t[e].type&&(t[e].value="")}function if_btn(){var t,e,i=document.getElementById("kw")||document.getElementById("kw-2"),o=document.getElementById("qingkong");if(""==i||null==i)return!1;i.onfocus=function(){e=setInterval((function(){t=i.value,o.style.display=0!=t?"block":"none"}),200)},i.onblur=function(){clearInterval(e)}}window.onscroll=function(){document.getElementById("top-box");(sllTop=document.documentElement.scrollTop||document.body.scrollTop)>=40?($(".header-con").css("padding","0"),$(".logo img").css({width:"50","margin-top":"5px","margin-left":"10px"})):($(".header-con").css("padding","10px 0"),$(".logo img").css({width:"60","margin-top":"0px","margin-left":"0px"})),sllTop>240?$("#tbox2").css("display","block"):$("#tbox2").css("display","none"),sllTop>=divsTop?$(".left-list").css("position","fixed"):$(".left-list").css("position",""),tlistTop()},$((function(){$(".taoba").click((function(t){var e=$(this).index(),i=$(".dingwei")[e];$("html,body").animate({scrollTop:$(i).offset().top-80},800)})),$(".list-text").click((function(t){var e=$(this).index(),i=$(".sethome-con")[e];$("html,body").animate({scrollTop:$(i).offset().top-80},800)}))})),$("#gotop").click((function(){$("body,html").animate({scrollTop:0},800)})),$(".Select-box ul").hover((function(){$(this).css("height","auto")}),(function(){$(this).css("height","40px")})),$(".Select-box-2 ul").hover((function(){$(this).css("height","auto")}),(function(){$(this).css("height","47px")})),$(".Select-box-2 li").click((function(){var t=$(this).attr("class"),e=$(this).html(),i="wd";if("this_s"==t)return"";"baidu_s"==t?(t="https://www.baidu.com/s",i="wd"):"google_s"==t?(t="https://www.google.com/search",i="q"):"bing_s"==t?(t="https://www.bing.com/search",i="q"):"miji_s"==t?(t="https://duckduckgo.com/",i="q"):(t="https://www.baidu.com/s",i="wd"),$(".baidu form").attr("action",t),$(".this_s").html(e),$("#kw-2").attr("name",i),$(".Select-box-2 ul").css("height","48px"),setCookie("_search_",e+"_nln_"+t+"_nln_"+i)})),_search_(),$(".qingkong").click((function(){cls(),$(this).css("display","none")})),if_btn(),$(".pifu-con").hover((function(){$(".iex-zuhti-list").fadeIn(250),$(".pifu-con .link-list-a .fa-angle-down").addClass("fa-rotate-180")}),(function(){$(".iex-zuhti-list").fadeOut(0),$(".pifu-con .link-list-a .fa-angle-down").removeClass("fa-rotate-180")})),$(".fw-dingwei a").hover((function(){$(".fw-weixing").fadeIn(250)}),(function(){$(".fw-weixing").fadeOut(0)})),$(".muban li").click((function(){_index=$(this).index(),$(this).addClass("shaw").siblings().removeClass("shaw"),$(".muban-list ul").eq(_index).fadeIn(250).siblings().fadeOut(0)})),$(".ruanjian-tab li").click((function(){_index=$(this).index(),$(this).addClass("shaw").siblings().removeClass("shaw"),$(".ruanjian-list ul").eq(_index).fadeIn(250).siblings().fadeOut(0)})),$(".list-link-4").hover((function(){var t=$(this).attr("data-title");""!=t&&layer.tips(t,this,{tips:[1,"#1E9FFF"],time:99999})}),(function(){$(".layui-layer-tips").css("display","none")}));var btn=$("#kw-2"),oUl=$(".keylist")[0];function aa(t){oUl.style.display="block";for(var e=t.s,i="",o=0;o<e.length;o++)o<8&&(i+="<li>"+e[o]+"</li>");oUl.innerHTML=i}$("#qingkong").click((function(){oUl.style.display="none"})),btn.keyup((function(t){if(13!=t.keyCode&&40!=t.keyCode&&38!=t.keyCode){var e=this.value;if(e){var i=document.createElement("script");i.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+e+"&cb=aa",document.body.appendChild(i),i.remove()}else 0==e&&(oUl.style.display="none")}else t.preventDefault()})),$(".keylist").on("click","li",(function(){var t=$(this).text();btn.val(t),$("#su-2").click(),oUl.style.display="none"})),$(document).keydown((function(t){if(13==t.keyCode&&"block"==oUl.style.display)btn.val($(".keylist li.active").html().trim()),$("#su-2").click(),oUl.style.display="none";else if(t&&40==t.keyCode&&"block"==oUl.style.display){if($(".keylist li.active").length>0)(e=$(".keylist li.active")).next().addClass("active"),e.removeClass("active");else $($(".keylist li")[0]).addClass("active")}else if(t&&38==t.keyCode&&"block"==oUl.style.display){var e;(e=$(".keylist li.active")).prev().addClass("active"),e.removeClass("active")}}));
//# sourceMappingURL=/sm/3baf7da49b69da21c3c49ff0bd7c096d975d5dbecdd450889a67f2e27143723a.map
