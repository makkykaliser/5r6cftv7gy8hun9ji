class Character {
    constructor(s, d, h) {
        this.strength = s;
        this.defense = d;
        this.hp = h;
    }
}

class Weapon {
    constructor(p, r) {
        this.power = 1;
        this.recharge = 0;
    }
}

class Player {
    constructor(id, name, type) {
        this.id = 0;
        this.name = 0;
        this.type = '';
        this.state = new Character(10, 10, 10);
    }
}

var players = [];

function gameplayLoop() {
    console.log('loop started');

    var won = false;
    var count = 0;
    var currentPlayer = {};
    while (!won) {
        currentPlayer = players[players.length%(count+1)];
        console.log(currentPlayer);
        console.log(players);
        console.log(players.length%(count+1));
        $('.content').replaceWith(currentPlayer.name + `'s Turn`)
        won = true;
    }
}

function onStart(event) {
    $('.content').replaceWith(`
    <div class="initialize content">
        <div class="playerList"></div>
            <div class="form">
                <form class="addPlayer">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name">
                    <label for="type">Choose a character:</label>
                    <select name="type" id="type">
                        <option value="human">Human</option>
                    </select>
                    <button type="button" class="addPlayerButton">Add Player</button>
                    <button type="button" class="startGameButton">Start Game</button>

                </form>
            </div>
        </div>
    </div>
    `);
}

function onAddPlayer(event) {
    var playerName = document.getElementById("name").value;
    var playerType = document.getElementById("type").value;
    $('.playerList').append(playerName + ' (' + playerType + ')'+ `<br>`);
    players.push({name: playerName, type: playerType});
}

function onStartGame(event) {
    console.log(players);
    gameplayLoop();
}

// listeners 
$('.body').on('click', '.start', onStart);
$('.body').on('click', '.addPlayerButton', onAddPlayer);
$('.body').on('click', '.startGameButton', onStartGame);


