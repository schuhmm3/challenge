
export const countTotalUniquePatents = (arr:any[]) => {
  return arr.map(element => element?.docs).reduce((acc,current) => acc + current, 0)
}

export const sortTable = (a:any,b:any) => {
  if(a.chemical_type < b.chemical_type){
      return -1;
  }

  if(a.chemical_type > b.chemical_type){
    return 1;
}
  return 0;

}
