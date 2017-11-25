/**
 * Created by sinoon on 2017/11/25.
 * email sinoon1218@gmail.com
 */

const select = require('../../src/sort/select')
const {prepareList, check} = require('../../util/sort')

const count = 1000
let list = prepareList(count)

test(`普通算法：${count}个数排序`, () => {
    // console.log(list)
    const result = select(list.concat())
    // console.log(result)
    expect(check(result)).toBe(true)
})

test('普通算法：排序数不丢失', () => {
    const list = [3, 2, 1]
    const result = select(list.concat())
    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)
    expect(result[2]).toBe(3)
})