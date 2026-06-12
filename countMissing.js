function countMissing(arr, n) {

    let filteredArr = arr.filter(num => num <= n);

    let allNumbers = [];
    for (let i = 1; i <= n; i++) {
        allNumbers.push(i);
    }

    let missingNumbers = allNumbers.filter(num => !filteredArr.includes(num));

    return missingNumbers.length;
}

console.log(countMissing([2, 3, 7, 11], 10));