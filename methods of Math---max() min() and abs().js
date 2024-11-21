// https://www.codewars.com/kata/5733d6c2d780e20173000baa/

function maxMin(arr1,arr2){
    let arr = arr1.map((a, i) => Math.abs(a-arr2[i]));
    return [Math.max(...arr), Math.min(...arr)]
}

  console.log(maxMin([1,3,5],[9,8,7]))