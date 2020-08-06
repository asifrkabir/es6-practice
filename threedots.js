const ages = [11, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 26, 21];
const allAges = ages.concat(ages2).concat(ages3).concat([5]);
const allAges2 = [...ages, ...ages2, ...ages3, 5];

const business = 650;
const minister = 450;
const sochib = 250;
const taka = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...taka);

console.log(allAges);
console.log(allAges2);
console.log(maximum);