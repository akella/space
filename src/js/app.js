import {TimelineMax} from 'gsap';
import Splitter from 'split-html-to-chars';



let els = document.querySelectorAll(".js-splitme");
[].forEach.call(els, function(el) {
    el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
});


let tl = new TimelineMax();

performance.mark('start');
// for (var i = 0; i < 1000000; i++) {
// 	document.querySelectorAll('.babasdasdadasda');
// }
performance.mark('bla');

tl
	.fromTo('.loader__inside', 3, {scale: 0.01},{scale: 1,onComplete: function(){
		$('.loader').remove();
		performance.mark('loader');
	}})
	.fromTo('.header__left', 1, {y:-100,opacity: 0}, {y: 0,opacity: 1,onComplete: function(){
		performance.mark('header');
	}})
	.fromTo('.header__right', 1, {x: 200}, {x:0},"-=0.7")
	.staggerFromTo('.nav a', 0.5, {opacity:0,y: 30}, {opacity: 1,y: 0}, 0.03)
	.staggerFromTo('.hero__title .letter', 0.3, {y: 20,opacity: 0}, {y:0,opacity: 1,ease: Back.easeOut.config(3)},0.04)
	.fromTo('.hero p', 0.5, {y: 30,opacity: 0}, {x:0,opacity: 1,onComplete: function(){
		performance.mark('end');
		performance.measure('🥕🥕🥕🥕🥕','start','bla');
		performance.measure('🥕🥕🥕🥕🥕','start','loader');
		performance.measure('🍐🍐🍐🍐🍐','loader','header');
	}},"-=0.7");
	// .fromTo('.hero__action', 0.3, {scale: 0.1,opacity: 0}, {scale: 1,opacity: 1},"-=0.7");

	

