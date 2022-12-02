const { readFileSync } = require('fs');

const contents = readFileSync('./day2_input.txt', 'utf-8')

const arr = contents.split('\n')

//console.log(arr)

const round_score_map = new Map();
round_score_map.set('A X', 4)
round_score_map.set('A Y', 8)
round_score_map.set('A Z', 3)
round_score_map.set('B X', 1)
round_score_map.set('B Y', 5)
round_score_map.set('B Z', 9)
round_score_map.set('C X', 7)
round_score_map.set('C Y', 2)
round_score_map.set('C Z', 6)


const round_score2_map = new Map()
round_score2_map.set('A X', 3)
round_score2_map.set('A Y', 4)
round_score2_map.set('A Z', 8)
round_score2_map.set('B X', 1)
round_score2_map.set('B Y', 5)
round_score2_map.set('B Z', 9)
round_score2_map.set('C X', 2)
round_score2_map.set('C Y', 6)
round_score2_map.set('C Z', 7)

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