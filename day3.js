// @ts-check

const { assert } = require('console');
const { readFileSync } = require('fs');

const contents = readFileSync('./day3_input.txt', 'utf-8')

let contentsArray = contents.split('\n')

contentsArray = contentsArray.filter((contents) => {
    if (contents == '')
        return false
    else
        return true
})

/**
 * 
 * @param {string} s 
 * @returns {Map} lookup for characters in s
 */
function createMap(s) {
    const char_idx_map = new Map()
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        char_idx_map.set(c, i)
    }
    return char_idx_map
}

let sum_priorities = 0
for (let i = 0; i < contentsArray.length; i++) {
    let contents = contentsArray[i]

    const compartment1 = contents.slice(0, contents.length / 2);
    const compartment2 = contents.slice(contents.length / 2, contents.length)

    assert(compartment1.length == compartment2.length)

    const compartment1_map = createMap(compartment1)
    const compartment2_map = createMap(compartment2)

    for (const [key, value] of compartment1_map) {
        if (compartment2_map.has(key)) {
            if (String(key).toUpperCase() === String(key))
                sum_priorities += String(key).charCodeAt(0) - 'A'.charCodeAt(0) + 1 + 26
            else
                sum_priorities += String(key).charCodeAt(0) - 'a'.charCodeAt(0) + 1
            break;
        }
    }
}

console.log(`Sum of priorities of duplicate items is: ${sum_priorities}`)

sum_priorities = 0
for (let i = 0; i < contentsArray.length; i++) {

    const rucksack1_map = createMap(contentsArray[i])
    const rucksack2_map = createMap(contentsArray[i + 1])
    const rucksack3_map = createMap(contentsArray[i + 2])

    for (const [key, value] of rucksack1_map) {
        if (rucksack2_map.has(key) && rucksack3_map.has(key)) {
            if (String(key).toUpperCase() === String(key))
                sum_priorities += String(key).charCodeAt(0) - 'A'.charCodeAt(0) + 1 + 26
            else
                sum_priorities += String(key).charCodeAt(0) - 'a'.charCodeAt(0) + 1
            break;
        }
    }
    i += 2
}

console.log(`Sum of priorities of groups is: ${sum_priorities}`)
