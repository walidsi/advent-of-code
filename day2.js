const { readFileSync } = require('fs');

const contents = readFileSync('./aoc_2_input.txt', 'utf-8')

const arr = contents.split('\n')

//console.log(arr)

opponent_shape_encoding = {
    'A': "ROCK",
    'B': "PAPER",
    'C': "SICCSOR",
}

my_shape_encoding = {
    'X': "ROCK",
    'Y': "PAPER",
    'Z': "SCISSOR",
}

shape_score = {
    'X': 1, // Rock
    'Y': 2, // Paper
    'Z': 3, // Scissor
}

outcome_score = {
    'L': 0,
    'D': 3,
    'W': 6,
}

total_score = 0

for (let i = 0; i < arr.length; i++) {
    round = arr[i]

    opp = round[0]
    me = round[2]

    if (opp == 'A') { // rock
        if (me == 'X') {
            total_score += (3 + 1)
        }
        else if (me == 'Y') {
            total_score += (6 + 2)
        }
        else if (me == 'Z') {
            total_score += (0 + 3)
        }
    }
    else if (opp == 'B') { // paper
        if (me == 'X') {
            total_score += (0 + 1)
        }
        else if (me == 'Y') {
            total_score += (3 + 2)
        }
        else if (me == 'Z') {
            total_score += (6 + 3)
        }
    }
    else if (opp == 'C') { // scissor
        if (me == 'X') {
            total_score += (6 + 1)
        }
        else if (me == 'Y') {
            total_score += (0 + 2)
        }
        else if (me == 'Z') {
            total_score += (3 + 3)
        }
    }
}

console.log(total_score)

total_score2 = 0

for (let i = 0; i < arr.length; i++) {
    round = arr[i]

    opp = round[0]
    me = round[2]

    if (opp == 'A') { // rock
        if (me == 'X') { // lose
            total_score2 += (0 + 3)
        }
        else if (me == 'Y') { // draw
            total_score2 += (3 + 1)
        }
        else if (me == 'Z') { // win
            total_score2 += (6 + 2)
        }
    }
    else if (opp == 'B') { // paper
        if (me == 'X') {
            total_score2 += (0 + 1)
        }
        else if (me == 'Y') {
            total_score2 += (3 + 2)
        }
        else if (me == 'Z') {
            total_score2 += (6 + 3)
        }
    }
    else if (opp == 'C') { // scissor
        if (me == 'X') {
            total_score2 += (0 + 2)
        }
        else if (me == 'Y') {
            total_score2 += (3 + 3)
        }
        else if (me == 'Z') {
            total_score2 += (6 + 1)
        }
    }
}

console.log(total_score2)