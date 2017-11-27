/**
 * Created by sinoon on 2017/11/27.
 * email sinoon1218@gmail.com
 */

function merge (a, b, result = []) {
    for (let i = 0; i < a.length; i++) {
        for (let n = 0; n < b.length; n++) {
            result.push('' + a[i] + b[n])
        }
    }
    return result
}

module.exports = function divider (arr) {
    while (arr.length > 0) {
        const a = arr.pop()
        const b = arr.pop()
        arr.push(merge(a, b))
        if (arr.length === 1) {
            break
        }
    }

    return arr[0]
}