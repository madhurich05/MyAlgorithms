function mergeSort(arrToBeSorted) {

let arrLen = arrToBeSorted.length;

// Our base condition for recursion and if there is only one element, it is sorted
if(arrLen < 2) return;

let mid = Math.ceil(arrToBeSorted.length / 2);

// create 2 arrays to hold left and right partitions
let leftArray = arrToBeSorted.slice(0,mid);
let rightArray = arrToBeSorted.slice(mid, arrLen);

// Sort the left array    
mergeSort(leftArray);

// Sort the right array    
mergeSort(rightArray);
    
// merge both the sorted arrays    
merge(arrToBeSorted,leftArray,rightArray);
}



function merge(arrToBeSorted, leftArray, rightArray) {

    // Each index corresponds to left array, right array and the array to be sorted.
    let leftIdx = 0;
    let rightIdx = 0;
    let arrIndx = 0;

    let leftArrayLen = leftArray.length;
    let rightArrayLen = rightArray.length;

    // While we still have elements from left array and right array
    while (leftIdx < leftArrayLen && rightIdx < rightArrayLen) {
        // If the left array element is less than the right array element, the array element is the left array element which is smaller
        if(leftArray[leftIdx] <= rightArray[rightIdx]) {
            arrToBeSorted[arrIndx] = leftArray[leftIdx];
            leftIdx++; // increment to the next element in the left array
        } else {
            // otherwise the array element is the right array element at the index rightIdx
            arrToBeSorted[arrIndx] = rightArray[rightIdx];
            rightIdx++;
        }
        arrIndx++; // increment the array index to next to accomodate the next element from either left or right array.
    }

    // Remaining elements from left array are added to the array to be sorted
    while(leftIdx < leftArrayLen) {
        arrToBeSorted[arrIndx] = leftArray[leftIdx];
        leftIdx++;
        arrIndx++;
    }

    // Remaining elements from the right array are added to the array to be sorted
    while(rightIdx < rightArrayLen) {
        arrToBeSorted[arrIndx] = rightArray[rightIdx];
        rightIdx++;
        arrIndx++;
    }
}
