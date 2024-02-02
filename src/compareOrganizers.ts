import { mergeSort } from './Organizers/mergeSort';
import { bubbleSort } from './Organizers/bubbleSort';
import { radixSort } from './Organizers/radixSort';

import numbers from './numbers.json';
import { quickSort } from './Organizers/quickSort';
import { heapSort } from './Organizers/heapSort';
import { timSort } from './Organizers/timSort';

var n1 = [...numbers as number[]];
var n2 = [...numbers as number[]];
var n3 = [...numbers as number[]];
var n4 = [...numbers as number[]];
var n5 = [...numbers as number[]];
var n6 = [...numbers as number[]];
var n7 = [...numbers as number[]];

console.time('Radix Sort')
radixSort(n1);
console.timeEnd('Radix Sort')

console.time('Merge Sort')
mergeSort(n2);
console.timeEnd('Merge Sort')

console.time('Quick Sort')
quickSort(n3);
console.timeEnd('Quick Sort')

console.time('Heap Sort')
heapSort(n4);
console.timeEnd('Heap Sort')

console.time('Tim Sort')
timSort(n5);
console.timeEnd('Tim Sort')

console.time('Js Sort')
n6.sort((a, b) => a - b);
console.timeEnd('Js Sort')

console.time('Bubble Sort')
bubbleSort(n7);
console.timeEnd('Bubble Sort')
