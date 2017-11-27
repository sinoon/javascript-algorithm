/**
 * Created by sinoon on 2017/11/27.
 * email sinoon1218@gmail.com
 */

const {instruct, fp} = require('../../../src/merge/merge')

test('指令式编程', () => {
    const list = [
        [1, 2, 3],
        [2, 3, 4, 5],
        [2, 3, 4, 5],
        [2, 3, 4, 5],
        [2, 3, 4, 5],
        [2, 3, 4, 5],
        [2, 3, 4, 5]
    ]
    const result = instruct(list)
    // console.log(result)
    expect(result.length).toBe(12288)
})

test('函数式编程', () => {
    const list = [
        [1, 2, 3],
        [2, 3, 4, 5],
        [2, 3, 4, 5],
        [2, 3, 4, 5],
        [2, 3, 4, 5],
        [2, 3, 4, 5],
        [2, 3, 4, 5]
    ]
    const result = fp(list)
    // console.log(result)
    expect(result.length).toBe(12288)
})
