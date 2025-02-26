(function(){
    'use strict';
    console.log('reading js');


    // open overlay one
    document.querySelector('#open1').addEventListener('click', function(event){ 
        event.preventDefault();
        document.querySelector ('#overlay1').className = 'showing';
    });
    // close overlay 1
    document.querySelector('.close').addEventListener('click', function(event){  
        event.preventDefault();
        document.querySelector ('#overlay1').className = 'hidden';
    });
    // 2
    document.querySelector('#open2').addEventListener('click', function(event){ 
        event.preventDefault();
        document.querySelector ('#overlay2').className = 'showing';
    });
    document.querySelector('.close').addEventListener('click', function(event){  
        event.preventDefault();
        document.querySelector ('#overlay2').className = 'hidden';
    });
    // 3
    document.querySelector('#open3').addEventListener('click', function(event){ 
        event.preventDefault();
        document.querySelector ('#overlay3').className = 'showing';
    });
    document.querySelector('.close').addEventListener('click', function(event){  
        event.preventDefault();
        document.querySelector ('#overlay3').className = 'hidden';
    });



document.addEventListener('keydown', function (event){
    if(event.key === 'Escape'){
        document.querySelector('#overlay1').className = 'hidden';
    }
}); 
document.addEventListener('keydown', function (event){
    if(event.key === 'Escape'){
        document.querySelector('#overlay2').className = 'hidden';
    }
});   


})();

