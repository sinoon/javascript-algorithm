/**
 * Created by sinoon on 2017/11/25.
 * email sinoon1218@gmail.com
 */

module.exports = function (arr) {
    let min
    let pos
    for (let i = 0; i < arr.length; i++) {
        min = arr[i]
        pos = i
        for (let n = i; n < arr.length; n++) {
            if (min > arr[n]) {
                min = arr[n]
                pos = n
            }
        }
        [arr[i], arr[pos]] = [arr[pos], arr[i]]
    }
    return arr
}