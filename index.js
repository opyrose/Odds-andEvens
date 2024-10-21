// TODO: this file! :)

//create a variable that is the user input
//retrieve user input with document query 
//console.log(userInput)
//create an event for the button 
//when button is clicked the user input is pushed to the number bank
const addNumberButton = document.querySelector(`#addnumber`)
addNumberButton.addEventListener(`click` , (event) =>{
  event.preventDefault();
 const userInput = document.querySelector(`input`).valueAsNumber;
//const userNumber = [...userInput];
  const numberBank = document.querySelector(`output`);

numberBank.append(`${userInput}`);

// const bankArray = (numberBank).map(() =>[]);

// console.log(typeof numberBank);//object

// const bankArray = [
// ]

// bankArray.push(numberBank)


//  console.log(bankArray);

//with the numbers in the bank the buttons will sort them
//grab the sort one button to sort the first button to odds or evens
const sortOneNumButton = document.querySelector(`#sortOne`);

sortOneNumButton.addEventListener(`click`, (event) =>{
        
        const evenNumbers = document.querySelector(`#evens`);
        const oddNumbers = document.querySelector(`#odds`);

        evenNumbers.innerText = (`${numberBank}`);
        oddNumbers.innerText = (`${numberBank}`);

    if(event.target.tagName === `SORT 1` ){

      if (numberBank %2 === 0){
        evenNumbers.append(numberBank);}
      
          if (numberBank %2 !== 0){
        oddNumbers.append(numberBank)
          };
      };
  });
  
  const sortAllNumbersButton = document.querySelector(`#sortAll`);

  sortAllNumbersButton.addEventListener(`click`, (event) =>{ 
    const evenNumbers = document.querySelector(`#evens`);
    const oddNumbers = document.querySelector(`#odds`);

    evenNumbers.innerHTML = (`${numberBank}`);
    oddNumbers.innerHTML = (`${numberBank}`);
    if(event.target.tagName === `SORT ALL`){

  if (numberBank %2 === 0){
    evenNumbers.append(numberBank);
  };
      if (numberBank %2 !== 0){
    oddNumbers.append(numberBank)
  };

    };
  })

  });



  //reset the input field each time the button is pressed 

