(function () {
  "use strict";
  console.log("reading js");

  const sections = document.querySelectorAll("section");
  const formContainer = document.querySelector(
    "#madlib-questions, #form-page, #opening-page"
  ); // The entire form section
  const madlibSection = document.querySelector("#madlib"); // The section to show after submission

  document.querySelector("#gotoinput1").addEventListener("click", function () {
    sections[1].className = "orange";
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const animal = document.querySelector("#animal").value;
    const food = document.querySelector("#food").value;
    const verb = document.querySelector("#verb").value;
    const adj = document.querySelector("#adj").value;
    const alcohol = document.querySelector("#alcohol").value;

    console.log(name);
    if (name) {
      const nameInsert = document.querySelector("#nameInsert");
      nameInsert.innerHTML = name;
      // document.querySelector('#forminput').style.display = 'none';
      document.querySelector("#madlib").className = "orange";
    } else {
      document.querySelector("#name").setAttribute("placeholder", "Please enter a word");
    }

    console.log(animal);
    if (animal) {
      const animalInsert = document.querySelector("#animalInsert");
      animalInsert.innerHTML = animal;

    } else {
      document.querySelector("#animal").setAttribute("placeholder", "Please enter a word");
    }

    console.log(food);
    if (food) {
      const foodInsert = document.querySelector("#foodInsert");
      foodInsert.innerHTML = food;

    } else {
      document.querySelector("#food").setAttribute("placeholder", "Please enter a word");
    }

    console.log(verb);
    if (verb) {
      const verbInsert = document.querySelector("#verbInsert");
      verbInsert.innerHTML = verb;

    } else {
      document.querySelector("#verb").setAttribute("placeholder", "Please enter a word");
    }

    console.log(adj);
    if (adj) {
      const adjInsert = document.querySelector("#adjInsert");
      adjInsert.innerHTML = adj;

    } else {
      document.querySelector("#adj").setAttribute("placeholder", "Please enter a word");
    }

    console.log(alcohol);
    if (alcohol) {
      const alcoholInsert = document.querySelector("#alcoholInsert");
      alcoholInsert.innerHTML = alcohol;

    } else {
      document.querySelector("#alcohol").setAttribute("placeholder", "Please enter a word");
    }


    formContainer.classList.add("hidden"); // Hides the entire form section
    madlibSection.classList.remove("hidden");
  });
})();
