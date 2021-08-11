"use strict"
const body =document.querySelector("body");
const html=document.querySelector("html");
const header=document.querySelector(".header");
const navBtn=document.querySelector(".nav__btn");
 
window.onload= function(){
  pagescroll(); 
}  ;
 
      @@include('modules/nav.js') 
      @@include('modules/fixed-header.js')
  
      @@include('lazyscripts.js')
      @@include('modules/accordion.js')
      @@include('modules/fetch-inst.js')

 

//preloader
if (document.querySelector(".preloader")) {
  const loader = document.querySelector(".preloader");
  loader.style.top = document.querySelector(".header").clientHeight + "px";
  hidescroll();

  window.onload = function () {
    document.body.classList.add("loaded_hiding");
    showscroll();
    window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
    }, 300);
  };
  setTimeout(function() {
    document.body.classList.remove("loaded_hiding");
  }, 5000)
}
//preloader

