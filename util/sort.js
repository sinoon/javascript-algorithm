/**
 * Created by sinoon on 2017/11/25.
 * email sinoon1218@gmail.com
 */

/**
 *
 * @param length
 * @returns {Array}
 */
module.exports.prepareList = (length) => {
    const list = []
    for (let i = 0; i < length; i++) {
        list.push(Math.floor(Math.random() * 100))
    }
    return list
}

module.exports.check = (list) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i] > list[i + 1]) {
            throw new Error(` i > i+1 ! , i:${i},${list.toString()}`)
        }
    }
    return true
}