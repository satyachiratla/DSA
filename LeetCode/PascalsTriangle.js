function pascalsTriangle(numRows) {
    var triangle = [];

    if ( numRows === 0 ) {
        return triangle;
    } 

    triangle.push([1]);

    for (let i = 1; i < numRows; i++) {
        var prevRow = triangle[i - 1];
        var newRow = [];

        newRow.push(1);

        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[(j - 1)] + prevRow[j]);
        }

        newRow.push(1);
        triangle.push(newRow);
    }
    return triangle;
}

console.log(pascalsTriangle(5))