$(document).ready(function(){
    //we write everything here
    
    setTimeout(function(){
        $("#myModal").modal('show');
    },3000); 
    $('#myCarousel').carousel({
        interval: 2000
    });

   

    $('#carouselControl').click(function(){
        
        if( $('#carouselControl').hasClass('paused') ){
            $('#myCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        }
        else {
            $('#myCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });


    $('#modalLauncher').click(function(){
        $('#exampleModal').modal({
            backdrop: false
        });
    });

  
    
    if(!localStorage.getItem("cartSize")) {
        localStorage.setItem("cartSize", 0);
      }
      
      
      function buyItem(itemNum, productName) {
        /* 
        1- S2000 $10.00
        2- Viper $10.00
        3- FRS $10.00
       
       
        */
       $("#checkoutModal") .modal("show");
       var itemName = "product" + itemNum;
       if (localStorage.getItem(itemName)){
      //added   
      var currentItemSize = Number(localStorage.getItem("cartSize"));
      alert("This Item Has Been Already Added");
       } else
       {
        localStorage.setItem(itemName, productName);
        var currentItemSize = Number(localStorage.getItem("cartSize"));
        currentItemSize++;
        localStorage.setItem("cartSize", currentItemSize);
       }
      }
    

});
