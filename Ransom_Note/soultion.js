function checkMagazine(magazine, note) {
  let map = {};
  let result = true;
  magazine.forEach(word => {
    if (map[word]) map[word] += 1;
    else map[word] = 1;
  });
  note.forEach(word => {
    if (!map[word] || map[word] < 1) result = false;
    else if (map[word] && map[word] > 0) map[word] -= 1;
  });
  console.log(result ? 'Yes' : 'No');
}
