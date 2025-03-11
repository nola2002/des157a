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
        //shape is asigned a color RBG (3 numbers 0-255)
        shape.setAttribute('fill', `rgb(${r}, ${g}, ${b})`);
        generateCircleColors();
    }

    //generate the random RBG color options for the circles
    function generateCircleColors(){
        let newR = Math.floor(Math.min(255, Math.max(0, r + (Math.random() * 50 - 25))));
        let newG = Math.floor(Math.min(255, Math.max(0, g + (Math.random() * 50 - 25))));
        let newB = Math.floor(Math.min(255, Math.max(0, b + (Math.random() * 50 - 25))));
        console.log(newR, newB, newG);
    }
    // asign each circle a diffrent color
    let circleColors = generateCircleColors(shownColor, 5);
        let color = circleColors;
        circles.style.fill = color;
    });



    //user is given 5 simialr color options to choose from (colors with RBG values numerically slighly off from the shape colors RBG values)
    

    //on click the color the chose is selected, on submit the data is checked, correct answer = +1 point, wrong answer = -1 point

    // submit.addEventListener('click', function(){
    //if user doesn't click submit, error
    //     if (selectedColor === null) {
    //     alert('Click Submit!');
    //       }
    //     if(selectedColor === shownColor) {
    //             scoreNum = 1;
    //         }else {
    //             scoreNum = -1;
    //         }
    //     // show points 
    // });
    
    

    //users clicks the circle they think is right and It has a black outline

    // circles.addEventListener('click', function(){
    //     //how do u make only the one circle that is clicked have an outline?
    //     circle.style.stroke = 'black';
    //     circle.style.strokeWidth = '2px';
    // });



    //refresh game 
    function resetGame() {
       
    }
    // new game button refreshes page
    newGame.addEventListener('click', function(){
        score = 0;
        resetGame();
    });




    
})();