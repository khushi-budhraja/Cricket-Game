alert(`
Bat defeats Ball
Ball defeats Stump
Stump defeats Bat`)

let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
    score = scoreStr ? JSON.parse(scoreStr) : { win : 0, lost: 0,
        tie: 0,};

    score.display_score = function() {
            return `Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}.`
        };

    displayResult();
} 

function generateCompChoice(){
    let randomNumber = Math.random() * 3;
    let result;
    if (randomNumber>=0 && randomNumber<1){
        return 'Bat';        // Prefer returning values over using global variables.
    }
    else if (randomNumber>=1 && randomNumber<2){
        return 'Ball';
    }
    else{
        return 'Stump';
    }
}

function getResult(userChoice, compChoice){
    if (userChoice === 'Bat'){
        if (compChoice==='Bat'){
            score.tie += 1;
            return `IT'S A TIE :|`;
        }
        else if (compChoice==='Ball'){
            score.win += 1;
            return 'YOU WON!'
        }
        else if (compChoice==='Stump') {
            score.lost += 1;
            return 'COMPUTER WON!'
        }
    }
    else if (userChoice === 'Ball'){
        if (compChoice==='Bat'){
            score.lost += 1;
            return 'COMPUTER WON!' 
        }
        else if (compChoice==='Ball'){  
            score.tie += 1;
            return `IT'S A TIE :|`;
        }
        else if (compChoice==='Stump') {
            score.win += 1;
            return 'YOU WON!'
        }
    }
    else if (userChoice === 'Stump'){
        if (compChoice==='Bat'){
            score.win += 1;
            return 'YOU WON!'
        }
        else if (compChoice==='Ball'){  
            score.lost += 1;
            return 'COMPUTER WON!' 
        }
        else if (compChoice==='Stump') {
            score.tie += 1;
            return `IT'S A TIE :|`;
        }
    }
}

function displayResult(userChoice, compChoice, res){
    localStorage.setItem('Score', JSON.stringify(score));

    document.querySelector('#user-move').innerText =  userChoice ? `Your Choice: ${userChoice}.` : '';

    document.querySelector('#comp-move').innerText = compChoice ? `Computer Choice: ${compChoice}.` : '';

    document.querySelector('#result').innerText = res || '';

    document.querySelector('#score').innerText =  `${score.display_score()}`;

    /*
    alert(`                         
    Your Choice: ${userChoice}.
    Computer Choice: ${compChoice}.
    ${res}
    ${score.display_score()}
    `)
    */
}