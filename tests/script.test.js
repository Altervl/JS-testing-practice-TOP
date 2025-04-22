import { 
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
 } from "../script"

describe('capitalize()', () => {
    it('Преобразует "kek" в "Kek"', () => {
        expect(capitalize('kek')).toBe('Kek')
    })

    it('Преобразует "раБота" в "РаБота"', () => {
        expect(capitalize('раБота')).toBe('РаБота')
    })

    it('Преобразует "МИР, Труд, май" в "МИР, Труд, май"',() => {
        expect(capitalize('МИР, Труд, май')).toBe('МИР, Труд, май')
    })
})

describe('reverseString()', () => {
    it('Преобразует "дом" в "мод"', () => {
        expect(reverseString('дом')).toBe('мод')
    })

    it('Преобразует "Фонтан" в "натноФ"', () => {
        expect(reverseString('Фонтан')).toBe('натноФ')
    })

    it('Преобразует "LevEl" в "lEveL"', () => {
        expect(reverseString('LevEl')).toBe('lEveL')
    })
})

describe('Фукции калькулятора', () => {
    describe('calculator.add()', () => {
        it('1 + 2 равняет 3', () => {
            expect(calculator.add(1, 2)).toBe(3)
        })

        it('0 + 100 равняет 100', () => {
            expect(calculator.add(0, 100)).toBe(100)
        })

        it('5 + "пять" выводит сообщение об ошибке', () => {
            expect(calculator.add(5, 'пять')).toBe(null)
        })
    })

    describe('calculator.subtract()', () => {
        it('10 - 9 равняет 1', () => {
            expect(calculator.subtract(10, 9)).toBe(1)
        })

        it('0 - 10 равняет -10', () => {
            expect(calculator.subtract(0, 10)).toBe(-10)
        })

        it('8 - "два" выводит сообщение об ошибке', () => {
            expect(calculator.subtract(8, "два")).toBe(null)
        })
    })

    describe('calculator.divide()', () => {
        it('10 / 2 равняет 5', () => {
            expect(calculator.divide(10, 2)).toBe(5)
        })

        it('7 / 3 равняет 2.3333333333333335', () => {
            expect(calculator.divide(7, 3)).toBe(2.3333333333333335)
        })

        it('37 / 0 выводит равняет Infinity', () => {
            expect(calculator.divide(37, 0)).toBe(Infinity)
        })
    })

    describe('calculator.multiply()', () => {
        it('2 * 2 равняет 4', () => {
            expect(calculator.multiply(2, 2)).toBe(4)
        })

        it('50 * 0 равняет 0', () => {
            expect(calculator.multiply(50, 0)).toBe(0)
        })

        it('1 * 735 выводит равняет 735', () => {
            expect(calculator.multiply(1, 735)).toBe(735)
        })
    })
})

describe('caesarCipher()', () => {
    it('Шифрует "абв" в "где"', () => {
        expect(caesarCipher('абв')).toBe('где')
    })

    it('Шифрует "ЭюЯ" в "вгд"', () => {
        expect(caesarCipher('ЭюЯ', 5)).toBe('вгд')
    })

    it('Шифрует "По сусалам, по сусалам!" в "тс фцфгогп, тс фцфгогп!"', () => {
        expect(caesarCipher('По сусалам, по сусалам!')).toBe('тс фцфгогп, тс фцфгогп!')
    })
})

describe('analyzeArray', () => {
    it('Получает [1,8,3,4,2,6], возвращает { average: 4, min: 1, max: 8, length: 6 }', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 })
    })

    it('Получает ["one", 2, 0, -11], сообщет об ошибке, возвращает null', () => {
        const logSpy = jest.spyOn(console, 'error')

        analyzeArray(["one", 2, 0, -11])

        expect(logSpy).toHaveBeenCalledWith(`Массив должен состоять из чисел, ${["one", 2, 0, -11]}`)
        expect(analyzeArray(["one", 2, 0, -11])).toEqual(null)
    })

    it('Получает [0.35, 64, 7, 0, -43.8], возвращает { average: 5.51, min: -43.8, max: 64, length: 5 }', () => {
        expect(analyzeArray([0.35, 64, 7, 0, -43.8])).toEqual({ average: 5.51, min: -43.8, max: 64, length: 5 })
    })
})
