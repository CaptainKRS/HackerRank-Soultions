function twoStrings(s1, s2) {
  let answer = 0
  s1 = s1.split("");
  s1.forEach(letter => {
      if(s2.indexOf(letter) !== -1) answer++
  })

  return answer ? "YES" : "NO"
}
