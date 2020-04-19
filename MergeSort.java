import java.util.Arrays;

public class MergeSort {

	private void mergeSort(int[] a) {
		
		int arrLen = a.length;
		if (arrLen < 2) return; // Our base condition for recursion and if there is only element, its already sorted.
		
		int mid = arrLen / 2;
		
		// create a left and right array to hold the temporary partitions
		int[] left = new int[mid];
		int[] right = new int[arrLen - mid];
		
		
		// Left array holds the first half of the array to be sorted. 
		// from 0 --> mid - 1
		for (int i=0; i< mid ; i++) 
			left[i] = a[i];
		
		// Right array holds the second half of the array to be sorted. 
		// from mid --> arr length
		for (int j=mid; j<= (arrLen -1); j++) 
			right[j - mid] = a[j];
		
		// Recursively call the mergeSort on left array 
		mergeSort(left);
		
		// Recursively call the mergeSort on right array 
		mergeSort(right);
		
		//now merge both sorted arrays
		merge(a, left, right);
		
	}
	private void merge(int[] a, int[] left, int[] right) {
		int leftArrLen = left.length;
		int rightArrLen = right.length;
		
		int li=0, ri=0, ai=0;
		
		while(li < leftArrLen && ri < rightArrLen) {
			if(left[li] <= right[ri]) {
				a[ai] = left[li];
				li++;
			} else {
				a[ai] = right[ri];
				ri++;
			}
			ai++;
		}
		
		// Add remaining elements in left array to the array
		while(li < leftArrLen) {
			a[ai] = left[li];
			li++;
			ai++;
		}
		
		// Add remaining elements in right array to the array

		while(ri < rightArrLen) {
			a[ai] = right[ri];
			ri++;
			ai++;
		}

	}	
	
	public static void main(String args[]) {
		MergeSort ms = new MergeSort();
		int[] arr = {1,2, 7, 6, 3, 5, 7};
		System.out.println("Before sort:" + Arrays.toString(arr));
		
		ms.mergeSort(arr);
		System.out.println("After sort " + Arrays.toString(arr));

	}
}
