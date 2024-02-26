"use strict";

function createPlayer(Name, HP, ...Moves) {
    var hp = HP;
    var name = Name;
    var moves = Moves;

    return {
        getHP() {
            return hp;
        },

        getName() {
            return name;
        },

        listMoves() {
            let parent = document.querySelector(".moves");
            for (let move of moves) {
                let para = document.createElement("p");
                para.innerText = move;
                parent.appendChild(para);
            }
        }
    };
}

let player = createPlayer("Bob", 18, "Jump", "Kick", "Hop");

player.listMoves();

console.log(player.getHP());
console.log(player.getName());
