// one-hot вспомогательная функция
function oneHot(index, size = 4) {
    const arr = Array(size).fill(0);
    arr[index] = 1;
    return arr;
}

// буквы A, B, C, D 5x5
const lettersMap = {
    A: [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,0,0,0,1]
    ],
    B: [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,0]
    ],
    C: [
        [0,1,1,1,1],
        [1,0,0,0,0],
        [1,0,0,0,0],
        [1,0,0,0,0],
        [0,1,1,1,1]
    ],
    D: [
        [1,1,1,0,0],
        [1,0,0,1,0],
        [1,0,0,0,1],
        [1,0,0,1,0],
        [1,1,1,0,0]
    ]
};

// функция превращает буквы в dataset
function makeDataset() {
    const data = [];
    const letters = Object.keys(lettersMap).sort(); // A, B, C, D
    letters.forEach((letter, index) => {
        const arr2d = lettersMap[letter];
        // flatten 5x5 -> 25
        const input = arr2d.flat();
        const output = oneHot(index, 4);
        data.push({ input, output });
    });
    return data;
}

export { makeDataset };
