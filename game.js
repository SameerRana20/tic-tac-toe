var boxes=document.getElementsByClassName("box");

var turn= true;

const win=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function win_check(player) {
    for(let i=0; i<win.length; i++) {
        const [a , b , c]=win[i];
        
        if(
            boxes[a].innerText=== player &&
            boxes[b].innerText=== player &&
            boxes[c].innerText=== player 
        ) {
            return true;
        } 
    }
    return false;
}

for(let i=0; i<=win.length; i++) {
    boxes[i].addEventListener("click",()=> {
     if(boxes[i].innerText=== "") {
        if(turn) {
            boxes[i].innerText="X";
            var click=new Audio('mixkit-arcade-game-jump-coin-216.wav');
            click.play();
            if(win_check("X")) {
                let winmessage= document.getElementsByClassName("winmessage")[0];
                winmessage.style.display="block";
                winmessage.style.display="flex"
                winmessage.style.justifyContent="center"
                winmessage.style.alignItems="center"
                 
                var win_audio= new Audio('mixkit-achievement-bell-600.wav');
                win_audio.play();
            }
        }
     

        else {
            boxes[i].innerText="O";
            var click=new Audio('mixkit-arcade-game-jump-coin-216.wav');
            click.play();

            if(win_check("O")) {
                let winmessage_o= document.getElementsByClassName("o")[0];
                winmessage_o.style.display="block";
                winmessage_o.style.display="flex"
                winmessage_o.style.justifyContent="center"
                winmessage_o.style.alignItems="center"
                var win_audio= new Audio('mixkit-achievement-bell-600.wav');
                win_audio.play();
            }
        }
        turn=!turn;
     } 
    })
}

function reset() {
    let winmessage_o= document.getElementsByClassName("o")[0];
    winmessage_o.style.display="none";
    let winmessage= document.getElementsByClassName("winmessage")[0];
    winmessage.style.display="none";
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
    }
}