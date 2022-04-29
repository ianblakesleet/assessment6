const {shuffleArray} = require('./utils')

let testarr = ['1','2','3','4']
describe('shuffleArray should', () => {
    test('to check all the same items are in the array',()=>{
        expect(shuffleArray(testarr)).toContain('1')
        expect(shuffleArray(testarr)).toContain('2')
        expect(shuffleArray(testarr)).toContain('3')
        expect(shuffleArray(testarr)).toContain('4')
    })
    test('that items shuffled around', ()=>{
        let result = shuffleArray(testarr);
        expect(result.join()).not.toEqual(testarr.join());
    })
    test('check thaqt shuffleArray returns array', ()=>{
        expect(Array.isArray(shuffleArray(testarr))).toBe(true)
    })
})
