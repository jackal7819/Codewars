function arrayDiff(a, b) {
    const arr = [];
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) == -1) {
            arr.push(a[i]);
        }
    }
    return arr;
}
