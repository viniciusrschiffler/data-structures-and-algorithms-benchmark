export function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    // Divide o array ao meio
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursivamente aplica o mergeSort em ambas as metades
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    // Combina as duas metades ordenadas
    return merge(leftSorted, rightSorted);
}

function merge(left: number[], right: number[]): number[] {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compara elementos em ambas as metades e os insere ordenadamente em result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Adiciona os elementos restantes, se houver, de ambas as metades
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}