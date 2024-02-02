export function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    // Escolhe um pivô (geralmente o último elemento)
    const pivot = arr[arr.length - 1];

    // Particiona o array em dois subarrays - elementos menores que o pivô e elementos maiores que o pivô
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursivamente aplica o quickSort em ambas as partições e concatena os resultados
    return [...quickSort(left), pivot, ...quickSort(right)];
}
