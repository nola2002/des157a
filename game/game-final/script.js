(function(){
    'use strict';
    console.log('reading js');

    const shape = document.querySelector('#shape1')
    const circles = document.querySelector('circle')
    const score = document.querySelector('#score span');
    const submit = document.querySelector('submit')
    const newGame = document.querySelector('button')

    let selectedColor =
    let shownColor = 
    let score = 

    //generate the random RBG color for the shape
    function createShownColor () {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
    }

    //generate the random RBG color options for the circles



    //shape is asigned a color RBG (3 numbers 0-255)
    

    //user is given 5 simialr color options to choose from (colors with RBG values numerically slighly off from the shape colors RBG values)
    

    //on click the color the chose is selected, on submit the data is checked, correct answer = +1 point, wrong answer = -1 point
    

    //refresh game 
    function resetGame() {
       
    }
    //new game button refreshes page
    newGame.addEventListener('click', (){
        score = 0;
        resetGame();
    });




    
})();