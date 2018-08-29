function sherlockAndAnagrams(s) {
  let totalAnagrams = 0;
  let subStrings = {}
  if(s.length <= 1) return 0;
  for(let i = 0; i < s.length; i++){
      for(let j = i; j< s.length; j++){
          let tempstring = s.substring(i,j+1).split("").sort().join("");
          if(subStrings[tempstring]) subStrings[tempstring] += 1
          else subStrings[tempstring] = 1
      }
  }
  for(let k in subStrings) {
      if(subStrings[k] > 1) {
          let temp = (subStrings[k]) * (subStrings[k] -1)/2
          totalAnagrams += temp
      }
  }
  return totalAnagrams
}
