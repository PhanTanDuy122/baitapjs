list = [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]];
function snail(list) {
    let result = [];
    let top = 0;
    let right = list[0].length;
    let left = 0;
    let bottom = list.length;
    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) {
            result.push(list[left][i]);            
        }
        top++;
        for (let i = top; i < bottom; i++){   
            result.push(list[i][right - 1]);
        }
        right--;
        for (let i = right - 1; i >= left; i--) {
            result.push(list[bottom - 1][i]);          
        }
        bottom--;
        for (let i = bottom - 1; i >= top; i--) {
            result.push(list[i][left]);
        }
        left++;
        console.log(bottom, top, left, right);
    }
    return result;
}
console.log(snail(list));