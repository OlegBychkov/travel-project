"use strict";

const burger = document.querySelector('.burger');
const spans = burger.querySelectorAll('span');
const nav = document.querySelector('.nav');

const classList = ['first', 'second', 'third'];

burger.addEventListener('click',()=>{
    let i = 0
    spans.forEach((span)=>{
        span.classList.toggle(classList[i]);
        i++;
    })
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no-scroll');
})


