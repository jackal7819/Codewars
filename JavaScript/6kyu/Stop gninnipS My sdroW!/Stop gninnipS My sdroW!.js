function spinWords(string) {
    let arr = string.split(' ');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 4) {
        arr[i] = arr[i].split('').reverse().join('');
      }
    }
    return arr.join(' ');
  }