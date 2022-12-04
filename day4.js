const { assert } = require('console');
const { readFileSync } = require('fs');

let contents = readFileSync('./day4_input.txt', 'utf-8')

let assignments_list = contents.split('\n')

assignments_list = assignments_list.filter((contents) => {
    if (contents == '')
        return false
    else
        return true
})

// In how many assignment pairs does one range fully contain the other?
// In how many assignment pairs do the ranges overlap?

let num_full_overlaps = 0
let num_overlaps = 0
for (const assignments_pair of assignments_list) {
    const [asgmt1, asgmt2] = assignments_pair.split(',').values()
    let [asgmt1L, asgmt1R] = asgmt1.split('-').values()
    let [asgmt2L, asgmt2R] = asgmt2.split('-').values()

    asgmt1L = parseInt(asgmt1L)
    asgmt1R = parseInt(asgmt1R)
    asgmt2L = parseInt(asgmt2L)
    asgmt2R = parseInt(asgmt2R)

    if ((asgmt1L >= asgmt2L && asgmt1R <= asgmt2R) ||
        (asgmt2L >= asgmt1L && asgmt2R <= asgmt1R)) {
        num_full_overlaps++
    }

    if ((asgmt1L >= asgmt2L && asgmt1L <= asgmt2R) ||
        (asgmt1R >= asgmt2L && asgmt1R <= asgmt2R) ||
        (asgmt2L >= asgmt1L && asgmt2L <= asgmt1R) ||
        (asgmt2R >= asgmt1L && asgmt2R <= asgmt1R)) {
        num_overlaps++
    }
}

console.log(`Num of assignment pairs that fully contain the other is ${num_full_overlaps}`)
console.log(`Num of assignment pairs that just overlap is ${num_overlaps}`)
