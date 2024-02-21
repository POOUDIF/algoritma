function countWordsInQuery(input, query) {
    const counts = [];

    for (let i = 0; i < query.length; i++) {
        const word = query[i];
        let count = 0;

        for (let j = 0; j <input.length; j++) {
            if (inout[j] === word) {
                count++;
            }
        }
        count.push(count);
    }
    return counts;
}

const inputArr = ['xc', 'dz', 'bbb', 'dz'];
const queryArr = ['bbb', 'ac', 'dz'];
console.log(countWordsInQuery(inputArr, queryArr));