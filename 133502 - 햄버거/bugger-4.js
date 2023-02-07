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
