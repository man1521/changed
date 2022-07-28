"use strict";
const poster = document.querySelector("header img");
const title = document.querySelector("title");
//const advs = document.querySelectorAll("#main_promo .mp");
//advs.forEach(adv=> adv.remove());
const div = document.querySelector('.main_promo');
div.remove();

poster.src = "img/bg2.jpg";
 if (poster.src.slice(31) === "bg1.jpg") {
	poster.alt = "GEMINI MAN";

} else {
	poster.alt = "Hitman's wife's bodyguard";
}
title.textContent = poster.alt;

