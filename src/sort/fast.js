/**
 * Created by sinoon on 2017/11/25.
 * email sinoon1218@gmail.com
 */

module.exports = function fast (arr) {
    if (arr.length <= 1) return arr
    // get pivot
    const length = arr.length
    const pos = Math.floor(length / 2)
    const pivot = arr.splice(pos, 1)
    const left = []
    const right = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    // console.log(`left:${left}`)
    // console.log(`right:${right}`)
    return fast(left).concat(pivot).concat(fast(right))
}