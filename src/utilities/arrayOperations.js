export const intersect = (a, b) => {
    var setB = new Set(b);
    return [...new Set(a)].filter(x => setB.has(x));
}