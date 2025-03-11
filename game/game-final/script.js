(function(){
    'use strict';
    console.log('reading js');

    const shape = document.querySelector('#shape1');
    const circles = document.querySelectorAll('circle');
    const score = document.querySelector('#score span');
    const submit = document.querySelector('submit');
    const newGame = document.querySelector('button');

    let selectedColor = '';
    let shownColor = '';
    let scoreNum = '';
    let r, g, b;
    let newR, newB, newG;

    createShownColor();

    //generate the random RBG color for the shape
    function createShownColor () {
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        // console.log(`"rgb(${r}, ${g}, ${b})"`)
        console.log(`rgb(${r}, ${g}, ${b})`);
        shape.setAttribute('fill', `rgb(${r}, ${g}, ${b})`);
    }

    //generate the random RBG color options for the circles

    // const redRandom = Math.floor(Math.random() * (15 - (-15) + 1)) + (-15);

    function generateCircleColors(){
        let newR = Math.min(255, Math.max(0, r + (Math.random() * 50 - 25)));
        let newG = Math.min(255, Math.max(0, g + (Math.random() * 50 - 25)));
        let newB = Math.min(255, Math.max(0, b + (Math.random() * 50 - 25)));
        console.log(newR, newB, newG);

    }
    // asign each circle a diffrent color


    //shape is asigned a color RBG (3 numbers 0-255)
    

    //user is given 5 simialr color options to choose from (colors with RBG values numerically slighly off from the shape colors RBG values)
    

    //on click the color the chose is selected, on submit the data is checked, correct answer = +1 point, wrong answer = -1 point
    

    //users clicks the circle they think is right and It has a black outline
    circles.addEventListener('click', function(){
        //how do u make only the one circle that is clicked have an outline?
        circle.style.stroke = 'black';
        circle.style.strokeWidth = '2px';
    });

    //if user doesn't click submit, error
    submit.addEventListener('click', function(){
        if (selectedColor === null) {
            alert('Please select a color first!');
        }
    });

    //refresh game 
    function resetGame() {
       
    }
    //new game button refreshes page
    newGame.addEventListener('click', function(){
        score = 0;
        resetGame();
    });




    
})();