function solution(ingredient) {
  let answer = 0;
  let arr = [];

  ingredient.forEach((el) => {
    arr.push(el);

    const [a, b, c, d] = arr.slice(-4);

    if (a === 1 && b === 2 && c === 3 && d === 1) {
      arr.splice(-4, 4);
      answer++;
    }
  });

  return answer;
}


console.log(solution([1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1])) // 3
console.log(solution([1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 3, 3, 1, 2, 3, 1, 3, 3, 3, 2, 1, 2, 3, 1])) // 5
console.log(solution([1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 3, 3, 1])) // 3
console.log(solution([1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1])) // 3
console.log(solution([1, 2, 2, 3, 1])) // 0
console.log(solution([1, 1, 2, 3, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 1])) // 3
console.log(solution([1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1])) // 3
console.log(solution([1, 2, 3, 1, 1, 2, 3, 1, 1, 1, 2, 3, 1, 2, 3, 1])) // 4
console.log(solution([1, 3, 1, 2, 1, 3, 1, 1, 2, 1, 3, 1, 1, 2])); // 0
console.log(solution([1, 2, 3, 1])); // 1
console.log(solution([1, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1])) // 6
