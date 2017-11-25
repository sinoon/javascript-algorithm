/**
 * Created by sinoon on 2017/11/25.
 * email sinoon1218@gmail.com
 */

module.exports.normal = function (arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let n = 0; n < i; n++) {
            if (arr[n] > arr[n + 1]) {
                [arr[n], arr[n + 1]] = [arr[n + 1], arr[n]]
            }
        }
    }
    return arr
}

module.exports.optimize = function (arr) {
    let change = true
    for (let i = arr.length; i > 0 && change; i--) {
        change = false
        for (let n = 0; n < i; n++) {
            if (arr[n] > arr[n + 1]) {
                [arr[n], arr[n + 1]] = [arr[n + 1], arr[n]]
                change = true
            }
        }
    }
    return arr
}

module.exports.optimizeNext = function (arr) {
    let change = true
    let pos = 0
    for (let i = arr.length; i > 0 && change; i--) {
        change = false
        for (let n = 0; n < i; n++) {
            if (arr[n] > arr[n + 1]) {
                [arr[n], arr[n + 1]] = [arr[n + 1], arr[n]]
                change = true
                pos = n + 1
            }
        }
        i = pos
    }
    return arr
}