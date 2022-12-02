const { readFileSync } = require('fs');

const contents = readFileSync('./day2_input.txt', 'utf-8')

let arr = contents.split('\n')

arr = arr.filter((round) => {
    if (round == '')
        return false
    else
        return true
})

// Define the rules
shape_score = {
    'A': 1, // Rock
    'B': 2, // Paper
    'C': 3, // Scissor
    'X': 1, // Rock
    'Y': 2, // Paper
    'Z': 3, // Scissor
}

outcome_score = {
    'A X': 3,
    'A Y': 6,
    'A Z': 0,
    'B X': 0,
    'B Y': 3,
    'B Z': 6,
    'C X': 6,
    'C Y': 3,
    'C Z': 0,
}

outcome2_score = {
    'A X': 0 + 3,
    'A Y': 3 + 1,
    'A Z': 6 + 2,
    'B X': 0 + 1,
    'B Y': 3 + 2,
    'B Z': 6 + 3,
    'C X': 0 + 2,
    'C Y': 3 + 3,
    'C Z': 6 + 1,
}

// Create and fill the maps
const round_score_map = new Map();
let keys = Object.keys(outcome_score)
keys.forEach(key => {
    let score = outcome_score[key] + shape_score[key[2]]
    round_score_map.set(key, score)
});

const round_score2_map = new Map()
keys = Object.keys(outcome2_score)
keys.forEach(key => {
    score = outcome2_score[key]
    round_score2_map.set(key, score)
});

// Calculate the scores
let total_score = 0
let total_score2 = 0

total_score = arr.reduce((score, round) => {
    return score + round_score_map.get(round)
}, 0)

total_score2 = arr.reduce((score, round) => {
    return score + round_score2_map.get(round)
}, 0)

console.log(total_score)
console.log(total_score2)