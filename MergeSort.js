function mergeSort(arrToBeSorted) {

let arrLen = arrToBeSorted.length;

if(arrLen < 2) return;

let mid = Math.ceil(arrToBeSorted.length / 2);

// create 2 arrays to hold left and right partitions

let leftArray = arrToBeSorted.slice(0,mid);
let rightArray = arrToBeSorted.slice(mid, arrLen);

mergeSort(leftArray);
mergeSort(rightArray);
merge(arrToBeSorted,leftArray,rightArray);
}



function merge(arrToBeSorted, leftArray, rightArray) {

    let leftIdx = 0;
    let rightIdx = 0;
    let arrIndx = 0;

    let leftArrayLen = leftArray.length;
    let rightArrayLen = rightArray.length;

    while (leftIdx < leftArrayLen && rightIdx < rightArrayLen) {
        if(leftArray[leftIdx] <= rightArray[rightIdx]) {
            arrToBeSorted[arrIndx] = leftArray[leftIdx];
            leftIdx++;
        } else {
            arrToBeSorted[arrIndx] = rightArray[rightIdx];
            rightIdx++;
        }
        arrIndx++;
    }

    while(leftIdx < leftArrayLen) {
        arrToBeSorted[arrIndx] = leftArray[leftIdx];
        leftIdx++;
        arrIndx++;
    }

    while(rightIdx < rightArrayLen) {
        arrToBeSorted[arrIndx] = rightArray[rightIdx];
        rightIdx++;
        arrIndx++;
    }
}
