export const populateBoard = () => {
    let newBoard = Array.from({ length: 20 }, () => Array(20).fill(null));

    // Find random coordinates to insert 65 crabs in the matrix
    for (let i = 0; i < 65; i++) {
        let combination;
        do {
            combination = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];
        } while (newBoard[combination[0]][combination[1]] && newBoard[combination[0]][combination[1]].value === "crab")
        newBoard[combination[0]][combination[1]] = { value: "crab", show: false, marked: false, coordinates: [combination[0], combination[1]], id: combination[0] * 100 + [combination[1]] };
    }

    // For each empty cell, calculate the number of crabs around
    for (let row = 0; row < 20; row++) {
        for (let cell = 0; cell < 20; cell++) {
            let crabSum = 0;
            if (newBoard[row][cell] === null) {
                for (let i = row - 1; i <= row + 1; i++) {
                    for (let j = cell - 1; j <= cell + 1; j++) {
                        if (i < 0 || j < 0 || i >= 20 || j >= 20) {
                            continue;
                        }

                        if (newBoard[i][j] && newBoard[i][j].value === "crab") {
                            crabSum++
                        }
                    }
                }
                newBoard[row][cell] = { value: crabSum, show: false, marked: false, coordinates: [row, cell], id: row * 100 + cell }
            }
        }
    }

    return newBoard;
}