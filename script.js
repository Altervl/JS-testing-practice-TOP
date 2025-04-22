export function capitalize(word) {
    return word.at(0).toUpperCase() + word.slice(1)
}

export function reverseString(str) {
    return str.split('').reverse().join('')
}

export const calculator = {
    allNums(num1, num2) {
        const allNums = [num1, num2].every(num => { return typeof num === 'number'})
        return allNums
    },
    add(num1, num2) {
        if (!this.allNums(num1, num2)) {
            console.error('аргументы должны быть числами')
            return null
        }

        return num1 + num2 
    },
    subtract(num1, num2) {
        if (!this.allNums(num1, num2)) {
            console.error('аргументы должны быть числами')
            return null
        }

        return num1 - num2
    },
    divide(num1, num2) {
        if (!this.allNums(num1, num2)) {
            console.error('аргументы должны быть числами')
            return null
        }
        
        return num1 / num2
    },
    multiply(num1, num2) {
        if (!this.allNums(num1, num2)) {
            console.error('аргументы должны быть числами')
            return null
        }

        return num1 * num2
    }
}

export function caesarCipher(str, shift = 3) {
    if (typeof str !== 'string') {
        console.error('Зашифровать можнотолько текст')
        return null
    }

    const abc = 'абвгдеёжзийклмнопрстуфхцчшщьыъэюя'
    let ciphered = ''

    str.toLocaleLowerCase().split('').forEach(char => {
        if (abc.includes(char)) {
            const shifted = (abc.indexOf(char) + shift) % abc.length
            ciphered += abc[shifted]
        } else {
            ciphered += char
        }
    })

    return ciphered
}

export function analyzeArray(array) {
    const notNum = (el) => typeof el !== 'number'

    if (array.some(notNum)) {
        console.error(`Массив должен состоять из чисел, ${array}`)
        return null
    }

    const arrayStats = {}

    arrayStats.average = array.reduce((el1, el2) => { return el1 + el2 }, 0) / array.length
    arrayStats.min = Math.min(...array)
    arrayStats.max = Math.max(...array)
    arrayStats.length = array.length

    return arrayStats
}
