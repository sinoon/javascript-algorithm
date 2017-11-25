/**
 * Created by sinoon on 2017/11/25.
 * email sinoon1218@gmail.com
 */

/**
 *
 * @param left {Array}
 * @param right {Array}
 */
function merge (left, right) {
    const result = []
    let li = 0
    let ri = 0

    while (li < left.length && ri < right.length) {
        if (left[li] < right[ri]) {
            result.push(left[li++])
        } else {
            result.push(right[ri++])
        }
    }
    return result.concat(left.slice(li)).concat(right.slice(ri))
}

module.exports = function divider (arr) {
    if (arr.length < 2) {
        return arr
    }

    const left = arr.splice(0, Math.floor(arr.length / 2))

    return merge(divider(left), divider(arr))
}