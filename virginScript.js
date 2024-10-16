let modeChange = document.querySelector(".button1");


// let one = () => {
//     console.log("worked");
// }

// modeChange.addEventListener('click', one);

// modeChange.onClick(one);

 let modeChanger = () =>
     {

        let darkChanges = document.querySelector(".vlogo");

         if(darkChanges.style.backgroundColor == "white" ){
            darkChanges.style.backgroundColor = "black";
           
           }else{
            darkChanges.style.backgroundColor = "white"
           }

           let bodyChanges = document.querySelector("body");

         if(bodyChanges.style.backgroundColor == "white" ){
            bodyChanges.style.backgroundColor = "black";
           
           }else{
            bodyChanges.style.backgroundColor = "white"
           }

       
          // Correct property and color value
     

        let changes = document.querySelectorAll("p");

         changes.forEach(change => {
           if(bodyChanges.style.backgroundColor == "black" ){
            change.style.color = "white";
            darkChanges;
           }else{
            change.style.color = "black"
           } // Correct property and color value
        });

        //change.style.color = "white";
 }

modeChange.addEventListener('click' , modeChanger);

// Correctly select the button with the class of 'mode-button'
// let modeChange = document.querySelector(".mode-button");

// // Define the event handler function
// let modeChanger = (event) => {
//     console.log(event);
// }

// // Add the event listener to the button
// modeChange.addEventListener('click', modeChanger);
