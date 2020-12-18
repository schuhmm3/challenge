
export const countTotalUniquePatents = (arr:any[]) => {
   if(Array.isArray(arr) && arr.length > 0){
      return arr.map(element => element ?.patent_number ).reduce((acc, curr, ind, array) => {

         if(array.lastIndexOf(curr) === ind){
           return ++acc;
         }
         return acc;
     }, 0);
   }
    return [];
}