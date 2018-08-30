function sherlockAndAnagrams(s) {
  let totalAnagrams = 0;
  let hashOfStrings = {}
  if(s.length <= 1) return 0;
  for(let i = 0; i < s.length; i++){
      for(let j = i; j< s.length; j++){
          let tempstring = s.substring(i,j+1).split("").sort().join("");
          if(hashOfStrings[tempstring]) hashOfStrings[tempstring] += 1
          else hashOfStrings[tempstring] = 1
      }
  }
  for(let k in hashOfStrings) {
      if(hashOfStrings[k] > 1) {
          let temp = (hashOfStrings[k]) * (hashOfStrings[k] -1)/2
          totalAnagrams += temp
      }
  }
  return totalAnagrams
}
