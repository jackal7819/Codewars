const doubleChar = (str) =>
    str
        .split('')
        .map((el) => el + el)
        .join('');
