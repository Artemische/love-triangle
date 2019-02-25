/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let number = 0;
  for (let i = 0; i < preferences.length; i++) {
    let first = i + 1, second = preferences[i], third = preferences[second - 1];
    if (preferences[third - 1] == first){
      number +=1;
      if (i+1 == preferences[i]){
        number -=1;
      }
    }
  }
  return number/3;
};
