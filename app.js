import { renderStat, renderGame } from './utils.js';

const form = document.getElementById('add-stat');
const statsList = document.getElementById('stats-list');
const gameList = document.getElementById('game-list');

const remove = document.getElementById('remove');
const save = document.getElementById('save-game');

let stats = [];
let games = [];

// IMPURE RENDER FUNCTIONS
// YOUR CODE MUST CALL THESE FUNCTIONS
function renderGames() {
    gameList.textContent = '';
    for (let game of games) {
        const li = renderGame(game);
        gameList.append(li);
    }
}

function renderStats() {
    statsList.textContent = '';
    for (let item of stats) {
        const li = renderStat(item);
        statsList.appendChild(li);
    }
}

function resetStats() {
    stats = [];
    statsList.textContent = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var inputData = new FormData(form);
    // Step 1 - add code to track each submission to the stats
    // Create object from form
    let playerStat = {
        player: inputData.get('player'),
        points: inputData.get('points'),
    };
    // push onto stats array
    stats.push(playerStat);
    // call renderStats
    renderStats();
    // also reset form?
    form.reset();
});

remove.addEventListener('click', () => {
    // Step 2 -- add code to allow users to remove the most recent stat
    // remove last element from array
    stats.pop();
    // re-render using existing function
    renderStats();
});

save.addEventListener('click', () => {
    let pointSum = 0;
    // Step 3 - add code to allow users to save the state
    // Loop through the list of stats and add up the total points scored
    for (let i of stats) {
        pointSum += Number(i.points);
    }
    let game = {
        number: games.length + 1,
        totalPoints: pointSum,
    };
    games.push(game);
    renderGames();
    resetStats();
    // Create a new object with the game number and the total points
    // { number: games.length + 1, totalPoints: totalPoints }
    // Push the new object onto the games array then call renderGames
    // reset the stats with resetStats
});
