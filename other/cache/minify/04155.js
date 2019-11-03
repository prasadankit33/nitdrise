(function($){if($('.js-features-carousel').length){$('.js-features-carousel').slick({slidesToShow:6,slidesToScroll:6,touchThreshold:20,lazyLoad:'progressive',dots:false,arrows:true,prevArrow:'<a class="slick-prev"><span>←</span></a>',nextArrow:'<a class="slick-next"><span>→</span></a>',appendArrows:'.js-features-arrows',infinite:true,autoplay:true,autoplaySpeed:5000,responsive:[{breakpoint:2200,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:1920,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:1540,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1120,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1}}]});}
if($('.js-applications-carousel').length){var $applicationsCarousel=$('.js-applications-carousel');var slickSettings={mobileFirst:true,slidesToShow:1,centerMode:true,centerPadding:'20px',dots:true,arrows:false,prevArrow:'<a class="slick-prev"><span>←</span></a>',nextArrow:'<a class="slick-next"><span>→</span></a>',infinite:true,responsive:[{breakpoint:420,settings:{slidesToShow:1,centerPadding:'45px'}},{breakpoint:480,settings:{slidesToShow:1,centerPadding:'70px'}},{breakpoint:540,settings:{slidesToShow:1,centerPadding:'120px'}},{breakpoint:640,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:2,centerPadding:'45px'}},{breakpoint:820,settings:{slidesToShow:2,centerPadding:'70px'}},{breakpoint:880,settings:{slidesToShow:2,centerPadding:'120px'}},{breakpoint:940,settings:{slidesToShow:3}},{breakpoint:1040,settings:{slidesToShow:3,centerPadding:'70px'}},{breakpoint:1200,settings:'unslick'}]};$applicationsCarousel.slick(slickSettings);equalizeElementsHeight($('.single-application .inner'));$(window).on('resize',function(){equalizeElementsHeight($('.single-application .inner'));if($(window).width()>1200){if($applicationsCarousel.hasClass('slick-initialized')){$applicationsCarousel.slick('unslick');}
return;}
if(!$applicationsCarousel.hasClass('slick-initialized')){return $applicationsCarousel.slick(slickSettings);}});}
if($('.product-gallery').length){$('.product-gallery').slick({slidesToShow:1,arrows:false,centerMode:true,centerPadding:'180px',dots:true,variableWidth:true,responsive:[{breakpoint:480,settings:{slidesToShow:1,centerPadding:'30px',}}]});$('.product-gallery .slick-track').lightGallery({getCaptionFromTitleOrAlt:false,controls:false,selector:'a'});}
$('div.faq-title').on('click',function(){var parent=$(this).closest('.question');var text=parent.find('.faq-content');parent.toggleClass('is-open');text.slideToggle(450);});if(window.location.hash&&$('li'+window.location.hash).length){$('li'+window.location.hash).addClass('is-open').find('.faq-content').slideDown();$('html, body').animate({scrollTop:($('li'+window.location.hash).offset().top-$('.site-header').outerHeight(true))},600);}
if($('a.faq-title').length){equalizeElementsHeight($('a.faq-title'));$(window).on('resize',function(){equalizeElementsHeight($('a.faq-title'));});}
$('.js-read-all').on('click',function(e){e.preventDefault();var linkParent=$(this).parent();linkParent.next('.js-all').slideDown();linkParent.remove();});$('.js-read-bio').on('click',function(e){e.preventDefault();$(this).hide().next('.js-bio').slideDown();});$('.js-mobile-reveal').on('click',function(e){e.preventDefault();var $moreLink=$(this).closest('.section-navigation');$moreLink.hide();$moreLink.next('.js-reveal-content').slideDown();});$('.js-page-top').on('click',function(event){event.preventDefault();$('html, body').animate({scrollTop:0},600);});$(window).on('scroll',function(){if($(window).scrollTop()>=$(window).height()){$('.js-page-top').addClass('is-visible');}else{$('.js-page-top').removeClass('is-visible');}});})(jQuery);jQuery(window).on('load',function(){if(jQuery('.js-applications-carousel').length){equalizeElementsHeight(jQuery('.single-application .inner'));}
if(jQuery('a.faq-title').length){equalizeElementsHeight(jQuery('a.faq-title'));}
if(window.location.hash&&jQuery(window.location.hash).length){setTimeout(function(){jQuery('html, body').animate({scrollTop:(jQuery(window.location.hash).offset().top-80)},600);},100);}});function equalizeElementsHeight(elements){var minHeight=0;elements.each(function(){var slide=jQuery(this);var currentHeight;slide.removeAttr('style');currentHeight=slide.outerHeight();if(minHeight<currentHeight){minHeight=currentHeight;}});if(minHeight>0){elements.css('height',minHeight);}}
(function($){var offerFormWrapper=$('#form-apply');var offerDropdown=$('.js-list-positions');if(offerFormWrapper.length){var wpcf7Elm=document.querySelector('#form-apply .wpcf7');wpcf7Elm.addEventListener('wpcf7mailsent',function(event){$('.inputlabel').find('.pseudo').text('Choose file +');},false);}
if(offerFormWrapper.length&&offerDropdown.length){var params={action:'despark_positions',};$.ajax({type:'POST',dataType:'html',url:ajax_news.despark_ajaxurl,data:params,success:function(data){var output=data;var idToPreselect=offerFormWrapper.data('prev-id');offerDropdown.append(data);offerDropdown.find('option[data-offer-id="'+idToPreselect+'"]').prop('selected',true);},error:function(jqXHR,textStatus,errorThrown){console.log(jqXHR+" :: "+textStatus+" :: "+errorThrown);}});}
if(window.location.hash&&$('div#form-'+window.location.hash.substr(1)).length){var divToShow=$('div#form-'+window.location.hash.substr(1));var formHiddenInput=$('.js-contacting-as',divToShow);$('.js-form-select').val($('.js-form-select option[data-form="'+window.location.hash.substr(1)+'"]').val());divToShow.addClass('is-selected');if(formHiddenInput.length){formHiddenInput.val($('.js-form-select').val());}}else if($('.js-form-select').length&&$('div#form-sales').length){var formToShow=$('div#form-sales');var hiddenInput=$('.js-contacting-as',formToShow);var control=$('.js-form-select');control.val($('.js-form-select option:eq(0)').val());formToShow.addClass('is-selected');if(hiddenInput.length){hiddenInput.val(control.val());}}
if($('.js-form-select').length){$('.js-form-select').on('change',function(){var control=$(this);var formToShow=$('.js-forms-wrapper').find('#form-'+control.find(':selected').data('form'));var currentlySelected=$('.single-form.is-selected');var formToReset=$('form',currentlySelected);if(formToShow.length){if(currentlySelected.length&&!formToShow.hasClass('is-selected')){resetContactForm(formToReset[0]);currentlySelected.removeClass('is-selected');}
formToShow.addClass('is-selected');var hiddenInput=$('.js-contacting-as',formToShow);if(hiddenInput.length){hiddenInput.val(control.val());}}else{if(currentlySelected.length){resetContactForm(formToReset[0]);currentlySelected.removeClass('is-selected');}}});}})(jQuery);function equalizeElementsHeight(elements){var minHeight=0;elements.each(function(){var slide=jQuery(this);var currentHeight;slide.removeAttr('style');currentHeight=slide.outerHeight();if(minHeight<currentHeight){minHeight=currentHeight;}});if(minHeight>0){elements.css('height',minHeight);}}
function resetContactForm(form){form.reset();jQuery('[aria-invalid="true"]',form).attr('aria-invalid',false).removeClass('wpcf7-not-valid').closest('.form-field').find('.wpcf7-not-valid-tip').remove();jQuery('.wpcf7-response-output',form).empty().removeClass('wpcf7-validation-errors').removeClass('wpcf7-mail-sent-ok').hide();}
var testCookieSupport=function(){var cookieEnabled=(navigator.cookieEnabled)?true:false;if(typeof navigator.cookieEnabled=='undefined'&&!cookieEnabled){document.cookie='testcookie';cookieEnabled=(document.cookie.indexOf('testcookie')!=-1)?true:false;}
return cookieEnabled;};var cookieNotifier={cookieName:'__vercida_cookie_policy_disabled',notice:document.getElementById('cookie-notice'),init:function(){if(!testCookieSupport()||this.getOwnCookie()){this.removeNotice();return;}
var button=document.getElementById('cookie-close');this.notice.className=this.notice.className+'show-notice';button.addEventListener('click',function(){this.setCookieOnDismiss();}.bind(this));button.addEventListener('keydown',function(e){if(e.keyCode===13){this.setCookieOnDismiss();}}.bind(this));},getOwnCookie:function(){return document.cookie.indexOf(this.cookieName)!=-1;},setCookieOnDismiss:function(){var cookieExpire=new Date();cookieExpire.setYear(cookieExpire.getFullYear()+2);this.notice.className=this.notice.className+'hide-notice';setTimeout(this.removeNotice.bind(this),500);document.cookie=this.cookieName+' = 1; expires='+cookieExpire.toUTCString()+'; path=/;';},removeNotice:function(){this.notice.parentNode.removeChild(this.notice);}};(function($){cookieNotifier.init();})(jQuery);(function($){if($('#case-map').length){google.maps.event.addDomListener(window,'load',initMap);}})(jQuery);function initMap(){var lat=jQuery('#case-map').data('lat');var long=jQuery('#case-map').data('long');var mapTitle=jQuery('#case-map').data('text')||'';var locations=jQuery('#case-map-pins').find('.pin');var myLatlng=new google.maps.LatLng(lat,long);var styles=[{"featureType":"all","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#1b2631"},{"lightness":"0"},{"weight":"1"},{"visibility":"on"},{"gamma":"1"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#2ab7ea"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#1b2631"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]}];var mapOptions={zoom:5,minZoom:3,center:myLatlng,mapTypeControl:false,disableDefaultUI:true,zoomControl:true,scrollwheel:false,gestureHandling:'cooperative',styles:styles};var map=new google.maps.Map(document.getElementById('case-map'),mapOptions);google.maps.event.addDomListener(window,'resize',function(){map.setCenter(myLatlng);});var infowindow=new google.maps.InfoWindow();var marker,i;for(i=0;i<locations.length;i++){marker=new google.maps.Marker({position:new google.maps.LatLng(jQuery(locations[i]).data('lat'),jQuery(locations[i]).data('long')),map:map,icon:jQuery('#case-map').data('pin-url'),markerInfo:'<div class="tooltip-content">'+'<img src="'+jQuery(locations[i]).data('image')+'" />'+'<p class="location-info">'+'<span class="location-text">'+jQuery(locations[i]).data('text')+'</span>'+'</p>'+'</div>'});google.maps.event.addListener(marker,'click',(function(marker,i){return function(){infowindow.setContent(marker.markerInfo);infowindow.open(map,marker);};})(marker,i));}}
var pageVisible=(function(){var stateKey,eventKey,keys={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(stateKey in keys){if(stateKey in document){eventKey=keys[stateKey];break;}}
return function(c){if(c)document.addEventListener(eventKey,c);return!document[stateKey];};})();(function($){if($('body').hasClass('home')){var video=document.getElementById('home-video'),breakpoints=[{start:-10,loopStart:-5,loopEnd:0,end:2},{start:2.8,loopStart:4.1,loopEnd:5.28,end:5.5},{start:6.3,loopStart:8.4,loopEnd:10,end:10.3},{start:10.5,loopStart:11.9,loopEnd:13.1,end:14},{start:14.4,loopStart:18.5,loopEnd:19.82,end:20.5}],intervalRewind=null,rewind=false,isScrolling=false,loop=true,loopNr=0,loopCount=breakpoints.length-1,slides=document.querySelectorAll('.js-slide-text'),navDots=document.querySelectorAll('.js-nav-dot'),loopArrow=document.querySelector('.js-scroll-down-icon'),translateHeight=0,loopFrames;video.playbackRate=1.5;enableInlineVideo(video,{iPad:true});var loopAndSlide=function(){if(!pageVisible()){if(!rewind){video.pause();}}else{if(!rewind&&video.paused){video.play();}}
if(!rewind){if(loopNr<loopCount&&video.currentTime>breakpoints[loopNr].end){loopNr++;}
if((!isScrolling&&video.currentTime>breakpoints[loopNr].start&&video.currentTime<breakpoints[loopNr].loopStart)||loopNr===loopCount){loop=true;}
if(!isScrolling&&video.currentTime>breakpoints[loopNr].start&&video.currentTime<breakpoints[loopNr].loopStart){for(i=0;i<loopNr;++i){slides[i].style.webkitTransform='translate3d(0,-'+(translateHeight*1.5)+'px,0)';slides[i].style.transform='translate3d(0,-'+(translateHeight*1.5)+'px,0)';slides[i].style.opacity=0;slides[i].style.pointerEvents='none';navDots[i].style.opacity=0;}
slides[loopNr].style.webkitTransform='translate3d(0,-'+(translateHeight/2)+'px,0)';slides[loopNr].style.transform='translate3d(0,-'+(translateHeight/2)+'px,0)';slides[loopNr].style.opacity=1;slides[loopNr].style.pointerEvents='auto';navDots[loopNr].style.opacity=1;}
if(loop&&video.currentTime>=breakpoints[loopNr].loopEnd){video.currentTime=breakpoints[loopNr].loopStart;if(loopNr<loopCount){loopArrow.style.opacity=1;}}}else{if(loopNr>0&&video.currentTime<breakpoints[loopNr].start){loopNr--;}
if(!isScrolling&&loopNr<loopCount&&video.currentTime<breakpoints[loopNr].end&&video.currentTime>breakpoints[loopNr].loopEnd){loop=true;slides[loopNr].style.webkitTransform='translate3d(0,-'+(translateHeight/2)+'px,0)';slides[loopNr].style.transform='translate3d(0,-'+(translateHeight/2)+'px,0)';slides[loopNr].style.opacity=1;slides[loopNr].style.pointerEvents='auto';for(i=loopNr+1;i<slides.length;++i){slides[i].style.webkitTransform='translate3d(0,1px,0)';slides[i].style.transform='translate3d(0,1px,0)';slides[i].style.opacity=0;slides[i].style.pointerEvents='none';}
navDots[loopNr].style.opacity=1;for(i=loopNr+1;i<navDots.length;++i){navDots[i].style.opacity=0;}}
if(loop&&video.currentTime<=breakpoints[loopNr].loopStart){video.currentTime=breakpoints[loopNr].loopEnd;loopArrow.style.opacity=1;}}};var clearAll=function(){clearInterval(intervalRewind);intervalRewind=null;loopArrow.style.opacity=1;};var handleScrollUp=function(){rewind=true;loop=false;if(intervalRewind===null){video.pause();intervalRewind=setInterval(function(){if(video.currentTime<0.1){clearAll();}else{video.currentTime-=0.1;}},60);}
loopArrow.style.opacity=0;if(loopNr>0){slides[loopNr].style.webkitTransform='translate3d(0,1px,0)';slides[loopNr].style.transform='translate3d(0,1px,0)';slides[loopNr].style.opacity=0;slides[loopNr].style.pointerEvents='none';}};var handleScrollDown=function(){clearInterval(intervalRewind);intervalRewind=null;rewind=false;if(loopNr<loopCount){loop=false;}
if(video.paused){video.play();}
loopArrow.style.opacity=0;if(loopNr<loopCount){slides[loopNr].style.webkitTransform='translate3d(0,-'+(translateHeight*1.5)+'px,0)';slides[loopNr].style.transform='translate3d(0,-'+(translateHeight*1.5)+'px,0)';slides[loopNr].style.opacity=0;slides[loopNr].style.pointerEvents='none';}};var playVideo=function(){$('html').addClass('play-video');video.currentTime=1;setTimeout(function(){translateHeight=$(window).height()*0.1;for(i=0;i<slides.length;++i){slides[i].className+=' transition-ready';}},600);$(window).on('resize',function(){translateHeight=$(window).height()*0.1;});$(window).on('swipeup',function(){handleScrollDown();});$(window).on('swipedown',function(){handleScrollUp();});$(window).on('wheel',function(e){if(e.originalEvent.deltaY<0){handleScrollUp();}else{handleScrollDown();}});setInterval(loopAndSlide,100);};var isTouchDevice=function(){return'ontouchstart'in window||navigator.maxTouchPoints;};$('.slides-container').fullpage({navigation:true,afterLoad:function(anchorLink,index){$('html').addClass('hide-video');}});video.addEventListener('loadeddata',function(){if(video.readyState>2){$('.slides-container').fullpage.destroy('all');$('.slides-container').attr('style','');$('html').removeClass('hide-video');playVideo();}});}})(jQuery);(function($){$('.js-menu-toggle').on('click',function(){$('html').toggleClass('nav-open');$('.nav-links').slideToggle();});$('.page-template-page-company .second-level-menu ul').slick({slidesToShow:6,infinite:false,arrows:false,focusOnSelect:true,variableWidth:true,edgeFriction:0,responsive:[{breakpoint:480,settings:{slidesToShow:1,focusOnSelect:true,centerMode:true,}}]});$('.page-template-page-technology .second-level-menu ul').slick({slidesToShow:7,infinite:false,arrows:false,focusOnSelect:true,variableWidth:true,edgeFriction:0,responsive:[{breakpoint:1180,settings:{slidesToShow:5,focusOnSelect:true,centerMode:true,}},{breakpoint:680,settings:{slidesToShow:1,focusOnSelect:true,centerMode:true,}}]});$('.second-level-menu a').on('click',function(e){e.preventDefault();var anchor=$(this).attr('href'),section=$(anchor);jQuery('html, body').animate({scrollTop:Math.ceil(section.offset().top-80)},600);});updateSecondMenuActiveItem();$(window).on('scroll',function(){clearTimeout($.data(this,'scrollTimer'));$.data(this,'scrollTimer',setTimeout(function(){updateSecondMenuActiveItem();},150));});})(jQuery);function updateSecondMenuActiveItem(){jQuery('.js-anchor-section').each(function(){var winScrollTop=jQuery(window).scrollTop();var currentSection=jQuery(this);var menuId='#'+currentSection.attr('id');var menuItem=jQuery('.second-level-menu ul a[href="'+menuId+'"]').closest('li');if(currentSection.offset().top-jQuery('.site-header').outerHeight()-2<winScrollTop&&winScrollTop<=currentSection.offset().top+currentSection.outerHeight()){menuItem.addClass('slick-current').siblings('li').removeClass('slick-current');jQuery('.second-level-menu ul').slick('slickGoTo',menuItem.index(),true);}else{menuItem.removeClass('slick-current');}});}
jQuery(window).on('load',function(){var secondMenuTopPos;if(jQuery('.second-level-menu').length){secondMenuTopPos=jQuery('.second-level-menu').offset().top;jQuery(window).on('resize',function(){secondMenuTopPos=jQuery('.second-level-menu').offset().top;});}
stickyHeaders(secondMenuTopPos);jQuery(window).scroll(function(){stickyHeaders(secondMenuTopPos);});});function stickyHeaders(secondMenuTopPos){var scrollPos=jQuery(window).scrollTop();if(scrollPos>jQuery('main').offset().top){jQuery('.site-header').addClass('sticky').removeClass('page-top');}
if(jQuery('.second-level-menu').length){if(scrollPos>secondMenuTopPos-60&&!jQuery('html').hasClass('nav-open')){jQuery('.second-level-menu').addClass('sticky');jQuery('.site-header').addClass('page-scrolled').removeClass('sticky').removeClass('page-top');}else{jQuery('.site-header').addClass('sticky').removeClass('page-top').removeClass('page-scrolled');jQuery('.second-level-menu').removeClass('sticky');}}
if(scrollPos<=jQuery('main').offset().top){jQuery('.site-header').removeClass('sticky').addClass('page-top');}}
(function($){var loadNewsArticles={pageToLoad:1,scrollToItem:null,hasHistory:false,$pageInput:jQuery('#load-page'),$scrollInput:jQuery('#scroll-to-item'),$button:jQuery('.js-load-news'),$container:jQuery('#load-news-articles'),init:function(){if(this.$container.length){if(this.$pageInput.val()>1){this.pageToLoad=this.$pageInput.val();this.hasHistory=true;}
this.loadItems(this.pageToLoad,this.hasHistory);this.setupEvents();}},loadItems:function(pageNumber,hasHistory){var self=this;var categoryToLoad=self.$button.data('category');var params={action:'despark_news',pageNumber:pageNumber};if(categoryToLoad){params.newsCat=categoryToLoad;}
if(hasHistory===true){params.hasHistory=true;}
self.$button.data('current-page',pageNumber);self.$pageInput.val(pageNumber);jQuery.ajax({type:'POST',dataType:'html',url:ajax_news.despark_ajaxurl,data:params,success:function(data){var output=JSON.parse(data);var endMessage=jQuery('<p class="end-text"></p>');var endText=ajax_news.despark_no_more_news;if(categoryToLoad)endText=ajax_news.despark_no_more_news_in_cat;if(output.markup.length){self.$container.append(output.markup);if(!output.hasMorePages){endMessage.text(endText);endMessage.insertBefore(self.$button);self.$button.remove();}else{self.$button.removeAttr('disabled');self.$button.removeClass('is-disabled');self.$button.removeClass('is-loading');}
if(self.$scrollInput.val()){self.scrollToElement(self.$scrollInput.val());self.$scrollInput.removeAttr('value');}}else{endMessage.text(endText);endMessage.insertBefore(self.$button);self.$button.remove();}},error:function(jqXHR,textStatus,errorThrown){console.log(jqXHR+" :: "+textStatus+" :: "+errorThrown);}});return false;},setupEvents:function(){var self=this;self.$button.on('click',function(event){event.preventDefault();self.$scrollInput.removeAttr('value');var $clicked=jQuery(this);if(!$clicked.hasClass('is-disabled')){var currentPage=parseInt(self.$button.data('current-page'));var nextPage=parseInt(currentPage+1);$clicked.attr('disabled',true);$clicked.addClass('is-disabled');self.loadItems(nextPage);}});jQuery(self.$container).on('click','.news-article a',function(event){event.preventDefault();var $clicked=jQuery(this),newLocation=$clicked.attr('href'),clickedPostId=$clicked.closest('.news-article').data('post-id');self.$scrollInput.val(clickedPostId);window.location.href=newLocation;});},scrollToElement:function(elementID){var item=jQuery('[data-post-id='+elementID+']');if(item.length){jQuery('html, body').animate({scrollTop:(item.offset().top-100)},600);}}};loadNewsArticles.init();})(jQuery);(function($){var singleLightVideos=$('.page-template-page-technology .js-video');singleLightVideos.lightGallery({getCaptionFromTitleOrAlt:false,controls:false,selector:'a'});singleLightVideos.on('onBeforeOpen.lg',function(event){$('body').addClass('lg-has-video');});singleLightVideos.on('onCloseAfter.lg',function(event){$('body').removeClass('lg-has-video');});$('.js-compare').on('click',function(){var popup=$('.compare-popup');if(popup.length){popup.addClass('is-visible');$('body').addClass('lg-on');var popupHeight=popup.outerHeight();var contentHeight=$('.inner',popup).outerHeight();var difference=40;if(popupHeight>contentHeight+difference){difference=popupHeight-contentHeight-difference;}
$('.inner',popup).css('margin-top',difference/2);var closeThePopup=function(){popup.removeClass('is-visible');$('body').removeClass('lg-on');};$(document).keydown(function(event){if(event.keyCode==27){closeThePopup();}});popup.on('click',function(event){if(!$(event.target).hasClass('.inner')&&$(event.target).closest('.inner').length===0){closeThePopup();}});$('.close-popup',popup).on('click',function(){closeThePopup();});}});$('.js-start-download').on('click',function(){var link=$(this);var fileUrl=link.data('href');var fileTitle=link.data('title');var popup=$('.download-popup');if(popup.length){var downloadLink=$('.link-underline',popup);var closeBtn=$('.close-popup',popup);var subscribeForm=$('form',popup);downloadLink.attr('href',fileUrl).attr('download',fileTitle);popup.addClass('is-visible');$('body').addClass('lg-on');var popupHeight=popup.outerHeight();var contentHeight=$('.inner',popup).outerHeight();var difference=40;if(popupHeight>contentHeight+difference){difference=popupHeight-contentHeight-difference;}
$('.inner',popup).css('margin-top',difference/2);var closeDownloadPopup=function(){resetContactForm(subscribeForm[0]);downloadLink.removeAttr('href').removeAttr('download');popup.removeClass('is-visible');$('body').removeClass('lg-on');};$(document).keydown(function(event){if(event.keyCode==27){closeDownloadPopup();}});popup.on('click',function(event){if(!$(event.target).hasClass('.inner')&&$(event.target).closest('.inner').length===0){closeDownloadPopup();}});closeBtn.one('click',function(){closeDownloadPopup();});downloadLink.one('click',function(){setTimeout(function(){closeDownloadPopup();},1000);});var wpcf7Elm=document.querySelector('.download-popup .wpcf7');wpcf7Elm.addEventListener('wpcf7mailsent',function(event){top.location.href=fileUrl;setTimeout(function(){closeDownloadPopup();},1000);},false);}else{link.attr('href',fileUrl).attr('download',fileTitle);link.off('click').trigger('click');}});})(jQuery);