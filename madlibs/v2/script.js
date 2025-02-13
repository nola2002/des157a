(function(){
    'use strict';
    console.log('reading js');

    //code to go from opening page to questions
    const section = document.querySelectorAll('section');

    document.querySelector('#gotoquestions').addEventListener('click', function(){
        event.preventDefault();
        section.className = "form-page";
    });


    //code to go from questions to results



    //code to insert user words into mad libs
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.querySelector('#name').value;

        console.log(name);
        if(name) {
            const nameInsert = document.querySelector('#nameInsert');
            nameInsert.innerHTML = name;
            // document.querySelector('#forminput').style.display = 'none';
            // document.querySelector('#madlib').className = ;
        }else { 
            document.querySelector('#name').setAttribute(
                'placeholder', 'Please enter a word');
        }
    }
    
})();