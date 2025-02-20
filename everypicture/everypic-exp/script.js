(function(){
    "use strict"
    console.log('reading js')

    document.addEventListener('mousemove', reportPos);
    const wef = document.querySelector('#wef');
    let prevLoc = 0;

    function reportPos(event){
        console.log('calling reportPos');
        const windowSize = window.innerWidth;
        const percent2px = windowSize / 16;
        const xPos = event.clientX;
        const changePhoto = Math.floor(xPos / percent2px);
    
        if(changePhoto !==prevLoc){
            wef.src = `images/wef${changePhoto}.jpg`;
            prevLoc = changePhoto;
            console.log(prevLoc);
        }
    
    }
})();