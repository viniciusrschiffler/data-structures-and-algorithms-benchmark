const MIN_MERGE = 32;

// Algoritmo de Insertion Sort para ordenar runs pequenas
function insertionSort(arr: number[], left: number, right: number) {
    for (let i = left + 1; i <= right; i++) {
        let j = i;
        while (j > left && arr[j] < arr[j - 1]) {
            // Troca os elementos se estiverem na ordem errada
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
    }
}

// Função para mesclar duas runs ordenadas
function merge(arr: number[], left: number, mid: number, right: number) {
    const len1 = mid - left + 1;
    const len2 = right - mid;

    // Cria arrays temporários para armazenar as duas runs
    const leftArr = new Array(len1);
    const rightArr = new Array(len2);

    // Preenche os arrays temporários com os elementos das runs
    for (let i = 0; i < len1; i++) {
        leftArr[i] = arr[left + i];
    }

    for (let j = 0; j < len2; j++) {
        rightArr[j] = arr[mid + 1 + j];
    }

    let i = 0, j = 0;
    let k = left;

    // Mescla as duas runs ordenadas
    while (i < len1 && j < len2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    // Adiciona os elementos restantes, se houver, de ambas as runs
    while (i < len1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < len2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

// Função principal que implementa o algoritmo TimSort
export function timSort(arr: number[]): number[] {
    const n = arr.length;

    // Divide o array em runs e aplica o insertionSort nas runs
    for (let i = 0; i < n; i += MIN_MERGE) {
        insertionSort(arr, i, Math.min((i + MIN_MERGE - 1), (n - 1)));
    }

    // Faz o merge das runs
    for (let size = MIN_MERGE; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {
            const mid = left + size - 1;
            const right = Math.min((left + 2 * size - 1), (n - 1));

            if (mid < right) {
                merge(arr, left, mid, right);
            }
        }
    }

    return arr;
}
