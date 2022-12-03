const { assert } = require('console');
const { readFileSync } = require('fs');
const internal = require('stream');

const contents = readFileSync('./day3_input.txt', 'utf-8')

let contentsArray = contents.split('\n')

contentsArray = contentsArray.filter((contents) => {
    if (contents == '')
        return false
    else
        return true
})

let sum_priorities = 0

for (let i = 0; i < contentsArray.length; i++) {
    let contents = contentsArray[i]

    const compartment1 = contents.slice(0, contents.length / 2);
    const compartment2 = contents.slice(contents.length / 2, contents.length)

    assert(compartment1.length == compartment2.length)
    let foundItem = false
    for (let i1 = 0; i1 < compartment1.length; i1++) {
        c1 = compartment1[i1]
        for (let i2 = 0; i2 < compartment2.length; i2++) {
            c2 = compartment2[i2]
            if (c1 === c2) {
                foundItem = true
                if (String(c1).toUpperCase() === String(c2))
                    sum_priorities += String(c1).charCodeAt(0) - 'A'.charCodeAt(0) + 1 + 26
                else
                    sum_priorities += String(c1).charCodeAt(0) - 'a'.charCodeAt(0) + 1
                break
            }
        }
        if (foundItem === true)
            break
    }
}

console.log(`Sum of priorities of duplicate items is: ${sum_priorities}`)

sum_priorities = 0
for (let i = 0; i < contentsArray.length; i++) {
    let foundItem = false
    for (let i1 = 0; i1 < contentsArray[i].length; i1++) {
        c1 = contentsArray[i][i1]
        for (let i2 = 0; i2 < contentsArray[i + 1].length; i2++) {
            c2 = contentsArray[i + 1][i2]
            for (let i3 = 0; i3 < contentsArray[i + 2].length; i3++) {
                c3 = contentsArray[i + 2][i3]
                if (c1 === c2 && c2 === c3) {
                    foundItem = true
                    if (String(c1).toUpperCase() === String(c2))
                        sum_priorities += String(c1).charCodeAt(0) - 'A'.charCodeAt(0) + 1 + 26
                    else
                        sum_priorities += String(c1).charCodeAt(0) - 'a'.charCodeAt(0) + 1
                    break
                }
            }
            if (foundItem === true)
                break
        }
        if (foundItem === true)
            break
    }
    i += 2
}

console.log(`Sum of priorities of groups is: ${sum_priorities}`)
