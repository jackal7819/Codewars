const rentalCarCost = d => {
    if (d < 3) return d * 40;
    if (d < 7) return d * 40 - 20;
    if (d > 6) return d * 40 - 50;
};