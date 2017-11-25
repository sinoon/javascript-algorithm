/**
 * Created by sinoon on 2017/11/25.
 * email sinoon1218@gmail.com
 */

const {normal, optimize, optimizeNext} = require('../../src/sort/bubble')
const {prepareList, check} = require('../../util/sort')

const count = 1000
let list = prepareList(count)

test(`普通算法：${count}个数排序`, () => {
    const result = normal(list.concat())
    expect(check(result)).toBe(true)
})

test('普通算法：排序数不丢失', () => {
    const list = [3, 2, 1]
    const result = normal(list.concat())
    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)
    expect(result[2]).toBe(3)
})

test(`优化算法1：${count}个数排序`, () => {
    const result = optimize(list.concat())
    expect(check(result)).toBe(true)
})

test('优化算法1：排序数不丢失', () => {
    const list = [3, 2, 1]
    const result = optimize(list.concat())
    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)
    expect(result[2]).toBe(3)
})

test(`优化算法2：${count}个数排序`, () => {
    const result = optimizeNext(list.concat())
    expect(check(result)).toBe(true)
})

test('优化算法2：排序数不丢失', () => {
    const list = [3, 2, 1]
    const result = optimizeNext(list.concat())
    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)
    expect(result[2]).toBe(3)
})