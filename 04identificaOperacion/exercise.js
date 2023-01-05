export function solution(numbers) {
    var result = 0;
    var x = [];
    for (var i = 1; i < numbers.length; i++) {
      result = numbers[i]/9;
      x.push(result);
    }
    return result;
  }