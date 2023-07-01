'use strict';

const 
	  cards = document.getElementsByClassName('card-wrapper'),
	  groups = document.getElementsByClassName('group-wrap'),
	  wrappers = document.getElementsByClassName('white-wrapper');

for(let i=0;i<cards.length;i++){
    cards[i].onclick = function() {
    	if ($(window).width() < 1280) {
			groups[i].classList.toggle('active');
			wrappers[i].classList.toggle('active');
		}
    }
}
