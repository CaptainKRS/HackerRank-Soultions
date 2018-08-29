function minimumSwaps(arr) {
  let swaps = 0;
  let i = 0;

   while (i < arr.length - 1) {
     if (arr[i] - 1 !== i) {
         const nextIndex = arr[i] - 1;
         [arr[i], arr[nextIndex]] = [arr[nextIndex], arr[i]]
         swaps++;
     } else {
       i++;
     }
   }

   return swaps;
 }
