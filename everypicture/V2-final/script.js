(function(){
    'use strict';
    console.log('reading js');

    // parallel arrays of strings that represent id's
    const overlayShapes = ['#open1', '#open2', '#open3', '#open4', '#open5', '#open6', '#open7', '#open8', '#open9', '#open10', '#open11', '#open12'];
    const overlayInfos = ['#overlay1', '#overlay2', '#overlay3', '#overlay4', '#overlay5', '#overlay6', '#overlay7', '#overlay8', '#overlay9', '#overlay10', '#overlay11', '#overlay12'];
    // const hotspotsArray = ['#hotspot1', '#hotspot2'];

    // node lists of elements so we can attach event listeners
    const close = document.querySelectorAll('.close');
    const overlays = document.querySelectorAll('.overlay');
    // const hotspots = document.querySelectorAll('.hotspot');
    // console.log(hotspots);

    // console.log(overlays);

    for(let i = 0; i < overlayShapes.length; i++){
        document.querySelector(overlayShapes[i]).addEventListener('click', function(event){
            event.preventDefault;
            hideAllOverlays();
            console.log(event.target.id);
            document.querySelector(overlayInfos[i]).className = 'overlay showing';
            // document.querySelector(hotspotsArray[i]).className = 'hotspot showingHotspot';
            // console.log(overlays);
        })
    }
    for(let i = 0; i < close.length; i++){
        close[i].addEventListener('click', function(event){  
            event.preventDefault();
            hideAllOverlays();
        });
    }

    // add escape code

    document.addEventListener('keydown', function (event){
        if(event.key === 'Escape'){
            hideAllOverlays();
        }
    }); 

    function hideAllOverlays() {
        console.log('hiding all overlays');
        for (let i = 0; i < overlays.length; i++) {
            overlays[i].className = 'overlay hidden';
            // hide overlays could go here
            

        }
    }


    // open overlay one
    // document.querySelector('#open1').addEventListener('click', function(event){ 
    //     event.preventDefault();
    //     hideAllOverlays();
    //     document.querySelector ('#overlay1').className = 'overlay showing';
    //     console.log(overlays);
    // });
    // close overlay 1
    // document.querySelector('.close').addEventListener('click', function(event){  
    //     event.preventDefault();
    //     document.querySelector ('#overlay1').className = 'hidden';
    // });
    // 2
    // document.querySelector('#open2').addEventListener('click', function(event){ 
    //     event.preventDefault();
    //     hideAllOverlays();
    //     document.querySelector ('#overlay2').className = 'showing';
    //     console.log(overlays);
    // });
    // document.querySelector('.close').addEventListener('click', function(event){  
    //     event.preventDefault();
    //     document.querySelector ('#overlay2').className = 'hidden';
    // });
    // 3
    // document.querySelector('#open3').addEventListener('click', function(event){ 
    //     event.preventDefault();
    //     document.querySelector ('#overlay3').className = 'showing';
    // });
    // document.querySelector('.close').addEventListener('click', function(event){  
    //     event.preventDefault();
    //     document.querySelector ('#overlay3').className = 'hidden';
    // });



    



// document.addEventListener('keydown', function (event){
//     if(event.key === 'Escape'){
//         document.querySelector('#overlay1').className = 'hidden';
//     }
// }); 
// document.addEventListener('keydown', function (event){
//     if(event.key === 'Escape'){
//         document.querySelector('#overlay2').className = 'hidden';
//     }
// });   


})();

