function matrix(n) {
    let results = [];
    let counter = 1

    for (let i = 0; i <= n; i++) {
        results.push([]);
    }

    let startColoumn = 0;
    let endColoumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColoumn <= endColoumn && startRow <= endRow) {

        // Top Side
        for (i = startColoumn; i <= endColoumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right Side
        for (i = startRow; i <= endRow; i++) {
            results[i][endColoumn] = counter;
            counter++;
        }
        endColoumn--;

        // Bottom Side
        for (i = endColoumn; i >= startColoumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        
        // Left Side 
        for (i = endRow; i >= startRow; i--) {
            results[i][startColoumn] = counter;
            counter++;
        }
        startColoumn++;
    } 
    return results;
}

console.log(matrix(6));