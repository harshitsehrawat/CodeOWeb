const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');
    
     let lft=0;
     
    buttonRight.onclick = function () {
      lft+=screen.width;
      if(lft>=(5*screen.width)){
        lft=0;
        
      }
      document.getElementById('container').scrollLeft =lft ;
    
    };
    let rft=lft;
    buttonLeft.onclick = function () {
      rft=rft-screen.width);
      if(rft<0){
        rft =(5*screenwidth);
      }
      
      document.getElementById('container').scrollLeft = rft;
    
    };