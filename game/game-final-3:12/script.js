(function(){
    'use strict';
    console.log('reading js');

    const shape = document.querySelector('#shape1');
    const circles = document.querySelectorAll('circle');
    const score = document.querySelector('#score span');
    const submit = document.querySelector('#submit');
    const newGame = document.querySelector('button');
    const rightSound = new Audio('sounds/right.mp3');
    const wrongSound = new Audio('sounds/wrong.mp3');


    let selectedColor = '';
    let shownColor = '';
    let scoreNum = 0;
    let r, g, b;
    let newR, newB, newG;
    let randomCircle;
    let selectedCircleIndex = null;

    createShownColor();

    //generate the random RBG color for the shape
    function createShownColor() {
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        
        console.log(`shown color: rgb(${r}, ${g}, ${b})`);
        shownColor = `rgb(${r}, ${g}, ${b})`;
        console.log('shown color: ' + selectedColor);

        //shape is asigned a color RBG (3 numbers 0-255)
        shape.setAttribute('fill', `rgb(${r}, ${g}, ${b})`);
        generateCircleColors();
    }

    //generate the random RBG color options for the circles
    // from glenda: this will need to happen 5 times, and then another function to randomly choose one circle to change to the correct circle
    function generateCircleColors(){

        for(const circle of circles) {
            newR = r + Math.floor(Math.random() * 51) - 35;
            newG = g + Math.floor(Math.random() * 51) - 35;
            newB = b + Math.floor(Math.random() * 51) - 35;
            console.log('new generated color: ' + newR, newB, newG);
            circle.setAttribute('fill', `rgb(${newR}, ${newG}, ${newB})`);          
        }

        randomCircle = Math.floor(Math.random() * circles.length);
        console.log('randomCircle ' + randomCircle);
        circles[randomCircle].setAttribute('fill', `rgb(${r}, ${g}, ${b})`);
    }

    //users clicks the circle they think is right and It has a black outline
    circles.forEach(function(circle, index) {  
        circle.addEventListener('click', function() {
            // remove outline from all circles first
            circles.forEach(function(circle) {
                circle.style.stroke = "none";
            });
    
            // add outline only to the circle that got clicked
            circle.style.stroke = "black";
            circle.style.strokeWidth = "2px";
            
            selectedCircleIndex = index; 
        });
    });
    

    // update selectedColor to the index value of this circle

    //on click the color the chose is selected, on submit the data is checked, correct answer = +1 point, wrong answer = -1 point
    //add a click listener to all circles
    submit.addEventListener('click', function(event){
        event.preventDefault();
        if (selectedCircleIndex === null) {
            alert('Click a circle before submitting!');
            return;
        } if (selectedCircleIndex === randomCircle) {
            scoreNum += 1; 
            rightSound.play();
        } else {
            scoreNum -= 2; 
            wrongSound.play();
        }
        // shows users points
        score.textContent = scoreNum;

        //gose to the next set of colors
        next();
    });  

    //next set of colors
    function next() {
        //clear selected circle
        selectedCircleIndex = null;  
       //generate the new colors 
        createShownColor(); 
        
        //clears the ciircle outline
        circles.forEach(function(circle) {
            circle.style.stroke = "none";
        });
    }
    
    newGame.addEventListener('click', function(){
        scoreNum = 0;  
        score.textContent = scoreNum;
        selectedCircleIndex = null;  
        createShownColor();  
    
        //clears the ciircle outline
        circles.forEach(function(circle) {
            circle.style.stroke = "none";
        });
    });
    
   
})();