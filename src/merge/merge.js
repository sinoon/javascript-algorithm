/**
 * Created by sinoon on 2017/11/27.
 * email sinoon1218@gmail.com
 */

/**
 *
 *
 * @param {Array} a
 * @param {Array} b
 * @param {Array} [result=[]]
 * @returns
 */
function merge (a, b, result = []) {
    for (let i = 0; i < a.length; i++) {
        for (let n = 0; n < b.length; n++) {
            result.push('' + a[i] + b[n])
        }
    }
    return result
}

function mergeFun (a, b) {
    return a.reduce((result, i) => {
        result.push(...b.reduce((result, n) => {
            result.push('' + i + n)
            return result
        }, []))
        return result
    }, [])
}

function divider (arr, merge) {
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

const flow = function (merge) {
    return function (arr) {
        return divider(arr, merge)
    }
}

module.exports.instruct = flow(merge)

module.exports.fp = flow(mergeFun)