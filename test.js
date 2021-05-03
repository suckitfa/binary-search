function binary_serach(arr, target) {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        // 使用javascript注意细节，需要转为整数
        let mid = parseInt((left + right) / 2);
        console.log(mid);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

let arr = [1, 2, 2, 3, 4, 5],
    target = 2;
let res = binary_serach(arr, target);
console.log("res = ", res);