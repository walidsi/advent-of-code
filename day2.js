const { readFileSync } = require('fs');

const contents = readFileSync('./day2_input.txt', 'utf-8')

const arr = contents.split('\n')

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

const round_score_map = new Map();
score_obj = outcome_score
for (let i = 0; i < arr.length; i++) {
    round = arr[i]
    if (round_score_map.get(round) == undefined) {
        let score = score_obj[round] + shape_score[round[2]]
        round_score_map.set(round, score)
    }
}


const round_score2_map = new Map()
score_obj = outcome2_score
for (let i = 0; i < arr.length; i++) {
    round = arr[i]
    if (round_score2_map.get(round) == undefined) {
        let score = score_obj[round]
        round_score2_map.set(round, score)
    }
}

let total_score = 0

for (let i = 0; i < arr.length; i++) {
    round = arr[i]

    if (round_score_map.get(round)) {
        total_score += round_score_map.get(round)
    }
    else {
        console.log(round)
    }
}

console.log(total_score)

let total_score2 = 0

for (let i = 0; i < arr.length; i++) {
    round = arr[i]

    if (round_score2_map.get(round)) {
        total_score2 += round_score2_map.get(round)
    }
    else {
        console.log(round)
    }

}

console.log(total_score2)