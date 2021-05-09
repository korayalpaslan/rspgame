
// Selecting Elements

// Openning & Closing Rules Page
const rulesButton = document.querySelector('#rules');
const closeButton = document.querySelector('#close');
const overlaySection = document.querySelector('.overlay');

// Your Pick Event
const selection = document.querySelector('.selection'); // I used event capturing concept here
const yourCircle = document.querySelector('#paper');
const houseCircle = document.querySelector('#scissors');


// Play Again
const playAgain = document.querySelector('#play-again');

let i = 0;



eventListeners();

function eventListeners(){

    // Openning & Closing Rules Page
    rulesButton.addEventListener('click',openRules);
    closeButton.addEventListener('click',closeRules);

    // Your Pick Event
    selection.addEventListener('click',selectingYourPick);

    // Play Again
    playAgain.addEventListener('click',resetGame);
}


// Openning & Closing Rules Page

function openRules(e){
    overlaySection.style = ('display: flex');
}

function closeRules(e){
    overlaySection.style = ('display: none');
}

// Picking

function selectingYourPick(e){

    if(e.target.id === 'rock' || e.target.id === 'rock-icon'){
        document.querySelector('#paper').className = 'left rock';
        document.querySelector('#paper-icon').setAttribute("src", "images/icon-rock.svg");
        document.querySelector('.game').classList.add('steptwo');

        setTimeout(function(){ 
            const house = ['paper','scissors'];
            const index = Math.floor(Math.random() * 2); 
            document.querySelector('.game').classList.remove('steptwo');
            document.querySelector('.game').classList.add('stepthree');
            document.querySelector('#scissors').className = `right ${house[index]}`;
            console.log(document.querySelector('#scissors'));

            if(document.querySelector('#scissors').className === 'right scissors'){
                document.querySelector('#scissors-icon').setAttribute("src", "images/icon-scissors.svg");
                document.querySelector('.game').classList.remove('stepthree');
                document.querySelector('.game').classList.add('stepfour');
                document.querySelector('#result').textContent = 'You Win';

                i ++
                document.querySelector('#score').textContent = `${i}`;

            } else {
                document.querySelector('#scissors-icon').setAttribute("src", "images/icon-paper.svg");
                document.querySelector('.game').classList.remove('stepthree');
                document.querySelector('.game').classList.add('stepfour');
                document.querySelector('#result').textContent = 'You Lose';
            }

        }, 2000);
    }



    if(e.target.id === 'paper' || e.target.id === 'paper-icon'){
        document.querySelector('#paper').className = 'left paper';
        document.querySelector('#paper-icon').setAttribute("src", "images/icon-paper.svg");
        document.querySelector('.game').classList.add('steptwo');


        setTimeout(function(){ 
            const house = ['rock','scissors'];
            const index = Math.floor(Math.random() * 2); 
            document.querySelector('.game').classList.remove('steptwo');
            document.querySelector('.game').classList.add('stepthree');
            document.querySelector('#scissors').className = `right ${house[index]}`;
            console.log(document.querySelector('#scissors'));

            if(document.querySelector('#scissors').className === 'right rock'){
                document.querySelector('#scissors-icon').setAttribute("src", "images/icon-rock.svg");
                document.querySelector('.game').classList.remove('stepthree');
                document.querySelector('.game').classList.add('stepfour');
                document.querySelector('#result').textContent = 'You Win';

                i ++
                document.querySelector('#score').textContent = `${i}`;

            } else {
                document.querySelector('#scissors-icon').setAttribute("src", "images/icon-scissors.svg");
                document.querySelector('.game').classList.remove('stepthree');
                document.querySelector('.game').classList.add('stepfour');
                document.querySelector('#result').textContent = 'You Lose';
            }

        }, 2000);

        
    }



    if(e.target.id === 'scissors' || e.target.id === 'scissors-icon'){
        document.querySelector('#paper').className = 'left scissors';
        document.querySelector('#paper-icon').setAttribute("src", "images/icon-scissors.svg");
        document.querySelector('.game').classList.add('steptwo');


        setTimeout(function(){ 
            const house = ['rock','paper'];
            const index = Math.floor(Math.random() * 2); 
            document.querySelector('.game').classList.remove('steptwo');
            document.querySelector('.game').classList.add('stepthree');
            document.querySelector('#scissors').className = `right ${house[index]}`;
            console.log(document.querySelector('#scissors'));

            if(document.querySelector('#scissors').className === 'right paper'){
                document.querySelector('#scissors-icon').setAttribute("src", "images/icon-paper.svg");
                document.querySelector('.game').classList.remove('stepthree');
                document.querySelector('.game').classList.add('stepfour');
                document.querySelector('#result').textContent = 'You Win';

                i ++
                document.querySelector('#score').textContent = `${i}`;

            } else {
                document.querySelector('#scissors-icon').setAttribute("src", "images/icon-rock.svg");
                document.querySelector('.game').classList.remove('stepthree');
                document.querySelector('.game').classList.add('stepfour');
                document.querySelector('#result').textContent = 'You Lose';
            }

        }, 2000);
    }


}

// Play Again

function resetGame(){
    document.querySelector('.game').className = 'game';
    document.querySelector('#paper').className = 'left paper';
    document.querySelector('#paper-icon').setAttribute("src", "images/icon-paper.svg");
    document.querySelector('#scissors').className = 'right scissors';
    document.querySelector('#scissors-icon').setAttribute("src", "images/icon-scissors.svg");
}