 
const navFunc = function (){
   const nav = document.querySelector(".nav");
    document.querySelector(".btn-menu").addEventListener("click" , togglenav);
    document.querySelector(".nav-menu").onclick = closenav; 
    document.querySelector(".nav-background").onclick = closenav;
    function closenav(){
      nav.classList.remove("nav-open");
      btnMenu.style.marginRight="0";
      showscroll(); 
    }
    function togglenav() {
      nav.classList.toggle("nav-open");
    if(nav.classList.contains("nav-open")){
      btnMenu.style.marginRight=window.innerWidth-html.offsetWidth +"px";
      hidescroll(); 
    } else {
      showscroll();
      btnMenu.style.marginRight="0";
    }
    }
}
navFunc();
 
 