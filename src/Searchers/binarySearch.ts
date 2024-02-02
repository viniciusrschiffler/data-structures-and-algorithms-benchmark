// Função para realizar busca binária
export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Elemento encontrado, retorna o índice
        } else if (arr[mid] < target) {
            left = mid + 1; // O elemento está na metade direita
        } else {
            right = mid - 1; // O elemento está na metade esquerda
        }
    }

    return -1; // Elemento não encontrado
}
