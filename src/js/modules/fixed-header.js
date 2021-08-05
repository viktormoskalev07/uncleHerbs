
 // Появление меню при прокрутке 
 function pagescroll(){
    header.classList.add("fixed-header"); //меняем хедер со статика на фиксед только после загрузки страници
    const hplace=document.querySelector(".header-place"); // вместо падинга на боди используем пустой блок
    let headerheight=header.offsetHeight+"px"; //получаем текущую высоту хедера
    hplace.style.height=headerheight;  //задаем пустому блоку высоту хедера
    window.addEventListener('resize', function(event){
      if(headerheight!==header.offsetHeight+"px"){
     //меняем высоту пустого блока только если изменилась высота хедера
        headerheight=header.offsetHeight+"px";
        hplace.style.height=headerheight;
      }
    });
  
    let pscroll = 0;
    window.addEventListener('scroll', function() { 
        if (pscroll<pageYOffset&pageYOffset>header.offsetHeight){
                 header.style.transform="translateY(-100%)"; //прячем хедер при прокрутке вниз            
         }else { 
              header.style.transform="none"; //показываем хедер при прокрутке вверх        
         }  
     pscroll=pageYOffset;
   });
  }
  
   //Появление меню при прокрутке