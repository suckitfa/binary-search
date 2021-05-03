/**
 * 二分查找
 * @param n int整型 数组长度
 * @param v int整型 查找值
 * @param a int整型一维数组 有序数组
 * @return int整型
 */
function upper_bound(n, v, a) {
    // write code here
    let left = 0,
        right = n - 1;

    while (left < right) {
        // 中间值：二分
        let mid = ((left + right) / 2);
        const curValue = a[mid];

        // 关键是你自己如何定义：第一个大于等于目标值的的数
        // 隐藏条件：进行二分查找的数组时有序的！！
        if (curValue >= v) {
            if (mid === 0) return mid + 1;
            if (a[mid - 1] >= v) {
                right = mid;
            } else {
                return mid + 1;
            }
        } else {
            left = mid + 1;
        }
    }
}

let n = 10,
    v = 2,
    a = [1, 1, 2, 3, 7, 7, 7, 9, 9, 10];
let res = upper_bound(n, v, a);
console.log(res);

// 如果数组中的第一个元素就大于目标值，那就直接加1返回
// if (mid == 0) return mid + 1;
//判断一下是否为第一个大于等于的位置，利用了数组是有序的条件
// if (a[mid - 1] >= v) { right = mid - 1; } else return mid + 1;