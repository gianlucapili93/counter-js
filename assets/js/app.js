//Create container div
let container = document.createElement('div');
container.className = 'container';
document.body.append(container);

//Create card into container
let card = document.createElement('div');
card.className = 'card';
container.append(card);

//CREATE ELEMENT INTO CARD
    //Title card 
    let card_title = document.createElement('h1');
    card_title.className = 'card-title';
    card_title.innerHTML = "Counter";
    card.append(card_title);

    //Number to show
    let card_show_number = document.createElement('div');
    let number = 0;
    card_show_number.className = 'card-show-number';
    card_show_number.setAttribute('id','number');
    card_show_number.innerHTML = number;
    card.append(card_show_number);

    //Section button
    let card_section_buttons = document.createElement('div');
    card_section_buttons.className = 'card-section-btns';
    card.append(card_section_buttons);

        //Button for decrement number
        let card_button_minus = document.createElement('button');
        card_button_minus.className = 'card-btn';
        card_button_minus.setAttribute('id','decrement');
        card_button_minus.innerHTML = '-';
        card_section_buttons.append(card_button_minus);

        //Button for incremenet number
        let card_button_plus = document.createElement('button');
        card_button_plus.className = 'card-btn';
        card_button_plus.setAttribute('id','increment');
        card_button_plus.innerHTML = '+';
        card_section_buttons.append(card_button_plus);


//ACTION PART
    //Focus button
    let increment = document.getElementById('increment');
    let decrement = document.getElementById('decrement');
    //Focus number
    let int = document.getElementById('number');

    //Set default style
    if (number === 0) {
        decrement.disabled = true;
    }

    //Function to decrement number
    decrement.addEventListener('click',() => {
        if (number > 0)  {
            number -= 1;
            int.innerHTML = number;
        }
        if (number === 0) {
            decrement.disabled = true;
        }
    })
    
    //Function to incremnet number
    increment.addEventListener('click',() => {
        number += 1;
        int.innerHTML = number;

        if (number !== 0) {
            decrement.disabled = false;
        }
    })

    