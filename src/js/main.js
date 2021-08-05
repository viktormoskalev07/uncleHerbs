"use strict"
const body=document.querySelector("body");
const html=document.querySelector("html");
const header=document.querySelector("header");
const btnMenu=document.querySelector(".btn-menu");

window.onload= function(){
  pagescroll(); 
}
      @@include('modules/noscrol.js') //он вызывается в навигации 
      @@include('modules/nav.js') 
      @@include('modules/fixed-header.js')
 
 
@@include('modules/accordion.js')

 



