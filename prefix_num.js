function prefixCount(words, pref) {
    let count = 0;
    for (let word of words) {
        if (word.startsWith(pref)) {
            count++;
        }
    }
    return count;
}
const words = ["pay","attention","practice","attend"];
const pref = "at";
console.log(prefixCount(words, pref)); 