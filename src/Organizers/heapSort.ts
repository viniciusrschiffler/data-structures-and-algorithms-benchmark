export function heapSort(arr: number[]): number[] {
    // Constrói a heap a partir do array fornecido
    buildMaxHeap(arr);

    // Extrai elementos um por um da heap e os coloca no array ordenado
    for (let i = arr.length - 1; i > 0; i--) {
        // Troca o elemento raiz (maior) com o último elemento não ordenado
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Reorganiza a heap para garantir que a propriedade de max-heap seja mantida
        heapify(arr, i, 0);
    }

    return arr;
}

function buildMaxHeap(arr: number[]) {
    const n = arr.length;

    // Inicia a construção da heap a partir do último nó não folha
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

function heapify(arr: number[], n: number, i: number) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Verifica se o filho esquerdo é maior que o nó raiz
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Verifica se o filho direito é maior que o nó raiz ou o maior filho esquerdo
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // Se o maior elemento não está na posição do nó raiz, troca-os
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Reorganiza recursivamente a subárvore afetada
        heapify(arr, n, largest);
    }
}
