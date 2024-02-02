function getMax(arr: number[]) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function countSort(arr: number[], exp: number) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    // Contar a ocorrência de cada dígito em exp
    for (let i = 0; i < n; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }

    // Atualizar count[i] para que contenha a posição real deste dígito no output
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Construir o array de saída
    for (let i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    // Copiar o array de saída para arr, para que arr contenha a ordenação correta
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

export function radixSort(arr: number[]) {
    const max = getMax(arr);

    // Aplicar o countSort para cada posição decimal
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countSort(arr, exp);
    }

    return arr;
}