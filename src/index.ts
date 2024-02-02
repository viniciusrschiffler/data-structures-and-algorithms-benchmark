import numbers1 from './numbers.json';
import numbers2 from './numbers2.json';

import { radixSort } from "./Organizers/radixSort";
import { binarySearch } from "./Searchers/binarySearch";

(async () => {
    const n11 = [...numbers1 as number[]];
    const n12 = [...numbers2 as number[]];

    const n21 = [...numbers1 as number[]];
    const n22 = [...numbers2 as number[]];

    console.time('new')
    const ord = radixSort(n11);
    const ord2 = radixSort(n12);

    const intersections = getIntersections(ord, ord2);
    const onlyInFirstList = getException(ord, ord2);
    const onlyInSecondList = getException(ord2, ord);
    const repeatedInFirstList = getDuplicated(ord);
    const repeatedInSecondList = getDuplicated(ord2);
    
    console.timeEnd('new')
    
    console.time('old')
    const intersectionsOld = n21.filter(x => n22.includes(x));
    const onlyInFirstListOld = n21.filter(x => !n22.includes(x));
    const onlyInSecondListOld = n22.filter(x => !n21.includes(x));
    const repeatedInFirstListOld = n21.filter((x, i, self) => self.indexOf(x) !== i);
    const repeatedInSecondListOld = n22.filter((x, i, self) => self.indexOf(x) !== i);
    console.timeEnd('old')


    console.log({
        intersections: {
            old: intersectionsOld.length,
            new: intersections.length,
        },
        onlyInFirstList: {
            old: onlyInFirstListOld.length,
            new: onlyInFirstList.length,
        },
        onlyInSecondList: {
            old: onlyInSecondListOld.length,
            new: onlyInSecondList.length,
        },
        repeatedInFirstList: {
            old: repeatedInFirstListOld.length,
            new: repeatedInFirstList.length,
        },
        repeatedInSecondList: {
            old: repeatedInSecondListOld.length,
            new: repeatedInSecondList.length,
        },
    })


    
})()

function getIntersections(list1: number[], list2: number[]): number[] {
    return list1.filter(x => binarySearch(list2, x) !== -1);
}

function getException(list1: number[], list2: number[]): number[] {
    return list1.filter(x => binarySearch(list2, x) === -1);
}

function getDuplicated(list: number[]): number[] {
    return list.filter((x,i) => binarySearch(list, x) !== i);
}



