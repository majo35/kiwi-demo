const combinations = require('./../t9service')

test('t9Test', () => {
    let result = combinations('23')
    expect(["ad","ae","af","bd","be","bf","cd","ce","cf"]).toEqual(result)

    result = combinations('')
    expect([]).toEqual(result)
})