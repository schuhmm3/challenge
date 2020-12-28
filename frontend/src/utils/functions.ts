
export const countTotalUniquePatents = (arr:any[]) => {
  if(Array.isArray(arr) && arr.length > 0){
    return arr.map(element => element.docs).reduce((acc,current) => acc + current, 0)
  }
  return 0;
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

export const dynamicSort = (key:string, order = 'asc')  => {
  return function innerSort(a:any, b:any) {
    // eslint-disable-next-line no-prototype-builtins
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}
