/**
 * Created by sinoon on 2017/11/27.
 * email sinoon1218@gmail.com
 */

const merger = require('../../../src/merge/merge')

test('merge', () => {
    const list = [
        [1, 2, 3],
        [2, 3, 4, 5]
    ]
    const result = merger(list)
    console.log(result)
    expect(result.length).toBe(12)
})
