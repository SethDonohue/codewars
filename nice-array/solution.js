function isNice(arr){
  console.log(arr);
  console.log(arr.every(x => arr.includes(x-1) || arr.includes(x+1)));

  return arr.length>1 && arr.every(x => arr.includes(x-1) || arr.includes(x+1));
}
