// отключить прокрутку
function hidescroll(){
    body.style.paddingRight=window.innerWidth-html.offsetWidth +"px";
    body.style.overflow="hidden";
  }
  
  function showscroll(){
    body.style.paddingRight=0;
    body.style.overflow="visible"
  }
  
  let scrolid = 0 ;
  function togglescroll(){
    if (scrolid==0){
      body.style.paddingRight=window.innerWidth-html.offsetWidth +"px";
      body.style.overflow="hidden";
      scrolid=1;
    } else{
      body.style.paddingRight=0;
      body.style.overflow="visible"
      scrolid=0;
    }
  }
  
  // отключить прокрутку